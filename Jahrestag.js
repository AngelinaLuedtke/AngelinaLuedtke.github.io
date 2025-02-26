function updateCountdown() {
    const targetDate = new Date('2025-02-27T00:00:00'); // Dein Ziel-Datum
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `Noch ${days} Tage, ${hours} Stunden, ${minutes} Minuten, ${seconds} Sekunden bis zum 27. Februar 2025.`;
}

// Alle 1000 Millisekunden (1 Sekunde) wird der Countdown aktualisiert
setInterval(updateCountdown, 1000);




function showCodeMessage() {
    // Anzeigen des Inhalts
    const codeMessage = document.getElementById("code-message-content");
    codeMessage.style.display = 'block';

    // Code-Zeilen
    const codeLines = [
        'console.log("Du bist mein Herz. â¤ï¸");',
        'let love = true;',
        'if (love) {',
        '    console.log("Ich liebe dich! ðŸ’–");',
        '}',
        'setTimeout(() => {',
        '    console.log("FÃ¼r immer! â¤ï¸");',
        '}, 2000);'
    ];

    // Zeilen einzeln anzeigen
    let lineIndex = 0;

    function typeLine() {
        // Jede Zeile nacheinander schreiben
        if (lineIndex < codeLines.length) {
            let currentLine = codeLines[lineIndex];
            let charIndex = 0;
            let currentElement = document.getElementById('line-' + (lineIndex + 1));

            // Leere Zeile lÃ¶schen
            currentElement.innerHTML = '';

            function typeChar() {
                currentElement.innerHTML += currentLine.charAt(charIndex);
                charIndex++;

                if (charIndex < currentLine.length) {
                    setTimeout(typeChar, 100);  // Geschwindigkeit der Buchstaben
                } else {
                    lineIndex++;
                    setTimeout(typeLine, 500);  // VerzÃ¶gerung zwischen den Zeilen
                }
            }

            typeChar();  // Startet d