const ul = document.querySelector(".todo-list");

const newLi = document.createElement("li");
newLi.textContent = "New Todo";

const firstTodo = document.querySelector(".first-todo");

// ul.insertBefore(newLi, firstTodo);

// ul.replaceChild(newLi, firstTodo);

ul.removeChild(firstTodo);
