#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: sed-in-place.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# `sed -i` in-place editing

```sh
sed -i "s/^[#]*[[:space:]]*shared_preload_libraries[[:space:]]*=[[:space:]]*.*/shared_preload_libraries = 'pg_stat_statements'/g" "$CONF_FILE"
```

The regex is deliberately permissive so it matches a commented-out line,
an uncommented one, and any amount of whitespace around the `=`. Anchored
with `^` so we only touch lines that *start* with the key, not lines that
merely mention it.

## Used in this repo

[`scripts/install_pg_stat_statements.sh`](install_pg_stat_statements.sh):32
— the `sed` fallback branch when `pg_conftool` is unavailable.

## See also

- [../../../linux/bash/commands/sed/in-place.md](../../../linux/bash/commands/sed/in_place.sh)
- [../../../linux/bash/commands/sed/anchors-regex.md](../../../linux/bash/commands/sed/anchors_regex.sh)
EOF

# ==============================================================================
# DEMO / EXAMPLES (Uncomment or copy-paste to run)
# ==============================================================================
# sed -i "s/^[#]*[[:space:]]*shared_preload_libraries[[:space:]]*=[[:space:]]*.*/shared_preload_libraries = 'pg_stat_statements'/g" "$CONF_FILE"
#
