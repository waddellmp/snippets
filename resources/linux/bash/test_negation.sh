#!/usr/bin/env bash
# ==============================================================================
# Test: Negation (!)
#
# Inverting tests and exit codes with the `!` operator:
# - [ ! -f "$file" ] : True if file does NOT exist
# - [ ! -z "$str" ]  : True if string is NOT empty (equivalent to [ -n "$str" ])
# - ! command        : Inverts command exit code (0 becomes 1, non-zero becomes 0)
#
# Example 1: Inverting file tests
# Example 2: Inverting command execution status
# Example 3: Combining negation with short-circuiting
# ==============================================================================

# Example 1: Inverting file tests
check_file_missing() {
  local target_file="$1"

  if [ ! -f "$target_file" ]; then
    echo "File '$target_file' does NOT exist."
  else
    echo "File '$target_file' exists."
  fi
}

# Example 2: Inverting command execution
check_pattern_absent() {
  local pattern="$1"
  local text="$2"

  if ! grep -q "$pattern" <<< "$text"; then
    echo "Pattern '$pattern' was NOT found in text."
  else
    echo "Pattern '$pattern' was found in text."
  fi
}

# Example 3: Negation in guard clauses
guard_directory() {
  local dir="$1"
  [ ! -d "$dir" ] && { echo "Directory '$dir' missing, creating..."; mkdir -p "$dir"; rmdir "$dir"; }
}

# Execute examples
echo "=== Example 1: Negated File Test ==="
check_file_missing "/tmp/non_existent_file_$$.txt"

echo "=== Example 2: Negated Command ==="
check_pattern_absent "ERROR" "All services running normally"

echo "=== Example 3: Negated Guard Clause ==="
guard_directory "/tmp/demo_guard_$$"
