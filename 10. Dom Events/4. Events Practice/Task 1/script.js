const allBtn = document.querySelectorAll(".my-buttons button");

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.background = "yellow";
    e.target.style.color = "gray";
  });
});
