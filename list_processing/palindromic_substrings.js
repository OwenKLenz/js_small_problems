// Palindromic Substrings

function substrings(str) {
  return [...str.slice(0, str.length - 1)].flatMap((_, index1) => {
    return [...str.slice(index1 + 1)].map((_, index2) => {
      return str.slice(index1, index2 + index1 + 2);
    });
  });
}

function palindromes(string) { 
  return substrings(string).filter(isPalindrome);
}

let isPalindrome = (string) => string === [...string].reverse().join('');

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('Madam'));      // [ "ada" ]
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
