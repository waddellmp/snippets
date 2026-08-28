#!/usr/bin/env bash
# ==============================================================================
# Variables: EUID (Effective User ID)
#
# Built-in read-only variable holding the effective user ID of current process:
# - 0 : Root (superuser / elevated privileges)
# - 1000+ : Non-root / regular user accounts
#
# Example 1: Require root privileges or warn
# Example 2: Detect whether running with elevation
# ==============================================================================

# Example 1: Check root privilege
require_root() {
  if [ "$EUID" -ne 0 ]; then
    echo "[WARN] Not running as root (Current EUID: $EUID). Root commands require elevation."
    return 1
  else
    echo "[OK] Running with root/elevated privileges (EUID: 0)."
    return 0
  fi
}

# Example 2: Conditional execution based on EUID
run_privileged_task() {
  if [ "$EUID" -eq 0 ]; then
    echo "Executing administrative maintenance task..."
  else
    echo "Skipping administrative task: requires sudo or root EUID."
  fi
}

# Execute examples
echo "=== Example 1: Privilege Verification ==="
require_root || true

echo "=== Example 2: Conditional Administrative Task ==="
run_privileged_task
