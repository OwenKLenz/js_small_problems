// When Will I Retire?

// Prompt user for age
// Prompt user for retirement age
// acquire currrent year
// add the difference between age and retirement age to the current your to log appropriate message

let age = parseInt(prompt("What is your age? "), 10);
let retirementAge = parseInt(prompt("At what age would you like to retire? "), 10);
let difference = retirementAge - age;
let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + difference}.`);
console.log(`You have only ${difference} years to go!`);;

