#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: where-it-lives.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `shared_preload_libraries` — where it lives

A PostgreSQL server configuration parameter that lists **shared libraries**
to load at server start. It is the only way to load libraries that need to
allocate shared memory or run before any database connection is made.

## Where it lives

Set in `postgresql.conf`:

```ini
shared_preload_libraries = 'pg_stat_statements'
```

Multiple libraries are comma-separated:

```ini
shared_preload_libraries = 'pg_stat_statements,auto_explain,pgaudit'
```

## See also

- [why-preload](shared_preload_libraries_why_preload.sh) — why these need a restart
- [can-and-cannot-do](shared_preload_libraries_can_and_cannot_do.sh) — what it can/can't do
- [two-step-install](shared_preload_libraries_two_step_install.sh) — the install pattern
- [../pg-stat-statements/install.md](pg_stat_statements_install.sh)
- [../pg-conftool/why-use-it.md](pg_conftool_why_use_it.sh) — the safe
  way to edit it
EOF
