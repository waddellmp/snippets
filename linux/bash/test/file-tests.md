# File-test operators

The `[` (test) command has a set of **unary operators** that test the file
argument that follows.

## The full list

| Operator | True if the file... |
| --- | --- |
| `-e FILE` | Exists (any type) |
| `-f FILE` | Exists and is a **regular file** |
| `-d FILE` | Exists and is a directory |
| `-L FILE` | Exists and is a symlink (regardless of target) |
| `-h FILE` | Same as `-L` |
| `-b FILE` | Is a block device |
| `-c FILE` | Is a character device |
| `-p FILE` | Is a named pipe |
| `-S FILE` | Is a socket |
| `-r FILE` | Is readable by the current process |
| `-w FILE` | Is writable by the current process |
| `-x FILE` | Is executable by the current process |
| `-s FILE` | Exists and has size > 0 |
| `-t FD` | FD is a terminal |
| `-N FILE` | Was modified since last read |
| `-O FILE` | Is owned by the current effective UID |
| `-G FILE` | Is owned by the current effective GID |
| `FILE1 -nt FILE2` | Is newer than FILE2 (mtime) |
| `FILE1 -ot FILE2` | Is older than FILE2 |

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:16`:

```sh
if [ ! -f "$CONF_FILE" ]; then
  echo "Error: PostgreSQL configuration file not found at ${CONF_FILE}." >&2
  exit 1
fi
```

This guards against a wrong `PG_VERSION` (or an empty fallback) silently
producing a path that doesn't exist.

## See also

- [string-tests](string-tests.md)
- [numeric-tests](numeric-tests.md)
- [commands/test/file-operators](../commands/test/file-operators.md)
- [negation](negation.md)
