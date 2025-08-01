let winNo = 45
let no = prompt("Enter a number : ")
no = parseInt(no)
while (true){
    if (no === winNo) {
        console.log("You Win!!!")
        break
    } else {
        if (no >= winNo) {
            console.log("Too High")
            no = prompt("Try Again : ")
            no = parseInt(no)
        } else {
            console.log("Too Low")
            no = prompt("Try Again : ")
            no = parseInt(no)
        }
    }
}