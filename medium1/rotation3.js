// Rotation Part 3

// Input: An integer
// Output: The integers Maximum Rotation

// Rules:
//   Maximum rotation:
//     - Starting from the leftmost digit, rotate the digits from that digit to the end by 1 place
//     - repeat from the 2nd to leftmost digit
//     - etc. until you've done the digit at index - 2
//     - ie: 1234 > 2341 > 2413 > 2431
//   - Take in an Integer
//   - Rotate according to the maximum rotation process from index 0 to index length - 2 inclusive
//   - If number is 1 digit, the number shouldn't change

// Considerations:
//   - single digit arguments
//   - negative numbers? (To account for them, remove the - sign and add it back at the end (after rotating))
//   - Floats?
//   - Leading zero gets dropped (should happen naturally when converting back to string)

// Data Structures:
//   - Array of digits

// Algorithm:
//   - Convert numbers to an array
//     - Convert to string and split to characters
//   - Iterate over the indexes of the array up to the 2nd to last index inclusive (no need to rotate the last number by itself)
//   - Pass The array and current index (as the shiftNumber) to rotateRightmostDigits
//     - Mutates array on each iteration
//   - After iterating, rejoin array elements and convert back to a number


  
function maxRotation(number) {
  let digitArray = String(number).split('');
  let digitArrayLength = digitArray.length;

  for (let i = 0; i <= digitArrayLength - 2; i++) {
    digitArray = rotateRightmostDigits(digitArray, i);
  }

  return Number.parseInt(digitArray.join(''), 10);
}

function rotateRightmostDigits(digitArray, shiftNumber) {
  return digitArray.concat(digitArray.splice(shiftNumber, 1));
}

console.log(maxRotation(1234));          // 2431
console.log(maxRotation(735291));          // 352917 329175 321759 321597 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
