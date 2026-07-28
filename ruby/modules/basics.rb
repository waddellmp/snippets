# Ruby Modules and Mixins
#
# Example 1: Methods defined in modules are by default instance methods.
# 
# Example 2: Module methods are defined using the self keyword, and act as singleton methods.
# 
# Example 3: The module_function makes a method both a private instance method and a module method.
#            - Can specify certain methods using symbols
#            - Can place module_function and all subsequent method definitions under it to make them module methods
# 
# Example 4: Use the include keyword in a class to mixin the module's methods.

module Greetable

  # Example 1
  def greet
    puts "Hello!"
  end

  # Example 2
  def self.to_s
    "Hello from the module!"
  end

  # Example 3
  module_function :count
end

class Person
  # Example 4
  include Greetable

  def person_count  
    puts "Person count method called!"

    # Calling the mixin's private instance method
    count
  end
end


person = Person.new
person.greet    # Instance method
person.person_count # Indirectly calling private instance method #count

Greetable.to_s # Module method
Greetable.count  # Module method
