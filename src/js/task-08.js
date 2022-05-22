const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const {
        elements: {email, password},
    } = e.currentTarget;

    if (email.value.length === 0 || password.value.length === 0) {
        alert("Wszystkie pola powinny zostać wypełnione.");
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    e.currentTarget.reset();
});

