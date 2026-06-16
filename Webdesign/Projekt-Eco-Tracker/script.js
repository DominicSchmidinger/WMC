// ============================================================
// 1. QUIZ-DATEN (Fragen und Antworten)
// ============================================================
let questions = []; // leer, wird per fetch befüllt

fetch("fragen.json")
    .then(response => response.json())
    .then(data => {
        questions = data;
        displayQuestion(); // erst NACH dem Laden anzeigen!
    });

// ============================================================
// 2. STATUS-VARIABLEN
// Diese Variablen merken sich den aktuellen Zustand des Quiz
// ============================================================
let currentQuestionIndex = 0; // Welche Frage wird gerade angezeigt?
let userAnswers = [];          // Hier werden die Punkte pro Frage gespeichert

// Globale Variablen für die Solarstrahlung
// "global" = überall im Script zugänglich, nicht nur im fetch-block
let radiationData = []; // Speichert die Strahlungswerte (z.B. [0, 0, 30.8, 141, ...])
let timesData = [];     // Speichert die Uhrzeiten (z.B. ["2026-06-06T00:00", ...])
// timesData[0] gehört immer zu radiationData[0], usw.

// ============================================================
// 3. DOM-ELEMENTE HOLEN
// Wir suchen die HTML-Elemente über ihre ID
// ============================================================
const questionTitel = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const finalScoreDisplay = document.getElementById("final-score");
const scoreTextDisplay = document.getElementById("score-text");

// ============================================================
// 4. QUIZ-LOGIK
// ============================================================

// Zeigt die aktuelle Frage an
function displayQuestion() {
    if (!questionText) return; // Abbruch wenn wir nicht auf der Quiz-Seite sind

    const currentQuestion = questions[currentQuestionIndex];

    // Titel und Fragetext setzen
    questionTitel.innerText = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
    questionText.innerHTML = currentQuestion.question;

    // Antwort-Buttons leeren und neu aufbauen
    optionsContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.className = "btn-nav";
        button.style.display = "block";
        button.style.width = "100%";
        button.style.margin = "5px 0";

        // Beim Klick: Punkte merken und Button grün färben
        button.onclick = () => {
            userAnswers[currentQuestionIndex] = answer.points;
            Array.from(optionsContainer.children).forEach(btn => btn.style.background = "");
            button.style.background = "#40916c";
        };
        optionsContainer.appendChild(button);
    });

    // NavigationButtons aktivieren/deaktivieren
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.innerText = currentQuestionIndex === questions.length - 1 ? "Zum Ergebnis" : "Weiter";
}

// Weiter-Button
if (nextBtn) {
    nextBtn.onclick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            finishQuiz(); // Letzte Frage → Quiz abschließen
        }
    };
}

// Zurück-Button
if (prevBtn) {
    prevBtn.onclick = () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    };
}

// Quiz abschließen: Score berechnen und im Local Storage speichern
function finishQuiz() {
    // reduce() addiert alle Punkte im userAnswers-Array zusammen
    const finalScore = userAnswers.reduce((a, b) => (a || 0) + (b || 0), 0);
    localStorage.setItem("ecoQuizScore", finalScore); // Im Browser speichern
    window.location.href = "ergebnisse.html";          // Zur Ergebnisseite wechseln
}

// ============================================================
// 5. ERGEBNIS ANZEIGEN (nur auf ergebnisse.html)
// ============================================================
function displayResult() {
    if (!finalScoreDisplay) return; // Abbruch wenn nicht auf Ergebnisseite

    // Score aus Local Storage lesen (wurde von finishQuiz() gespeichert)
    const savedScore = localStorage.getItem("ecoQuizScore") || 0;

    let rating = "";
    if (savedScore >= 30) {
        rating = "Öko-Gott! 🌿 Du lebst extrem nachhaltig.";
    } else if (savedScore >= 15) {
        rating = "Ganz gut! 🤓 Da geht aber noch was für die Umwelt.";
    } else {
        rating = "Klimakiller! 🚗 Deine Bilanz ist ausbaufähig.";
    }

    finalScoreDisplay.innerText = rating;
    scoreTextDisplay.innerText = rating;
}

// ============================================================
// 6. HILFSFUNKTION: AQI-BESCHREIBUNG
// Gibt eine Beschreibung für den Luftqualitätswert zurück
// ============================================================
function getAqiDescription(aqi) {
    if (aqi <= 20) return "Sehr gut 🟢";
    if (aqi <= 40) return "Gut 🟢";
    if (aqi <= 60) return "Mäßig 🟡";
    if (aqi <= 80) return "Schlecht 🟠";
    if (aqi <= 100) return "Sehr schlecht 🔴";
    return "Extrem schlecht 🟣";
}

// ============================================================
// 7. API-ABFRAGEN (nur auf ergebnisse.html)
// ============================================================
const searchCityBtn = document.getElementById("search-city-btn");
const cityInput = document.getElementById("city-input");
const filterBtn = document.getElementById("filter-btn");

if (searchCityBtn) {
    searchCityBtn.onclick = () => {
        const city = cityInput.value.trim();

        if (city === "") {
            alert("Bitte gib einen Stadtnamen ein.");
            return;
        }

        // --- FETCH 1: Geocoding (Stadt → Koordinaten) ---
        const geocodingUrl = `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`;

        fetch(geocodingUrl)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    alert("Stadt nicht gefunden. Bitte versuche es erneut.");
                    return;
                }

                const lat = data[0].lat;
                const lon = data[0].lon;
                console.log(`Koordinaten für ${city}: Lat ${lat}, Lon ${lon}`);

                // --- FETCH 2: Wetter + Solarstrahlung ---
                const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=shortwave_radiation`;

                fetch(weatherUrl)
                    .then(response => response.json())
                    .then(data => {
                        const currentWeather = data.current_weather;

                        // Globale Arrays befüllen (damit der Filter-Button darauf zugreifen kann)
                        radiationData = data.hourly.shortwave_radiation;
                        timesData = data.hourly.time;

                        // Temperatur und Wind anzeigen
                        const weatherResults = document.getElementById("weather-results");
                        weatherResults.innerHTML = `
                            <div class="white-card">
                                <h3>🌡️ Temperatur</h3>
                                <p>${currentWeather.temperature}°C</p>
                            </div>
                            <div class="white-card">
                                <h3>💨 Wind</h3>
                                <p>${currentWeather.windspeed} km/h</p>
                            </div>
                        `;

                        // Solarstrahlung als Liste anzeigen (alle 24 Stunden)
                        // id="radiation-list" damit der Filter nur diesen Teil ersetzen kann
                        let listHTML = `<h3>☀️ Solarstrahlung heute (${city})</h3><div class="radiation-grid" id="radiation-list">`;

                        for (let i = 0; i < 24; i++) {
                            const hour = timesData[i].split("T")[1]; // Nur Uhrzeit, nicht Datum
                            listHTML += `
                                <div class="radiation-card">
                                    <span class="hour">${hour}</span>
                                    <span class="value">${radiationData[i]} W/m²</span>
                                </div>
                            `;
                        }

                        listHTML += `</div>`;
                        weatherResults.innerHTML += listHTML;
                    })
                    .catch(error => {
                        console.error("Fehler bei der Wetteranfrage:", error);
                        alert("Es gab ein Problem bei der Wetterabfrage.");
                    });

                // --- FETCH 3: Luftqualität ---
                const airQualityUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi`;

                fetch(airQualityUrl)
                    .then(response => response.json())
                    .then(airData => {
                        const aqi = airData.current.european_aqi;
                        document.getElementById("weather-results").innerHTML += `
                            <div class="white-card">
                                <h3>🌫️ Luftqualität (AQI)</h3>
                                <p>${aqi} - ${getAqiDescription(aqi)}</p>
                            </div>
                        `;
                    })
                    .catch(error => {
                        console.error("Fehler bei der Luftqualitätsabfrage:", error);
                        alert("Es gab ein Problem bei der Luftqualitätsabfrage.");
                    });
            })
            .catch(error => {
                console.error("Fehler bei der Geocoding-Anfrage:", error);
                alert("Es gab ein Problem bei der Suche.");
            });
    };
}

// ============================================================
// 8. FILTER-BUTTON
// Zeigt nur Stunden mit Solarstrahlung >= Mindestwert
// ============================================================
if (filterBtn) {
    filterBtn.onclick = () => {
        const minValue = parseInt(document.getElementById("filter-input").value);

        // Nur die Cards im radiation-list ersetzen, nicht die ganze Seite
        let filterHTML = "";

        for (let i = 0; i < 24; i++) {
            if (radiationData[i] >= minValue) {
                filterHTML += `
                    <div class="radiation-card">
                        <span class="hour">${timesData[i].split("T")[1]}</span>
                        <span class="value">${radiationData[i]} W/m²</span>
                    </div>
                `;
            }
        }

        // Nur den Inhalt von radiation-list ersetzen
        document.getElementById("radiation-list").innerHTML = filterHTML;
    };
}

// ============================================================
// INITIALISIERUNG
// Diese Funktionen werden sofort beim Laden der Seite aufgerufen
// ============================================================ // Quiz starten (macht nichts wenn nicht auf quiz.html)
displayResult();   // Ergebnis anzeigen (macht nichts wenn nicht auf ergebnisse.html)
