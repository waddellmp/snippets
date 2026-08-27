# Bash Function Script Examples

Runnable, function-based Bash script examples for core scripting concepts, syntax patterns, and Linux utilities. Each script is an executable `.sh` file containing modular functions with numbered examples and demonstration blocks.

---

## Scripts Index

### Shebang & Shell Options
| Script | Description |
| --- | --- |
| [shebang_env_bash.sh](shebang_env_bash.sh) | Portable shebang `#!/usr/bin/env bash` and interpreter detection |
| [set_strict_mode.sh](set_strict_mode.sh) | Standard safety options: `set -euo pipefail` |
| [set_options_overview.sh](set_options_overview.sh) | Overview of debugging and execution flags (`-x`, `-v`, `-e`, `-u`) |

### Variables & Expansion
| Script | Description |
| --- | --- |
| [variables_assignment_and_reference.sh](variables_assignment_and_reference.sh) | Variable assignment syntax and referencing (`$VAR` vs `"$VAR"`) |
| [variables_parameter_defaults.sh](variables_parameter_defaults.sh) | Default values and fallbacks (`${VAR:-default}`, `${VAR:=default}`) |
| [variables_expansions.sh](variables_expansions.sh) | String manipulation, prefixes, suffixes, and replacements (`${VAR%/*}`, etc.) |
| [variables_special_variables.sh](variables_special_variables.sh) | Builtin special variables (`$?`, `$#`, `$@`, `$$`, `$!`) |
| [variables_euid.sh](variables_euid.sh) | Effective user ID check for root privileges (`$EUID -ne 0`) |
| [variables_uid_vs_euid.sh](variables_uid_vs_euid.sh) | Comparison of real user ID (`$UID`) vs effective user ID (`$EUID`) |

### Flow Control & Conditionals
| Script | Description |
| --- | --- |
| [if_else_fi.sh](if_else_fi.sh) | Standard `if ... then ... elif ... else ... fi` blocks |
| [if_short_circuit_and_or.sh](if_short_circuit_and_or.sh) | Short-circuit boolean chaining (`&&` and `\|\|`) |

### Substitution & Pipelines
| Script | Description |
| --- | --- |
| [substitution_command.sh](substitution_command.sh) | Command substitution syntax (`$(command)`) |
| [substitution_or_fallback.sh](substitution_or_fallback.sh) | Fallback execution when commands fail or return empty |
| [pipelines_basic.sh](pipelines_basic.sh) | Chaining commands with `\|` pipes |
| [pipelines_exit_status.sh](pipelines_exit_status.sh) | Pipeline exit codes and `${PIPESTATUS[@]}` |

### Quoting & Redirection
| Script | Description |
| --- | --- |
| [quoting_single_vs_double.sh](quoting_single_vs_double.sh) | Literal strings (`'...'`) vs variable expansion (`"..."`) |
| [quoting_when_to_quote.sh](quoting_when_to_quote.sh) | Preventing word splitting and glob expansion |
| [redirection_operators.sh](redirection_operators.sh) | Basic redirection (`>`, `>>`, `<`, `2>`, `&>`) |
| [redirection_order_matters.sh](redirection_order_matters.sh) | Stream redirection ordering (`2>&1 >file` vs `>file 2>&1`) |
| [redirection_file_descriptors.sh](redirection_file_descriptors.sh) | Managing file descriptors (`stdin=0`, `stdout=1`, `stderr=2`, custom FDs) |

### Tests & Expressions (`[` / `test`)
| Script | Description |
| --- | --- |
| [test_file_operators.sh](test_file_operators.sh) | File checks (`-f`, `-d`, `-e`, `-r`, `-w`, `-x`, `-s`) |
| [test_string_operators.sh](test_string_operators.sh) | String comparisons (`-z`, `-n`, `=`, `!=`) |
| [test_numeric_operators.sh](test_numeric_operators.sh) | Integer comparisons (`-eq`, `-ne`, `-lt`, `-le`, `-gt`, `-ge`) |
| [test_negation.sh](test_negation.sh) | Inverting tests with `!` |

### Core Commands & Utilities
| Script | Description |
| --- | --- |
| [awk_print_field.sh](awk_print_field.sh) | Print specific whitespace-delimited columns |
| [awk_variables_and_fields.sh](awk_variables_and_fields.sh) | Working with `$1`, `$NF`, `NR`, `FS`, and custom variables |
| [awk_patterns.sh](awk_patterns.sh) | Conditional filtering with regex matches and range patterns |
| [command_bypass_aliases.sh](command_bypass_aliases.sh) | Run built-in/binary ignoring user aliases or shell functions |
| [command_which_replacement.sh](command_which_replacement.sh) | Checking binary existence portably (`command -v`) |
| [cut_fields.sh](cut_fields.sh) | Extracting delimited fields (`cut -d: -f1`) |
| [cut_characters.sh](cut_characters.sh) | Extracting specific character offsets (`cut -c1-10`) |
| [echo_basic.sh](echo_basic.sh) | Printing output and escape sequences (`-e`, `-n`) |
| [echo_redirection.sh](echo_redirection.sh) | Writing output to stderr or files |
| [exit_codes.sh](exit_codes.sh) | Standard exit status conventions (`0`, `1`, `127`) |
| [grep_basic_flags.sh](grep_basic_flags.sh) | Matching text patterns (`-i`, `-v`, `-c`, `-n`, `-q`, `-E`) |
| [grep_exit_status.sh](grep_exit_status.sh) | Using `grep -q` as a conditional test |
| [psql_connect.sh](psql_connect.sh) | Connecting to PostgreSQL database instances |
| [psql_meta_commands.sh](psql_meta_commands.sh) | Interactive and scripted psql meta-commands (`\l`, `\dt`, `\dn`, `\x`) |
| [psql_create_extension.sh](psql_create_extension.sh) | Installing PostgreSQL extensions via psql |
| [sed_replace.sh](sed_replace.sh) | Stream substitution (`s/find/replace/g`) |
| [sed_in_place.sh](sed_in_place.sh) | In-place file edits (`sed -i`) |
| [sed_anchors_regex.sh](sed_anchors_regex.sh) | Regex matching with `^`, `$`, capture groups, and backreferences |
| [sudo_run_as_user.sh](sudo_run_as_user.sh) | Running commands as another user (`sudo -u postgres ...`) |
| [systemctl_service_control.sh](systemctl_service_control.sh) | Managing systemd services (`start`, `stop`, `restart`, `status`, `reload`) |
