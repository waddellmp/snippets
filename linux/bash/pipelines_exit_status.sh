#!/usr/bin/env bash
# ==============================================================================
# Pipelines: Exit Status & PIPESTATUS
#
# By default, a pipeline returns the exit status of the LAST command in the pipe.
# Bash provides PIPESTATUS array holding the exit status of each command:
# - ${PIPESTATUS[@]} : Array of exit codes for the most recent pipeline
# - set -o pipefail  : Makes the pipeline fail if ANY command fails
#
# Example 1: Inspecting PIPESTATUS array
# Example 2: Demonstrating default behavior vs pipefail
# ==============================================================================

# Example 1: Inspect PIPESTATUS
inspect_pipestatus() {
  echo "Running pipeline: (exit 3) | (exit 0) | (exit 5)"
  (exit 3) | (exit 0) | (exit 5) || true

  local statuses=("${PIPESTATUS[@]}")
  echo "Pipeline component exit statuses: ${statuses[*]}"
  echo "First command: ${statuses[0]}"
  echo "Second command: ${statuses[1]}"
  echo "Third command: ${statuses[2]}"
}

# Example 2: Pipefail impact on pipelines
compare_pipefail() {
  echo "1. Without pipefail (last command exit status governs):"
  if false | true; then
    echo "   Pipeline reported SUCCESS because 'true' was last."
  fi

  echo "2. With pipefail enabled (first failing status governs):"
  (
    set -o pipefail
    if false | true; then
      echo "   Pipeline succeeded"
    else
      echo "   Pipeline reported FAILURE because upstream 'false' failed."
    fi
  )
}

# Execute examples
echo "=== Example 1: PIPESTATUS Array ==="
inspect_pipestatus

echo "=== Example 2: Pipefail Comparison ==="
compare_pipefail
