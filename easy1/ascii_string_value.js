// ASCII String Value

// Input: A string of 0 or more characters
// Output: An integer representing the sum of the ascii values of all the characters in the string.

// Algorithm:
//   - Split string into an array (split(''))
//   - Accumulator stores the sum of each character when calling `charCodeAt()`

function asciiValue(string) {
  return string.split('').reduce( (accumulator, character) => {
    return accumulator + character.charCodeAt();
  }, 0);
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0

