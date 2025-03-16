function createArrayOfNumbers(min, max) {
  let minMaxArray = [];
  for (let i = min; i <= max; i++){
    minMaxArray.push(i);
  }
  return minMaxArray;
}


/*

--- practice

const tags = [];

for(let i = 0; i < 3; i += 1) {
	tags.push(`tag-${i+1}`);
}

console.log(tags); // ["tag-0", "tag-1", "tag-2"]

--- practice

function getLastElementMeta(array) {
    let newArray = [];
  return newArray = [array.length-1, array[array.length-1]];
}

function getExtremeElements(array) {
  let newArray = [array[0], array[array.length-1]];
  return newArray;
}


console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

--- practice

function getLastElementMeta(array) {
    let newArray = [];
  return newArray = [array.length-1, array[array.length-1]];
}

console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

*/



