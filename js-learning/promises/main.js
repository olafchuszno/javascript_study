"use strict";

// Promise is used to continue on with the execution of the code while this processes

// resolve - we return the promise back with an ALL CLEAR

// reject - something failed inside the promised and is throwing an exception back

let myPromise = new Promise((resolve, reject) => {
  // call an api
  let user = {
    name: "Olaf",
    email: "olaf@email.com",
  };

  let rejectionMessage = "Sorry, could not retrieve the user";

  setTimeout(() => {
    // The promise is resolved, passing in the user object
    // resolve(user);
    reject(rejectionMessage);
  }, 2000);
});

const getAdditionalUserData = (user) => {
  document.getElementById("output").innerHTML = user.name;

  return new Promise((resolve, reject) => {
    // calling an api

    user.favoriteColor = "red";
    user.currentDrink = "water";

    setTimeout(() => {
      resolve(additionalData);
    }, 2000);
  });
};

// Then happens - after the promise is resolved
myPromise.then(getAdditionalUserData).catch((siema) => {
  document.getElementById("output").innerHTML = siema;
});

document.getElementById("output").innerHTML = "this goes first!";
