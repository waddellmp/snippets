#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: what-it-tracks.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# What `pg_stat_statements` tracks

For each distinct query (normalized by replacing literals with `$1`, `$2`,
…), `pg_stat_statements` records:

| Column | Meaning |
| --- | --- |
| `calls` | How many times the query was executed |
| `total_exec_time` | Total time spent executing (ms) |
| `total_plan_time` | Total time spent planning (ms) |
| `mean_exec_time` | Average execution time (ms) |
| `rows` | Total rows returned/affected |
| `shared_blks_hit` | Blocks served from shared cache |
| `shared_blks_read` | Blocks read from disk |

## See also

- [read-the-stats](read_the_stats.sh) — how to query the view
- [install](install.sh)
- [configuration](configuration.sh) — what's tunable
EOF
