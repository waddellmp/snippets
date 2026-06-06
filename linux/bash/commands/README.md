# Linux commands

Cheat-sheet style references for Linux/Unix commands actually used in
scripts under this repo. Each command gets its own folder; each snippet
inside is a focused topic.

## Folders

| Folder | What it covers | Used in |
| --- | --- | --- |
| [awk](awk/) | Pattern-scanning / per-line text processing | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [command](command/) | Builtin that bypasses aliases/functions; `command -v` for existence checks | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [cut](cut/) | Split lines by delimiter and pick fields | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [echo](echo/) | Print text to stdout/stderr | everywhere |
| [exit](exit/) | End the script with a status code | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [grep](grep/) | Print lines matching a pattern | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [psql](psql/) | PostgreSQL interactive terminal | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [sed](sed/) | Stream editor, find-and-replace | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [set](../set/) | Toggle shell options (`-e`, `-u`, `-o pipefail`) | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [sudo](sudo/) | Run a command as another user | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [systemctl](systemctl/) | Start / stop / restart systemd services | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [test](test/) | Evaluate an expression, return 0 or 1 | `postgresql/scripts/install-pg-stat-statements/setup.sh` |
| [tmux](tmux/) | Terminal multiplexer, session manager | - |

## Snippet index

| Snippet | Folder |
| --- | --- |
| [awk: print a field](awk/print-field.md) | awk |
| [awk: variables and fields](awk/variables-and-fields.md) | awk |
| [awk: patterns](awk/patterns.md) | awk |
| [command: bypass aliases](command/bypass-aliases.md) | command |
| [command: which replacement](command/which-replacement.md) | command |
| [cut: fields](cut/fields.md) | cut |
| [cut: characters](cut/characters.md) | cut |
| [echo: basic](echo/basic.md) | echo |
| [echo: redirection](echo/redirection.md) | echo |
| [exit: codes](exit/codes.md) | exit |
| [grep: basic flags](grep/basic-flags.md) | grep |
| [grep: exit status](grep/exit-status.md) | grep |
| [psql: connect](psql/connect.md) | psql |
| [psql: meta-commands](psql/meta-commands.md) | psql |
| [psql: CREATE EXTENSION](psql/create-extension.md) | psql |
| [sed: replace](sed/replace.md) | sed |
| [sed: in-place](sed/in-place.md) | sed |
| [sed: anchors and regex](sed/anchors-regex.md) | sed |
| [set: strict mode](../set/strict-mode.md) | set |
| [sudo: run as user](sudo/run-as-user.md) | sudo |
| [systemctl: service control](systemctl/service-control.md) | systemctl |
| [test: file operators](test/file-operators.md) | test |
| [test: string operators](test/string-operators.md) | test |
| [test: numeric operators](test/numeric-operators.md) | test |
| [tmux: manage sessions](tmux/manage-sessions.md) | tmux |
| [tmux: windows and panes](tmux/windows-and-panes.md) | tmux |
| [tmux: copy mode](tmux/copy-mode.md) | tmux |

## Adding new snippets

When you use a new command in a script:

1. Create `bash/commands/<cmd>/<topic>.md` with a descriptive filename
2. Include a **Used in this repo** section if applicable
3. Add a row to the snippet index above
