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

console.log(new Human().jobName);

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

let entry = new Entry(1, "Maxi");
console.log(entry.getKey());
console.log(entry.getValue());

// Private Static Field

class StartupEmployeeList {
  static #MAX_NUMBER_OF_INSTANCES = 3;
  static #instancesCounter = 0;
  #name;
  constructor(name) {
    if (
      ++StartupEmployeeList.#instancesCounter ===
      StartupEmployeeList.#MAX_NUMBER_OF_INSTANCES
    ) {
      throw new Error("Max number of instances Error");
    }
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}

console.log( new StartupEmployeeList("Max-1").getName());
console.log( new StartupEmployeeList("Max-2").getName());
//console.log( new StartupEmployeeList("Max-3").getName()); // Maxi number of instances Error
 
// Inheritance with extends keyword
class BaseClass {
  #name;
  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
  toString() {
    return `${this.#name}`
  }
}

class SubClass extends BaseClass {
  #power;
  constructor(name, power) {
    super(name);
    this.#power = power;
  }
  getPower() {
    return this.#power;
  }
  toString() {
    return `${super.toString()} - ${this.#power}`;
  }
}

let superMax = new SubClass("Max","Power");
console.log(superMax.toString());
console.log(Object.keys(superMax)); // only public fields 

// Instance Of
class User {
  #name;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.#name;
  }
}

let user1 = new User("Maximiliano");
let user2 = "Any";
console.log(user1 instanceof User); // true
console.log(user2 instanceof User); // false

class Admin extends User {
  #privileges;
  constructor(privileges) {
    super("Super User");
    this.#privileges = privileges
  }
  getPrivileges() {
    return this.#privileges;
  }
}

let user3 = new Admin("Login");
console.log(user3 instanceof User); // true
console.log(user3 instanceof Admin); // true

// Constructor Property




