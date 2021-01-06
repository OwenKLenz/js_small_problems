// Transpose 3 X 3

// Input: A matrix (2d array)
// Output: A new matrix with rows and columns transposed

// Rules:
//   - The argument is always a 3x3 matrix
//   - Transpose:
//     - The first row contains the contents of the first column, the 2nd row contains the 2nd column and so on.
//   - The returned array must be a new object (no mutating the argument)

// Data Structures:
//   - 2d arrays

// Algorithm:
//   1. Create a new 3 by 3 matrix - [[],[],[]]
//   2. For each column number, iterate across the rows and grab the element at that [row][column]
//     - Nested for loops
//     - oldMatrix[0][0] > newMatrix[0][0], oldMatrix[1][0] > newMatrix[0][1], etc.
//   3. push the column number to the appropriate element in the new matrix where the subarray is the current column value of the original array (old column becomes new row)

function transpose(matrix) {
  let newMatrix = matrix[0].map(_ => []); 

  for (let column = 0; column < matrix[0].length; column++) {
    for (let row = 0; row < matrix.length; row++) {
      newMatrix[column].push(matrix[row][column]);
    }
  }

  return newMatrix;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

// Test Cases:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const differentTypeMatrix = [
  ['a', 1, []],
  [{}, [], false],
  ['cheese', 1.23, new Date()]
];

newDifferentTypeMatrix = transpose(differentTypeMatrix);
console.log(newDifferentTypeMatrix);
// [['a', {}, 'cheese'], [1, [], 1.23], [[], false, DateObject]]
