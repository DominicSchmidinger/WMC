document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. TABS WECHSELN (NAVIGATION)
    // ==========================================

    // Wir holen alle Navigationselemente (Sidebar & Bottom-Nav)
    const navTabs = document.querySelectorAll(".js-sidebar-tab, .js-nav-tab");
    const views = document.querySelectorAll(".view");

    navTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetViewId = tab.getAttribute("data-view");

            // 1. Alle Ansichten (Views) verstecken
            views.forEach(view => view.classList.remove("active"));

            // 2. Die gewünschte Ansicht anzeigen
            const targetView = document.getElementById(targetViewId);
            if (targetView) {
                targetView.classList.add("active");
            }

            // 3. Active-Klasse bei ALLEN Tabs zurücksetzen
            navTabs.forEach(t => t.classList.remove("active"));

            // 4. Active-Klasse für die geklickte Ansicht überall setzen (Sidebar + Bottom-Nav)
            document.querySelectorAll(`[data-view="${targetViewId}"]`).forEach(activeTab => {
                activeTab.classList.add("active");
            });
        });
    });

    // ==========================================
    // 2. STUNDEN-DETAILS ANZEIGEN (MODAL)
    // ==========================================

    // Wir holen alle Stundenkarten aus dem Stundenplan
    const lessons = document.querySelectorAll(".js-lesson");

    lessons.forEach(lesson => {
        lesson.addEventListener("click", (e) => {
            // Verhindert eventuelle Konflikte beim Klicken
            e.stopPropagation();

            // Daten aus der geklickten Karte auslesen
            const fach = lesson.querySelector(".lc-subj")?.textContent || "Kein Fach";
            const lehrer = lesson.querySelector(".lc-teacher")?.textContent || "Unbekannt";
            const raum = lesson.querySelector(".lc-room")?.textContent || "Kein Raum";

            // Beispielhafter Text für Hausaufgaben. 
            // (Später kannst du das dynamisch mit echten Daten verknüpfen!)
            let hausaufgabeText = "Keine Hausaufgaben für diese Stunde.";
            if (fach === "Mathematik") {
                hausaufgabeText = "Seite 47–49, Aufgaben 3–7 (bis Mo, 09.03.)";
            } else if (fach === "Deutsch") {
                hausaufgabeText = "Aufsatz überarbeiten (bis Di, 10.03.)";
            } else if (fach === "Physik") {
                hausaufgabeText = "Protokoll Experiment 3 (bis Mi, 11.03.)";
            }

            // Details im Browser-Popup (alert) anzeigen
            // (Tipp: Ersetze das später durch ein schönes HTML-Modal-Fenster!)
            alert(
                `📌 STUNDEN-DETAILS\n` +
                `-----------------------\n` +
                `📖 Fach: ${fach}\n` +
                `👨‍🏫 Lehrer: ${lehrer}\n` +
                `🚪 Raum: ${raum}\n\n` +
                `📝 Hausaufgabe:\n${hausaufgabeText}`
            );
        });
    });

});