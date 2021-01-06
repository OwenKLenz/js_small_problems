// Multiply Lists

function multiplyList(...arrays) {
  let products = [];

  for (let index = 0; index < arrays[0].length; index++) {
    let product = 1;

    for (let subArrayIndex = 0; subArrayIndex < arrays.length; subArrayIndex++) {
      product *= arrays[subArrayIndex][index];
    }

    products.push(product);
  }

  return products;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
