// How Many

function countOccurrences(array) {
  return array.reduce(((object, currentElement) => {
    if (object[currentElement]) {
      object[currentElement] += 1;
    } else {
      object[currentElement] = 1;
    }

    return object;
  }), {})
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));
