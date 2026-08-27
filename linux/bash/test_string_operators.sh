#!/usr/bin/env bash
# ==============================================================================
# Test: String Operators
#
# String comparison expressions:
# - -z "$str"     : True if string length is ZERO (empty)
# - -n "$str"     : True if string length is NON-ZERO (not empty)
# - "$s1" = "$s2" : True if strings are equal
# - "$s1" != "$s2": True if strings are not equal
#
# Example 1: Validate empty and non-empty strings (-z, -n)
# Example 2: Exact string equality comparison
# Example 3: Case-sensitive vs case-insensitive comparison
# ==============================================================================

# Example 1: Empty and non-empty string checks
validate_input_string() {
  local input="$1"

  if [ -z "$input" ]; then
    echo "Input is empty (-z returned true)."
  fi

  if [ -n "$input" ]; then
    echo "Input has value: '$input' (-n returned true)."
  fi
}

# Example 2: String equality test
compare_strings() {
  local str1="$1"
  local str2="$2"

  if [ "$str1" = "$str2" ]; then
    echo "'$str1' equals '$str2'"
  else
    echo "'$str1' differs from '$str2'"
  fi
}

# Example 3: Case-insensitive comparison using bash parameter expansion
compare_case_insensitive() {
  local s1="$1"
  local s2="$2"

  if [ "${s1,,}" = "${s2,,}" ]; then
    echo "'$s1' matches '$s2' (case-insensitive)"
  else
    echo "'$s1' does not match '$s2'"
  fi
}

# Execute examples
echo "=== Example 1: Empty String Checks ==="
validate_input_string ""
validate_input_string "production"

echo "=== Example 2: String Equality ==="
compare_strings "postgres" "postgres"
compare_strings "main" "staging"

echo "=== Example 3: Case-Insensitive Match ==="
compare_case_insensitive "PostgreSQL" "postgresql"
