const user3 = {
  firstName: "samran",
  age: 17,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake
// const func = user3.about; // Wrong
const func = user3.about.bind(user3); // Correct
func();
