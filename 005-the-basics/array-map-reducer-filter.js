// Map , Reduce and Filter Methods
let numbers0 = [1, 2, 3, 4, 5];
let multiplied = numbers0.map((value, index, array) => {
  return value * 6;
});
console.log(numbers0); //[ 1, 2, 3, 4, 5 ]
console.log(multiplied); //[ 6, 12, 18, 24, 30 ]

