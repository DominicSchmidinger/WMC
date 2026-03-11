

const bmirechnen = document.getElementById("btn-calc-bmi")
const resultDisplay = document.getElementById("card-body-result")
const buttonfemale = document.getElementById("radio-female")
const buttonmale = document.getElementById("radio-male")
const resetbutton = document.getElementById("btn-reset")

if (bmirechnen) {
    bmirechnen.addEventListener("click", function () {
        // IDs korrigiert: bmigr und bmigew statt groesse/gewicht
        let eingabeGr = document.getElementById("input-height").value;
        let eingabeGew = document.getElementById("input-weight").value;

        // Komma durch Punkt ersetzen für deutsche Eingaben
        eingabeGr = eingabeGr.replace(",", ".");

        let bmigr = Number(eingabeGr);
        let bmigew = Number(eingabeGew);

        if (bmigr === 0 || bmigew === 0) {
            resultDisplay.innerHTML = "Bitte gib deine Größe und dein Gewicht an";
        } else {
            if (bmigr > 3) {
                bmigr = bmigr / 100;
            }
            let bmi = (bmigew / (bmigr * bmigr)).toFixed(2);
            resultDisplay.innerHTML = "Ihr BMI: " + bmi;

            if (bmi < 18.5) resultDisplay.innerHTML += " (Untergewicht)";
            else if (bmi < 25) resultDisplay.innerHTML += " (Normalgewicht)";
            else resultDisplay.innerHTML += " (Übergewicht)";
        }

    })

}

if (resetbutton) {
    resetbutton.addEventListener("click", function () {
        document.getElementById("input-height").value = "";
        document.getElementById("input-weight").value = "";
        let bmivalue = document.getElementById("bmi-value")
        let bmidetail = document.getElementById("bmi-detail")
        bmivalue.innerText
        bmidetail.innerText

        eingabeGew = 0;
        eingabeGr = 0;
    })
}