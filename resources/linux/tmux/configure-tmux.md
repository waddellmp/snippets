# `tmux` — configuration (`~/.tmux.conf`)

Customize keybindings, mouse behavior, scrollback buffer limits, and status bar appearance.

## Applying configuration changes

```sh
# Reload config from the command line
tmux source-file ~/.tmux.conf

# Reload config from inside tmux:
# Press Ctrl-b : then type:
# source-file ~/.tmux.conf
```

## Common configuration recipes

### 1. Remap Prefix Key to `Ctrl-a`
```tmux
unbind C-b
set -g prefix C-a
bind C-a send-prefix
```

### 2. Enable Mouse Control (Clicking, Scrolling, Resizing)
```tmux
set -g mouse on
```

### 3. Increase Scrollback Buffer
```tmux
# Default is only 2000 lines
set -g history-limit 50000
```

### 4. 1-Based Indexing for Windows and Panes
```tmux
set -g base-index 1
setw -g pane-base-index 1
set -g renumber-windows on
```

### 5. Vim-Style Pane Navigation
```tmux
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R
```

### 6. Convenient Split Keys (Open in Current Directory)
```tmux
bind | split-window -h -c "#{pane_current_path}"
bind - split-window -v -c "#{pane_current_path}"
```

### 7. Quick Reload Keybinding
```tmux
bind r source-file ~/.tmux.conf \; display-message "tmux.conf reloaded!"
```

## See also

- [scrollback-and-search](scrollback-and-search.md)
- [copy-and-paste](copy-and-paste.md)
- [split-panes](split-panes.md)
