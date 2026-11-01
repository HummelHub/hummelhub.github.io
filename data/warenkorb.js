```javascript
// ========================================
// WARENKORB
// ========================================

const WARENKORB_SPEICHERUNG = "ruhrpott_survivors_warenkorb";


// ========================================
// WARENKORB LADEN
// ========================================

function warenkorbLaden() {
    const gespeicherterWarenkorb = localStorage.getItem(
        WARENKORB_SPEICHERUNG
    );

    if (!gespeicherterWarenkorb) {
        return [];
    }

    try {
        return JSON.parse(gespeicherterWarenkorb);
    } catch (fehler) {
        console.error(
            "Der gespeicherte Warenkorb konnte nicht gelesen werden.",
            fehler
        );

        return [];
    }
}


// ========================================
// WARENKORB SPEICHERN
// ========================================

function warenkorbSpeichern(warenkorb) {
    localStorage.setItem(
        WARENKORB_SPEICHERUNG,
        JSON.stringify(warenkorb)
    );
}
```
