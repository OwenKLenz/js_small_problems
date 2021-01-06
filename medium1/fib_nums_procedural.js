// Fibonacci Numbers Procedural

// Input: A Number (the number of the fib sequence we're looking for)
// Output: A Number (the current fib number)

// Rules:
//   - fib(1) is 1 and fib(2) is 1
//   - Every successive fib number after 2 is the previous two fib numbers added together
//   - Solve it procedurally, with no recursion.

// Algorithm:
//   - if n is 1 or 2 return 1
//   - Initialize previousFibNumber to 1
//   - Initialize a currentFibNumber variable to 1
//   - Otherwise
//     - n - 2 times
//       - previous is current fib
//       - current fib Number is previous + current
//       - Array destructuring to reassign them otherwise a temp variable is needed
//   - return currentFibNumber

function fibonacci(n) {
  let previousFibNumber = 1;
  let currentFibNumber = 1;

  for (let count = 3; count <= n; count++) {
    [previousFibNumber, currentFibNumber] = [currentFibNumber, previousFibNumber + currentFibNumber];
  }

  return currentFibNumber;
}
console.log(fibonacci(4)); // 3
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
console.log(fibonacci(78));       // 2111485077978050
