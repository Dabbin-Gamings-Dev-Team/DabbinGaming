const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Dab" && password === "090825") {
        window.location.assign("https://DabbinGaming.repl.co/dab")
    } else {
   
    }
    if (username === "awdev" && password === "103323") {
        window.location.assign("https://DabbinGaming.repl.co/awdev")
    } else {}
    if (username === "dabutill" && password === "bot") {
        window.location.assign("https://DabbinGaming.repl.co/bot")
    } else {}
    
}) 