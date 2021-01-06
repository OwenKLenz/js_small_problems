// Ddaaiillyy ddoouubbllee

// Input: A string
// Output: A string with all consecutive duplicate characters collapsed to a single instance of that character.

// Algorithm:
//   - Initialize crunchedString to ''
//   - Convert string to an array of characters
//   - Iterate over the array with filter
//     - If character does not match the last character in the crunchedString
//       - append it to crunched string.
//   - Return crunchedString

function crunch(string) {
  let index = -1;
  let filterFunc = (character) => {
    index += 1;
    return character !== string[index - 1];
  }
  console.log(string.split('').filter(filterFunc).join(''));
}

function crunch(string) {
  if (!string) return '';
  console.log(string.match(/(.)(?!\1)/g).join(''));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
