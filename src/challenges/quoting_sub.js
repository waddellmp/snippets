export const QUOTING_SUB_CHALLENGES = [
  {
    id: 'sub-command-modern',
    domain: 'bash',
    category: 'quoting_sub',
    subcategory: 'quoting_sub',
    title: 'Command Substitution: Dynamic Subshell Evaluation',
    task: 'Use command substitution to assign the output of `uname -s` to a variable named OS and print it.',
    hint: 'OS=$(uname -s); echo "$OS"',
    referenceSolution: 'OS=$(uname -s); echo "$OS"',
    validate: (output, userCommand) => {
      return output.trim() === 'Linux' || output.trim() === 'Darwin';
    },
    resource: 'resources/linux/bash/substitution_command.sh'
  },
  {
    id: 'var-root-check-euid',
    domain: 'bash',
    category: 'quoting_sub',
    subcategory: 'quoting_sub',
    title: 'Special Variables: Verify Root Privileges',
    task: 'Write a test bracket command checking if the current effective user ID variable equals 0 (super-user).',
    hint: '[ "$EUID" -eq 0 ]',
    referenceSolution: '[ "$EUID" -eq 0 ]',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return (cmd.includes('EUID') || cmd.includes('UID')) && cmd.includes('0');
    },
    resource: 'resources/linux/bash/variables_uid_vs_euid.sh'
  },
  {
    id: 'special-var-arg-count',
    domain: 'bash',
    category: 'quoting_sub',
    subcategory: 'quoting_sub',
    title: 'Special Variables: Positional Argument Count',
    task: 'Write a test bracket check verifying if the total number of script arguments passed is greater than or equal to 2.',
    hint: '[ "$#" -ge 2 ]',
    referenceSolution: '[ "$#" -ge 2 ]',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd.includes('$#') && (cmd.includes('-ge') || cmd.includes('>='));
    },
    resource: 'resources/linux/bash/variables_special_variables.sh'
  },
  {
    id: 'quote-preserve-args',
    domain: 'bash',
    category: 'quoting_sub',
    subcategory: 'quoting_sub',
    title: 'Quoting: Preserving Exact Word Boundaries',
    task: 'Write the syntax using echo to expand all positional arguments while preserving individual word boundaries and whitespace.',
    hint: 'echo "$@"',
    referenceSolution: 'echo "$@"',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd.includes('"$@"');
    },
    resource: 'resources/linux/bash/quoting_when_to_quote.sh'
  },
  {
    id: 'pipe-status-inspect',
    domain: 'bash',
    category: 'quoting_sub',
    subcategory: 'quoting_sub',
    title: 'Pipelines: Inspect Exit Status Array',
    task: 'Print the exit code of the first command in the most recent pipeline using the built-in pipeline status array.',
    hint: 'echo "${PIPESTATUS[0]}"',
    referenceSolution: 'echo "${PIPESTATUS[0]}"',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd.includes('PIPESTATUS') && cmd.includes('[0]');
    },
    resource: 'resources/linux/bash/pipelines_exit_status.sh'
  }
];
