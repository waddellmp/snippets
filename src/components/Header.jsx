import React from 'react';
import { Box, Text } from 'ink';

export function Header({ currentCategory, currentIndex, totalChallenges, solvedCount }) {
  return (
    <Box flexDirection="column" marginBottom={1}>
      <Box borderStyle="round" borderColor="cyan" paddingX={1} justifyContent="space-between">
        <Text bold color="cyanBright">
          ⚡ BASH TERMINAL PRACTICE LAB
        </Text>
        <Text color="yellow">
          Solved: {solvedCount}/{totalChallenges}
        </Text>
      </Box>
      <Box justifyContent="space-between" paddingX={1}>
        <Text color="gray">
          Category: <Text bold color="white">{currentCategory}</Text>
        </Text>
        <Text color="gray">
          Challenge: <Text bold color="greenBright">{currentIndex + 1}</Text> of <Text bold>{totalChallenges}</Text>
        </Text>
      </Box>
    </Box>
  );
}
