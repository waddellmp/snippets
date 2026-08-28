import React, { useState } from 'react';
import { Box, Text, useInput, useApp } from 'ink';
import { MultilineInput } from './components/MultilineInput.jsx';
import { CATEGORIES, CHALLENGES } from './challenges/index.js';
import { validateCommand } from './validator.js';
import { Header } from './components/Header.jsx';
import { ChallengeCard } from './components/ChallengeCard.jsx';
import { ResultBox } from './components/ResultBox.jsx';
import { Footer } from './components/Footer.jsx';
import { CategorySelect } from './components/CategorySelect.jsx';
import { HelpModal } from './components/HelpModal.jsx';
import { OllamaPane } from './components/OllamaPane.jsx';

/**
 * Fisher-Yates shuffle helper to randomize challenge order
 */
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Filter challenges by category or domain
 */
function getChallengesForCategory(cat) {
  if (cat === 'all') return CHALLENGES;
  if (cat === 'ruby') return CHALLENGES.filter(c => c.domain === 'ruby');
  if (cat === 'sql') return CHALLENGES.filter(c => c.domain === 'sql');
  if (cat === 'bash') return CHALLENGES.filter(c => c.domain === 'bash');
  return CHALLENGES.filter(c => c.category === cat || c.subcategory === cat);
}

export function App() {
  const { exit } = useApp();
  const [view, setView] = useState('menu'); // 'menu' | 'challenge'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeChallenges, setActiveChallenges] = useState(() => shuffleArray(CHALLENGES));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [commandInput, setInputCommand] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showOllama, setShowOllama] = useState(true); // Enabled by default
  const [focusPanel, setFocusPanel] = useState(2); // 1: Challenge | 2: Editor | 3: Ollama Assistant
  const [solvedChallenges, setSolvedChallenges] = useState(new Set());

  const currentChallenge = activeChallenges[currentIndex] || activeChallenges[0];

  const handleCategorySelect = (item) => {
    const cat = item.value;
    setSelectedCategory(cat);
    const matched = getChallengesForCategory(cat);
    // Randomize challenge order for the picked category/subject
    setActiveChallenges(shuffleArray(matched));
    setCurrentIndex(0);
    setInputCommand('');
    setResult(null);
    setShowHint(false);
    setShowSolution(false);
    setShowHelp(false);
    setFocusPanel(2);
    setView('challenge');
  };

  const handleSelectChallenge = (challenge) => {
    const cat = challenge.category || challenge.domain || 'all';
    setSelectedCategory(cat);
    const matched = getChallengesForCategory(cat);
    const remaining = matched.filter(c => c.id !== challenge.id);
    // Put selected challenge first and randomize remaining in category
    setActiveChallenges([challenge, ...shuffleArray(remaining)]);
    setCurrentIndex(0);
    setInputCommand('');
    setResult(null);
    setShowHint(false);
    setShowSolution(false);
    setShowHelp(false);
    setFocusPanel(2);
    setView('challenge');
  };

  const handleSubmit = async () => {
    if (!commandInput.trim() || isRunning) return;

    setIsRunning(true);
    setResult(null);

    const res = await validateCommand(commandInput, currentChallenge);
    setResult(res);
    setIsRunning(false);

    if (res.success) {
      setSolvedChallenges(prev => new Set(prev).add(currentChallenge.id));
    }
  };

  const handleNext = () => {
    if (currentIndex < activeChallenges.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setInputCommand('');
      setResult(null);
      setShowHint(false);
      setShowSolution(false);
      setShowHelp(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setInputCommand('');
      setResult(null);
      setShowHint(false);
      setShowSolution(false);
      setShowHelp(false);
    }
  };

  // Lazygit panel cycle helper (Panels: 1: Challenge, 2: Code Editor, 3: Ollama)
  const cyclePanelForward = () => {
    setFocusPanel(prev => {
      const max = showOllama ? 3 : 2;
      return prev >= max ? 1 : prev + 1;
    });
  };

  const cyclePanelBackward = () => {
    setFocusPanel(prev => {
      const max = showOllama ? 3 : 2;
      return prev <= 1 ? max : prev - 1;
    });
  };

  // Keyboard navigation & Lazygit shortcuts
  useInput((input, key) => {
    // 1. If Help modal is active, dismiss on any key
    if (showHelp) {
      if (key.escape || key.return || input === '?' || input === 'q') {
        setShowHelp(false);
      }
      return;
    }

    // 2. Global Hotkeys active in all modes
    if (view === 'challenge') {
      // Toggle / Zoom Ollama side pane with Ctrl+O or '_' or '+'
      if ((key.ctrl && (input === 'o' || input === 'a')) || input === '_' || input === '+') {
        setShowOllama(prev => {
          const next = !prev;
          if (!next && focusPanel === 3) setFocusPanel(2);
          return next;
        });
        return;
      }

      // Quick Toggle Hint (Ctrl+K) and Toggle Answer (Ctrl+J)
      if (key.ctrl && input === 'k') {
        setShowHint(prev => !prev);
        return;
      }
      if (key.ctrl && input === 'j') {
        setShowSolution(prev => !prev);
        return;
      }

      // Next / Previous challenge (Ctrl+N / Ctrl+P)
      if (key.ctrl && input === 'n') {
        handleNext();
        return;
      }
      if (key.ctrl && input === 'p') {
        handlePrev();
        return;
      }

      // Return to Menu (Ctrl+M)
      if (key.ctrl && input === 'm') {
        setView('menu');
        setResult(null);
        setInputCommand('');
        setShowHelp(false);
        return;
      }

      // Run / Submit code (Ctrl+S / Ctrl+R)
      if (key.ctrl && (input === 's' || input === 'r')) {
        handleSubmit();
        return;
      }

      // Shift+Tab or escape sequence for backwards panel cycling
      if ((key.shift && key.tab) || input === '\x1b[Z') {
        cyclePanelBackward();
        return;
      }

      // Tab or Ctrl+W for forwards panel cycling
      if (key.tab || (key.ctrl && input === 'w')) {
        cyclePanelForward();
        return;
      }

      // 3. Navigation when in Panel 1 (Challenge)
      if (focusPanel === 1) {
        // Direct Panel Jumps: 1, 2, 3
        if (input === '1') { setFocusPanel(1); return; }
        if (input === '2' || input === 'i' || input === 'e' || key.return) { setFocusPanel(2); return; }
        if (input === '3' && showOllama) { setFocusPanel(3); return; }

        // Panel Cycling with l / ] or [
        if (input === 'l' || input === ']') { cyclePanelForward(); return; }
        if (input === '[') { cyclePanelBackward(); return; }

        // Hint & Solution toggle in panel navigation
        if (input === 'h') { setShowHint(prev => !prev); return; }
        if (input === 's' || input === 'a') { setShowSolution(prev => !prev); return; }

        // Actions
        if (input === 'r') { handleSubmit(); return; }
        if (input === 'n') { handleNext(); return; }
        if (input === 'p') { handlePrev(); return; }
        if (input === 'm') { setView('menu'); return; }
        if (input === '?') { setShowHelp(true); return; }
        if (input === 'q') { setView('menu'); return; }
      }

      // 4. Panel 2 & 3 Escape handling back to Panel 1 (Navigation mode)
      if ((focusPanel === 2 || focusPanel === 3) && key.escape) {
        setFocusPanel(1);
        return;
      }

      // 5. Help modal toggle from empty prompt
      if (focusPanel === 2 && commandInput === '' && input === '?') {
        setShowHelp(true);
        return;
      }
    }
  });

  const getPromptInfo = () => {
    if (currentChallenge?.type === 'sql') {
      return {
        prompt: 'SQL> ',
        color: 'magentaBright',
        border: 'magenta',
        placeholder: 'Type SQL query (e.g. SELECT * FROM tbl)...'
      };
    }
    if (currentChallenge?.type === 'ruby') {
      return {
        prompt: 'rb> ',
        color: 'redBright',
        border: 'red',
        placeholder: 'Type Ruby code or expression (e.g. [1, 2, 3].map(&:succ))...'
      };
    }
    return {
      prompt: '$ ',
      color: 'greenBright',
      border: 'cyan',
      placeholder: 'Type bash command or script...'
    };
  };

  const getCategoryTitle = () => {
    if (selectedCategory === 'all') return '🌟 All Challenges (Randomized)';
    if (selectedCategory === 'ruby') return '💎 Ruby Language (Randomized)';
    if (selectedCategory === 'sql') return '🐘 PostgreSQL & SQL (Randomized)';
    if (selectedCategory === 'bash') return '🐚 Linux & Bash (Randomized)';
    const found = CATEGORIES.find(c => c.id === selectedCategory);
    return found ? `${found.label} (Randomized)` : `${selectedCategory} (Randomized)`;
  };

  const promptInfo = getPromptInfo();

  if (view === 'menu') {
    return (
      <Box flexDirection="column" padding={1}>
        <Header
          currentCategory="Category Menu"
          currentIndex={0}
          totalChallenges={CHALLENGES.length}
          solvedCount={solvedChallenges.size}
        />
        {showHelp ? (
          <HelpModal />
        ) : (
          <>
            <CategorySelect
              onSelect={handleCategorySelect}
              onSelectChallenge={handleSelectChallenge}
            />
            <Box marginTop={1} justifyContent="space-between">
              <Text color="gray">[j/k] Navigate | [/] Search | [Enter/l] Select/Drill-down | [h/q] Back | [?] Help</Text>
            </Box>
          </>
        )}
      </Box>
    );
  }

  // Left Column: Challenge Card, Code Input, and Passive Output Box
  const ChallengeSection = (
    <Box flexDirection="column" width={showOllama ? '52%' : '100%'} paddingRight={showOllama ? 1 : 0}>
      {/* Panel 1: Challenge Card with Toggle Hint and See Answer */}
      <ChallengeCard
        challenge={currentChallenge}
        showHint={showHint}
        showSolution={showSolution}
        isSolved={solvedChallenges.has(currentChallenge.id)}
        isActive={focusPanel === 1}
      />

      {/* Panel 2: Code Editor */}
      <Box
        flexDirection="column"
        borderStyle="round"
        borderColor={focusPanel === 2 ? 'greenBright' : 'gray'}
        paddingX={1}
      >
        <Box justifyContent="space-between" marginBottom={commandInput.includes('\n') ? 1 : 0}>
          <Box>
            <Text bold color={focusPanel === 2 ? 'greenBright' : 'gray'}>[2] </Text>
            <Text bold color={promptInfo.color}>
              {promptInfo.prompt}
            </Text>
          </Box>
          <Text color="gray" dimColor>
            {focusPanel === 2 ? '[Ctrl+S / Enter to Run]' : '[Press 2/e to edit]'}
          </Text>
        </Box>
        <MultilineInput
          value={commandInput}
          onChange={setInputCommand}
          onSubmit={handleSubmit}
          onHelp={() => setShowHelp(true)}
          focus={!showHelp && focusPanel === 2}
          language={currentChallenge?.type || 'bash'}
          placeholder={promptInfo.placeholder}
        />
      </Box>

      {/* Passive Output / Execution Results Area */}
      <ResultBox
        result={result}
        isRunning={isRunning}
        language={currentChallenge?.type || 'bash'}
      />
    </Box>
  );

  return (
    <Box flexDirection="column" padding={1}>
      <Header
        currentCategory={getCategoryTitle()}
        currentIndex={currentIndex}
        totalChallenges={activeChallenges.length}
        solvedCount={solvedChallenges.size}
      />

      {showHelp ? (
        <HelpModal />
      ) : showOllama ? (
        <Box flexDirection="row" width="100%">
          {ChallengeSection}
          <Box flexDirection="column" width="48%" paddingLeft={1}>
            {/* Panel 3: Ollama Assistant */}
            <OllamaPane
              challenge={currentChallenge}
              userCode={commandInput}
              lastResult={result}
              isActive={focusPanel === 3}
              onClose={() => {
                setShowOllama(false);
                if (focusPanel === 3) setFocusPanel(2);
              }}
            />
          </Box>
        </Box>
      ) : (
        ChallengeSection
      )}

      <Footer
        showHint={showHint}
        showSolution={showSolution}
        showOllama={showOllama}
        focusPanel={focusPanel}
      />
    </Box>
  );
}
