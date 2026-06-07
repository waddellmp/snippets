#!/usr/bin/env bash

# Check if PostgreSQL is ready to accept connections
#
# Returns 0 if ready, 1 if rejecting connections, 2 if no response
pg_isready -d postgres
