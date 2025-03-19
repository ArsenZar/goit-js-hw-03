function slugify(title) {
  let newTitle = title.toLowerCase().split(" ").join("-");
  return newTitle;
}


console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

/*

--- practice

const planets = ["Earth", "Mars", "Venus"];

let i = 1;
    
for (const planet of planets) {
    console.log(i + " " + planet);

    i++;
}

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



