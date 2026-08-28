#!/usr/bin/env bash
# ==============================================================================
# Variables: Parameter Defaults
#
# Parameter expansion syntax for defaults:
# - ${VAR:-default} : Use default if VAR is unset or empty (does NOT mutate VAR)
# - ${VAR:=default} : Use default and ASSIGN it to VAR
# - ${VAR:+alternate} : Use alternate if VAR is set and non-empty
# - ${VAR:?error_msg} : Abort with error_msg if VAR is unset or empty
#
# Example 1: Read-only fallback with :-
# Example 2: Assignment fallback with :=
# Example 3: Required parameter check with :?
# ==============================================================================

# Example 1: Read-only fallback
get_database_host() {
  local host="${1:-localhost}"
  local port="${2:-5432}"
  echo "Connecting to database at ${host}:${port}"
}

# Example 2: Assignment fallback (mutates variable)
initialize_defaults() {
  local target_env="${1:-}"
  : "${target_env:=development}" # assigns 'development' if empty
  echo "Target environment initialized to: $target_env"
}

# Example 3: Conditional presence with :+
get_optional_flag() {
  local debug_mode="$1"
  # If debug_mode is non-empty, use '--verbose', else empty
  local flag="${debug_mode:+--verbose}"
  echo "Debug flag: '${flag:-[none]}'"
}

# Execute examples
echo "=== Example 1: Read-only Fallback ==="
get_database_host "" ""
get_database_host "db.production.internal" "6432"

echo "=== Example 2: Assignment Fallback ==="
initialize_defaults ""
initialize_defaults "staging"

echo "=== Example 3: Optional Flag Expansion ==="
get_optional_flag ""
get_optional_flag "true"
