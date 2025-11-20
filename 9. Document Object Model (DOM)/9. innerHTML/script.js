// const headLine = document.querySelector(".headline");
// headLine.innerHTML = "<h1>Inner Html</h1>";
// headLine.innerHTML += "<button>Submit</button>";
// console.log(headLine.innerHTML);

const plus = document.querySelector(".qty-container .plus");
const minus = document.querySelector(".qty-container .minus");
let qty = document.querySelector(".qty-container .qty");

plus.addEventListener("click", function () {
  qty.textContent++;
});

minus.addEventListener("click", function () {
  if (parseInt(qty.textContent) <= 0) {
    alert("Out of Qty");
  } else {
    qty.textContent--;
  }
});
