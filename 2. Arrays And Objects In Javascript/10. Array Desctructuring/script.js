const array = ["value1", "value2", "value3", "value4"]
// let a = array[0]
// let b = array[1]
// console.log(a)
// console.log(b)

let [a, b, ...array2] = array
console.log(a)
console.log(b)

// let array2 = array.slice(1,array.length)
console.log(array2)