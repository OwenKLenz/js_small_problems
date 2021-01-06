// Combine Two Lists

"use strict";

function interleave(array1, array2) {
  let interLeavedArray = [];

  for (let index = 0; index < array1.length; index++) {
    interLeavedArray.push(array1[index], array2[index]);
  }

  return interLeavedArray;
}

function interleave(array1, array2) {
  return array1.reduce(((accumArray, element, index) => [...accumArray, element, array2[index]]), []);
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
