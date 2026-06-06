# `sudo -u`

```sh
sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS ..."
```

On Debian/Ubuntu the `postgres` **OS user** owns the database cluster, and
extensions must be created by a database superuser. `sudo -u postgres`
drops to that OS user, then `psql` connects as the matching DB superuser
— no password prompt, no need to edit `pg_hba.conf`.

## Used in this repo

[`scripts/install-pg-stat-statements/setup.sh`](../../scripts/install-pg-stat-statements/setup.sh):44.

## See also

- [../../../linux/bash/commands/sudo/run-as-user.md](../../../linux/bash/commands/sudo/run-as-user.md)
