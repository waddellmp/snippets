import React from 'react';
import { Box, Text } from 'ink';
import { highlightCode } from '../highlighter.js';

export function ChallengeCard({ challenge, showHint, showSolution, isSolved, isActive = false }) {
  const lang = challenge.type || 'bash';

  const getBadge = () => {
    if (challenge.type === 'sql') return { text: '🐘 [SQL] ', color: 'magentaBright' };
    if (challenge.type === 'ruby') return { text: '💎 [RUBY] ', color: 'redBright' };
    return { text: '🐚 [BASH] ', color: 'blueBright' };
  };

  const badge = getBadge();
  const solutionText = challenge.solution || challenge.referenceSolution || challenge.hint || '';

  return (
    <Box
      flexDirection="column"
      borderStyle="round"
      borderColor={isActive ? 'greenBright' : 'gray'}
      paddingX={1}
      marginBottom={1}
    >
      {/* Title Bar */}
      <Box justifyContent="space-between" marginBottom={0}>
        <Box>
          <Text bold color={isActive ? 'greenBright' : 'gray'}>[1] </Text>
          <Text bold color={badge.color}>
            {badge.text}
            {challenge.title}
          </Text>
        </Box>
        {isSolved && (
          <Text bold color="green">
            ✔ COMPLETED
          </Text>
        )}
      </Box>

      {/* Problem Statement */}
      <Box marginY={0}>
        <Text color="white">{challenge.task}</Text>
      </Box>

      {/* Resource Reference */}
      {challenge.resource && (
        <Box marginY={0}>
          <Text color="gray">Resource: </Text>
          <Text color="cyan">{challenge.resource}</Text>
        </Box>
      )}

      {/* Collapsible Hint Box */}
      {showHint && (
        <Box borderStyle="round" borderColor="yellow" paddingX={1} marginTop={1} flexDirection="column">
          <Text bold color="yellow">
            💡 Hint:
          </Text>
          <Text>{highlightCode(challenge.hint, lang)}</Text>
        </Box>
      )}

      {/* Collapsible Solution / Answer Box */}
      {showSolution && (
        <Box borderStyle="round" borderColor="magentaBright" paddingX={1} marginTop={1} flexDirection="column">
          <Text bold color="magentaBright">
            🔑 Reference Answer / Solution:
          </Text>
          <Text>{highlightCode(solutionText, lang)}</Text>
        </Box>
      )}

      {/* Action Buttons Indicator */}
      <Box marginTop={1} justifyContent="space-between">
        <Text color="gray">
          <Text bold color={showHint ? 'yellow' : 'gray'}>[h]</Text> {showHint ? 'Hide Hint' : 'Toggle Hint'}  |{' '}
          <Text bold color={showSolution ? 'magentaBright' : 'gray'}>[s]</Text> {showSolution ? 'Hide Answer' : 'See Answer'}
        </Text>
        <Text color="gray" dimColor>{isActive ? '● Panel 1 Active' : 'Press 1 to select'}</Text>
      </Box>
    </Box>
  );
}
