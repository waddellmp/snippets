#!/usr/bin/env bash
# ==============================================================================
# Awk: Patterns & Conditional Actions
#
# Awk structure: pattern { action }
# If pattern matches, action executes.
# - /regex/ { action }      : Regex matching pattern
# - condition { action }    : Relational expression ($1 == "foo")
# - BEGIN { ... } / END { ... } : Blocks executed before/after processing records
#
# Example 1: Filter lines matching regular expression pattern
# Example 2: Relational filtering on column value
# Example 3: BEGIN and END blocks for aggregation
# ==============================================================================

# Example 1: Pattern match with regex
filter_errors() {
  local log_data="[INFO] System ok\n[ERROR] Database down\n[WARN] High memory\n[ERROR] Timeout"
  echo "Filtering ERROR lines:"
  printf "%b" "$log_data" | awk '/\[ERROR\]/ {print $0}'
}

# Example 2: Relational condition on fields
filter_by_column() {
  local table="alice 85\nbob 62\ncarol 94\ndavid 48"
  echo "Students with score >= 80:"
  printf "%b" "$table" | awk '$2 >= 80 {print $1 " passed with " $2}'
}

# Example 3: Accumulating totals with BEGIN / END
sum_column_values() {
  local data="item1 10\nitem2 25\nitem3 15"
  printf "%b" "$data" | awk '
    BEGIN { total = 0 }
    { total += $2 }
    END { print "Total sum: " total }
  '
}

# Execute examples
echo "=== Example 1: Regex Pattern Matching ==="
filter_errors

echo "=== Example 2: Column Condition ==="
filter_by_column

echo "=== Example 3: BEGIN / END Aggregation ==="
sum_column_values
