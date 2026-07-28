#!/usr/bin/env bash
# ==============================================================================
# PostgreSQL configuration file locations
#
# Where the config files live on a typical Debian/Ubuntu install:
# - postgresql.conf : /etc/postgresql/[VERSION]/main/postgresql.conf
# - pg_hba.conf     : /etc/postgresql/[VERSION]/main/pg_hba.conf
# - pg_ident.conf   : /etc/postgresql/[VERSION]/main/pg_ident.conf
# - start.conf      : /etc/postgresql/[VERSION]/main/start.conf
# - pg_ctl.conf     : /etc/postgresql/[VERSION]/main/pg_ctl.conf
#
# Note for Docker containers:
# Files are typically located at /var/lib/postgresql/data/ or similar data path.
# ==============================================================================

# Show location of postgresql.conf
psql -U postgres -c 'SHOW config_file;'

# Show location of pg_hba.conf (Host-Based Authentication)
psql -U postgres -c 'SHOW hba_file;'

# Show location of pg_ident.conf
psql -U postgres -c 'SHOW ident_file;'

# Show data directory path
psql -U postgres -c 'SHOW data_directory;'

# Inspect key configuration parameters
# shared_preload_libraries: used to load server-side extensions
psql -U postgres -c 'SHOW shared_preload_libraries;'

# max_connections: maximum number of client connections
psql -U postgres -c 'SHOW max_connections;'

# shared_buffers: memory used for shared caching
psql -U postgres -c 'SHOW shared_buffers;'

# ==============================================================================
# See also:
# - add_extension_to_postgresql_conf.sh — practical edit workflow
# - ../pg_conftool/syntax.sh — safe way to edit these files
# - ../pg_config/usage.sh — used to discover installed version details
# ==============================================================================

