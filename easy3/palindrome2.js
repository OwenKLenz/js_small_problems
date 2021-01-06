// Palindromic Strings Part 2
function isPalindrome(string) {
  return string === Array.from(string).reverse().join('');
}

function isRealPalindrome(string) {
  // Case insensitive. Ignore non letter characters.
  // Convert string to lowercase
  // regex to grab letters
  // Pass result to isPalindrome
  let letterOnlyString = (string.toLowerCase().match(/\w+/g)).join('');
  return isPalindrome(letterOnlyString);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
