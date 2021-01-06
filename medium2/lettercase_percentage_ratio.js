// Lettercase Percentage Ratio

// Input: A string of 1 or more characters (no empty strings)
// Output: An object with key-value pairs for uppercase, lowercase and nonletter character percentages

// Rules:
//   - Find the ratio of uppercase letters to total characters
//   - "" lowercase letters ""
//   - "" non letter characters ""
//   - Values in the object should be string percentages rounded to 2 decimal places (ie: "0.00" or "90.00")

// Data Structure:
//   - A string for regex matching
//   - An object with properties for lowercase, uppercase and neither

// Algorithm:
//   - Initialize empty object to {}
//   - Count the number of uppercase letters
//   - Count the number of lowercase letters
//   - Subtract the two from the length of the string to get "neither"
  
//   - Set the obj on uppercase, lowercase and neither to formatted, stringified:
//     - uppercase, lowercase and neither counts divided by argument string length
//     - Formatting:
//       - Perform division * 100
//       - use toFixed to convert number to a 2 decimal point result

function letterPercentages(string) {
  let stringLength = string.length;
  let upperCount = (string.match(/[A-Z]/g) || []).length;
  let lowerCount = (string.match(/[a-z]/g) || []).length;
  let neitherCount = stringLength - (upperCount + lowerCount); 

  let percentages = {
    lowercase: (lowerCount / stringLength * 100).toFixed(2),
    uppercase: (upperCount / stringLength * 100).toFixed(2),
    neither: (neitherCount / stringLength * 100).toFixed(2),
  };

  return percentages;
}

// Test Cases:
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages(' '));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
