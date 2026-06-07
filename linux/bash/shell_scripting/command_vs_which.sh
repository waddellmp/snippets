#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: command-vs-which.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `command -v` vs `which`

```sh
if command -v pg_conftool >/dev/null 2>&1; then
```

`command -v` is the POSIX-portable way to check if a command exists.
`which` is an external program that may not be installed, and on some
distros it prints `pg_conftool not found` to stdout instead of failing —
both reasons to avoid it in scripts. The `>/dev/null 2>&1` silences any
output so the check is a clean boolean.

| | `which` | `command -v` |
| --- | --- | --- |
| External binary? | Yes (sometimes missing) | Built into the shell |
| Behavior when not found | Varies — may print "not found" to stdout, may exit 1, may exit 127 | Exits 1, prints nothing |
| POSIX? | No | Yes |

## Used in this repo

[`scripts/install_pg_stat_statements.sh`](../../../postgresql/scripts/pg_stat_statements/install_pg_stat_statements.sh):25.

## See also

- [../../../linux/bash/commands/command/which-replacement.md](../../../linux/bash/commands/command/which_replacement.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# if command -v pg_conftool >/dev/null 2>&1; then
#
