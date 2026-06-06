# `psql` — `CREATE EXTENSION`

Load a PostgreSQL extension into the current database. Most extensions
require superuser, and many also require an entry in
`shared_preload_libraries` (which needs a server restart).

## The two-step pattern

1. Add the library to `shared_preload_libraries` in `postgresql.conf`
   ```ini
   shared_preload_libraries = 'pg_stat_statements'
   ```
2. Restart the server
   ```sh
   sudo systemctl restart postgresql
   ```
3. `CREATE EXTENSION` in the database
   ```sql
   CREATE EXTENSION pg_stat_statements;
   ```

Skipping step 1 and 2 means the extension's shared-memory structures can't
attach, and `CREATE EXTENSION` will fail with a "could not access file" or
"function ... does not exist" error.

## Idempotent install

Always use `IF NOT EXISTS` in scripts so the command is safe to re-run:

```sql
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;
```

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:44` — runs the extension
creation as the `postgres` OS user, who is the matching DB superuser:

```sh
sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
```

## See also

- [connect](connect.md)
- [meta-commands](meta-commands.md)
- [../../../../postgresql/docs/pg-stat-statements/](../../../../postgresql/docs/pg-stat-statements/)
- [../../../../postgresql/docs/shared-preload-libraries/](../../../../postgresql/docs/shared-preload-libraries/)
