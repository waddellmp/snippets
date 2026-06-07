#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: reset.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# Reset `pg_stat_statements`

Clear the accumulated stats and start fresh.

```sql
SELECT pg_stat_statements_reset();
```

This is useful:

- After a config change to see only post-change numbers
- Before a benchmark run to get clean per-query timings
- When the view has grown large (limited by `pg_stat_statements.max`)

## See also

- [read-the-stats](read_the_stats.sh)
- [configuration](configuration.sh) — `pg_stat_statements.max`
- [install](install.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# SELECT pg_stat_statements_reset();
#
