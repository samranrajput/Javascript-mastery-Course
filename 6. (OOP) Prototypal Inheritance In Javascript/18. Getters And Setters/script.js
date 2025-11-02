class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `My Full Name is ${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

person1 = new Person("Samran", "Veritas");
console.log(person1.fullName);
person1.fullName = "Muhammad Samran";
console.log(person1.fullName);
