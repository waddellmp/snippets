export const tmuxChallenges = [
  {
    id: 'tmux-new-session',
    category: 'tmux',
    subcategory: 'tmux',
    type: 'bash',
    title: 'Tmux: Launch Named Session',
    resource: 'resources/linux/tmux/launch-named-session.md',
    task: 'Use echo to print the standard tmux command for launching a new detached session (-d) named "dev" (-s).',
    hint: 'echo "tmux new-session -d -s dev"',
    expectedOutput: 'tmux new-session -d -s dev',
    solution: 'echo "tmux new-session -d -s dev"'
  },
  {
    id: 'tmux-attach-session',
    category: 'tmux',
    subcategory: 'tmux',
    type: 'bash',
    title: 'Tmux: Attach to Target Session',
    resource: 'resources/linux/tmux/attach-and-detach-session.md',
    task: 'Use echo to print the tmux command to attach to a running session targeting "dev".',
    hint: 'echo "tmux attach -t dev"',
    expectedOutput: 'tmux attach -t dev',
    solution: 'echo "tmux attach -t dev"'
  },
  {
    id: 'tmux-kill-session',
    category: 'tmux',
    subcategory: 'tmux',
    type: 'bash',
    title: 'Tmux: Terminate Session',
    resource: 'resources/linux/tmux/kill-session.md',
    task: 'Use echo to print the tmux command that kills/terminates the target session named "dev".',
    hint: 'echo "tmux kill-session -t dev"',
    expectedOutput: 'tmux kill-session -t dev',
    solution: 'echo "tmux kill-session -t dev"'
  },
  {
    id: 'tmux-split-horizontal',
    category: 'tmux',
    subcategory: 'tmux',
    type: 'bash',
    title: 'Tmux: Split Window Horizontally',
    resource: 'resources/linux/tmux/split-panes.md',
    task: 'Use echo to print the tmux command that splits the current window into side-by-side (horizontal) panes.',
    hint: 'echo "tmux split-window -h"',
    expectedOutput: 'tmux split-window -h',
    solution: 'echo "tmux split-window -h"'
  },
  {
    id: 'tmux-split-vertical',
    category: 'tmux',
    subcategory: 'tmux',
    type: 'bash',
    title: 'Tmux: Split Window Vertically',
    resource: 'resources/linux/tmux/split-panes.md',
    task: 'Use echo to print the tmux command that splits the current window into top and bottom (vertical) panes.',
    hint: 'echo "tmux split-window -v"',
    expectedOutput: 'tmux split-window -v',
    solution: 'echo "tmux split-window -v"'
  },
  {
    id: 'tmux-new-window',
    category: 'tmux',
    subcategory: 'tmux',
    type: 'bash',
    title: 'Tmux: Create Named Window',
    resource: 'resources/linux/tmux/manage-windows.md',
    task: 'Use echo to print the tmux command for creating a new window named "logs".',
    hint: 'echo "tmux new-window -n logs"',
    expectedOutput: 'tmux new-window -n logs',
    solution: 'echo "tmux new-window -n logs"'
  },
  {
    id: 'tmux-zoom-pane',
    category: 'tmux',
    subcategory: 'tmux',
    type: 'bash',
    title: 'Tmux: Toggle Zoom Active Pane',
    resource: 'resources/linux/tmux/resize-and-zoom-pane.md',
    task: 'Use echo to print the tmux command that toggles full-screen zoom on the currently active pane.',
    hint: 'echo "tmux resize-pane -Z"',
    expectedOutput: 'tmux resize-pane -Z',
    solution: 'echo "tmux resize-pane -Z"'
  }
];
