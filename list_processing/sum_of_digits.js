// Sum of Digits

"use strict";

function sum(number) {
  let digitArray = String(number).split('');
  return digitArray.reduce((sum, num) => parseInt(sum, 10) + parseInt(num, 10));
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
