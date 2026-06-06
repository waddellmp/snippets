# `psql` — meta-commands

Inside an interactive `psql` session, backslash commands (a.k.a. "meta-commands")
are local to psql and don't go to the server.

| Command | Description |
| --- | --- |
| `\q` | Quit |
| `\?` | Help on meta-commands |
| `\l` | List databases |
| `\c [DB]` | Connect to a different database |
| `\d` | List tables, views, sequences in the current schema |
| `\d [NAME]` | Describe a table, view, index, or sequence |
| `\conninfo` | Show connection info |
| `\s` | Show SQL history |
| `\e` | Launch text editor to edit the current command |
| `\timing` | Toggle query timing |
| `\o [FILE]` | Output query results to a file |
| `\du` | List roles |
| `\dn` | List schemas |
| `\df` | List functions |
| `\dx` | List installed extensions |
| `\di` | List indexes |
| `\ds` | List sequences |
| `\dv` | List views |
| `\x` | Toggle expanded output (one column per line) |

## See also

- [connect](connect.md)
- [create-extension](create-extension.md)
- [../../../../postgresql/docs/psql/meta-commands.md](../../../../postgresql/docs/psql/meta-commands.md) —
  full reference
