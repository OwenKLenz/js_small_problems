// Stack Machine Interpretation

// Input: A string of operations to be performed
// Output: The value of the "register" each time a PRINT command is reached (assuming a print is included in the list of operations)

// Definitions:
//   - Register: A stand along value that stores the current "working" number
//   - The stack: An array of values, the last of which will be popped off and used in the next operation
//     - ie: ADD pops off the last value and adds it ot the register value
//   - A Program: A string of numbers and tokens that contains the program instructions

// Rules:
//   - Register is initialized to 0
//   - Each time a number is reached, place it in the register (overwrites the current value)
//   - PUSH pushes the current register number to the stack but doesn't remove it from the register
//   - POP removes the last value from the array and places it in the register (overwriting current register value)
//   - Any mathematical operations are performed by popping the last value from the stack and adding it to operating with it and the current Register value
//   - Division is integer division
//   - Programs don't contain invalid tokens or operations

// Data Structure:
//   - An array to store stack values

// Algorithm:
//   - Initialize register to 0
//   - Split the program into numbers and tokens
//   - Iterate over the program elements
//   - If an element is a number, set the register to that number
//   - Otherwise, switch statement
//     - When PRINT
//       - log the current register value
//     - When PUSH
//       - push the current register value to the end of the stack
//     - When POP
//       - pop the last value off of the stack and set the register to it
//     - For each operation, Pop the current value off the stack and perform that operation on the popped value and the register value. Store the result in the register
//       - ie: register = 3, popped value is 4 operation is DIV, set register to integer division of register / popped value

'use strict';

function minilang(program) {
  let register = 0;
  let stack = [];
  program.split(' ').forEach(processToken);

  function processToken(token) {
    switch (token) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'ADD':
        register = register += stack.pop();
        break;
      case 'SUB':
        register = register -= stack.pop();
        break;
      case 'MULT':
        register = register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register /= stack.pop());
        break;
      case 'MOD':
        register = register %= stack.pop();
        break;
      default:
        register = Number.parseInt(token, 10);
    }
  }
}
  

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
