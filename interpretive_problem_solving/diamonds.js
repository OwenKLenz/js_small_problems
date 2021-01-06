// Diamonds

// Input: an integer, n (dimensions of the diamond)
// Output: a diamond of '*'s that is n high and n wide

// Rules:
//   - Argument will always be odd
//   - Argument will always be positive (I've decided)
//   - Diamond is comprised of star characters and spaces
//   - Rows of the diamond will be 1, 3, 5...n, n-2,... 3, 1 stars wide
//   - Rows will start with the number of spaces required to create the diamond shape

// Considerations
//   - More stars than the width of the monitor
//   - argument less than 0? Could use a guard clause

// Data Structure:
//   - Array of spaces (n spaces)
//   - A string created by joining the array elements

// Algorithm:
//   1.
//     - Initialize an array of n space characters
//     - Initialize a rowStart and rowEnd to n / 2 floored
//     - Initialize index incrementer to 1
//     - Initialize characterToAdd to '*'

//   2. Iterate n times
//     - Set the array elements at rowStart and rowEnd to the characterToAdd
//     - log the row after joining it
//     - If rowEnd is n - 1 and incremeter is 1
//       - incrementer = -1
//       - characterToAdd = ' '
//     - Otherwise
//       - increment rowStart by incrementer * -1
//       - increment the rowEnd by incrementer
//     - Repeat this process

function diamond(size) {
  let row = Array(size).fill(' ');
  let rowStart = Math.floor(size / 2);
  let rowEnd = rowStart;
  let incrementer = 1;
  let characterToAdd = '*';

  for (let i = 1; i <= size; i++) {
    row[rowStart] = characterToAdd;
    row[rowEnd] = characterToAdd;
    console.log(row.join(''));
    
    if (rowEnd === size - 1 && incrementer === 1) {
      incrementer = -1;
      characterToAdd = ' ';
    } else {
      rowStart += incrementer * -1;
      rowEnd += incrementer;
    }
  }
}

diamond(2);
// // logs
// *
  diamond(3);
// logs
 // *
// ***
 // *
  diamond(9);
// // logs
  //   *
  //  ***
  // *****
 // *******
// *********
 // *******
  // *****
  //  ***
  //   *

// Further Exploration: Hollow Diamonds

// Algorithm:
//   - After printing the current diamond but before incrementing the rowStart/End:
//     - Set the current rowStart/Ends to ' ';

function diamond(size) {
  let row = Array(size).fill(' ');
  let rowStart = Math.floor(size / 2);
  let rowEnd = rowStart;
  let incrementer = 1;
  let characterToAdd = '*';

  for (let i = 1; i <= size; i++) {
    row[rowStart] = characterToAdd;
    row[rowEnd] = characterToAdd;

    console.log(row.join(''));

    row = Array(size).fill(' ');

    if (rowEnd === size - 1 && incrementer === 1) {
      incrementer = -1;
      characterToAdd = '*';
    } 

    rowStart += incrementer * -1;
    rowEnd += incrementer;
  }
}

diamond(5);
