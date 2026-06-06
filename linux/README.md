# Linux snippets

Cheat-sheet style snippets for Linux/Unix commands and bash scripting
concepts, focused on what's actually used in scripts under this repo.

## Layout

```
linux/
└── bash/                    # bash scripting concepts and commands
    ├── shebang/
    ├── set/
    ├── variables/
    ├── if/
    ├── substitution/
    ├── pipelines/
    ├── quoting/
    ├── redirection/
    ├── test/
    └── commands/            # one folder per command
        ├── awk/
        ├── command/
        ├── cut/
        ├── echo/
        ├── exit/
        ├── grep/
        ├── psql/
        ├── sed/
        ├── sudo/
        ├── systemctl/
        ├── test/
        └── tmux/
```

Each snippet is a small, focused `.md` file. Filenames describe the action
or idea, not the syntax — `print-field.md` is more discoverable than
`dollar-one.md`.

## Indexes

- [`bash/`](bash/README.md) — per-concept references
- [`bash/commands/`](bash/commands/README.md) — per-command references

## Adding new snippets

1. Pick the right command/concept folder (`bash/commands/<cmd>/` or
   `bash/<concept>/`).
2. Create a `.md` file with a descriptive name (e.g.
   `bash/commands/grep/recursive-search.md`).
3. Use the same shape as the others:
   - One-line description
   - The most common form / flags table
   - **Used in this repo** section if applicable, pointing at the exact
     script line
   - A **See also** footer
4. Update the index README in the parent folder.
