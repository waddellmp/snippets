#!/usr/bin/env bash
# ==============================================================================
# Command: Portable Existence Check (command -v)
#
# Why `command -v` is preferred over `which`:
# - `command -v` is a standard POSIX shell builtin (fast, no external subshell)
# - `which` is an external binary that varies across operating systems and distros
# - Exits with 0 if command is found, non-zero if missing
#
# Example 1: Check if binary exists before using
# Example 2: Find absolute path of a tool
# Example 3: Fallback between multiple available tools
# ==============================================================================

# Example 1: Tool existence check
check_tool_exists() {
  local tool="$1"
  if command -v "$tool" >/dev/null 2>&1; then
    echo "Tool '$tool' is installed."
    return 0
  else
    echo "Tool '$tool' is NOT found in PATH."
    return 1
  fi
}

# Example 2: Retrieve resolved tool path
get_tool_path() {
  local tool="$1"
  local path
  path=$(command -v "$tool")
  if [ -n "$path" ]; then
    echo "Path of '$tool': $path"
  else
    echo "Tool '$tool' not located."
  fi
}

# Example 3: Select available tool from candidates
pick_editor() {
  local editor
  for candidate in nano vim vi emacs; do
    if command -v "$candidate" >/dev/null 2>&1; then
      editor="$candidate"
      break
    fi
  done
  echo "Selected default editor: ${editor:-none}"
}

# Execute examples
echo "=== Example 1: Tool Existence Check ==="
check_tool_exists "bash"
check_tool_exists "pg_conftool" || true

echo "=== Example 2: Get Tool Path ==="
get_tool_path "bash"
get_tool_path "sed"

echo "=== Example 3: Tool Selection ==="
pick_editor
