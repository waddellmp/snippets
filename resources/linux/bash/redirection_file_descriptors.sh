#!/usr/bin/env bash
# ==============================================================================
# Redirection: File Descriptors (FDs)
#
# Standard Linux File Descriptors:
# - 0 : Standard Input (stdin)
# - 1 : Standard Output (stdout)
# - 2 : Standard Error (stderr)
# - 3+ : Custom user-defined file descriptors
#
# Example 1: Writing directly to standard error (FD 2)
# Example 2: Reading from custom file descriptor
# Example 3: Creating and closing custom file descriptor (exec 3<file)
# ==============================================================================

# Example 1: Logging to stderr
log_error() {
  local msg="$1"
  echo "[ERROR] $msg" >&2
}

# Example 2: Custom file descriptor for logging
custom_fd_logging() {
  local log_file="/tmp/custom_fd_$$.log"

  # Open FD 3 for writing to log_file
  exec 3> "$log_file"

  echo "Log entry 1 via FD 3" >&3
  echo "Log entry 2 via FD 3" >&3

  # Close FD 3
  exec 3>&-

  echo "Content logged via FD 3:"
  cat "$log_file"
  rm -f "$log_file"
}

# Example 3: Process substitution (<(command))
read_process_stream() {
  while IFS= read -r line; do
    echo "Stream line: $line"
  done < <(printf "lineA\nlineB\nlineC")
}

# Execute examples
echo "=== Example 1: Write to Stderr (FD 2) ==="
log_error "Sample failure message"

echo "=== Example 2: Custom File Descriptor (FD 3) ==="
custom_fd_logging

echo "=== Example 3: Process Substitution Stream ==="
read_process_stream
