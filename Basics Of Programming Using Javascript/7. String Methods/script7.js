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
console.log(firstNameLowerCase)
console.log(firstNameUpperCase)

// slice()
console.log(firstName.slice(0, 3))
let firstCharUpperCase = firstName[0].toUpperCase() + firstName.slice(1,firstName.length)
console.log(firstCharUpperCase) 