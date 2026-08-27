#!/usr/bin/env bash
# ==============================================================================
# Cut: Extract Character Offsets (cut -c)
#
# Extract fixed-width character columns by position (1-based):
# - cut -c1-10  : Extract characters 1 through 10
# - cut -c1,3,5 : Extract specific individual character offsets
# - cut -c10-   : Extract from character 10 to end of line
# - cut -c-8    : Extract from start up to character 8
#
# Example 1: Extract date prefix from timestamp
# Example 2: Extract character columns from fixed-width data
# Example 3: Extract commit hash prefix
# ==============================================================================

# Example 1: Extract timestamp components
extract_date_prefix() {
  local timestamp="2026-08-27T10:15:30Z"
  local date_part
  local time_part
  date_part=$(echo "$timestamp" | cut -c1-10)
  time_part=$(echo "$timestamp" | cut -c12-19)

  echo "Timestamp: $timestamp"
  echo "Date Part (cut -c1-10):  $date_part"
  echo "Time Part (cut -c12-19): $time_part"
}

# Example 2: Extract from fixed-width records
extract_fixed_width() {
  local record="USER10294829384ACTIVE  US"
  local user_id
  local status
  user_id=$(echo "$record" | cut -c1-10)
  status=$(echo "$record" | cut -c19-24)

  echo "Extracted User ID: $user_id"
  echo "Extracted Status:  $status"
}

# Example 3: Short SHA from commit hash
extract_short_sha() {
  local full_sha="a4a1d249810bba2c1bef5099485c2aaf565d3bec"
  local short_sha
  short_sha=$(echo "$full_sha" | cut -c1-7)
  echo "Full SHA:  $full_sha"
  echo "Short SHA: $short_sha"
}

# Execute examples
echo "=== Example 1: Timestamp Extraction ==="
extract_date_prefix

echo "=== Example 2: Fixed-Width Record ==="
extract_fixed_width

echo "=== Example 3: Commit Short SHA ==="
extract_short_sha
