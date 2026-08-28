#!/usr/bin/env bash
# ==============================================================================
# Test: File Operators ([ ... ] / test)
#
# File test expressions:
# - -e file : True if file exists
# - -f file : True if regular file exists
# - -d file : True if directory exists
# - -r file : True if file is readable
# - -w file : True if file is writable
# - -x file : True if file is executable
# - -s file : True if file exists and has size > 0
# - -L file : True if file is a symbolic link
#
# Example 1: Check file vs directory existence
# Example 2: Check permissions (readable, writable, executable)
# Example 3: Check non-empty file size
# ==============================================================================

# Example 1: Inspect file and directory types
inspect_path_type() {
  local path="$1"
  if [ -d "$path" ]; then
    echo "'$path' is a directory."
  elif [ -f "$path" ]; then
    echo "'$path' is a regular file."
  elif [ -e "$path" ]; then
    echo "'$path' exists but is a special file."
  else
    echo "'$path' does not exist."
  fi
}

# Example 2: Check file permissions
check_permissions() {
  local target="$1"
  [ -r "$target" ] && echo "  - Readable (-r)"
  [ -w "$target" ] && echo "  - Writable (-w)"
  [ -x "$target" ] && echo "  - Executable (-x)"
}

# Example 3: Check if file has non-zero size
check_non_empty() {
  local target="$1"
  if [ -s "$target" ]; then
    echo "File '$target' exists and is not empty."
  else
    echo "File '$target' is empty or does not exist."
  fi
}

# Execute examples
echo "=== Example 1: Path Type Inspection ==="
inspect_path_type "/etc"
inspect_path_type "/etc/passwd"

echo "=== Example 2: Permission Checks ==="
echo "Checking /etc/passwd permissions:"
check_permissions "/etc/passwd"

echo "=== Example 3: Non-Empty File Check ==="
check_non_empty "/etc/passwd"
