# `awk` — print a field

The most common awk one-liner: pull out a specific field of each line.

## Basic form

```sh
awk '{print $2}' file.txt          # print the 2nd field of every line
```

| Variable | Meaning |
| --- | --- |
| `$0` | Whole line |
| `$1`, `$2`, … | Fields (whitespace-separated by default) |
| `NF` | Number of fields on the current line |
| `NR` | Line number |
| `FS` | Input field separator (default: space) |
| `OFS` | Output field separator (default: space) |

## Walkthrough

For the input line `PostgreSQL 17.2 (Ubuntu ...)`:

| Field | Value |
| --- | --- |
| `$0` | `PostgreSQL 17.2 (Ubuntu ...)` |
| `$1` | `PostgreSQL` |
| `$2` | `17.2` |
| `$3` | `(Ubuntu` |
| `$4` | `...)` |
| `NF` | `4` |

`awk '{print $2}'` produces `17.2`.

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:13` — extract the 2nd field
of `pg_config --version`:

```sh
PG_VERSION=$(pg_config --version | awk '{print $2}')
# "PostgreSQL 17.2 ..." -> "17.2"
```

## See also

- [variables-and-fields](variables-and-fields.md) — `$0`, `NF`, `NR`, etc.
- [patterns](patterns.md) — pattern + action form
- [commands/cut/fields](../cut/fields.md) — for simple "split on one
  delimiter" tasks
