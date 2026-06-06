# Variable assignment and reference

Assign values, then reference them. Always quote variable references to
prevent word-splitting and globbing.

## Assignment

```sh
NAME="matt"            # no spaces around =
count=5
items=("a" "b" "c")    # array
```

## Reference

```sh
echo "$NAME"           # matt
echo "${NAME}"         # matt, unambiguous
```

**Always quote** variable references (`"$NAME"`). Without quotes, a value
containing a space becomes multiple arguments.

## Why `${VAR}` (curly braces)?

```sh
PG_VERSION="17"
echo "${PG_VERSION}main"     # 17main
echo "$PG_VERSIONmain"       # empty (looks up variable PG_VERSIONmain)
```

The braces are mandatory when concatenating with text immediately after the
variable name.

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh`:

```sh
PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
CONF_FILE="/etc/postgresql/${PG_VERSION}/main/postgresql.conf"
echo "Found PostgreSQL ${PG_VERSION} configuration at ${CONF_FILE}"
```

## See also

- [expansions](expansions.md) — `${var:-default}`, `${var#prefix}`, etc.
- [special-variables](special-variables.md) — `$?`, `$#`, `$@`, etc.
- [quoting/single-vs-double](../quoting/single-vs-double.md)
