# `echo` — redirection

Send output to files or stderr with shell redirection operators.

## Common patterns

```sh
echo "log line" >> log.txt     # append
echo "log line" > log.txt      # overwrite
echo "error" >&2               # write to stderr
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh` — used for status and
error messages. Errors go to stderr with `>&2`:

```sh
echo "Error: Please run this script with sudo or as root." >&2
echo "Error: PostgreSQL configuration file not found at ${CONF_FILE}." >&2
```

Normal status messages go to stdout:

```sh
echo "Found PostgreSQL ${PG_VERSION} configuration at ${CONF_FILE}"
echo "Setting shared_preload_libraries using pg_conftool..."
echo "Restarting PostgreSQL..."
```

## See also

- [basic](basic.md)
- [bash/redirection/operators](../../redirection/operators.md)
