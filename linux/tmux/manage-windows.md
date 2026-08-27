# `tmux` — manage windows

Windows function like tabs spanning the entire terminal, allowing you to organize distinct tasks within a single session.

## Keybindings (`Ctrl-b` / `C-b`)

| Keybinding | Action |
| --- | --- |
| `C-b c` | Create a new window |
| `C-b ,` | Rename the current window |
| `C-b n` | Go to the next window |
| `C-b p` | Go to the previous window |
| `C-b 0..9` | Jump directly to window index `0` through `9` |
| `C-b w` | Open interactive visual picker for all windows and sessions |
| `C-b &` | Close the current window and all its panes (prompts `y/n`) |
| `C-b .` | Move/renumber the current window index |

## CLI / Scripting usage

```sh
# Create a new window named "logs" in the active session
tmux new-window -n logs

# Create a new window inside a specific session "dev"
tmux new-window -t dev -n backend

# Switch to window 2
tmux select-window -t 2

# Switch to window named "logs"
tmux select-window -t logs

# Rename window 1 to "frontend"
tmux rename-window -t 1 frontend

# Close window 3
tmux kill-window -t 3
```

## See also

- [split-panes](split-panes.md)
- [launch-named-session](launch-named-session.md)
