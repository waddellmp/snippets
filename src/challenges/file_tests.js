export const FILE_TESTS_CHALLENGES = [
  {
    id: 'test-file-regular',
    domain: 'bash',
    category: 'file_tests',
    subcategory: 'file_tests',
    title: 'File Tests: Check Regular File Existence',
    task: 'Given FILE="/tmp/data.txt", write a test bracket expression that evaluates true only if the target exists and is a regular file.',
    hint: 'FILE="/tmp/data.txt"; [ -f "$FILE" ]',
    referenceSolution: 'FILE="/tmp/data.txt"; [ -f "$FILE" ]',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd.includes('-f') && (cmd.includes('[ -f') || cmd.includes('test -f'));
    },
    resource: 'resources/linux/bash/test_file_operators.sh'
  },
  {
    id: 'test-directory-exists',
    domain: 'bash',
    category: 'file_tests',
    subcategory: 'file_tests',
    title: 'File Tests: Check Directory Existence',
    task: 'Given DIR="/var/log", write a test bracket expression that evaluates true if the target is an existing directory.',
    hint: 'DIR="/var/log"; [ -d "$DIR" ]',
    referenceSolution: 'DIR="/var/log"; [ -d "$DIR" ]',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd.includes('-d') && (cmd.includes('[ -d') || cmd.includes('test -d'));
    },
    resource: 'resources/linux/bash/test_file_operators.sh'
  },
  {
    id: 'test-file-non-empty',
    domain: 'bash',
    category: 'file_tests',
    subcategory: 'file_tests',
    title: 'File Tests: Check Non-Zero File Size',
    task: 'Given LOG="/var/log/app.log", write a test expression that checks if the file exists and is non-empty (has a size greater than zero).',
    hint: 'LOG="/var/log/app.log"; [ -s "$LOG" ]',
    referenceSolution: 'LOG="/var/log/app.log"; [ -s "$LOG" ]',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd.includes('-s') && (cmd.includes('[ -s') || cmd.includes('test -s'));
    },
    resource: 'resources/linux/bash/test_file_operators.sh'
  },
  {
    id: 'test-path-exists',
    domain: 'bash',
    category: 'file_tests',
    subcategory: 'file_tests',
    title: 'File Tests: Check Path Existence (Any Type)',
    task: 'Given TARGET="/etc/hosts", write a test bracket expression to check if the target exists regardless of whether it is a file, directory, or socket.',
    hint: 'TARGET="/etc/hosts"; [ -e "$TARGET" ]',
    referenceSolution: 'TARGET="/etc/hosts"; [ -e "$TARGET" ]',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd.includes('-e') && (cmd.includes('[ -e') || cmd.includes('test -e'));
    },
    resource: 'resources/linux/bash/test_file_operators.sh'
  },
  {
    id: 'test-file-readable-writable',
    domain: 'bash',
    category: 'file_tests',
    subcategory: 'file_tests',
    title: 'File Tests: Check Read and Write Permissions',
    task: 'Given CONF="/tmp/config.json", write a compound test expression using && verifying that the file is both readable and writable.',
    hint: 'CONF="/tmp/config.json"; [ -r "$CONF" ] && [ -w "$CONF" ]',
    referenceSolution: 'CONF="/tmp/config.json"; [ -r "$CONF" ] && [ -w "$CONF" ]',
    validate: (output, userCommand) => {
      const cmd = userCommand.trim();
      return cmd.includes('-r') && cmd.includes('-w') && (cmd.includes('&&') || cmd.includes('-a'));
    },
    resource: 'resources/linux/bash/test_file_operators.sh'
  }
];
