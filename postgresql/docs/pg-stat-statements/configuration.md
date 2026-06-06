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

- [install](install.md)
- [reset](reset.md)
- [../pg-conftool/syntax.md](../pg-conftool/syntax.md) — the safe way to
  set these
