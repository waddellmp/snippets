# `systemctl` — service control

Control `systemd`, the init system on most modern Linux distros. Used to
start, stop, restart, and inspect **services** (also called "units").

## Service control

```sh
sudo systemctl start postgresql      # start
sudo systemctl stop postgresql       # stop
sudo systemctl restart postgresql    # stop + start
sudo systemctl reload postgresql     # ask the service to reload its config (no downtime)
sudo systemctl status postgresql     # show whether it's running + recent logs
```

| Subcommand | Effect |
| --- | --- |
| `start` | Start the service now (no effect if already running) |
| `stop` | Stop the service |
| `restart` | Stop and start (brief downtime) |
| `reload` | Ask the service to re-read its config (no downtime) |
| `status` | Show state + last few log lines |
| `enable` | Start automatically at boot |
| `disable` | Don't start at boot |
| `is-active` | Exit 0 if running |
| `is-enabled` | Exit 0 if enabled at boot |

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:40` — restart is required
because `shared_preload_libraries` is only read at server startup:

```sh
systemctl restart postgresql
```

A `reload` would **not** be enough — `pg_stat_statements` allocates shared
memory, and shared memory only exists when the postmaster starts.

## See also

- [commands/sudo/run-as-user](../sudo/run-as-user.md) — needed because
  systemctl runs as root
- [../../../../postgresql/docs/shared-preload-libraries/](../../../../postgresql/docs/shared-preload-libraries/) —
  why a restart is required
