//exercise 1:
let userName = 'Alice';
let userAge = '25';
let isStudent = 'true';

console.log("Name: " + userName, "Age: " + 25, "Student status: " + isStudent);

//exercise 2

let num1 = "25";
let num2 = "10";


let nume1 = Number(num1);
let nume2 = Number(num2);

console.log(typeof nume1, typeof nume2);
console.log(nume1 + nume2, nume1 - nume2, nume1 * nume2, nume1 / nume2);


//exercise 3

let x = undefined;
let y = null;

console.log(typeof x, typeof y);

//Exercise 4

let age = prompt("age?");

let agenum = Number(age)

console.log(agenum)
if (age == null || age == 0) {
    alert("No age provided")
}
else if (age < 13) {
    alert("You're a child")
}
else if (age < 17) {
    alert("You're a teenager")
}
else if (age < 64) {
    alert("You're an adult")
}
else if (age >= 65) {
    alert("You're a senior")
}

//exercise 5

let num = prompt("number?");

let nume = Number(num)

if (nume === 0 || nume === null) {
    alert("keine nummer eingegeben");
}
else
    alert(nume % 2 === 0 ? "Even" : "Odd");


//exercise 6

let loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {

    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");

    let username = usernameInput.value;
    let password = passwordInput.value;

    if (username !== "admin" || password.length < 8 || username.length < 5) {
        alert("Login sucessfull");
    } else {
        alert("Invalid username or password");
    }
});

// exercise 7
let username = prompt("whats your name?")
let usertheme = prompt("choose a theme?")
let userlanguage = prompt("ehat do you speak?")

userNamefinal = username ?? "Guest"
userThemefinal = usertheme ?? "light"
userLanguagefinal = userlanguage ?? "en"

console.log(userNamefinal, userThemefinal, userLanguagefinal);

//exercise 8

let i = 0;


while (i <= 20) {
    if (i % 2 == 0)
        console.log("gerade zahlen: ", i)
    i++
}
console.log("ende")


for (let i = 0; i < 20; i++) {
    if (i % 2)
        console.log("ungerade zahlen: ", i)
}
console.log("ende")
console.log("")
console.log("ich liebe fizzbuzz")

//exercise 9 

for (let i = 0; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}

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

//



