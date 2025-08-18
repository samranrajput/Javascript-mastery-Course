// objects reference type 
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
const person = {
    name:"samran",
    age:17,
    hobbies:["programing", "Gaming", "Gym"]
}

// how to access data from objects 
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies)
console.log(person["name"])
console.log(person["age"])
console.log(person)

// How to add key value pair to object
// person.gender = "male"
person["gender"] = "male"
console.log(person)