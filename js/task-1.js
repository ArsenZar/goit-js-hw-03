const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]



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



