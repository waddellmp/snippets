# Why "preload"?

Some extensions (called **shared libraries** in PostgreSQL terminology)
must attach to the **shared memory** of the running server. That memory
only exists when the postmaster starts — there is no way to attach to it
later. Hence, they must be "pre-loaded" via this setting.

After adding the library, the **server must be restarted** (`systemctl
restart postgresql`). A reload (`reload`) is not enough.

## See also

- [where-it-lives](where-it-lives.md)
- [can-and-cannot-do](can-and-cannot-do.md)
