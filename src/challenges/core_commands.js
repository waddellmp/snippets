export const coreCommandsChallenges = [
  {
    id: 'command-v-check',
    category: 'core_commands',
    subcategory: 'core_commands',
    type: 'bash',
    title: 'Command: Check Executable Binary Existence',
    resource: 'resources/linux/bash/command_which_replacement.sh',
    task: 'Use the `command` builtin to check if binary "bash" exists in PATH, silencing its output, and print "found" on success.',
    hint: 'command -v bash >/dev/null && echo "found"',
    expectedOutput: 'found',
    solution: 'command -v bash >/dev/null && echo "found"'
  },
  {
    id: 'command-bypass-alias',
    category: 'core_commands',
    subcategory: 'core_commands',
    type: 'bash',
    title: 'Command: Bypass Custom Shell Functions and Aliases',
    task: 'Write a command using the `command` keyword to invoke `echo hello` while bypassing any user-defined shell functions or aliases.',
    hint: 'command echo hello',
    expectedOutput: 'hello',
    solution: 'command echo hello'
  },
  {
    id: 'exit-code-inspection',
    category: 'core_commands',
    subcategory: 'core_commands',
    type: 'bash',
    title: 'Exit Codes: Inspect Previous Command Status',
    task: 'Execute the `true` binary and print its exit status code using the special exit status variable.',
    hint: 'true ; echo $?',
    expectedOutput: '0',
    solution: 'true ; echo $?'
  }
];
