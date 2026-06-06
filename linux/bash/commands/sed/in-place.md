# `sed` — in-place editing

Edit a file directly with `-i`.

## Basic usage

```sh
sed -i 's/old/new/g' file.txt      # edit the file directly
sed -i.bak 's/old/new/g' file.txt  # edit in place, save original as file.txt.bak
```

`-i` is GNU sed. On macOS/BSD, `-i` requires an explicit suffix (`sed -i ''`).

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:32` — replace an existing
`shared_preload_libraries` line, whether or not it's commented, with
flexible whitespace around the `=`:

```sh
sed -i "s/^[#]*[[:space:]]*shared_preload_libraries[[:space:]]*=[[:space:]]*.*/shared_preload_libraries = 'pg_stat_statements'/g" "$CONF_FILE"
```

The regex is anchored with `^` so we only touch lines that *start* with the
key, not lines that merely mention it.

## See also

- [replace](replace.md) — basic find-and-replace
- [anchors-regex](anchors-regex.md) — the regex anatomy
