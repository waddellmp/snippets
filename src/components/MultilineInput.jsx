import React, { useState, useEffect } from 'react';
import { Box, Text, useInput } from 'ink';
import { highlightCode } from '../highlighter.js';

export function MultilineInput({
  value,
  onChange,
  onSubmit,
  onHelp,
  placeholder = 'Type your command or query here...',
  language = 'bash',
  focus = true
}) {
  const [cursorPos, setCursorPos] = useState(value.length);
  const lang = language;

  // Keep cursor within valid range when value changes externally
  useEffect(() => {
    if (cursorPos > value.length) {
      setCursorPos(value.length);
    }
  }, [value, cursorPos]);

  // Helper to split into lines and find line starts
  const lines = value.split('\n');
  const lineOffsets = [0];
  for (let i = 0; i < lines.length - 1; i++) {
    lineOffsets.push(lineOffsets[i] + lines[i].length + 1);
  }

  // Get current line index and column from cursorPos
  const getCurrentLineAndCol = (pos) => {
    let lineIdx = 0;
    for (let i = 0; i < lineOffsets.length; i++) {
      if (pos >= lineOffsets[i]) {
        lineIdx = i;
      } else {
        break;
      }
    }
    const colIdx = pos - lineOffsets[lineIdx];
    return { lineIdx, colIdx };
  };

  useInput((input, key) => {
    if (!focus) return;

    // 1. Submit Shortcuts:
    // Ctrl+S (Save), Ctrl+R (Run), Ctrl+D (Done), Ctrl+E (Execute)
    // or Meta+Enter / Ctrl+Enter escape sequences
    const isSubmitShortcut =
      (key.ctrl && (input === 's' || input === 'r' || input === 'd' || input === 'e')) ||
      (key.meta && (key.return || input === '\r' || input === '\n')) ||
      (key.ctrl && key.return);

    // Trigger help if '?' is typed on empty prompt
    if (input === '?' && value === '') {
      if (onHelp) {
        onHelp();
        return;
      }
    }

    if (isSubmitShortcut) {
      if (value.trim().length > 0) {
        onSubmit(value);
      }
      return;
    }

    // 2. Alt+Enter / Meta+Enter / Shift+Enter for explicit newline
    if (key.meta && (key.return || input === '\r' || input === '\n')) {
      const updated = value.slice(0, cursorPos) + '\n' + value.slice(cursorPos);
      onChange(updated);
      setCursorPos(prev => prev + 1);
      return;
    }

    // 3. Enter key handling:
    if (key.return) {
      // Single line: Enter submits directly!
      if (lines.length === 1 && !value.endsWith('\\')) {
        if (value.trim().length > 0) {
          onSubmit(value);
        }
        return;
      }

      // If line ends with '\', strip '\' and insert newline
      if (value.endsWith('\\')) {
        const cleaned = value.slice(0, -1) + '\n';
        onChange(cleaned);
        setCursorPos(cleaned.length);
        return;
      }

      const { lineIdx } = getCurrentLineAndCol(cursorPos);

      // Multiline mode: If on a blank line at the end, Double Enter submits!
      if (lines.length > 1 && lineIdx === lines.length - 1 && lines[lineIdx].trim() === '') {
        if (value.trim().length > 0) {
          onSubmit(value.trim());
        }
        return;
      }

      // Otherwise in multiline, Enter creates a new line
      const updated = value.slice(0, cursorPos) + '\n' + value.slice(cursorPos);
      onChange(updated);
      setCursorPos(prev => prev + 1);
      return;
    }

    // 4. Backspace / Delete
    if (key.backspace || key.delete) {
      if (cursorPos > 0) {
        const updated = value.slice(0, cursorPos - 1) + value.slice(cursorPos);
        onChange(updated);
        setCursorPos(prev => prev - 1);
      }
      return;
    }

    // 5. Horizontal Navigation (Left / Right)
    if (key.leftArrow) {
      setCursorPos(prev => Math.max(0, prev - 1));
      return;
    }
    if (key.rightArrow) {
      setCursorPos(prev => Math.min(value.length, prev + 1));
      return;
    }

    // 6. Vertical Navigation (Up / Down)
    if (key.upArrow) {
      const { lineIdx, colIdx } = getCurrentLineAndCol(cursorPos);
      if (lineIdx > 0) {
        const targetLine = lineIdx - 1;
        const targetLineLen = lines[targetLine].length;
        const targetCol = Math.min(colIdx, targetLineLen);
        setCursorPos(lineOffsets[targetLine] + targetCol);
      }
      return;
    }
    if (key.downArrow) {
      const { lineIdx, colIdx } = getCurrentLineAndCol(cursorPos);
      if (lineIdx < lines.length - 1) {
        const targetLine = lineIdx + 1;
        const targetLineLen = lines[targetLine].length;
        const targetCol = Math.min(colIdx, targetLineLen);
        setCursorPos(lineOffsets[targetLine] + targetCol);
      }
      return;
    }

    // 7. Character input (including multiline pastes)
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
      !key.return &&
      !key.escape &&
      !input.includes('\x1b') &&
      (input === '\n' || input.charCodeAt(0) >= 32);

    if (isPrintable) {
      const updated = value.slice(0, cursorPos) + input + value.slice(cursorPos);
      onChange(updated);
      setCursorPos(prev => prev + input.length);
    }
  }, { isActive: focus });

  return (
    <Box flexDirection="column" width="100%">
      {lines.length === 1 && lines[0] === '' ? (
        <Box>
          <Text color="gray">{placeholder}</Text>
          {focus && <Text inverse> </Text>}
        </Box>
      ) : (
        lines.map((line, idx) => {
          const lineStart = lineOffsets[idx];
          const lineEnd = lineStart + line.length;
          const isCursorOnLine = focus && cursorPos >= lineStart && cursorPos <= lineEnd;
          const lineCursorOffset = cursorPos - lineStart;

          return (
            <Box key={idx} flexDirection="row">
              <Text color="cyan" dimColor>
                {String(idx + 1).padStart(2, ' ')} │{' '}
              </Text>
              {isCursorOnLine ? (
                lineCursorOffset >= line.length ? (
                  <Text>
                    <Text>{highlightCode(line, lang)}</Text>
                    <Text inverse color="whiteBright"> </Text>
                  </Text>
                ) : (
                  <Text>
                    <Text>{highlightCode(line.slice(0, lineCursorOffset), lang)}</Text>
                    <Text inverse color="whiteBright">
                      {line[lineCursorOffset]}
                    </Text>
                    <Text>{highlightCode(line.slice(lineCursorOffset + 1), lang)}</Text>
                  </Text>
                )
              ) : (
                <Text>{highlightCode(line, lang) || ' '}</Text>
              )}
            </Box>
          );
        })
      )}
    </Box>
  );
}
