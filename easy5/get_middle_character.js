// Get the Middle Character

function centerOf(string) {
  // Capture round down from length / 2
  // slice from beginning to rounded value inclusive (+ 1)
  // return from original length rounded up - 1 to end of slice
  // '123456'
  // '1234'

  // '12345'
  // '123'

  const middleRoundedDown = Math.floor(string.length / 2);
  const middleRoundedUp = Math.ceil(string.length / 2);
  let frontHalf = string.slice(0, middleRoundedDown + 1);
  return frontHalf.slice(middleRoundedUp - 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x""
