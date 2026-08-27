#!/usr/bin/env bash
# ==============================================================================
# Shebang: /usr/bin/env bash
#
# The portable shebang line tells the OS which interpreter to use when
# executing the script directly. Using `env` locates bash in PATH rather than
# hardcoding /bin/bash (which may not exist or be outdated on BSD/macOS/Nix).
#
# Example 1: Demonstrate running shell interpreter detection
# Example 2: Check current shell version and execution environment
# ==============================================================================

# Example 1: Detect interpreter path and name
detect_interpreter() {
  echo "Current shell binary: $BASH"
  echo "Current bash version: $BASH_VERSION"
}

# Example 2: Verify environment path resolution
check_env_resolution() {
  local bash_path
  bash_path=$(command -v bash)
  echo "Resolved bash in PATH: ${bash_path:-Not found}"
}

# Execute examples
echo "=== Example 1: Detect Interpreter ==="
detect_interpreter

echo "=== Example 2: Check Environment Resolution ==="
check_env_resolution
