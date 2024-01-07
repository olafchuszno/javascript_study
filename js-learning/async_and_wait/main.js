"use strict";

// Await holds the execution of code, until the promise resolves
async function init() {
  const start = Date.now();

  document.getElementById("output").innerHTML = `0: init()`;

  const user = await getUserData();
  document.getElementById("output").innerHTML += `<br> ${user.name} ${
    start - Date.now()
  }`;

  const string = await getWelcomeString();
  document.getElementById("output").innerHTML += `<br> ${string} ${
    start - Date.now()
  }`;
}

function getUserData() {
  return new Promise((resolve, reject) => {
    let user = {
      name: "Olaf",
      email: "olaf@email.com",
    };
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
}

function getWelcomeString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Welcome!");
    }, 2000);
  });
}

init();
