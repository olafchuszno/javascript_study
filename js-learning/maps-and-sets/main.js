"use strict";

const output = document.getElementById("output");

// Maps

// To initialize a map we instantiate it - new Map(). It classifies as an object
const fruit = new Map();

// Setting key-value pairs with a set() method
fruit.set(1, "Banana");
fruit.set(2, "Strawberry");
fruit.set(3, "Apple");

// To get the value by id we ues the get() method
console.log(fruit.get(1));

// To delete a pair we use the delete() method
fruit.delete(2);

// We can pair objects as well
fruit.set(4, {
  name: "olaf",
  email: "olaf@email.com",
  number: "123",
});

// Now we can read properties from the object
console.log(fruit.get(4).email);

// We can also assign functions as values

const users = new Map();

const userOlaf = {
  name: "olaf",
  email: "olaf@email.com",
};

// We fill the Map with users
users.set(userOlaf, function (user) {
  output.innerHTML += `name: ${user.name}, email: ${user.email}`;
});

users.set(
  {
    name: "zizi",
    email: "zizi@email.com",
  },
  function (user) {
    output.innerHTML += `email: ${user.email}, name: ${user.name}`;
  }
);

// Now we can iterate through the users map running the methods and
// passing in the assigned users
users.forEach((value, key) => {
  value(key);
});

// We can check whether a map has a certain key
const userOlafExists = users.has(userOlaf);

// However! If we set the actual object content in the map and then try to
//  use has() method to search for it we would get 'false', since it's not the same thing

console.log(userOlafExists);

// SETS

// They are similar to maps, but they Only contain values
// We also don't set(), we add() to a set(). Remember: Can't set.set(). We map.set() and set.add()

const fruitSet = new Set();

fruitSet.add("Banana");
fruitSet.add("Apple");
fruitSet.add("Strawberry");
// We can only each value ONE time in a set. Further adding will be ignored
fruitSet.add("siema");

fruitSet.forEach((fruit) => {
  output.innerHTML += "<br> Set -" + fruit;
});
