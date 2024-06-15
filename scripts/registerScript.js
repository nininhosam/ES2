// Mockup for users data, using localStorage instead of a DB
users = {
    "admin": "admin",
};
if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
} else {
    localStorage.setItem("users", JSON.stringify(users));
}
// register page script
    let username = document.querySelector("input#email");
    let password = document.querySelector("input#password");
    let confirmPassword = document.querySelector("input#confirm_password");
    let password_subtext = document.querySelector("#pass_subtext");
    let form = document.querySelector("form#form");

    // Simple mockup for login
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!users[username.value] && confirmPassword.value === password.value) {
            users[username.value] = password.value;
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "../html/index.html";
        } else {
            password_subtext.classList.remove("hidden");
        }
    })