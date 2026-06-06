# `||` fallback for default values

Use `||` to provide a fallback value when a command produces no output or
fails.

```sh
PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
```

The `||` runs the right-hand side only if the **left-hand side exited
non-zero**. Because the assignment is inside `$(...)`, the `||` chains on
the assignment's exit status (which is the captured command's).

## Top-level form

```sh
command1 || command2       # run command2 only if command1 fails
```

```sh
grep -q pattern file || echo "no match"
cd /some/dir || exit 1
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:13`:

```sh
PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
```

This only catches the case where `pg_config` is missing **and** the rest of
the pipeline produces no output. If `pg_config` writes a different-format
version string and the awk/cut produces a non-numeric result, the variable
is set to a garbage value — but the subsequent `[ -f "$CONF_FILE" ]` check
will still fail loudly.

## See also

- [command-substitution](command-substitution.md)
- [variables/parameter-defaults](../variables/parameter-defaults.md) — the
  `${var:-default}` alternative
- [if/short-circuit-and-or](../if/short-circuit-and-or.md) — `&&` and `||`
  more broadly
