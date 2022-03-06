//  For In Statement

let objectOne = {
  name: "Maxi",
  surname: "Correa",
  age: 30,
};

for (k in objectOne) {
  console.log(`key is : '${k}' value is : ${objectOne[k]}`);
}

let keys = Object.keys(objectOne);
console.log(keys);

let values = Object.values(objectOne);
console.log(values);

let entries = Object.entries(objectOne);
console.log(entries);

console.log(Object.keys({}).length === 0);
console.log(Object.keys(objectOne).length === 0);