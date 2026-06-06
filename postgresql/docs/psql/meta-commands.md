# `psql` meta-commands

Inside an interactive `psql` session, backslash commands (a.k.a. "meta-commands")
are local to psql and don't go to the server.

| Command | Description |
| --- | --- |
| `\conninfo` | Show connection info |
| `\q` | Quit |
| `\?` | Help |
| `\l` | List databases |
| `\c [DATABASE_NAME]` | Connect to database |
| `\d` | List tables |
| `\d [TABLE_NAME]` | Describe table |
| `\s` | Show SQL history |
| `\e` | Luanch text editor to edit current command |
| `\timing` | Toggle query timing |
| `\o [FILE_PATH]` | Output query results to file |
| `\du` | List roles |
| `\dn` | List schemas |
| `\df` | List functions |
| `\dx` | List extensions |
| `\di` | List indexes |
| `\ds` | List sequences |
| `\dv` | List views |

## See also

- [../../../linux/bash/commands/psql/connect.md](../../../linux/bash/commands/psql/connect.md) —
  connecting from the command line
- [../../../linux/bash/commands/psql/create-extension.md](../../../linux/bash/commands/psql/create-extension.md) —
  `CREATE EXTENSION` example
