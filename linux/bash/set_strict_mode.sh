#!/usr/bin/env bash
# ==============================================================================
# Set: Strict Mode (set -euo pipefail)
#
# Standard safety options in bash:
# -e : Exit immediately if a command exits with a non-zero status
# -u : Treat unset variables as an error when substituting
# -o pipefail : Return value of a pipeline is the status of the last command to exit
#               with a non-zero status, or zero if all exited successfully
#
# Example 1: Function demonstrating -u protection with fallback parameter defaults
# Example 2: Function demonstrating pipefail pipeline error trapping
# Example 3: Function demonstrating safe error handling within strict mode
# ==============================================================================

# Example 1: Handling potentially unset variables under strict mode
safe_variable_access() {
  local defined_var="hello"
  local unset_var="${1:-default_fallback_value}"

  echo "Defined variable: $defined_var"
  echo "Unset variable safely evaluated: $unset_var"
}

# Example 2: Pipefail behavior demonstration
demonstrate_pipefail() {
  echo "Pipefail ensures failed upstream commands in a pipe are not masked."
  # In subshell to avoid aborting script
  (
    set -o pipefail
    # If first command fails, overall pipeline fails
    echo "Running pipeline: false | cat"
    if false | cat; then
      echo "Pipeline succeeded (pipefail disabled)"
    else
      echo "Pipeline failed as expected with pipefail active"
    fi
  )
}

# Example 3: Allowing intentional non-zero exits without failing -e
safe_conditional_command() {
  echo "Checking if pattern matches safely with '|| true':"
  echo "sample text" | grep -q "missing_pattern" || echo "Pattern not found, handled cleanly."
}

# Execute examples
echo "=== Example 1: Safe Variable Access ==="
safe_variable_access

echo "=== Example 2: Pipefail Demonstration ==="
demonstrate_pipefail

echo "=== Example 3: Safe Command Execution under -e ==="
safe_conditional_command
