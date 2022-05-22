function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const button = document.querySelector(".change-color")
let body = document.querySelector("body")
let span = document.querySelector(".color")

button.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.setAttribute("style", "background-color:" + color);
  span.textContent = color;
});