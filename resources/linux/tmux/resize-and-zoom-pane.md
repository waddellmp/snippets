# `tmux` — resize, zoom, and swap panes

Maximize a single pane temporarily to full-screen, adjust pane dimensions, or swap pane positions.

## Keybindings (`Ctrl-b` / `C-b`)

| Keybinding | Action | Description |
| --- | --- | --- |
| `C-b z` | **Zoom** | Maximize the focused pane to take up the full window. Press again to restore splits. |
| `C-b !` | **Break out** | Detach the current pane and turn it into its own separate window. |
| `C-b {` | **Swap previous** | Swap the position of the current pane with the previous pane. |
| `C-b }` | **Swap next** | Swap the position of the current pane with the next pane. |
| `C-b Ctrl-<Arrow>` | **Resize (1 cell)** | Hold `Ctrl` and tap arrow keys to nudge pane boundary by 1 cell. |
| `C-b Alt-<Arrow>` | **Resize (5 cells)** | Hold `Alt` and tap arrow keys to adjust pane boundary in 5-cell jumps. |

## CLI / Scripting usage

```sh
# Resize active pane down by 10 lines
tmux resize-pane -D 10

# Resize active pane right by 20 columns
tmux resize-pane -R 20

# Swap pane 1 with pane 2
tmux swap-pane -s 1 -t 2
```

## See also

- [split-panes](split-panes.md)
- [navigate-panes](navigate-panes.md)
- [manage-windows](manage-windows.md)
