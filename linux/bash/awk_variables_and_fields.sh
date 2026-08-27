#!/usr/bin/env bash
# ==============================================================================
# Awk: Built-in Variables and Fields
#
# Key built-in awk variables:
# - $0  : Entire record/line
# - $1, $2, ... : Individual positional fields
# - NF  : Number of fields in current record
# - $NF : Value of the last field
# - NR  : Current record/line number (1-based)
# - FS  : Input field separator (default whitespace)
# - OFS : Output field separator
#
# Example 1: Working with line numbers (NR) and field count (NF)
# Example 2: Custom input and output delimiters (FS, OFS, -F)
# Example 3: Passing external shell variables into awk (-v var=val)
# ==============================================================================

# Example 1: Display line numbers and field counts
display_line_info() {
  local data="first line with four words\nsecond line\nthird line with five words total"
  printf "%b" "$data" | awk '{print "Line " NR " (" NF " fields): " $0}'
}

# Example 2: Delimited fields parsing (colon separated)
parse_colon_delimited() {
  local data="root:x:0:0:root:/root:/bin/bash\npostgres:x:104:110:PostgreSQL:/var/lib/postgresql:/bin/bash"
  echo "Username and Shell from colon-delimited data:"
  printf "%b" "$data" | awk -F: '{print $1 " -> " $7}'
}

# Example 3: Passing shell variables to awk with -v
filter_by_variable() {
  local threshold=50
  local sample_data="cpu 45\nmemory 78\ndisk 20\nnetwork 85"

  echo "Metrics exceeding threshold ($threshold%):"
  printf "%b" "$sample_data" | awk -v limit="$threshold" '$2 > limit {print "  - " $1 ": " $2 "%"}'
}

# Execute examples
echo "=== Example 1: NR and NF Built-ins ==="
display_line_info

echo "=== Example 2: Custom Delimiter (-F:) ==="
parse_colon_delimited

echo "=== Example 3: Passing Shell Variable (-v) ==="
filter_by_variable
