// difference between dot and bracket notation 
const key = "email";
const person = {
    name:"samran",
    age:17,
    "person hobbies":["programing", "Gaming", "Gym"]
};

console.log(person["person hobbies"]);
person[key] = "abc@gmail.com"
console.log(person)