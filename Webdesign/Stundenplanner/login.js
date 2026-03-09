document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    
    if(!loginForm) {
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

        const username = userField.value;
        const password = passField.value;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        // Validierung
        if (password.length < 5) {
            alert("Passwort zu kurz! (Min. 5 Zeichen)");
        } 
        else if (!specialCharRegex.test(password)) {
            alert("Sonderzeichen fehlt! (z.B. ! oder ?)");
        } 
       else {
            // 1. Erfolg melden
            alert("Anmeldung erfolgreich!");

            // 2. Den Status speichern (Schlüssel: 'isLoggedIn', Wert: 'true')
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', username); // Optional: Namen merken

            // 3. Weiterleitung
            window.location.href = "index.html"; 
        }
    });
});