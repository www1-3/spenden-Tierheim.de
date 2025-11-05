const texte = [
    { text: "Hallo, Welt!", pause: 5 },  // 5 Sekunden Pause
    { text: "Willkommen auf meiner Seite.", pause: 3 },  // 5 Sekunden Pause
    { text: "Über Tiere!", pause: 3 },  // 3 Sekunden Pause
    { text: "Wir würden gerne Kakao verkaufen", pause: 5 },  // 3 Sekunden Pause
    { text: "und mit dem ganzen Geld würden wir dann", pause: 6 },  // 4 Sekunden Pause
    { text: "für die Tiere spenden", pause: 5 }  // 2 Sekunden Pause
];

let index = 0; // Welcher Text
let charIndex = 0; // Welcher Buchstabe
let deleting = false; // Schreiben oder löschen
const speed = 100; // Schreibgeschwindigkeit (für alle Sätze gleich)

const typewriter = document.getElementById("typewriter");

function typeLoop() {
    const currentText = texte[index].text; // Text des aktuellen Satzes
    const currentPause = texte[index].pause * 1000; // Pause nach dem Satz in Millisekunden

    if (!deleting) {
        // Schreiben
        typewriter.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            // Wenn fertig geschrieben, Pause und dann löschen
            deleting = true;
            setTimeout(typeLoop, currentPause); // Pause für den aktuellen Satz
            return;
        }
    } else {
        // Löschen
        typewriter.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            // Nächster Text
            deleting = false;
            index = (index + 1) % texte.length;
        }
    }

    // Geschwindigkeit anpassen
    const delay = deleting ? speed / 2 : speed;
    setTimeout(typeLoop, delay);
}

// Starten
typeLoop();

