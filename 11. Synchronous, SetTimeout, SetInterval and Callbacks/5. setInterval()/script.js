const randomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgba(${red}, ${green}, ${blue})`;
};

const btn = document.querySelector("button");
const body = document.body;

const track = setInterval(() => {
  body.style.background = randomColor();
}, 1000);

btn.addEventListener("click", () => {
  clearInterval(track);
  btn.textContent = randomColor();
});
