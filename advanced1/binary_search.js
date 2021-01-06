// Binary Search

// Input: An array and a searchItem
// Output: The index at which the search item was found or -1 if it wasn't found.

// Rules:
//   - Examine the middle item
//   - If it is the searchItem, return that index
//   - If it's greater than the searchItem, repeat the process on the bottom half of the array of items
//   - If it's less than the serachItem, repeat the process on the top half
//   - Return -1 if you don't find the item
//   - The array will always be sorted
//   - I'm guessing the items will always be the same type (otherwise it's hard to perform the comparison)

// Data Structure:
//   - An array that keeps getting halved

// Questions:
//   - Can input array contain mixed types? (guessing no)
//   - Can an array of sorted arrays be passed in? (Need to handle separately, comparing each individual element in the sub array to determine >, < or ==).

// Algorithm:
//   - If the array is empty, return -1
//   - Find the middle element index
//     - array length / 2 rounded down ( could also be array length / 2 - 1)
//     - Array of length 10 gets index 5, array of length 9 gets index 4
//   - Compare it to the searchElement
//   - If the middle element is equal, return the index
//   - If it's greater, call binarySearch on a slice of the array from 0 to middle element (non inclusive)
//   - If it's less, call binarySearch on a slice from middle element + 1 to the end of the array
//     - When calling binarySearch, Track the indexOffset 
//       - When examing the left half, index offset is 0 (or whatever its starting value was on this call to binarySearch
//       - When examining the right half, indexOffset should be the current indexOffset + middleIndex + 1

function binarySearch(array, searchItem, indexOffset = 0) {
  if (array.length === 0) {
    return - 1;
  }

  let middleIndex = Math.floor(array.length / 2);
  if (array[middleIndex] === searchItem) {
    return middleIndex + indexOffset;
  }

  return array[middleIndex] > searchItem ? 
    binarySearch(array.slice(0, middleIndex), searchItem, indexOffset) :
    binarySearch(array.slice(middleIndex + 1), searchItem, indexOffset + 1 + middleIndex);
}


// Test Cases:
const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6
  
