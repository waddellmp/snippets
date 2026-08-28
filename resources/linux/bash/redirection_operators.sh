#!/usr/bin/env bash
# ==============================================================================
# Redirection: Basic Operators
#
# Common redirection operators:
# - > file   : Redirect stdout to file (overwrite)
# - >> file  : Redirect stdout to file (append)
# - < file   : Redirect file content to stdin
# - 2> file  : Redirect stderr (file descriptor 2) to file
# - &> file  : Redirect both stdout and stderr to file
# - 2>&1     : Redirect stderr to stdout
# - /dev/null: Discard output
#
# Example 1: Overwrite and append to file
# Example 2: Redirect stderr and stdout separately
# Example 3: Suppress output with /dev/null
# ==============================================================================

# Example 1: Overwrite (>) vs Append (>>)
write_and_append() {
  local tmp_file="/tmp/bash_redirect_demo_$$.txt"

  echo "Line 1: Initial creation" > "$tmp_file"
  echo "Line 2: Appended line" >> "$tmp_file"

  echo "File contents:"
  cat "$tmp_file"
  rm -f "$tmp_file"
}

# Example 2: Separating stdout and stderr
separate_stdout_stderr() {
  local out_file="/tmp/demo_stdout_$$.txt"
  local err_file="/tmp/demo_stderr_$$.txt"

  {
    echo "Standard informational message"
    echo "Error warning message" >&2
  } > "$out_file" 2> "$err_file"

  echo "Captured stdout: $(cat "$out_file")"
  echo "Captured stderr: $(cat "$err_file")"

  rm -f "$out_file" "$err_file"
}

# Example 3: Silence output completely
silence_command() {
  if command -v bash >/dev/null 2>&1; then
    echo "Checked binary existence silently."
  fi
}

# Execute examples
echo "=== Example 1: Overwrite & Append ==="
write_and_append

echo "=== Example 2: Separate Output Streams ==="
separate_stdout_stderr

echo "=== Example 3: Silencing Output ==="
silence_command
