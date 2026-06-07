#!/usr/bin/env bash
# Exit immediately if a command exits with a non-zero status
set -euo pipefail

# 1. Ensure the script is run with root/sudo privileges
if [ "$EUID" -ne 0 ]; then
  echo "Error: Please run this script with sudo or as root." >&2
  exit 1
fi

# 2. Detect the active PostgreSQL version
# (Falls back to '17' if not auto-detectable)
PG_VERSION=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
CONF_FILE="/etc/postgresql/${PG_VERSION}/main/postgresql.conf"

if [ ! -f "$CONF_FILE" ]; then
  echo "Error: PostgreSQL configuration file not found at ${CONF_FILE}." >&2
  exit 1
fi

echo "Found PostgreSQL ${PG_VERSION} configuration at ${CONF_FILE}"

# 3. Safely update shared_preload_libraries
# Using pg_conftool if available (Debian/Ubuntu standard), otherwise falling back to sed
if command -v pg_conftool >/dev/null 2>&1; then
  echo "Setting shared_preload_libraries using pg_conftool..."
  pg_conftool "${PG_VERSION}" main set shared_preload_libraries "pg_stat_statements"
else
  echo "Setting shared_preload_libraries using sed..."
  # This pattern matches commented/uncommented keys with flexible whitespace
  if grep -qE "^#?shared_preload_libraries" "$CONF_FILE"; then
    sed -i "s/^[#]*[[:space:]]*shared_preload_libraries[[:space:]]*=[[:space:]]*.*/shared_preload_libraries = 'pg_stat_statements'/g" "$CONF_FILE"
  else
    echo "shared_preload_libraries = 'pg_stat_statements'" >> "$CONF_FILE"
  fi
fi

# 4. Restart PostgreSQL service
echo "Restarting PostgreSQL..."
systemctl restart postgresql

# 5. Create the extension in the postgres database (safely as the postgres OS user)
echo "Installing extension in the 'postgres' database..."
sudo -u postgres psql -d postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"

echo "pg_stat_statements has been successfully installed and enabled!"
