// destructuring array
let alphabet = ["a", "b", "c", "d", "e", "f"];
let [first, second] = alphabet;
console.log(alphabet);
console.log(first);
console.log(second);
let [, , , , five] = alphabet;
console.log(alphabet);
console.log(five);
let [, , , , , , seven] = alphabet;
console.log(alphabet);
console.log(seven); // undefined

// destructuring array function

function values() {
  return ["This", "is", "a", "message"];
}
let [one, two, three, four] = values();
console.log(one, two, three, four);
