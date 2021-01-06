//Sum or Product of Consecutive Integers

let rlSync = require('readline-sync');
while (true) {
  var number = rlSync.question("Please enter an integer greater than 0: ");
  if (parseInt(number), 10) break;
  console.log("Please enter a valid integer");
}

let choice = rlSync.question("Enter \"s\" to compute the sum, or \"p\" to compute the product. ");

switch (choice) {
  case 's':
    let sum = 0;

    for (let value = 1; value <= parseInt(number, 10); value++) {
      sum += value;
    }

    console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
    break;
  case 'p':
    let product = 1;

    for (let value = 1; value <= parseInt(number, 10); value++) {
      product *= value;
    }

    console.log(`The product of the integers between 1 and ${number} is ${product}.`);
    break;
  default:
    console.log("Invalid Operation.")
}


