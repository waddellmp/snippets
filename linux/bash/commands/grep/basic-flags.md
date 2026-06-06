# `grep` — basic flags

Search input lines for a pattern and print (or count) the matches.

## Basic usage

```sh
grep "pattern" file.txt            # print matching lines
grep -i "pattern" file.txt         # case-insensitive
grep -v "pattern" file.txt         # invert: print non-matching lines
grep -c "pattern" file.txt         # count matches
grep -n "pattern" file.txt         # show line numbers
```

| Flag | Meaning |
| --- | --- |
| `-i` | Case-insensitive |
| `-v` | Invert (non-matching lines) |
| `-c` | Count matches only |
| `-n` | Show line numbers |
| `-l` | List filenames that have at least one match |
| `-r` | Recurse into directories |
| `-E` | Extended regex (`egrep`) |
| `-q` | Quiet — exit status only, no output |
| `-F` | Fixed string (no regex metachars) |
| `-w` | Match whole words only |
| `-x` | Match whole lines only |

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:31` — boolean check, output
suppressed with `-q` and `-E` for extended regex:

```sh
if grep -qE "^#?shared_preload_libraries" "$CONF_FILE"; then
  # ...replace the existing line with sed...
else
  # ...append a new line...
fi
```

The pattern `^#?shared_preload_libraries` matches the key whether or not
it's commented out.

## See also

- [exit-status](exit-status.md) — what makes `grep -q` a useful test
- [commands/sed/replace](../sed/replace.md) — for transforming matches
- [bash/if/if-else-fi](../../if/if-else-fi.md)
