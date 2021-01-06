// Merge Sorted Lists

// Input: Some number (2) of sorted arrays
// Output: A single array containing the elements of the input arrays in sorted order

// Rules:
//   - Dont use the Array.prototype.sort method
//   - I'm going to assume that the types will match to avoid having to deal with JS type coersion rules when performing comparisons
//   - Do not mutate the inputs
//   - Input arrays can be of different lengths

// Questions:
//   - Empty arrays? (if one is empty, it gets ignored. If both are empty, an empty array is returned)
//   - Elements of different types?
//   - String comparison? dealing with different cases?
//   - Array comparison, needs to examine the individual elements of each subarray

// Data Structure:
//   - Arrays
//   - An object for each array
//     - Object contains currentIndex and the array
//     [ {array: [1, 1 ,3], currentIndex: 2}, {array: [2, 2], currentIndex: 1}  ]

// Algorithm:
//   1. Create a new empty array
//   2. map over the input arrays and create an object for each with array: and currentIndex: 0 properties
  
//   3. Repeatedly iterate over all objects until the currentIndex of all objects is equal to the length of the array
//     - On each pass over the objects:
//       - capture the first object's index as the "currentSmallestObject"
//       - As we iterate, if we find an object whose value at its own currentIndex is less thatn the value of the currentSmallestObject, set the currentSmallestObject to the current Object's index.
//         - If currentIndex is out of bounds, skip that object
//       - After completing a pass, we've found the smallest object
//       - push the element at the smallest object's currentIndex to the return array and increment that object's currentIndex

//   4. Return the return array

function merge(...arrays) {
  let sortedReturnArray = [];
  let arrayData = arrays.map(array => ({ array, currentIndex: 0 }));
  let currentSmallestObject;

  while (arrayData.some(arrayDatum => arrayDatum.currentIndex < arrayDatum.array.length)) {
    currentSmallestObject = arrayData[0];

    for (let i = 1; i < arrayData.length; i++) {
      if (newElementIsSmaller(i) || endOfArrayReached()) {
        currentSmallestObject = arrayData[i];
      }
    }

    sortedReturnArray.push(currentSmallestObject.array[currentSmallestObject.currentIndex]);
    currentSmallestObject.currentIndex += 1;
  } 

  return sortedReturnArray;

  function newElementIsSmaller(index) {
    return arrayData[index].array[arrayData[index].currentIndex] < 
      currentSmallestObject.array[currentSmallestObject.currentIndex];
  }

  function endOfArrayReached() {
    return currentSmallestObject.currentIndex === currentSmallestObject.array.length;
  }
}
// Test Cases:
console.log(merge([3, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

// // More than 2 inputs:
console.log(merge([1, 2, 4], [3, 5], [9, 10, 22, 40])); // [1, 2, 3, 4, 5, 9, 10, 22, 40]
