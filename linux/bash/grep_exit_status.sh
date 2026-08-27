#!/usr/bin/env bash
# ==============================================================================
# Grep: Exit Status in Conditionals (grep -q)
#
# Grep exit status:
# - 0 : One or more matching lines found
# - 1 : No matching lines found
# - 2 : Error occurred (e.g. file not found)
#
# `grep -q` (quiet mode) is the standard idiom for testing if a pattern exists
# without polluting stdout or needing a subshell.
#
# Example 1: Using grep -q in an if condition
# Example 2: Using grep -q in short-circuit evaluation
# Example 3: Testing configuration setting existence
# ==============================================================================

# Example 1: Conditional branching with grep -q
check_string_contains() {
  local text="$1"
  local pattern="$2"

  if grep -q "$pattern" <<< "$text"; then
    echo "Found pattern '$pattern' in string."
  else
    echo "Pattern '$pattern' was NOT found."
  fi
}

# Example 2: Short-circuit testing
verify_extension_enabled() {
  local conf="shared_preload_libraries = 'pg_stat_statements'"
  grep -q "pg_stat_statements" <<< "$conf" && echo "pg_stat_statements is enabled."
}

# Example 3: Pattern matching with regex in config line
check_config_entry() {
  local sample_config="#shared_preload_libraries = ''\nshared_preload_libraries = 'pg_stat_statements'"

  if grep -qE "^#?shared_preload_libraries" <<< "$sample_config"; then
    echo "shared_preload_libraries configuration key exists in file."
  fi
}

# Execute examples
echo "=== Example 1: If condition with grep -q ==="
check_string_contains "PostgreSQL 17.2 Ubuntu" "Ubuntu"
check_string_contains "PostgreSQL 17.2 Ubuntu" "CentOS"

echo "=== Example 2: Short-circuit check ==="
verify_extension_enabled

echo "=== Example 3: Config entry regex check ==="
check_config_entry
