function about(gender, fName) {
  console.log(
    `user name is ${this.firstName} user age is ${this.age} user gender is ${gender} user father name is ${fName}`
  );
}

// about();

const user1 = {
  firstName: "samran",
  age: 17,
  about: function (gender, fName) {
    console.log(
      `user name is ${this.firstName} user age is ${this.age} user gender is ${gender} user father name is ${fName}`
    );
  },
};

// user1.about();

const user2 = {
  firstName: "rafay",
  age: 20,
};

// call();
// user1.about.call(user2, "Male", "saleem");
// about.call(user1, "Male", "irfan");

// apply()
// about.call(user1, ["Male", "irfan"])

// bind()
// const func = about.bind(user1, "Male", "irfan");
// func();
