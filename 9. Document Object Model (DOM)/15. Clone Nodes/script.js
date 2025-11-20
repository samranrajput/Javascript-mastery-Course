const ul = document.querySelector(".todo-list");
const newLi = document.createElement("li");
newLi.textContent = "New Todo";
const newLi2 = newLi.cloneNode(true);
ul.prepend(newLi);
ul.append(newLi2);
