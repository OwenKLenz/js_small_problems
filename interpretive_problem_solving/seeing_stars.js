// Seeing Stars

// leftSpaces + star + middleSpaces + star + middleSpaces + star
// leftSpaces INIT to 0
// middleSpaces to (size - 3) / 2

// Top:
//   (size - 1) / 2
//   On each iteration create a new array element of the above string
//   On each iteration increment leftSpaces by 1, decrement middleSpaces by 1

// Middle:
//   middle equals size stars

// Bottom
// bottom equals top reversed

function star(size) {
  let top = [];

  for (let leftSpaces = 0, middleSpaces = (size - 3) / 2;
       leftSpaces < (size - 1) / 2;
       leftSpaces++, middleSpaces -= 1)
  {
    top.push(' '.repeat(leftSpaces) +'*' + 
             ' '.repeat(middleSpaces) + '*' +
             ' '.repeat(middleSpaces) + '*');
  }

  let middle = '*'.repeat(size);
  let bottom = [...top].reverse();

  top.concat(middle, bottom).flat().forEach(row => console.log(row));
}

star(3);
star(5);
star(7);
star(9);
// star(59);
