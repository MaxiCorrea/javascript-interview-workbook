// Function as Object
function myFunction () {
    console.log("I am function object");
}

console.log( typeof myFunction);
console.log(myFunction.name);
console.log(myFunction.arguments);
console.log(myFunction.length);
// Number of arguments passed to function
console.log(myFunction.prototype)

// Parameters
const sayHello = personName =>  console.log(`${personName}`);
sayHello("Maximiliano Correa");
