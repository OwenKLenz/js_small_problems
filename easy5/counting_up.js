// Counting Up

function sequence(number) {
  let arr = [];

  for (let count = 1; count <= number; count++) {
    arr.push(count)
  }

  return arr;
}

function sequence2(number) {
  return Object.keys([...''.padStart(number + 1, ' ')]).slice(1).map(Number);
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
