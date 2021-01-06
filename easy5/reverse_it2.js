// Reverse It Part 2

const reverseWords = function (words){
  let reversedArray =  words.split(' ').map((word) => {
     return word.length > 4 ? word.split('').reverse().join('') : word;
   });

  return reversedArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
