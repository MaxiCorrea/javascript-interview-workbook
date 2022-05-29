(function () {
  console.log("IFFE ");
})();

setTimeout(function () {
  console.log("after one second");
}, 1000);

// Exercides
let power = function (base , exp) {
    return Math.pow(base, exp);
}
console.log(power(2,4));
console.log(power(2,5));
