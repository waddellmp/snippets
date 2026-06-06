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

- [read-the-stats](read-the-stats.md) — how to query the view
- [install](install.md)
- [configuration](configuration.md) — what's tunable
