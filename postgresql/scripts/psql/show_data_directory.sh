#!/usr/bin/env bash

# Connect to the database and retrieve the data directory path.
# Role requires pg_read_all_data to execute SHOW data_directory.
psql -d postgres -header -column <<EOF
-- Role requires pg_read_all_data
SHOW data_directory;
EOF
