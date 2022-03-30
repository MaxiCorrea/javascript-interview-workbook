// destructuring array
let alphabet = ["a", "b", "c", "d", "e", "f"];
let [first , second] =  alphabet;
console.log(alphabet);
console.log(first);
console.log(second);
let [ , , , , five] =  alphabet;
console.log(alphabet);
console.log(five);
let [ , , , , , , seven] =  alphabet;
console.log(alphabet);
console.log(seven); // undefined
