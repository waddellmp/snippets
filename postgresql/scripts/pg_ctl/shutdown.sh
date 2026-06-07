#!/usr/bin/env bash

# Shutdown PostgreSQL server using pg_ctl
#
# -m specifies the shutdown mode:
#    smart: wait for all active connections to terminate
#    fast: rollback active transactions, disconnect clients (recommended)
#    immediate: abort all server processes, will force recovery on next startup
#
# -D specifies the data directory path.
pg_ctl stop -m fast -D "<path to data directory>"
