#!/usr/bin/env ruby
# Ruby Object-Oriented Programming: Classes, Inheritance, and Method Lookup
# Covers attributes, initialization, inheritance, super, and method lookup paths.

class Service
  attr_reader :name, :status

  def initialize(name)
    @name = name
    @status = :stopped
  end

  def start
    @status = :running
    "Service #{@name} started."
  end

  def stop
    @status = :stopped
    "Service #{@name} stopped."
  end

  # Class method using self
  def self.environment
    ENV.fetch("RACK_ENV", "development")
  end
end

class DatabaseService < Service
  attr_reader :port

  def initialize(name, port = 5432)
    super(name) # Calls parent Service#initialize(@name)
    @port = port
  end

  # Overriding method with super
  def start
    parent_msg = super
    "#{parent_msg} Listening on port #{@port}."
  end
end

db = DatabaseService.new("PostgresCluster", 5433)
puts db.start
puts "Status: #{db.status}"
puts "Ancestors: #{DatabaseService.ancestors.inspect}"
