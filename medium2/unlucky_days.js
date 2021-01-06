// Unlucky Days

// Input: A Number representing a year
// Output: A Number representing the number of Fridays that are the 13th day of the month

// Rules:
//   - Find the number of months that have a friday that is also the 13th day of that month
//     - Friday the 13ths can be either the 2nd or 3rd fridays of the month.

//   - Years will be 1752 or greater

// Questions:
//   - What happens in 1752?
//   - What about very large year numbers? (The year 1000000). How far into the future does the Date type support?

// Data Structures:
//   - A count of friday the 13ths, incremented as each is found

// Algorithm:
//   - Iterate over the months (0-11)
//     - For each month, create a new date object on the 13th of that month
//     - If that day is 4 (Friday in a zero indexed count of days of the week), increment fridayTheThirteenthsCount

//   - Return fridayTheThirteenthsCount

function fridayThe13ths(year) {
  let thirteenthsCount = 0;

  for (let month = 0; month < 12; month++) {
    if(new Date(year, month, 13).getDay() === 5) {
      thirteenthsCount += 1;
    }
  }

  return thirteenthsCount;
}

// Test Cases:
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

// 1753
console.log(fridayThe13ths(1753));
