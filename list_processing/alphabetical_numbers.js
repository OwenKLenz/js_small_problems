// Alphabetical Numbers

function alphabeticNumberSort(array) {
  const firstUniqueSubStrings = [ 'z', 'o', 'tw', 'thr', 'four', 'fiv',
                                 'six', 'seven', 'eight', 'nine', 'te',
                                 'el', 'twe', 'thi', 'fourt', 'fif',
                                 'sixt', 'sevent', 'eighte', 'ninet'
                                ]

  return array.sort((number1, number2) => {
    if (number1 === number2) {
      return 0;
    };

    return firstUniqueSubStrings[number1] > firstUniqueSubStrings[number2] ? 1 : -1;
  });
}
console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
