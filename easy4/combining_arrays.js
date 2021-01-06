// Combining Arrays

const union2 = function joinArrays(array1, array2) {
  let joinedArray = [...array1];

  for (let value of array2) {
    if (joinedArray.includes(value)) continue;
    joinedArray.push(value);
  } 

  return joinedArray;
}


function union(array1, array2) { 
  let valuesToKeys = [...array1, ...array2].reduce(numbersToIndexes, []);
  let uniqueValues = Object.keys(valuesToKeys);
  return uniqueValues.map(strNum => Number.parseInt(strNum, 10));
}

let numbersToIndexes = function (array, index) {
  array[index] = true;
  return array;
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

let now = new Date();
for (let i = 0; i < 100000; i++) {
  union2([9, 2, 2, 9, 3, 4], [1, 2, 9, 4, 3]);
}
console.log(`That took ${new Date() - now} milliseconds`);

now = new Date();
for (let i = 0; i < 100000; i++) {
  union([9, 2, 2, 9, 3, 4], [1, 2, 9, 4, 3]);
}
console.log(`That took ${new Date() - now} milliseconds`);


