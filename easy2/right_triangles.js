// Right Triangles

// With loops:
//   Algorithm:
//     Init spaces to n - 1 and stars to 1
//     - Outer loop iterates n times (until stars === n);
//       - Init row to ''
//       - loop spaces times, append a space each time 
//       - loop stars times, append a star each time
//       - log row

function triangle(height) {
  for (let spaces = height - 1, stars = 1; stars <= height; stars++, spaces--) {
    let row = '';

    for (let spaceCount = 1; spaceCount <= spaces; spaceCount++) {
      row += ' ';
    }

    for (let starCount = 1; starCount <= stars; starCount++) {
      row += '*';
    }

    console.log(row);
  }
}

function triangle(height) {
  for (let count = 1, row = Array(height).fill(' '); count <= height; count++) {
    row[height - count] = '*';
    console.log(row.join(''));
  }
}

triangle(5);
triangle(7);
triangle(9);
triangle(4);
