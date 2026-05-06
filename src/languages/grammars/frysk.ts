import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const frysk = new Language({
  language: "frysk",
  about:
    "ENIDE is in oersettbere transpiler dy't programmearjen yn elke taal mooglik makket",

  include: DocStr("Ynfoegje", "Brûkt om taal of biblioteken ta te foegjen"),

  commands: {
    __about: DocStr("oer", "om ynformaasje oer ENIDE te krijen"),
    __help: DocStr(
      "help",
      "om de list fan alle beskikbere kommando's te krijen",
    ),
    __version: DocStr("ferzje", "om de aktuele ferzje fan ENIDE te krijen"),
    __languages: DocStr(
      "talen",
      "om de list fan alle beskikbere talen te krijen",
    ),
    __documentation: DocStr(
      "dok",
      "om de dokumintaasje foar in taal te krijen",
    ),
    __grammar: DocStr("grammatika", "om de grammatika foar in taal te krijen"),
  },

  library: {
    __standard: {
      main: DocStr(
        "standert",
        "om tagong te krijen ta nuttiche standertsmetoaden",
      ),
      __isarray: DocStr(
        "IsArray",
        "om te kontrolearjen oft in wearde in array is",
      ),
      __isobject: DocStr(
        "IsObjekt",
        "om te kontrolearjen oft in wearde in objekt is",
      ),
      __typeof: DocStr("Type", "om it type fan in wearde te krijen"),
      __parse: DocStr(
        "Parse",
        "om in wearde fan tekst nei it juste type te konvertearjen",
      ),
    },

    __math: {
      main: DocStr("wiskunde", "om tagong te krijen ta wiskundige funksjes"),
      __pi: DocStr("PI", "om de wearde fan pi te krijen"),
      __sqrt: DocStr(
        "Fjouwerkantswurtel",
        "om de fjouwerkantswurtel te krijen",
      ),
      __pow: DocStr("Macht", "om de macht fan in getal te krijen"),
      __round: DocStr("Ôfrûnje", "om in getal ôf te rûnjen"),
      __random: DocStr("Willekeurich", "om in willekeurich getal te krijen"),
      __max: DocStr("Maksimum", "om de maksimale wearde te krijen"),
      __min: DocStr("Minimum", "om de minimale wearde te krijen"),
      __isNumber: DocStr(
        "IsGetal",
        "om te kontrolearjen oft in wearde in getal is",
      ),
      __isInteger: DocStr(
        "IsHeelgetal",
        "om te kontrolearjen oft in wearde in heelgetal is",
      ),
      __isFloat: DocStr(
        "IsDesimaal",
        "om te kontrolearjen oft in wearde in desimaal is",
      ),
      __cos: DocStr("Cos", "om de cosinus fan in hoeke yn radianen te krijen"),
      __sin: DocStr("Sin", "om de sinus fan in hoeke yn radianen te krijen"),
      __tan: DocStr("Tan", "om de tangens fan in hoeke yn radianen te krijen"),
    },

    __string: {
      main: DocStr(
        "tekst",
        "om tagong te krijen ta tekstmanipulaasje funksjes",
      ),
      __length: DocStr("Lingte", "om de lingte fan in tekst te krijen"),
      __toUpperCase: DocStr(
        "NeiHaadletters",
        "om in tekst nei haadletters te konvertearjen",
      ),
      __toLowerCase: DocStr(
        "NeiLytseLetters",
        "om in tekst nei lytse letters te konvertearjen",
      ),
      __include: DocStr(
        "Befettet",
        "om te kontrolearjen oft in tekst in dielstring befettet",
      ),
      __repeat: DocStr(
        "Werhelje",
        "om in tekst in opjûn oantal kearen te werheljen",
      ),
    },

    __date: {
      main: DocStr("datum", "om tagong te krijen ta datum en tiid funksjes"),
      __now: DocStr("No", "om de aktuele datum en tiid te krijen"),
      __year: DocStr("Jier", "om it jier te krijen"),
      __month: DocStr("Moanne", "om de moanne te krijen"),
      __dayMonth: DocStr("DeiMoanne", "om de dei fan de moanne te krijen"),
      __dayWeek: DocStr("DeiWike", "om de dei fan de wike te krijen"),
      __hour: DocStr("Oere", "om it oere te krijen"),
      __minute: DocStr("Minút", "om de minút te krijen"),
      __second: DocStr("Sekonde", "om de sekonde te krijen"),
    },
  },

  types: {
    __number: DocStr(
      "getal",
      "om in fariabele fan it type getal te deklarearjen",
    ),
    __string: DocStr(
      "tekst",
      "om in fariabele fan it type tekst te deklarearjen",
    ),
    __boolean: DocStr(
      "bool",
      "om in fariabele fan it type boolsk te deklarearjen",
    ),
    __object: DocStr("objekt", "om in statysk objekt te deklarearjen"),
    __void: DocStr(
      "leech",
      "om in funksje te deklarearjen dy't gjin wearde werômjout",
    ),
    __array: DocStr("array", "om in arraydatastruktuer te deklarearjen"),
  },

  specialValues: {
    __true: DocStr("Wier", "boolske wearde wier"),
    __false: DocStr("Falsk", "boolske wearde falsk"),
    __null: DocStr("neat", "ôfwêzigens fan wearde"),
  },

  words: {
    __new: DocStr("nij", "om in nij eksimplaar fan in klasse te meitsjen"),
    __this: DocStr(
      "dit",
      "om tagong te krijen ta attributen fan de eigen klasse",
    ),
    __extends: DocStr(
      "útwreidet",
      "om te deklarearjen dat in klasse fan in oare erft",
    ),
  },

  accessModifiers: {
    __private: DocStr("privee", "allinnich tagonklik binnen de klasse"),
    __public: DocStr("iepenbier", "tagonklik fan oeral"),
    __protected: DocStr(
      "beskerme",
      "tagonklik binnen de klasse en har subklassen",
    ),
    __readonly: DocStr(
      "allinnich_leze",
      "de wearde kin mar ien kear tawiisd wurde",
    ),
    __static: DocStr("statysk", "heart by de klasse, net by eksimplaren"),
  },

  methods: {
    method: {
      __print: DocStr("printsje", "om in wearde op it skerm te printsjen"),
      __scan: DocStr("leze", "om in wearde fan de ynfier te lezen"),
      __return: DocStr(
        "weromjaan",
        "om in wearde fan in funksje werom te jaan",
      ),
      __break: DocStr("brekke", "om út in lus te brekken"),
      __continue: DocStr(
        "trochgean",
        "om nei de folgjende iteraasje te springen",
      ),
    },

    sentences: {
      __function: DocStr("funksje", "om in funksje te deklarearjen"),
      __if: DocStr("as", "om in betingst te deklarearjen"),
      __else: DocStr("oars", "om in alternative betingst te deklarearjen"),
      __while: DocStr("wylst", "om in wylst-lus te deklarearjen"),
      __for: DocStr("foar", "om in foar-lus te deklarearjen"),
      __switch: DocStr("karstruktur", "om in karstruktuer te deklarearjen"),
      __case: DocStr("gefal", "om in gefal yn de karstruktuer te deklarearjen"),
      __default: DocStr(
        "standert",
        "om it standertefal yn de karstruktuer te deklarearjen",
      ),
      __try: DocStr("besykje", "om in besykje-blok te deklarearjen"),
      __catch: DocStr(
        "opfange",
        "om in flaterbehannelings blok te deklarearjen",
      ),
      __finally: DocStr(
        "uteinlik",
        "om in blok te deklarearjen dat altyd útfierd wurdt",
      ),
      __class: DocStr("klasse", "om in klasse te deklarearjen"),
      __constructor: DocStr(
        "konstruktor",
        "struktuer foar it deklarearjen fan attributen yn in klasse",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Berjocht",
      "Wearde",
      "Fariabele",
      "Eigenskip",
      "Objekt",
      "Ferwachte",
      "Ûntfongen",
      "Konstante_Tawizing",
      "Dûbele_Parameter",
      "Tip",
      "Unjildich_Token",
      "Stapel_Oerstream",
      "Token",
      "Ûnferwachte_Ein",
    ),
    main: errorMessage("FLATER", "algemiene systeemflater"),
    __TypeError: errorMessage("TYPE_FLATER", "unjildich type yn de operaasje"),
    __InitError: errorMessage(
      "INISJALISAASJE_FLATER",
      "fariabele is net inisjalisearrd",
    ),
    __ReferenceError: errorMessage(
      "REFERINSJE_FLATER",
      "fariabele, funksje of biblioteek bestiet net yn it berik",
    ),
    __SyntaxError: errorMessage("SYNTAKSIS_FLATER", "unjildige koade"),
    __RangeError: errorMessage(
      "BERIK_FLATER",
      "wearde buten it tastiene berik",
    ),
    __URIError: errorMessage("URI_FLATER", "ferkeard foarme of unjildige URI"),
    __EvalError: errorMessage("EVAL_FLATER", "flater relatearre oan eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ONBEKENDE_FLATER",
      "folslein ûnbekende flater",
    ),
  },

  example: {
    __array: [
      "iten",
      "lannen",
      "eleminten",
      "tags",
      "kleuren",
      "produkten",
      "brûkers",
      "kategoryen",
      "punten",
      "talen",
    ],
    __boolean: [
      "steat",
      "isWolwoeksen",
      "isAktif",
      "isZichtber",
      "hatTastimming",
      "isYnlogd",
      "isYnskeakele",
      "isDien",
      "isFerifieard",
      "isWiske",
    ],
    __function: [
      "nammeKrije",
      "weardeKrije",
      "klikBehannelje",
      "gegevensOphelje",
      "datumOpmakje",
      "ynfierAnalysearje",
      "formulierFalidearje",
      "elemintrenderje",
      "steatBywurkje",
      "totalBerekkenje",
    ],
    __number: [
      "leeftyd",
      "jier",
      "teller",
      "totaal",
      "priis",
      "yndeks",
      "doer",
      "hoeveelheid",
      "punten",
      "timeout",
    ],
    __object: [
      "persoan",
      "brûker",
      "config",
      "antwurd",
      "betelling",
      "ynstellingen",
      "profyl",
      "adres",
      "metadata",
      "sesje",
    ],
    __string: [
      "namme",
      "titel",
      "beskriuwing",
      "email",
      "wachtwurd",
      "berjocht",
      "label",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "ynlogge",
      "inisjalisearje",
      "skjinmeitsje",
      "weromstelle",
      "ferneatigje",
      "útlogge",
      "cacheLegje",
      "ynDBbewarje",
      "emailFerstjoere",
      "barreRegistrearje",
    ],
  },
}).grammar();
