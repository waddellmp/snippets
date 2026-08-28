export const variableChallenges = [
  {
    id: 'var-default-fallback',
    category: 'variables',
    subcategory: 'variables',
    type: 'bash',
    title: 'Variables: Parameter Default Fallback',
    resource: 'resources/linux/bash/variables_parameter_defaults.sh',
    task: 'Print the value of variable PORT with a fallback default to 5432 if empty or unset using parameter expansion.',
    hint: 'PORT="" ; echo "${PORT:-5432}"',
    expectedOutput: '5432',
    solution: 'PORT="" ; echo "${PORT:-5432}"'
  },
  {
    id: 'var-strip-prefix',
    category: 'variables',
    subcategory: 'variables',
    type: 'bash',
    title: 'Variables: Strip Longest Prefix Pattern',
    resource: 'resources/linux/bash/variables_expansions.sh',
    task: 'Extract the basename filename from path FILE="/etc/postgresql/17/main/postgresql.conf" by stripping the leading path prefix with parameter expansion.',
    hint: 'FILE="/etc/postgresql/17/main/postgresql.conf" ; echo "${FILE##*/}"',
    expectedOutput: 'postgresql.conf',
    solution: 'FILE="/etc/postgresql/17/main/postgresql.conf" ; echo "${FILE##*/}"'
  },
  {
    id: 'var-strip-suffix',
    category: 'variables',
    subcategory: 'variables',
    type: 'bash',
    title: 'Variables: Strip Extension Suffix',
    resource: 'resources/linux/bash/variables_expansions.sh',
    task: 'Strip the ".conf" extension from FILE="postgresql.conf" using shortest suffix removal parameter expansion.',
    hint: 'FILE="postgresql.conf" ; echo "${FILE%.*}"',
    expectedOutput: 'postgresql',
    solution: 'FILE="postgresql.conf" ; echo "${FILE%.*}"'
  },
  {
    id: 'var-case-upper',
    category: 'variables',
    subcategory: 'variables',
    type: 'bash',
    title: 'Variables: Native Uppercase Conversion',
    resource: 'resources/linux/bash/variables_expansions.sh',
    task: 'Given text="hello world", convert the entire string to uppercase using Bash 4+ parameter casing expansion without external tools.',
    hint: 'text="hello world" ; echo "${text^^}"',
    expectedOutput: 'HELLO WORLD',
    solution: 'text="hello world" ; echo "${text^^}"'
  },
  {
    id: 'var-string-length',
    category: 'variables',
    subcategory: 'variables',
    type: 'bash',
    title: 'Variables: Parameter String Length',
    resource: 'resources/linux/bash/variables_expansions.sh',
    task: 'Given word="PostgreSQL", print its character length using pure Bash parameter length expansion.',
    hint: 'word="PostgreSQL" ; echo "${#word}"',
    expectedOutput: '10',
    solution: 'word="PostgreSQL" ; echo "${#word}"'
  }
];
