#!/usr/bin/env bash
# ==============================================================================
# Grep: Basic Flags
#
# Commonly used flags with `grep`:
# - -i : Case-insensitive matching
# - -v : Invert match (select non-matching lines)
# - -c : Count matching lines
# - -n : Show line numbers with output
# - -q : Quiet/silent mode (exit 0 if match found, no output)
# - -E : Extended regular expressions (ERE)
#
# Example 1: Case-insensitive (-i) and inverted (-v) matches
# Example 2: Line numbering (-n) and match counting (-c)
# Example 3: Extended regex matching (-E)
# ==============================================================================

# Example 1: Case-insensitive & Inverted matching
filter_case_and_invert() {
  local log_data="INFO: system started\nERROR: timeout\nwarn: high cpu\nERROR: connection dropped"

  echo "1. Case-insensitive search for 'error' (-i):"
  printf "%b" "$log_data" | grep -i "error"

  echo "2. Invert search (exclude lines with 'ERROR') (-v):"
  printf "%b" "$log_data" | grep -v "ERROR"
}

# Example 2: Line numbers and match counts
count_and_number_matches() {
  local log_data="user=alice status=active\nuser=bob status=disabled\nuser=carol status=active"

  echo "1. Active users with line numbers (-n):"
  printf "%b" "$log_data" | grep -n "status=active"

  echo "2. Total active users count (-c):"
  printf "%b" "$log_data" | grep -c "status=active"
}

# Example 3: Extended regex with multiple alternatives (-E)
match_extended_regex() {
  local sample="port: 80\nport: 443\nport: 5432\nport: 8080"

  echo "Match standard web ports (80 or 443) with grep -E:"
  printf "%b" "$sample" | grep -E "port: (80|443)$"
}

# Execute examples
echo "=== Example 1: Case-Insensitive & Inverted ==="
filter_case_and_invert

echo "=== Example 2: Line Numbers & Counts ==="
count_and_number_matches

echo "=== Example 3: Extended Regex ==="
match_extended_regex
