# `sed` — find and replace

Stream editor. Reads input line by line, applies one or more
transformations, prints the result. Most commonly used for find-and-replace.

## Basic find-and-replace

```sh
sed 's/old/new/' file.txt          # replace FIRST match on each line
sed 's/old/new/g' file.txt         # replace ALL matches (global)
```

## Anchors and capture groups

```sh
sed 's/^/  /' file.txt             # prepend two spaces to each line
sed -E 's/^#?[[:space:]]*([a-z_]+)[[:space:]]*=.*/  \1/' file.txt
```

`-E` enables extended regex (no need to backslash `()`, `+`, `?`, `|`,
`{}`).

## Address by line number / pattern

```sh
sed '5d' file.txt                  # delete line 5
sed '/pattern/d' file.txt          # delete lines matching pattern
sed '2,5s/old/new/g' file.txt      # replace only on lines 2-5
```

## See also

- [in-place](in-place.md) — edit the file directly
- [anchors-regex](anchors-regex.md) — anchors, capture groups, and the
  regex flavors
- [commands/grep/basic-flags](../grep/basic-flags.md) — for finding, not
  transforming
- [commands/awk/print-field](../awk/print-field.md) — for per-line logic
  more complex than a substitution
