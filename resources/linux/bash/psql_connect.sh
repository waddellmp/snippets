#!/usr/bin/env bash
# ==============================================================================
# Psql: Connection Patterns
#
# Methods for connecting to PostgreSQL via psql:
# - psql -U <user> -d <database> -h <host> -p <port>
# - psql "postgres://<user>:<password>@<host>:<port>/<database>"
# - psql -c "<SQL_QUERY>" : Run single command and exit
# - sudo -u postgres psql : Connect via OS peer authentication
#
# Example 1: Construct connection string from environment variables
# Example 2: Non-interactive query execution with psql -c
# Example 3: Connect with peer authentication
# ==============================================================================

# Example 1: Construct connection URI
build_connection_uri() {
  local host="${DB_HOST:-localhost}"
  local port="${DB_PORT:-5432}"
  local db="${DB_NAME:-postgres}"
  local user="${DB_USER:-postgres}"

  local uri="postgresql://${user}@${host}:${port}/${db}"
  echo "Constructed Connection URI: $uri"
}

# Example 2: Format command for non-interactive query execution
format_psql_command() {
  local query="$1"
  local db="${2:-postgres}"
  local user="${3:-postgres}"

  echo "Executing query: psql -U $user -d $db -c "$query""
}

# Example 3: Peer authentication command pattern
format_peer_auth_command() {
  local sql="SHOW data_directory;"
  echo "Peer auth command: sudo -u postgres psql -d postgres -c "$sql""
}

# Execute examples
echo "=== Example 1: Connection URI ==="
build_connection_uri

echo "=== Example 2: Command Formatting ==="
format_psql_command "SELECT version();"

echo "=== Example 3: Peer Authentication ==="
format_peer_auth_command
