# Redirection operators

Control where stdin, stdout, and stderr come from and go to.

## File descriptors

| FD | Default | Name |
| --- | --- | --- |
| 0 | keyboard | stdin |
| 1 | terminal | stdout |
| 2 | terminal | stderr |

## The common operators

| Syntax | Meaning |
| --- | --- |
| `> file` | Write stdout to `file` (truncate) |
| `>> file` | Append stdout to `file` |
| `< file` | Read stdin from `file` |
| `2> file` | Write stderr to `file` |
| `2>&1` | Send stderr to the same place as stdout |
| `> file 2>&1` | Send **both** to `file` (order matters!) |
| `&> file` | Send **both** to `file` (bash shorthand, not POSIX) |
| `> /dev/null` | Discard |

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh`:

| Line | Pattern | Why |
| --- | --- | --- |
| 7, 17 | `echo "Error..." >&2` | Send error message to stderr |
| 13, 25 | `2>/dev/null` | Suppress noise from optional tools |
| 25 | `>/dev/null 2>&1` | Silently test for a command's existence |
| 34 | `>> "$CONF_FILE"` | Append the new `shared_preload_libraries` line |

## See also

- [order-matters](order-matters.md) — the `> file 2>&1` vs `2>&1 > file`
  trap
