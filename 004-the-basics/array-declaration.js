//  Array Literal Notation
let fruitsArray = ['mango', 'apple', 'grapes', 'bluberry', 'watermelon'];
console.log(typeof(fruitsArray));
console.log(Array.isArray(fruitsArray));
console.log(fruitsArray);
console.log(fruitsArray[0]);
console.log(fruitsArray[2]);
console.log(fruitsArray[4]);

// Array Constructor
let myArray1 = new Array();
console.log(myArray1);
console.log(myArray1.length)
console.log(myArray1[1]); // undefined
console.log();
let myArray2 = new Array(5);
console.log(myArray2);
console.log(myArray2.length)
console.log(myArray2[1]); // undefined
myArray2[1] = "Maxi";
console.log(myArray2); 
console.log(Object.getOwnPropertyNames(myArray2));

// Array.of Factory Method
let myArray3 = Array.of(1,2,3,4,5,6);
console.log(myArray3);

