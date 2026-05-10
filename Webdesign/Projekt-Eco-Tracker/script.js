//Quiz logik (fragen antworten weiter zurück)

const questions = [
    {
        id: 1
        question: "Wie oft nutzt du öffentliche Verkehrsmittel?",
        answers:[
            {text: "Täglich", points: 10},
            {text: "Ab und zu", points: 5},
            {text: "Fast nie", points: 0}
        ]
    },
    {
        id: 2
        question: "Wie ernährst du dich hauptsächlich?",
        answers:[
            {text: "Vegan", points: 10},
            {text: "Wenig Fleisch", points: 5},
            {text: "Viel Fleisch", points: 0}
        ]
    },
    {
        id: 3
        question: "Trennst du deinen Müll konsequent?",
        answers:[
            {text: "Ja, immer", points: 10},
            {text: "Ab und zu", points: 5},
            {text: "Fast nie", points: 0}
        ]
    },
    {
        id: 4
        question: "Wie oft kaufst du neue Kleidung?",
        answers:[
            {text: "Sehr oft", points: 0},
            {text: "Manchmal", points: 5},
            {text: "Selten", points: 10}
        ]
    }
];

//2. Status Variablen
let currentQuestionIndex = 0;
let totalscore = 0;
let userAnswers = []; //Punkte pro frage werden hier gespeichert

//3. Elemente aus dem HTML holen (DOM - Auswahl)

const questionTitel = document.getElementById("question-titel");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

//4. Funktion zum Anzeigen der aktuellen Frage
function displayQuestion() {
    //Falls wir aud der Quiz-Seite sind
    if(!questionText) return;

    const currentQuestion = questions[currentQuestionIndex];

    //Titel und text
}