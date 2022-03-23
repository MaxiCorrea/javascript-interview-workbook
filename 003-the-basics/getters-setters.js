// Default Method Syntax Getter & Setter

let trunck = {
  color: "red",
  getColor: function () {
    return this.color;
  },
  setColor: function (color) {
    this.color = color;
  },
};
console.log(trunck.getColor());
trunck.setColor("blue");
console.log(trunck.getColor());

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
  enumerable: false,
  writable: false,
  value: 300,
};

Object.defineProperty(trunck, "width", propertyDescriptor);
console.log(trunck.width);
