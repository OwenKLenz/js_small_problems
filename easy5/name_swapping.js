// Name Swapping

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

function swapNames(name) {
  let namesArray = name.split(' ');
  let lastName = namesArray.pop();
  lastName += ',';
  namesArray.unshift(lastName);
  return namesArray.join(' ');
}

console.log(swapNames('Joe Joe Roberts'));
console.log(swapNames('Billy Jean Roberts'));
console.log(swapNames('Johnny Joe Jameson Jefferson Roberts'));
