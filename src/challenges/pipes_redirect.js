export const pipesRedirectChallenges = [
  {
    id: 'pipe-sort-uniq',
    category: 'pipes_redirect',
    subcategory: 'pipes_redirect',
    type: 'bash',
    title: 'Pipelines: Sort and Deduplicate Stream',
    resource: 'resources/linux/bash/pipelines_basic.sh',
    task: 'Sort and deduplicate "banana\\napple\\nbanana\\ncherry" using a pipeline.',
    hint: "printf 'banana\\napple\\nbanana\\ncherry' | sort | uniq",
    expectedOutput: "apple\nbanana\ncherry",
    solution: "printf 'banana\\napple\\nbanana\\ncherry' | sort | uniq"
  },
  {
    id: 'redirect-stderr-to-stdout',
    category: 'pipes_redirect',
    subcategory: 'pipes_redirect',
    type: 'bash',
    title: 'Redirection: Combine Stderr into Stdout Stream',
    resource: 'resources/linux/bash/redirection_order_matters.sh',
    task: 'Write a subshell command that writes "error alert" to stderr (file descriptor 2), combines stderr into stdout, and pipes to grep to filter for "alert".',
    hint: '(echo "error alert" >&2) 2>&1 | grep "alert"',
    expectedOutput: 'error alert',
    solution: '(echo "error alert" >&2) 2>&1 | grep "alert"'
  },
  {
    id: 'redirect-discard-output',
    category: 'pipes_redirect',
    subcategory: 'pipes_redirect',
    type: 'bash',
    title: 'Redirection: Silence Standard and Error Output',
    resource: 'resources/linux/bash/redirection_operators.sh',
    task: 'Write a command that silences both stdout and stderr of `echo secret` by redirecting to /dev/null, and on success prints "silenced".',
    hint: 'echo secret > /dev/null 2>&1 && echo silenced',
    expectedOutput: 'silenced',
    solution: 'echo secret > /dev/null 2>&1 && echo silenced'
  }
];
