#!/usr/bin/env bash
# ==============================================================================
# Psql: Meta-Commands (Backslash Commands)
#
# Interactive and scripted backslash commands in psql:
# - \l      : List all databases
# - \dt     : List tables in current database
# - \dn     : List schemas
# - \dx     : List installed extensions
# - \du     : List roles / users
# - \x      : Toggle expanded table formatting
# - \q      : Quit psql
#
# Example 1: Query meta-information non-interactively
# Example 2: Scripted table list invocation
# Example 3: Expanded display mode execution
# ==============================================================================

# Example 1: Non-interactive meta-command execution
run_meta_command() {
  local meta_cmd="$1"
  echo "Running psql meta-command: psql -U postgres -c "$meta_cmd""
}

# Example 2: List installed extensions
list_extensions_command() {
  echo "Command to inspect installed extensions: psql -U postgres -d postgres -c '\dx'"
}

# Example 3: Expanded display output query
expanded_query_command() {
  local sql="SELECT * FROM pg_stat_activity LIMIT 1;"
  echo "Command with expanded display: psql -U postgres -c '\x' -c "$sql""
}

# Execute examples
echo "=== Example 1: List Databases ==="
run_meta_command "\l"

echo "=== Example 2: List Extensions ==="
list_extensions_command

echo "=== Example 3: Expanded Formatting ==="
expanded_query_command
