#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: install.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
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
[`scripts/install_pg_stat_statements.sh`](install_pg_stat_statements.sh)
automates all three steps.

## See also

- [what-it-tracks](pg_stat_statements_what_it_tracks.sh)
- [read-the-stats](pg_stat_statements_read_the_stats.sh)
- [reset](pg_stat_statements_reset.sh)
- [configuration](pg_stat_statements_configuration.sh)
- [../shared-preload-libraries/where-it-lives.md](shared_preload_libraries_where_it_lives.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# sudo apt install postgresql-contrib
#
# sudo systemctl restart postgresql
#
# CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
#
