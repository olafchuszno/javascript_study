"use strict";

// Await holds the execution of code, until the promise resolves
async function init() {
  const start = Date.now();

  document.getElementById("output").innerHTML = `0: init()`;

  // with 'await' for the function returning a promise we hold up the code.
  // withOUT await for the function assignment, we are assigning the actual promise -
  //   we don't hold up the code.

  const userPromise = getUserData();
  const stringPromise = getWelcomeString();

  // here we don't hold up the code. We just await what the actual promise returns.
  const user = await userPromise;

  //   here we hold up the code
  // const user = await getUserData();

  document.getElementById("output").innerHTML += `<br> ${user.name} ${
    start - Date.now()
  }`;

  const string = await stringPromise;

  // const string = await getWelcomeString();

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
