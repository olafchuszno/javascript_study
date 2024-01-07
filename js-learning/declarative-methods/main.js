"use strict";

// What declarative means?
// We tell the compiler at runtime what we want the result to be
// e.g.
// filter items that contain the letter e

// for each item, id it has e keep it, else discard it

let fruit = ["Bananas", "Strawberry", "Orange", "Apple", "Grapes", "Plum"];

let fruitThatContainE = [];
fruit.forEach((fruit) => {
  if (fruit.contains("e")) {
    fruitThatContainE.push(fruit);
  }
});
