#!/usr/bin/env bash

# Start PostgreSQL server using pg_ctl
#
# -D specifies the data directory path.
# -l specifies the log file path where output is written.
pg_ctl start -D "<path to data directory>" -l logfile
