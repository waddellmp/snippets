# `tmux` snippets

Cheat-sheet style snippets for the `tmux` terminal multiplexer on Linux/Unix. Each snippet is a small, focused reference with concrete examples.

---

## Snippets Index

### Sessions

| Snippet | What it covers |
| --- | --- |
| [launch-named-session](launch-named-session.md) | Start new sessions with `-s`, detached mode (`-d`), and immediate commands |
| [attach-and-detach-session](attach-and-detach-session.md) | Connect to running sessions, detach (`C-b d`), list (`tmux ls`), and switch |
| [kill-session](kill-session.md) | Terminate specific sessions, kill all others (`-a`), or shut down the server |

### Windows and Panes

| Snippet | What it covers |
| --- | --- |
| [split-panes](split-panes.md) | Horizontal (`C-b %`) and vertical (`C-b "`) splits, closing panes |
| [navigate-panes](navigate-panes.md) | Move cursor across panes, jump by index (`C-b q`), cycle layout presets |
| [resize-and-zoom-pane](resize-and-zoom-pane.md) | Maximize pane (`C-b z`), break out into window (`C-b !`), resize, and swap |
| [manage-windows](manage-windows.md) | Create (`C-b c`), rename (`C-b ,`), switch tabs, and close windows |

### History and Buffers

| Snippet | What it covers |
| --- | --- |
| [scrollback-and-search](scrollback-and-search.md) | Copy mode navigation (`C-b [`), search (`/`, `?`), vi/emacs scrolling |
| [copy-and-paste](copy-and-paste.md) | Selecting text, copying to buffers, pasting (`C-b ]`), CLI buffer management |

### Configuration and Scripting

| Snippet | What it covers |
| --- | --- |
| [configure-tmux](configure-tmux.md) | `~/.tmux.conf` recipes: mouse support, prefix remap (`Ctrl-a`), vim bindings |
| [script-dev-environment](script-dev-environment.md) | Automate multi-pane workspace startup scripts with `tmux send-keys` |
