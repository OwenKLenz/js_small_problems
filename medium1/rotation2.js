/*
Rotation Part 2

Input: 
      - A number with 1 or more digits 
      - An (assumed) postitive integer value representing the digit number, counting from the left, that should be shifted to the end

Output: A Number with the appropriate digit having been shifted to the end

Rules:
  - Take in a number and a shiftNumber
  - Remove the digit shiftNumber digits from the right
  - Fill in the gap (everything slides left)
  - Place removed digit at the end
  - Return the number

Considerations:
  - Can the rotation number be larger than the number to be rotated? (In that case, number should be returned without change)
  - Floats? (Assume no, but if we were working with floats, would we rotate the decimal point or skip over it?)

Data Structure:
  - Array of digits (convert number to string, split to array of string digits)

Algorithm:
  1. Convert number to a string and split it into an array of digits

  2. Remove the digit at index length - shiftNumber and fill in the gap by shifting the digits to the right, left and append the removed digit to the end
    - Splice at the specified index, 1 digit and concat it to the end of the number 

  3. Join the array, convert to a number and return
*/

function rotateRightmostDigits(number, shiftNumber) {
  let digitArray = String(number).split('');

  let rotatedArray = digitArray.concat(
    digitArray.splice(digitArray.length - shiftNumber, 1)
  );

  return Number.parseInt(rotatedArray.join(''), 10);
}


// Test Cases:
console.log(rotateRightmostDigits(735291, 0));      // 735291
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// shiftNumber larger than number.length
console.log(rotateRightmostDigits(123, 5));      // 123

