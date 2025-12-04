const allBtn = document.querySelectorAll(".my-buttons button");

allBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const btnText = this.textContent;
    console.log(btnText);
  });
});
