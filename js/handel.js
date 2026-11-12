/* =====================================================
   HUMMELHUB – HANDEL
   Karten, Detailansicht und Bestellformular
   ===================================================== */

/* =====================================================
       KREATUREN-DATEN
       Preise, Level, Traits und Farbvarianten werden hier gepflegt.
       Zuchtstatus: Aktiv, Pausiert, Abgeschlossen oder Abgebrochen.
       geschlecht: "wahl" zeigt Male/Female; "Neutral" zeigt keine Auswahl.
       ===================================================== */




    const kreaturen = window.HUMMELHUB_KREATUREN || {};

    /* =====================================================
       ELEMENTE
       ===================================================== */

    const kreaturenGrid = document.getElementById("kreaturen-grid");
    const detailbereich = document.getElementById("kreatur-details");
    const schliessenButton = document.getElementById("details-schliessen");

    const detailsName = document.getElementById("details-name");
    const detailsBeschreibung = document.getElementById("details-beschreibung");
    const detailsBild = document.getElementById("details-bild");
    const detailsLevel = document.getElementById("details-level");
    const detailsNormalpreis = document.getElementById("details-normalpreis");
    const detailsKastriertpreis = document.getElementById("details-kastriertpreis");
    const detailsVarianten = document.getElementById("details-varianten");
    const detailsStatus = document.getElementById("details-status");
    const genderSelection = document.getElementById("gender-selection");
    const detailsZusatz = document.getElementById("details-zusatz");

    const variantSelection = document.getElementById("variant-selection");
    const selectedVariant = document.getElementById("selected-variant");

    const bestellformular = document.getElementById("bestellformular");

    let activeCreature = null;


    /* =====================================================
       KREATURENKARTEN ERSTELLEN
       ===================================================== */

    function createCards() {

        kreaturenGrid.innerHTML = "";

        if (!kreaturen || Object.keys(kreaturen).length === 0) {
            const hinweis = document.createElement("p");
            hinweis.textContent = "Der Kreaturenkatalog konnte nicht geladen werden.";
            kreaturenGrid.appendChild(hinweis);
            return;
        }

        Object.entries(kreaturen).forEach(([id, tier]) => {

            const karte = document.createElement("button");
            karte.type = "button";
            karte.className = "kreatur-card";
            karte.dataset.kreatur = id;
            karte.setAttribute("aria-expanded", "false");

            const bildbereich = document.createElement("div");
            bildbereich.className = "kreatur-bild";

            const bild = document.createElement("img");
            bild.src = tier.bild;
            bild.alt = tier.name;
            bild.loading = "lazy";

            const platzhalter = document.createElement("span");
            platzhalter.className = "bild-platzhalter";
            platzhalter.textContent = tier.name + " – Bild folgt";

            bild.addEventListener("load", () => {
                platzhalter.hidden = true;
            });

            bild.addEventListener("error", () => {
                bild.hidden = true;
                platzhalter.hidden = false;
            });

            bildbereich.append(bild, platzhalter);

            const inhalt = document.createElement("div");
            inhalt.className = "kreatur-inhalt";

            const name = document.createElement("h3");
            name.textContent = tier.name;

            const levelBereich = document.createElement("div");
            levelBereich.className = "kreatur-level";

            const levelLabel = document.createElement("span");
            levelLabel.textContent = "Basisverkaufslevel";

            const levelWert = document.createElement("strong");
            levelWert.textContent = tier.level;

            levelBereich.append(levelLabel, levelWert);

            const varianten = document.createElement("div");
            varianten.className = "kreatur-varianten";
            varianten.textContent =
                "Es gibt bereits " + tier.varianten.length + " Varianten davon.";

            const open = document.createElement("span");
            open.className = "kreatur-open";
            open.textContent = "Details ansehen →";

            inhalt.append(
                name,
                levelBereich,
                varianten,
                open
            );

            karte.append(bildbereich, inhalt);

            karte.addEventListener("click", () => {
                openDetails(id, karte);
            });

            kreaturenGrid.appendChild(karte);

        });

    }


    /* =====================================================
       FORMULAR RESET
       ===================================================== */

    function renderGender(genderMode) {
        genderSelection.innerHTML = "";

        // Fester Wert, z. B. "Neutral": keine Auswahl anzeigen.
        if (genderMode !== "wahl") {
            const fixedGender = document.createElement("span");
            fixedGender.textContent = genderMode || "Neutral";
            genderSelection.appendChild(fixedGender);
            document.getElementById("selection-gender").textContent =
                genderMode || "Neutral";
            return;
        }

        ["Male", "Female"].forEach((gender, index) => {
            const label = document.createElement("label");
            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = "geschlecht";
            radio.value = gender;
            radio.checked = index === 0;

            label.append(radio, document.createTextNode(gender));
            genderSelection.appendChild(label);
        });

        const currentGender = document.querySelector('input[name="geschlecht"]:checked');
        document.getElementById("selection-gender").textContent =
            currentGender ? currentGender.value : (activeCreature ? kreaturen[activeCreature].geschlecht : "Neutral");
    }

    function resetForm() {

        bestellformular.reset();
document.getElementById("selection-sattel")
            .textContent = "Nein";

        document.getElementById("selection-element")
            .textContent = "10 %";

        document.getElementById("selection-variante")
            .textContent = "Noch keine Wahl";

        document.getElementById("element-prozent")
            .textContent = "10 %";

        document.getElementById("selection-kreatur")
            .textContent = activeCreature
                ? kreaturen[activeCreature].name
                : "Noch keine Wahl";

    }


    /* =====================================================
       DETAILANSICHT ANSEHEN
       ===================================================== */

    function openDetails(kreaturId, karte) {

        const tier = kreaturen[kreaturId];
        karte = karte || kreaturenGrid.querySelector(`[data-kreatur="${kreaturId}"]`);

        if (!tier || !karte) {
            return;
        }

        if (activeCreature === kreaturId) {
            closeDetails();
            return;
        }

        activeCreature = kreaturId;

        document.querySelectorAll(".kreatur-card").forEach((element) => {
            element.classList.remove("aktiv");
            element.setAttribute("aria-expanded", "false");
        });

        karte.classList.add("aktiv");
        karte.setAttribute("aria-expanded", "true");

        detailsName.textContent = tier.name;
        detailsBeschreibung.textContent = tier.beschreibung;
        detailsBild.src = tier.bild;
        detailsBild.alt = tier.name;

        detailsLevel.textContent = tier.level;
        detailsNormalpreis.textContent = tier.preisNormal;
        detailsKastriertpreis.textContent = tier.preisKastriert;
        detailsVarianten.textContent = tier.varianten.length;
        detailsStatus.textContent = tier.zuchtstatus;
        detailsZusatz.textContent = tier.zusatz;

        resetForm();
        renderGender(tier.geschlecht);
        renderVariants(tier.varianten);

        detailbereich.classList.add("sichtbar");
        detailbereich.setAttribute("aria-hidden", "false");

        detailbereich.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    /* =====================================================
       DETAILANSICHT AUSBLENDEN
       ===================================================== */

    function closeDetails() {

        detailbereich.classList.remove("sichtbar");
        detailbereich.setAttribute("aria-hidden", "true");

        document.querySelectorAll(".kreatur-card").forEach((element) => {
            element.classList.remove("aktiv");
            element.setAttribute("aria-expanded", "false");
        });

        activeCreature = null;

        document.getElementById("selection-kreatur")
            .textContent = "Noch keine Wahl";

        document.getElementById("selection-variante")
            .textContent = "Noch keine Wahl";

    }


    schliessenButton.addEventListener(
        "click",
        closeDetails
    );


    /* =====================================================
       FARBVARIANTEN DARSTELLEN
       ===================================================== */

    function renderVariants(varianten) {

        variantSelection.innerHTML = "";
        selectedVariant.innerHTML = "";

        const standardOption = document.createElement("option");
        standardOption.value = "";
        standardOption.textContent = varianten.length
            ? "Bitte eine Variante festlegen"
            : "Keine Farbvarianten vorhanden";

        selectedVariant.appendChild(standardOption);

        if (!varianten || varianten.length === 0) {

            const hinweis = document.createElement("p");

            hinweis.textContent =
                "Bei dieser Kreatur wurden noch keine Farbvarianten hinterlegt.";

            variantSelection.appendChild(hinweis);

            selectedVariant.disabled = true;

            return;
        }

        selectedVariant.disabled = false;

        varianten.forEach((variante, index) => {

            const label = document.createElement("label");
            label.className = "variante-option";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "farbvariante";
            radio.value = variante.name;

            const farbenpunkte = document.createElement("span");
            farbenpunkte.className = "farbenpunkte";

            (variante.farben || []).forEach((farbe) => {

                const punkt = document.createElement("span");
                punkt.className = "farbenpunkt";
                punkt.style.backgroundColor = farbe;

                farbenpunkte.appendChild(punkt);

            });

            const textbereich = document.createElement("span");
            textbereich.className = "variante-text";

            const name = document.createElement("strong");
            name.textContent = variante.name;

            const regionen = document.createElement("small");
            regionen.textContent = variante.regionen || "";

            textbereich.append(name, regionen);

            label.append(
                radio,
                farbenpunkte,
                textbereich
            );

            variantSelection.appendChild(label);

            const option = document.createElement("option");
            option.value = variante.name;
            option.textContent = variante.name;

            selectedVariant.appendChild(option);

            radio.addEventListener("change", () => {

                selectedVariant.value = variante.name;

                document.getElementById("selection-variante")
                    .textContent = variante.name;

            });

        });

        selectedVariant.value = "";
    }


    /* =====================================================
       FARBVARIANTE INFO AUSWAHLFELD
       ===================================================== */

    selectedVariant.addEventListener("change", () => {

        const selectedValue = selectedVariant.value;

        document.getElementById("selection-variante")
            .textContent = selectedValue || "Noch keine Wahl";

        document.querySelectorAll('input[name="farbvariante"]')
            .forEach((radio) => {
                radio.checked = radio.value === selectedValue;
            });

    });



    /* =====================================================
       GESCHLECHT IN DER AUSWAHL
       ===================================================== */

    genderSelection.addEventListener("change", (event) => {
        if (event.target.matches('input[name="geschlecht"]')) {
            document.getElementById("selection-gender").textContent =
                event.target.value;
        }
    });


    /* =====================================================
       ELEMENT-ANTEIL
       ===================================================== */

    const elementRegler = document.getElementById("element-anteil");

    elementRegler.addEventListener("input", () => {

        const wert = elementRegler.value + " %";

        document.getElementById("element-prozent")
            .textContent = wert;

        document.getElementById("selection-element")
            .textContent = wert;

    });


    /* =====================================================
       WARENKORB
       sessionStorage bleibt bei Seitenwechseln im selben Tab erhalten.
       Beim Schliessen des Tabs endet die Browsersitzung.
       ===================================================== */

    const WARENKORB_KEY = "hummelhub_handelswarenkorb";
    const warenkorbToggle = document.getElementById("warenkorb-toggle");
    const warenkorbPanel = document.getElementById("warenkorb-panel");
    const warenkorbOverlay = document.getElementById("warenkorb-overlay");
    const warenkorbPositionen = document.getElementById("warenkorb-positionen");
    const warenkorbAnzahl = document.getElementById("warenkorb-anzahl");
    let warenkorb = [];

    try {
        warenkorb = JSON.parse(sessionStorage.getItem(WARENKORB_KEY) || "[]");
        if (!Array.isArray(warenkorb)) warenkorb = [];
    } catch (error) {
        warenkorb = [];
    }

    function saveWarenkorb() {
        try {
            sessionStorage.setItem(WARENKORB_KEY, JSON.stringify(warenkorb));
        } catch (error) {
            console.warn("Der Warenkorb konnte nicht in dieser Sitzung gespeichert werden.", error);
        }
        renderWarenkorb();
    }

    function openWarenkorb() {
        warenkorbPanel.classList.add("offen");
        warenkorbOverlay.classList.add("offen");
        warenkorbPanel.setAttribute("aria-hidden", "false");
        warenkorbToggle.setAttribute("aria-expanded", "true");
        document.body.classList.add("warenkorb-geoeffnet");
    }

    function closeWarenkorb() {
        warenkorbPanel.classList.remove("offen");
        warenkorbOverlay.classList.remove("offen");
        warenkorbPanel.setAttribute("aria-hidden", "true");
        warenkorbToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("warenkorb-geoeffnet");
    }

    function addWarenkorbText(parent, tag, text, className) {
        const element = document.createElement(tag);
        element.textContent = text;
        if (className) element.className = className;
        parent.appendChild(element);
        return element;
    }

    function renderWarenkorb() {
        warenkorbAnzahl.textContent = warenkorb.length;
        warenkorbPositionen.innerHTML = "";

        if (!warenkorb.length) {
            addWarenkorbText(warenkorbPositionen, "p", "Dein Warenkorb ist noch leer.", "warenkorb-leer");
            return;
        }

        warenkorb.forEach((position, index) => {
            const artikel = document.createElement("article");
            artikel.className = "warenkorb-position";

            const kopf = document.createElement("div");
            kopf.className = "warenkorb-position-kopf";
            const titelbereich = document.createElement("div");
            addWarenkorbText(titelbereich, "h3", position.kreatur);
            addWarenkorbText(titelbereich, "small", "Position " + (index + 1));
            const entfernen = document.createElement("button");
            entfernen.type = "button";
            entfernen.className = "warenkorb-position-entfernen";
            entfernen.textContent = "Entfernen";
            entfernen.setAttribute("aria-label", position.kreatur + " aus dem Warenkorb entfernen");
            entfernen.addEventListener("click", () => {
                warenkorb.splice(index, 1);
                saveWarenkorb();
            });
            kopf.append(titelbereich, entfernen);
            artikel.appendChild(kopf);

            const daten = document.createElement("dl");
            const felder = [
                ["Geschlecht", position.geschlecht],
                ["Sattel", position.sattel],
                ["Farbvariante", position.variante],
                ["Element-Anteil", position.element],
                ["Basislevel", position.level],
                ["Preis", position.preis]
            ];
            felder.forEach(([label, wert]) => {
                const dt = document.createElement("dt");
                dt.textContent = label;
                const dd = document.createElement("dd");
                dd.textContent = wert || "Keine Angabe";
                daten.append(dt, dd);
            });

            if (position.traits && position.traits.length) {
                const traits = document.createElement("div");
                traits.className = "warenkorb-position-traits";
                const dt = document.createElement("dt");
                dt.textContent = "ARK Traits";
                const dd = document.createElement("dd");
                dd.textContent = position.traits.join(", ");
                traits.append(dt, dd);
                daten.appendChild(traits);
            }
            artikel.appendChild(daten);

            if (position.spielername) {
                const spieler = document.createElement("p");
                spieler.className = "warenkorb-spielername";
                spieler.textContent = "Spieler: " + position.spielername;
                artikel.appendChild(spieler);
            }
            if (position.nachricht) {
                const nachricht = document.createElement("p");
                nachricht.className = "warenkorb-spielername";
                nachricht.textContent = "Nachricht: " + position.nachricht;
                artikel.appendChild(nachricht);
            }
            warenkorbPositionen.appendChild(artikel);
        });
    }

    function addCurrentSelectionToCart() {
        if (!activeCreature) {
            alert("Bitte waehle zuerst eine Kreatur aus.");
            return;
        }

        const spielername = document.getElementById("spielername").value.trim();
        if (!spielername) {
            document.getElementById("spielername").focus();
            alert("Bitte trage zuerst deinen RS24-Spielernamen ein.");
            return;
        }

        const tier = kreaturen[activeCreature];
        const genderRadio = document.querySelector('input[name="geschlecht"]:checked');
        const saddleRadio = document.querySelector('input[name="sattel"]:checked');
        const traits = Array.from(bestellformular.querySelectorAll('input[name="traits"]'))
            .map((input) => input.value.trim())
            .filter(Boolean);

        warenkorb.push({
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
            kreaturId: activeCreature,
            kreatur: tier.name,
            bild: tier.bild,
            level: tier.level || "Noch festzulegen",
            preis: tier.preisNormal || "Noch festzulegen",
            geschlecht: genderRadio ? genderRadio.value : (tier.geschlecht || "Neutral"),
            sattel: saddleRadio ? saddleRadio.value : "Nein",
            variante: selectedVariant.value || "Keine Variante ausgewaehlt",
            traits,
            element: elementRegler.value + " %",
            spielername,
            nachricht: document.getElementById("nachricht").value.trim()
        });

        saveWarenkorb();
        openWarenkorb();
    }

    document.getElementById("warenkorb-hinzufuegen").addEventListener("click", addCurrentSelectionToCart);
    warenkorbToggle.addEventListener("click", openWarenkorb);
    document.getElementById("warenkorb-schliessen").addEventListener("click", closeWarenkorb);
    warenkorbOverlay.addEventListener("click", closeWarenkorb);
    document.getElementById("warenkorb-leeren").addEventListener("click", () => {
        warenkorb = [];
        saveWarenkorb();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeWarenkorb();
    });

    bestellformular.addEventListener("change", (event) => {
        if (event.target.matches('input[name="sattel"]')) {
            document.getElementById("selection-sattel").textContent = event.target.value;
        }
    });

    renderWarenkorb();


    /* =====================================================
       INITIALISIERUNG
       ===================================================== */

    createCards();

    document.getElementById("aktuelles-jahr").textContent =
        new Date().getFullYear();
