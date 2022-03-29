// Array.prototype.push
let array = [1, 2, 3];
console.log(array);
array.push(4);
console.log(array);
array.push(5, 6, 7);
console.log(array); // 1,2,3,4,5,6,7

// Array.prototype.unshift
let array2 = [3];
console.log(array2);
array2.unshift(1, 2);
console.log(array2); // 1,2,3

// Array.prototype.splice
let array3 = ["a", "b", "c"];
console.log(array3);
array3.splice(1, 0, "1", "2");
console.log(array3); //  a , 1 , 2 , b , c
array3.splice(1, 2, "1", "2");
console.log(array3); //  a , 1 , 2 , b , c

// Array.prototype.concat
let array4 = [1, 2, 3];
console.log(array4);
let array5 = [4, 5, 6];
console.log(array5);
let array6 = array4.concat(array5);
console.log(array6);

// Array.prototype.pop
let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);

// Array.prototype.shift
let queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue);
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue);

// Deleting with Array.prototype.splice
let array7 = [1, 2, 3];
console.log(array7);
array7.splice(0, 2);
console.log(array7); // 3

// Using delete keyword
let array8 = [1, 2, 3];
console.log(array8);
delete array8[1]; // set undefined in [1] position of array
console.log(array8);

// Reset Array
let array9 = [1, 2, 3];
console.log(array9);
array9.length = 0;
console.log(array9);

//  Changing Array Elements
let ids = [208, 937, 344];
console.log(ids);
ids[0] = 10;
console.log(ids);

//Slicing a Array
let primes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(primes);
console.log(primes.slice(0, 5)); // 1,2,3,4,5   <- inclusive end
console.log(primes.slice(5)); // 6,7,8,9   <-  exclusive start

// Array.prototype.forEach
let values = ["A", "B", "C", "D"];
values.forEach((current, index, array) => {
  console.log(`${current} -> ${index} -> ${array}`);
});
