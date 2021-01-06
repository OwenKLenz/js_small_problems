// Clean Up the Words

function cleanUp(string) {
  return string.replace(/\W+/g, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line " "
