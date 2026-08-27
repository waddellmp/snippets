#!/usr/bin/env bash
# ==============================================================================
# Echo: Basic Printing and Flags
#
# Builtin `echo` behavior and flags:
# - echo "text"     : Print text followed by newline
# - echo -n "text"  : Print without trailing newline
# - echo -e "text"  : Enable interpretation of backslash escapes (\n, \t, \e)
# - echo -E "text"  : Disable interpretation of backslash escapes (default)
#
# Example 1: Standard output with and without trailing newline
# Example 2: Escape sequences for tabs, newlines, and colors
# Example 3: Comparing echo vs printf for portability
# ==============================================================================

# Example 1: Trailing newline control (-n)
print_with_and_without_newline() {
  echo "Standard echo with automatic newline."
  echo -n "Progress: ["
  echo -n "===="
  echo -n ">"
  echo "] Complete!"
}

# Example 2: Escape sequences (-e)
print_escapes() {
  echo -e "Line 1\n\tIndented Line 2 with tab\nLine 3"
}

# Example 3: Colored output with ANSI escape codes
print_colored_status() {
  local green="\033[32m"
  local red="\033[31m"
  local reset="\033[0m"

  echo -e "${green}[SUCCESS]${reset} Task completed."
  echo -e "${red}[ERROR]${reset} Failed to connect."
}

# Execute examples
echo "=== Example 1: Newline Control ==="
print_with_and_without_newline

echo "=== Example 2: Escape Sequences ==="
print_escapes

echo "=== Example 3: Colored Status Output ==="
print_colored_status
