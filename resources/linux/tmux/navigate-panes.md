# `tmux` — navigate panes

Switch active cursor focus across split panes and cycle layouts.

## Keybindings (`Ctrl-b` / `C-b`)

| Keybinding | Action |
| --- | --- |
| `C-b <Arrow Key>` | Move focus to the adjacent pane in the arrow direction |
| `C-b o` | Cycle focus to the next pane clockwise |
| `C-b ;` | Toggle focus to the previously active pane |
| `C-b q` | Display pane index numbers briefly (type the number to jump immediately) |
| `C-b Space` | Cycle through built-in layout presets |

## Layout presets

Press `Ctrl-b Space` to cycle through standard pane layouts:
- `even-horizontal`: Panes split evenly from left to right.
- `even-vertical`: Panes stacked evenly from top to bottom.
- `main-horizontal`: Large main pane on top, smaller panes stacked side-by-side underneath.
- `main-vertical`: Large main pane on the left, smaller panes stacked on the right.
- `tiled`: Panes arranged into an even grid.

## CLI usage

```sh
# Focus pane by index (0, 1, 2, ...)
tmux select-pane -t 1

# Apply a specific layout preset
tmux select-layout tiled
tmux select-layout even-horizontal
```

## See also

- [split-panes](split-panes.md)
- [resize-and-zoom-pane](resize-and-zoom-pane.md)
