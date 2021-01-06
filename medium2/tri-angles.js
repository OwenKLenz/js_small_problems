// Tri-Angles

// Input: 3 Numbers representing angles
// Output: A string indicating the type of triangle, or invalid if a triangle with those angles can't exist.

// Rules:
//   - Take in 3 angles and determine the type of triangle they represent
//     Types:
//       - Right: 1 angle is 90 degrees
//       - Acute: all angles are less than 90 degrees
//       - Obtuse: 1 angle is greater than 90 degrees
//       - Invalid
//   - Valid triangles:
//     - 3 angles all greater than 0
//     - Angles must sum to 180
//   - Angles will be whole numbers
//   - Angles will be in degrees

// Questions:
//   - Negative angles? Subtract from 360 - ie: -270, 45, 45 would be valid.
//   - Angles greater than 360? ie: 450, 45 and 45 would be valid.

// Data Structures:
//   - An array of angles for easy summing, mapping to values between 0 and 360, when needed

// Algorithm:
//   0. Normalize angles so negative angles or angles > 360 becomes "normal"
//     - Map over the angles. 
//     - If it's less than 0, add 360 until it's greater than 0
//     - either way, find the remainder when divided by 360

//   1. If any angle is 0 or the sum of the normalized angles is not 180 it's invalid
//     - if some of the angles are 0 or sum of the angles isn't 180...

//   2. If any angle is 90, it's "right
//     - Find the max angle
//     - If its 90, return "right"

//   3. If any angle is greater than 90, it's "obtuse"
//     - If the max angle is greater than 90, return obtuse

//   3. Otherwise it's "acute"

function triangle(...angles) {
  const DEGREES_IN_CIRCLE = 360;
  const DEGREES_IN_TRIANGLE = 180;

  normalizedAngles = normalizeAngles(angles);

  normalizedAngles.sort((a, b) => a - b);

  if (invalidAngles(normalizedAngles)) {
    return 'invalid';
  } else if (normalizedAngles[2] === 90) {
    return 'right';
  } else if (normalizedAngles[2] > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }

  function normalizeAngles(angles) {
    return angles.map(function (angle) {
      while (angle < 0) {
        angle += DEGREES_IN_CIRCLE;
      } 

      return angle % DEGREES_IN_CIRCLE;
    });
  }

  function invalidAngles(angles) {
    return angles[0] === 0 ||
    angles.reduce((acc, angle) => acc + angle) !== 180
  }
}

// Test Cases:
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(51, 50, 50));       // "invalid"
////Invalid negative angles
console.log(triangle(-50, 50, 50));       // "invalid"
// Greater than 360
console.log(triangle(480, 50, 10));      // "obtuse"

//// Valid Negative angles
console.log(triangle(-240, 50, 10));      // "obtuse"
console.log(triangle(-600, 50, 10));      // "obtuse"
