// Letter Counter Part 2

function wordSizes(string) {
  let sizeTracker = {};

  if (string.length > 0) {
    string.split(' ').forEach( word => {
      cleanWord = word.replace(/\W/g, '');
      sizeTracker[cleanWord.length] = sizeTracker[cleanWord.length] + 1 || 1;
    });
  }

  return sizeTracker;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));
