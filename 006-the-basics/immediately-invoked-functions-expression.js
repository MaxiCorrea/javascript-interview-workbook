//Immediately invoked function expressions (IIFE)
(function () {
  console.log("run immediately");
})();

// IIFE example
(function (a, b) {
  console.log(`${a} + ${b} is ${a + b}`);
})(50, 15);

// Exercises
let person = "Rena";
(function () {
  let person = "Robbie";
  console.log(person);
})();
console.log(person);

// Exercises
let x = 10;
(function (x) {
  x++;
  console.log(x);
})(x);
console.log(x);
