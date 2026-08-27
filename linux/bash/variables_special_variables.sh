#!/usr/bin/env bash
# ==============================================================================
# Variables: Special Variables
#
# Built-in read-only shell variables:
# - $? : Exit status of the most recently executed command
# - $# : Number of positional parameters passed to script/function
# - $@ : All positional arguments as individual words
# - $* : All positional arguments as a single string
# - $$ : Process ID (PID) of the current shell
# - $! : Process ID (PID) of the most recently executed background command
# - $0 : Script name or invocation path
#
# Example 1: Check exit status with $?
# Example 2: Iterate over arguments using $@ vs $#
# Example 3: Inspect process ID and background jobs ($$, $!)
# ==============================================================================

# Example 1: Checking exit codes
check_command_status() {
  local query="$1"
  grep -q "$query" <<< "alpha beta gamma"
  local status=$?

  if [ $status -eq 0 ]; then
    echo "Found query '$query' (Exit code: $status)"
  else
    echo "Query '$query' not found (Exit code: $status)"
  fi
}

# Example 2: Positional parameter introspection
inspect_arguments() {
  echo "Function received $# arguments:"
  local idx=1
  for arg in "$@"; do
    echo "  Arg $idx: '$arg'"
    ((idx++))
  done
}

# Example 3: Current shell PID and background job PID
inspect_process_info() {
  echo "Current Shell PID: $$"
  sleep 0.1 &
  local bg_pid=$!
  echo "Spawned background job PID: $bg_pid"
  wait "$bg_pid"
  echo "Background job finished."
}

# Execute examples
echo "=== Example 1: Exit Status (\$?) ==="
check_command_status "beta"
check_command_status "delta"

echo "=== Example 2: Positional Arguments (\$#, \$@) ==="
inspect_arguments "config.yaml" "production" "verbose"

echo "=== Example 3: Process Information (\$\$, \$!) ==="
inspect_process_info
