# What `shared_preload_libraries` can and cannot do

| Can do | Cannot do |
| --- | --- |
| Load libraries needing shared memory | Load regular extensions on its own |
| Reserve memory in the postmaster | Replace `CREATE EXTENSION` |
| Hook into backend startup | Be changed without a restart |

Loading a library here is typically a **two-step process**:

1. Add it to `shared_preload_libraries` and **restart** the server.
2. Run `CREATE EXTENSION <name>;` in each database where you want it
   active.

## See also

- [where-it-lives](where-it-lives.md)
- [two-step-install](two-step-install.md) — the pattern in detail
