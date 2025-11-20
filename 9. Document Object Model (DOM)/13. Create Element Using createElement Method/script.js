// kabhi bhi developers ko new Element ko create kr ne k liye innerHTML ka use nahi kr na chaye ye recomended nahi hai or performance bhi achi nahi hoti ha agar ap ne kisi Element ko change kr na hai like: todoList.innerHTML = "<li>New Todo</li>" tou ap innerHTML ka use kr sakte hai lekin create kabhi nahi krna create kr ne k liye createElement() Method best option hai sare developers yehi use kr te hai Element create kr ne k liye

// const TodoTextNode = document.createTextNode("New Todo");
// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "New Todo";
// // todoList.append(newTodoItem); // last mai create
// todoList.prepend(newTodoItem); // start mai create

// const addTodoBtn = document.querySelector(".btn-headline");
// const todoList = document.querySelector(".todo-list");

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove()

// before
// affter
const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "New Todo";
// todoList.before(newTodoItem);
todoList.after(newTodoItem);

// let count = 2;
// addTodoBtn.addEventListener("click", function () {
//   const newTodo = document.createElement("li");
//   newTodo.innerHTML = `Todo ${count++}`;
//   todoList.append(newTodo);
// });
