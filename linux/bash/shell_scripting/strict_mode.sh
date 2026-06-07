#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: strict-mode.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `set -euo pipefail`

The most common first line (after the shebang) in a serious bash script:

```sh
set -euo pipefail
```

| Flag | What it does |
| --- | --- |
| `-e` | Exit immediately if any command returns non-zero |
| `-u` | Treat unset variables as an error (no silent empty strings) |
| `-o pipefail` | A pipeline fails if **any** stage fails, not just the last |

Without `pipefail`, the version-detection pipeline
`pg_config --version | awk | cut` would still "succeed" if `pg_config`
failed but the later stages produced output.

## Used in this repo

[`scripts/install_pg_stat_statements.sh`](../../../postgresql/scripts/pg_stat_statements/install_pg_stat_statements.sh):3
— first non-comment line.

## See also

- [../../../linux/bash/set/strict-mode.md](strict_mode.sh) —
  full discussion
- [../../../linux/bash/set/options-overview.md](../../../linux/bash/set/options_overview.sh) —
  the full `set` reference
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# set -euo pipefail
#
