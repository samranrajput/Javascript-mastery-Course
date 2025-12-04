const formTodo = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");

const TodoList = document.querySelector(".todo-list");

// const btnRemove = document.querySelector(".todo-buttons .remove");

formTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoItem = document.createElement("li");
  const liInnerHtml = `
    <span class="text">${todoInput.value}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
  `;
  newTodoItem.innerHTML = liInnerHtml;
  TodoList.append(newTodoItem);
  todoInput.value = "";
});

TodoList.addEventListener("click", (e) => {
  const li = e.target.parentNode.parentNode;
  const liSpan = e.target.parentNode.previousElementSibling;
  if (e.target.classList.contains("done")) {
    liSpan.style.textDecoration = "underline";
  }
  if (e.target.classList.contains("remove")) {
    li.remove();
  }
});
