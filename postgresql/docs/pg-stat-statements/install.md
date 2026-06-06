# Install `pg_stat_statements`

A PostgreSQL **contrib** extension that tracks planning and execution
statistics for every query the server runs. It is the standard tool for
finding slow or frequently-called queries.

## Install

Requires the `postgresql-contrib` package (Debian/Ubuntu) or the equivalent
on your distro.

```sh
sudo apt install postgresql-contrib
```

Then add it to `shared_preload_libraries` and restart:

```ini
# postgresql.conf
shared_preload_libraries = 'pg_stat_statements'
```

```sh
sudo systemctl restart postgresql
```

Finally, create the extension in each database where you want stats:

```sql
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
```

The companion script
[`scripts/install-pg-stat-statements/setup.sh`](../../scripts/install-pg-stat-statements/setup.sh)
automates all three steps.

## See also

- [what-it-tracks](what-it-tracks.md)
- [read-the-stats](read-the-stats.md)
- [reset](reset.md)
- [configuration](configuration.md)
- [../shared-preload-libraries/where-it-lives.md](../shared-preload-libraries/where-it-lives.md)
