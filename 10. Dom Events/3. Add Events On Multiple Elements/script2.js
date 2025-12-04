const allBtn = document.querySelectorAll(".my-buttons button");

allBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    console.log(e.target.textContent);
  });
});
