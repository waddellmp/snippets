#!/usr/bin/env bash
# ==============================================================================
# Variables: Expansions
#
# Built-in parameter expansions for string manipulation:
# - ${var#prefix} / ${var##prefix} : Strip shortest/longest matching prefix
# - ${var%suffix} / ${var%%suffix} : Strip shortest/longest matching suffix
# - ${var/pattern/replacement}    : Replace first match
# - ${var//pattern/replacement}   : Replace all matches
# - ${var^^} / ${var,,}           : Convert to uppercase / lowercase
# - ${#var}                       : String length
#
# Example 1: File path stripping (dirname and basename)
# Example 2: Search and replace inside strings
# Example 3: Case transformation and string length
# ==============================================================================

# Example 1: Strip prefixes and suffixes from paths
parse_file_path() {
  local full_path="$1"

  local filename="${full_path##*/}"     # basename (strip longest prefix */)
  local directory="${full_path%/*}"      # dirname (strip shortest suffix /*)
  local extension="${full_path##*.}"     # file extension (strip up to last .)
  local without_ext="${filename%.*}"     # filename without extension

  echo "Full path: $full_path"
  echo "Directory: $directory"
  echo "Filename:  $filename"
  echo "Extension: $extension"
  echo "Base name: $without_ext"
}

# Example 2: Search and replace
transform_content() {
  local input="apple orange apple banana apple"

  local replace_first="${input/apple/pear}"
  local replace_all="${input//apple/pear}"

  echo "Original:      $input"
  echo "Replace First: $replace_first"
  echo "Replace All:   $replace_all"
}

# Example 3: Case conversions & length
case_and_length() {
  local text="Hello World From Bash"

  echo "Uppercase:     ${text^^}"
  echo "Lowercase:     ${text,,}"
  echo "String Length: ${#text} characters"
}

# Execute examples
echo "=== Example 1: Path Parsing ==="
parse_file_path "/etc/postgresql/17/main/postgresql.conf"

echo "=== Example 2: Search and Replace ==="
transform_content

echo "=== Example 3: Case & Length ==="
case_and_length
