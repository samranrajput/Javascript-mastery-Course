// For Loop In Array
let fruits = ["apple", "mango", "banana", "stobery", "water melon", "pain apple"]

// nomal for loop
let newArray = []
for (let pos = 0; pos < fruits.length; pos++){
    console.log(fruits[pos].toUpperCase())
    newArray.push(fruits[pos].toUpperCase())
}
console.log(newArray)