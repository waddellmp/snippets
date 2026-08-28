export const sedChallenges = [
  {
    id: 'sed-replace-first',
    category: 'sed',
    subcategory: 'sed',
    type: 'bash',
    title: 'Sed: Replace First Match',
    resource: 'resources/linux/bash/sed_replace.sh',
    task: 'Replace only the FIRST occurrence of "apple" with "orange" in "apple banana apple cherry".',
    hint: "echo 'apple banana apple cherry' | sed 's/apple/orange/'",
    expectedOutput: 'orange banana apple cherry',
    solution: "echo 'apple banana apple cherry' | sed 's/apple/orange/'"
  },
  {
    id: 'sed-replace-global',
    category: 'sed',
    subcategory: 'sed',
    type: 'bash',
    title: 'Sed: Global Replacement',
    resource: 'resources/linux/bash/sed_replace.sh',
    task: 'Replace ALL occurrences of "apple" with "pear" in "apple banana apple cherry apple".',
    hint: "echo 'apple banana apple cherry apple' | sed 's/apple/pear/g'",
    expectedOutput: 'pear banana pear cherry pear',
    solution: "echo 'apple banana apple cherry apple' | sed 's/apple/pear/g'"
  },
  {
    id: 'sed-custom-delimiter',
    category: 'sed',
    subcategory: 'sed',
    type: 'bash',
    title: 'Sed: Custom Delimiters for Filepaths',
    resource: 'resources/linux/bash/sed_replace.sh',
    task: 'Change "/etc/postgresql/16/main" to "/etc/postgresql/17/main" using a custom delimiter like "|" to avoid escaping slashes.',
    hint: "echo '/etc/postgresql/16/main' | sed 's|/16/|/17/|'",
    expectedOutput: '/etc/postgresql/17/main',
    solution: "echo '/etc/postgresql/16/main' | sed 's|/16/|/17/|'"
  },
  {
    id: 'sed-anchor-start',
    category: 'sed',
    subcategory: 'sed',
    type: 'bash',
    title: 'Sed: Line Start Anchor',
    resource: 'resources/linux/bash/sed_anchors_regex.sh',
    task: 'Replace "foo" only at the START of the line in "foo bar foo" with "START".',
    hint: "echo 'foo bar foo' | sed 's/^foo/START/'",
    expectedOutput: 'START bar foo',
    solution: "echo 'foo bar foo' | sed 's/^foo/START/'"
  },
  {
    id: 'sed-anchor-end',
    category: 'sed',
    subcategory: 'sed',
    type: 'bash',
    title: 'Sed: Line End Anchor',
    resource: 'resources/linux/bash/sed_anchors_regex.sh',
    task: 'Replace "foo" only at the END of the line in "foo bar foo" with "END".',
    hint: "echo 'foo bar foo' | sed 's/foo$/END/'",
    expectedOutput: 'foo bar END',
    solution: "echo 'foo bar foo' | sed 's/foo$/END/'"
  }
];
