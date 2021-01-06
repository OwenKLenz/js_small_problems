// Letter Counter Part 1

function wordSizes(string) {
  let sizeTracker = {};

  if (string.length > 0) {
    string.split(' ').forEach( word => {
      sizeTracker[word.length] = sizeTracker[word.length] + 1 || 1;
    });
  }

  return sizeTracker;
}



console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
