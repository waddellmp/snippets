#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: syntax.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `pg_conftool` syntax

```sh
pg_conftool <VERSION> <CLUSTER> <ACTION> <KEY> <VALUE>
```

| Argument | Example | Meaning |
| --- | --- | --- |
| `VERSION` | `17` | Major PostgreSQL version |
| `CLUSTER` | `main` | Cluster name (Debian convention) |
| `ACTION` | `set`, `get`, `remove` | What to do |
| `KEY` | `shared_preload_libraries` | GUC name |
| `VALUE` | `'pg_stat_statements'` | New value (quoted if it has commas) |

## See also

- [why-use-it](why_use_it.sh)
- [common-actions](common_actions.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# pg_conftool <VERSION> <CLUSTER> <ACTION> <KEY> <VALUE>
#
