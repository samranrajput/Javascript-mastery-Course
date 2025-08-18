const person = {
    name:"samran",
    age:17,
    "person hobbies":["programing", "Gaming", "Gym"]
};

// for (let key in person){
//     console.log(`${key} : ${person[key]}`)
// }

for (let key of Object.keys(person)){
    console.log(key)
}

for (let value of Object.values(person)){
    console.log(value)
}