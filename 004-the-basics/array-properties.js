// Length Property
let array1 = [1, 2, 3, 4, 5];
console.log(array1.length);
array1[5] = 6;
console.log(array1.length);

// Constructor Property
let characters = ["Tom Nook", "Isabelle", "Bubbles", "Chevre"];
console.log(characters.constructor);

// Prototype Property
Array.prototype.charCount = function () {
  // Adding new method to Global Array Object
  for (i = 0; i < this.length; i++) this[i] = this[i].trim().length;
};

let names = ["Maxi", "Maximiliano", "Aldred"];
console.log(names); // [ 'Maxi', 'Maximiliano', 'Aldred' ]
names.charCount(); 
console.log(names); // [ 4, 11, 6 ]
