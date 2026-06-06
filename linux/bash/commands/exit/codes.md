# `exit` codes

End the current shell, or the current script, with a given exit status.

## Syntax

```sh
exit           # exit with the status of the last command
exit 0         # success
exit 1         # generic failure
exit 2         # misuse of shell builtins
exit 127       # command not found (conventional)
```

## Conventions

| Code | Conventional meaning |
| --- | --- |
| 0 | Success |
| 1 | Generic error |
| 2 | Misuse / invalid arguments |
| 126 | Command found but not executable |
| 127 | Command not found |
| 128+N | Killed by signal N (e.g. 130 = SIGINT) |

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:8, 18` — bail out early with
non-zero status on bad input:

```sh
if [ "$EUID" -ne 0 ]; then
  echo "Error: Please run this script with sudo or as root." >&2
  exit 1
fi
```

## See also

- [bash/set/strict-mode](../../set/strict-mode.md) — `set -e` reacts to
  non-zero exits
