#!/usr/bin/env bash
# ==============================================================================
# Sed: Anchors and Regular Expressions
#
# Common regex anchors and character classes in sed:
# - ^          : Start of line anchor
# - $          : End of line anchor
# - [[:space:]]: Any whitespace (spaces, tabs)
# - .*         : Match any characters until end of match
# - \( ... \)  : Capture group in basic regex (referenced with \1, \2)
#
# Example 1: Matching start (^) and end ($) of lines
# Example 2: Flexible whitespace matching with [[:space:]]
# Example 3: Capture groups and backreferences
# ==============================================================================

# Example 1: Anchored substitutions
anchored_replacement() {
  local sample="start middle start end"
  echo "Original: $sample"
  echo "Replace leading 'start' (^):  $(echo "$sample" | sed 's/^start/BEGIN/')"
  echo "Replace trailing 'end' ($):   $(echo "$sample" | sed 's/end$/FINISH/')"
}

# Example 2: Flexible whitespace matching for config keys
clean_config_spacing() {
  local lines="  shared_preload_libraries   =   'old_val'\n# shared_preload_libraries = ''"

  echo "Standardize configuration setting line:"
  printf "%b\n" "$lines" | sed "s/^[#[:space:]]*shared_preload_libraries[[:space:]]*=.*/shared_preload_libraries = 'pg_stat_statements'/"
}

# Example 3: Capture groups and backreferences (\1)
capture_and_reorder() {
  local name="John Doe"
  echo "Original name: $name"
  echo "Reordered (Last, First): $(echo "$name" | sed -E 's/([A-Za-z]+) ([A-Za-z]+)/\2, \1/')"
}

# Execute examples
echo "=== Example 1: Line Anchors (^, $) ==="
anchored_replacement

echo "=== Example 2: Flexible Whitespace Matching ==="
clean_config_spacing

echo "=== Example 3: Capture Groups & Backreferences ==="
capture_and_reorder
