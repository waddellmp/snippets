# `command -v` — portable existence check

The portable, reliable way to test whether a command exists. A better
alternative to `which`.

## Why not `which`?

| | `which` | `command -v` |
| --- | --- | --- |
| External binary? | Yes (sometimes missing) | Built into the shell |
| Behavior when not found | Varies — may print "not found" to stdout, may exit 1, may exit 127 | Exits 1, prints nothing |
| POSIX? | No | Yes |

## The standard idiom

```sh
if command -v pg_conftool >/dev/null 2>&1; then
  # ...use pg_conftool...
fi
```

`command -v` exits 0 if found, non-zero otherwise, and prints nothing. The
`>/dev/null 2>&1` silences any output so the test is purely a check on the
exit status.

## Output (without silencing)

```sh
$ command -v psql
/usr/bin/psql

$ command -v definitely_not_a_command
$ echo $?
1
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:25`:

```sh
if command -v pg_conftool >/dev/null 2>&1; then
```

## See also

- [bypass-aliases](bypass-aliases.md)
- [bash/if/if-else-fi](../../if/if-else-fi.md)
- [bash/redirection/order-matters](../../redirection/order-matters.md)
