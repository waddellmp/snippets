#!/usr/bin/env bash
# ==============================================================================
# Awk: Print Field
#
# Pull out specific fields of each line using awk.
#
# Example 1: Print a specific field ($2) from whitespace-separated input
# Example 2: Inspect individual fields ($0, $1, $2, $NF, NF)
# Example 3: Extract version in a pipeline
# ==============================================================================

# Example 1: Print the 2nd field of an input line
print_second_field() {
  local input="$1"
  echo "$input" | awk '{print $2}'
}

# Example 2: Inspect multiple fields and field count
inspect_fields() {
  local input="$1"
  echo "$input" | awk '{
    print "Full Line ($0): " $0
    print "Field 1 ($1):   " $1
    print "Field 2 ($2):   " $2
    print "Last Field ($NF): " $NF
    print "Total Fields (NF): " NF
  }'
}

# Example 3: Version extraction pipeline example
extract_pg_version() {
  local version_str="${1:-PostgreSQL 17.2 (Ubuntu 17.2-1.pgdg22.04+1)}"
  echo "$version_str" | awk '{print $2}'
}

# Execute examples
echo "=== Example 1: Print 2nd Field ==="
print_second_field "PostgreSQL 17.2 (Ubuntu 17.2-1.pgdg22.04+1)"

echo "=== Example 2: Inspect Fields ==="
inspect_fields "PostgreSQL 17.2 (Ubuntu 17.2-1.pgdg22.04+1)"

echo "=== Example 3: Version Extraction ==="
extract_pg_version
