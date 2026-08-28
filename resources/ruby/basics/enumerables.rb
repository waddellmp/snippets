#!/usr/bin/env ruby
# Ruby Enumerables & Array Manipulations
# Demonstrates common and powerful Enumerable methods in Ruby.

# Example 1: Transform with map / collect
numbers = [1, 2, 3, 4, 5]
squares = numbers.map { |n| n ** 2 }
puts "Squares: #{squares.inspect}" # => [1, 4, 9, 16, 25]

# Example 2: Filter with select and reject
evens = numbers.select { |n| n.even? }
odds = numbers.reject { |n| n.even? }
puts "Evens: #{evens.inspect}" # => [2, 4]
puts "Odds: #{odds.inspect}"   # => [1, 3, 5]

# Example 3: Accumulate with reduce / inject
sum = numbers.reduce(0) { |acc, n| acc + n }
# Shorthand symbol-to-proc syntax:
product = numbers.reduce(:*)
puts "Sum: #{sum}, Product: #{product}" # => Sum: 15, Product: 120

# Example 4: Count occurrences with tally
fruits = %w[apple banana apple orange banana apple]
counts = fruits.tally
puts "Tally: #{counts.inspect}" # => {"apple"=>3, "banana"=>2, "orange"=>1}

# Example 5: Group elements with group_by
grouped = (1..10).group_by { |n| n % 3 }
puts "Grouped by modulo 3: #{grouped.inspect}"

# Example 6: Flattened mapping with flat_map
nested = [[1, 2], [3, 4]]
flattened_doubles = nested.flat_map { |arr| arr.map { |x| x * 10 } }
puts "Flat map: #{flattened_doubles.inspect}" # => [10, 20, 30, 40]

# Example 7: Building state with each_with_object
char_map = %w[a b c].each_with_object({}) do |char, hash|
  hash[char] = char.upcase
end
puts "each_with_object: #{char_map.inspect}" # => {"a"=>"A", "b"=>"B", "c"=>"C"}
