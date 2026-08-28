import React from 'react';
import { Box, Text } from 'ink';

export function HelpModal() {
  return (
    <Box flexDirection="column" borderStyle="double" borderColor="yellowBright" paddingX={2} paddingY={1} marginY={1}>
      <Box justifyContent="center" marginBottom={1}>
        <Text bold color="yellowBright">
          📖 LAZYGIT-STYLE KEYBINDINGS & SHORTCUTS
        </Text>
      </Box>

      {/* 1. Panel Switching */}
      <Box flexDirection="column" marginBottom={1}>
        <Text bold color="cyanBright">--- Lazygit Panel Navigation ---</Text>
        <Text>
          <Text bold color="greenBright">  [1..3]</Text>
          <Text color="white">          Direct jump to Panel (1:Task, 2:Editor, 3:Ollama AI)</Text>
        </Text>
        <Text>
          <Text bold color="greenBright">  [Tab / ] / l]</Text>
          <Text color="white">   Cycle to next panel</Text>
        </Text>
        <Text>
          <Text bold color="greenBright">  [Shift+Tab / []</Text>
          <Text color="white">  Cycle to previous panel</Text>
        </Text>
        <Text>
          <Text bold color="greenBright">  [i / e / Enter]</Text>
          <Text color="white"> Focus / Jump into Code Editor (Panel 2)</Text>
        </Text>
        <Text>
          <Text bold color="greenBright">  [Esc]</Text>
          <Text color="white">            Unfocus active panel / Return to navigation</Text>
        </Text>
        <Text>
          <Text bold color="greenBright">  [Ctrl+O / _ / +]</Text>
          <Text color="white"> Toggle / Zoom Ollama AI Assistant side panel</Text>
        </Text>
      </Box>

      {/* 2. Challenge & Assistance */}
      <Box flexDirection="column" marginBottom={1}>
        <Text bold color="cyanBright">--- Challenge & Assistance ---</Text>
        <Text>
          <Text bold color="yellow">  [h / Ctrl+K]</Text>
          <Text color="white">    Toggle challenge hint</Text>
        </Text>
        <Text>
          <Text bold color="magentaBright">  [s / Ctrl+J]</Text>
          <Text color="white">    Reveal full reference solution / answer</Text>
        </Text>
        <Text>
          <Text bold color="cyanBright">  [r / Ctrl+S]</Text>
          <Text color="white">    Run & validate code against challenge</Text>
        </Text>
        <Text>
          <Text bold color="white">  [n / Ctrl+N]</Text>
          <Text color="white">    Next challenge</Text>
        </Text>
        <Text>
          <Text bold color="white">  [p / Ctrl+P]</Text>
          <Text color="white">    Previous challenge</Text>
        </Text>
      </Box>

      {/* 3. Ollama AI Controls */}
      <Box flexDirection="column" marginBottom={1}>
        <Text bold color="cyanBright">--- Ollama AI Assistant ---</Text>
        <Text>
          <Text bold color="yellow">  [Ctrl+T]</Text>
          <Text color="white">        Cycle installed local models</Text>
        </Text>
        <Text>
          <Text bold color="magentaBright">  [Ctrl+L]</Text>
          <Text color="white">        Clear assistant conversation</Text>
        </Text>
        <Text>
          <Text bold color="white">  [↑ / ↓]</Text>
          <Text color="white">         Scroll assistant response viewport</Text>
        </Text>
      </Box>

      {/* 4. Global & Menu */}
      <Box flexDirection="column" marginBottom={1}>
        <Text bold color="cyanBright">--- Menu & Global ---</Text>
        <Text>
          <Text bold color="white">  [m / Ctrl+M]</Text>
          <Text color="white">    Open Category Menu (drill-down & search)</Text>
        </Text>
        <Text>
          <Text bold color="white">  [j / k / ↑ / ↓]</Text>
          <Text color="white"> Navigate lists, trees, and scrollable panels</Text>
        </Text>
        <Text>
          <Text bold color="yellowBright">  [?]</Text>
          <Text color="white">              Toggle this help screen</Text>
        </Text>
        <Text>
          <Text bold color="white">  [q / Ctrl+C]</Text>
          <Text color="white">    Go back or quit application</Text>
        </Text>
      </Box>

      <Box justifyContent="center">
        <Text color="gray">Press <Text bold color="white">[?]</Text>, <Text bold color="white">[Esc]</Text>, or <Text bold color="white">[q]</Text> to close this help screen.</Text>
      </Box>
    </Box>
  );
}
