#!/usr/bin/env bash
# ==============================================================================
# Substitution: Command Substitution with OR Fallback
#
# Pattern for ensuring a variable receives a default value even if the command
# substitution fails or outputs nothing:
# VAR=$(command 2>/dev/null || echo "fallback")
#
# Example 1: Fallback on non-zero command exit
# Example 2: Extracting tool version with reliable fallback
# Example 3: Fallback when captured output is empty
# ==============================================================================

# Example 1: Fallback when command fails
get_config_setting() {
  local key="$1"
  # Attempt reading non-existent tool, fallback to default
  local value
  value=$(non_existent_tool --get "$key" 2>/dev/null || echo "default_value")
  echo "Setting '$key': $value"
}

# Example 2: PostgreSQL version detection fallback pattern
detect_pg_version_safe() {
  local version
  version=$(pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1 || echo "17")
  echo "Detected PostgreSQL Major Version: $version"
}

# Example 3: Fallback when output is empty or whitespace
get_user_display_name() {
  local user_input="$1"
  local display_name
  display_name=$(echo "$user_input" | tr -d ' ' 2>/dev/null)
  display_name="${display_name:-Anonymous User}"
  echo "Display Name: $display_name"
}

# Execute examples
echo "=== Example 1: Command Failure Fallback ==="
get_config_setting "max_connections"

echo "=== Example 2: Tool Version Detection Fallback ==="
detect_pg_version_safe

echo "=== Example 3: Empty Output Fallback ==="
get_user_display_name "   "
get_user_display_name "Alice"
