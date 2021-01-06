// Madlibs Revisited

// Input: A madlibs template
// Output: The template with random words of appropriate type (verb, noun, etc.) filled in to the blanks

// Rules:
//   - Take a "text template" as input
//     - Template:
//       - ["some text", 0, "more text", 2, ...] where the numbers represent the index of the words to select from
//       - A string with some sort of marker :noun:, :verb:, etc. in the appropriate places
//       - Use replace with a callback to capture the markers and replace with a randomly selected word based on the type of marker found.
//   - Add a randomly selected word of the appropriate type in to each blank in the template
//     - Words:
//       - Nouns
//       - Verbs
//       - Adverbs
//       - Adjectives
//   - Output the template

// Data Structure:
//   - Object of word types as keys and an array of words to select from randomly
//   - A string template with markers in the format ':wordType:' where wordType is one of noun, verb, etc.

// Algorithm:
//   - Create a dictionary object of words arranged by type, stored in arrays
//   - Replace the markers in the string each with a randomly select word from the dictionary
//     - Random selection:
//       - Math.random to generate a random decimal number, multiply it by the length of the array for that word type to get an index
//     - For each word type token:
//       - Replace that word type token with a randomly selected word from dictionary with the token used as a key

function madlibs(template) {
  const dictionary = {
    adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
  }
  
  return template.replace(/:[a-z]+:/gi, match => '"' + selectRandomWord(match) + '"');

  function selectRandomWord(token) {
    let cleanedToken = token.slice(1, token.length - 1).toLowerCase();
    let randomIndex = Math.round(Math.random() * (dictionary[cleanedToken].length - 1));
    return dictionary[cleanedToken][randomIndex];
  }

}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

let template1 = "The :adjectives: brown :nouns: :adverbs: :verbs: the :adjectives: yellow :nouns: who :adverbs: :verbs: his :nouns: and looks around."
let template2 = "I like :NOUNS:s. The :NOUNS: :ADVERBS: :VERBS: a :NOUNS:."

console.log(madlibs(template1));
console.log(madlibs(template2));
// The "sleepy" brown "cat" "nojisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".'
