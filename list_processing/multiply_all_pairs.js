// Multiply All Pairs

function multiplyAllPairs(array1, array2) {
  let products = [];
  
  for (let index1 = 0; index1 < array1.length; index1++) {
    let value1 = array1[index1];

    for (let index2 = 0; index2 < array2.length; index2++) {
      products.push(value1 * array2[index2]);
    }
  }

  return products.sort((num1, num2) => num1 - num2);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
