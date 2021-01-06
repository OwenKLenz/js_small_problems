// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!

// Caesar Cipher Function
// Input: plaintext, key
// Output: Plaintext shifted by key
// Algorithm: Initialize a constant for the alphabet (Initialize to an array)
  //          - Initialize a local variable: outcome
  //             Set to an empty string
//            - Iterate through each character of plaintext
//              - Find the index of character within the alphabet array
//                - Add the key to the index (% 26): shiftedIndex
//              - Add the character at the index of shiftedIndex to the outcome string


function caesarCipher(plaintext, key) {
  let shiftedPlainText = '';
  for (let char of plaintext) {
      if ((/[a-z]/i).test(char)) {
            shiftedPlainText += shiftLetter(char, key);
          } else {
                shiftedPlainText += char;
              }
    }

  return shiftedPlainText;

  function shiftLetter(letter, key) {
      const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r' ,'s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      let shiftedIndex = ((ALPHABET.indexOf(letter.toLowerCase()) + key) % 26);
      let shiftedLetter = ALPHABET[shiftedIndex];
      if (letter === letter.toUpperCase()) {
            return shiftedLetter.toUpperCase();
          } else {
                return shiftedLetter;
              }
    }
}

function vigenere(string, keyword) {
  // Convert keyword into numbers to shift by
    // Initalize an array to []
    // iterate over letters (convert keyword to lowercase)
      // - convert letter to ascii character subtract 97 push value to array

  let keyValues = generateKeyValues(keyword);
  let encodedString = '';
  let keyValueIndex = 0;
  
  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
      console.log(keyValueIndex);
  
      if (keyValueIndex >= keyValues.length) {
            keyValueIndex = 0;
          }
      
      let currentChar = caesarCipher(string[stringIndex], keyValues[keyValueIndex]);
      encodedString += currentChar;
  
      if ((/[a-z]/i).test(string[stringIndex])) {
            keyValueIndex++; ;
          }
    }

  return encodedString;

  function generateKeyValues(keyword) {
      let keyValueArray = [];
      keyword = keyword.toLowerCase();
  
      for (let i = 0; i < keyword.length; i++) {
            let charNumber = keyword.charCodeAt(i) - 97;
            keyValueArray.push(charNumber);
          }
  
      return keyValueArray;
    }
}

console.log(vigenere('Kyle is cool?', 'abc')); // Kzne ju cpql?
console.log(vigenere('a?b?', 'bc')); // b?d?
console.log(vigenere("Pineapples don't go on pizzas!", 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!
// Bmnxmtpeqw dhz'x gh ar pbldal!

