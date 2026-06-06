# `set -euo pipefail`

The most common first line (after the shebang) in a serious bash script:

```sh
set -euo pipefail
```

| Flag | Effect |
| --- | --- |
| `-e` | Exit on the first command that returns non-zero |
| `-u` | Treat unset variables as errors |
| `-o pipefail` | A pipeline's exit status is the first non-zero stage's, not the last |

## Why each one matters

### `-e` — fail fast

```sh
set -e
false
echo "you will never see this"
```

Without `-e`, the script would happily continue past `false`.

### `-u` — no silent empty strings

```sh
set -u
rm "$FILE"            # if FILE is unset, this errors out
rm $FILE              # same: unquoted unset var is empty, becomes 'rm '
```

Without `-u`, `rm` with no arguments errors out with a generic message.
With `-u`, you get a clear "FILE: unbound variable" pointing at the actual
mistake.

### `-o pipefail` — don't trust the last command

```sh
pg_config --version | awk '{print $2}' | cut -d. -f1
```

Without `pipefail`, if `pg_config` fails but `awk` and `cut` produce output
from a partially-written pipe, the pipeline "succeeds". With `pipefail`, the
pipeline's status is the first non-zero one.

## Cautions

- `-e` does **not** apply to commands in `if` conditions, `&&`/`||` chains,
  or commands followed by `!`. This is by design: the script can react to
  those failures.
- `-u` requires you to default-init variables you might use empty:
  `FILE="${FILE:-}"`.

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:3`:

```sh
set -euo pipefail
```

## See also

- [set/options-overview](options-overview.md) — the full `set` reference
- [variables/assignment-and-reference](../variables/assignment-and-reference.md) —
  `set -u` and the importance of quoting
- [pipelines/exit-status](../pipelines/exit-status.md) — what `pipefail`
  protects against
