# PostgreSQL scripts

Runnable shell scripts.

## Folders

| Folder | What it does |
| --- | --- |
| [install-pg-stat-statements](install-pg-stat-statements/) | Install and enable the `pg_stat_statements` extension |

## Scripts

- [`install-pg-stat-statements/setup.sh`](install-pg-stat-statements/setup.sh) —
  root check → detect PG version → set `shared_preload_libraries` (via
  `pg_conftool` or `sed`) → restart → `CREATE EXTENSION`.

## Adding new scripts

1. Create `scripts/<topic>/<action>.sh` with a descriptive name
2. Add a brief one-line description to the table above
3. Cross-link from the relevant `docs/` snippets
