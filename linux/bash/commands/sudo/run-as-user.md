# `sudo` — run as another user

Execute a command as another user (default: root). It asks for your
password the first time and caches authorization for a few minutes.

## Basic usage

```sh
sudo command                   # run as root
sudo -u postgres psql          # run as the postgres OS user
sudo -i                        # open a root login shell
sudo -s                        # open a root shell using your environment
```

| Flag | Meaning |
| --- | --- |
| `-u USER` | Run as this user (not just root) |
| `-i` | Login shell as root (loads root's env, runs root's profile) |
| `-s` | Shell as root, but inherit your env |
| `-H` | Set `HOME` to the target user's home |
| `-k` | Forget cached credentials (re-prompt) |
| `-n` | Non-interactive — fail if a password is required |
| `-E` | Preserve your environment |

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:44` — drop to the
`postgres` OS user so that the matching database superuser runs
`CREATE EXTENSION`:

```sh
sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
```

The rest of the script runs as root, so this is the only `sudo` needed.

## Why `-u postgres` works without editing `pg_hba.conf`

On Debian/Ubuntu, the `postgres` OS user is configured as a **trust**
authentication principal in `pg_hba.conf` for local connections. So
`sudo -u postgres psql` connects as the DB superuser without ever asking
for a password.

## See also

- [commands/systemctl/service-control](../systemctl/service-control.md) —
  the other root-only command in the script
- [bash/variables/euid](../../variables/euid.md) — `$EUID` check in
  this same script
