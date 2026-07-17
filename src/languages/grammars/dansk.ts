import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const dansk = new Language({
  language: "dansk",
  about:
    "ENIDE er et flersproget programmeringssprog, der giver dig mulighed for at programmere på ethvert sprog.",
  include: DocStr(
    "Inkluder",
    "bruges til at inkludere sprog, biblioteker eller datastrukturer fra en anden fil",
  ),

  commands: {
    __about: DocStr("om", "for at få oplysninger om ENIDE"),
    __help: DocStr(
      "hjælp",
      "for at få en liste over alle tilgængelige kommandoer",
    ),
    __version: DocStr("version", "for at få den aktuelle version af ENIDE"),
    __languages: DocStr(
      "sprog",
      "for at få en liste over alle tilgængelige sprog",
    ),
    __documentation: DocStr("dok", "for at få dokumentation for et sprog"),
    __grammar: DocStr("grammatik", "for at få grammatikken for et sprog"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "for at få adgang til standard hjælpemetoder"),
      __isarray: DocStr(
        "ErArray",
        "for at kontrollere om en værdi er et array",
      ),
      __isobject: DocStr(
        "ErObjekt",
        "for at kontrollere om en værdi er et objekt",
      ),
      __typeof: DocStr("Type", "for at få typen af en værdi"),
      __parse: DocStr(
        "Fortolk",
        "for at konvertere en værdi fra tekst til den korrekte type",
      ),
    },

    __math: {
      main: DocStr("matematik", "for at få adgang til matematiske funktioner"),
      __pi: DocStr("PI", "for at få værdien af pi"),
      __sqrt: DocStr("Kvadratrod", "for at få kvadratroden af et tal"),
      __pow: DocStr("Potens", "for at få potensen af et tal"),
      __round: DocStr("Afrund", "for at afrunde et tal"),
      __random: DocStr("Tilfældig", "for at få et tilfældigt tal"),
      __max: DocStr("Maksimum", "for at få den maksimale værdi"),
      __min: DocStr("Minimum", "for at få den minimale værdi"),
      __isNumber: DocStr("ErTal", "for at kontrollere om en værdi er et tal"),
      __isInteger: DocStr(
        "ErHeltal",
        "for at kontrollere om en værdi er et heltal",
      ),
      __isFloat: DocStr(
        "ErDecimal",
        "for at kontrollere om en værdi er et decimaltal",
      ),
      __cos: DocStr("Cos", "for at få cosinus af en vinkel i radianer"),
      __sin: DocStr("Sin", "for at få sinus af en vinkel i radianer"),
      __tan: DocStr("Tan", "for at få tangens af en vinkel i radianer"),
    },

    __string: {
      main: DocStr(
        "tekst",
        "for at få adgang til tekstmanipulationsfunktioner",
      ),
      __length: DocStr("Længde", "for at få længden af en tekst"),
      __toUpperCase: DocStr(
        "TilStore",
        "for at konvertere en tekst til store bogstaver",
      ),
      __toLowerCase: DocStr(
        "TilSmå",
        "for at konvertere en tekst til små bogstaver",
      ),
      __include: DocStr(
        "Indeholder",
        "for at kontrollere om en tekst indeholder en delstreng",
      ),
      __repeat: DocStr("Gentag", "for at gentage en tekst et antal gange"),
    },

    __date: {
      main: DocStr("dato", "for at få adgang til dato- og tidsfunktioner"),
      __now: DocStr("Nu", "for at få den aktuelle dato og tid"),
      __year: DocStr("År", "for at få året"),
      __month: DocStr("Måned", "for at få måneden"),
      __dayMonth: DocStr("DagMåned", "for at få dagen i måneden"),
      __dayWeek: DocStr("DagUge", "for at få dagen i ugen"),
      __hour: DocStr("Time", "for at få timen"),
      __minute: DocStr("Minut", "for at få minuttet"),
      __second: DocStr("Sekund", "for at få sekundet"),
    },
  },

  types: {
    __number: DocStr("tal", "for at erklære en variabel af typen tal"),
    __string: DocStr("tekst", "for at erklære en variabel af typen tekst"),
    __boolean: DocStr("bool", "for at erklære en variabel af typen boolsk"),
    __object: DocStr("objekt", "for at erklære et statisk objekt"),
    __void: DocStr(
      "tom",
      "for at erklære en funktion der ikke returnerer en værdi",
    ),
    __array: DocStr("liste", "for at erklære en listedatastruktur"),
  },

  specialValues: {
    __true: DocStr("Sandt", "boolsk værdi sandt"),
    __false: DocStr("Falsk", "boolsk værdi falsk"),
    __null: DocStr("Intet", "fravær af værdi"),
  },

  words: {
    __new: DocStr("ny", "for at oprette en ny instans af en klasse"),
    __this: DocStr("dette", "for at tilgå attributter i egen klasse"),
    __extends: DocStr(
      "udvider",
      "for at erklære at en klasse arver fra en anden",
    ),
  },

  accessModifiers: {
    __private: DocStr("privat", "kun tilgængelig inden for klassen"),
    __public: DocStr("offentlig", "tilgængelig overalt"),
    __protected: DocStr(
      "beskyttet",
      "tilgængelig inden for klassen og dens underklasser",
    ),
    __readonly: DocStr("kunLæsning", "værdien kan kun tildeles én gang"),
    __static: DocStr("statisk", "tilhører klassen selv, ikke instanserne"),
  },

  methods: {
    method: {
      __print: DocStr("udskriv", "for at udskrive en værdi på skærmen"),
      __scan: DocStr("læs", "for at læse en værdi fra input"),
      __return: DocStr("returner", "for at returnere en værdi fra en funktion"),
      __break: DocStr("afbryd", "for at forlade en løkke"),
      __continue: DocStr(
        "fortsæt",
        "for at springe til næste iteration af en løkke",
      ),
    },

    sentences: {
      __function: DocStr("funktion", "for at erklære en funktion"),
      __if: DocStr("hvis", "for at erklære en betingelse"),
      __else: DocStr("ellers", "for at erklære en alternativ betingelse"),
      __while: DocStr("mens", "for at erklære en mens-løkke"),
      __for: DocStr("for", "for at erklære en for-løkke"),
      __switch: DocStr("vælg", "for at erklære en valgstruktur"),
      __case: DocStr("tilfælde", "for at erklære et tilfælde i valgstrukturen"),
      __default: DocStr(
        "standard",
        "for at erklære standardtilfældet i valgstrukturen",
      ),
      __try: DocStr("prøv", "for at erklære en prøv-blok"),
      __catch: DocStr("fang", "for at erklære en fejlhåndteringsblok"),
      __finally: DocStr("endelig", "for at erklære en blok der altid udføres"),
      __class: DocStr("klasse", "for at erklære en klasse"),
      __constructor: DocStr(
        "konstruktør",
        "struktur der muliggør erklæring af attributter i en klasse",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Besked",
      "Værdi",
      "Variabel",
      "Egenskab",
      "Objekt",
      "Forventet",
      "Modtaget",
      "Konstant_Tildeling",
      "Duplikat_Parameter",
      "Hint",
      "Ugyldig_Token",
      "Stak_Overløb",
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
      "værdi uden for det tilladte interval",
    ),
    __URIError: errorMessage("URI_FEJL", "fejlformet eller ugyldig URI"),
    __EvalError: errorMessage("EVAL_FEJL", "fejl relateret til eval"),
    __UNKNOWN_ERROR: errorMessage("UKENDT_FEJL", "fuldstændig ukendt fejl"),
  },

  example: {
    __array: [
      "mad",
      "lande",
      "elementer",
      "mærker",
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
      "erFærdig",
      "erBekræftet",
      "erSlettet",
    ],
    __function: [
      "hentNavn",
      "hentVærdi",
      "håndterKlik",
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
      "år",
      "antal",
      "total",
      "pris",
      "indeks",
      "varighed",
      "mængde",
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
      "ødelæg",
      "logUd",
      "rydCache",
      "gemIDB",
      "sendEmail",
      "logHændelse",
    ],
  },
}).grammar();
