#!/usr/bin/env bash
# ==============================================================================
# Sudo: Run Commands as Another User (sudo -u <user>)
#
# Executing commands under a different user account:
# - sudo -u postgres psql         : Execute psql as postgres OS user
# - sudo -u postgres -i           : Start an interactive login shell as postgres
# - sudo -u <user> bash -c "<cmd>": Execute compound shell pipeline as user
#
# Example 1: Format command to run database utility as postgres user
# Example 2: Running multi-command subshells with sudo -u
# Example 3: Explaining peer authentication benefits
# ==============================================================================

# Example 1: Single command invocation as postgres user
format_sudo_user_cmd() {
  local sql_query="$1"
  echo "Executing as postgres user:"
  echo "sudo -u postgres psql -d postgres -c "$sql_query""
}

# Example 2: Complex command execution in bash subshell
format_sudo_subshell_cmd() {
  local cmd="createdb mydb && psql -d mydb -c 'CREATE EXTENSION pg_stat_statements;'"
  echo "Compound command as user:"
  echo "sudo -u postgres bash -c "$cmd""
}

# Example 3: Explanation of peer authentication
explain_peer_auth() {
  echo "PostgreSQL 'peer' auth uses the Linux OS username of the connecting process."
  echo "Running 'sudo -u postgres psql' connects seamlessly without prompting for passwords."
}

# Execute examples
echo "=== Example 1: Sudo -u Command Format ==="
format_sudo_user_cmd "SELECT datname FROM pg_database;"

echo "=== Example 2: Sudo -u Compound Pipeline ==="
format_sudo_subshell_cmd

echo "=== Example 3: Peer Authentication ==="
explain_peer_auth
