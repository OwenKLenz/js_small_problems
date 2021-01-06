// Double Char Part 1

function repeater(string) {
  return [...string].reduce(((doubledStr, char) => doubledStr + char + char), '');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
