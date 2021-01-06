// Rotating Matrices

// Input: A matrix
// Output: A new matrix consisting of the input matrixes values, but rotated

// Rules:
//   - Rotation:
//     - A 90 degree, clockwise turn of the matrix
//     - The effect is that the reversed columns of the original matrix as read from left to right, become the new rows of the rotated matrix
//   - Don't mutate original, return a new matrix instead


// Algorithm:
//   - Transpose the original matrix and then reverse its rows

function rotate90(matrix) {
  return transpose(matrix).map(row => row.reverse());
}

function transpose(matrix) {
  let newMatrix = matrix[0].map(_ => []); 

  for (let column = 0; column < matrix[0].length; column++) {
    for (let row = 0; row < matrix.length; row++) {
      newMatrix[column].push(matrix[row][column]);
    }
  }

  return newMatrix;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
