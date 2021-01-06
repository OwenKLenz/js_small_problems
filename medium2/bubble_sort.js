// Bubble Sort

// Input: An array of 2 or more elements
// Output: The same array with its elements sorted

// Rules:
//   - The same array should be returned (after mutating it as needed to sort it).
//   - Compare each pair of indexes, if the left number is greater than the right number, swap them.
//   - We're done sorting when we make a pass with no swaps
//   - Arrays will have at least 2 elements

// Questions:
//   - Different typed elements?
//     - Assume yes

// Data Structure:
//   - Array

// Algorithm:
//   - Iterate across the array from 0 to array.length - 2, not inclusive
//     - Initialize an variable swapped to false;
//     - Compare each pair of consecutive elements (index 0 to index 1, index 1 to index 2, index 2 to index 3, etc.) 
         // - Iterate from index 0 to index length - 2 so that we never reach out of bounds.
//       - If the lower index is greater than the higher index, swap the values
//       - Set the swapped variable to true
//     - At the end, if we haven't swapped, we're done.

function bubbleSort(array) {
  while (true) {
    let swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }

    if (!swapped) {
      return array
    }
  }
}
// Test Cases:
const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
