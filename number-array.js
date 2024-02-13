function findDuplicates(nums) {
    const numCount = {};
    const duplicates = [];
  
    for (const num of nums) {
      // If the number is already in the hash map, it's a duplicate
      if (numCount[num]) {
        duplicates.push(num);
      } else {
        // Otherwise, add it to the hash map
        numCount[num] = 1;
      }
    }
    return duplicates;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 2, 7, 8, 5, 9];
  const duplicates = findDuplicates(numbers);
  console.log("Duplicate numbers: ", duplicates);

//=====

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findDuplicates(nums) {
  const numCount = {};
  const duplicates = [];

  for (const num of nums) {
    if (numCount[num]) {
      duplicates.push(num);
    } else {
      numCount[num] = 1;
    }
  }

  return duplicates;
}

// Take user input for numbers
rl.question("Enter numbers separated by commas: ", (inputNumbers) => {
  rl.close();

  const numbers = inputNumbers.split(",").map(num => parseInt(num.trim(), 10));

  // Check if valid numbers are entered
  if (numbers.some(isNaN)) {
    console.error("Invalid input. Please enter valid numbers.");
  } else {
    const duplicates = findDuplicates(numbers);
    if (duplicates.length > 0) {
      console.log("Duplicate numbers: ", duplicates);
    } else {
      console.log("No duplicates found.");
    }
  }
});
  