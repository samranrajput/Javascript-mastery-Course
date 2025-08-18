// Concatenate Arrays
// let array1 = ["value1", "value2", "value3"]

// let array2 = ["value4", "value5", "value6"]

// let newArray1 = [...array1, ...array2]

// let newArray2 = [...array1, ...array2, "samran"]

// let newArray3 = [...array1, ...array2, ..."samran"]

// console.log(newArray1)

// console.log(newArray2)

// console.log(newArray3)


// Concatenate Objects
let obj1 = {
    key1: "value1",
    key2: "value2",
}

let obj2 = {
    key3: "value3",
    key4: "value4",
}

let newObj1 = {...obj1, ...obj2}

let newObj2 = {...obj1, ...obj2, key5: "value5"}

let newObj3 = {...obj1, ...obj2}

console.log(newObj1)

console.log(newObj2)

console.log(newObj3)