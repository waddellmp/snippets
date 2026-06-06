# `command` — bypass aliases and functions

A shell builtin that runs a command, ignoring any function or alias with
the same name.

## Forms

```sh
command ls                   # run ls, ignoring any 'ls' function/alias
command -v pg_conftool       # print the path, or nothing if not found
command -V pg_conftool       # longer description of how the name resolves
```

| Form | Behavior |
| --- | --- |
| `command NAME ARGS` | Run `NAME`, skipping functions and aliases |
| `command -v NAME` | Print path of `NAME` (or nothing), exit 0 if found |
| `command -V NAME` | Print a description like `NAME is /usr/bin/NAME` |

## Why use it

In an interactive shell you may have aliased `ls='ls --color=auto'` or
shadowed `grep` with a function. `command grep` runs the **real** command.

In a script, `command` is a defensive guarantee: nothing in the environment
can hijack the binary you're calling.

## See also

- [which-replacement](which-replacement.md) — the `command -v` form
