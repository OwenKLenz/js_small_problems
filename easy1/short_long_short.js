// Short Long Short

function shortLongShort(str1, str2) {
  return str1.length > str2.length ? str2 + str1 + str2 : str1 + str2 + str1;
}

function shortLongShort(str1, str2) {
  let sls_string = str1 + str2;
  if (str2.length > str1.length) {
    return sls_string + str1; 
  } else {
    return str2 + sls_string; 
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
console.log(shortLongShort('hello', 'goodbye'));         // "hellogoodbyehello"
