//Quiz logik (fragen antworten weiter zurück)

const questions = [
    {
        id: 1,
        question: "Wie oft nutzt du öffentliche Verkehrsmittel?",
        answers: [
            { text: "Täglich", points: 10 },
            { text: "Ab und zu", points: 5 },
            { text: "Fast nie", points: 0 }
        ]
    },
    {
        id: 2,
        question: "Wie ernährst du dich hauptsächlich?",
        answers: [
            { text: "Vegan", points: 10 },
            { text: "Wenig Fleisch", points: 5 },
            { text: "Viel Fleisch", points: 0 }
        ]
    },
    {
        id: 3,
        question: "Trennst du deinen Müll konsequent?",
        answers: [
            { text: "Ja, immer", points: 10 },
            { text: "Ab und zu", points: 5 },
            { text: "Fast nie", points: 0 }
        ]
    },
    {
        id: 4,
        question: "Wie oft kaufst du neue Kleidung?",
        answers: [
            { text: "Sehr oft", points: 0 },
            { text: "Manchmal", points: 5 },
            { text: "Selten", points: 10 }
        ]
    }
];



//2. Status Variablen
let currentQuestionIndex = 0;
let totalscore = 0;
let userAnswers = []; //Punkte pro frage werden hier gespeichert

//3. Elemente aus dem HTML holen (DOM - Auswahl)

const questionTitel = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

//4. Funktion zum Anzeigen der aktuellen Frage
function displayQuestion() {
    //Falls wir aud der Quiz-Seite sind
    if (!questionText) return;

    const currentQuestion = questions[currentQuestionIndex];

    //Titel und text
    questionTitel.innerText = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
    questionText.innerHTML = currentQuestion.question;

    //Antworten leeren und neu aufbauen

    optionsContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.className = 'btn-nav';
        button.style.display = "block";
        button.style.width = "100%";
        button.style.margin = "5px 0";

        button.onclick = () => {
            userAnswers[currentQuestionIndex] = answer.points; // Punktzahl merken
            console.log("Gewählte Punkte:", answer.points);
            // Optisches Feedback (alle anderen Buttons zurücksetzen, diesen markieren)
            Array.from(optionsContainer.children).forEach(btn => btn.style.background = "");
            button.style.background = "#40916c";
        };
        optionsContainer.appendChild(button);
    });

    //Buttons aktivieren/deaktivieren
    prevBtn.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerText = "Zum Ergebnis"
    } else {
        nextBtn.innerText = "Weiter";

    }
}

//5. Event Listener für die Navigation
if (nextBtn) {
    nextBtn.onclick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                displayQuestion();
            } else {
                //Quiz fertig
                finishQuiz();
            }
        };
    }

    if (prevBtn) {
        prevBtn.onclick = () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion();
            }
        };
    }

    //Quiz abschließen und Local storage
    function finishQuiz() {
        const finalScore = userAnswers.reduce((a, b) => (a || 0) + (b || 0), 0);
        localStorage.setItem("ecoQuizScore", finalScore);
        window.location.href = "result.html";

    }
    displayQuestion();
}