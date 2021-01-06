// Grade Book

function getGrade(grade1, grade2, grade3) { 
  let average = (grade1 + grade2 + grade3) / 3;
  
  if (average >= 90) {
    console.log('A');
  } else if (average >= 80) {
    console.log('B')
  } else if (average >= 70) {
    console.log('C');
  } else if (average >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
