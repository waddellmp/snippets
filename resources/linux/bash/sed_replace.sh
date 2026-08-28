#!/usr/bin/env bash
# ==============================================================================
# Sed: Stream Editor - Basic Search and Replace (s/find/replace/g)
#
# Basic sed substitute syntax:
# - sed 's/find/replace/'       : Replace first match per line
# - sed 's/find/replace/g'      : Replace all matches per line (global)
# - sed 's|/path/one|/path/two|': Use custom delimiter to avoid escaping slashes
#
# Example 1: Basic text substitution
# Example 2: Global substitution across multiple occurrences
# Example 3: Using alternate delimiters for file paths
# ==============================================================================

# Example 1: First match replacement
replace_first_occurrence() {
  local text="foo bar foo baz"
  echo "Original: $text"
  echo "Replace first: $(echo "$text" | sed 's/foo/QUX/')"
}

# Example 2: Global replacement with /g
replace_all_occurrences() {
  local text="apple orange apple banana apple"
  echo "Original: $text"
  echo "Replace all:   $(echo "$text" | sed 's/apple/PEAR/g')"
}

# Example 3: Alternate delimiters (avoiding leaning toothpick syndrome)
replace_path_delimiter() {
  local path="/etc/postgresql/16/main"
  # Using '|' instead of '/' as delimiter
  echo "Original path: $path"
  echo "Updated path:  $(echo "$path" | sed 's|/16/|/17/|')"
}

# Execute examples
echo "=== Example 1: Replace First ==="
replace_first_occurrence

echo "=== Example 2: Replace Global ==="
replace_all_occurrences

echo "=== Example 3: Alternate Delimiter ==="
replace_path_delimiter
