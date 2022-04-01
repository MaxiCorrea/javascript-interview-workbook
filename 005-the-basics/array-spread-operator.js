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
