document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    if (!loginForm) {
        console.error("Formular wurde nicht gefunden!");
        return;
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stoppt das Neuladen der Seite

        const userField = document.getElementById('username');
        const passField = document.getElementById('password');

        if (!userField || !passField) {
            alert("Fehler: Die Eingabefelder wurden im HTML nicht gefunden (IDs prüfen!)");
            return;
        }

        const username = userField.value.trim();
        const password = passField.value;
        const specialCharRegex = /[!@#$%^&*(),.?\":{}|<>]/;

        // 1. ÜBERPRÜFUNG: Passt der Name? (Darf nicht leer sein)
        if (username === "") {
            alert("Anmeldung fehlgeschlagen: Bitte gib einen Benutzernamen ein!");
            return;
        }

        // 2. ÜBERPRÜFUNG: Passt das Passwort? 
        // Schaut nach der Länge (mindestens 5 Zeichen) und ob ein Sonderzeichen drin ist
        if (password.length < 5 || !specialCharRegex.test(password)) {
            alert("Anmeldung fehlgeschlagen: Das Passwort oder der Name passt nicht! (Hinweis: Passwort braucht mindestens 5 Zeichen und ein Sonderzeichen wie ! oder ?)");
            return;
        }

        // Wenn Name und Passwort passen, wird dieser Teil ausgeführt:
        // 1. Erfolg melden
        alert("Anmeldung erfolgreich!");

        // 2. Den Status im Browser speichern
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', username);

        // 3. WEITERLEITUNG zur mainside.html
        window.location.href = "mainside.html";
    });
});