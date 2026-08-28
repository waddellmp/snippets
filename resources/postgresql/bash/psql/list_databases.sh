#!/usr/bin/env bash

# Connect as superuser and list databases
#
# Runs the backslash list command (\l) in psql
psql -d postgres -c "\l"
