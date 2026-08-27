# `tmux` — copy and paste buffers

Select text within tmux copy mode, copy it to tmux buffers, and paste it across panes or save it to files.

## Copying text workflow

1. Press `Ctrl-b [` to enter copy mode.
2. Move the cursor to the beginning of the text you want to copy.
3. Start text selection:
   - **Emacs (default)**: `Ctrl-Space`
   - **Vi mode**: `Space` (or `v` if configured)
4. Move cursor to highlight the text.
5. Copy selection and exit copy mode:
   - **Emacs (default)**: `Alt-w`
   - **Vi mode**: `Enter` (or `y` if configured)

## Pasting text

| Action | Command / Keybinding |
| --- | --- |
| Paste from tmux buffer | `Ctrl-b ]` |
| Paste via CLI into active pane | `tmux paste-buffer` |
| Paste into specific target pane | `tmux paste-buffer -t 2` |

## Managing buffers from CLI

```sh
# List all saved buffers
tmux list-buffers
tmux lsb

# View contents of the most recent buffer
tmux show-buffer

# Save buffer content to a file on disk
tmux save-buffer /tmp/tmux-output.txt

# Load a file into a tmux paste buffer
tmux load-buffer /tmp/snippet.txt
```

## See also

- [scrollback-and-search](scrollback-and-search.md)
- [configure-tmux](configure-tmux.md)
