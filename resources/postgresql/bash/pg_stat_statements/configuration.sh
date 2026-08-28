#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: configuration.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `pg_stat_statements` configuration

All knobs are in `postgresql.conf` (can be changed with `pg_conftool` or
`ALTER SYSTEM`):

| Setting | Default | Purpose |
| --- | --- | --- |
| `pg_stat_statements.max` | 5000 | Max tracked statements |
| `pg_stat_statements.track` | `top` | `top`, `all`, or `none` |
| `pg_stat_statements.track_utility` | `on` | Track `EXPLAIN`, `VACUUM`, etc. |
| `pg_stat_statements.track_planning` | `off` | Track planning time |
| `pg_stat_statements.save` | `on` | Persist stats across server crashes |

## See also

- [install](install.sh)
- [reset](reset.sh)
- [../pg-conftool/syntax.md](../pg_conftool/syntax.sh) — the safe way to
  set these
EOF
