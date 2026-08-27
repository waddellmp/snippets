#!/usr/bin/env bash

# Connect as superuser to see the config file.
# Runs the SHOW config_file SQL statement in PostgreSQL using a Here Document.
psql -d postgres -header -column <<EOF
-- Shows configuration file
-- Connect as superuser to see the config file
SHOW config_file;
EOF
