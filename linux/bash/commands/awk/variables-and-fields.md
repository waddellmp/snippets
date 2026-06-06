# `awk` — variables and fields

The special variables awk exposes for every line.

| Variable | Meaning |
| --- | --- |
| `$0` | Whole line |
| `$1`, `$2`, … | Fields (whitespace-separated by default) |
| `NF` | Number of fields on the current line |
| `NR` | Line number (1-indexed) |
| `FNR` | Line number within the current file (when reading multiple files) |
| `FS` | Input field separator (default: space) |
| `OFS` | Output field separator (default: space) |
| `RS` | Record separator (default: newline) |
| `ORS` | Output record separator (default: newline) |
| `FILENAME` | Current input file |
| `ARGC`, `ARGV` | Argument count and values |

## Useful shortcuts

```sh
awk '{print $NF}'               # last field
awk '{print $(NF-1)}'           # second-to-last field
awk 'NF > 0'                    # skip blank lines
awk 'NR == 1'                   # only the first line
awk 'NR > 1 {print}'            # skip the header
```

> [!NOTE]
> **Difference between `NF` and `$NF`:**
> * **`NF`** is the **number** of fields (e.g., `5`).
> * **`$NF`** is the **content** of the last field (e.g., `"Francisco"`). The `$` acts as a lookup/dereference operator, evaluating to `$(value of NF)`.

## Change the field separator

```sh
awk -F: '{print $1}' /etc/passwd     # /etc/passwd is colon-separated
awk 'BEGIN{FS=":"} {print $1}' file  # same thing inside the program
```

## User-defined variables

User variables declared or assigned in the action block **persist across
lines** and are only reset in `END`:

```sh
awk '{sum += $1; count++} END {print sum/count}' numbers.txt
```

## See also

- [print-field](print-field.md)
- [patterns](patterns.md)
- [bash/variables/assignment-and-reference](../../variables/assignment-and-reference.md)
