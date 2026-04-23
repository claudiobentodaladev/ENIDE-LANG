import { Language } from "../grammar.class.js";

export const nederlands = new Language({
  language: "nederlands",
  about:
    "ENIDE is een vertaalbare transpiler waarmee in elke taal geprogrammeerd kan worden",
  include: {
    main: "Importeren",
    __description: "Wordt gebruikt om talen of bibliotheken te importeren",
  },
  commands: {
    all: {
      __about: {
        main: "over",
        __description: "informatie over ENIDE verkrijgen",
      },
      __help: {
        main: "hulp",
        __description: "lijst van beschikbare opdrachten",
      },
      __version: {
        main: "versie",
        __description: "huidige versie van ENIDE",
      },
      __languages: {
        main: "talen",
        __description: "lijst van beschikbare talen",
      },
      __documentation: {
        main: "doc",
        __description: "documentatie van een taal",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "wiskunde",
        __description: "toegang tot wiskundige functies",
      },
      __pi: {
        main: "PI",
        __description: "waarde van pi",
      },
      __sqrt: {
        main: "Vierkantswortel",
        __description: "vierkantswortel berekenen",
      },
      __pow: {
        main: "Macht",
        __description: "macht van een getal",
      },
      __round: {
        main: "Afronden",
        __description: "getal afronden",
      },
      __random: {
        main: "Willekeurig",
        __description: "willekeurig getal genereren",
      },
      __max: {
        main: "Maximum",
        __description: "maximale waarde",
      },
      __min: {
        main: "Minimum",
        __description: "minimale waarde",
      },
      __isNumber: {
        main: "IsGetal",
        __description: "controleren of waarde een getal is",
      },
      __isInteger: {
        main: "IsGeheel",
        __description: "controleren of waarde een geheel getal is",
      },
      __isFloat: {
        main: "IsDecimaal",
        __description: "controleren of waarde een decimaal getal is",
      },
    },
    __string: {
      main: {
        main: "tekst",
        __description: "tekstmanipulatie functies",
      },
      __length: {
        main: "Lengte",
        __description: "lengte van tekst",
      },
      __toUpperCase: {
        main: "NaarHoofdletters",
        __description: "tekst naar hoofdletters",
      },
      __toLowerCase: {
        main: "NaarKleineletters",
        __description: "tekst naar kleine letters",
      },
    },
    __date: {
      main: {
        main: "datum",
        __description: "datum- en tijd functies",
      },
      __year: {
        main: "Jaar",
        __description: "jaar ophalen",
      },
      __month: {
        main: "Maand",
        __description: "maand ophalen",
      },
      __dayMonth: {
        main: "DagMaand",
        __description: "dag van de maand",
      },
      __dayWeek: {
        main: "DagWeek",
        __description: "dag van de week",
      },
      __hour: {
        main: "Uur",
        __description: "uur ophalen",
      },
      __minute: {
        main: "Minuut",
        __description: "minuut ophalen",
      },
      __second: {
        main: "Seconde",
        __description: "seconde ophalen",
      },
    },
  },
  types: {
    __object: {
      main: "object",
      __description: "statisch object declareren",
    },
    __number: {
      main: "getal",
      __description: "numerieke variabele",
    },
    __string: {
      main: "tekst",
      __description: "tekst variabele",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Waar", __false: "Onwaar" },
      __description: "booleaanse variabele",
    },
  },
  methods: {
    method: {
      __print: {
        main: "toon",
        __description: "waarde op het scherm tonen",
      },
      __scan: {
        main: "invoerLezen",
        __description: "waarde van gebruiker invoer lezen",
      },
      __return: {
        main: "teruggeven",
        __description: "waarde teruggeven uit functie",
      },
    },
    sentences: {
      __function: {
        main: "functie",
        __description: "functie declareren",
      },
      __if: {
        main: "als",
        __description: "voorwaarde",
      },
      __else: {
        main: "anders",
        __description: "alternatieve voorwaarde",
      },
      __while: {
        main: "zolang",
        __description: "while-lus",
      },
      __for: {
        main: "herhaal",
        __description: "for-lus (herhaling)",
      },
      __switch: {
        main: "keuze",
        __description: "keuzestructuur",
      },
      __case: {
        main: "geval",
        __description: "geval in keuze",
      },
      __default: {
        main: "standaard",
        __description: "standaardgeval",
      },
      __try: {
        main: "proberen",
        __description: "try blok",
      },
      __catch: {
        main: "opvangen",
        __description: "foutafhandeling",
      },
      __finally: {
        main: "tenslotte",
        __description: "altijd uitvoeren",
      },
    },
  },
  errors: {
    main: { tag: "FOUT", message: "Algemene systeemfout" },
    __UNKNOWN_ERROR: {
      tag: "ONBEKENDE_FOUT",
      message: "Onbekende fout",
    },
    __TypeError: {
      tag: "TYPE_FOUT",
      message: "Ongeldig type",
    },
    __ReferenceError: {
      tag: "REFERENTIE_FOUT",
      message: "Variabele bestaat niet",
    },
    __SyntaxError: {
      tag: "SYNTAXIS_FOUT",
      message: "Ongeldige code",
    },
    __RangeError: {
      tag: "BEREIK_FOUT",
      message: "Waarde buiten bereik",
    },
    __URIError: {
      tag: "URI_FOUT",
      message: "Ongeldige URI",
    },
    __EvalError: {
      tag: "EVAL_FOUT",
      message: "Eval fout",
    },
  },
}).grammar();
