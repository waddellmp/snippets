export const cutChallenges = [
  {
    id: 'cut-field-first',
    category: 'cut',
    subcategory: 'cut',
    type: 'bash',
    title: 'Cut: Extract Field by Delimiter',
    resource: 'resources/linux/bash/cut_fields.sh',
    task: 'Extract the first field from "root:x:0:0:root" using cut with colon delimiter.',
    hint: "echo 'root:x:0:0:root' | cut -d: -f1",
    expectedOutput: 'root',
    solution: "echo 'root:x:0:0:root' | cut -d: -f1"
  },
  {
    id: 'cut-multiple-fields',
    category: 'cut',
    subcategory: 'cut',
    type: 'bash',
    title: 'Cut: Extract Non-Contiguous Fields',
    resource: 'resources/linux/bash/cut_fields.sh',
    task: 'Extract the 1st and 3rd fields from "apple,banana,cherry,date" using cut with comma delimiter.',
    hint: "echo 'apple,banana,cherry,date' | cut -d, -f1,3",
    expectedOutput: 'apple,cherry',
    solution: "echo 'apple,banana,cherry,date' | cut -d, -f1,3"
  },
  {
    id: 'cut-characters',
    category: 'cut',
    subcategory: 'cut',
    type: 'bash',
    title: 'Cut: Extract Character Range',
    resource: 'resources/linux/bash/cut_characters.sh',
    task: 'Extract the first 10 characters (the date portion) from ISO timestamp "2026-08-27T10:15:30Z" using cut.',
    hint: "echo '2026-08-27T10:15:30Z' | cut -c1-10",
    expectedOutput: '2026-08-27',
    solution: "echo '2026-08-27T10:15:30Z' | cut -c1-10"
  },
  {
    id: 'cut-short-sha',
    category: 'cut',
    subcategory: 'cut',
    type: 'bash',
    title: 'Cut: Extract Short Git SHA Prefix',
    resource: 'resources/linux/bash/cut_characters.sh',
    task: 'Extract the 7-character short commit hash from "a4a1d249810bba2c1bef5099485c2aaf565d3bec" using character slicing.',
    hint: "echo 'a4a1d249810bba2c1bef5099485c2aaf565d3bec' | cut -c1-7",
    expectedOutput: 'a4a1d24',
    solution: "echo 'a4a1d249810bba2c1bef5099485c2aaf565d3bec' | cut -c1-7"
  }
];
