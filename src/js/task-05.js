const textValue = document.querySelector("#name-input");
const h1Value = document.querySelector("#name-output");

textValue.addEventListener("input", () => {
    let newText = textValue.value;
    if (newText.length === 0) {
        newText = "Anonymous";
    }
    h1Value.textContent = newText;
});
