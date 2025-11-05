const texte = [
    "Hallo, Welt!",
    "Willkommen auf meiner Seite.",
    "Über Tiere!",
    "Wir würden gerne Kakao verkaufen",
    "und mit dem ganzen Geld würden wir dann",
    "für die Tiere spenden" 
];

let index = 0; // Welcher Text
let charIndex = 0; // Welcher Buchstabe
let deleting = false; // Schreiben oder löschen
const speed = 100; // Schreibgeschwindigkeit
const pause = 20000; // Pause nach Schreiben (in ms)

const typewriter = document.getElementById("typewriter");

function typeLoop() {
    const currentText = texte[index];

    if (!deleting) {
        // Schreiben
        typewriter.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            // Wenn fertig geschrieben, kurz warten, dann löschen
            deleting = true;
            setTimeout(typeLoop, pause);
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

