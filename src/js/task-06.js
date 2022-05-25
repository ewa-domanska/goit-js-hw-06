let element = document.querySelector("#validation-input");
let length = parseInt(element.dataset.length);

element.addEventListener("blur", () => {
    if (element.value.length === length) {
        element.className = "valid";
    } else {
        element.className = "invalid";
    }
});