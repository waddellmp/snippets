# `cut` — split by delimiter and pick fields

Remove sections from each line of input. Cheaper than `awk` when you only
need to split on a single delimiter.

## Basic usage

```sh
cut -d: -f1 /etc/passwd           # split on ':', print field 1
cut -d' ' -f2 file.txt            # split on space, print field 2
cut -c1-10 file.txt               # print characters 1 through 10
```

| Flag | Meaning |
| --- | --- |
| `-d` | Field delimiter (single char) |
| `-f` | Which field(s) to print (comma-separated, ranges allowed) |
| `-c` | Character positions instead of fields |
| `-s` | Don't print lines that have no delimiter |

## Examples

```sh
echo "a,b,c,d" | cut -d, -f2            # b
echo "a,b,c,d" | cut -d, -f2-3          # b,c
echo "a,b,c,d" | cut -d, -f1,3          # a,c
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:13` — keep only the part of
a version string before the first dot:

```sh
PG_VERSION=$(pg_config --version | awk '{print $2}' | cut -d. -f1)
# "17.2" -> "17"
```

## See also

- [characters](characters.md) — `-c` for character ranges
- [commands/awk/print-field](../awk/print-field.md) — for anything more
  than a single delimiter
- [commands/sed/replace](../sed/replace.md) — for regex-based extraction
