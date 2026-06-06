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

[`scripts/install-pg-stat-statements/setup.sh`](../../scripts/install-pg-stat-statements/setup.sh):3
— first non-comment line.

## See also

- [../../../linux/bash/set/strict-mode.md](../../../linux/bash/set/strict-mode.md) —
  full discussion
- [../../../linux/bash/set/options-overview.md](../../../linux/bash/set/options-overview.md) —
  the full `set` reference
