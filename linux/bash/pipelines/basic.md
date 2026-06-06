# Basic pipelines

Chain commands so the stdout of each becomes the stdin of the next. Like
an assembly line for data.

## Basic form

```sh
cat file.txt | grep error | sort | uniq
```

Each stage runs in its own subshell, started in parallel. The shell
connects them with pipes.

## Common idioms

```sh
# Count lines containing a pattern
grep -c error log.txt

# Show only the 5 biggest files in a directory
du -sh * | sort -h | tail -5

# Sum a column of numbers
awk '{s += $1} END {print s}' numbers.txt
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:13`:

```sh
PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
```

- `pg_config --version` → `PostgreSQL 17.2 (Ubuntu ...)`
- `awk '{print $2}'` → `17.2`
- `cut -d. -f1` → `17`
- `|| echo "17"` → `17` if any earlier stage failed

## See also

- [exit-status](exit-status.md) — why `pipefail` matters
- [commands/awk/print-field](../commands/awk/print-field.md)
- [commands/cut/fields](../commands/cut/fields.md)
