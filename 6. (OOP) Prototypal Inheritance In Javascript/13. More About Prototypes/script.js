// const nums = Array(1, 2, 3);
// console.log(Array.prototype);
// console.log(Array.isArray(nums));
// console.log(Object.getPrototypeOf(nums));
// console.log(nums);
function hello() {
  console.log("Hello");
}
hello.prototype = [];
hello.prototype.push("1");
hello.prototype.push("samran");
hello.prototype.key1 = "value1";
hello.prototype.key2 = "value2";
console.log(hello.prototype);
