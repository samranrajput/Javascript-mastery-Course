const user1 = {
  firstname: "samran",
  age: 17,
  about: () => {
    // console.log(this);
    console.log(this.firstname, this.age);
  },
};

const user2 = {
  firstname: "samran",
  age: 17,
  about: function () {
    console.log(this.firstname, this.age);
  },
};

const user3 = {
  firstname: "samran",
  age: 17,
  about() {
    console.log(this.firstname, this.age);
  },
};

user2.about();
user3.about();
