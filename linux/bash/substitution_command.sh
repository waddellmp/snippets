#!/usr/bin/env bash
# ==============================================================================
# Substitution: Command Substitution ($(command))
#
# Capture standard output of a command into a variable or inline expression.
# Modern syntax: $(command) (replaces legacy backticks `command`).
#
# Example 1: Basic command output capture
# Example 2: Nested command substitution
# Example 3: Multi-line command substitution
# ==============================================================================

# Example 1: Capturing command output
capture_system_info() {
  local current_date
  local working_dir
  current_date=$(date +%Y-%m-%d)
  working_dir=$(pwd)

  echo "Date: $current_date"
  echo "Current Directory: $working_dir"
}

# Example 2: Nested command substitution
extract_nested_info() {
  # Find dirname of which bash
  local bash_dir
  bash_dir=$(dirname "$(command -v bash)")
  echo "Bash binary directory: $bash_dir"
}

# Example 3: Multi-line output processing
list_matching_entries() {
  local matches
  matches=$(printf "service1:active\nservice2:inactive\nservice3:active" | grep "active")
  echo "Active services:"
  echo "$matches"
}

# Execute examples
echo "=== Example 1: Basic Command Substitution ==="
capture_system_info

echo "=== Example 2: Nested Substitution ==="
extract_nested_info

echo "=== Example 3: Multi-line Output ==="
list_matching_entries
