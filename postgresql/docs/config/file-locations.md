# PostgreSQL configuration file locations

Where the config files live on a typical Debian/Ubuntu install.

## Files

| File | Location |
| --- | --- |
| `postgresql.conf` | `/etc/postgresql/[VERSION]/main/postgresql.conf` |
| `pg_hba.conf` | `/etc/postgresql/[VERSION]/main/pg_hba.conf` |
| `pg_ident.conf` | `/etc/postgresql/[VERSION]/main/pg_ident.conf` |
| `start.conf` | `/etc/postgresql/[VERSION]/main/start.conf` |
| `pg_ctl.conf` | `/etc/postgresql/[VERSION]/main/pg_ctl.conf` |

**Note**: For docker containers, the file is located at
`/var/lib/postgresql/[VERSION]/main/postgresql.conf`

## `postgresql.conf`

- Shows lots of parameters, very long file
- Contains [`shared_preload_libraries`](../shared-preload-libraries/where-it-lives.md)
  which is used to load extensions
- Contains `max_connections` which is the maximum number of connections
- Contains `shared_buffers` which is the amount of memory to use for
  caching

## `pg_hba.conf`

- Host-Based Authentication
- Controls access to the database

## See also

- [add-extension-to-postgresql-conf](add-extension-to-postgresql-conf.md) —
  the practical edit workflow
- [../pg-conftool/syntax.md](../pg-conftool/syntax.md) — the safe way to
  edit these files
- [../pg-config/usage.md](../pg-config/usage.md) — used to discover the
  installed version
