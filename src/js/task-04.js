let counterValue = 0;
const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

const counter = document.querySelector("#value")

buttonPlus.addEventListener("click", () => {
    counterValue++;
    counter.textContent = counterValue + "";
});

buttonMinus.addEventListener("click", () => {
    counterValue--;
    counter.textContent = counterValue + "";
});