// Mockup for users data, using localStorage instead of a DB
users = {
    "admin": "admin",
};
if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
} else {
    localStorage.setItem("users", JSON.stringify(users));
}
// Login page script
    let username = document.querySelector("input#email");
    let password = document.querySelector("input#password");
    let password_subtext = document.querySelector("#pass_subtext");
    let form = document.querySelector("form#form");

    // Simple mockup for login
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (users[username.value] && users[username.value] === password.value) {
            window.location.href = "../html/menu.html";
        } else {
            password_subtext.classList.remove("hidden");
        }
    })