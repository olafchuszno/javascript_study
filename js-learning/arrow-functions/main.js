"use strict";

// const username = {
//   name: "olaf",
//   email: "olaf@email.com",
// };

// username.name = "Piotr";

// const setString = (email, name) => `${email} (${name})`;

// document.getElementById("output").innerHTML = setString(
//   username.email,
//   username.name
// );

let users = [
  {
    name: "olaf",
    email: "olaf@email.com",
  },
  {
    name: "zizi",
    email: "zizi@email.com",
  },
];

let names = [];

users.forEach((user) => names.push(user.name));

document.getElementById("btn").addEventListener("click", (e) => {
  const getDetails = () => {
    console.log(e.currentTarget);
  };

  getDetails();
});
