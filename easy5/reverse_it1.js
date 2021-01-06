// Reverse It Part 1

const reverseSentence = function (string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

// The buggy solution shown splits and joins using an empty string delimiter. This will split the string into an array of characters, reverse them and then rejoin them. This reverses the order of letters, not words.
