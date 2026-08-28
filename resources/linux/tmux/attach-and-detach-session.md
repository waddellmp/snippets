# `tmux` — attach and detach sessions

Disconnect from a running session without terminating its jobs, view running sessions, and reconnect at any time.

## Basic usage

```sh
# List all active sessions
tmux ls

# Attach to the last active session
tmux a

# Attach to a specific session by name
tmux attach -t work
tmux a -t work

# Detach from inside the current session (from shell)
tmux detach
```

## Keybindings (inside tmux)

All shortcuts require the prefix key `Ctrl-b` (written as `C-b`):

| Keybinding | Action |
| --- | --- |
| `C-b d` | Detach from the current session (leaves all processes running in background) |
| `C-b s` | Open interactive session switcher tree |
| `C-b $` | Rename the current session |
| `C-b (` | Switch to previous session |
| `C-b )` | Switch to next session |

## See also

- [launch-named-session](launch-named-session.md)
- [kill-session](kill-session.md)
