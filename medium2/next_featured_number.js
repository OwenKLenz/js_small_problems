// Next Featured Number Higher than a Given Value

// Input: A Number
// Output: A Number (the first "featured number" that is greater than the input Number)

// Rules:
//   - Find the next number greater than the argument number that is a "featured number"
//   - Featured Number:
//     - Evenly divisible by 7
//     - Odd
//     - All digits are unique
//   - Convert number to an array of characters
//   - Create a new set of the characters
//   - Check if array length is equal to set length
//     -   `Set.prototype.size`
//     - Issue an error if there is no next featured number (max is 9876543201)
//   - If argument is a featured number, find the NEXT featured number

// Data Structure:
//   - One approach: Find all featured numbers, store them in an array and iterate across until you find a featured number larger than the argument
//   - Numbers for incrementing by some value

// Questions:
//   - Can there be negative featured numbers? (is -21 a featured number?)
//   - Can there be negative arguments?

// Algorithm:
//   1. Increment from current number + 1 until number is odd and divisible by 7
//   2. Once you find that number, check if it's featured
//     - If so, return it
//     - Otherwise, increment by 14s until you find a featured number
  
function featured(number) {
  const MAX_NUMBER = 9876543200;

  if (number > 9876543200) {
    throw "No larger featured numbers exist.";
  }

  do {
    number += 1;
  } while (number % 7 !== 0 || number % 2 === 0);

  while (!uniqueDigits(number)) {
    number += 14; 
  }

  return number;

  function uniqueDigits(number) {
    let digits = [...String(number)];
    let uniqueDigits = new Set(digits);

    return digits.length === uniqueDigits.size;
  }
}


// Test Cases:
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987

// One less than largest possible featured number
console.log(featured(9876543200)); // 9876543201

// Too large. Throws an error.
console.log(featured(10000000000));
