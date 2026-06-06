const alter = 22;
const name = "Dominic";

function begruessung() {
    console.log("Hallo, ich heiße " + name + " und ich bin " + alter + " Jahre alt.");
}
begruessung();


const alter = prompt("Wie alt bist du?");
console.log("Du bist " + alter + " Jahre alt.");

alert("Hallo, ich heiße " + name + " und ich bin " + alter + " Jahre alt.");

const alter2 = prompt("Wie alt bist du?");
alert("Du bist " + alter2 + " Jahre alt.");

const essen = ["Pizza", "Burger", "Sushi"];
console.log(essen[1]); // Burger

essen.push("pasta")

const zahlen = [1,2,3,4,5];
zahlen.forEach((zahl) => {
    console.log(zahl);
});

const schüler = {
    name: "Anna",
    alter: 20,
    klasse: "12A"
};
console.log(schüler.name); // Anna

schüler.alter = 21;
console.log(schüler.alter); // 21

Text.innerText = "Willkommen";

btn.onclick = () => {
    console.log("Button wurde geklickt!");
}

const input = document.getElementById("input");

addEventListener("input", () => {
    console.log("Eingabe: ", input.value);
})

let auto = new Object();
let auto = {
    marke: "BMW",
    ps: 300
};

info(auto.marke + " hat " + auto.ps + " PS.");

const jsoncontent = {"name": "Dominic", "alter": 22};
const json = JSON.stringify(jsoncontent);

console.log(jsoncontent.name);

const name = "Dominic";
const gespeichert = localStorage.setItem("name", name);

console.log(localStorage.getItem("name")); // Dominic


