#!/usr/bin/env bash
# ==============================================================================
# Flow Control: Short-Circuit AND (&&) and OR (||)
#
# Inline conditional chaining:
# - cmd1 && cmd2 : Run cmd2 ONLY if cmd1 succeeds (exit code 0)
# - cmd1 || cmd2 : Run cmd2 ONLY if cmd1 fails (exit code non-zero)
#
# Example 1: Safe directory creation and navigation
# Example 2: Fallback command execution
# Example 3: Combining && and || in guard clauses
# ==============================================================================

# Example 1: Sequential dependency with &&
setup_workspace() {
  local dir="/tmp/bash_demo_workspace_$$"
  mkdir -p "$dir" && echo "Created workspace directory: $dir"
  rmdir "$dir" && echo "Cleaned up workspace directory."
}

# Example 2: Fallback value assignment with ||
get_service_port() {
  local custom_port="$1"
  local port
  [ -n "$custom_port" ] && port="$custom_port" || port="8080"
  echo "Service configured to run on port: $port"
}

# Example 3: Guard clause with || return
process_item() {
  local item="$1"
  [ -n "$item" ] || { echo "Error: item cannot be empty" >&2; return 1; }

  echo "Processing item: $item"
}

# Execute examples
echo "=== Example 1: Chaining with && ==="
setup_workspace

echo "=== Example 2: Fallback with || ==="
get_service_port "9000"
get_service_port ""

echo "=== Example 3: Guard Clause ==="
process_item "database_backup.tar.gz"
process_item "" || echo "Handled missing parameter."
