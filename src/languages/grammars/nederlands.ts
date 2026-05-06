import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const nederlands = new Language({
  language: "nederlands",
  about:
    "ENIDE is een vertaalbare transpiler waarmee in elke taal geprogrammeerd kan worden",

  include: DocStr(
    "importeren",
    "wordt gebruikt om talen, bibliotheken of modules uit andere bestanden te laden",
  ),

  commands: {
    __about: DocStr("over", "informatie over het ENIDE-systeem verkrijgen"),
    __help: DocStr("hulp", "lijst van alle beschikbare opdrachten bekijken"),
    __version: DocStr("versie", "de huidige versie van ENIDE opvragen"),
    __languages: DocStr("talen", "lijst van alle ondersteunde talen bekijken"),
    __documentation: DocStr(
      "doc",
      "de documentatie van de huidige taal inzien",
    ),
    __grammar: DocStr(
      "grammatica",
      "de grammaticale regels van de taal bekijken",
    ),
  },

  library: {
    __standard: {
      main: DocStr("standaard", "toegang tot de basismethoden van het systeem"),
      __isarray: DocStr(
        "is_lijst",
        "controleert of de waarde een lijst (array) is",
      ),
      __isobject: DocStr("is_object", "controleert of de waarde een object is"),
      __typeof: DocStr("type_van", "geeft het datatype van de waarde terug"),
      __parse: DocStr(
        "analyseren",
        "converteert een tekst naar het juiste datatype",
      ),
    },
    __math: {
      main: DocStr("wiskunde", "toegang tot wiskundige functies"),
      __pi: DocStr("PI", "de waarde van de constante Pi"),
      __sqrt: DocStr("wortel", "de vierkantswortel van een getal berekenen"),
      __pow: DocStr("macht", "de macht van een getal berekenen"),
      __round: DocStr(
        "afronden",
        "een getal afronden op het dichtstbijzijnde gehele getal",
      ),
      __random: DocStr("willekeurig", "een willekeurig getal genereren"),
      __max: DocStr("maximum", "de hoogste waarde uit een lijst ophalen"),
      __min: DocStr("minimum", "de laagste waarde uit een lijst ophalen"),
      __isNumber: DocStr("is_getal", "controleert of de waarde een getal is"),
      __isInteger: DocStr(
        "is_geheel",
        "controleert of de waarde een geheel getal is",
      ),
      __isFloat: DocStr(
        "is_decimaal",
        "controleert of de waarde een decimaal getal is",
      ),
      __cos: DocStr("cos", "de cosinus van een getal berekenen"),
      __sin: DocStr("sin", "de sinus van een getal berekenen"),
      __tan: DocStr("tan", "de tangens van een getal berekenen"),
    },

    __string: {
      main: DocStr("tekst", "toegang tot functies voor tekstmanipulatie"),
      __length: DocStr("lengte", "de lengte van de tekst opvragen"),
      __toUpperCase: DocStr(
        "naar_hoofdletters",
        "zet alle tekst om naar hoofdletters",
      ),
      __toLowerCase: DocStr(
        "naar_kleine_letters",
        "zet alle tekst om naar kleine letters",
      ),
      __include: DocStr(
        "bevat",
        "controleert of de tekst een bepaald fragment bevat",
      ),
      __repeat: DocStr("herhaal_tekst", "tekst een aantal keer herhalen"),
    },

    __date: {
      main: DocStr("datum", "toegang tot datum- en tijdfuncties"),
      __now: DocStr("nu", "de huidige datum en tijd ophalen"),
      __year: DocStr("jaar", "het jaar ophalen"),
      __month: DocStr("maand", "de maand ophalen"),
      __dayMonth: DocStr("dag_maand", "de dag van de maand ophalen"),
      __dayWeek: DocStr("dag_week", "de dag van de week ophalen"),
      __hour: DocStr("uur", "het uur ophalen"),
      __minute: DocStr("minuut", "de minuten ophalen"),
      __second: DocStr("seconde", "de seconden ophalen"),
    },
  },

  types: {
    __number: DocStr("getal", "declaratie van een numerieke variabele"),
    __string: DocStr("tekst", "declaratie van een tekst variabele"),
    __boolean: DocStr(
      "bool",
      "declaratie van een logische variabele (waar/onwaar)",
    ),
    __object: DocStr("object", "declaratie van een objectstructuur"),
    __void: DocStr("leeg", "geeft aan dat een functie geen waarde teruggeeft"),
    __array: DocStr("lijst", "declaratie van een lijststructuur"),
  },

  specialValues: {
    __true: DocStr("waar", "logische waarde waar"),
    __false: DocStr("onwaar", "logische waarde onwaar"),
    __null: DocStr("niets", "afwezigheid van een waarde"),
  },

  words: {
    __new: DocStr("nieuw", "maakt een nieuwe instantie van een klasse aan"),
    __this: DocStr("dit", "verwijst naar de huidige instantie van de klasse"),
    __extends: DocStr(
      "uitbreiden",
      "geeft aan dat een klasse overerft van een andere klasse",
    ),
  },

  accessModifiers: {
    __private: DocStr("privé", "alleen toegankelijk binnen de klasse zelf"),
    __public: DocStr("openbaar", "toegankelijk van buiten de klasse"),
    __protected: DocStr(
      "beschermd",
      "toegankelijk binnen de klasse en subklassen",
    ),
    __readonly: DocStr(
      "alleen_lezen",
      "waarde die na initialisatie niet meer kan wijzigen",
    ),
    __static: DocStr(
      "statisch",
      "behoort tot de klasse zelf, niet tot een instantie",
    ),
  },

  methods: {
    method: {
      __print: DocStr("toon", "waarde weergeven op het scherm"),
      __scan: DocStr("lees", "waarde lezen van de gebruikersinvoer"),
      __return: DocStr("teruggeven", "een waarde teruggeven uit een functie"),
      __break: DocStr("stoppen", "verlaat de huidige lus of het blok"),
      __continue: DocStr(
        "doorgaan",
        "spring naar de volgende iteratie van de lus",
      ),
    },

    sentences: {
      __function: DocStr("functie", "declaratie van een functie"),
      __if: DocStr("als", "declaratie van een voorwaarde"),
      __else: DocStr("anders", "blok voor wanneer de voorwaarde niet waar is"),
      __while: DocStr("zolang", "lus gebaseerd op een voorwaarde"),
      __for: DocStr("voor", "lus gebaseerd op een teller"),
      __switch: DocStr("keuze", "structuur voor meerdere keuzemogelijkheden"),
      __case: DocStr("geval", "specifiek geval binnen een keuze"),
      __default: DocStr(
        "standaard",
        "geval als er geen andere overeenkomsten zijn",
      ),
      __try: DocStr("proberen", "start van foutafhandeling"),
      __catch: DocStr("opvangen", "verwerkt de opgetreden fout"),
      __finally: DocStr("tenslotte", "blok dat altijd wordt uitgevoerd"),
      __class: DocStr("klasse", "declaratie van een nieuwe klasse"),
      __constructor: DocStr(
        "constructor",
        "functie die het object van de klasse initialiseert",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Bericht",
      "Waarde",
      "Variabele",
      "Eigenschap",
      "Object",
      "Verwacht",
      "Ontvangen",
      "Toewijzing_aan_constante",
      "Dubbele_parameter",
      "Tip",
      "Ongeldig_token",
      "Stack_overloop",
      "Token",
      "Onverwacht_einde_invoer",
    ),
    main: errorMessage("FOUT", "algemene systeemfout"),
    __TypeError: errorMessage(
      "TYPE_FOUT",
      "ongeldig datatype voor deze operatie",
    ),
    __InitError: errorMessage(
      "INITIALISATIE_FOUT",
      "variabele is niet correct geïnitialiseerd",
    ),
    __ReferenceError: errorMessage(
      "REFERENTIE_FOUT",
      "variabele of functie bestaat niet",
    ),
    __SyntaxError: errorMessage(
      "SYNTAXIS_FOUT",
      "fout in de schrijfwijze van de code",
    ),
    __RangeError: errorMessage(
      "BEREIK_FOUT",
      "waarde valt buiten het toegestane bereik",
    ),
    __URIError: errorMessage("URI_FOUT", "ongeldig URI-formaat"),
    __EvalError: errorMessage("EVAL_FOUT", "fout in de eval-functie"),
    __UNKNOWN_ERROR: errorMessage(
      "ONBEKENDE_FOUT",
      "er is een onbekende fout opgetreden",
    ),
  },

  example: {
    __array: [
      "voedsel",
      "landen",
      "namenlijst",
      "cijfers",
      "kleuren",
      "producten",
      "gebruikers",
      "categorieën",
      "punten",
      "talen",
    ],
    __boolean: [
      "status",
      "is_actief",
      "mag_gebruiken",
      "is_klaar",
      "geautoriseerd",
      "is_ingelogd",
      "draait",
      "voltooid",
      "geverifieerd",
      "verwijderd",
    ],
    __function: [
      "haalNaamOp",
      "berekenWaarde",
      "toonGegevens",
      "updateProfiel",
      "formatteerTekst",
      "analyseerCode",
      "checkInvoer",
      "slaBestandOp",
      "stuurBericht",
      "somAllesOp",
    ],
    __number: [
      "leeftijd",
      "geboortejaar",
      "gemiddelde",
      "totaal",
      "prijs",
      "index",
      "tijd",
      "aantal",
      "score",
      "uur",
    ],
    __object: [
      "persoon",
      "klant",
      "instellingen",
      "antwoord",
      "betaling",
      "configuratie",
      "profiel",
      "adres",
      "metadata",
      "sessie",
    ],
    __string: [
      "naam",
      "titel",
      "omschrijving",
      "email",
      "wachtwoord",
      "bericht",
      "tag",
      "sleutel",
      "url",
      "link",
    ],
    __void: [
      "starten",
      "verwijderen",
      "stoppen",
      "opschonen",
      "vernietigen",
      "afsluiten",
      "wis_cache",
      "sla_alles_op",
      "verzenden",
      "inloggen",
    ],
  },
}).grammar();
