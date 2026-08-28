#!/usr/bin/env ruby
# Ruby Blocks, Procs, and Lambdas
# Explains closures, custom yielding, and callable objects in Ruby.

# Example 1: Custom method with yield and block_given?
def repeat(times)
  return enum_for(:repeat, times) unless block_given?
  times.times { |i| yield(i + 1) }
end

puts "--- Custom Yield ---"
repeat(3) { |n| puts "Run ##{n}" }

# Example 2: Procs (Lenient arity, returns from enclosing scope)
my_proc = Proc.new { |x, y| puts "Proc got x=#{x.inspect}, y=#{y.inspect}" }
my_proc.call(10) # y defaults to nil (does not raise ArgumentError)

# Example 3: Lambdas (Strict arity, returns value back to caller)
my_lambda = ->(x, y) { x * y }
puts "Lambda result: #{my_lambda.call(6, 7)}" # => 42

# Example 4: Symbol-to-proc shorthand (&:method_name)
words = %w[ruby python javascript]
uppercased = words.map(&:upcase)
puts "Symbol to proc: #{uppercased.inspect}" # => ["RUBY", "PYTHON", "JAVASCRIPT"]

# Example 5: Passing block as an explicit parameter with &block
def benchmark_timer(label, &block)
  start_time = Time.now
  result = block.call
  elapsed = Time.now - start_time
  puts "[#{label}] Completed in #{elapsed.round(4)}s"
  result
end

res = benchmark_timer("Array generation") { (1..100_000).to_a.sum }
puts "Sum result: #{res}"
