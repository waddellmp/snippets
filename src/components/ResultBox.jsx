import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';
import { highlightCode } from '../highlighter.js';

const RAINBOW_COLORS = [
  'magentaBright',
  'cyanBright',
  'yellowBright',
  'greenBright',
  'redBright',
  'blueBright'
];

export function ResultBox({ result, isRunning, language = 'bash' }) {
  const lang = language;
  const [rainbowIndex, setRainbowIndex] = useState(0);

  // Animate rainbow border cycle when challenge is solved correctly
  useEffect(() => {
    if (!result?.success) return;

    const interval = setInterval(() => {
      setRainbowIndex(prev => (prev + 1) % RAINBOW_COLORS.length);
    }, 500);

    return () => clearInterval(interval);
  }, [result?.success]);

  if (isRunning) {
    return (
      <Box
        borderStyle="round"
        borderColor="yellow"
        paddingX={1}
        marginY={1}
      >
        <Text color="yellow">⏳ Executing in subshell...</Text>
      </Box>
    );
  }

  if (!result) {
    return (
      <Box
        flexDirection="column"
        borderStyle="round"
        borderColor="gray"
        paddingX={1}
        marginY={1}
      >
        <Text color="gray" dimColor>Execution Output (Results will appear here upon run)</Text>
      </Box>
    );
  }

  if (result.success) {
    const currentRainbowColor = RAINBOW_COLORS[rainbowIndex];

    return (
      <Box
        flexDirection="column"
        borderStyle="round"
        borderColor={currentRainbowColor}
        paddingX={1}
        marginY={1}
      >
        <Box justifyContent="space-between">
          <Text bold color={currentRainbowColor}>
            ✨ 🎉 CORRECT! Output matches expected. ✨
          </Text>
          <Text bold color={currentRainbowColor}>[PASS]</Text>
        </Box>
        <Box marginTop={0}>
          <Text color="gray">Result: </Text>
          <Text>{highlightCode(result.actualOutput, lang) || <Text color="greenBright">(empty)</Text>}</Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      flexDirection="column"
      borderStyle="round"
      borderColor="red"
      paddingX={1}
      marginY={1}
    >
      <Box justifyContent="space-between">
        <Text bold color="red">
          ✖ INCORRECT / OUTPUT MISMATCH
        </Text>
        <Text color="red" bold>FAIL</Text>
      </Box>
      <Box marginTop={0}>
        <Text color="gray">Expected: </Text>
        <Text>{highlightCode(result.expectedOutput, lang)}</Text>
      </Box>
      <Box>
        <Text color="gray">Actual:   </Text>
        <Text>{highlightCode(result.actualOutput, lang) || <Text color="yellow">(empty output)</Text>}</Text>
      </Box>
      {result.stderr && (
        <Box marginTop={0} flexDirection="column">
          <Text color="red">Stderr:</Text>
          <Text color="redBright">{result.stderr}</Text>
        </Box>
      )}
    </Box>
  );
}
