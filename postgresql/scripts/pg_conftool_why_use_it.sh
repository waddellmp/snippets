#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: why-use-it.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# Why use `pg_conftool`

A Debian/Ubuntu-specific helper for safely editing `postgresql.conf` and
`pg_hba.conf`. It ships with the `postgresql-common` package and is the
recommended way to change server parameters on those distros.

## The problem

Hand-editing `postgresql.conf` with `sed` is risky:

- Whitespace and quoting rules are easy to break
- A typo can render the file unparseable, refusing to start the server
- You may leave duplicate or commented-out copies of the same setting

`pg_conftool` validates input, replaces the value in place, and keeps the
file well-formed.

## See also

- [syntax](pg_conftool_syntax.sh)
- [common-actions](pg_conftool_common_actions.sh)
EOF
