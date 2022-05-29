// Function Expressions
let sum = function (a, b) {
  return a + b;
};
console.log(sum(100, 10));

let multiply = function (a, b, c) {
  return a * b * c;
};
console.log(multiply(2, 20, 10));

let handler = function () {
  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);
};
let timer = setInterval(handler, 1000);

