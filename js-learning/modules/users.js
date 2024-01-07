const users = [
  {
    name: "olaf",
    email: "olaf@email.com",
  },
  {
    name: "zizi",
    email: "zizi@email.com",
  },
  {
    name: "momo",
    email: "momo@email.com",
  },
];

let currentUser = 2;

// Contains a file that we expose to the module system - those we want to import later
export { users, currentUser };

// For modules to work REMEMBER to set the type="module" on the script tag in the dom
// Otherwise you'll get "Cannot use import statement outside a module"
