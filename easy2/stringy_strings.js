// Stringy Strings

function stringy(num) {
  let stringyString = '';
  for (let count = 0, toggle = 1; count < num; count++) {
    stringyString += toggle;
    toggle = Number(!toggle);
  }

  console.log(stringyString)
}

function stringy(num) {
  let stringyString = '1'.repeat(Math.ceil(num / 2)).split('').join('0');
  if (num % 2 === 0) {
    console.log(stringyString + '0');
  } else {
    console.log(stringyString);
  }
}

'1'.repeat

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
