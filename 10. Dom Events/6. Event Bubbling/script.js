const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// child.addEventListener(
//   "click",
//   () => {
//     console.log("Event Capturing !!!");
//   },
//   true
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Event Capturing !!!");
//   },
//   true
// );

// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("Event Capturing !!!");
//   },
//   true
// );

// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Event Capturing !!!");
//   },
//   true
// );

// child.addEventListener("click", () => {
//   console.log("You Click On Child");
// });

// parent.addEventListener("click", () => {
//   console.log("You Click On Parent");
// });

// grandparent.addEventListener("click", () => {
//   console.log("You Click On Grandparent");
// });

// document.body.addEventListener("click", () => {
//   console.log("You Click On Body");
// });

grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});
