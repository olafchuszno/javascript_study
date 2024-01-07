"use strict";

import { users, currentUser } from "./users.js";
import helper from "./helper.js";

document.getElementById("output").innerHTML = users[currentUser].email;

const fruit = ["apple", "banana", "strawberry"];

// get all the emails
let userEmails = users.map((user) => user.email);

let capitalUserEmails = helper(userEmails).join(", ");

document.getElementById("output").innerHTML += "<br>" + capitalUserEmails;
