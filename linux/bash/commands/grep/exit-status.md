# `grep` — exit status

| Code | Meaning |
| --- | --- |
| 0 | At least one match |
| 1 | No match |
| 2 | Error (file not found, etc.) |

This makes `grep -q` the standard "is X in this file?" test in shell
scripts.

```sh
if grep -q "pattern" file.txt; then
  echo "found"
fi
```

The `-q` flag tells grep to print nothing and exit as soon as it finds a
match — perfect for a boolean test.

## `set -e` and grep

By default, `grep ... && echo found` works fine. But under `set -e`, a
script that does `grep "pattern" file` (no `-q`) at the top level will
**abort** if the file doesn't contain the pattern, because grep exits 1
and `-e` reacts.

To make grep optional under `set -e`, use `|| true`:

```sh
set -e
grep "optional-pattern" file || true
echo "still running"
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:31` — clean `if/then/else`
boolean check:

```sh
if grep -qE "^#?shared_preload_libraries" "$CONF_FILE"; then
```

Inside the `if`, the exit status doesn't trigger `set -e` — that's the
point of the conditional.

## See also

- [basic-flags](basic-flags.md)
- [bash/set/strict-mode](../../set/strict-mode.md)
- [bash/if/if-else-fi](../../if/if-else-fi.md)
