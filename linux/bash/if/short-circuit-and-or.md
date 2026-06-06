# Short-circuit `&&` and `||`

Two operators that run a second command conditionally based on the first's
exit status.

| Form | Behavior |
| --- | --- |
| `cmd1 && cmd2` | Run `cmd2` only if `cmd1` **succeeded** (exit 0) |
| `cmd1 \|\| cmd2` | Run `cmd2` only if `cmd1` **failed** (non-zero) |

## Common uses

```sh
[ -f file ] && echo "exists"
[ -f file ] || echo "missing"
cd /some/dir || exit 1
mkdir /tmp/foo && cd /tmp/foo
```

`||` is also the standard way to provide a fallback default:

```sh
PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
```

See [substitution/or-fallback](../substitution/or-fallback.md) for the
default-value idiom.

## How they interact with `set -e`

`set -e` does **not** apply to commands in `&&`/`||` chains — this is by
design, so the script can react to failures. The second command's status
becomes the overall status of the chain.

## Used in this repo

- `||` fallback in the version-detection pipeline
  (`shared_preload_libraries.sh:13`)
- `&&` is not used in this script

## See also

- [if/if-else-fi](if-else-fi.md) — block-form conditionals
- [substitution/or-fallback](../substitution/or-fallback.md)
