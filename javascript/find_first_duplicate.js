function findFirstDuplicate(arr) {
  // type your code here
  const values = []

  for(const element of arr) {
    if (values.includes(element)) return element

    values.push(element)
  }

  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting 5");
  console.log("=>", findFirstDuplicate([2, 8, 5, 1, 5, 3, 2, 5]))

  console.log("Expecting 7");
  console.log("=>", findFirstDuplicate([2, 7, 4, 7, 8, 5, 1, 5, 3, 2, 5]))

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file

//Declare empty array
//Iterate over array
//Check if array contains value
// if so, return value
// if not, add value to array
//return -1 if no value is returned

// And a written explanation of your solution
