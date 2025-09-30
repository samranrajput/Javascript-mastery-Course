// const person = new Map()
// person.set("first_name", "samran")
// person.set("last_name", "rajpoot")
// console.log(person)
// console.log(person.get("first_name"))
// console.log(person.keys())
// console.log(person.values())

const person1 = {
    name: "samran",
    fName: "Irfan"
}
const extractInfo = new Map()
extractInfo.set(person1, {lastName: "rajpoot", age: 17})
console.log(extractInfo)
console.log(person1.name)
console.log(extractInfo.get(person1))
console.log(extractInfo.get(person1).age)