# `tmux` — launch a named session

Start a new named session from the command line, optionally in the background or running a specific command.

## Basic usage

```sh
# Start a new session named "work"
tmux new -s work

# Start a detached session in the background (does not attach immediately)
tmux new -d -s background-job

# Start a session named "dev" with an initial window name "editor"
tmux new -s dev -n editor

# Start a session and immediately run a command inside it
tmux new -s monitor "htop"
```

## Options

| Flag | Description |
| --- | --- |
| `-s <name>` | Specify session name |
| `-d` | Start detached (run in background) |
| `-n <win-name>` | Set the name of the initial window |
| `-c <dir>` | Start session inside a specific working directory |

## See also

- [attach-and-detach-session](attach-and-detach-session.md)
- [kill-session](kill-session.md)
- [script-dev-environment](script-dev-environment.md)
