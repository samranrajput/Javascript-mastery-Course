// const numbers = new Set([1,2,3,4,3,4])
// const strs = new Set(["a", "b", "c", "b", "c"])
// console.log(numbers)
// console.log(strs)

// const numbers = new Set()
// const strs = new Set()
// numbers.add(1)
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(3)
// numbers.add(4)
// strs.add("item1")
// strs.add("item2")
// console.log(numbers)
// console.log(strs)

const numbers = [1,2,3,4,5,6,5,6]
const unique = new Set(numbers)
let len = 0
for (let i of unique){
    len++
}
console.log(len)