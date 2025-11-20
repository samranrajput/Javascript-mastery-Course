const todoList = document.querySelector(".todo-list");
// const newTodo = (todoList.innerHTML += "<li>New Todo</li>"); // wrong
const newTodo2 = (todoList.innerHTML = "<li>New Todo 2</li>"); // correct
console.log(todoList.innerHTML);

// kabhi bhi developers ko new Element ko create kr ne k liye innerHTML ka use nahi kr na chaye ye recomended nahi hai or performance bhi achi nahi hoti ha agar ap ne kisi Element ko change kr na hai like: todoList.innerHTML = "<li>New Todo</li>" tou ap innerHTML ka use kr sakte hai lekin create kabhi nahi krna create kr ne k liye createElement() Method best option hai sare developers yehi use kr te hai Element create kr ne k liye
