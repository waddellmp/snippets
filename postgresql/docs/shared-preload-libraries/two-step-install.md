# The two-step install pattern

Most server-side extensions that use `shared_preload_libraries` require
**two separate actions** to enable:

1. **Server-side**: add the library to `shared_preload_libraries` in
   `postgresql.conf` and **restart** the server.
2. **Database-side**: run `CREATE EXTENSION <name>;` in each database
   where you want it active.

Both are required:

- Skipping step 1: `CREATE EXTENSION` will fail with "could not access
  file" or "function does not exist" because the library is not in
  shared memory.
- Skipping step 2: the library is loaded but no functions/tables exist
  in your database.

The `setup.sh` script in this repo automates both steps.

## See also

- [where-it-lives](where-it-lives.md)
- [why-preload](why-preload.md)
- [can-and-cannot-do](can-and-cannot-do.md)
- [../pg-stat-statements/install.md](../pg-stat-statements/install.md)
- [../../scripts/install-pg-stat-statements/setup.sh](../../scripts/install-pg-stat-statements/setup.sh)
