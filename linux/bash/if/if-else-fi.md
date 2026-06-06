# `if / elif / else / fi`

Run a block of code only when a command's exit status is 0.

## Basic form

```sh
if command; then
  # command exited 0
elif other_command; then
  # other_command exited 0 and the first didn't
else
  # none of the above
fi
```

The `if` keyword is followed by **a command**, not a condition. The command's
exit status is what branches. The `[ ... ]` and `[[ ... ]]` are just
commands that produce a useful exit status.

## Forms

```sh
# Single branch
if [ -f file.txt ]; then
  echo "exists"
fi

# Two branches
if [ "$EUID" -eq 0 ]; then
  echo "root"
else
  echo "not root"
fi

# Multiple branches
if [ "$x" -lt 0 ]; then
  echo "negative"
elif [ "$x" -eq 0 ]; then
  echo "zero"
else
  echo "positive"
fi
```

## Used in this repo

Three `if` blocks:

- `shared_preload_libraries.sh:6-9` — root check
- `shared_preload_libraries.sh:16-19` — config file exists
- `shared_preload_libraries.sh:25-36` — choose between `pg_conftool` and `sed`

## See also

- [short-circuit-and-or](short-circuit-and-or.md) — `&&` and `||` for inline conditionals
- [test/file-tests](../test/file-tests.md) — the `[ ... ]` concept
- [../commands/test/file-operators](../commands/test/file-operators.md) —
  the `test` command itself
- [substitution/or-fallback](../substitution/or-fallback.md) — `||` for default values
