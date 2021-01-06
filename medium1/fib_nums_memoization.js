// Fibonacci Sequence Memoization


function fibonacci(n) {
  let memo = [0, 1, 1];

  return (function () {
    let result = memo[n] || 
      (memo[n - 2] || fibonacci(n - 2)) + (memo[n - 1] || fibonacci(n - 1));

    if (!memo[n]) {
      memo.push(result);
    }

    return result;
  })();
}

console.log(fibonacci(6));
