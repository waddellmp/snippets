export const flowChallenges = [
  {
    id: 'flow-short-circuit-or',
    category: 'flow',
    subcategory: 'flow',
    type: 'bash',
    title: 'Flow: Short-Circuit Fallback Operator',
    resource: 'resources/linux/bash/if_short_circuit_and_or.sh',
    task: 'Use short-circuit evaluation with the `false` binary command to conditionally print "fallback" only when the command fails.',
    hint: 'false || echo fallback',
    expectedOutput: 'fallback',
    solution: 'false || echo fallback'
  },
  {
    id: 'flow-short-circuit-and',
    category: 'flow',
    subcategory: 'flow',
    type: 'bash',
    title: 'Flow: Short-Circuit Conditional Success',
    resource: 'resources/linux/bash/if_short_circuit_and_or.sh',
    task: 'Use short-circuit evaluation with the `true` binary command to conditionally print "success" only when the command succeeds.',
    hint: 'true && echo success',
    expectedOutput: 'success',
    solution: 'true && echo success'
  },
  {
    id: 'flow-test-string-non-empty',
    category: 'flow',
    subcategory: 'flow',
    type: 'bash',
    title: 'Flow: Test String Non-Empty Condition',
    resource: 'resources/linux/bash/test_string_operators.sh',
    task: 'Using test brackets, test if the string "admin" has non-zero length, and if true, print "valid".',
    hint: '[ -n "admin" ] && echo "valid"',
    expectedOutput: 'valid',
    solution: '[ -n "admin" ] && echo "valid"'
  },
  {
    id: 'flow-test-numeric-equal',
    category: 'flow',
    subcategory: 'flow',
    type: 'bash',
    title: 'Flow: Numeric Equality Comparison',
    resource: 'resources/linux/bash/test_numeric_operators.sh',
    task: 'Using test brackets, compare whether number 5432 is numerically equal to 5432 and print "match" on success.',
    hint: '[ 5432 -eq 5432 ] && echo match',
    expectedOutput: 'match',
    solution: '[ 5432 -eq 5432 ] && echo match'
  },
  {
    id: 'flow-negation-test',
    category: 'flow',
    subcategory: 'flow',
    type: 'bash',
    title: 'Flow: Inverted Logical Test Negation',
    resource: 'resources/linux/bash/test_negation.sh',
    task: 'Using logical negation with test brackets, verify that the string "" is NOT non-empty and print "empty".',
    hint: '! [ -n "" ] && echo "empty"',
    expectedOutput: 'empty',
    solution: '! [ -n "" ] && echo "empty"'
  }
];
