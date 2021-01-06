// Sum Square - Square Sum

// Input: A number
// Output: A number (the difference between the square of sums and the sum of squares)

// Rules:
//   - Sum of squares:
//     - Square each number in a range
//     - Add the squares together

//   - Square of sums:
//     - Add together all the numbers in a range
//     - Square it

//   - Range:
//     - All the numbers from 1 to number, inclusive

//   - Find the difference between the square of sums and the sum of squares (SOSums - SOSquares)
//   - Result should always be >= 0

// Questions:
//   - Can you get a 0 input?

// Data Structures:
//   - An array of digits that can be reduced appropriately for SOSums and SOSquares

// Algorithm:
//   2 Options:

//   1. 
//     - Generate an array of all the digits in the range
//        - Iterate from 1 to number, inclusive, appending each number to a rangeArray 

//     - Reduce it down to a sum and a sum of squares. 
//       - 2 callback functions
//         1. Sum values
//         2. square values and then sum them

//     - Subtract the sum of squares from the sum, squared.

//   2. 
//     - declare a sumOfSquares variable and a squareOfSums variable intialized to 0
//     - Iterate from 1 up to number
//       - For each count, add number to squareOfSums and number**2 to sumOfSquares
//     - Subtract and return appropriately


// Option 1
function sumSquareDifference(number) {
  let range = [];

  for (let counter = 1; counter <= number; counter++) {
    range.push(counter);
  }

  let sumOfSquares = range.reduce(((acc, currentNum) => acc + currentNum ** 2), 0);
  let squareOfSums = range.reduce((acc, currentNum) => acc + currentNum) ** 2;

  return squareOfSums - sumOfSquares;
}

// Option 2
function sumSquareDifference(number) { 
  let sumOfSquares = 0;
  let sum = 0;

  for (let counter = 1; counter <= number; counter++) {
    sumOfSquares += counter ** 2;
    sum += counter;
  }

  return sum ** 2 - sumOfSquares;
}

// Test Cases:
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
