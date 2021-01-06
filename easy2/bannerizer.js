// Bannerizer

// Get the lineLength of the string
// generate a topAndBottom string of lineLength "-"s with "+-" appended and prepeneded.
// Append and prepend a "| " to the string
// Generate a padding string equal to lineLength " "s with "| " appended and prepended.

function logInBox(string) {
  let lineLength = string.length;
  let topBottom = "+-" + '-'.repeat(lineLength) + "-+";
  let padding = "| " + '_'.repeat(lineLength) + " | ";
  let body = "| " + string + " |";

  [topBottom, padding, body, padding, topBottom, ].forEach((el) => console.log(el));
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

// Further Exploration

// Tracking line length:
//   - Target line length is 80 characters
  
//   - Initialize lines to empty array
//   - Initilialize currentLineLength to 0
//   - Initialize currentLine to ''

//   Generating all lines <= 80 chars in length
//   - Split string into words
//   - Iterate over words:
//     - If currentLineLength + word.length is greater than 80,
//       - append current line to line array
//       - Reset line length to current word length 
//       - reset currentLine to current word
//     - If currentLineLength + word.length + 1 (for a space) is less than or equal to 80:
//       - Append current word to current line + ' ',
//       - Increment currentLIneLength by word.length

//   - Output top of box
//   - Iterate over lines and output line + sides
//   - Output bottom of box

function logInBox(string) {
  const LINE_LENGTH = 80;
  const topBottom = "+-" + '-'.repeat(LINE_LENGTH) + "-+";
  const emptyLine = "| " + ' '.repeat(LINE_LENGTH) + " | ";

  let lines = [];
  let currentLine = '';


  string.split(' ').forEach(generateLines);

  console.log(topBottom);
  console.log(emptyLine);

  lines.forEach(printLine);

  console.log(emptyLine);
  console.log(topBottom);

  function generateLines(word) {
    if (currentLine.length + word.length + 1 > LINE_LENGTH) {
      lines.push(currentLine + endOfLinePadding());
      currentLine = word + ' ';
    } else {
      currentLine += word + ' ';
    }
  }

  function endOfLinePadding() {
    return ' '.repeat(LINE_LENGTH - currentLine.length);
  }

  function printLine(line) {
    console.log('| ' + line + ' |');
  }
}

logInBox("To simplify matters, the solution starts out by creating two (2) variables and a helper function: horizontalRule, emptyLine, and repeatChar(). horizontalRule and emptyLine are strings that are used multiple times for creating the banner. The repeatChar function, on the other hand, adds the appropriate count of hyphens (-) and spaces () for the banner. The count is the same for both spaces and hyphens: the length of the message plus 2. The extra spaces, one on each side of emptyLine and the message line, act as padding between the left and right sides of the banner.");
