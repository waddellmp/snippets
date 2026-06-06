# Command substitution `$(...)`

Run a command, capture its stdout into a string, and use that string in
place.

## Syntax

```sh
$(command)            # modern, nestable, easy to read
`command`             # legacy backticks, do not nest
```

## Examples

```sh
NOW=$(date)
USERS=$(who | wc -l)
PG_VERSION=$(pg_config --version | awk '{print $2}' | cut -d. -f1)
```

The value is **the bytes the command writes to stdout**. Stderr is unaffected
(it still goes to the terminal unless redirected).

## Nesting

```sh
# Easy with $()
echo "I am in $(basename $(pwd))"

# Hard with backticks — you'd have to escape the inner ones
echo "I am in `basename \`pwd\``"
```

Always use `$(...)` in new code.

## Trailing newlines are stripped

Bash quietly removes any trailing newlines from the captured output. So
`$(echo hi)` is the string `hi`, not `hi\n`.

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:13`:

```sh
PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
```

The `2>/dev/null` on `pg_config` suppresses its "command not found" message
when not installed, but the captured value still comes from stdout (or from
the `|| echo "17"` fallback if the pipeline returns nothing).

## See also

- [pipelines/basic](../pipelines/basic.md) — pipelines compose with
  `$(...)` cleanly
- [variables/assignment-and-reference](../variables/assignment-and-reference.md)
- [or-fallback](or-fallback.md) — the `||` fallback idiom
