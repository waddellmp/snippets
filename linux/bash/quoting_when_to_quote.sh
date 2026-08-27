#!/usr/bin/env bash
# ==============================================================================
# Quoting: When to Quote Variables
#
# Always double-quote variable references ("$VAR") to prevent:
# 1. Word Splitting: Strings containing spaces becoming multiple arguments
# 2. Globbing: Wildcards (*, ?) in variable values expanding to filenames
#
# Example 1: Preventing word splitting with spaces
# Example 2: Preventing glob expansion
# Example 3: Passing arguments cleanly to commands
# ==============================================================================

# Example 1: Word splitting demonstration
prevent_word_splitting() {
  local filename="My Document 2026.txt"

  count_args() {
    echo "  Received $# argument(s): $*"
  }

  echo "Calling with UNQUOTED variable (\$filename):"
  count_args $filename

  echo "Calling with QUOTED variable ("\$filename"):"
  count_args "$filename"
}

# Example 2: Globbing prevention
prevent_globbing() {
  local pattern="*"

  echo "Unquoted asterisk expands to current directory files (globbing)."
  echo "Quoted asterisk remains literal: "$pattern""
}

# Example 3: Safe file testing with spaces
test_file_safely() {
  local path="/tmp/test file with spaces.txt"
  # Quoting avoids syntax error: [ -f /tmp/test file with spaces.txt ]
  if [ -f "$path" ]; then
    echo "File exists."
  else
    echo "File '$path' checked safely without syntax errors."
  fi
}

# Execute examples
echo "=== Example 1: Word Splitting ==="
prevent_word_splitting

echo "=== Example 2: Globbing ==="
prevent_globbing

echo "=== Example 3: Safe Testing ==="
test_file_safely
