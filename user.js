
const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === localStorage.getItem("signUpEmail") && password === localStorage.getItem("signUpPassword")) {
        window.location.href = "app.html";
    }
    else {
        alert("Email and Password is incorrect");
    }

})