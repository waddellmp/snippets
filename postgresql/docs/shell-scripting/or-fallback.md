# `|| echo` fallback

```sh
PG_VERSION=$(... || echo "17")
```

The `||` only runs the right-hand side if the **assignment** fails. A bare
`||` chains on the previous command's exit status, so it works inside a
`$(...)` substitution to give a default value without aborting the script.

## Used in this repo

[`scripts/install-pg-stat-statements/setup.sh`](../../scripts/install-pg-stat-statements/setup.sh):13
— the `pg_config` version-detection pipeline.

## See also

- [../../../linux/bash/substitution/or-fallback.md](../../../linux/bash/substitution/or-fallback.md) —
  full discussion
- [../../../linux/bash/variables/parameter-defaults.md](../../../linux/bash/variables/parameter-defaults.md) —
  the `${var:-default}` alternative
