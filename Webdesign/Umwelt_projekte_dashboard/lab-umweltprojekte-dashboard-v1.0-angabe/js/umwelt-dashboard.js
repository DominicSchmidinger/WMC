// ******************************************************
// Umweltprojekte Dashboard - Musterlösung
// ******************************************************

window.onload = function () {

    console.log("Happy Coding!");

    // =============================================
    // Aufgabe 1: Klassen-Definition
    // =============================================
    class UmweltProjekt {
        constructor(name, typ, co2Einsparung) {
            this.name = name;
            this.typ = typ;
            this.co2Einsparung = co2Einsparung;
        }

        // Berechnet Umwelt-Score basierend auf CO₂-Einsparung und Projekttyp
        berechneUmweltPunkte() {
            const gewichtungen = {
                "Verkehr": 2.0,
                "Aufforstung": 1.5,
                "Erneuerbare Energie": 1.3,
                "Gewässerschutz": 1.2,
                "Recycling": 1.0
            };
            const faktor = gewichtungen[this.typ] || 1.0;
            return Math.round(this.co2Einsparung * faktor);
        }

        // Rechnet CO₂-Einsparung in Baum-Äquivalente um (1 Baum = 20kg CO₂/Jahr)
        co2InBaeume() {
            return Math.round(this.co2Einsparung / 20);
        }

        // Gibt true zurück wenn das Projekt ≥ 3000 kg CO₂ einspart
        istHochImpakt() {
            return this.co2Einsparung >= 3000;
        }

        // Gibt CSS-Klasse für visuelle Hervorhebung zurück
        getImpaktKlasse() {
            if (this.co2Einsparung >= 4000) {
                return "border-success border-3";
            } else if (this.co2Einsparung >= 2000) {
                return "border-warning border-2";
            } else {
                return "";
            }
        }
    }

    // =============================================
    // Aufgabe 2: Array-Speicherung mit Beispielprojekten
    // =============================================
    let umweltProjekte = [
        new UmweltProjekt("Stadtwald Aufforstung", "Aufforstung", 5000),
        new UmweltProjekt("Solar-Initiative Schule", "Erneuerbare Energie", 3000),
        new UmweltProjekt("Donau Reinigungsaktion", "Gewässerschutz", 1000),
        new UmweltProjekt("Fahrrad-Schulbus", "Verkehr", 2000)
    ];

    // =============================================
    // Bonus 2: Icon je nach Projekttyp
    // =============================================
    function getTypIcon(typ) {
        const icons = {
            "Aufforstung": "fa-tree",
            "Recycling": "fa-recycle",
            "Erneuerbare Energie": "fa-sun",
            "Gewässerschutz": "fa-tint",
            "Verkehr": "fa-bicycle"
        };
        return icons[typ] || "fa-seedling";
    }

    // =============================================
    // Aufgabe 4: Umweltprojekte anzeigen
    // =============================================
    function zeigeProjekte(projekte) {
        const container = document.getElementById("projekt-liste");
        container.innerHTML = "";

        if (projekte.length === 0) {
            container.innerHTML = '<p class="text-muted">Keine Projekte gefunden.</p>';
            return;
        }

        projekte.forEach(function (projekt, index) {
            const baeume = projekt.co2InBaeume();
            const umweltPunkte = projekt.berechneUmweltPunkte();
            const impaktBadge = projekt.istHochImpakt()
                ? '<span class="badge bg-success ms-1">Hoher Impact</span>'
                : '';

            // Bonus 2: Typ-spezifisches Icon
            const icon = getTypIcon(projekt.typ);

            // Den echten Index im umweltProjekte-Array ermitteln (wichtig beim Filtern!)
            const echterIndex = umweltProjekte.indexOf(projekt);

            const projektCard = `
                <div class="col-md-6 col-lg-4 mb-3">
                    <div class="card h-100 shadow-sm ${projekt.getImpaktKlasse()}">
                        <div class="card-body">
                            <h5 class="card-title">
                                <i class="fas ${icon} text-success"></i> ${projekt.name}
                                ${impaktBadge}
                            </h5>
                            <p class="card-text">
                                <strong>Typ:</strong> ${projekt.typ}<br>
                                <strong>CO₂-Einsparung:</strong> ${projekt.co2Einsparung} kg/Jahr<br>
                                <strong><i class="fas fa-tree"></i> Baum-Äquivalent:</strong> ${baeume} Bäume<br>
                                <strong><i class="fas fa-award"></i> Umweltpunkte:</strong> ${umweltPunkte}
                            </p>
                            <button class="btn btn-sm btn-danger btn-delete" data-index="${echterIndex}">
                                <i class="fas fa-trash"></i> Löschen
                            </button>
                        </div>
                    </div>
                </div>
            `;

            container.innerHTML += projektCard;
        });

        // Aufgabe 5: Löschen-Buttons mit Event Listener versehen
        // (nach dem Rendern, da die Buttons neu erstellt wurden)
        document.querySelectorAll(".btn-delete").forEach(function (button) {
            button.addEventListener("click", function () {
                const index = parseInt(this.getAttribute("data-index"));
                umweltProjekte.splice(index, 1);
                aktualisiereAnzeige();
            });
        });
    }

    // =============================================
    // Aufgabe 7: Statistiken berechnen und anzeigen
    // =============================================
    function aktualisiereStatistiken() {
        // Anzahl der Projekte
        document.getElementById("stat-anzahl").textContent = umweltProjekte.length;

        // CO₂-Einsparung summieren
        const gesamtCO2 = umweltProjekte.reduce(function (summe, p) {
            return summe + p.co2Einsparung;
        }, 0);
        document.getElementById("stat-co2").textContent = gesamtCO2.toLocaleString("de-AT");

        // Häufigsten Typ ermitteln
        let typZaehler = {};
        umweltProjekte.forEach(function (projekt) {
            typZaehler[projekt.typ] = (typZaehler[projekt.typ] || 0) + 1;
        });

        let haeufigsterTyp = "-";
        let maxAnzahl = 0;
        for (let typ in typZaehler) {
            if (typZaehler[typ] > maxAnzahl) {
                maxAnzahl = typZaehler[typ];
                haeufigsterTyp = typ;
            }
        }
        document.getElementById("stat-typ").textContent = haeufigsterTyp;
    }

    // Hilfsfunktion: Anzeige + Statistiken gemeinsam aktualisieren
    function aktualisiereAnzeige() {
        const gefilterteProjekte = getGefilterteProjekte();
        zeigeProjekte(gefilterteProjekte);
        aktualisiereStatistiken();
    }

    // =============================================
    // Aufgabe 6: Filtern - aktuelle Filterwerte auslesen
    // =============================================
    function getGefilterteProjekte() {
        const filterTyp = document.getElementById("filter-typ").value;
        const searchName = document.getElementById("search-name").value.toLowerCase();

        return umweltProjekte.filter(function (projekt) {
            const typPasst = filterTyp === "alle" || projekt.typ === filterTyp;
            const namePasst = projekt.name.toLowerCase().includes(searchName);
            return typPasst && namePasst;
        });
    }

    // Filter-Events registrieren
    document.getElementById("filter-typ").addEventListener("change", aktualisiereAnzeige);
    document.getElementById("search-name").addEventListener("input", aktualisiereAnzeige);

    // =============================================
    // Aufgabe 3: Neues Projekt hinzufügen
    // =============================================
    document.getElementById("btn-add-projekt").addEventListener("click", function () {
        const name = document.getElementById("projekt-name").value.trim();
        const typ = document.getElementById("projekt-typ").value;
        const co2 = parseInt(document.getElementById("projekt-co2").value);

        // Validierung
        if (!name || !typ || isNaN(co2) || co2 <= 0) {
            alert("Bitte alle Felder korrekt ausfüllen!");
            return;
        }

        const neuesProjekt = new UmweltProjekt(name, typ, co2);
        umweltProjekte.push(neuesProjekt);

        // Eingabefelder zurücksetzen
        document.getElementById("projekt-name").value = "";
        document.getElementById("projekt-typ").value = "";
        document.getElementById("projekt-co2").value = "";

        aktualisiereAnzeige();
    });

    // =============================================
    // Aufgabe 8: JSON Export
    // =============================================
    document.getElementById("btn-export-json").addEventListener("click", function () {
        const jsonString = JSON.stringify(umweltProjekte, null, 2);
        document.getElementById("json-output").textContent = jsonString;
    });

    // =============================================
    // Bonus 1: JSON Import
    // =============================================
    // Import-Bereich ins HTML einfügen
    const jsonKarte = document.querySelector(".card-header.bg-dark").closest(".card");
    const importBereich = document.createElement("div");
    importBereich.className = "mt-3";
    importBereich.innerHTML = `
        <div class="input-group">
            <textarea id="json-import-input" class="form-control" rows="4"
                placeholder='JSON hier einfügen, z.B. [{"name":"Test","typ":"Recycling","co2Einsparung":500}]'></textarea>
        </div>
        <button class="btn btn-secondary mt-2" id="btn-import-json">
            <i class="fas fa-upload"></i> JSON importieren
        </button>
    `;
    jsonKarte.querySelector(".card-body").appendChild(importBereich);

    document.getElementById("btn-import-json").addEventListener("click", function () {
        try {
            const jsonText = document.getElementById("json-import-input").value.trim();
            const importierteDaten = JSON.parse(jsonText);

            if (!Array.isArray(importierteDaten)) {
                alert("Ungültiges Format: Es wird ein JSON-Array erwartet.");
                return;
            }

            // UmweltProjekt-Objekte aus den importierten Daten erstellen
            umweltProjekte = importierteDaten.map(function (d) {
                return new UmweltProjekt(d.name, d.typ, d.co2Einsparung);
            });

            document.getElementById("json-import-input").value = "";
            aktualisiereAnzeige();
            alert("Import erfolgreich! " + umweltProjekte.length + " Projekte geladen.");
        } catch (e) {
            alert("Fehler beim Import: Ungültiges JSON-Format.\n" + e.message);
        }
    });

    // =============================================
    // Initialisierung
    // =============================================
    aktualisiereAnzeige();

};