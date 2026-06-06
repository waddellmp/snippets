# Parameter defaults (`${var:-default}`)

Two forms for providing a fallback when a variable is missing or empty.

| Form | Behavior |
| --- | --- |
| `${var:-default}` | Use `default` if `var` is unset or empty (**doesn't** assign) |
| `${var:=default}` | Use `default` and **assign** it back to `var` |

## The `:-` form — read-only fallback

```sh
echo "${PG_VERSION:-17}"
```

If `PG_VERSION` is unset or empty, the expression evaluates to `17`. The
variable itself is **not** changed.

## The `:=` form — assign and use

```sh
: "${PG_VERSION:=17}"      # the leading ':' is a no-op; we just want the side effect
echo "$PG_VERSION"         # 17, and PG_VERSION is now also set
```

`:=` both reads the default **and** writes it back to the variable. Useful
inside scripts to ensure a variable is initialized.

## Init for `set -u`

Under `set -u`, an unset variable is an error. To have a variable that may
legitimately be empty, default-init it:

```sh
: "${DEBUG:=}"
[ -n "$DEBUG" ] && set -x
```

## Used in this repo

The script uses the `||` form for its version fallback, not `${var:-default}`.
See [substitution/or-fallback](../substitution/or-fallback.md) for that.

## See also

- [expansions](expansions.md) — full parameter expansion reference
- [substitution/or-fallback](../substitution/or-fallback.md) — the
  alternative `||` idiom
