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

//weiter machen bis ende

