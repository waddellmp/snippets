# Linux snippets

Cheat-sheet style snippets for Linux/Unix commands, bash scripting concepts, and tools.

## Layout

```
linux/
├── bash/                    # function-based executable bash script examples (.sh)
└── tmux/                    # flat folder of focused tmux multiplexer snippets (.md)
```

Each bash snippet is a modular, executable `.sh` script containing numbered function examples and runner blocks. Each tmux snippet is a focused `.md` file.

## Indexes

- [`bash/`](bash/README.md) — bash syntax, variables, pipelines, tests, and command references
- [`tmux/`](tmux/README.md) — tmux sessions, windows, panes, copy mode, and scripting references

## Adding new snippets

1. Create a `.md` file in the appropriate tool folder (`bash/` or `tmux/`) with a descriptive, prefixed name (e.g. `bash/sed-replace.md`).
2. Use the standard structure:
   - Title and one-line description
   - Clear usage examples and flags table
   - **See also** section linking related snippets
3. Add an entry to the folder's `README.md` index.
