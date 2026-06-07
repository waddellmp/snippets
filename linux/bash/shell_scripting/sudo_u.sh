#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: sudo-u.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `sudo -u`

```sh
sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS ..."
```

On Debian/Ubuntu the `postgres` **OS user** owns the database cluster, and
extensions must be created by a database superuser. `sudo -u postgres`
drops to that OS user, then `psql` connects as the matching DB superuser
— no password prompt, no need to edit `pg_hba.conf`.

## Used in this repo

[`scripts/install_pg_stat_statements.sh`](../../../postgresql/scripts/pg_stat_statements/install_pg_stat_statements.sh):44.

## See also

- [../../../linux/bash/commands/sudo/run-as-user.md](../../../linux/bash/commands/sudo/run_as_user.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS ..."
#
