// Fibonacci Number Location by Length

// Algorithm:
//   - Initalize n1 to 1 and n2 to 1
//   - initialize index to 1
//   - while length of n2 is < length argument:
//     - set temp variable to n2, n2 to n1 + n2 and n1 to temp
  
//   - return index

// Recursive Solution:
  // Break condition: n2 length is fibLength;
  // call function with n2 and n1 + n2 as arguments
  // default values for n1 and n2 are 1

function findFibonacciIndexByLength(fibLength) {
  let n1 = 1;
  let n2 = 1;
  let index = 2;

  while (String(n2).length < fibLength) {
    let temp = n2;
    n2 = n2 + n1;
    n1 = temp;
    index += 1;
  }

  return index;
}

function findFibonacciIndexByLengthRecursive(fibLength, n1 = 1, n2 = 1) {
  if (String(n2).length === fibLength) {
    return 2;
  } 

  return 1 + findFibonacciIndexByLengthRecursive(fibLength, n2, n1 + n2);
}

// console.log(findFibonacciIndexByLength(2));       // 7
// console.log(findFibonacciIndexByLength(10));      // 45
// console.log(findFibonacciIndexByLength(16));      // 74
// console.log(findFibonacciIndexByLength(24));      // 74

console.log(findFibonacciIndexByLengthRecursive(2));       // 7
console.log(findFibonacciIndexByLengthRecursive(10));      // 45
console.log(findFibonacciIndexByLengthRecursive(16));      // 45
console.log(findFibonacciIndexByLengthRecursive(25));      // 74
