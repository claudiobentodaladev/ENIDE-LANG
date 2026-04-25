import { Language } from "../grammar.class.js";

export const deutsch = new Language({
  language: "deutsch",
  about:
    "ENIDE ist ein uebersetzbar Transpiler der das Programmieren in jeder Sprache ermoeglicht",
  include: {
    main: "Einbinden",
    __description: "Wird verwendet, um Sprachen oder Bibliotheken einzubinden",
  },
  commands: {
    all: {
      __about: {
        main: "ueber",
        __description: "um Informationen ueber ENIDE zu erhalten",
      },
      __help: {
        main: "hilfe",
        __description: "um die Liste aller verfugbaren Befehle zu erhalten",
      },
      __version: {
        main: "version",
        __description: "um die aktuelle Version von ENIDE zu erhalten",
      },
      __languages: {
        main: "sprachen",
        __description: "um die Liste aller verfugbaren Sprachen zu erhalten",
      },
      __documentation: {
        main: "dok",
        __description: "um die Dokumentation fur eine Sprache zu erhalten",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "mathematik",
        __description: "um auf mathematische Funktionen zuzugreifen",
      },
      __pi: {
        main: "PI",
        __description: "um den Wert von Pi zu erhalten",
      },
      __sqrt: {
        main: "Quadratwurzel",
        __description: "um die Quadratwurzel zu erhalten",
      },
      __pow: {
        main: "Potenz",
        __description: "um die Potenz einer Zahl zu erhalten",
      },
      __round: {
        main: "Runden",
        __description: "um eine Zahl zu runden",
      },
      __random: {
        main: "Zufall",
        __description: "um eine Zufallszahl zu erhalten",
      },
      __max: {
        main: "Maximum",
        __description: "um den maximalen Wert zu erhalten",
      },
      __min: {
        main: "Minimum",
        __description: "um den minimalen Wert zu erhalten",
      },
      __isNumber: {
        main: "IstZahl",
        __description: "um zu prüfen ob ein Wert eine Zahl ist",
      },
      __isInteger: {
        main: "IstGanzzahl",
        __description: "um zu prüfen ob ein Wert eine ganze Zahl ist",
      },
      __isFloat: {
        main: "IstDezimal",
        __description: "um zu prüfen ob ein Wert eine Dezimalzahl ist",
      },
    },
    __string: {
      main: {
        main: "zeichenkette",
        __description: "um auf Zeichenketten-Funktionen zuzugreifen",
      },
      __length: {
        main: "Laenge",
        __description: "um die Laenge einer Zeichenkette zu erhalten",
      },
      __toUpperCase: {
        main: "ZuGrossSchreibung",
        __description: "um eine Zeichenkette in Grossbuchstaben umzuwandeln",
      },
      __toLowerCase: {
        main: "ZuKleinschreibung",
        __description: "um eine Zeichenkette in Kleinbuchstaben umzuwandeln",
      },
    },
    __date: {
      main: {
        main: "datum",
        __description: "um auf Datums- und Zeitfunktionen zuzugreifen",
      },
      __year: {
        main: "Jahr",
        __description: "um das Jahr zu erhalten",
      },
      __month: {
        main: "Monat",
        __description: "um den Monat zu erhalten",
      },
      __dayMonth: {
        main: "TagMonat",
        __description: "um den Tag des Monats zu erhalten",
      },
      __dayWeek: {
        main: "TagWoche",
        __description: "um den Tag der Woche zu erhalten",
      },
      __hour: {
        main: "Stunde",
        __description: "um die Stunde zu erhalten",
      },
      __minute: {
        main: "Minute",
        __description: "um die Minute zu erhalten",
      },
      __second: {
        main: "Sekunde",
        __description: "um die Sekunde zu erhalten",
      },
    },
  },
  types: {
    __object: {
      main: "objekt",
      __description: "um ein statisches objekt zu deklarieren",
    },
    __number: {
      main: "zahl",
      __description: "um eine Variable vom Typ Zahl zu deklarieren",
    },
    __string: {
      main: "zeichenkette",
      __description: "um eine Variable vom Typ Zeichenkette zu deklarieren",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Wahr",
        __false: "Falsch",
      },
      __description: "um eine Variable vom Typ Boolescher Wert zu deklarieren",
    },
  },
  methods: {
    method: {
      __print: {
        main: "drucken",
        __description: "um einen Wert auf dem Bildschirm auszugeben",
      },
      __scan: {
        main: "lesen",
        __description: "um einen Wert aus der Eingabe zu lesen",
      },
      __return: {
        main: "zurueckgeben",
        __description: "um einen Wert aus einer Funktion zuruckzugeben",
      },
    },
    sentences: {
      __function: {
        main: "funktion",
        __description: "um eine Funktion zu deklarieren",
      },
      __if: {
        main: "wenn",
        __description: "um eine Bedingung zu deklarieren",
      },
      __else: {
        main: "sonst",
        __description: "um eine alternative Bedingung zu deklarieren",
      },
      __while: {
        main: "solange",
        __description: "um eine solange-Schleife zu deklarieren",
      },
      __for: {
        main: "fuer",
        __description: "um eine fuer-Schleife zu deklarieren",
      },
      __switch: {
        main: "auswahl",
        __description: "um eine Auswahlstruktur zu deklarieren",
      },
      __case: {
        main: "fall",
        __description: "um einen Fall in der Auswahlstruktur zu deklarieren",
      },
      __default: {
        main: "standard",
        __description:
          "um den Standardfall in der Auswahlstruktur zu deklarieren",
      },
      __try: {
        main: "versuchen",
        __description: "um einen versuchen-Block zu deklarieren",
      },
      __catch: {
        main: "abfangen",
        __description: "um einen Fehlerbehandlungsblock zu deklarieren",
      },
      __finally: {
        main: "schliesslich",
        __description:
          "um einen Block zu deklarieren der immer ausgefuhrt wird",
      },
    },
  },
  errors: {
    main: { tag: "FEHLER", message: "Allgemeiner Systemfehler" },
    __UNKNOWN_ERROR: {
      tag: "UNBEKANNTER_FEHLER",
      message: "Vollstandig unbekannter Fehler",
    },
    __TypeError: {
      tag: "TYP_FEHLER",
      message: "Ungultiger Typ in der Operation",
    },
    __ReferenceError: {
      tag: "REFERENZ_FEHLER",
      message: "Variable existiert nicht im Scope",
    },
    __SyntaxError: { tag: "SYNTAX_FEHLER", message: "Ungultiger Code" },
    __RangeError: {
      tag: "BEREICH_FEHLER",
      message: "Wert ausserhalb des erlaubten Bereichs",
    },
    __URIError: {
      tag: "URI_FEHLER",
      message: "Fehlerhafte oder ungultige URI",
    },
    __EvalError: {
      tag: "EVAL_FEHLER",
      message: "Fehler im Zusammenhang mit eval",
    },
  },
}).grammar();
