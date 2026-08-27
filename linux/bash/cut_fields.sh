#!/usr/bin/env bash
# ==============================================================================
# Cut: Extract Delimited Fields (cut -d -f)
#
# Extract specific delimited fields:
# - cut -d: -f1        : Extract field 1 with colon delimiter
# - cut -d: -f1,3      : Extract fields 1 and 3
# - cut -d, -f2-       : Extract from field 2 to end of line
# - cut -d. -f1        : Extract major version (split on dot)
#
# Example 1: Extract field with custom delimiter
# Example 2: Extract multiple non-contiguous and ranged fields
# Example 3: Pipeline parsing version numbers
# ==============================================================================

# Example 1: Single field extraction
extract_first_field() {
  local line="postgres:x:104:110:PostgreSQL:/var/lib/postgresql:/bin/bash"
  local username
  username=$(echo "$line" | cut -d: -f1)
  echo "Extracted Username: $username"
}

# Example 2: Multiple fields and ranges
extract_multiple_fields() {
  local csv_row="2026-08-27,prod-db-1,192.168.1.50,active,us-east"

  echo "Host and IP (-f2,3):    $(echo "$csv_row" | cut -d, -f2,3)"
  echo "Status onwards (-f4-):  $(echo "$csv_row" | cut -d, -f4-)"
}

# Example 3: Extract major version from dot-delimited string
extract_major_version() {
  local version_str="17.2.1"
  local major
  major=$(echo "$version_str" | cut -d. -f1)
  echo "Major Version from '$version_str': $major"
}

# Execute examples
echo "=== Example 1: Delimited Field Extraction ==="
extract_first_field

echo "=== Example 2: Multiple Fields and Ranges ==="
extract_multiple_fields

echo "=== Example 3: Major Version Extraction ==="
extract_major_version
