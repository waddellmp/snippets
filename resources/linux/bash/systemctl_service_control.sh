#!/usr/bin/env bash
# ==============================================================================
# Systemctl: Service Control
#
# Managing systemd services (such as PostgreSQL):
# - systemctl start <service>    : Start service
# - systemctl stop <service>     : Stop service
# - systemctl restart <service>  : Stop and start service
# - systemctl reload <service>   : Reload configuration without dropping connections
# - systemctl status <service>   : View service status and recent journal logs
# - systemctl is-active <service>: Check if service is currently running
#
# Example 1: Check service status
# Example 2: Safe restart workflow
# Example 3: Conditional reload vs restart
# ==============================================================================

# Example 1: Check service active status
check_service_status() {
  local service_name="${1:-postgresql}"
  echo "Checking status of '$service_name':"
  if command -v systemctl >/dev/null 2>&1; then
    if systemctl is-active --quiet "$service_name" 2>/dev/null; then
      echo "Service '$service_name' is ACTIVE (running)."
    else
      echo "Service '$service_name' is INACTIVE or not installed."
    fi
  else
    echo "systemctl is not available on this system."
  fi
}

# Example 2: Restart workflow command format
format_restart_command() {
  local service="${1:-postgresql}"
  echo "Restart command: sudo systemctl restart $service"
}

# Example 3: Reload configuration command format
format_reload_command() {
  local service="${1:-postgresql}"
  echo "Reload command (zero downtime): sudo systemctl reload $service"
}

# Execute examples
echo "=== Example 1: Check Service Status ==="
check_service_status "postgresql"

echo "=== Example 2: Restart Command Format ==="
format_restart_command "postgresql"

echo "=== Example 3: Reload Command Format ==="
format_reload_command "postgresql"
