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

class Cat extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  run() {
    return `${this.name} is running ${this.speed} kmph`;
  }
}

const sheroo = new Cat("sheroo", 3, 45);
const cutee = new Cat("cutee", 5, 35);

console.log(sheroo.run());
console.log(sheroo.run());
