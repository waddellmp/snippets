# `tmux` — copy mode

Scroll through terminal history, search, and copy text within tmux panes.

## Entering and exiting

By default, tmux captures mouse wheels and doesn't let you scroll the terminal history directly. Use copy mode to navigate output history.

| Action | Keybinding |
| --- | --- |
| Enter Copy Mode | `Ctrl-b [` |
| Exit Copy Mode | `q` (or `Escape`) |
| Paste Copied Text | `Ctrl-b ]` |

## Vi vs. Emacs keys

By default, tmux uses Emacs-style keys. To scroll and search using Vim keybindings, add this line to your `~/.tmux.conf`:

```tmux
set-window-option -g mode-keys vi
```

### Navigation keys in copy mode

| Action | Emacs (Default) | Vi Mode |
| --- | --- | --- |
| Scroll line Up / Down | `Up` / `Down` | `k` / `j` (or arrows) |
| Scroll page Up / Down | `PageUp` / `PageDown` | `Ctrl-b` / `Ctrl-f` |
| Move cursor Left / Right | `Left` / `Right` | `h` / `l` (or arrows) |
| Go to start / end of line | `Ctrl-a` / `Ctrl-e` | `0` / `$` |
| Search forward / backward | `Ctrl-s` / `Ctrl-r` | `/` / `?` |

### Copying text

Once you are in copy mode:

1. Position the cursor where you want to start copying.
2. Press the select shortcut:
   - **Emacs**: `Ctrl-Space`
   - **Vi**: `Space` (or `v` in newer tmux versions if customized)
3. Move the cursor to highlight the desired text.
4. Press the copy shortcut to copy to tmux buffer and exit copy mode:
   - **Emacs**: `Alt-w`
   - **Vi**: `Enter` (or `y` if customized)
5. Paste with `Ctrl-b ]`.

## Used in this repo

Not currently used in this repository's scripts.

## See also

- [manage-sessions](manage-sessions.md)
- [windows-and-panes](windows-and-panes.md)
