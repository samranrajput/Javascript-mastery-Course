// function func(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }

// func.prototype.about = function () {
//   console.log(this.firstName, this.age);
// };

// const store = new func("Samran", 17);
// store.about();

function createUser(firstName, lastName, fatherName, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fatherName = fatherName;
  this.age = age;
  this.address = address;
}

createUser.prototype.about = function () {
  console.log(`${this.firstName} ${this.age} Years Old`);
};
createUser.prototype.is18 = function () {
  console.log(this.age >= 18);
};
createUser.prototype.sing = function () {
  console.log("Beliver Song");
};

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
