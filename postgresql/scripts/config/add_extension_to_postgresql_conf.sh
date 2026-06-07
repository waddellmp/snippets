#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: add-extension-to-postgresql-conf.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# Add an extension to `postgresql.conf`

The practical workflow for enabling a server-side extension.

## The three steps

1. Add the library to `shared_preload_libraries` in `postgresql.conf`
2. Restart the server
3. `CREATE EXTENSION` in each database where you want it

## Step-by-step

```sh
# 1. Add 'pg_stat_statements' to shared_preload_libraries
shared_preload_libraries="pg_stat_statements"

# 2. Connect as superuser and find the config file
psql -U postgres -c 'SHOW config_file;'

# 3. Find the data directory
SHOW data_directory;

# 4. Restart the server
pg_ctl restart --pgdata "/path/to/data/directory"
# or, on systemd systems:
sudo systemctl restart postgresql

# 5. Create the extension in the target database
sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
```

## See also

- [file-locations](file_locations.sh)
- [../shared-preload-libraries/where-it-lives.md](../shared_preload_libraries/where_it_lives.sh)
- [../pg-stat-statements/install.md](../pg_stat_statements/install.sh) —
  the canonical example
- [../../scripts/install_pg_stat_statements.sh](../pg_stat_statements/install_pg_stat_statements.sh) —
  the full script
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# # 1. Add 'pg_stat_statements' to shared_preload_libraries
# shared_preload_libraries="pg_stat_statements"
# 
# # 2. Connect as superuser and find the config file
# psql -U postgres -c 'SHOW config_file;'
# 
# # 3. Find the data directory
# SHOW data_directory;
# 
# # 4. Restart the server
# pg_ctl restart --pgdata "/path/to/data/directory"
# # or, on systemd systems:
# sudo systemctl restart postgresql
# 
# # 5. Create the extension in the target database
# sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
#
