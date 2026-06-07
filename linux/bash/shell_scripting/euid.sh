#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: euid.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `$EUID`

The **effective user ID** of the current process. Compared against `0`
(root's UID) to require elevation:

```sh
if [ "$EUID" -ne 0 ]; then
  echo "Error: Please run this script with sudo or as root." >&2
  exit 1
fi
```

`EUID` is a bash builtin, not an environment variable — that's why it
works even under `set -u` (which would reject unset *variables*).

`>&2` redirects the error message to **stderr** so it doesn't get mixed
into normal output a caller might be capturing.

## Used in this repo

[`scripts/install_pg_stat_statements.sh`](../../../postgresql/scripts/pg_stat_statements/install_pg_stat_statements.sh):6.

## See also

- [../../../linux/bash/variables/euid.md](euid.sh) —
  full reference
- [../../../linux/bash/variables/uid-vs-euid.md](../../../linux/bash/variables/uid_vs_euid.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# if [ "$EUID" -ne 0 ]; then
#   echo "Error: Please run this script with sudo or as root." >&2
#   exit 1
# fi
#
