#!/usr/bin/env bash
# ==============================================================================
# Psql: Create Extension
#
# SQL syntax for installing PostgreSQL extensions:
# - CREATE EXTENSION IF NOT EXISTS <name>;
# - DROP EXTENSION IF EXISTS <name>;
#
# Example 1: Command to install extension safely
# Example 2: Scripted creation with specific database target
# Example 3: Drop and recreate extension
# ==============================================================================

# Example 1: Format CREATE EXTENSION command
format_create_extension() {
  local ext_name="$1"
  local db_name="${2:-postgres}"

  echo "SQL command: CREATE EXTENSION IF NOT EXISTS ${ext_name};"
  echo "psql invocation: sudo -u postgres psql -d "$db_name" -c "CREATE EXTENSION IF NOT EXISTS ${ext_name};""
}

# Example 2: Verify and install pg_stat_statements
install_extension_workflow() {
  local ext="pg_stat_statements"
  echo "1. Verify package installed: sudo apt install -y postgresql-contrib"
  echo "2. Add to postgresql.conf: shared_preload_libraries = '${ext}'"
  echo "3. Restart server: sudo systemctl restart postgresql"
  echo "4. Execute: sudo -u postgres psql -c 'CREATE EXTENSION IF NOT EXISTS ${ext};'"
}

# Example 3: Drop extension command
format_drop_extension() {
  local ext_name="$1"
  echo "Drop command: psql -U postgres -c "DROP EXTENSION IF EXISTS ${ext_name};""
}

# Execute examples
echo "=== Example 1: Format Create Extension ==="
format_create_extension "pg_stat_statements" "production_db"

echo "=== Example 2: Extension Installation Workflow ==="
install_extension_workflow

echo "=== Example 3: Drop Extension ==="
format_drop_extension "pg_stat_statements"
