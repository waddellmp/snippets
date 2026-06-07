#!/usr/bin/env bash

# Check status of PostgreSQL server using pg_ctl
#
# Returns 0 if server is running, otherwise non-zero.
# -D specifies the data directory path.
pg_ctl status -D "<path to data directory>"
