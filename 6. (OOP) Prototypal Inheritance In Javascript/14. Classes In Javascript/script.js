class createUser {
  constructor(firstName, lastName, fatherName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fatherName = fatherName;
    this.age = age;
    this.address = address;
  }
  about() {
    console.log(`${this.firstName} ${this.age} Years Old`);
  }
  is18() {
    console.log(this.age >= 18);
  }
  sing() {
    console.log("Beliver Song");
  }
}

const user1 = new createUser(
  "Samran",
  "Rajpoot",
  "Irfan",
  17,
  "Pakistan Korangi Karachi"
);
console.log(user1);
user1.about();
user1.is18();
user1.sing();

const user2 = new createUser(
  "Rafay",
  "Qureshi",
  "Saleem",
  20,
  "Pakistan New karachi"
);
console.log(user2);
user2.about();
user2.is18();
user2.sing();

const user3 = new createUser(
  "Ibrahim",
  "Hussain",
  "Usman",
  25,
  "Pakistan Shahrefaisal"
);
console.log(user3);
user3.about();
user3.is18();
user3.sing();
