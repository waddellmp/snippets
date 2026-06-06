# `psql` — connect to a database

The PostgreSQL interactive terminal. Connect to a database, run SQL,
administer the server.

## Common forms

```sh
psql                                 # connect as current OS user to default db
psql -U postgres                     # connect as user 'postgres'
psql -d mydb                         # connect to database 'mydb'
psql -h localhost -p 5432 -U bob     # host, port, user
psql -c "SELECT 1;"                  # run a single command, then exit
psql -f script.sql                   # run a file of SQL
```

| Flag | Meaning |
| --- | --- |
| `-U` | Database user |
| `-d` | Database name |
| `-h` | Host (default: local socket) |
| `-p` | Port (default: 5432) |
| `-c` | Run one SQL command, then exit |
| `-f` | Run SQL from a file |
| `-W` | Force password prompt |
| `-l` | List databases |
| `-V` | Print psql version |

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:44` — connect to the
`postgres` database as the `postgres` OS user and run one SQL command:

```sh
sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
```

`IF NOT EXISTS` makes the command idempotent — re-running the script is
safe.

## See also

- [meta-commands](meta-commands.md)
- [create-extension](create-extension.md)
- [commands/sudo/run-as-user](../sudo/run-as-user.md) — the `sudo -u
  postgres` part
- [../../../../postgresql/docs/psql/meta-commands.md](../../../../postgresql/docs/psql/meta-commands.md) —
  full meta-command reference
