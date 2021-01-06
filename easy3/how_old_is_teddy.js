// Calculate the difference between the min and max
// Add the result of the difference multipled by a random number (Math.random())
// Interpolate that value into the string.

function generateRandomAgeBetween(min = 20, max = 200) {
  let difference = max - min;
  let age = min + (Math.floor(Math.random() * difference));
  return age;
}

for (let i = 0; i < 5; i++) {
  console.log(`Teddy is ${generateRandomAgeBetween()} years old!`);
}

// Further Exploration
// If `round` or `ceiling` were used, 200 would still be the highest possible value (`Math.random()` returns 1, 1 * 180 is 180 rounding 180 results in 180.

// Add this to make the function more robust:

if (min > max) {
  [min, max] = [max, min];
}
