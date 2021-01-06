// Double Char Part 2

const doubleConsonants = function (string) {
  return string.replace(/[bcdfghjklmnpqrstvwxyz]/ig, "$&$&");
}
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
