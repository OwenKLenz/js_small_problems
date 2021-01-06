// Word to Digit

function wordToDigit(text) {
  const WORD_TO_NUMBER = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const MATCH_NUMBERS = /\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/ig;
  return text.replace(MATCH_NUMBERS, match => WORD_TO_NUMBER.indexOf(match.toLowerCase()));
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('ONE tWo three')); // 1 2 3
console.log(wordToDigit('Tony the Tiger says "They\'re GRRRRRRRREIGHT! eight"'));

