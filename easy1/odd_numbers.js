// Odd Numbers

for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

// Or...

let num = 1;

while (num < 100) {
  console.log(num);
  num += 2;
}

// Further Exploration:

let outputOdds = function (start = 1, end = 100) {
  if (start % 2 === 0) {
    start += 1;
  }

  for (; start < end; start += 2) {
    console.log(start);
  }
}

outputOdds(1, 10);
outputOdds(2, 10);
