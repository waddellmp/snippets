# Bash snippets

Cheat-sheet style notes on bash idioms, focused on what's actually used in
scripts under this repo. Each concept gets its own folder; each snippet
inside is a focused topic.

## Folders

| Folder | What it covers | Used in |
| --- | --- | --- |
| [shebang](shebang/) | `#!/usr/bin/env bash` and why | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [set](set/) | `set -euo pipefail` and other options | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [variables](variables/) | Assignment, expansion, special vars | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [if](if/) | `if/else/fi`, `&&`, `||` | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [substitution](substitution/) | `$(...)` and `\|\|` fallback | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [pipelines](pipelines/) | Chaining commands with `\|` | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [quoting](quoting/) | `'...'`, `"..."`, why it matters | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [redirection](redirection/) | `>`, `>>`, `2>`, `>&2`, `2>&1` | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [test](test/) | `[ -f ... ]`, `[ -n ... ]`, numeric tests | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [commands](commands/) | Cheat-sheet references for commands used in scripts | everywhere |

## Snippet index

| Snippet | Folder |
| --- | --- |
| [shebang: env bash](shebang/env-bash.md) | shebang |
| [set: strict mode](set/strict-mode.md) | set |
| [set: options overview](set/options-overview.md) | set |
| [variables: assignment and reference](variables/assignment-and-reference.md) | variables |
| [variables: expansions](variables/expansions.md) | variables |
| [variables: special variables](variables/special-variables.md) | variables |
| [variables: parameter defaults](variables/parameter-defaults.md) | variables |
| [variables: $EUID](variables/euid.md) | variables |
| [variables: $UID vs $EUID](variables/uid-vs-euid.md) | variables |
| [if: if/else/fi](if/if-else-fi.md) | if |
| [if: short-circuit &&/||](if/short-circuit-and-or.md) | if |
| [substitution: command substitution](substitution/command-substitution.md) | substitution |
| [substitution: || fallback](substitution/or-fallback.md) | substitution |
| [pipelines: basic](pipelines/basic.md) | pipelines |
| [pipelines: exit status](pipelines/exit-status.md) | pipelines |
| [quoting: single vs double](quoting/single-vs-double.md) | quoting |
| [quoting: when to quote](quoting/when-to-quote.md) | quoting |
| [redirection: file descriptors](redirection/file-descriptors.md) | redirection |
| [redirection: operators](redirection/operators.md) | redirection |
| [redirection: order matters](redirection/order-matters.md) | redirection |
| [test: file tests](test/file-tests.md) | test |
| [test: negation](test/negation.md) | test |
| [test: string tests](test/string-tests.md) | test |
| [test: numeric tests](test/numeric-tests.md) | test |

## Reading order if you're new to bash

1. [shebang/env-bash](shebang/env-bash.md) — the first line
2. [set/strict-mode](set/strict-mode.md) — the second line
3. [variables/assignment-and-reference](variables/assignment-and-reference.md)
   + [quoting/single-vs-double](quoting/single-vs-double.md)
4. [if/if-else-fi](if/if-else-fi.md) +
   [substitution/or-fallback](substitution/or-fallback.md)
5. [substitution/command-substitution](substitution/command-substitution.md) +
   [pipelines/basic](pipelines/basic.md)
6. [redirection/file-descriptors](redirection/file-descriptors.md) +
   [redirection/operators](redirection/operators.md)
7. [test/file-tests](test/file-tests.md) +
   [variables/euid](variables/euid.md)

## Cross-references

- Per-command reference lives in [`commands/`](commands/README.md)
- The script these notes are based on is
  [`../../postgresql/scripts/install-pg-stat-statements/setup.sh`](../../postgresql/scripts/install-pg-stat-statements/setup.sh),
  with commentary in
  [`../../postgresql/docs/shell-scripting/`](../../postgresql/docs/shell-scripting/)
