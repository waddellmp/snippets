#!/usr/bin/env bash
# ==============================================================================
# Quoting: Single Quotes vs Double Quotes
#
# Quoting rules:
# - Single quotes ('...'): Literal text. No variable expansion, no command
#   substitution, no escape sequences.
# - Double quotes ("..."): Allows variable expansion ($VAR), command substitution
#   ($(cmd)), and arithmetic ($((...))), but preserves whitespace and prevents globbing.
#
# Example 1: Literal single quotes vs expanded double quotes
# Example 2: Command substitution inside double quotes
# Example 3: Escaping quotes inside strings
# ==============================================================================

# Example 1: Comparing quote behaviors
compare_quotes() {
  local name="PostgreSQL"

  echo 'Single quotes (literal): Hello $name, date is $(date)'
  echo "Double quotes (expanded): Hello $name"
}

# Example 2: Command substitution in double quotes
embed_command_output() {
  local user_count=42
  local message="Active system users count: ${user_count} on $(uname -s)"
  echo "$message"
}

# Example 3: Escaping characters inside double quotes
escaped_quotes() {
  local file="app.conf"
  echo "Configuration file "$file" successfully loaded at \$HOME/config"
}

# Execute examples
echo "=== Example 1: Single vs Double Quotes ==="
compare_quotes

echo "=== Example 2: Embed Command in Double Quotes ==="
embed_command_output

echo "=== Example 3: Escaped Characters ==="
escaped_quotes
