// Inventory Item Availability

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(transaction => transaction.id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  let itemTransactions = transactionsFor(inventoryItem, transactions);

  return itemTransactions.reduce((amount, {id, movement, quantity}) => {
    switch (movement) {
      case 'out':
        return amount - quantity;
      case 'in':
        return amount + quantity;
      default:
          throw new Error(`Invalid movement: ${movement}`);
    }
  }, 0) > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 105, movement: 'Gin',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
