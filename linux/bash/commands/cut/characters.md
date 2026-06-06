# `cut` — character ranges

Use `-c` to select character positions instead of fields.

## Basic usage

```sh
cut -c1-10 file.txt               # print characters 1 through 10
cut -c1,3,5 file.txt              # print characters 1, 3, 5
cut -c-5 file.txt                 # print first 5 characters
cut -c5- file.txt                 # print from character 5 to end
```

| Form | Meaning |
| --- | --- |
| `N-M` | Characters N through M |
| `N-` | From character N to end |
| `-M` | From start to character M |
| `N,M,P` | Specific characters |
| `N-M,P-Q` | Ranges and specific characters |

## Example

```sh
echo "Hello, world" | cut -c1-5
# Hello

echo "Hello, world" | cut -c8-
# world
```

## When to use

- `-c` is good for fixed-width records (e.g. legacy log files, some CSV
  exports)
- For delimited data, prefer `-d`/`-f` (see [fields](fields.md))
- For regex-based extraction, use `sed` or `awk`

## See also

- [fields](fields.md) — the more common delimiter form
