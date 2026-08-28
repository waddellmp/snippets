# `tmux` — split panes

Split a window into multiple terminals running side-by-side or stacked vertically.

## Keybindings (`Ctrl-b` / `C-b`)

| Keybinding | Action | Description |
| --- | --- | --- |
| `C-b %` | Split Horizontally | Divides the current pane into left and right sides |
| `C-b "` | Split Vertically | Divides the current pane into top and bottom halves |
| `C-b x` | Close Pane | Terminates the current pane (prompts `y/n`) |
| `exit` | Close Pane | Regular shell exit command terminates the pane |

## CLI / Scripting usage

You can split panes directly from shell commands:

```sh
# Split current window horizontally (left/right)
tmux split-window -h

# Split current window vertically (top/bottom)
tmux split-window -v

# Split and open in the same current working directory
tmux split-window -h -c "#{pane_current_path}"

# Split and execute a command inside the new pane
tmux split-window -v "tail -f /var/log/syslog"
```

## See also

- [navigate-panes](navigate-panes.md)
- [resize-and-zoom-pane](resize-and-zoom-pane.md)
- [manage-windows](manage-windows.md)
