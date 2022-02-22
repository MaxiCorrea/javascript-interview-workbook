// Object literal Syntax

let user = {
  id: 1,
  name: "Maximiliano",
  lastName: "Correa",
  toString: function () {
    console.log("toString method");
  },
};

console.log(user);
console.log(user.id);
console.log(user.name);
console.log(user.lastName);
user.toString();

console.log(user.hasOwnProperty("id"));
console.log(user.hasOwnProperty("surname"));
console.log(user.hasOwnProperty("name"));

user.caca = "Esto es una mierda!";
console.log(user);


// Object Constructor

// Assign() Method

// ES6 Classes
