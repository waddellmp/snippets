#!/usr/bin/env bash
# ==============================================================================
# Echo: Output Redirection to Files and Stderr
#
# Directing echo output:
# - echo "msg" >&2      : Write message directly to stderr (standard error)
# - echo "msg" > file   : Overwrite file with message
# - echo "msg" >> file  : Append message to file
#
# Example 1: Write error and warning messages to stderr
# Example 2: Append configuration lines to file
# Example 3: Helper logging functions targeting specific streams
# ==============================================================================

# Example 1: Writing to standard error
emit_error_message() {
  local message="$1"
  echo "Error: $message" >&2
}

# Example 2: Append configuration
append_config_line() {
  local config_file="/tmp/test_config_$$.conf"
  echo "# Generated Configuration" > "$config_file"
  echo "shared_preload_libraries = 'pg_stat_statements'" >> "$config_file"
  echo "max_connections = 100" >> "$config_file"

  echo "Config file written:"
  cat "$config_file"
  rm -f "$config_file"
}

# Example 3: Logging functions
log_info() {
  echo "[INFO] $(date +%H:%M:%S) - $*"
}

log_err() {
  echo "[ERROR] $(date +%H:%M:%S) - $*" >&2
}

# Execute examples
echo "=== Example 1: Stderr Redirection ==="
emit_error_message "Database connection timeout"

echo "=== Example 2: File Append Redirection ==="
append_config_line

echo "=== Example 3: Logging Functions ==="
log_info "Application initializing..."
log_err "Missing configuration key"
