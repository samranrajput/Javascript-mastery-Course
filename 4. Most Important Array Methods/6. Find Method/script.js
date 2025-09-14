// let strs = ['hello', 'banana', 'cat', 'dog']

// let ans = strs.find((str)=>{
//     return str.length === 3
// })

// console.log(ans)

const users = [
    {
        userId: 1,
        userName: "samran"
    },
    {
        userId: 2,
        userName: "kashan"
    },
    {
        userId: 3,
        userName: "kamran"
    },
    {
        userId: 4,
        userName: "imran"
    },
    {
        userId: 5,
        userName: "irfan"
    }
]

let findUser = users.find((user) => {
    return user.userId === 3
})

console.log(findUser)