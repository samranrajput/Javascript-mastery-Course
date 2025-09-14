let numbers = [1,9,3,7]
let isEven = numbers.some((number)=>{
    return number % 2 === 0
})
console.log(isEven)