// Multiplicative Average
function showMultiplicativeAverage(array) {
  let product = array.reduce(((accumulator, number) => accumulator * number), 1);
  let average = product / array.length;
  let roundedAverage = average.toFixed(3);
  return String(roundedAverage, 10);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
