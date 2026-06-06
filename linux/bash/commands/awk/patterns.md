# `awk` — patterns

awk's full syntax is:

```
awk 'pattern { action }' file
```

- `pattern` — which lines to match (optional; if omitted, run on every line)
- `{ action }` — what to do with each matched line

## Pattern forms

```sh
# No pattern: run on every line
awk '{print}' file.txt            # same as 'cat file.txt'

# Regex pattern: lines matching the regex
awk '/error/ {print}' file.txt

# Numeric condition: lines where a field meets a condition
awk '$3 > 100 {print $1, $3}' data.txt

# Range pattern: from a START line to an END line
awk '/BEGIN/,/END/' file.txt
```

## Multiple pattern/action pairs

```sh
awk '/error/ {print "ERR:", $0} /warn/ {print "WARN:", $0}' log.txt
```

## BEGIN and END

Special patterns that run **once**, before or after input processing.

```sh
awk 'BEGIN {print "starting"} {sum += $1} END {print "total:", sum}'
```

| Pattern | When it runs |
| --- | --- |
| `BEGIN` | Once, before the first input line |
| `END` | Once, after the last input line |

## Why the braces

The braces are awk's program block — the code that runs per matched line.
Inside them you can have multiple statements separated by `;` or newlines.

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:13` uses the no-pattern
form:

```sh
pg_config --version | awk '{print $2}'
```

## See also

- [print-field](print-field.md)
- [variables-and-fields](variables-and-fields.md)
