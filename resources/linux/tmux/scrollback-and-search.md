# `tmux` — scrollback and search

Navigate through past terminal output and search for text within a tmux pane.

## Entering and exiting copy mode

| Action | Keybinding |
| --- | --- |
| Enter Copy Mode | `Ctrl-b [` |
| Exit Copy Mode | `q` or `Escape` |

## Scrolling and navigation

Once inside copy mode (`Ctrl-b [`):

| Navigation | Default (Emacs) | Vi Mode |
| --- | --- | --- |
| Line Up / Down | `Up` / `Down` | `k` / `j` |
| Half page Up / Down | `Alt-v` / `Ctrl-v` | `Ctrl-u` / `Ctrl-d` |
| Full page Up / Down | `PageUp` / `PageDown` | `Ctrl-b` / `Ctrl-f` |
| Top of scrollback | `Alt-<` | `g` |
| Bottom of scrollback | `Alt->` | `G` |

## Searching in scrollback history

| Action | Emacs | Vi Mode |
| --- | --- | --- |
| Search forward (down) | `Ctrl-s` | `/` |
| Search backward (up) | `Ctrl-r` | `?` |
| Jump to next match | `n` | `n` |
| Jump to previous match | `N` | `N` |

## Setting Vi keys for copy mode

Add this line to `~/.tmux.conf`:
```tmux
set-window-option -g mode-keys vi
```

## See also

- [copy-and-paste](copy-and-paste.md)
- [configure-tmux](configure-tmux.md)
