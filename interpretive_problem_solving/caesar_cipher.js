// Caesar Cipher

// Encryption:

// Input: A string (the unencrypted message) and a number, the key / number of characters forward that each character should be shifted.
// Output: An encrypted string with all characters shifted accordingly

// Rules:
//   - Take in a string of only letters. Can be both upper and lower case
//   - Shift each letter forward through the alphabet by key letters
//     - ie: if key is 1, 'abc' becomes 'bcd'
//     -     if key is 3, 'abc' becomes 'def'
//   - The case of each letter should be preserved

// Considerations:
//   - What if the key is greater than 26?

// Data Structure:
//   - An array of letters stored at their appropriate indexes (index 0 is empty)

// Test Cases:
console.log(encrypt('abc', 3)); // 'def'
console.log(encrypt('The quick brown fox jumps over the lazy dog!', 5)); //  "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"
console.log(encrypt('abc', 0)); // 'abc'
console.log(encrypt('abc', 26)); // 'abc'
console.log(encrypt('', 12)); // ''
console.log(encrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
console.log(encrypt('There are, as you can see, many punctuations. Right?; Wrong?', 28));

// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// Algorithm:
//   - Create an array of all alphabet characters at their appropriate index
//   - Initialize an empty string
//   - Iterate over the characters in the message
//     - Find the indexOf the current character and add the key to that character
//     - find the remainder when divided by 26
//     - Append the character at the remainder index in the alpha character array to the empty string

function encrypt(message, key) {
  const ALPHABET = [
                      undefined, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                      'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                      'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                      'y', 'z'
                    ];

  let encryptedMessage = '';

  for (let i = 0; i < message.length; i++) {
    let currentChar = message[i];
    if (/[a-z]/i.test(currentChar)) {
      let isUpperCase = /[A-Z]/.test(currentChar);
      let encryptedChar = encryptCharacter(currentChar.toLowerCase(), key);
      encryptedMessage += isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
    } else {
      encryptedMessage += currentChar;
    }
  }

  return encryptedMessage;

  function encryptCharacter(letter, key) {
    let charNum = ALPHABET.indexOf(letter);
    let newCharNum = (charNum + key - 1) % 26 + 1;
    return ALPHABET[newCharNum];
  }
}

