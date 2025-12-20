const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("Error");
      }
    }, time);
  });
}

changeText(heading1, "One", "red", 1000)
  .then(() => changeText(heading2, "Two", "blue", 1000))
  .then(() => changeText(heading3, "Three", "yellow", 1000))
  .then(() => changeText(heading4, "Four", "green", 1000))
  .catch((error) => alert(error));
