// Spread Operator (Array)
console.log(...[1, 2, 3, 4]); // 1 2 3 4
console.log([1, 2, 3, 4]); // [1,2,3,4]
let array1 = [1, 2, 3, ...[4, 5]];
console.log(array1);

// Merge Arrays with Spread Operator
let array2 = [1, 2, 3];
let array3 = [4, 5, 6];
let array4 = [...array2, ...array3];
console.log(array2);
console.log(array3);
console.log(array4);
//Take note that for larger arrays with more items the spread syntax is slower. Therefore,
//when dealing with larger data sets it is better use the concat() method.

// Copy Arrays
let array5 = [1, 2, 3, 4, 4, 45, 5, 5, 5];
console.log(array5);
let array5Copy = [...array5];
console.log(array5Copy);

// Convert string into array
let myName = "Maximiliano Correa";
let chars = [...myName];
console.log(chars);

//Math Object
console.log(Math.max(...[23,34,45,345345,345,23,33,234,-3]));
console.log(Math.min(...[23,34,45,345345,345,23,33,234,-3]));
console.log(Math.min([23,34,45,345345,345,23,33,234,-3])); // NaN
