#!/usr/bin/env bash
# ==============================================================================
# Exit Codes: Conventions & Handling
#
# Standard Linux / Bash Exit Status Codes:
# - 0   : Success
# - 1   : General / catch-all error
# - 2   : Misuse of shell builtins or syntax error
# - 126 : Command invoked cannot execute (permission denied)
# - 127 : Command not found
# - 128+N : Fatal error signal N (e.g. 130 for SIGINT Ctrl+C, 137 for SIGKILL)
#
# Example 1: Returning custom exit codes from functions
# Example 2: Handling success vs error exit codes
# Example 3: Custom script validator with exit code signaling
# ==============================================================================

# Example 1: Function return codes
validate_port_code() {
  local port="$1"
  if [ -z "$port" ]; then
    return 1 # missing argument error
  elif ! [[ "$port" =~ ^[0-9]+$ ]]; then
    return 2 # invalid format error
  else
    return 0 # success
  fi
}

# Example 2: Branching on exit code ($?)
handle_exit_code() {
  validate_port_code "$1"
  local code=$?

  case $code in
    0) echo "Port '$1': Valid." ;;
    1) echo "Port validation error: Missing parameter (code 1)." ;;
    2) echo "Port validation error: Non-numeric value '$1' (code 2)." ;;
    *) echo "Unknown error code $code." ;;
  esac
}

# Example 3: Trapping signals and reporting exit code
demonstrate_signal_exit() {
  echo "Signals like SIGINT produce exit code 128 + 2 = 130."
  echo "Signals like SIGKILL produce exit code 128 + 9 = 137."
}

# Execute examples
echo "=== Example 1 & 2: Validate Return Codes ==="
handle_exit_code "5432"
handle_exit_code "invalid_port"
handle_exit_code ""

echo "=== Example 3: Signal Exit Codes ==="
demonstrate_signal_exit
