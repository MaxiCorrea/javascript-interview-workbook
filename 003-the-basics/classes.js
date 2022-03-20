
// Constructor Method
class Person {
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
}
let person1 = new Person('Rover', 10, 'snacking');
console.log(person1);

// Instance method
class Company {
  constructor(name ) {
    this.name = name;
  }
  print() {
    console.log(`The name is ${this.name}`)
  }
}

new Company("Oracle").print();
new Company("Amazon").print();
new Company("Microsoft").print();
