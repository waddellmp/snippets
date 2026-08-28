# Snippets & Interactive Bash, SQL & Ruby Terminal Lab

Interactive terminal-based learning environment built with [Ink](https://github.com/vadimdemedes/ink) (React for the CLI) and a comprehensive library of Bash, Linux, PostgreSQL, and Ruby snippet resources.

---

## 🚀 Interactive Terminal Practice (TUI)

Practice Bash commands, PostgreSQL queries, and Ruby code directly in your terminal with instant subshell execution, syntax highlighting, and live validation:

```bash
# Start the interactive tutor
npm start
```

### Lazygit-Style Panel Navigation & Shortcuts

#### 🔀 Panel Navigation
- `1..3` : Direct jump to Panel (`[1]` Challenge, `[2]` Editor, `[3]` Ollama AI)
- `Tab` / `]` / `l` : Cycle forward to next panel
- `Shift+Tab` / `[` : Cycle backward to previous panel
- `i` / `e` / `Enter` : Focus / Jump into Code Editor
- `Esc` : Unfocus active panel / return to navigation mode
- `Ctrl+O` or `_` / `+` : Toggle / zoom Ollama AI Assistant side panel

#### 💡 Challenge & Assistance
- `h` or `Ctrl+K` : Toggle challenge hint
- `s` or `Ctrl+J` : Toggle / reveal full reference solution & answer
- `r` or `Ctrl+S` / `Ctrl+R` : Run & validate code immediately
- `n` or `Ctrl+N` : Next challenge
- `p` or `Ctrl+P` : Previous challenge

#### 🤖 Ollama AI Assistant
- `Ctrl+T` : Cycle installed local AI models
- `Ctrl+L` : Clear conversation history
- `↑` / `↓` : Scroll assistant response viewport

#### 🌐 Global & Menu
- `m` or `Ctrl+M` : Return to Category Menu (drill-down & search)
- `j` / `k` / `↑` / `↓` : Navigate lists, trees, and scrollable panels
- `?` : Toggle interactive keybindings cheat sheet
- `q` or `Ctrl+C` : Go back or quit application

---

## 📁 Repository Layout

```
snippets/
├── package.json             # Root npm configuration (Ink, React, Execa, Chalk)
├── src/                     # Interactive terminal practice app source code
│   ├── cli.jsx              # CLI executable entry point
│   ├── app.jsx              # Main React/Ink application coordinator
│   ├── highlighter.js       # Real-time ANSI syntax highlighter (Bash, SQL, Ruby)
│   ├── validator.js         # Subshell execution and multi-language validation
│   ├── challenges/          # Modular challenge banks by topic
│   │   ├── index.js         # Unified category registry
│   │   ├── ruby.js          # Ruby enumerables, hashes & OOP challenges
│   │   ├── sql.js           # PostgreSQL DDL, indexing & admin challenges
│   │   ├── awk.js           # Awk stream processing challenges
│   │   ├── sed.js           # Sed stream editor challenges
│   │   ├── cut.js           # Cut field & character challenges
│   │   ├── grep.js          # Grep search & filter challenges
│   │   ├── variables.js     # Variable parameter expansion challenges
│   │   ├── flow.js          # Flow control & conditional tests
│   │   ├── pipes_redirect.js# Pipeline & stream redirection challenges
│   │   ├── core_commands.js # Core command inspection & exit codes
│   │   └── tmux.js          # Tmux multiplexer session commands
│   └── components/          # Reusable Ink terminal components
│       ├── Header.jsx       # Terminal header and score tracker
│       ├── ChallengeCard.jsx# Challenge prompt card with dynamic badges
│       ├── MultilineInput.jsx# Smart multiline editor with syntax highlighting
│       ├── ResultBox.jsx    # Live validation output & stderr reporting
│       ├── HelpModal.jsx    # Keybindings shortcut cheatsheet
│       ├── CategorySelect.jsx# Category picker menu
│       └── Footer.jsx       # Keyboard shortcut footer
└── resources/               # Code snippets, cheat-sheets, and scripts
    ├── linux/               # Linux concepts, executable bash scripts & tmux
    │   ├── bash/            # 44 executable bash function script examples (.sh)
    │   └── tmux/            # Tmux cheatsheets and workflow guides (.md)
    ├── postgresql/          # PostgreSQL administration scripts & SQL queries
    ├── ruby/                # Ruby language resources (.rb)
    │   ├── basics/          # Enumerables, blocks/lambdas, hashes & symbols
    │   ├── oop/             # Classes, inheritance & method lookups
    │   └── modules/         # Modules, mixins and module_function
    └── exercises/           # Reference data and standalone exercises
```