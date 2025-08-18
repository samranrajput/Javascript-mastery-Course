const fruits = ["apple", "Mango", "Banana"]
const fruits2 = []
for (let fruit in fruits){
    fruits2.push(fruits[fruit])
    // console.log(fruits[fruit])
}
console.log(fruits2)