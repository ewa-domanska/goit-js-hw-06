let range = document.querySelector("#font-size-control");
let span = document.querySelector("#text");

range.addEventListener("input", () => {
    span.setAttribute("style", "font-size:" + range.value + "px");
});