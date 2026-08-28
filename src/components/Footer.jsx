import React from 'react';
import { Box, Text } from 'ink';

export function Footer({ showHint, showSolution = false, showOllama = false, focusPanel = 2 }) {
  // Panel-specific contextual shortcuts (Output pane has no shortcuts)
  const renderShortcuts = () => {
    switch (focusPanel) {
      case 1:
        // [1] Challenge Task Focused
        return (
          <Text color="gray">
            <Text bold color="yellow">[h]</Text> {showHint ? 'Hide Hint' : 'Hint'}  |{' '}
            <Text bold color="magentaBright">[s]</Text> {showSolution ? 'Hide Ans' : 'Answer'}  |{' '}
            <Text bold color="greenBright">[i/e/Enter]</Text> Edit  |{' '}
            <Text bold color="cyanBright">[r]</Text> Run  |{' '}
            <Text bold color="white">[Tab]</Text> Next Panel  |{' '}
            <Text bold color="white">[n/p]</Text> Nav
          </Text>
        );

      case 2:
        // [2] Code Editor Focused
        return (
          <Text color="gray">
            <Text bold color="cyanBright">[Ctrl+S / Enter]</Text> Run  |{' '}
            <Text bold color="yellow">[Ctrl+K]</Text> Hint  |{' '}
            <Text bold color="magentaBright">[Ctrl+J]</Text> Answer  |{' '}
            <Text bold color="white">[Tab]</Text> Switch Panel  |{' '}
            <Text bold color="white">[Esc]</Text> Unfocus
          </Text>
        );

      case 3:
        // [3] Ollama Assistant Focused
        return (
          <Text color="gray">
            <Text bold color="greenBright">[Enter]</Text> Send Prompt  |{' '}
            <Text bold color="white">[↑/↓]</Text> Scroll  |{' '}
            <Text bold color="yellow">[Ctrl+T]</Text> Model  |{' '}
            <Text bold color="magentaBright">[Ctrl+L]</Text> Clear  |{' '}
            <Text bold color="white">[Tab]</Text> Editor  |{' '}
            <Text bold color="white">[Ctrl+O]</Text> Toggle
          </Text>
        );

      default:
        return (
          <Text color="gray">
            <Text bold color="greenBright">[1..{showOllama ? '3' : '2'}]</Text> Panels  |{' '}
            <Text bold color="white">[Tab]</Text> Cycle  |{' '}
            <Text bold color="cyanBright">[r]</Text> Run  |{' '}
            <Text bold color="yellowBright">[?]</Text> Help
          </Text>
        );
    }
  };

  const getPanelName = () => {
    switch (focusPanel) {
      case 1: return '[1] Challenge';
      case 2: return '[2] Code Editor';
      case 3: return '[3] Ollama AI';
      default: return `[${focusPanel}]`;
    }
  };

  return (
    <Box borderStyle="single" borderColor="gray" paddingX={1} marginTop={1} justifyContent="space-between">
      <Box>
        {renderShortcuts()}
      </Box>
      <Box>
        <Text color="gray">
          Focus: <Text bold color="greenBright">{getPanelName()}</Text>  |  <Text bold color="white">[m]</Text> Menu  |  <Text bold color="yellowBright">[?]</Text> Help
        </Text>
      </Box>
    </Box>
  );
}
