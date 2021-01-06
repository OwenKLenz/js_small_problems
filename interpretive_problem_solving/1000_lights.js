// 1000 Lights

// Input: an integer (the number of light switches)
// Output: An array the "on" lights after n "passes"

// Rules:
//   Iterate over the switches n times
//   On each pass, toggle every nth switch

// Considerations:
//   - n = 0? return empty array?
//   - Dealing with zero index when toggling every nth switch
//     - ie: (2nd pass, toggle switches at index 1, 3, etc.)

// Data Structures:
//   - array of switches with boolean values at each index

// Algorithm:
//   - Create an array of n elements, all initialized to false
//   - iterate n times (1...n)
//     - iterate with a counter, starting at n, incrementing by n
//     - At each count, toggle the switch at that index

//   - Filter for the "on" elements

function lightsOn(switches) {
  let switchArray = Array(switches).fill(false);
  
  for (let n = 1; n <= switches; n++) {
    for (let counter = n - 1; counter < switches; counter += n) {
      switchArray[counter] = !switchArray[counter];
    }
  }

  let onSwitches = [];

  for (let index in switchArray) {
    if (switchArray[index]) {
      onSwitches.push(Number(index) + 1);
    }
  }

  return onSwitches;
}

function lightsOn(switches) {
  let onSwitches = [];

  for (let count = 1; count ** 2 <= switches; count++) {
    onSwitches.push(count ** 2);
  }

  return onSwitches;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(16));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(17));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(26));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(25));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
