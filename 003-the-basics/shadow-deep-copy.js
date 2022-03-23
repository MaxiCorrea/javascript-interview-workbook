// Copy by value
let number1 = 10;
let number2 = number1;
number1 = 100;
console.log(number2); // 10;

// Copy by reference
let person1 = {
    name : "Maxi",
    surname : "Correa"
};

let person2 = person1;
person2.name = "Max Power";
console.log(person1.name); // Max Power