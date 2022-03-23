// Default Method Syntax Getter & Setter

let truck = {
  color: "red",
  getColor: function () {
    return this.color;
  },
  setColor: function (color) {
    this.color = color;
  },
};
console.log(truck.getColor());
truck.setColor("blue");
console.log(truck.getColor());

// get & set keyword , Class with private fields
class User {
  #name;
  constructor(name, age) {
    this.name = name;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}

// Object.definePropertieMethod
let propertyDescriptor = {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 300,
};
Object.defineProperty(truck, "width", propertyDescriptor);
console.log(truck);

Object.defineProperty(truck, "getWidth", {
  enumerable: true,
  get: function () {
    return this.width;
  },
});
console.log(truck);
