// Letter Swap

// Split into words
// Map over words
  // Return last char + slice from 1 to -1 plus first char

function swap(string) {
  let startEndSwap = word => {
    if (word.length === 1) {
      return word;
    }

    return word[word.length - 1] + word.slice(1, -1) + word[0];
  }


  return string.split(' ').map(startEndSwap).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
