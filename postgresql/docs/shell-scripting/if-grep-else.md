# `if/grep/else` with command presence

```sh
if grep -qE "^#?shared_preload_libraries" "$CONF_FILE"; then
  sed -i ...
else
  echo "..." >> "$CONF_FILE"
fi
```

`grep -q` exits 0 as soon as it finds a match and prints nothing —
perfect for a boolean test. `-E` enables extended regex; `^#?` matches the
line with or without a leading `#`.

## Used in this repo

[`scripts/install-pg-stat-statements/setup.sh`](../../scripts/install-pg-stat-statements/setup.sh):31
— the "key already present?" test.

## See also

- [../../../linux/bash/commands/grep/basic-flags.md](../../../linux/bash/commands/grep/basic-flags.md)
- [../../../linux/bash/commands/grep/exit-status.md](../../../linux/bash/commands/grep/exit-status.md)
- [../../../linux/bash/if/if-else-fi.md](../../../linux/bash/if/if-else-fi.md)
