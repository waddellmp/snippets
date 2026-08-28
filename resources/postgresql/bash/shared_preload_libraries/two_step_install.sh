#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: two-step-install.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# The two-step install pattern

Most server-side extensions that use `shared_preload_libraries` require
**two separate actions** to enable:

1. **Server-side**: add the library to `shared_preload_libraries` in
   `postgresql.conf` and **restart** the server.
2. **Database-side**: run `CREATE EXTENSION <name>;` in each database
   where you want it active.

Both are required:

- Skipping step 1: `CREATE EXTENSION` will fail with "could not access
  file" or "function does not exist" because the library is not in
  shared memory.
- Skipping step 2: the library is loaded but no functions/tables exist
  in your database.

The `install_pg_stat_statements.sh` script in this repo automates both steps.

## See also

- [where-it-lives](where_it_lives.sh)
- [why-preload](why_preload.sh)
- [can-and-cannot-do](can_and_cannot_do.sh)
- [../pg-stat-statements/install.md](../pg_stat_statements/install.sh)
- [../../scripts/install_pg_stat_statements.sh](../pg_stat_statements/install_pg_stat_statements.sh)
EOF
