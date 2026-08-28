#!/usr/bin/env ruby
# Ruby Strings and Regular Expressions
# Demonstrates common string manipulations, interpolation, and regex matching in Ruby.

# Example 1: String Interpolation and formatting
name = "Ruby"
version = "4.0"
message = "#{name} version #{version} is active."
puts message # => "Ruby version 4.0 is active."

# Example 2: Regex substitution with gsub and sub
raw_text = "Order 1234 on item 567"
masked = raw_text.gsub(/\d+/, "XXX")
puts "Masked: #{masked}" # => "Order XXX on item XXX"

# Example 3: Extracting matches with scan
log = "IP 192.168.1.1 accessed by 10.0.0.42"
ips = log.scan(/\d+\.\d+\.\d+\.\d+/)
puts "Extracted IPs: #{ips.inspect}" # => ["192.168.1.1", "10.0.0.42"]

# Example 4: Named Regex Captures
pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
match = "2026-08-27".match(pattern)
puts "Year: #{match[:year]}, Month: #{match[:month]}, Day: #{match[:day]}"

# Example 5: Splitting, Trimming, and Chomp
csv_line = "  apple, banana, cherry \n"
cleaned = csv_line.strip.split(",").map(&:strip)
puts "Cleaned CSV: #{cleaned.inspect}" # => ["apple", "banana", "cherry"]
