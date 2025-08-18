// Clone Array 
// let array1 = ["array1", "array2"]
// let array2 = array1
// console.log(array1 === array2) // true

// let array1 = ["array1", "array2"]
// let array2 = ["array1", "array2"] // not convention
// let array2 = array1.slice(0) // convention
// let array2 = [].concat(array1) // convention
// let array2 = [...array1] // convention
// array1.push("array3")
// console.log(array1 === array2) // false
// console.log(array1) // false
// console.log(array2) // false

// Concatinate Array
let array1 = ["array1", "array2"]
// let array2 = [...array1, "array3", "array4"]
let array2 = array1.slice(0).concat("array3", "array4")
console.log(array2)