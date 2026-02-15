//exercise 6

let loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (username !== "admin" && password.length >= 8 && username.length >= 5) {

        localStorage.setItem("username", username)
        alert("Login Succesful");
        window.location.href = "dash.html";

    } else {

        alert("Invalid username or password")
    }
});

//exercise 10
loginButton = document.getElementById("loginButton");
usernameInput = document.getElementById("username");

loginButton.addEventListener("click", function () {
    let userName = usernameInput.value;
    event.preventDefault();
    showMassage(userName);
});

function showMassage(userName) {
    alert("Hello " + userName);
}

let username = localStorage.getItem("username");