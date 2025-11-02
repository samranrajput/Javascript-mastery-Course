function createUser(firstName, lastName, fatherName, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.fatherName = fatherName;
  user.age = age;
  user.address = address;
  return user;
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

console.log(createUser.prototype.about());

const user1 = createUser(
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

const user2 = createUser(
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

const user3 = createUser(
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
