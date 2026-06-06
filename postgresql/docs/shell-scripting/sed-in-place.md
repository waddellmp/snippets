# `sed -i` in-place editing

```sh
sed -i "s/^[#]*[[:space:]]*shared_preload_libraries[[:space:]]*=[[:space:]]*.*/shared_preload_libraries = 'pg_stat_statements'/g" "$CONF_FILE"
```

The regex is deliberately permissive so it matches a commented-out line,
an uncommented one, and any amount of whitespace around the `=`. Anchored
with `^` so we only touch lines that *start* with the key, not lines that
merely mention it.

## Used in this repo

[`scripts/install-pg-stat-statements/setup.sh`](../../scripts/install-pg-stat-statements/setup.sh):32
— the `sed` fallback branch when `pg_conftool` is unavailable.

## See also

- [../../../linux/bash/commands/sed/in-place.md](../../../linux/bash/commands/sed/in-place.md)
- [../../../linux/bash/commands/sed/anchors-regex.md](../../../linux/bash/commands/sed/anchors-regex.md)
