function slugify(title) {
  let newTitle = title.toLowerCase().split(" ").join("-");
  return newTitle;
}


console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


/* practice-5 */
/* this example shows how to get keys and values from an object if we don`t know the keys and values */
/* 
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment){
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);
*/

/* practice-4 */
/*
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
*/
/*
--- practice

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

console.log(book);
console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]



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



