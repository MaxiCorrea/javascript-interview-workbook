// Function as Object
function myFunction() {
  console.log("I am function object");
}

console.log(typeof myFunction);
console.log(myFunction.name);
console.log(myFunction.arguments);
console.log(myFunction.length);
// Number of arguments passed to function
console.log(myFunction.prototype);

// Parameters
const sayHello = (personName) => console.log(`Hello ${personName}`);
sayHello("Maximiliano Correa");
sayHello();

const sum = (a, b, c) => a + b + c;
console.log(sum(2, 3, 4));

// Arguments Parameters
function game  (a ,b ,c)  {
  console.log("Arguments " + arguments.length);
}
game();
game(1,3,4);