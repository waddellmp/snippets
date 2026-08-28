export const awkChallenges = [
  {
    id: 'awk-print-2',
    category: 'awk',
    subcategory: 'awk',
    type: 'bash',
    title: 'Awk: Extract Second Column',
    resource: 'resources/linux/bash/awk_print_field.sh',
    task: 'Given the line "PostgreSQL 17.2 Ubuntu", write a pipeline using awk to extract only the second word ("17.2").',
    hint: "echo 'PostgreSQL 17.2 Ubuntu' | awk '{print $2}'",
    expectedOutput: '17.2',
    solution: "echo 'PostgreSQL 17.2 Ubuntu' | awk '{print $2}'"
  },
  {
    id: 'awk-last-field',
    category: 'awk',
    subcategory: 'awk',
    type: 'bash',
    title: 'Awk: Extract Last Field Dynamically',
    resource: 'resources/linux/bash/awk_variables_and_fields.sh',
    task: 'Extract the LAST word of "apple banana cherry date elderberry" using awk\'s built-in field count variable.',
    hint: "echo 'apple banana cherry date elderberry' | awk '{print $NF}'",
    expectedOutput: 'elderberry',
    solution: "echo 'apple banana cherry date elderberry' | awk '{print $NF}'"
  },
  {
    id: 'awk-delimiter',
    category: 'awk',
    subcategory: 'awk',
    type: 'bash',
    title: 'Awk: Custom Field Delimiter',
    resource: 'resources/linux/bash/awk_variables_and_fields.sh',
    task: 'From "postgres:x:104:110:PostgreSQL:/var/lib/postgresql:/bin/bash", extract the username and shell separated by a space using awk with a colon delimiter.',
    hint: "echo 'postgres:x:104:110:PostgreSQL:/var/lib/postgresql:/bin/bash' | awk -F: '{print $1, $7}'",
    expectedOutput: 'postgres /bin/bash',
    solution: "echo 'postgres:x:104:110:PostgreSQL:/var/lib/postgresql:/bin/bash' | awk -F: '{print $1, $7}'"
  },
  {
    id: 'awk-pattern-filter',
    category: 'awk',
    subcategory: 'awk',
    type: 'bash',
    title: 'Awk: Regular Expression Pattern Filter',
    resource: 'resources/linux/bash/awk_patterns.sh',
    task: 'Given "INFO ok\\nERROR timeout\\nWARN memory\\nERROR crashed", filter only lines matching "ERROR" using awk pattern matching.',
    hint: "printf 'INFO ok\\nERROR timeout\\nWARN memory\\nERROR crashed' | awk '/ERROR/'",
    expectedOutput: "ERROR timeout\nERROR crashed",
    solution: "printf 'INFO ok\\nERROR timeout\\nWARN memory\\nERROR crashed' | awk '/ERROR/'"
  },
  {
    id: 'awk-sum-column',
    category: 'awk',
    subcategory: 'awk',
    type: 'bash',
    title: 'Awk: Sum Column Values',
    resource: 'resources/linux/bash/awk_patterns.sh',
    task: 'Given "10\\n20\\n30", sum all numbers using awk accumulation and print the final total in the termination block.',
    hint: "printf '10\\n20\\n30' | awk '{s+=$1} END {print s}'",
    expectedOutput: '60',
    solution: "printf '10\\n20\\n30' | awk '{s+=$1} END {print s}'"
  },
  {
    id: 'awk-line-length',
    category: 'awk',
    subcategory: 'awk',
    type: 'bash',
    title: 'Awk: Measure Line Lengths',
    resource: 'resources/exercises/linux/awk/awk-exercises.md',
    task: 'Given "cat\\nelephant\\ndog", use awk to print the character count of each line.',
    hint: "printf 'cat\\nelephant\\ndog' | awk '{print length($0)}'",
    expectedOutput: "3\n8\n3",
    solution: "printf 'cat\\nelephant\\ndog' | awk '{print length($0)}'"
  },
  {
    id: 'awk-filter-num-gt',
    category: 'awk',
    subcategory: 'awk',
    type: 'bash',
    title: 'Awk: Numeric Comparison on Field',
    resource: 'resources/exercises/linux/awk/awk-exercises.md',
    task: 'Given "alice:20\\nbob:32\\ncharlie:28", use awk with colon delimiter to print names of people with age strictly greater than 25.',
    hint: "printf 'alice:20\\nbob:32\\ncharlie:28' | awk -F: '$2 > 25 {print $1}'",
    expectedOutput: "bob\ncharlie",
    solution: "printf 'alice:20\\nbob:32\\ncharlie:28' | awk -F: '$2 > 25 {print $1}'"
  },
  {
    id: 'awk-count-lines',
    category: 'awk',
    subcategory: 'awk',
    type: 'bash',
    title: 'Awk: Total Record Count',
    resource: 'resources/exercises/linux/awk/awk-exercises.md',
    task: 'Given "alpha\\nbeta\\ngamma\\ndelta", use awk to print the total number of records processed.',
    hint: "printf 'alpha\\nbeta\\ngamma\\ndelta' | awk 'END {print NR}'",
    expectedOutput: '4',
    solution: "printf 'alpha\\nbeta\\ngamma\\ndelta' | awk 'END {print NR}'"
  }
];
