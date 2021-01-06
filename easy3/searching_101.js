// Searching 101

function oneInRest(...numbers) {
  let last = numbers.splice(numbers.length - 1, 1)[0];
  let  appearanceStr = numbers.some( num => num === last) ? " appears" : " does not appear in";
  console.log(`The number ${last + appearanceStr} in [${numbers.join(', ')}]`);
}


let numbers = [];

const numberStrings = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
for (let index = 0; index < numberStrings.length; index++) {
  numbers.push(prompt(`Enter the ${numberStrings[index]} number: `));
}

oneInRest(...numbers);
