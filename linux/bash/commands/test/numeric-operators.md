# `test` / `[` — numeric operators

The integer comparison operators.

```sh
[ "$n" -eq 0 ]      # equal
[ "$n" -ne 0 ]      # not equal
[ "$n" -gt 10 ]     # greater than
[ "$n" -lt 10 ]     # less than
[ "$n" -ge 10 ]     # greater or equal
[ "$n" -le 10 ]     # less or equal
```

Numeric operators compare as **integers**. Do not use `=`, `<`, `>` for
numbers — those do string comparison (`"10" = "9"` is true, not false).

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:6`:

```sh
if [ "$EUID" -ne 0 ]; then
```

`-ne` is the numeric "not equal" test. Comparing `$EUID` against `0` works
because both sides are integers.

## See also

- [file-operators](file-operators.md)
- [string-operators](string-operators.md)
- [bash/variables/euid](../../variables/euid.md)
