console.log(this);
console.log(window);
console.log(firstName);
console.log(lastName);
console.log(fullName);
console.log(myFunc);
console.log(myFunc());
console.log(myFunc2);

function myFunc() {
  console.log("I am myFunc");
}

var myFunc2 = function () {
  console.log("I am myFunc2");
};
console.log(myFunc2());

var firstName = "Samran";
var lastName = "Veritas";
var fullName = firstName + " " + lastName;
console.log(firstName);
console.log(lastName);
console.log(fullName);
