#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: in-this-script.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `pg_config` in `setup.sh`

How the install script uses `pg_config` to detect the installed PostgreSQL
major version.

## The pipeline

```sh
PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
```

Step by step:

| Stage | Command | Example output |
| --- | --- | --- |
| Raw | `pg_config --version` | `PostgreSQL 17.2 (Ubuntu 17.2-1.pgdg24.04+1)` |
| 2nd field | `awk '{print $2}'` | `17.2` |
| Before first `.` | `cut -d. -f1` | `17` |

The result is then used to build the config-file path:

```sh
CONF_FILE="/etc/postgresql/${PG_VERSION}/main/postgresql.conf"
# -> /etc/postgresql/17/main/postgresql.conf
```

## Why the `|| echo "17"` fallback?

`pg_config` may be missing on minimal installs or in containers. Falling
back to `"17"` keeps the script from aborting, but the subsequent `[ -f
"$CONF_FILE" ]` check will still fail loudly if the file is not actually
present, so a missing PostgreSQL is never silently ignored.

## See also

- [usage](pg_config_usage.sh)
- [../shell-scripting/or-fallback.md](shell_scripting_or_fallback.sh) —
  the `||` fallback idiom
- [../../scripts/install_pg_stat_statements.sh](install_pg_stat_statements.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
#
# CONF_FILE="/etc/postgresql/${PG_VERSION}/main/postgresql.conf"
# # -> /etc/postgresql/17/main/postgresql.conf
#
