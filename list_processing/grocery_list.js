// Grocery List

function buyFruit(list) {
  let fruitBasket = [];

  list.forEach(addNFruits);

  return fruitBasket;

  function addNFruits([fruit, number]) {
    fruitBasket.length = fruitBasket.length + number;
    fruitBasket.fill(fruit, fruitBasket.length - number);
  }
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
