import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const dansk = new Language({
  language: "dansk",
  about:
    "ENIDE er en oversaettelig transpiler der muliggor programmering pa et hvilket som helst sprog",

  include: DocStr(
    "Inkluder",
    "bruges til at inkludere sprog, biblioteker eller datastrukturer fra en anden fil",
  ),

  commands: {
    __about: DocStr("om", "for at fa oplysninger om ENIDE"),
    __help: DocStr(
      "hjaelp",
      "for at fa en liste over alle tilgaengelige kommandoer",
    ),
    __version: DocStr("version", "for at fa den aktuelle version af ENIDE"),
    __languages: DocStr(
      "sprog",
      "for at fa en liste over alle tilgaengelige sprog",
    ),
    __documentation: DocStr("dok", "for at fa dokumentation for et sprog"),
    __grammar: DocStr("grammatik", "for at fa grammatikken for et sprog"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "for at fa adgang til standard hjalpemetoder"),
      __isarray: DocStr(
        "ErArray",
        "for at kontrollere om en vaerdi er et array",
      ),
      __isobject: DocStr(
        "ErObjekt",
        "for at kontrollere om en vaerdi er et objekt",
      ),
      __typeof: DocStr("Type", "for at fa typen af en vaerdi"),
      __parse: DocStr(
        "Fortolk",
        "for at konvertere en vaerdi fra tekst til den korrekte type",
      ),
    },

    __math: {
      main: DocStr("matematik", "for at fa adgang til matematiske funktioner"),
      __pi: DocStr("PI", "for at fa vaerdien af pi"),
      __sqrt: DocStr("Kvadratrod", "for at fa kvadratroden af et tal"),
      __pow: DocStr("Potens", "for at fa potensen af et tal"),
      __round: DocStr("Afrund", "for at afrunde et tal"),
      __random: DocStr("Tilfaeldig", "for at fa et tilfaeldigt tal"),
      __max: DocStr("Maksimum", "for at fa den maksimale vaerdi"),
      __min: DocStr("Minimum", "for at fa den minimale vaerdi"),
      __isNumber: DocStr("ErTal", "for at kontrollere om en vaerdi er et tal"),
      __isInteger: DocStr(
        "ErHeltal",
        "for at kontrollere om en vaerdi er et heltal",
      ),
      __isFloat: DocStr(
        "ErDecimal",
        "for at kontrollere om en vaerdi er et decimaltal",
      ),
      __cos: DocStr("Cos", "for at fa cosinus af en vinkel i radianer"),
      __sin: DocStr("Sin", "for at fa sinus af en vinkel i radianer"),
      __tan: DocStr("Tan", "for at fa tangens af en vinkel i radianer"),
    },

    __string: {
      main: DocStr(
        "tekst",
        "for at fa adgang til tekstmanipulationsfunktioner",
      ),
      __length: DocStr("Laengde", "for at fa laengden af en tekst"),
      __toUpperCase: DocStr(
        "TilStore",
        "for at konvertere en tekst til store bogstaver",
      ),
      __toLowerCase: DocStr(
        "TilSmaa",
        "for at konvertere en tekst til smaa bogstaver",
      ),
      __include: DocStr(
        "Indeholder",
        "for at kontrollere om en tekst indeholder en delstreng",
      ),
      __repeat: DocStr("Gentag", "for at gentage en tekst et antal gange"),
    },

    __date: {
      main: DocStr("dato", "for at fa adgang til dato og tidsfunktioner"),
      __now: DocStr("Nu", "for at fa den aktuelle dato og tid"),
      __year: DocStr("Aar", "for at fa aaret"),
      __month: DocStr("Maned", "for at fa maaneden"),
      __dayMonth: DocStr("DagManed", "for at fa dagen i maaneden"),
      __dayWeek: DocStr("DagUge", "for at fa dagen i ugen"),
      __hour: DocStr("Time", "for at fa timen"),
      __minute: DocStr("Minut", "for at fa minuttet"),
      __second: DocStr("Sekund", "for at fa sekundet"),
    },
  },

  types: {
    __number: DocStr("tal", "for at erklaere en variabel af typen tal"),
    __string: DocStr("tekst", "for at erklaere en variabel af typen tekst"),
    __boolean: DocStr("bool", "for at erklaere en variabel af typen boolsk"),
    __object: DocStr("objekt", "til at erklare et statisk objekt"),
    __void: DocStr(
      "tom",
      "for at erklaere en funktion der ikke returnerer en vaerdi",
    ),
    __array: DocStr("liste", "for at erklaere en listdatastruktur"),
  },

  specialValues: {
    __true: DocStr("Sandt", "boolsk vaerdi sandt"),
    __false: DocStr("Falsk", "boolsk vaerdi falsk"),
    __null: DocStr("Intet", "fravaerelse af vaerdi"),
  },

  words: {
    __new: DocStr("ny", "for at oprette en ny instans af en klasse"),
    __this: DocStr("dette", "for at tilgaa attributter i egen klasse"),
    __extends: DocStr(
      "udvider",
      "for at erklaere at en klasse arver fra en anden",
    ),
  },

  accessModifiers: {
    __private: DocStr("privat", "kun tilgaengelig inden for klassen"),
    __public: DocStr("offentlig", "tilgaengelig overalt"),
    __protected: DocStr(
      "beskyttet",
      "tilgaengelig inden for klassen og dens underklasser",
    ),
    __readonly: DocStr("kunLaesning", "vaerdien kan kun tildeles en gang"),
    __static: DocStr("statisk", "tilhorer klassen selv ikke instanserne"),
  },

  methods: {
    method: {
      __print: DocStr("udskriv", "for at udskrive en vaerdi paa skrmen"),
      __scan: DocStr("laes", "for at laese en vaerdi fra input"),
      __return: DocStr(
        "returner",
        "for at returnere en vaerdi fra en funktion",
      ),
      __break: DocStr("afbryd", "for at forlade en loekke"),
      __continue: DocStr(
        "fortsaet",
        "for at springe til naeste iteration af en loekke",
      ),
    },

    sentences: {
      __function: DocStr("funktion", "for at erklaere en funktion"),
      __if: DocStr("hvis", "for at erklaere en betingelse"),
      __else: DocStr("ellers", "for at erklaere en alternativ betingelse"),
      __while: DocStr("mens", "for at erklaere en mens-loekke"),
      __for: DocStr("for", "for at erklaere en for-loekke"),
      __switch: DocStr("vaelg", "for at erklaere en valgstruktur"),
      __case: DocStr(
        "tilfaelde",
        "for at erklaere et tilfaelde i valgstrukturen",
      ),
      __default: DocStr(
        "standard",
        "for at erklaere standardtilfaeldet i valgstrukturen",
      ),
      __try: DocStr("proev", "for at erklaere en proev-blok"),
      __catch: DocStr("fang", "for at erklaere en fejlhaandteringsblok"),
      __finally: DocStr("endelig", "for at erklaere en blok der altid udfores"),
      __class: DocStr("klasse", "for at erklaere en klasse"),
      __constructor: DocStr(
        "konstruktoer",
        "struktur der muliggor erklaering af attributter i en klasse",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Besked",
      "Vaerdi",
      "Variabel",
      "Egenskab",
      "Objekt",
      "Forventet",
      "Modtaget",
      "Konstant_Tildeling",
      "Duplikat_Parameter",
      "Hint",
      "Ugyldig_Token",
      "Stak_Overloeb",
      "Token",
      "Uventet_Inputafslutning",
    ),
    main: errorMessage("FEJL", "generisk systemfejl"),
    __TypeError: errorMessage("TYPE_FEJL", "ugyldig type i operationen"),
    __InitError: errorMessage(
      "INIT_FEJL",
      "variablen er ikke blevet initialiseret",
    ),
    __ReferenceError: errorMessage(
      "REFERENCE_FEJL",
      "variabel, funktion eller bibliotek eksisterer ikke i omfanget",
    ),
    __SyntaxError: errorMessage("SYNTAKS_FEJL", "ugyldig kode"),
    __RangeError: errorMessage(
      "INTERVAL_FEJL",
      "vaerdi uden for det tilladte interval",
    ),
    __URIError: errorMessage("URI_FEJL", "fejlformet eller ugyldig URI"),
    __EvalError: errorMessage("EVAL_FEJL", "fejl relateret til eval"),
    __UNKNOWN_ERROR: errorMessage("UKENDT_FEJL", "fuldstaendig ukendt fejl"),
  },

  example: {
    __array: [
      "mad",
      "lande",
      "elementer",
      "maerker",
      "farver",
      "produkter",
      "brugere",
      "kategorier",
      "point",
      "sprog",
    ],
    __boolean: [
      "status",
      "erVoksen",
      "erAktiv",
      "erSynlig",
      "harTilladelse",
      "erLoggetInd",
      "erAktiveret",
      "erFaerdig",
      "erBekraeftet",
      "erSlettet",
    ],
    __function: [
      "hentNavn",
      "hentVaerdi",
      "haandterKlik",
      "hentData",
      "formaterDato",
      "fortolkInput",
      "validerFormular",
      "visElement",
      "opdaterTilstand",
      "beregnTotal",
    ],
    __number: [
      "alder",
      "aar",
      "antal",
      "total",
      "pris",
      "indeks",
      "varighed",
      "maengde",
      "point",
      "timeout",
    ],
    __object: [
      "person",
      "bruger",
      "konfiguration",
      "svar",
      "betaling",
      "indstillinger",
      "profil",
      "adresse",
      "metadata",
      "session",
    ],
    __string: [
      "navn",
      "titel",
      "beskrivelse",
      "email",
      "adgangskode",
      "besked",
      "etiket",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "logInd",
      "initialiser",
      "ryd",
      "nulstil",
      "oedelaeg",
      "logUd",
      "rydCache",
      "gemIDB",
      "sendEmail",
      "logHaendelse",
    ],
  },
}).grammar();
