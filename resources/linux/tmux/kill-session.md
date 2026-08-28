# `tmux` — kill sessions

Terminate running tmux sessions or shut down the entire tmux server daemon.

## Basic usage

```sh
# Kill a specific named session
tmux kill-session -t work

# Kill all sessions except the currently active one
tmux kill-session -a

# Kill all sessions except a specific target session
tmux kill-session -a -t main

# Kill the entire tmux server and all sessions/panes
tmux kill-server
```

## Interactive session killing

From inside tmux:
1. Press `Ctrl-b s` to open the session tree.
2. Navigate with arrow keys to the session you want to close.
3. Press `x` to kill the highlighted session (confirm with `y`).

## See also

- [launch-named-session](launch-named-session.md)
- [attach-and-detach-session](attach-and-detach-session.md)
