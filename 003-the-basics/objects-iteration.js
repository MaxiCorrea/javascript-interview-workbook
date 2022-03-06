//  For In Statement

let objectOne = {
  name: "Maxi",
  surname: "Correa",
  age: 30,
};

for (key in objectOne) {
  console.log(`key is : ${key}`);
  console.log(`value is : ${objectOne[key]}`);
}
