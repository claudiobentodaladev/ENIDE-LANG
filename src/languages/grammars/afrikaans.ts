import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const afrikaans = new Language({
  language: "afrikaans",
  about:
    "ENIDE is 'n veeltalige transpiler wat programmering in enige taal moontlik maak",

  include: DocStr(
    "Insluit",
    "word gebruik om tale, biblioteke of datastrukture uit 'n ander lêer in te sluit",
  ),

  commands: {
    __about: DocStr("oor", "om inligting oor ENIDE te kry"),
    __help: DocStr("hulp", "om die lys van alle beskikbare opdragte te kry"),
    __version: DocStr("weergawe", "om die huidige weergawe van ENIDE te kry"),
    __languages: DocStr("tale", "om die lys van alle beskikbare tale te kry"),
    __documentation: DocStr("dok", "om die dokumentasie vir 'n taal te kry"),
    __grammar: DocStr("grammatika", "om die grammatika vir 'n taal te kry"),
  },

  library: {
    __standard: {
      main: DocStr("standaard", "om toegang tot standaard hulpmetodes te kry"),
      __isarray: DocStr("IsLys", "om te kontroleer of die waarde 'n lys is"),
      __isobject: DocStr(
        "IsVoorwerp",
        "om te kontroleer of die waarde 'n voorwerp is",
      ),
      __typeof: DocStr("Tipe", "om die tipe van 'n waarde te kry"),
      __parse: DocStr(
        "Ontleed",
        "om 'n waarde van teks na die korrekte tipe te omskep",
      ),
    },

    __math: {
      main: DocStr("wiskunde", "om toegang tot wiskundige funksies te kry"),
      __pi: DocStr("PI", "om die waarde van pi te kry"),
      __sqrt: DocStr(
        "Vierkantswortel",
        "om die vierkantswortel van 'n getal te kry",
      ),
      __pow: DocStr("Mag", "om die mag van 'n getal te kry"),
      __round: DocStr("Afrond", "om 'n getal af te rond"),
      __random: DocStr("Lukraak", "om 'n lukrake getal te kry"),
      __max: DocStr("Maksimum", "om die maksimum waarde te kry"),
      __min: DocStr("Minimum", "om die minimum waarde te kry"),
      __isNumber: DocStr(
        "IsGetal",
        "om te kontroleer of 'n waarde 'n getal is",
      ),
      __isInteger: DocStr(
        "IsHeelgetal",
        "om te kontroleer of 'n waarde 'n heelgetal is",
      ),
      __isFloat: DocStr(
        "IsDesimaal",
        "om te kontroleer of 'n waarde 'n desimale getal is",
      ),
      __cos: DocStr("Cos", "om die kosinus van 'n hoek in radiale te kry"),
      __sin: DocStr("Sin", "om die sinus van 'n hoek in radiale te kry"),
      __tan: DocStr("Tan", "om die tangens van 'n hoek in radiale te kry"),
    },

    __string: {
      main: DocStr("teks", "om toegang tot teksmanipulasie funksies te kry"),
      __length: DocStr("Lengte", "om die lengte van 'n teks te kry"),
      __toUpperCase: DocStr(
        "NaHoofletters",
        "om 'n teks na hoofletters te omskep",
      ),
      __toLowerCase: DocStr(
        "NaKleinletters",
        "om 'n teks na kleinletters te omskep",
      ),
      __include: DocStr(
        "Bevat",
        "om te kontroleer of 'n teks 'n subteks bevat",
      ),
      __repeat: DocStr("Herhaal", "om 'n teks 'n aantal kere te herhaal"),
    },

    __date: {
      main: DocStr("datum", "om toegang tot datum en tyd funksies te kry"),
      __now: DocStr("Nou", "om die huidige datum en tyd te kry"),
      __year: DocStr("Jaar", "om die jaar te kry"),
      __month: DocStr("Maand", "om die maand te kry"),
      __dayMonth: DocStr("DagMaand", "om die dag van die maand te kry"),
      __dayWeek: DocStr("DagWeek", "om die dag van die week te kry"),
      __hour: DocStr("Uur", "om die uur te kry"),
      __minute: DocStr("Minuut", "om die minuut te kry"),
      __second: DocStr("Sekonde", "om die sekonde te kry"),
    },
  },

  types: {
    __number: DocStr("getal", "om 'n veranderlike van tipe getal te verklaar"),
    __string: DocStr("teks", "om 'n veranderlike van tipe teks te verklaar"),
    __boolean: DocStr("bool", "om 'n veranderlike van tipe Boole te verklaar"),
    __object: DocStr("voorwerp", "om 'n statiese voorwerp te verklaar"),
    __void: DocStr(
      "leeg",
      "om 'n funksie wat geen waarde teruggee te verklaar",
    ),
    __array: DocStr("lys", "om 'n lysdata-struktuur te verklaar"),
  },

  specialValues: {
    __true: DocStr("Waar", "Boole-waarde waar"),
    __false: DocStr("Vals", "Boole-waarde vals"),
    __null: DocStr("Nul", "afwesigheid van waarde"),
  },

  words: {
    __new: DocStr("nuwe", "om 'n nuwe instansie van 'n klas te skep"),
    __this: DocStr("self", "om toegang tot eie klas-eienskappe te kry"),
    __extends: DocStr("verleng", "om te verklaar dat 'n klas van 'n ander erf"),
  },

  accessModifiers: {
    __private: DocStr("privaat", "slegs binne die klas toeganklik"),
    __public: DocStr("publiek", "van enige plek toeganklik"),
    __protected: DocStr("beskerm", "binne die klas en sy subklasse toeganklik"),
    __readonly: DocStr("leesalleen", "waarde kan slegs een keer toegeken word"),
    __static: DocStr(
      "staties",
      "behoort aan die klas self, nie aan instansies nie",
    ),
  },

  methods: {
    method: {
      __print: DocStr("druk", "om 'n waarde op die skerm te druk"),
      __scan: DocStr("lees", "om 'n waarde van die invoer te lees"),
      __return: DocStr(
        "gee_terug",
        "om 'n waarde vanuit 'n funksie terug te gee",
      ),
      __break: DocStr("breek", "om 'n lus te verlaat"),
      __continue: DocStr(
        "gaan_voort",
        "om na die volgende iterasie van 'n lus te spring",
      ),
    },

    sentences: {
      __function: DocStr("funksie", "om 'n funksie te verklaar"),
      __if: DocStr("as", "om 'n voorwaarde te verklaar"),
      __else: DocStr("anders", "om 'n alternatiewe voorwaarde te verklaar"),
      __while: DocStr("terwyl", "om 'n terwyl-lus te verklaar"),
      __for: DocStr("vir", "om 'n for-lus te verklaar"),
      __switch: DocStr("keuse", "om 'n keuse struktuur te verklaar"),
      __case: DocStr("geval", "om 'n geval in die keuse struktuur te verklaar"),
      __default: DocStr(
        "standaard",
        "om die standaard geval in die keuse struktuur te verklaar",
      ),
      __try: DocStr("probeer", "om 'n probeer blok te verklaar"),
      __catch: DocStr("vang", "om 'n fouthanteringsblok te verklaar"),
      __finally: DocStr(
        "uiteindelik",
        "om 'n blok te verklaar wat altyd uitgevoer word",
      ),
      __class: DocStr("klas", "om 'n klas te verklaar"),
      __constructor: DocStr(
        "konstruktor",
        "struktuur wat toelaat om eienskappe in 'n klas te verklaar",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Boodskap",
      "Waarde",
      "Veranderlike",
      "Eienskap",
      "Voorwerp",
      "Verwag",
      "Ontvang",
      "Konstante_Toekenning",
      "Duplikaat_Parameter",
      "Wenk",
      "Ongeldige_Token",
      "Stapel_Oorvloei",
      "Token",
      "Onverwagte_Einde_van_Invoer",
    ),
    main: errorMessage("FOUT", "generiese stelsel fout"),
    __TypeError: errorMessage("TIPE_FOUT", "ongeldige tipe in operasie"),
    __InitError: errorMessage(
      "INISIALISERING_FOUT",
      "veranderlike is nie geinitialiseer nie",
    ),
    __ReferenceError: errorMessage(
      "VERWYSING_FOUT",
      "veranderlike, funksie of biblioteek bestaan nie in die omvang nie",
    ),
    __SyntaxError: errorMessage("SINTAKSIS_FOUT", "ongeldige kode"),
    __RangeError: errorMessage(
      "REEKS_FOUT",
      "waarde buite die toegelate reeks",
    ),
    __URIError: errorMessage("URI_FOUT", "wanvormige of ongeldige URI"),
    __EvalError: errorMessage("EVAL_FOUT", "fout verwant aan eval"),
    __UNKNOWN_ERROR: errorMessage("ONBEKENDE_FOUT", "heeltemal onbekende fout"),
  },

  example: {
    __array: [
      "kos",
      "lande",
      "items",
      "etikette",
      "kleure",
      "produkte",
      "gebruikers",
      "kategoriee",
      "punte",
      "tale",
    ],
    __boolean: [
      "status",
      "isVolwasse",
      "isAktief",
      "isSignbaar",
      "hetToestemming",
      "isAangemeld",
      "isGeaktiveer",
      "isKlaar",
      "isGeverifieer",
      "isGeskrap",
    ],
    __function: [
      "kryNaam",
      "kryWaarde",
      "hanteerKlik",
      "haalData",
      "formateerDatum",
      "ontleedInvoer",
      "valideerVorm",
      "vertoonItem",
      "dateerToestandOp",
      "berekenTotaal",
    ],
    __number: [
      "ouderdom",
      "jaar",
      "telling",
      "totaal",
      "prys",
      "indeks",
      "duur",
      "hoeveelheid",
      "punt",
      "tydsverloop",
    ],
    __object: [
      "persoon",
      "gebruiker",
      "konfigurasie",
      "reaksie",
      "betaling",
      "instellings",
      "profiel",
      "adres",
      "metadata",
      "sessie",
    ],
    __string: [
      "naam",
      "titel",
      "beskrywing",
      "epos",
      "wagwoord",
      "boodskap",
      "etiket",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "aanmeld",
      "initialiseer",
      "skoonmaak",
      "herstel",
      "vernietig",
      "afmeld",
      "skoonmaakKasgeheue",
      "stoorInDb",
      "stuurEpos",
      "teken_aan",
    ],
  },
}).grammar();
