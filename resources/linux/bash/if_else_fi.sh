#!/usr/bin/env bash
# ==============================================================================
# Flow Control: if / elif / else / fi
#
# Conditional branching based on exit status of commands or test expressions:
# - if command; then ... elif other; then ... else ... fi
#
# Example 1: Single branch condition
# Example 2: Two-branch condition (if / else)
# Example 3: Multi-branch condition (if / elif / else)
# ==============================================================================

# Example 1: Single branch file test
check_file_exists() {
  local target_file="$1"
  if [ -f "$target_file" ]; then
    echo "File '$target_file' exists."
  fi
}

# Example 2: Two branches checking string emptiness
validate_username() {
  local name="$1"
  if [ -n "$name" ]; then
    echo "Valid username: $name"
  else
    echo "Error: Username cannot be empty."
  fi
}

# Example 3: Multi-branch numerical categorization
categorize_score() {
  local score="$1"
  if [ "$score" -ge 90 ]; then
    echo "Grade: A (Score: $score)"
  elif [ "$score" -ge 80 ]; then
    echo "Grade: B (Score: $score)"
  elif [ "$score" -ge 70 ]; then
    echo "Grade: C (Score: $score)"
  else
    echo "Grade: Needs improvement (Score: $score)"
  fi
}

# Execute examples
echo "=== Example 1: Single Branch ==="
check_file_exists "/etc/hosts"

echo "=== Example 2: Two Branches ==="
validate_username "alice"
validate_username ""

echo "=== Example 3: Multi-Branch ==="
categorize_score 95
categorize_score 82
categorize_score 60
