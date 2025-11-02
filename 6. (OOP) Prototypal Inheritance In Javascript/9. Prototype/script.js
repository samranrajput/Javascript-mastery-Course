function hello() {
  console.log("Hello World");
}
// console.log(hello.name);
// hello.happyPeople = "Happy People";
// console.log(hello.happyPeople);
hello.prototype.key1 = "value1";
hello.prototype.key2 = "value2";
hello.prototype.func = function () {
  return "I Am Function";
};
console.log(hello.prototype.func());

// const obj = {
//   key1: "value1",
// };
// obj.key2 = "value2";
// console.log(obj);
