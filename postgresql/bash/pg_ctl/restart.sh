#!/usr/bin/env bash

# Restart Postgresl
#
# Changing shared_preload_libraries requires a restart.
# Restarting can be disruptive so plan this accordingly.
#
# --pg_data can also be specified with -D option
pg_ctl restart \
--pgdata "<some path to data directory>"
