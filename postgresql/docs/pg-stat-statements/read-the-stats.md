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

- [what-it-tracks](what-it-tracks.md) — the column meanings
- [reset](reset.md) — clearing the stats
- [install](install.md)
