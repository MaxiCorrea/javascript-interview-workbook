// Prototype
let car = Object.create({ price: 300 });
console.log(Object.getPrototypeOf(car));
console.log(car);

let human = {
  name: "Max",
  surname: "Correa",
  age: 30,
};
console.log(Object.getPrototypeOf(human));
console.log(human);

let auto = {
  drive: true,
  wheels: 4,
  gears: "automatic",
};
let car2 = Object.create(auto);
console.log(Object.getPrototypeOf(car2));

// Prototype chain

let x1 = new Object();
console.log(Object.getPrototypeOf(x1));
console.log(Object.prototype.isPrototypeOf(x1));
console.log(Object.prototype)
console.log();

let x2 = new String("Maximiliano Correa");
console.log(Object.getPrototypeOf(x2));
console.log(String.prototype.isPrototypeOf(x1)) // false
console.log(String.prototype.isPrototypeOf(x2)) // true
console.log(String.prototype) // methods
console.log();

let x3 = new Number(100);
console.log(Object.getPrototypeOf(x3));
console.log(Number.prototype.isPrototypeOf(x2)) // false
console.log(Number.prototype.isPrototypeOf(x3)) // true
console.log(Number.prototype)// methods
console.log();

let x4 = new Date();
console.log(Object.getPrototypeOf(x4));
console.log(Date.prototype.isPrototypeOf(x3)) // false
console.log(Date.prototype.isPrototypeOf(x4)) // true
console.log(Date.prototype)// methods
console.log();

let x5 = ["a","b","c"];
console.log(Object.getPrototypeOf(x5));
console.log(Array.prototype.isPrototypeOf(x4)) // false
console.log(Array.prototype.isPrototypeOf(x5)) // true
console.log(Array.prototype)// methods
console.log();
