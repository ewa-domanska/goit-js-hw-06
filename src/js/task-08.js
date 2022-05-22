const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
    const {
        elements: {email, password},
    } = e.currentTarget;

    if (email.value.length === 0 || password.value.length === 0) {
    alert("Wszystkie pola powinny zostać wypełnione.")
    }

    console.log(email.value)
    console.log(password.value)
});

