def find_first_duplicate(arr)
  # type your code in here
  duplicate = []

  arr.each do |value|
    return value if duplicate.include?(value)

    duplicate.push(value)
  end

  -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts "Expecting 5"
  puts "=>", find_first_duplicate([2, 8, 5, 1, 5, 3, 2, 5])

  puts "Expecting 7"
  puts "=>", find_first_duplicate([2, 7, 4, 7, 8, 5, 1, 5, 3, 2, 5])

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
