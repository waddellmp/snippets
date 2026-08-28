#!/usr/bin/env bash
# ==============================================================================
# Variables: UID vs EUID
#
# Comparison of real user ID ($UID) vs effective user ID ($EUID):
# - $UID  : Real user ID of the logged in user
# - $EUID : Effective user ID governing permissions (e.g. setuid or sudo)
#
# Example 1: Display current UID and EUID
# Example 2: Explain elevation checks using EUID
# ==============================================================================

# Example 1: Inspect UID and EUID values
inspect_user_ids() {
  echo "Real User ID (\$UID):      $UID"
  echo "Effective User ID (\$EUID): $EUID"
}

# Example 2: Why EUID is preferred for permission tests
explain_elevation_check() {
  if [ "$EUID" -eq 0 ]; then
    echo "Process has effective root capabilities."
  else
    echo "Process is running as normal user (UID: $UID, EUID: $EUID)."
    echo "Note: Use \$EUID rather than \$UID to detect sudo elevation correctly."
  fi
}

# Execute examples
echo "=== Example 1: User IDs Inspection ==="
inspect_user_ids

echo "=== Example 2: Elevation Check ==="
explain_elevation_check
