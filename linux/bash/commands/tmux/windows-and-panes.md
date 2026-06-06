# `tmux` — windows and panes

Manage multiple windows and split panes within a single tmux session.

## Windows (tabs)

Windows are like tabs in a browser. They span the entire terminal screen and can contain multiple split panes.

All window shortcuts require the prefix `Ctrl-b` (written as `C-b`):

| Keybinding | Action |
| --- | --- |
| `C-b c` | Create a new window |
| `C-b ,` | Rename the current window |
| `C-b n` | Go to the next window |
| `C-b p` | Go to the previous window |
| `C-b 0..9` | Go to window by index |
| `C-b w` | List windows interactively |
| `C-b &` | Kill the current window (requires confirmation) |

## Panes (splits)

Panes are division of a single window. You can split windows horizontally or vertically to run commands side-by-side.

All pane shortcuts require the prefix `Ctrl-b` (written as `C-b`):

| Keybinding | Action |
| --- | --- |
| `C-b %` | Split the current pane horizontally (left and right) |
| `C-b "` | Split the current pane vertically (top and bottom) |
| `C-b <arrow>` | Navigate to the pane in the arrow direction |
| `C-b o` | Cycle focus to the next pane |
| `C-b z` | Toggle zoom (maximize/minimize current pane) |
| `C-b x` | Close the current pane (requires confirmation) |
| `C-b !` | Break the current pane out into its own window |
| `C-b {` | Swap the current pane with the previous one |
| `C-b }` | Swap the current pane with the next one |

## Used in this repo

Not currently used in this repository's scripts.

## See also

- [manage-sessions](manage-sessions.md)
- [copy-mode](copy-mode.md)
