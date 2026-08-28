export const grepChallenges = [
  {
    id: 'grep-invert',
    category: 'grep',
    subcategory: 'grep',
    type: 'bash',
    title: 'Grep: Invert Match Filter',
    resource: 'resources/linux/bash/grep_basic_flags.sh',
    task: 'Given "pass\\nfail\\npass\\nskip", filter out and exclude all lines containing "fail" using grep.',
    hint: "printf 'pass\\nfail\\npass\\nskip' | grep -v 'fail'",
    expectedOutput: "pass\npass\nskip",
    solution: "printf 'pass\\nfail\\npass\\nskip' | grep -v 'fail'"
  },
  {
    id: 'grep-case-insensitive',
    category: 'grep',
    subcategory: 'grep',
    type: 'bash',
    title: 'Grep: Case-Insensitive Matching',
    resource: 'resources/linux/bash/grep_basic_flags.sh',
    task: 'Search for "error" in "Error: database down\\nINFO: ok\\nerror: timeout" ignoring uppercase/lowercase distinctions.',
    hint: "printf 'Error: database down\\nINFO: ok\\nerror: timeout' | grep -i 'error'",
    expectedOutput: "Error: database down\nerror: timeout",
    solution: "printf 'Error: database down\\nINFO: ok\\nerror: timeout' | grep -i 'error'"
  },
  {
    id: 'grep-line-numbers',
    category: 'grep',
    subcategory: 'grep',
    type: 'bash',
    title: 'Grep: Prefix Output with Line Numbers',
    resource: 'resources/linux/bash/grep_basic_flags.sh',
    task: 'Print matching lines prefixed with their line numbers for ":active" in "user1:inactive\\nuser2:active\\nuser3:active".',
    hint: "printf 'user1:inactive\\nuser2:active\\nuser3:active' | grep -n ':active'",
    expectedOutput: "2:user2:active\n3:user3:active",
    solution: "printf 'user1:inactive\\nuser2:active\\nuser3:active' | grep -n ':active'"
  },
  {
    id: 'grep-count',
    category: 'grep',
    subcategory: 'grep',
    type: 'bash',
    title: 'Grep: Match Occurrence Count',
    resource: 'resources/linux/bash/grep_basic_flags.sh',
    task: 'Count how many lines match "match" in "match 1\\nno\\nmatch 2\\nmatch 3" using grep flags.',
    hint: "printf 'match 1\\nno\\nmatch 2\\nmatch 3' | grep -c 'match'",
    expectedOutput: '3',
    solution: "printf 'match 1\\nno\\nmatch 2\\nmatch 3' | grep -c 'match'"
  }
];
