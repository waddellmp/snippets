# Negating tests with `!`

Prefix `[` with `!` to invert the result.

```sh
[ -f file ]              # file exists AND is a regular file
[ ! -f file ]            # file is missing OR is not a regular file
```

`!` only flips the exit status of the immediately following test; it does
**not** combine multiple tests. For combining, use `&&` / `||` / `-a` /
`-o` (or the `[[ ... ]]` keyword, which has `&&`/`||` inside it).

## Combining

```sh
[ -f file ] && [ -r file ]                    # both must be true
[ -f file -a -r file ]                        # older form, not POSIX-clean
[ -f file ] || [ -d file ]                    # either
[ ! -f file ]                                 # negation
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:16` — guard against a missing
config file:

```sh
if [ ! -f "$CONF_FILE" ]; then
```

## See also

- [file-tests](file-tests.md)
- [commands/test/file-operators](../commands/test/file-operators.md)
- [if/if-else-fi](../if/if-else-fi.md)
