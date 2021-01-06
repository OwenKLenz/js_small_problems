// Palindromic Strings Part 1
function isPalindrome(string) {
  return string === Array.from(string).reverse().join('');
}

console.log(isPalindrome('madam'));
