#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: read-the-stats.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# Read the `pg_stat_statements` view

The view is `pg_stat_statements`:

```sql
SELECT
  calls,
  round(total_exec_time::numeric, 2) AS total_ms,
  round(mean_exec_time::numeric, 2) AS mean_ms,
  rows,
  query
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;
```

This surfaces the top 20 queries by total execution time — typically the
queries worth optimizing first.

## See also

- [what-it-tracks](what_it_tracks.sh) — the column meanings
- [reset](reset.sh) — clearing the stats
- [install](install.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# SELECT
#   calls,
#   round(total_exec_time::numeric, 2) AS total_ms,
#   round(mean_exec_time::numeric, 2) AS mean_ms,
#   rows,
#   query
# FROM pg_stat_statements
# ORDER BY total_exec_time DESC
# LIMIT 20;
#
