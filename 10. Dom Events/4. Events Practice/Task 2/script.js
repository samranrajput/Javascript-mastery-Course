const btn = document.querySelector("button");
const currenColor = document.querySelector(".curren-color");
const body = document.body;

const generateBgColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  return rgbColor;
};

btn.addEventListener("click", () => {
  rgbColor = generateBgColor();
  currenColor.textContent = rgbColor;
  body.style.background = rgbColor;
});
