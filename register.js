
const signUpform = document.getElementById("sign-up");

signUpform.addEventListener("submit", (e) => {
    e.preventDefault();

    var signUpEmail = document.getElementById("exampleInputEmail1").value;
    localStorage.setItem("signUpEmail", signUpEmail);
    console.log(signUpEmail);
    var signUpPassword = document.getElementById("exampleInputPassword1").value;
    localStorage.setItem("signUpPassword", signUpPassword);

    var userName = document.getElementById("name").value;
    localStorage.setItem("userName", userName);

    console.log(userName);

    if (signUpEmail && signUpPassword  && userName) {
        window.location.href = "login.html";
    }
})

