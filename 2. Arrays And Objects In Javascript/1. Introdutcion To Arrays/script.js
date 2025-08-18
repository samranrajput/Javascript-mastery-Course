// Introduction To Arrays 
// let fruits = ["apple", "mango", "banana"]
// let numbers = [1, 2, 3, 3.5]
// let mix = ["apple", "mango", 1, 3.5, null, true, false, undefined]
// console.log(fruits)
// console.log(numbers)
// console.log(mix)

let fruits = ["apple", "mango", "banana", "grapes"]
let obj = {}
console.log(fruits[0])
console.log(fruits[2])
console.log(fruits.slice(0,3))
fruits[0] = "stoberry"
fruits[fruits.length-1] = "water melon"
console.log(fruits)
console.log(typeof fruits)
console.log(Array.isArray(fruits))
console.log(typeof obj)
console.log(Array.isArray(obj))