// All Substrings

function substrings(str) {
  return [...str].map((_, index1) => {
    return [...str.slice(index1)].map((_, index2) => {
      return str.slice(index1, index2 + index1 + 1);
    });
  }).flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
