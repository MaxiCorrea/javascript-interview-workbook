// Copy by value
let number1 = 10;
let number2 = number1;
number1 = 100;
console.log(number2); // 10;

// Copy by reference
let person1 = {
  name: "Maxi",
  surname: "Correa",
};

let person2 = person1;
person2.name = "Max Power";
console.log(person1.name); // Max Power

// Shallow Copy for in  ( key : value )
let console1 = {
  name: "Nintendo",
};
let console2 = {};
for (key in console1) {
  console2[key] = console1[key];
}
console.log(console1);
console.log(console2);

// Shallow Copy Spread Operator
let console3 = {
  name: "Sega",
};
let console4 = { ...console3 };
console.log(console3);
console.log(console4);

// Merge Object properties with Spread Operator
let obj1 = {
  one: "value 1",
  two: "value 2",
};
let obj2 = {
  six: "value 6",
  seven: "value 7",
};
let objs = { ...obj1, ...obj2 };
console.log(objs);

// Shallow Copy with Object.assign Method
let sourceObject = {
  key1: "value 1",
  key2: "value 2",
};

let targetObject = {
  key3: "value 3",
};
targetObject = Object.assign(targetObject, sourceObject);
console.log(targetObject);

// Merge Object properties with Object.assign Method
let objs2 = Object.assign({}, obj1 , obj2);
console.log(objs2);