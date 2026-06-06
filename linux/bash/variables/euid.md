# `$EUID`

A bash builtin variable holding the **effective user ID** of the current
process. The most common use is to detect whether the script is running as
root (or with `sudo`).

## Values

| Value | Meaning |
| --- | --- |
| `0` | Root |
| `1000+` | Regular users (varies) |
| `65534` | `nobody` |

`EUID` is read-only and built in — not an environment variable, so it works
fine under `set -u` (which would reject unset *variables*).

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:6`:

```sh
if [ "$EUID" -ne 0 ]; then
  echo "Error: Please run this script with sudo or as root." >&2
  exit 1
fi
```

`sudo` does **not** change `EUID` for the script logic — it sets the
**effective** UID for child processes, and `$EUID` reports that.

## See also

- [uid-vs-euid](uid-vs-euid.md) — `$UID` vs `$EUID`
- [variables/assignment-and-reference](assignment-and-reference.md)
