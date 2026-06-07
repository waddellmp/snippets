#!/usr/bin/env bash
# ==============================================================================
# DOCUMENTATION: why-preload.md
# Run this script to view the documentation and/or execute example commands.
# ==============================================================================

cat << 'EOF'
# Why "preload"?

Some extensions (called **shared libraries** in PostgreSQL terminology)
must attach to the **shared memory** of the running server. That memory
only exists when the postmaster starts — there is no way to attach to it
later. Hence, they must be "pre-loaded" via this setting.

After adding the library, the **server must be restarted** (`systemctl
restart postgresql`). A reload (`reload`) is not enough.

## See also

- [where-it-lives](shared_preload_libraries_where_it_lives.sh)
- [can-and-cannot-do](shared_preload_libraries_can_and_cannot_do.sh)
EOF
