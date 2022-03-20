// Constructor Method
class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
}
let person1 = new Person("Rover", 10, "snacking");
console.log(person1);

// Instance Method
class Company {
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(`The name is ${this.name}`);
  }
}

new Company("Oracle").print();
new Company("Amazon").print();
new Company("Microsoft").print();

// Static Method

class Customer {
  static staticMethod() {
    console.log("static method");
  }
  constructor(name) {
    this.name = name;
  }
  print() {
    console.log(`The name ${this.name}`);
  }
}

Customer.staticMethod();
// new Customer("Max").staticMethod(); // TypeError "staticMethod" is not a function

// Public Fields

class PublicField {
  constructor(age) {
    this.age = age;
  }
}

let publicFieldInstance = new PublicField(30);
console.log(publicFieldInstance.age);

// Default Initialization
class Human {
  name = "Max";
  age = 30;
  jobName = "FullStack Developer";
  constructor() {}
}

console.log( new Human().jobName);

//Private Fields
class Entry {
  #key;
  #value;
  constructor(key, value) {
    this.#key = key;
    this.#value = value;
  }
  getKey() {
    return this.#key;
  }
  getValue() {
    return this.#value;
  }
}

let entry = new Entry(1,"Maxi");
console.log(entry.getKey());
console.log(entry.getValue());

