#!/usr/bin/env bash
# ==============================================================================
# Sed: In-Place File Editing (sed -i)
#
# Modifying files directly without redirection:
# - sed -i 's/find/replace/g' file.txt         : Edit file in-place (GNU sed)
# - sed -i.bak 's/find/replace/g' file.txt     : Edit file with backup copy (.bak)
#
# Example 1: Edit file in-place with backup
# Example 2: Modify configuration key value in file
# Example 3: Uncomment and set configuration setting
# ==============================================================================

# Example 1: In-place edit with backup creation
edit_with_backup() {
  local tmp_file="/tmp/sed_in_place_demo_$$.conf"
  echo "port = 5432" > "$tmp_file"
  echo "Initial content: $(cat "$tmp_file")"

  # Edit in place with .bak backup
  sed -i.bak 's/5432/5433/' "$tmp_file"

  echo "Modified content: $(cat "$tmp_file")"
  echo "Backup content:   $(cat "${tmp_file}.bak")"

  rm -f "$tmp_file" "${tmp_file}.bak"
}

# Example 2: Update configuration parameter in-place
update_config_parameter() {
  local tmp_file="/tmp/pg_conf_demo_$$.conf"
  cat << 'EOF' > "$tmp_file"
# Settings
max_connections = 100
shared_buffers = 128MB
EOF

  echo "Updating max_connections to 200..."
  sed -i 's/^max_connections = .*/max_connections = 200/' "$tmp_file"
  cat "$tmp_file"

  rm -f "$tmp_file"
}

# Example 3: Uncomment and set setting
uncomment_and_set() {
  local tmp_file="/tmp/uncomment_demo_$$.conf"
  echo "#shared_preload_libraries = ''" > "$tmp_file"

  echo "Uncommenting and configuring setting:"
  sed -i "s/^[#]*[[:space:]]*shared_preload_libraries[[:space:]]*=.*/shared_preload_libraries = 'pg_stat_statements'/" "$tmp_file"
  cat "$tmp_file"

  rm -f "$tmp_file"
}

# Execute examples
echo "=== Example 1: In-Place Edit with Backup ==="
edit_with_backup

echo "=== Example 2: Update Config Value ==="
update_config_parameter

echo "=== Example 3: Uncomment Setting ==="
uncomment_and_set
