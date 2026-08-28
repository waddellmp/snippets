import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Box, Text, useInput } from 'ink';
import { getOllamaModels, streamOllama } from '../services/ollama.js';

const VIEWPORT_LINES = 11;
const PANE_WRAP_WIDTH = 46;

function wrapTextToLines(text, maxWidth = PANE_WRAP_WIDTH) {
  if (!text) return [];
  const rawLines = text.split('\n');
  const output = [];

  for (const rawLine of rawLines) {
    if (rawLine.length === 0) {
      output.push('');
      continue;
    }
    if (rawLine.length <= maxWidth) {
      output.push(rawLine);
      continue;
    }

    const words = rawLine.split(' ');
    let currentLine = '';

    for (const word of words) {
      if ((currentLine ? currentLine + ' ' + word : word).length <= maxWidth) {
        currentLine = currentLine ? currentLine + ' ' + word : word;
      } else {
        if (currentLine) output.push(currentLine);
        // If a single word is longer than maxWidth, break it
        if (word.length > maxWidth) {
          let remainder = word;
          while (remainder.length > maxWidth) {
            output.push(remainder.slice(0, maxWidth));
            remainder = remainder.slice(maxWidth);
          }
          currentLine = remainder;
        } else {
          currentLine = word;
        }
      }
    }
    if (currentLine) output.push(currentLine);
  }

  return output;
}

export function OllamaPane({ challenge, userCode, lastResult, isActive = false, onClose }) {
  const [models, setModels] = useState([]);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [promptInput, setPromptInput] = useState('');
  const [lastQuestion, setLastQuestion] = useState('');
  const [latestResponse, setLatestResponse] = useState('');
  const [scrollOffset, setScrollOffset] = useState(0); // 0 = pinned to bottom (newest)
  const [errorMsg, setErrorMsg] = useState(null);
  const abortControllerRef = useRef(null);

  // Discover available models on mount
  useEffect(() => {
    getOllamaModels().then(available => {
      if (available && available.length > 0) {
        setModels(available);
        const preferred = available.findIndex(m =>
          m.includes('code') || m.includes('deepseek') || m.includes('qwen')
        );
        if (preferred >= 0) {
          setCurrentModelIndex(preferred);
        }
      }
    });
  }, []);

  // Reset conversation when challenge changes
  useEffect(() => {
    setLastQuestion('');
    setLatestResponse('');
    setErrorMsg(null);
    setPromptInput('');
    setScrollOffset(0);
  }, [challenge.id]);

  const activeModel = models[currentModelIndex] || 'deepseek-v4-flash:cloud';

  const sendPrompt = async (userText) => {
    if (!userText.trim() || isGenerating) return;

    const question = userText.trim();
    setPromptInput('');
    setLastQuestion(question);
    setLatestResponse('');
    setScrollOffset(0);
    setErrorMsg(null);
    setIsGenerating(true);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const systemPrompt = `You are a helpful, concise interactive terminal and code tutor.
You help learners master Bash shell scripting, PostgreSQL SQL, and Ruby.
Guidelines:
- Provide clear, direct, and concise explanations suited for a terminal side-pane.
- When helping with code, guide and explain without unsolicited full answers unless requested.`;

    const contextPrefix = `[Context]
Language: ${challenge.type || 'bash'}
Challenge: ${challenge.title}
Task: ${challenge.task}
Learner Code:
\`\`\`
${userCode || '(empty)'}
\`\`\`
${lastResult && lastResult.stderr ? `Last Stderr:\n${lastResult.stderr}\n` : ''}${lastResult && !lastResult.success && lastResult.actualOutput ? `Last Output:\n${lastResult.actualOutput}\n` : ''}
[User Question]
${question}`;

    try {
      await streamOllama({
        model: activeModel,
        prompt: contextPrefix,
        systemPrompt,
        signal: controller.signal,
        onChunk: (chunk, full) => {
          setLatestResponse(full);
          setScrollOffset(0); // auto-follow stream
        }
      });
    } catch (err) {
      if (err.name !== 'AbortError') {
        setErrorMsg(err.message || 'Ollama connection failed.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  // Convert latest response into wrapped lines for fixed-height scrolling
  const wrappedLines = useMemo(() => {
    return wrapTextToLines(latestResponse, PANE_WRAP_WIDTH);
  }, [latestResponse]);

  const totalLines = wrappedLines.length;
  const maxScroll = Math.max(0, totalLines - VIEWPORT_LINES);

  // Compute slice of lines to show
  const currentEnd = Math.max(VIEWPORT_LINES, totalLines - scrollOffset);
  const currentStart = Math.max(0, currentEnd - VIEWPORT_LINES);
  const visibleLines = wrappedLines.slice(currentStart, currentEnd);

  useInput((input, key) => {
    if (!isActive) return;

    // 1. Submit prompt on Enter
    if (key.return) {
      if (promptInput.trim().length > 0) {
        sendPrompt(promptInput);
      }
      return;
    }

    // 2. Scrolling with Up / Down / PageUp / PageDown
    if (key.upArrow) {
      setScrollOffset(prev => Math.min(maxScroll, prev + 1));
      return;
    }
    if (key.downArrow) {
      setScrollOffset(prev => Math.max(0, prev - 1));
      return;
    }
    if (key.pageUp) {
      setScrollOffset(prev => Math.min(maxScroll, prev + VIEWPORT_LINES));
      return;
    }
    if (key.pageDown) {
      setScrollOffset(prev => Math.max(0, prev - VIEWPORT_LINES));
      return;
    }

    // 3. Cycle Model with Ctrl+T
    if (key.ctrl && input === 't' && models.length > 1) {
      setCurrentModelIndex(prev => (prev + 1) % models.length);
      return;
    }

    // 4. Clear chat with Ctrl+L
    if (key.ctrl && input === 'l') {
      setLastQuestion('');
      setLatestResponse('');
      setErrorMsg(null);
      setScrollOffset(0);
      return;
    }

    // 5. Backspace
    if (key.backspace || key.delete) {
      setPromptInput(prev => prev.slice(0, -1));
      return;
    }

    // 6. Printable character typing
    const isPrintable =
      input &&
      !key.ctrl &&
      !key.meta &&
      !key.upArrow &&
      !key.downArrow &&
      !key.leftArrow &&
      !key.rightArrow &&
      !key.pageUp &&
      !key.pageDown &&
      !key.tab &&
      !key.escape &&
      !input.includes('\x1b') &&
      input.charCodeAt(0) >= 32;

    if (isPrintable) {
      setPromptInput(prev => prev + input);
    }
  }, { isActive });

  return (
    <Box
      flexDirection="column"
      borderStyle="round"
      borderColor={isActive ? 'greenBright' : 'gray'}
      paddingX={1}
      paddingY={0}
      height="100%"
      flexGrow={1}
    >
      {/* Header */}
      <Box justifyContent="space-between" borderStyle="single" borderColor="gray" paddingX={1} marginBottom={0}>
        <Box>
          <Text bold color={isActive ? 'greenBright' : 'gray'}>[3] </Text>
          <Text bold color={isActive ? 'greenBright' : 'white'}>🤖 OLLAMA ASSISTANT </Text>
          <Text color="gray">{models.length > 0 ? '🟢' : '🔴'}</Text>
        </Box>
        <Box>
          <Text color="gray">Model: </Text>
          <Text bold color="yellow">{activeModel.split(':')[0]}</Text>
          {models.length > 1 && <Text color="gray"> [Ctrl+T]</Text>}
        </Box>
      </Box>

      {/* Pinned User Question Banner (Always fixed & visible!) */}
      {lastQuestion ? (
        <Box borderStyle="single" borderColor="magenta" paddingX={1} marginY={0}>
          <Text bold color="magentaBright">👤 Q: </Text>
          <Text color="white" bold>
            {lastQuestion.length > 38 ? lastQuestion.slice(0, 36) + '...' : lastQuestion}
          </Text>
        </Box>
      ) : (
        <Box borderStyle="single" borderColor="gray" paddingX={1} marginY={0}>
          <Text color="gray">💡 Type any question below to ask Ollama...</Text>
        </Box>
      )}

      {/* Scrollable Response Viewport (Fixed Height, Never pushes header out of view) */}
      <Box
        flexDirection="column"
        borderStyle="single"
        borderColor={isGenerating ? 'yellow' : (errorMsg ? 'red' : 'blueBright')}
        paddingX={1}
        height={VIEWPORT_LINES + 2}
        marginY={0}
      >
        {/* Scroll Up Indicator */}
        {currentStart > 0 ? (
          <Text color="cyan" dimColor>▲ {currentStart} lines above (↑ to scroll up)</Text>
        ) : (
          <Text color="gray" dimColor>--- AI Response ---</Text>
        )}

        {/* Response Body */}
        {isGenerating && latestResponse.length === 0 ? (
          <Text color="yellow">⏳ Thinking with {activeModel.split(':')[0]}...</Text>
        ) : errorMsg ? (
          <Text color="red">✖ {errorMsg}</Text>
        ) : visibleLines.length === 0 ? (
          <Text color="gray">No response yet. Ask a question below.</Text>
        ) : (
          visibleLines.map((line, lIdx) => (
            <Text key={lIdx} color="white">
              {line || ' '}
            </Text>
          ))
        )}

        {/* Scroll Down Indicator */}
        {scrollOffset > 0 && (
          <Text color="cyan" dimColor>▼ {scrollOffset} lines below (↓ to scroll down)</Text>
        )}
      </Box>

      {/* Direct Prompt Input Box */}
      <Box
        flexDirection="row"
        borderStyle="single"
        borderColor={isActive ? 'cyanBright' : 'gray'}
        paddingX={1}
        marginTop={0}
      >
        <Text bold color={isActive ? 'cyanBright' : 'gray'}>
          💬 Ask: {' '}
        </Text>
        {promptInput.length === 0 && !isActive ? (
          <Text color="gray">Press [Tab] to focus and ask Ollama...</Text>
        ) : promptInput.length === 0 && isActive ? (
          <Box>
            <Text color="gray">Type question & press Enter...</Text>
            <Text inverse color="whiteBright"> </Text>
          </Box>
        ) : (
          <Box>
            <Text color="white">{promptInput}</Text>
            {isActive && <Text inverse color="whiteBright"> </Text>}
          </Box>
        )}
      </Box>

      {/* Pane Footer */}
      <Box justifyContent="space-between" marginTop={0} paddingX={1}>
        <Text color={isActive ? 'greenBright' : 'gray'}>
          {isActive ? '● Focused (↑/↓ Scroll)' : '○ Inactive [Press 3 / Tab to focus]'}
        </Text>
        <Text color="gray">{isActive ? '[Ctrl+T] Model | [Ctrl+L] Clear' : '[Tab] Focus'}</Text>
      </Box>
    </Box>
  );
}
