class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }

  fullDetails() {
    return `${this.name}, ${this.age}, ${this.eat()}`;
  }
}

const animal1 = new Animal("dog", 12);
const animal2 = new Animal("cat", 5);

console.log(animal1.fullDetails());

class Cat extends Animal {}

const sheroo = new Cat("sheroo", 3);
const cutee = new Cat("cutee", 5);

// getDetails(sheroo);
// getDetails(cutee);
