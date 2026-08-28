import { awkChallenges } from './awk.js';
import { sedChallenges } from './sed.js';
import { cutChallenges } from './cut.js';
import { grepChallenges } from './grep.js';
import { variableChallenges } from './variables.js';
import { flowChallenges } from './flow.js';
import { pipesRedirectChallenges } from './pipes_redirect.js';
import { coreCommandsChallenges } from './core_commands.js';
import { sqlChallenges } from './sql.js';
import { tmuxChallenges } from './tmux.js';
import { rubyChallenges } from './ruby.js';
import { STRICT_MODE_CHALLENGES } from './strict_mode.js';
import { FILE_TESTS_CHALLENGES } from './file_tests.js';
import { QUOTING_SUB_CHALLENGES } from './quoting_sub.js';

// Tag all bash challenges with domain & subcategory
const taggedAwk = awkChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'awk' }));
const taggedSed = sedChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'sed' }));
const taggedCut = cutChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'cut' }));
const taggedGrep = grepChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'grep' }));
const taggedVariables = variableChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'variables' }));
const taggedFlow = flowChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'flow' }));
const taggedPipes = pipesRedirectChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'pipes_redirect' }));
const taggedCore = coreCommandsChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'core_commands' }));
const taggedTmux = tmuxChallenges.map(c => ({ ...c, domain: 'bash', subcategory: 'tmux' }));
const taggedStrictMode = STRICT_MODE_CHALLENGES.map(c => ({ ...c, domain: 'bash', subcategory: 'strict_mode' }));
const taggedFileTests = FILE_TESTS_CHALLENGES.map(c => ({ ...c, domain: 'bash', subcategory: 'file_tests' }));
const taggedQuotingSub = QUOTING_SUB_CHALLENGES.map(c => ({ ...c, domain: 'bash', subcategory: 'quoting_sub' }));

const allBashChallenges = [
  ...taggedAwk,
  ...taggedSed,
  ...taggedCut,
  ...taggedGrep,
  ...taggedVariables,
  ...taggedFlow,
  ...taggedPipes,
  ...taggedCore,
  ...taggedTmux,
  ...taggedStrictMode,
  ...taggedFileTests,
  ...taggedQuotingSub
];

export const CHALLENGES = [
  ...rubyChallenges,
  ...sqlChallenges,
  ...allBashChallenges
];

// Nested Domain & Subcategory Hierarchy
export const HIERARCHY = [
  {
    id: 'all',
    label: '🌟 All Challenges (Full Practice Run)',
    count: CHALLENGES.length,
    isLeaf: true
  },
  {
    id: 'ruby',
    label: '💎 Ruby Language',
    count: rubyChallenges.length,
    subcategories: [
      { id: 'ruby', label: '📦 All Ruby Challenges', filter: c => c.domain === 'ruby' },
      { id: 'ruby-enumerables', label: '📊 Enumerables & Arrays (map, select, tally, group_by)', filter: c => c.category === 'ruby-enumerables' },
      { id: 'ruby-blocks', label: '🧱 Blocks, Procs & Lambdas (yield, ->(), &:symbol)', filter: c => c.category === 'ruby-blocks' },
      { id: 'ruby-hashes', label: '🔑 Hashes & Symbols (Hash.new(0), dig, slice, transform)', filter: c => c.category === 'ruby-hashes' },
      { id: 'ruby-strings', label: '📝 Strings & Regular Expressions (gsub, interpolation)', filter: c => c.category === 'ruby-strings' },
      { id: 'ruby-oop', label: '🏗️ OOP, Classes, Super & Mixins (attr_accessor, self, include)', filter: c => c.category === 'ruby-oop' }
    ]
  },
  {
    id: 'sql',
    label: '🐘 PostgreSQL & SQL',
    count: sqlChallenges.length,
    subcategories: [
      { id: 'sql', label: '📦 All SQL Challenges', filter: c => c.domain === 'sql' },
      { id: 'sql-ddl', label: '📐 DDL, Tables & Extensions (CREATE EXTENSION)', filter: c => c.category === 'sql-ddl' },
      { id: 'sql-indexing', label: '⚡ Concurrent Indexing (CREATE/DROP INDEX CONCURRENTLY)', filter: c => c.category === 'sql-indexing' },
      { id: 'sql-transactions', label: '🔄 Transactions & Rollbacks (BEGIN, ROLLBACK)', filter: c => c.category === 'sql-transactions' },
      { id: 'sql-admin', label: '🛠️ Server Admin & Monitoring (SHOW config, pg_cancel, roles)', filter: c => c.category === 'sql-admin' }
    ]
  },
  {
    id: 'bash',
    label: '🐚 Linux & Bash Shell',
    count: allBashChallenges.length,
    subcategories: [
      { id: 'bash', label: '📦 All Linux & Bash Challenges', filter: c => c.domain === 'bash' },
      { id: 'strict_mode', label: '🛡️ Strict Mode & Options (set -euo pipefail, -x)', filter: c => c.category === 'strict_mode' },
      { id: 'file_tests', label: '📁 File & Directory Tests (-f, -d, -s, -e, -r/-w)', filter: c => c.category === 'file_tests' },
      { id: 'quoting_sub', label: '💬 Quoting, Substitution & Special Vars ($@, $(), $EUID, $#)', filter: c => c.category === 'quoting_sub' },
      { id: 'awk', label: '📊 Awk (Fields, Variables, Records & Length)', filter: c => c.category === 'awk' },
      { id: 'sed', label: '✏️ Sed (Search, Replace & Regex)', filter: c => c.category === 'sed' },
      { id: 'cut', label: '✂️ Cut (Delimiters & Character Offsets)', filter: c => c.category === 'cut' },
      { id: 'grep', label: '🔍 Grep (Pattern Matching & Exit Codes)', filter: c => c.category === 'grep' },
      { id: 'variables', label: '💲 Variables (Expansion & Default Fallbacks)', filter: c => c.category === 'variables' },
      { id: 'flow', label: '🔀 Flow Control (If-Else & Short-Circuits)', filter: c => c.category === 'flow' },
      { id: 'pipes_redirect', label: '🌊 Pipelines & Redirection (sort, 2>&1, /dev/null)', filter: c => c.category === 'pipes_redirect' },
      { id: 'core_commands', label: '🛠️ Core Commands (command, exit, psql, systemctl)', filter: c => c.category === 'core_commands' },
      { id: 'tmux', label: '🖥️ Tmux (Sessions, Windows, Splits & Zoom)', filter: c => c.category === 'tmux' }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', label: '🌟 All Challenges (Full Practice Run)' },
  { id: 'ruby', label: '💎 Ruby (All Challenges)' },
  { id: 'ruby-enumerables', label: '💎 Ruby: Enumerables & Arrays' },
  { id: 'ruby-blocks', label: '💎 Ruby: Blocks & Closures' },
  { id: 'ruby-hashes', label: '💎 Ruby: Hashes & Symbols' },
  { id: 'ruby-strings', label: '💎 Ruby: Strings & Regex' },
  { id: 'ruby-oop', label: '💎 Ruby: OOP & Mixins' },
  { id: 'sql', label: '🐘 PostgreSQL & SQL (All Challenges)' },
  { id: 'sql-ddl', label: '🐘 SQL: DDL & Extensions' },
  { id: 'sql-indexing', label: '🐘 SQL: Concurrent Indexing' },
  { id: 'sql-transactions', label: '🐘 SQL: Transactions' },
  { id: 'sql-admin', label: '🐘 SQL: Server Admin & Monitoring' },
  { id: 'bash', label: '🐚 Linux & Bash (All Challenges)' },
  { id: 'strict_mode', label: '🛡️ Bash: Strict Mode & Shell Options' },
  { id: 'file_tests', label: '📁 Bash: File & Directory Tests' },
  { id: 'quoting_sub', label: '💬 Bash: Quoting & Command Substitution' },
  { id: 'awk', label: '📊 Awk (Fields & Patterns)' },
  { id: 'sed', label: '✏️ Sed (Search & Replace)' },
  { id: 'cut', label: '✂️ Cut (Delimiters & Offsets)' },
  { id: 'grep', label: '🔍 Grep (Search & Exit Codes)' },
  { id: 'variables', label: '💲 Variables (Expansion & Defaults)' },
  { id: 'flow', label: '🔀 Flow Control (Conditionals)' },
  { id: 'pipes_redirect', label: '🌊 Pipelines & Redirection' },
  { id: 'core_commands', label: '🛠️ Core Commands & Exit Codes' },
  { id: 'tmux', label: '🖥️ Tmux Multiplexing' }
];

export {
  rubyChallenges,
  sqlChallenges,
  awkChallenges,
  sedChallenges,
  cutChallenges,
  grepChallenges,
  variableChallenges,
  flowChallenges,
  pipesRedirectChallenges,
  coreCommandsChallenges,
  tmuxChallenges,
  STRICT_MODE_CHALLENGES,
  FILE_TESTS_CHALLENGES,
  QUOTING_SUB_CHALLENGES
};
