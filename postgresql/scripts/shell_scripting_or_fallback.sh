#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: or-fallback.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `|| echo` fallback

```sh
PG_VERSION=$(... || echo "17")
```

The `||` only runs the right-hand side if the **assignment** fails. A bare
`||` chains on the previous command's exit status, so it works inside a
`$(...)` substitution to give a default value without aborting the script.

## Used in this repo

[`scripts/install_pg_stat_statements.sh`](install_pg_stat_statements.sh):13
— the `pg_config` version-detection pipeline.

## See also

- [../../../linux/bash/substitution/or-fallback.md](../../../linux/bash/substitution/or_fallback.sh) —
  full discussion
- [../../../linux/bash/variables/parameter-defaults.md](../../../linux/bash/variables/parameter_defaults.sh) —
  the `${var:-default}` alternative
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# PG_VERSION=$(... || echo "17")
#
