// const body = document.body;
// const input = document.querySelector(".key");

// body.addEventListener("keypress", (e) => {
//   input.textContent = e.key;
// });

const mainBtn = document.querySelector(".btn-headline");

mainBtn.addEventListener("mouseover", () => {
  console.log("Mouse Over event");
});

mainBtn.addEventListener("mouseleave", () => {
  console.log("Mouse Leave event");
});
