"use strict";
const output = document.getElementById("output");

// What declarative means?
// We tell the compiler at runtime what we want the result to be
// e.g.
// filter items that contain the letter e

// for each item, id it has e keep it, else discard it

let fruit = ["Bananas", "Strawberry", "Orange", "Apple", "Grapes", "Plum"];

let fruitThatContainE = [];

// To check whether  string contains a character, use .includes() method
// fruit.forEach(function (fruit) {
//   if (fruit.includes("e")) {
//     fruitThatContainE.push(fruit);
//   }
// });

// We can achieve the same result by filtering with .filter() on a list

fruitThatContainE = fruit.filter((f) => f.includes("e"));

// To print out the array content we can use .join() method with a separator as the argument
output.innerHTML = fruitThatContainE.join(", ");

let users = [
  {
    name: "olaf",
    email: "olaf@email.com",
    stars: 5,
  },
  {
    name: "zizi",
    email: "zizi@email.com",
    stars: 9,
  },
  {
    name: "meme",
    email: "meme@email.com",
    stars: 1,
  },
];

// Reduce method gives us basically a loop with a counter variable
// which we can manipulate. The second value is a default for the accumulator.counter
let totalStars = users.reduce((stars, user) => (stars += user.stars), 0);

output.innerHTML += "<br>" + totalStars;

//  MAPS

// Loops over items in the array.
// It expects an inline, anonymous function
let userEmails = users.map((user) => user.email);

output.innerHTML = "<br>" + userEmails.join(", ");
