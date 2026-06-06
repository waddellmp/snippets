# `echo` — print to output

Print text to standard output. Built into the shell, so it's always
available and faster than spawning an external binary.

## Forms

```sh
echo "Hello, world"            # default: trailing newline
echo -n "no newline"           # suppress the newline (-n is a bash extension)
echo -e "tab:\there\n"         # interpret escapes (-e is a bash extension)
```

`echo` is a **bash builtin** and behaves slightly differently across
shells (`/bin/echo`, `dash`, `zsh`). For portable, predictable output,
prefer `printf`.

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh` uses `echo` throughout for
status and error messages. Error messages go to stderr.

## See also

- [redirection](redirection.md) — sending output to files or stderr
