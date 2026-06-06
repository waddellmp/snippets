# `shared_preload_libraries` — where it lives

A PostgreSQL server configuration parameter that lists **shared libraries**
to load at server start. It is the only way to load libraries that need to
allocate shared memory or run before any database connection is made.

## Where it lives

Set in `postgresql.conf`:

```ini
shared_preload_libraries = 'pg_stat_statements'
```

Multiple libraries are comma-separated:

```ini
shared_preload_libraries = 'pg_stat_statements,auto_explain,pgaudit'
```

## See also

- [why-preload](why-preload.md) — why these need a restart
- [can-and-cannot-do](can-and-cannot-do.md) — what it can/can't do
- [two-step-install](two-step-install.md) — the install pattern
- [../pg-stat-statements/install.md](../pg-stat-statements/install.md)
- [../pg-conftool/why-use-it.md](../pg-conftool/why-use-it.md) — the safe
  way to edit it
