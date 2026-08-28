#!/usr/bin/env bash
# ==============================================================================
# Test: Numeric Operators
#
# Integer comparison expressions in `[` and `test`:
# - -eq : Equal to
# - -ne : Not equal to
# - -lt : Less than
# - -le : Less than or equal to
# - -gt : Greater than
# - -ge : Greater than or equal to
#
# Example 1: Compare port numbers and numeric thresholds
# Example 2: Range checking for valid port numbers
# Example 3: Arithmetic evaluation using (( ... ))
# ==============================================================================

# Example 1: Basic integer comparisons
compare_numbers() {
  local a="$1"
  local b="$2"

  if [ "$a" -eq "$b" ]; then
    echo "$a is equal to $b (-eq)"
  elif [ "$a" -gt "$b" ]; then
    echo "$a is greater than $b (-gt)"
  else
    echo "$a is less than $b (-lt)"
  fi
}

# Example 2: Port range validation
validate_port() {
  local port="$1"

  if [ "$port" -ge 1 ] && [ "$port" -le 65535 ]; then
    echo "Port $port is within valid range (1-65535)."
  else
    echo "Port $port is INVALID."
  fi
}

# Example 3: Arithmetic compound command (( ... ))
check_arithmetic_condition() {
  local count=10
  if (( count > 5 )); then
    echo "Count ($count) is greater than 5 using (( count > 5 ))"
  fi
}

# Execute examples
echo "=== Example 1: Number Comparison ==="
compare_numbers 5432 5432
compare_numbers 8080 3000

echo "=== Example 2: Port Validation ==="
validate_port 5432
validate_port 70000

echo "=== Example 3: Arithmetic Comparison ==="
check_arithmetic_condition
