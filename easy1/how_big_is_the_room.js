// How Big is the Room

const rlSync = require('readline-sync');
const SQFEET_PER_SQMETER = 10.7639;

function metersToFeet(numMeters) {
  return numMeters * SQFEET_PER_SQMETER;
}

function feetToMeters(numFeet) {
  return numFeet / SQFEET_PER_SQMETER;
}

  var units = 
    rlSync.question("Will the measurements be in feet or meters? ",
                    {limit: ['feet', 'meters'], caseSensitive: true});

let length = rlSync.question(`Enter the length of the room in ${units}: `,
                             {limit: [/\d/]});
let width= rlSync.question(`Enter the width of the room in ${units}: `,
                           {limit: [/\d/]});
let area = length * width;

switch (units) {
  case 'feet':
    console.log(
      `The area of the room is ${area.toFixed(2)} square feet (${feetToMeters(area).toFixed(2)} square meters).`
    );
    break;
  case 'meters':
    console.log(
      `The area of the room is ${area.toFixed(2)} square meters (${metersToFeet(area).toFixed(2)} square feet).`
    );
    break;
}
