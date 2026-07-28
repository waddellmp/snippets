#!/usr/bin/env bash
# ==============================================================================
# Add an extension to `postgresql.conf`
#
# Practical workflow for enabling a server-side extension:
# 1. Add the library to `shared_preload_libraries` in `postgresql.conf`
# 2. Restart the server
# 3. `CREATE EXTENSION` in each database where you want it
# ==============================================================================

# 1. Add 'pg_stat_statements' to shared_preload_libraries (edit postgresql.conf)
# shared_preload_libraries = 'pg_stat_statements'

# 2. Connect as superuser and find the config file
psql -U postgres -c 'SHOW config_file;'

# 3. Find the data directory
psql -U postgres -c 'SHOW data_directory;'

# 4. Restart the server
# Using pg_ctl:
# pg_ctl restart --pgdata "/path/to/data/directory"
# Or, on systemd systems:
sudo systemctl restart postgresql

# 5. Create the extension in the target database
sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"

# ==============================================================================
# See also:
# - file_locations.sh
# - ../shared_preload_libraries/where_it_lives.sh
# - ../pg_stat_statements/install.sh
# - ../pg_stat_statements/install_pg_stat_statements.sh
# ==============================================================================

