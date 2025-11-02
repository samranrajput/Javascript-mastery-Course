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

const user2 = new createUser(
  "Rafay",
  "Qureshi",
  "Saleem",
  20,
  "Pakistan New karachi"
);

const user3 = new createUser(
  "Ibrahim",
  "Hussain",
  "Usman",
  25,
  "Pakistan Shahrefaisal"
);
for (key in user1) {
  // console.log(key);
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
