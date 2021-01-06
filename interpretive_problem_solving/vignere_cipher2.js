// Vignere Cipher

'use strict';

// Input:
//   - Plaintext: A string of unencrypted characters (letters and other types)
//   - A keyword: A string of 1 or more letters that determine a pattern of shifts that get applied to each letter in the plaintext.

// Rules:
//   - A keyword defines a sequence of "shifts" that should be applied to some plaintext
//     - "shift":  a number of characters that a letter should be cycled through the alphabet to encrypt it
//   - Cycle through the characters of the plaintext while cycling over the keywords shifts (looping back to the beginning as needed)
//   - For each character, apply the appropriate shift
//   - Store the shifted character in a new string
//   - Return the final encrypted string
//   - If a character isn't a letter, don't move on to the next keyword value
//     - ie: plaintext: 'ab c' keyword: 'ab' encrypted text: 'bd d' 
//       -> the keyword shift "a" gets applied to 'a' in the plaintext, "b" is applied to "b", nothing is applied to the space and then we cycle to beginning of keyword and 'a' gets applied to 'c'
//   - Cipher shifts are zero indexed
//     - Iow: a shift of "a" results in the character staying the same
  
// Considerations:
//   - single letter keywords should function like the Caesar cipher
//   - Assume no empty string keywords
//   - Case should be preserved
//   - Again: non-letters remain unecrypted, and cycling through the keyword shouldn't occur

// // Test Cases:
// // Simple Case:
//   vigenereCipher('aaa', 'abc'); // 'abc'
// // Plaintext longer than keyword
//   vigenereCipher('aaaa', 'abc'); // 'abca'
// // A is a shift of 0:
//   vigenereCipher('aaa', 'aaa'); // 'aaa'
// // Wrapping around alphabet
//   vigenereCipher('abc', 'xyz'); // 'xzb'
// // Non-letter characters are preserved and don't progress through the keyword:
//   vigenereCipher('a-b c!', 'abc'); // 'a-c e!'
// // Case is preserved:
//   vigenereCipher('AaA', 'abc'); // 'AbC'
// // A single letter keyword functions like the Caesar Cipher:
//   vigenereCipher('aaa', 'z'); // 'zzz'

// Data Structures:
//   - String of alphabet characters for determining letter values (by index)
//   - A string that gets built up with encrypted characters as we work through the plaintext

// Algorithm:
//   1. Initialize alphabet to 'abcdefghijklmnopqrstvwxyz'
//      Initialize encrypted string to ''
//      Initialize a currentShift value to 0

//   2. Convert keyword to an array of numeric shifts
//     - Map over the letters in the keyword (split them to array)
//     - return a new array of the indexOf that letter in the alphabet string
//     - This new array represents the sequence of shifts that should be applied

//   3. iterate over plaintext while also cycling through the keyword shifts
//     - Cycling:
//       - increment current shift value
//       - If currentShift is equal to the length of keywordShifts, reset it to 0
    
//     - Iterate with forEach
  
//   4. If current character is a letter, shift it by an amount equal to the current shift (retain case!)
//     - Create isUpperCase tracking variable
//     - Find the alphabet value of current char
//     - Add the current shift to that value
//     - Normalize it if its greater than 25
//     - % operator
//     - Cycle currentShift

//   5. If current character is not a letter don't shift it or cycle the current shift value
//     - If character doesn't match case insensitive character range regex

//   6. Append the encrypted (or not) character to the encrypted string

//   7. Return encrypted string

function vigenereCipher(plaintext, keyword) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let encryptedString = '';
  let currentShiftIndex = 0;
  const isAlphaChar = /[a-z]/i;
  const isUpperCase = /[A-Z]/;
  let encryptedChar;

  let shiftValues = keyword.split('').map(letter => ALPHABET.indexOf(letter));

  for (let i = 0; i < plaintext.length; i++) {
    let currentChar = plaintext[i];
    if (isAlphaChar.test(currentChar)) {
      encryptedChar = encryptChar(currentChar);
    } else {
      encryptedChar = currentChar;
    }

    encryptedString += encryptedChar;
  }

  return encryptedString;

  function encryptChar(character) {
    let uppercase = isUpperCase.test(character);
    let shiftedNumber = shiftValues[currentShiftIndex] + ALPHABET.indexOf(character.toLowerCase());
    let shiftedLetterIndex = shiftedNumber % 26;

    encryptedChar = ALPHABET[shiftedLetterIndex];

    if (uppercase) {
      encryptedChar = encryptedChar.toUpperCase();
    }

    cycleShiftValue();
    return encryptedChar;
  }

  function cycleShiftValue() {
    currentShiftIndex += 1;
    if (currentShiftIndex === keyword.length) {
      currentShiftIndex = 0;
    }
  } 
}

// Test Cases:
// Simple Case:
  console.log(vigenereCipher('aaa', 'abc')); // 'abc'
// Plaintext longer than keyword
  console.log(vigenereCipher('aaaa', 'abc')); // 'abca'
// A is a shift of 0:
  console.log(vigenereCipher('aaa', 'aaa')); // 'aaa'
// Wrapping around alphabet
  console.log(vigenereCipher('abc', 'xyz')); // 'xzb'
// Non-letter characters are preserved and don't progress through the keyword:
  console.log(vigenereCipher('a-b c!', 'abc')); // 'a-c e!'
// Case is preserved:
  console.log(vigenereCipher('AaA', 'abc')); // 'AbC'
// A single letter keyword functions like the Caesar Cipher:
  console.log(vigenereCipher('aaa', 'z')); // 'zzz'
