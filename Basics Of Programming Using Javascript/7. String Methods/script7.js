// tirm()
// toUpperCase()
// toLowercase()
// slice

// tirm()
// let firstName = "       Samran       " // String is immutable
// console.log(firstName.length)
// let spacesRemove = firstName.trim()
// console.log(spacesRemove.length)

// toUpperCase()
let firstName = "samran"

let firstNameUpperCase = firstName.toUpperCase()
let firstNameLowerCase = firstName.toLowerCase()
let firstCharUpperCase = firstName[0].toUpperCase() + firstName.slice(1,firstName.length)
console.log(firstNameLowerCase)
console.log(firstNameUpperCase)
console.log(firstCharUpperCase) 
console.log(firstName.slice(0, 3))