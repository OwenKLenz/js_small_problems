// Fibonacci Numbers (Recursion)

// Input: a number (n) the fibonacci number that should be returned
// Output: a Number, the nth fibonacci number

// Rules:
//   - fib(1) is 1
//   - fib(2) is 1
//   - fib(n) where n > 2 is fib(n - 1) + fib(n - 2)
//   - Use recursion to find the fib number

// Questions:
//   - fib(0)?
//   - Are negative arguments possible?

// Data Structures:
//   - One solution might involve an array of fibonacci number.
//   - Otherwise, just Numbers

// Algorithm:
//   - if n is 1, return 1
//   - if n is 2, return 1
//   - otherwise return fib(n - 1) + fib(n - 2)

function fibonacci(n) {
  if (n <= 3) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci(n, currentN = 1, n1 = 0, n2 = 1) {
  if (currentN === n) {
    return n2;
  }

  return fibonacci(n, currentN + 1, n2, n1 + n2);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(75));      // 6765

