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

- [read-the-stats](read-the-stats.md)
- [configuration](configuration.md) — `pg_stat_statements.max`
- [install](install.md)
