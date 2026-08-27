#!/usr/bin/env bash
# ==============================================================================
# Pipelines: Basic Pipelines (|)
#
# Connecting standard output (stdout) of one command to standard input (stdin)
# of the next command using the pipe operator (|).
#
# Example 1: Filter and count lines
# Example 2: Sort and deduplicate output
# Example 3: Chaining multiple transformations
# ==============================================================================

# Example 1: Filter and count
count_matching_lines() {
  local sample_data="error: disk full\ninfo: startup\nerror: connection timeout\ninfo: shutdown"
  local count
  count=$(printf "%b" "$sample_data" | grep "error:" | wc -l)
  echo "Total error lines: $count"
}

# Example 2: Sort and deduplicate
sort_and_unique() {
  local fruits="orange\napple\nbanana\napple\norange\ncherry"
  echo "Unique sorted fruits:"
  printf "%b" "$fruits" | sort | uniq
}

# Example 3: Multi-stage transformation pipeline
process_log_pipeline() {
  local logs="[2026-08-27 10:00:00] user=alice status=200\n[2026-08-27 10:01:00] user=bob status=500\n[2026-08-27 10:02:00] user=carol status=200"

  echo "Users with successful status (200):"
  printf "%b" "$logs" | grep "status=200" | awk '{print $3}' | cut -d= -f2
}

# Execute examples
echo "=== Example 1: Filter and Count ==="
count_matching_lines

echo "=== Example 2: Sort and Unique ==="
sort_and_unique

echo "=== Example 3: Multi-Stage Pipeline ==="
process_log_pipeline
