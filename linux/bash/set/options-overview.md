# `set` options reference

Change shell options. The most useful variants are the strict-mode flags
(see [strict-mode](strict-mode.md)), but there are more.

## Strict-mode trio

```sh
set -euo pipefail
```

| Flag | Effect |
| --- | --- |
| `-e` | Exit on the first command that returns non-zero |
| `-u` | Treat unset variables as errors |
| `-o pipefail` | A pipeline's exit status is the first non-zero stage's, not the last |

## Other useful flags

```sh
set -x            # print each command before running (debug)
set -v            # print each line of input as it's read
set +e            # turn -e back off (later in the script)
```

`+` toggles an option off (the inverse of `-`).

## Toggling for one command

```sh
# set -e would normally make this script exit on the failing grep
set +e
grep -q "pattern" file
status=$?
set -e
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:3` — first non-comment line:

```sh
set -euo pipefail
```

## See also

- [strict-mode](strict-mode.md) — deep dive on the trio
