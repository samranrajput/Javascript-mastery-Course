const createUser = (firstName, lastName, fatherName, age, address) => {
  const user1 = {};
  user1.firstName = firstName;
  user1.lastName = lastName;
  user1.fatherName = fatherName;
  user1.age = age;
  user1.address = address;
  user1.about = function () {
    console.log(`${this.firstName} ${this.age} Years Old`);
  };
  user1.is18 = function () {
    console.log(this.age >= 18);
  };
  return user1;
};

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
