// Merge Sort

function mergeSort(array) {
  return merge(...array.map(el => [el]));
}

function merge(...arrays) {
  let sortedReturnArray = [];
  let arrayData = arrays.map(array => ({ array, currentIndex: 0 }));
  let currentSmallestObject;

  while (arrayData.some(arrayDatum => arrayDatum.currentIndex < arrayDatum.array.length)) {
    currentSmallestObject = arrayData[0];
  
    for (let i = 1; i < arrayData.length; i++) {
      if (newElementIsSmaller(i) || endOfArrayReached()) {
          currentSmallestObject = arrayData[i];
      }
    }
  
    sortedReturnArray.push(currentSmallestObject.array[currentSmallestObject.currentIndex]);
    currentSmallestObject.currentIndex += 1;
  } 

  return sortedReturnArray;

  function newElementIsSmaller(index) {
    return arrayData[index].array[arrayData[index].currentIndex] < 
      currentSmallestObject.array[currentSmallestObject.currentIndex];
  }

  function endOfArrayReached() {
    return currentSmallestObject.currentIndex === currentSmallestObject.array.length;
  }
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
