const person = {
  name: "rafay",
  age: 20,
  about: function () {
    console.log(`person name is ${this.name} and person age is ${this.age}`);
  },
};

// person.about()
function personInfo() {
  console.log(`person name is ${this.name} and person age is ${this.age}`);
}

const person1 = {
  name: "rafay",
  age: 20,
  about: personInfo,
};
const person2 = {
  name: "samran",
  age: 17,
  about: personInfo,
};
const person3 = {
  name: "kamran",
  age: 35,
  about: personInfo,
};
person1.about();
person2.about();
person3.about();

console.log(this);
console.log(window);
console.log(window === this);

function myfunc() {
  console.log(this);
}
window.myfunc();
