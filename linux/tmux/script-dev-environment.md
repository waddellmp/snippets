# `tmux` — script a development environment

Automate creating a multi-pane tmux workspace with processes running in each pane using a single bash script.

## Automation script example

Save this file as `dev-environment.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

SESSION="project-dev"

# If the session already exists, attach to it immediately
if tmux has-session -t "$SESSION" 2>/dev/null; then
  echo "Attaching to existing session '$SESSION'..."
  tmux attach-session -t "$SESSION"
  exit 0
fi

# 1. Start a new detached session with window "editor"
tmux new-session -d -s "$SESSION" -n "editor"

# 2. Launch editor in main window
tmux send-keys -t "$SESSION:editor" "nvim ." C-m

# 3. Create a second window for services/terminals
tmux new-window -t "$SESSION" -n "services"

# 4. Split services window horizontally (50/50 left and right)
tmux split-window -h -t "$SESSION:services"

# 5. Split the right pane vertically (top-right and bottom-right)
tmux split-window -v -t "$SESSION:services.1"

# 6. Send startup commands to each pane
# Left pane (services.0) - Dev server
tmux send-keys -t "$SESSION:services.0" "npm run dev" C-m

# Top-right pane (services.1) - Database / logs
tmux send-keys -t "$SESSION:services.1" "docker compose logs -f" C-m

# Bottom-right pane (services.2) - General shell
tmux send-keys -t "$SESSION:services.2" "git status" C-m

# 7. Select editor window and attach
tmux select-window -t "$SESSION:editor"
tmux attach-session -t "$SESSION"
```

## Useful scripting commands

| Command | Description |
| --- | --- |
| `tmux has-session -t <name>` | Check if session exists (returns 0 if found) |
| `tmux new-session -d -s <name> -n <win>` | Create session in background (detached) |
| `tmux send-keys -t <target> "<cmd>" C-m` | Send commands to a pane (`C-m` = Enter) |
| `tmux select-window -t <target>` | Switch active window |
| `tmux attach-session -t <name>` | Connect user terminal to session |

## See also

- [launch-named-session](launch-named-session.md)
- [split-panes](split-panes.md)
- [manage-windows](manage-windows.md)
