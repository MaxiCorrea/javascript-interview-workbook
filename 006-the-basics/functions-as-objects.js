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
function game(a, b, c) {
  console.log("Arguments " + arguments.length);
}
game();
game(1, 3, 4);

// Exercises

function isOdd(x) {
  return x % 2 !== 0;
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));
console.log(isOdd(4));

function isPrime(x) {
    for( let y = 1 ; y < x ; ++y) 
      if(x % 2 === 0) return false;
    return true;  
}
console.log();

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));