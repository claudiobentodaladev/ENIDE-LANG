import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const svenska = new Language({
  language: "svenska",
  about:
    "ENIDE är en översättbar transpiler som möjliggör programmering på vilket språk som helst",

  include: DocStr(
    "Inkludera",
    "används för att inkludera språk, bibliotek eller datastrukturer från en annan fil",
  ),

  commands: {
    __about: DocStr("Info", "för att få information om ENIDE"),
    __help: DocStr(
      "Hjalp",
      "för att få en lista över alla tillgängliga kommandon",
    ),
    __version: DocStr("Version", "för att få den aktuella versionen av ENIDE"),
    __languages: DocStr(
      "Sprak",
      "för att få en lista över alla tillgängliga språk",
    ),
    __documentation: DocStr("Dok", "för att få dokumentation för ett språk"),
    __grammar: DocStr("Grammatik", "för att få grammatiken för ett språk"),
  },

  library: {
    __standard: {
      main: DocStr("Standard", "för att komma åt standardhjälpmetoder"),
      __isarray: DocStr(
        "ArArray",
        "för att kontrollera om ett värde är en array",
      ),
      __isobject: DocStr(
        "ArObjekt",
        "för att kontrollera om ett värde är ett objekt",
      ),
      __typeof: DocStr("TypAv", "för att få typen av ett värde"),
      __parse: DocStr(
        "Tolka",
        "för att konvertera ett värde från text till korrekt typ",
      ),
    },

    __math: {
      main: DocStr("Matematik", "för att komma åt matematiska funktioner"),
      __pi: DocStr("PI", "för att få värdet av pi"),
      __sqrt: DocStr("Kvadratrot", "för att få kvadratroten av ett tal"),
      __pow: DocStr("Potens", "för att få potensen av ett tal"),
      __round: DocStr("Avrunda", "för att avrunda ett tal"),
      __random: DocStr("Slumpmassig", "för att få ett slumpmässigt tal"),
      __max: DocStr("Maximum", "för att få det maximala värdet"),
      __min: DocStr("Minimum", "för att få det minimala värdet"),
      __isNumber: DocStr(
        "ArTal",
        "för att kontrollera om ett värde är ett tal",
      ),
      __isInteger: DocStr(
        "ArHeltal",
        "för att kontrollera om ett värde är ett heltal",
      ),
      __isFloat: DocStr(
        "ArDecimal",
        "för att kontrollera om ett värde är ett decimaltal",
      ),
      __cos: DocStr("Cos", "för att få cosinus av en vinkel i radianer"),
      __sin: DocStr("Sin", "för att få sinus av en vinkel i radianer"),
      __tan: DocStr("Tan", "för att få tangens av en vinkel i radianer"),
    },

    __string: {
      main: DocStr("Strang", "för att komma åt textmanipuleringsfunktioner"),
      __length: DocStr("Langd", "för att få längden på en text"),
      __toUpperCase: DocStr(
        "TillVersaler",
        "för att konvertera en text till versaler",
      ),
      __toLowerCase: DocStr(
        "TillGemener",
        "för att konvertera en text till gemener",
      ),
      __include: DocStr(
        "Innehaller",
        "för att kontrollera om en text innehåller en delsträng",
      ),
      __repeat: DocStr("Upprepa", "för att upprepa en text ett antal gånger"),
    },

    __date: {
      main: DocStr("Datum", "för att komma åt datum och tidsfunktioner"),
      __now: DocStr("Nu", "för att få aktuellt datum och tid"),
      __year: DocStr("Ar", "för att få året"),
      __month: DocStr("Manad", "för att få månaden"),
      __dayMonth: DocStr("DagManad", "för att få dagen i månaden"),
      __dayWeek: DocStr("DagVecka", "för att få dagen i veckan"),
      __hour: DocStr("Timme", "för att få timmen"),
      __minute: DocStr("Minut", "för att få minuten"),
      __second: DocStr("Sekund", "för att få sekunden"),
    },
  },

  types: {
    __number: DocStr("Tal", "för att deklarera en variabel av typen tal"),
    __string: DocStr("Text", "för att deklarera en variabel av typen text"),
    __boolean: DocStr("Bool", "för att deklarera en variabel av typen boolesk"),
    __object: DocStr("Objekt", "för att deklarera ett statiskt objekt"),
    __void: DocStr(
      "Tom",
      "för att deklarera en funktion som inte returnerar ett värde",
    ),
    __array: DocStr("Lista", "för att deklarera en listdatastruktur"),
  },

  specialValues: {
    __true: DocStr("Sant", "booleskt värde sant"),
    __false: DocStr("Falskt", "booleskt värde falskt"),
    __null: DocStr("Inget", "avsaknad av värde"),
  },

  words: {
    __new: DocStr("Ny", "för att skapa en ny instans av en klass"),
    __this: DocStr("detta", "för att komma åt attribut i den egna klassen"),
    __extends: DocStr(
      "utökar",
      "för att deklarera att en klass ärver från en annan",
    ),
  },

  accessModifiers: {
    __private: DocStr("Privat", "tillgänglig bara inom klassen"),
    __public: DocStr("Offentlig", "tillgänglig från var som helst"),
    __protected: DocStr(
      "Skyddad",
      "tillgänglig inom klassen och dess underklasser",
    ),
    __readonly: DocStr("LasBara", "värdet kan bara tilldelas en gång"),
    __static: DocStr("Statisk", "tillhör klassen själv, inte instanserna"),
  },

  methods: {
    method: {
      __print: DocStr("Skriv", "för att skriva ut ett värde på skärmen"),
      __scan: DocStr("Las", "för att läsa ett värde från inmatning"),
      __return: DocStr(
        "Returnera",
        "för att returnera ett värde från en funktion",
      ),
      __break: DocStr("Avbryt", "för att avbryta en loop"),
      __continue: DocStr(
        "Fortsatt",
        "för att hoppa till nästa iteration av en loop",
      ),
    },

    sentences: {
      __function: DocStr("Funktion", "för att deklarera en funktion"),
      __if: DocStr("Om", "för att deklarera ett villkor"),
      __else: DocStr("Annars", "för att deklarera ett alternativt villkor"),
      __while: DocStr("Medan", "för att deklarera en medan-loop"),
      __for: DocStr("For", "för att deklarera en for-loop"),
      __switch: DocStr("Val", "för att deklarera en valstruktur"),
      __case: DocStr("Fall", "för att deklarera ett fall i valstrukturen"),
      __default: DocStr(
        "Standard",
        "för att deklarera standardfallet i valstrukturen",
      ),
      __try: DocStr("Forsok", "för att deklarera ett försök-block"),
      __catch: DocStr("Fanga", "för att deklarera ett felhanteringsblock"),
      __finally: DocStr(
        "Slutligen",
        "för att deklarera ett block som alltid körs",
      ),
      __class: DocStr("Klass", "för att deklarera en klass"),
      __constructor: DocStr(
        "Konstruktor",
        "struktur som tillåter deklaration av attribut i en klass",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Meddelande",
      "Varde",
      "Variabel",
      "Egenskap",
      "Objekt",
      "Forvantad",
      "Mottagen",
      "Konstant_Tilldelning",
      "Dublett_Parameter",
      "Tips",
      "Ogiltig_Token",
      "Stack_Overflodar",
      "Token",
      "Ovantad_Inmatningsslut",
    ),
    main: errorMessage("FEL", "generiskt systemfel"),
    __TypeError: errorMessage("TYP_FEL", "ogiltig typ i operationen"),
    __InitError: errorMessage("INIT_FEL", "variabeln har inte initialiserats"),
    __ReferenceError: errorMessage(
      "REFERENS_FEL",
      "variabeln, funktionen eller biblioteket finns inte i omfånget",
    ),
    __SyntaxError: errorMessage("SYNTAX_FEL", "ogiltig kod"),
    __RangeError: errorMessage(
      "INTERVALL_FEL",
      "värde utanför det tillåtna intervallet",
    ),
    __URIError: errorMessage("URI_FEL", "felformaterad eller ogiltig URI"),
    __EvalError: errorMessage("EVAL_FEL", "fel relaterat till eval"),
    __UNKNOWN_ERROR: errorMessage("OKANT_FEL", "fullständigt okänt fel"),
  },

  example: {
    __array: [
      "mat",
      "lander",
      "objekt",
      "etiketter",
      "farger",
      "produkter",
      "anvandare",
      "kategorier",
      "poang",
      "sprak",
    ],
    __boolean: [
      "status",
      "arVuxen",
      "arAktiv",
      "arSynlig",
      "harTillstand",
      "arInloggad",
      "arAktiverad",
      "arKlar",
      "arVerifierad",
      "arRaderad",
    ],
    __function: [
      "hamtaNamn",
      "hamtaVarde",
      "hanteraKlick",
      "hamtaData",
      "formateraDatum",
      "tolkInmatning",
      "valideraFormular",
      "visaElement",
      "uppdateraTillstand",
      "beraknaTotal",
    ],
    __number: [
      "alder",
      "ar",
      "antal",
      "totalt",
      "pris",
      "index",
      "varaktighet",
      "mangd",
      "poang",
      "timeout",
    ],
    __object: [
      "person",
      "anvandare",
      "konfiguration",
      "svar",
      "betalning",
      "installningar",
      "profil",
      "adress",
      "metadata",
      "session",
    ],
    __string: [
      "namn",
      "titel",
      "beskrivning",
      "epost",
      "losenord",
      "meddelande",
      "etikett",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "logga_in",
      "initiera",
      "rensa",
      "aterstall",
      "forstar",
      "logga_ut",
      "rensaCache",
      "sparaTillDB",
      "skickaEpost",
      "loggaHandelse",
    ],
  },
}).grammar();
