// Object Literal Syntax

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

// Object Literal Enhancement

let role = "Developer";
let employed = false;
let vacation = "89";
let message = function () {
  console.log(`${role} position has ${vacation} days of vacations`);
};

let employee = {
  role,
  employed,
  vacation,
  message,
};

console.log(employee);
employee.message();

// Object Literal Dinamic Keys [ES6]

let num1 = 10;
let num2 = 20;
let num3 = 30;

let numObject = {
  [num1 + 1]: num1,
  [num2 + 1]: num2,
  [num3 + 1]: num3,
};

console.log(numObject);

// Object Constructor

let customer = new Object();
customer.name = "Maximiliano";
customer.salary = 1000.0;
console.log(customer);

// Object Constructor Function

function Dessert(name, calories, flavor, helpings) {
  this.name = name;
  this.calories = calories;
  this.flavor = flavor;
  this.helpings = helpings;

  this.totalCall = function () {
    console.log(`totals ${this.flavor * this.helpings}.`);
  };
}

let dessert = new Dessert("LALALA", 30, 10, 4);
console.log(dessert);
dessert.totalCall();

// Object.create Method
let parentObj = {
  descent: "Scottish descent",
  diabetes: false,
};

let childObj = Object.create(parentObj, {});
console.log(childObj);

// Assign() Method

let sourceObj1 = {
  id_1: 1,
};

let sourceObj2 = {
  id_2: 2,
};

let sourceObj3 = {
  id_3: 3,
};

let targetObj = Object.assign({}, sourceObj1, sourceObj2, sourceObj3);
console.log(targetObj);

// ES6 Classes
