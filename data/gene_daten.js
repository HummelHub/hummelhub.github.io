// ========================================
// GENE-DATENBANK
// ========================================

export const geneDaten = [

    // ========================================
    // ZUCHT
    // ========================================

    {
        name: "Mutierbar [Stat]",
        name_en: "Mutable [Stat]",
        kategorie: "Zucht",
        kategorie_en: "Breeding",
        max_stacks: 3,
        stufe: null,
        beschreibung: "1–2 % höhere Mutationschance, höhere Chance auf [Stat].",
        beschreibung_en: "1-2% increase to mut chance, higher chance for [Stat]"
    },
    {
        name: "[Stat] Robust",
        name_en: "[Stat] Robust",
        kategorie: "Zucht",
        kategorie_en: "Breeding",
        max_stacks: 3,
        stufe: null,
        beschreibung: "1,5–3 % höhere Chance, den höheren [Stat] der Eltern zu erben.",
        beschreibung_en: "1.5-3% increase to inherit higher [Stat] of parents"
    },
    {
        name: "[Stat] Gebrechlich",
        name_en: "[Stat] Frail",
        kategorie: "Zucht",
        kategorie_en: "Breeding",
        max_stacks: 3,
        stufe: null,
        beschreibung: "1,5–3 % geringere Chance, den höheren [Stat] der Eltern zu erben.",
        beschreibung_en: "1.5-3% decrease to inherit higher [Stat] of parents"
    },


    // ========================================
    // KAMPF
    // ========================================

    {
        name: "Unempfindlich",
        name_en: "Numb",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 1,
        stufe: null,
        beschreibung: "Erlittener Schaden wird um 25–50 % reduziert und über 5 Sekunden verteilt.",
        beschreibung_en: "Damage taken reduced by 25-50%, takes that damage over 5s"
    },
    {
        name: "Vampirisch",
        name_en: "Vampiric",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 1,
        stufe: null,
        beschreibung: "5–10 % Lebensraub.",
        beschreibung_en: "5-10% Lifesteal"
    },
    {
        name: "Zäh",
        name_en: "Tenacious",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Erlittener Schaden wird um 12,5–25 % reduziert, wenn die Gesundheit 25 % erreicht.",
        beschreibung_en: "Damage taken reduced by 12.5-25% as health reaches 25%"
    },
    {
        name: "Wütend",
        name_en: "Angry",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 2,
        stufe: null,
        beschreibung: "Verursachter Schaden steigt um 12,5–25 %, wenn die Gesundheit 25 % erreicht.",
        beschreibung_en: "Damage dealt increases by 12.5-25% as health reaches 25%"
    },
    {
        name: "Warm",
        name_en: "Warm",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 3,
        stufe: null,
        beschreibung: "40–80 Isolation, 5–10 % weniger Kälteschaden.",
        beschreibung_en: "40-80 Insul, 5-10% reduced Cold damage"
    },
    {
        name: "Kalt",
        name_en: "Cold",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 3,
        stufe: null,
        beschreibung: "40–80 Isolation, 5–10 % weniger Hitzeschaden.",
        beschreibung_en: "40-80 Insul, 5-10% reduced Heat damage"
    },
    {
        name: "Hohe Ausdauer",
        name_en: "High Endurance",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 3,
        stufe: null,
        beschreibung: "4–8 % weniger Ausdauerverbrauch beim Sprinten.",
        beschreibung_en: "4-8% reduced stamina drain from sprinting"
    },
    {
        name: "Beschützend",
        name_en: "Protective",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 2,
        stufe: null,
        beschreibung: "Der Reiter erleidet 15–30 % weniger Schaden. Der Effekt bleibt 10 Sekunden nach dem Absteigen bestehen.",
        beschreibung_en: "Rider takes 15-30% less damage. Persists 10s after dismount"
    },
    {
        name: "Erregbar",
        name_en: "Excitable",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 1,
        stufe: null,
        beschreibung: "Standardangriffe reduzieren die Abklingzeiten von Fähigkeiten um 0,25–0,5 Sekunden.",
        beschreibung_en: "Basic Attacks reduce Ability cooldowns by 0.25-0.5s"
    },
    {
        name: "Ablenkend",
        name_en: "Distracting",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 1,
        stufe: null,
        beschreibung: "Gegner, die von diesem Tier Schaden erleiden, verursachen 20 Sekunden lang 5–10 % weniger Schaden an allen anderen Zielen.",
        beschreibung_en: "Enemys that take damage from this Creature deal 5-10% less damage to all other targets for 20s"
    },
    {
        name: "Schlagkräftig",
        name_en: "Heavy Hitting",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Schaden von Standardangriffen um 2,5–5 % erhöht, Angriffsgeschwindigkeit um 5–10 % reduziert.",
        beschreibung_en: "Basic Attack damage increased 2.5-5%, Attack Spd reduced 5-10%"
    },
    {
        name: "Schnellschlag",
        name_en: "Quick Hitting",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Angriffsgeschwindigkeit um 2,5–5 % erhöht, Schaden von Standardangriffen um 5–10 % reduziert.",
        beschreibung_en: "Attack Spd increased 2.5-5%, Basic Attack damage reduced 5-10%"
    },
    {
        name: "Riesentöter",
        name_en: "Giantslaying",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 2,
        stufe: null,
        beschreibung: "2,5–5 % mehr Schaden gegen Kreaturen mit einem Traggewicht über 500, 7,5–15 % weniger Schaden gegen Kreaturen mit einem Traggewicht unter 200.",
        beschreibung_en: "2.5-5% increased damage to 500< drag weight, 7.5-15% descreased damage to 200> drag weight"
    },
    {
        name: "Königstöter",
        name_en: "Kingslaying",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 3,
        stufe: null,
        beschreibung: "5–10 % mehr Schaden gegen Bosse, dafür 10 % weniger Schaden gegen alle anderen Kreaturen.",
        beschreibung_en: "5-10% increased damage to Bosses, reduces damage to all other creatures by 10%"
    },
    {
        name: "Fett",
        name_en: "Fatty",
        kategorie: "Kampf",
        kategorie_en: "Combat",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Erhält 0,1–0,2 Rüstung pro Punkt Nahrung.",
        beschreibung_en: "Gains 0.1-0.2 Armor per point in Food"
    },


    // ========================================
    // HILFSEIGENSCHAFTEN
    // ========================================

    {
        name: "Höhlenaffinität",
        name_en: "Cave Bearing",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: 3,
        stufe: null,
        beschreibung: "15–30 % weniger Ressourcen aus diesem Gebiet – Edelsteine und Elementerz.",
        beschreibung_en: "15-30% reduction in Resources from area - Gems, Ele Ore"
    },
    {
        name: "Wüstenaffinität",
        name_en: "Desert Bearing",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: null,
        stufe: null,
        beschreibung: "15–30 % weniger Ressourcen aus diesem Gebiet – Salz und Sand.",
        beschreibung_en: "15-30% reduction in Resources from area - Salt, Sand"
    },
    {
        name: "Mineralienaffinität",
        name_en: "Mineral Bearing",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: null,
        stufe: null,
        beschreibung: "15–30 % weniger Ressourcen aus diesem Gebiet – Metall, Kristall und Stein.",
        beschreibung_en: "15-30% reduction in Resources from area - Metal, Crystal, Stone"
    },
    {
        name: "Kadaveraffinität",
        name_en: "Carcass Bearing",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: null,
        stufe: null,
        beschreibung: "15–30 % weniger Ressourcen aus diesem Gebiet – Fell, organisches Polymer und Chitin.",
        beschreibung_en: "15-30% reduction in Resources from area - Hide, Org Poly, Chitin"
    },
    {
        name: "Exotenaffinität",
        name_en: "Exotic Bearing",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: null,
        stufe: null,
        beschreibung: "15–30 % weniger Ressourcen aus diesem Gebiet – Schwarze Perlen.",
        beschreibung_en: "15-30% reduction in Resources from area - Black Pearls"
    },
    {
        name: "Pflanzenaffinität",
        name_en: "Plant Bearing",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: null,
        stufe: null,
        beschreibung: "15–30 % weniger Ressourcen aus diesem Gebiet – Holz und Beeren.",
        beschreibung_en: "15-30% reduction in Resources from area - Wood, Berries"
    },
    {
        name: "Fleischaffinität",
        name_en: "Meat Bearing",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: null,
        stufe: null,
        beschreibung: "15–30 % weniger Ressourcen aus diesem Gebiet – Fleisch.",
        beschreibung_en: "15-30% reduction in Resources from area - Meats"
    },
    {
        name: "Langsamer Stoffwechsel",
        name_en: "Slow Metabolism",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Reduziert den Nahrungsverbrauch um 5–10 %, einschließlich Fähigkeiten, die Nahrung verbrauchen.",
        beschreibung_en: "Reduces Food consumption by 5-10%, includes abilities that drain food"
    },
    {
        name: "Aquatisch",
        name_en: "Aquatic",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Schwimmgeschwindigkeit um 7,5–15 % erhöht, Sauerstoffverbrauch um 12,5–25 % reduziert und Ausdauerverbrauch beim Schwimmsprint um 4–8 % reduziert.",
        beschreibung_en: "Swim speed increase 7.5-15%, O2 drain reduced 12.5-25%, swim-sprint stamina drain reduced 4-8%"
    },
    {
        name: "Athletisch",
        name_en: "Athletic",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Erhält 0,05–0,1 Gesundheitsregeneration und 0,05–0,1 % Ausdauerregeneration pro Punkt Sauerstoff.",
        beschreibung_en: "Gain 0.05-0.1 health regen and 0.05-0.1% stamina regen per point in O2"
    },
    {
        name: "Sorglos",
        name_en: "Carefree",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: 1,
        stufe: null,
        beschreibung: "Erhält einen Bewegungsgeschwindigkeitsbonus von 7,5–15 %, der für 20 Sekunden verloren geht, nachdem Schaden verursacht oder erlitten wurde oder ein neuer Reiter aufsteigt.",
        beschreibung_en: "Gain 7.5-15% movespeed buff that is lost for 20s after dealing/taking damage or gaining new rider"
    },
    {
        name: "Aggressiv",
        name_en: "Aggressive",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: 2,
        stufe: null,
        beschreibung: "Wenn das Tier einen Gegner trifft, erhält es 5 Sekunden lang einen Bewegungsgeschwindigkeitsbonus von 2,5–5 %.",
        beschreibung_en: "When creature hits enemy, gain 2.5-5% movespeed buff for 5s"
    },
    {
        name: "Feige",
        name_en: "Cowardly",
        kategorie: "Hilfseigenschaften",
        kategorie_en: "Utility",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Wenn das Tier Schaden erleidet, erhält es 5 Sekunden lang einen Bewegungsgeschwindigkeitsbonus von 2,5–5 %.",
        beschreibung_en: "When creature takes damage, gains 2.5-5% movespeed buff for 5s"
    },


    // ========================================
    // SONSTIGES
    // ========================================

    {
        name: "Nachtaktiv",
        name_en: "Nocturnal",
        kategorie: "Sonstiges",
        kategorie_en: "Misc",
        max_stacks: 3,
        stufe: null,
        beschreibung: "2,5–5 % weniger Ausdauerverbrauch während der Nacht.",
        beschreibung_en: "2.5-5% Reduced stamina drain at night"
    },
    {
        name: "Tagaktiv",
        name_en: "Diurnal",
        kategorie: "Sonstiges",
        kategorie_en: "Misc",
        max_stacks: 3,
        stufe: null,
        beschreibung: "2,5–5 % weniger Ausdauerverbrauch während des Tages.",
        beschreibung_en: "2.5-5% Reduced stamina drain during day"
    },
    {
        name: "Schneller Lerner",
        name_en: "Fast Learner",
        kategorie: "Sonstiges",
        kategorie_en: "Misc",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Erhält 15–30 % zusätzliche Erfahrung.",
        beschreibung_en: "Gain 15-30% additional EXP"
    },
    {
        name: "Frenetisch",
        name_en: "Frenetic",
        kategorie: "Sonstiges",
        kategorie_en: "Misc",
        max_stacks: 3,
        stufe: null,
        beschreibung: "Der Torporabbau wird um 7,5–15 % erhöht.",
        beschreibung_en: "Torpor drain increased by 7.5-15%"
    }
];