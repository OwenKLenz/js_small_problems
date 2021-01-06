// Triangle Sides

// Input: 3 Numbers representing the lengths of the sides of a triangle.
// Output: A string name of the type of triangle the passed in sides represent, or "invalid"

// Rules:
//   - Valid triangles must:
//     - Have all 3 sides greater than 0
//     - The sum of the two smaller sides must be greater than the longer side (ordering matters: maybe sort?)
//     Equilateral: All 3 side lengths are equal
//     Scalene: All sides are different lengths
//     Isoceles: 2 sides are equal
//     - Float lengths are valid

// Questions:
//   - Can there be issues when comparing float length sides? (compare lengths by converting them to strings?)
//   - Negative lengths?

// Data structure:
//   - An array containing the side lengths.
//     - Allows for sorting

// Algorithm:
//   1. Sort the sides by length
//     - Capture in an array (rest syntax)
//     - Sort by number value

//   2. If the first of the sorted lengths (smallest) is 0, it's Invalid

//   3. if the first two sides (sorted) sum to <= the last side it's invalid
//     array[0] + array[1] <= array[2]

//   Equilateral:
//     - If all 3 sides have the same length return "Equilateral"
//       - Capture the first value and iterate over the remaining 2 returning false if any aren't equal
  
//   Scalene:
//     - If all sides are different lengths return "Scalene"
//       - Capture first value and iterate over remaining and return false if any ARE equal

//   Isoceles:
//     - Otherwise its "Isoceles"

function triangle(...sides) {
  sides.sort((a, b) => a - b);

  if (invalid()) {
    return "invalid";
  } else if (equilateral()) {
    return "equilateral";
  } else if (isoceles()) {
    return "isoceles";
  } else {
    return "scalene";
  }

  function invalid() {
    return sides[1] === 0 || sides[0] + sides[1] <= sides[2];
  }

  function equilateral() {
    return sides[0] === sides[1] && sides[1] === sides[2];
  }

  function isoceles() {
    return sides[0] === sides[1] || sides[1] === sides[2]
  }
}
// Test Cases:
  console.log(triangle(3, 3, 3));        // "equilateral"
  console.log(triangle(3, 3, 1.5));      // "isosceles"
  console.log(triangle(3, 4, 5));        // "scalene"
  console.log(triangle(0, 3, 3));        // "invalid"
  console.log(triangle(3, 1, 1));        // "invalid"
