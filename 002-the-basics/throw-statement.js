let price = 100;
let discount = 0.5;
let result = price * discount;

try {
  if (result <= 50) {
    throw new Error("The price is 50 and below"); // throw exception
  }
  console.log(x);
} catch (e) {
  console.log(`${e.name} ${e.message}`);
}

try {
  if (result < 50) {
    throw new Error("The price is 50 and below");
  }
  console.log(x); // not defined error
} catch (e) {
  console.log(`${e.name} ${e.message}`);
}
