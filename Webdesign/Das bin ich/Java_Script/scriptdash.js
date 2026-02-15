// damit das ganze übersichtlich bleibt 
document.addEventListener("DOMContentLoaded", () => {

    let username1 = localStorage.getItem("username");

    if (!username1) {
        window.location.href = "login.html";
    } else {
        let welcomeText = document.getElementById("welcomeText");
        welcomeText.textContent = "Hello " + username1;
    }

    let logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("username");

        window.location.href = "login.html";
    })


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


    const runAgecheck = () => {
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
    }

    //exercise 5

    let num = prompt("number?");

    let nume = Number(num)

    if (nume === 0 || nume === null) {
        alert("keine nummer eingegeben");
    }
    else
        alert(nume % 2 === 0 ? "Even" : "Odd");

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

    for (let i = 1; i <= 30; i++) {
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



    //exercise 11

    let username2 = localStorage.getItem("username");

    document.getElementById("welcomeText").textContent = "Hello " + username2;

    const squareFunc = n => n * n;
    const sumFunc = (a, b) => a + b;
    const greetFunc = name => "Hi, " + name;


    const calculateButton = document.getElementById("calculateButton");


    calculateButton.addEventListener("click", function () {

        let n = Number(document.getElementById("num1").value);
        let a = n;
        let b = Number(document.getElementById("num2").value);
        let name = document.getElementById("usernameInput").value;

        console.log("Quadrat:", squareFunc(n));
        console.log("Summe:", sumFunc(a, b));
        alert(greetFunc(name));
    });


    const temprechner = document.getElementById("temperatur");

    temprechner.addEventListener("click", function () {
        let temp = Number(document.getElementById("temp").value);

        console.log("In Ferenheit: " + (temp * 9 / 5 + 32));

    });
});




const rechenen = document.getElementById("calcButton");

rechenen.addEventListener("click", function () {


    let calc1 = Number(document.getElementById("num3").value)
    let op = document.getElementById("operator").value
    let calc2 = Number(document.getElementById("num4").value);



    if (op === "add") {
        console.log(calc1 + calc2)
    } else if (op === "subtract") {
        console.log(calc1 - calc2)
    } else if (op === "multiply") {
        console.log(calc1 * calc2)
    } else if (op === "divide") {
        if (calc2 !== 0) {
            console.log(calc1 / calc2);
        } else {
            console.log("Division durch 0 nicht möglich!");
        }
    }
});


