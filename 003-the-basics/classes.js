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