#!/usr/bin/env bash
# ==============================================================================
# Variables: Assignment and Reference
#
# Rules for variables in bash:
# - No spaces around '=' during assignment (NAME="val", not NAME = "val")
# - Quote variable references ("$NAME") to prevent word splitting and globbing
# - Use curly braces ("${NAME}") to avoid ambiguity when concatenating
#
# Example 1: Basic assignment and quoted referencing
# Example 2: Disambiguation with curly braces
# Example 3: Array assignment and element access
# ==============================================================================

# Example 1: Basic assignment and quoting
assign_and_print() {
  local username="john doe"
  local port=5432

  echo "User: $username"
  echo "Port: $port"
}

# Example 2: Concatenation with curly braces
concatenate_with_braces() {
  local pg_version="17"
  # Without braces, $pg_versionmain looks up undefined variable pg_versionmain
  local cluster_name="${pg_version}main"
  local config_path="/etc/postgresql/${pg_version}/main/postgresql.conf"

  echo "Cluster Name: $cluster_name"
  echo "Config Path: $config_path"
}

# Example 3: Working with arrays
array_operations() {
  local items=("apple" "banana" "cherry with spaces")

  echo "First item: ${items[0]}"
  echo "All items count: ${#items[@]}"
  echo "Iterating items with quotes:"
  for item in "${items[@]}"; do
    echo "  - $item"
  done
}

# Execute examples
echo "=== Example 1: Basic Assignment & Reference ==="
assign_and_print

echo "=== Example 2: Braces Concatenation ==="
concatenate_with_braces

echo "=== Example 3: Array Operations ==="
array_operations
