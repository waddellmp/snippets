#!/usr/bin/env bash
# ==============================================================================
# Set: Options Overview
#
# Overview of common shell execution, debugging, and safety flags:
# -x : Print commands and their arguments as they are executed (xtrace)
# -v : Print shell input lines as they are read (verbose)
# -n : Read commands without executing them (syntax check)
# -e : Exit immediately if a pipeline returns non-zero
# -u : Treat unset variables as errors
#
# Example 1: Enable and disable xtrace debugging dynamically
# Example 2: Check current shell options state
# ==============================================================================

# Example 1: Enable xtrace for a critical section then disable it
debug_section() {
  local arg1="$1"
  local arg2="$2"

  echo "Enabling xtrace (-x) temporarily..."
  set -x
  local combined="${arg1}_${arg2}"
  local uppercase="${combined^^}"
  set +x
  echo "Disabled xtrace (+x)."
  echo "Result: $uppercase"
}

# Example 2: Inspect active shell options
show_active_options() {
  echo "Current shell flags in \$-: $-"
  case "$-" in
    *x*) echo "xtrace (-x) is active" ;;
    *) echo "xtrace (-x) is inactive" ;;
  esac
  case "$-" in
    *e*) echo "errexit (-e) is active" ;;
    *) echo "errexit (-e) is inactive" ;;
  esac
}

# Execute examples
echo "=== Example 1: Dynamic Debugging Section ==="
debug_section "foo" "bar"

echo "=== Example 2: Active Options Inspection ==="
show_active_options
