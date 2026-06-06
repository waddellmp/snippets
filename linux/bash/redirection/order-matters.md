# Redirection order matters

`command > out 2>&1` and `command 2>&1 > out` do different things.

| Order | What happens |
| --- | --- |
| `> out 2>&1` | First redirect stdout to `out`, then point stderr to wherever stdout now points. **Both go to `out`.** |
| `2>&1 > out` | First point stderr to the current stdout (terminal), then redirect stdout to `out`. **Only stdout goes to `out`; stderr still goes to the terminal.** |

The first form is almost always what you want.

## Why

Redirections are processed **left to right**. At each step, the right-hand
side is evaluated against the **current** state of the file descriptors.

```sh
# Step 1: stdout -> out  (stdout now points to 'out')
# Step 2: 2 -> where stdout now points  (stderr -> 'out')
> out 2>&1

# Step 1: 2 -> where stdout currently points  (stdout still points to terminal, so stderr -> terminal)
# Step 2: stdout -> out  (stdout now points to 'out', stderr still at terminal)
2>&1 > out
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:25` — silent existence check:

```sh
if command -v pg_conftool >/dev/null 2>&1; then
```

The order is the "right" one for this purpose: discard stdout first, then
merge stderr into the already-discarded stdout. If you swapped the order,
stderr would go to the terminal — you'd see "pg_conftool: not found" even
though the test is meant to be silent.

## See also

- [operators](operators.md) — full reference
