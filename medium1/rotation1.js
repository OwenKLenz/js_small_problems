// Rotation Part 1

// Input: An array (if not an array, return undefined in a guard clause)
// Output: A new array with the first element moved to the end
//         Or undefined if argument isn't an array

// Rules:
//   - Pass in an array
//   - Verify that it is an array and return undefined if it isn't
//   - Create a new array whose elements match the argument array
//   - Move the first element of the new array to the end and then return new array
//   - Empty array returns []
//   - Returned array should be a different array from the argument array
//   - If array.length is 1, the returned should have the "same element in the same order"
//   - Array values can be of different types

// Data Structures:
//   - A new array that contains the elements of the argument array

// Algorithm:
//   - Guard clause: Return undefined if argument isn't an array or argument is an empty array

//   1. Create a copy of the array argument
        // - Make use of spread syntax to generate a new array of old array's elements
//   2. Shift 1st element off of new array and push it onto the end

//   3. Return the new array

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }


  let newArray = [...array];

  if (array.length > 0) {
    newArray.push(newArray.shift());
  }

  return newArray;
}

// Test Cases:
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
console.log(rotateArray({})); // undefined


// // the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
