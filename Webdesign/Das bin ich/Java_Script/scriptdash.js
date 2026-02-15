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


    //exercise 12
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


    //exercise 13

    let comp1 = 5
    let comp2 = "5"
    let comp3 = 0
    let comp4 = false
    let comp5 = ""
    let comp6 = 0
    let comp7 = null
    let comp8 = undefined

    console.log(comp1 === comp2) // false
    console.log(comp1 == comp2) // true (loser Vergleich)
    console.log(comp3 === comp4) // false
    console.log(comp3 == comp4) // true (loser Vergleich)
    console.log(comp5 === comp6) // false (strikter Vergleich)
    console.log(comp5 == comp6) // true (loser Vergleich)
    console.log(comp7 === comp8) // false
    console.log(comp7 == comp8) // true (loser Vergleich)

    // --- ERKLÄRUNGEN ZU EXERCISE 13 ---

    // Vergleich 1: 5 == "5" (Lose)
    // Loser Vergleich (==): Ergibt true. JavaScript sieht verschiedene Typen und wandelt den String "5" in die Zahl 5 um (Coercion).
    // Strikter Vergleich (===): Ergibt false. Zahl (Number) ist ein anderer Datentyp als Text (String).

    // Vergleich 2: 0 === false (Strikt)
    // Loser Vergleich (==): Ergibt true. In JavaScript wird die Zahl 0 als "falsy" gewertet und ist im losen Vergleich gleich false.
    // Strikter Vergleich (===): Ergibt false. 0 ist eine Number, false ist ein Boolean. Keine Typumwandlung erlaubt.

    // Vergleich 3: "" === 0 (Strikt)
    // Loser Vergleich (==): Ergibt true. JavaScript wandelt den leeren String "" in die Zahl 0 um.
    // Strikter Vergleich (===): Ergibt false. String ist nicht dasselbe wie Number.

    // Vergleich 4: null === undefined (Strikt)
    // Loser Vergleich (==): Ergibt true. JavaScript behandelt null und undefined beim losen Vergleich als gleichwertig leer.
    // Strikter Vergleich (===): Ergibt false. Es sind zwei unterschiedliche primitive Datentypen in JavaScript.

    //exercise 14

const typeOfButton = document.getElementById("typeof");

typeOfButton.addEventListener("click", function () {
    let inputValue = document.getElementById("nameInput").value;

    if (inputValue === "") {
        console.log("Bitte etwas eingeben!");
        return;
    }
    let numerischerWert = Number(inputValue);
    if (!isNaN(numerischerWert)) {
        console.log("Zahl erkannt! Quadrat:", numerischerWert * numerischerWert);
    } 
    else {
        console.log("Text erkannt! Uppercase:", inputValue.toUpperCase());
    }
});


//exercise 15

let shippingcost = prompt(Number("How much do you want to spend?"))
let shippingcountry = prompt("Where do you want to ship to?")

if (shipping > 100) {
    alert("You get free shipping!");
} else if (shippingcountry.toLowerCase() === "domestic") {
    alert(shippingcost + 5);
} else if (shippingcountry.toLowerCase() === "international") {
    alert(shippingcost + 20);
}else if (shippingcountry.toLowerCase() === "canada" || shippingcountry.toLowerCase() === "mexico") {
    alert(shippingcost + 10);
} else {
    alert("Please enter a valid shipping country (domestic, international, canada, mexico)");
}


//exercise 16

let k = 0;
let loopcount = 0

while (k <= 50) {
    if (k % 3 === 0) {
        k++;
        continue;
    }else if (k % 7 === 0 && k > 30) {
        break;
    } 
    console.log(k);
    k++;
    loopcount++;
}
console.log("Anzahl der Schleifendurchläufe: " + loopcount);

//exercise 17

// Global Variable
let status = "Global: Ich bin überall sichtbar";

function scopeTest() {
    // Local Variable
    let status = "Lokal: Ich bin nur hier drin"; 
    let secret = "Ich bin ein Geheimnis";

    console.log("Innerhalb der Funktion");
    console.log(status); 
    console.log(secret); 
}

scopeTest();

console.log("Außerhalb der Funktion");
console.log(status); 

try {
    console.log(secret); 
} catch (e) {
    console.log("Fehler: Auf 'secret' kann man von außen nicht zugreifen.");
}

// --- ERKLÄRUNGEN ZU DEN CONCEPTS ---

// 1. Global Variable: Wurde ganz oben außerhalb der Funktion deklariert. 
//    Sie kann sowohl im Hauptprogramm als auch innerhalb der Funktion gelesen werden.

// 2. Local Variable: 'secret' wurde mit 'let' in der Funktion erstellt. 
//    Sobald die Funktion bei der schließenden Klammer } endet, wird diese Variable gelöscht.

// 3. Shadowing (Gleicher Name): Wenn eine lokale Variable ('status') denselben Namen 
//    hat wie eine globale, wird die globale innerhalb der Funktion "überschattet". 
//    Die Funktion nutzt ihre eigene Version, ohne die globale Variable draußen zu ändern.

// 4. Scope-Fehler: Der Versuch, auf 'secret' von außen zuzugreifen, führt zu einem 
//    ReferenceError, weil der Browser die Variable außerhalb der Klammern nicht kennt.



});