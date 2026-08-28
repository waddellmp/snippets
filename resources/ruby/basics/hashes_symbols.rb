#!/usr/bin/env ruby
# Ruby Hashes, Symbols, and Keyword Arguments
# Demonstrates modern hash manipulation and symbol usage in Ruby.

# Example 1: Default hash values
word_frequency = Hash.new(0)
%w[cat dog cat bird cat dog].each { |animal| word_frequency[animal] += 1 }
puts "Frequencies: #{word_frequency.inspect}" # => {"cat"=>3, "dog"=>2, "bird"=>1}

# Example 2: Deep nested extraction with dig
user = {
  profile: {
    address: {
      city: "Austin",
      zip: "78701"
    }
  }
}
puts "City: #{user.dig(:profile, :address, :city)}"       # => "Austin"
puts "Missing: #{user.dig(:profile, :contact, :phone)}"   # => nil (safe navigation)

# Example 3: Transform keys and values
raw_data = { "name" => "alice", "age" => "30" }
symbolized = raw_data.transform_keys(&:to_sym)
transformed_vals = symbolized.transform_values(&:upcase)
puts "Symbolized keys: #{symbolized.inspect}"
puts "Transformed values: #{transformed_vals.inspect}"

# Example 4: Slicing and Fetching
config = { host: "localhost", port: 5432, db: "production", timeout: 30 }
connection_only = config.slice(:host, :port, :db)
port = config.fetch(:port, 5432)
puts "Sliced: #{connection_only.inspect}, Port: #{port}"

# Example 5: Keyword Arguments with Defaults
def build_query(table:, limit: 10, offset: 0, order_by: :id)
  "SELECT * FROM #{table} ORDER BY #{order_by} LIMIT #{limit} OFFSET #{offset};"
end

sql = build_query(table: "users", limit: 25, order_by: "created_at DESC")
puts "Generated SQL: #{sql}"
