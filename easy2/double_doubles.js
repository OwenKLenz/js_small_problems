// Double Doubles

// General case (non-double number):

// Input: A number
// Output: The number multipled by two or the number if  it's first String(first_half) === String(second_half)


function twice(number) {
  return doubleNumber(number) ? number : number * 2;
}

function doubleNumber(number) {
  let numArray = String(number).split('');
  let firstHalf = numArray.splice(0, numArray.length / 2);
  return firstHalf.toString() === numArray.toString();
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
