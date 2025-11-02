class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static classInfo() {
    return "This is Person class";
  }
}

console.log(Person.classInfo());
