// Multiples of 3 and 5

function multisum(number) {
  const pattern = [2, 1, 3, 1, 2, 3, 3];
  let sum = 0;

  for (let index = 0, currentVal = 3; currentVal <= number; index++) {
    if (index === pattern.length) {
      index = 0;
    }

    sum += currentVal;
    currentVal += pattern[index];
  }

  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
multisum(1000000000);    // 234168
