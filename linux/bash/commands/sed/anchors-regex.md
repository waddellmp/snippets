# `sed` — anchors and regex flavors

Two flavors of regex in sed:

| Flag | Regex | Notes |
| --- | --- | --- |
| (default) | Basic (BRE) | `(`, `)`, `+`, `?`, `|`, `{}` need backslashes |
| `-E` | Extended (ERE) | The above are metachars, no backslashes needed |

The script uses basic regex with explicit `[[:space:]]` character classes
because they're clearer than `\s` (which isn't in BRE either).

## Useful character classes

| Class | Matches |
| --- | --- |
| `[[:space:]]` | Any whitespace (space, tab, newline, etc.) |
| `[[:digit:]]` | A digit |
| `[[:alpha:]]` | A letter |
| `[[:alnum:]]` | Alphanumeric |
| `.` | Any single character (not newline) |
| `^` | Start of line |
| `$` | End of line |
| `*` | Zero or more of the previous |
| `\+` (BRE) / `+` (ERE) | One or more of the previous |
| `?` (ERE only) | Zero or one of the previous |
| `[abc]` | Any character in the set |
| `[^abc]` | Any character **not** in the set |

## Anchoring

```sh
sed 's/^/  /' file.txt             # prepend two spaces to each line
sed 's/$/./' file.txt              # append a period to each line
sed 's/^foo//' file.txt            # remove "foo" only at start of line
```

Anchoring is what makes the script's `^[#]*[[:space:]]*shared_preload_libraries`
safe — it only matches lines that **start** with the key, not lines that
mention it somewhere in the middle.

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:32` — anchored replacement
of the `shared_preload_libraries` line:

```sh
sed -i "s/^[#]*[[:space:]]*shared_preload_libraries[[:space:]]*=[[:space:]]*.*/shared_preload_libraries = 'pg_stat_statements'/g" "$CONF_FILE"
```

Breakdown:

| Piece | Matches |
| --- | --- |
| `^` | Start of line |
| `[#]*` | Zero or more `#` (handles commented or uncommented) |
| `[[:space:]]*` | Optional whitespace |
| `shared_preload_libraries` | The key, literally |
| `[[:space:]]*=[[:space:]]*` | The `=` with optional surrounding whitespace |
| `.*` | Whatever the current value is (replaced entirely) |

## See also

- [replace](replace.md) — basic find-and-replace
- [in-place](in-place.md) — `-i` for editing files
