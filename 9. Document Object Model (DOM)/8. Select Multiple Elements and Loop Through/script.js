// Element Loop
// HTML Colection
// const navItems = document.getElementsByClassName("nav-item");
// for (let item = 0; item < navItems.length; item++) {
//   navItems[item].style.background = "green";
// }

// for (let item of navItems) {
//   item.style.background = "red";
// }

// Array.from(navItems).forEach((element) => {
//   element.style.background = "green";
// });

// NodeList
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.style.background = "red";
});
