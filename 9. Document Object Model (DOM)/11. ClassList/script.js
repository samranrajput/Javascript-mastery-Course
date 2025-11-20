const btnHeadline = document.querySelector(".btn-headline");
const sectionTodo = document.querySelector(".section-todo");

// let condition = true;
// btnHeadline.addEventListener("click", function () {
//   if (condition) {
//     sectionTodo.classList.add("bg-dark");
//     condition = false;
//   } else {
//     sectionTodo.classList.remove("bg-dark");
//     condition = true;
//   }
// });

btnHeadline.addEventListener("click", function () {
  sectionTodo.classList.toggle("bg-dark");
});

console.log(sectionTodo.classList.contains("container"));
