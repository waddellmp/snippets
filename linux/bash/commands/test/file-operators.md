# `test` / `[` — file operators

A command (also spelled `test`) that evaluates an expression and exits 0
(true) or 1 (false). Used in `if` and `while` statements.

The trailing `]` is just a required argument — the `[` command expects it.
The `[[ ... ]]` form is a bash keyword with more features; this file is
about the older POSIX `[`.

## File tests

```sh
[ -e file ]         # exists
[ -f file ]         # exists and is a regular file
[ -d file ]         # exists and is a directory
[ -L file ]         # exists and is a symlink
[ -r file ]         # readable
[ -w file ]         # writable
[ -x file ]         # executable
[ -s file ]         # exists and has size > 0
```

## Negation

```sh
[ ! -f file ]            # NOT a regular file
[ -f file ]              # file exists AND is a regular file
```

## Combining tests

```sh
[ -f file ] && [ -r file ]                    # both must be true
[ -f file -a -r file ]                        # older form, not POSIX-clean
[ -f file ] || [ -d file ]                    # either
[ ! -f file ]                                 # negation
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:16`:

```sh
if [ ! -f "$CONF_FILE" ]; then
  echo "Error: PostgreSQL configuration file not found at ${CONF_FILE}." >&2
  exit 1
fi
```

## See also

- [bash/test/file-tests](../../test/file-tests.md) — the bash concept
  doc
- [string-operators](string-operators.md) — string tests
- [numeric-operators](numeric-operators.md) — integer tests
- [bash/if/if-else-fi](../../if/if-else-fi.md)
