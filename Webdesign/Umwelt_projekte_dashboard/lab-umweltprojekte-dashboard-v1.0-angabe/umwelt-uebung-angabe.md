# Umweltprojekte Dashboard

Ziel dieser Übung ist ein Dashboard für Umweltprojekte zu bauen.

Im Screenshot siehst du die fertige Lösung welche folgende Funktionen erfüllen soll:

1. Neue Umweltprojekte hinzufügen
2. Projekte Anzeigen
3. Projekte Filtern
4. Projekte LÖschen
5. Statistiken berechnen und anzeigen
6. Projekte exportieren mittels JSON Format


### Lernziele

- **DOM-Manipulation**: Elemente selektieren, Inhalte ändern, dynamisch erstellen
- **Event-Handling**: Click-, Change- und Input-Events verarbeiten
- **Arrays & Objekte**: Arbeiten mit Objekten in Arrays
- **Klassen-Methoden**: Eigene Funktionen in Klassen definieren und nutzen
- **Array-Methoden**: 
- **JSON**: Objekte in JSON konvertieren und umgekehrt
- **Benutzerinteraktion**: Formulare, Buttons, Bestätigungsdialoge


![Fertiger Umweltprojekte Tracker](/img/angabe-assets/umweltprojekte-tracker.png)


Ihr müsst nicht von null auf beginnen sondern bekommt schon ein so gut wie fertiges HTML der Seite.
Eure **Aufgabe**  ist es das HTML-Skelett funktional zu machen durch eine ganze Reihe an Einzelschritten:

#### 1. Klassen-Definition:
Definiere eine Klasse UmweltProjekt mit den Attributen `name, typ, co2Einsparung` sowie folgenden Methoden:

##### `berechneUmweltPunkte()`
Berechnet einen Umwelt-Score basierend auf CO₂-Einsparung und Projekttyp. Verschiedene Typen haben unterschiedliche Gewichtungen:
- Verkehr: 2.0x
- Aufforstung: 1.5x
- Erneuerbare Energie: 1.3x
- Gewässerschutz: 1.2x
- Recycling: 1.0x

##### `co2InBaeume()`
Rechnet CO₂-Einsparung in Baum-Äquivalente um. Basiert auf der Tatsache, dass ein Baum ca. 20kg CO₂ pro Jahr absorbiert.

##### `istHochImpakt()`
Gibt `true` zurück wenn das Projekt ≥ 3000 kg CO₂ einspart. Nützlich für bedingte Darstellung.

##### `getImpaktKlasse()`
Gibt CSS-Klasse für visuelle Hervorhebung zurück:
- ≥ 4000 kg CO2 Einsparung: Grüner Rand (hoher Impact) -> css: `border-success border-3`
- ≥ 2000 kg CO2 Einsparung: Gelber Rand (mittlerer Impact) -> css: `border-warning border-2`
- < 2000 kg CO2 Einsparung: Kein Rand

#### 2. Array-Speicherung
Speichere folgende Beispiel-Projekte in einem Array `umweltProjekte` dass du später für viele Funktionalitäten brauchst:

| Name          | Typ           | C02 Einsparung  |
| ------------- |:-------------:| -----:|
| Stadtwald Aufforstung      | Aufforstung | 5000 |
| Solar-Initiative Schule      | Erneuerbare Energie      |   3000 |
| Donau Reinigungsaktion | Gewässerschutz      |    1000 |
| Fahrrad-Schulbus | Verkehr | 2000

#### 3. Neues UmweltProjekt hinzufügen: 
Beim klick auf den "Projekt hinzufügen" Button sollen die Formular-Eingaben benutzt werden um ein neues Objekt vom Typ UmweltProjekt am Ende des Arrays `umweltProjekte` anzuzufügen.

**Tip:** 
- Du kannst das `value` Attribut von HTML Input Elementen zum auslesen des vom User eingegebenen Wertes benutzen: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/value
- [Event Listener] (https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
- [List of HTML DOM Events] (https://www.w3schools.com/jsref/dom_obj_event.asp)

#### 4. Umweltprojekte anzeigen: 

Du kannst folgenden code dafür verwenden. Dieser Erstellt eine Bootstrap card mit allen notwendigen Informationen und fügt diese dann einem div-Container als innerHTML hinzu.

```  
    const container = document.getElementById("projekt-liste");
    container.innerHTML = "";

    const baeume = projekt.co2InBaeume();
    const umweltPunkte = projekt.berechneUmweltPunkte();
    const impaktBadge = projekt.istHochImpakt()
                ? '<span class="badge bg-success">Hoher Impact</span>'
                : '';
    
    const projektCard = `
        <div class="col-md-6 col-lg-4 mb-3">
          <div class="card h-100 shadow-sm ${projekt.getImpaktKlasse()}">
            <div class="card-body">
              <h5 class="card-title">
                <i class="fas fa-seedling text-success"></i> ${projekt.name}
                ${impaktBadge}
              </h5>
              <p class="card-text">
                <strong>Typ:</strong> ${projekt.typ}<br>
                <strong>CO₂-Einsparung:</strong> ${projekt.co2Einsparung} kg/Jahr<br>
                <strong><i class="fas fa-tree"></i> Baum-Äquivalent:</strong> ${baeume} Bäume<br>
                <strong><i class="fas fa-award"></i> Umweltpunkte:</strong> ${umweltPunkte}
              </p>
              <button class="btn btn-sm btn-danger btn-delete" data-index="${index}">
                <i class="fas fa-trash"></i> Löschen
              </button>
            </div>
          </div>
        </div>
      `;

            container.innerHTML += projektCard;
        });
```

#### 5. Ein Umweltprojekt löschen:
Jedes Card-Element das ein Umweltprojekt in der Anzeige visualisiert hat einen Löschen button. Mache diesen funktional, sodass beim Click auf den Button `Löschen` das Umweltprojekt aus dem Array entfernt wird und auch die Anzeige aktualisiert wird

**Tip:** Nutze custom data-* Attribute (siehe: https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes) um die einzelnen 'Löschen'-Buttons zu identifizieren um jenes Object des Projekte-Arrays zu löschen, dass angeklickt wurde ("click"-Event)

Um Elemente aus einem Array zu löschen ist die `splice()` Methode sehr hilfreich: https://www.w3schools.com/js/js_array_methods.asp#mark_splice

#### 6. Anzeige der Umweltprojekte filtern:
Nutzer sollen die Möglichkeit haben, die angezeigten Projekte zu filtern, also nur jene Projekte anzuzeigen die den Filter-Kriteren entsprechen. 
Dazu soll das Dropdownfeld zur Auswahl des Projekt-Typs (Attribut `typ` der UmweltProjekt Klasse) sowie das Text-Eingabe-Feld (zum Suchen via Namen) verwendet werden.


Benutze das `change`-Event um über Änderungen der Filter-Input-Felder benachrichtigt zu werden. https://www.w3schools.com/jsref/dom_obj_event.asp

Benutze eine passende String-Vergleichs-Methode um nach entsprechenden Projekten mit dem Namen (auch teilen davon) https://www.w3schools.com/js/js_string_search.asp
Achtung auf Groß/Klein-Schreibung (`toLowerCase()`)

#### 7. Statistiken berechnen
Berechne folgende Statistiken für den entsprechenden Bereich auf der Website:
* Anzahl der Projekte zählen
* CO₂-Einsparung summieren
* Häufigsten Typ ermitteln (tip: let typZaehler = {}; typZaehler[projekt.typ]++)

Die Ergebnisse sollen auf der Website sichtbar werden.

#### 8. JSON Export
Der Button `JSON Export` soll einen JSON String aus dem `umweltProjekte` Array erzeugen und diesen im `JSON Ausgabe` Bereich entsprechend dem User zeigen, damit dieser die Daten unter umständen archivieren kann.

**Tip:** [JSON Stringify](https://www.w3schools.com/js/js_json_stringify.asp)

#### BONUS 1: 
Gib dem Nutzer auch die Möglichkeit ein exportiertes JSON wieder einzulesen und so den Datenstand wiederherzustellen(via Input-Feld und Button "import JSON")

#### Bonus 2:
Ändere das Icon bei der Anzeige eines Projektes je nach Typ.
Für das Icon wurden font-awesome icons verwendet (siehe: https://fontawesome.com/v4/icons/)