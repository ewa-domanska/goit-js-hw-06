let element = document.querySelector("#validation-input");
let minLength = element.dataset.length;


element.addEventListener("blur", () => {
    if (element.value.length >= minLength) {
        element.className = "valid";
    } else {
        element.className = "invalid";
    }
});