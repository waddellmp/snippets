#!/usr/bin/env bash
# ==============================================================================
# Redirection: Order Matters
#
# Redirections are evaluated strictly from left to right:
# - >file 2>&1  : Correct. First stdout points to file, then stderr points to stdout (the file).
# - 2>&1 >file  : Incorrect for combined output. Stderr points to original stdout (terminal),
#                 then stdout points to file. Stderr still prints to terminal!
#
# Example 1: Proper combined output redirection (>file 2>&1)
# Example 2: Order of evaluation demonstration
# ==============================================================================

# Example 1: Correct combined redirection
redirect_combined_correct() {
  local log_file="/tmp/combined_correct_$$.log"

  # Redirect stdout to log_file, then duplicate stderr to stdout
  {
    echo "Stdout output"
    echo "Stderr error output" >&2
  } > "$log_file" 2>&1

  echo "Combined log contents:"
  cat "$log_file"
  rm -f "$log_file"
}

# Example 2: Modern shorthand &>
redirect_combined_shorthand() {
  local log_file="/tmp/combined_short_$$.log"

  # &> is equivalent to >file 2>&1 in Bash
  {
    echo "Normal message"
    echo "Critical alert" >&2
  } &> "$log_file"

  echo "Shorthand (&>) log contents:"
  cat "$log_file"
  rm -f "$log_file"
}

# Execute examples
echo "=== Example 1: Correct Left-to-Right Redirection ==="
redirect_combined_correct

echo "=== Example 2: Shorthand Redirection (&>) ==="
redirect_combined_shorthand
