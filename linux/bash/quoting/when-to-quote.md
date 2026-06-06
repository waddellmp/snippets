# When to quote

A practical guide to the rule "quote everything, except when you don't".

## Always quote

- Variable references: `echo "$NAME"` (never `echo $NAME`)
- Command substitutions: `echo "$(date)"`
- Anything containing spaces, globs, or other special chars

```sh
CONF_FILE="/etc/postgresql/${PG_VERSION}/main/postgresql.conf"
echo "Found PostgreSQL ${PG_VERSION} configuration at ${CONF_FILE}"
```

Unquoted `$CONF_FILE` would be word-split if it contained a space.

## Don't quote (deliberately)

- The right-hand side of a simple assignment:
  `PATTERN="*.txt"` (you want the string `*.txt` stored, not the matches)
- A literal in arithmetic context: `count=$((1 + 2))`
- When you **want** word-splitting (rare): building an args array from a
  string of filenames

## Inside a string already

When you're inside double quotes, you don't need to quote again:

```sh
echo "Result: $(echo "$x")"     # the inner " is real
echo 'Result: $(echo $x)'       # the inner is literal — won't expand
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh` — every variable reference
is in double quotes. The one place a single-quoted string appears is inside
the `sed` replacement:

```sh
sed -i "s/.../...shared_preload_libraries = 'pg_stat_statements'/g" "$CONF_FILE"
```

The single quotes here are **content** of the replacement, not shell
quoting — they end up in the config file as literal apostrophes.

## See also

- [single-vs-double](single-vs-double.md)
- [variables/assignment-and-reference](../variables/assignment-and-reference.md)
