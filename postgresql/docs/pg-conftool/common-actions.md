# `pg_conftool` common actions

```sh
# Set a value
sudo pg_conftool 17 main set shared_preload_libraries 'pg_stat_statements'

# Read the current value
sudo pg_conftool 17 main get shared_preload_libraries

# Remove a setting (revert to default)
sudo pg_conftool 17 main remove shared_preload_libraries

# Edit pg_hba.conf instead
sudo pg_conftool 17 main set listen_addresses '*'
```

## Used in this repo

`scripts/install-pg-stat-statements/setup.sh` uses the `set` form on line
27:

```sh
pg_conftool "${PG_VERSION}" main set shared_preload_libraries "pg_stat_statements"
```

The script falls back to `sed` only when `pg_conftool` is not on `PATH`,
which keeps it portable to non-Debian systems.

## See also

- [why-use-it](why-use-it.md)
- [syntax](syntax.md)
- [../../scripts/install-pg-stat-statements/setup.sh](../../scripts/install-pg-stat-statements/setup.sh)
