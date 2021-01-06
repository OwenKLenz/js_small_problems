// What Century is That?

// Century number is determined by the characters from index 0 to -3 with 1 added.

// Suffix rules:
  // - If century number ends with 11-13
  //   - suffix is 'th'
  // - Otherwise, if it ends with 1
  //   - suffix is 'st'
  // - 2
  //   - suffix is 'nd'
  // - 3
  //   - suffix 'rd'
  // - else
  //   - suffix is 'th'

// 1. Capture century number
//   - Convert number to string
//   - slice from 0 to length - 2
// 2. Filter through suffix tree to determine suffix
// 3. Put suffix and century number together.

function century(year) {
  let centuryNumber = fetchCenturyNumber(year);
  let prefix = fetchPrefix(centuryNumber);
  
  console.log(centuryNumber + prefix);
}

function fetchCenturyNumber(year) {
  let yearString = String(year - 1);
  let num = yearString.slice(0, yearString.length - 2);
  return String(Number(num) + 1);
}

function fetchPrefix(digits) {
  let lastTwoDigits = digits.substring(digits.length - 2) || digits[0];
  let lastDigit = lastTwoDigits[1] || digits[0];

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return 'th';
  } else if (lastDigit === '1') {
    return 'st';
  } else if (lastDigit === '2') {
    return 'nd';
  } else if (lastDigit === '3') {
    return 'rd';
  } else if (lastDigit === '1') {
    return 'st';
  } else {
    return 'th';
  }
}


century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
