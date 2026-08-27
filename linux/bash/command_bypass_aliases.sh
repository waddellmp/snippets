#!/usr/bin/env bash
# ==============================================================================
# Command: Bypass Aliases and Functions
#
# Builtin `command` runs a command, bypassing shell functions and aliases:
# - `command name args` : Invokes original binary/builtin, ignoring aliases/functions
# - `command -v name`   : Prints path or name if command exists (portable which)
# - `command -V name`   : Verbose description of command resolution
#
# Example 1: Bypassing a shadowed function
# Example 2: Verifying binary execution defensively
# ==============================================================================

# Example 1: Shadowed function vs command builtin
bypass_shadowed_function() {
  # Define a function shadowing 'ls'
  ls() {
    echo "[SHADOWED] Custom ls function called!"
  }

  echo "1. Calling function ls directly:"
  ls

  echo "2. Calling binary ls via 'command ls -d /':"
  command ls -d /

  # Cleanup function
  unset -f ls
}

# Example 2: Defensive tool invocation in scripts
defensive_call() {
  local tool="grep"
  if command -v "$tool" >/dev/null 2>&1; then
    echo "Defensively executing system '$tool':"
    command "$tool" "match" <<< "match text"
  fi
}

# Execute examples
echo "=== Example 1: Bypass Shadowed Function ==="
bypass_shadowed_function

echo "=== Example 2: Defensive Execution ==="
defensive_call
