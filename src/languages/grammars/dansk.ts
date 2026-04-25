import { Language } from "../grammar.class.js";

export const dansk = new Language({
  language: "dansk",
  about:
    "ENIDE er en oversaettelig transpiler der muliggor programmering pa et hvilket som helst sprog",
  include: {
    main: "Inkluder",
    __description: "Bruges til at inkludere sprog eller biblioteker",
  },
  commands: {
    all: {
      __about: {
        main: "om",
        __description: "for at fa oplysninger om ENIDE",
      },
      __help: {
        main: "hjaelp",
        __description: "for at fa en liste over alle tilgaengelige kommandoer",
      },
      __version: {
        main: "version",
        __description: "for at fa den aktuelle version af ENIDE",
      },
      __languages: {
        main: "sprog",
        __description: "for at fa en liste over alle tilgaengelige sprog",
      },
      __documentation: {
        main: "dok",
        __description: "for at fa dokumentation for et sprog",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematik",
        __description: "for at fa adgang til matematiske funktioner",
      },
      __pi: {
        main: "PI",
        __description: "for at fa vaerdien af pi",
      },
      __sqrt: {
        main: "Kvadratrod",
        __description: "for at fa kvadratroden",
      },
      __pow: {
        main: "Potens",
        __description: "for at fa potensen af et tal",
      },
      __round: {
        main: "Afrund",
        __description: "for at afrunde et tal",
      },
      __random: {
        main: "Tilfaeldig",
        __description: "for at fa et tilfaeldigt tal",
      },
      __max: {
        main: "Maksimum",
        __description: "for at fa den maksimale vaerdi",
      },
      __min: {
        main: "Minimum",
        __description: "for at fa den minimale vaerdi",
      },
      __isNumber: {
        main: "ErTal",
        __description: "for at kontrollere om en vaerdi er et tal",
      },
      __isInteger: {
        main: "ErHeltal",
        __description: "for at kontrollere om en vaerdi er et heltal",
      },
      __isFloat: {
        main: "ErDecimal",
        __description: "for at kontrollere om en vaerdi er et decimaltal",
      },
    },
    __string: {
      main: {
        main: "tekst",
        __description: "for at fa adgang til tekstmanipulationsfunktioner",
      },
      __length: {
        main: "Laengde",
        __description: "for at fa laengden af en tekst",
      },
      __toUpperCase: {
        main: "TilStore",
        __description: "for at konvertere en tekst til store bogstaver",
      },
      __toLowerCase: {
        main: "TilSmaa",
        __description: "for at konvertere en tekst til sma bogstaver",
      },
    },
    __date: {
      main: {
        main: "dato",
        __description: "for at fa adgang til dato og tidsfunktioner",
      },
      __year: {
        main: "Aar",
        __description: "for at fa aret",
      },
      __month: {
        main: "Maned",
        __description: "for at fa maneden",
      },
      __dayMonth: {
        main: "DagManed",
        __description: "for at fa dagen i maneden",
      },
      __dayWeek: {
        main: "DagUge",
        __description: "for at fa dagen i ugen",
      },
      __hour: {
        main: "Time",
        __description: "for at fa timen",
      },
      __minute: {
        main: "Minut",
        __description: "for at fa minuttet",
      },
      __second: {
        main: "Sekund",
        __description: "for at fa sekundet",
      },
    },
  },
  types: {
    __object: {
      main: "objekt",
      __description: "til at erklare et statisk objekt",
    },
    __number: {
      main: "tal",
      __description: "for at erklaere en variabel af typen tal",
    },
    __string: {
      main: "tekst",
      __description: "for at erklaere en variabel af typen tekst",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Sandt",
        __false: "Falsk",
      },
      __description: "for at erklaere en variabel af typen boolsk",
    },
  },
  methods: {
    method: {
      __print: {
        main: "udskriv",
        __description: "for at udskrive en vaerdi pa skaermen",
      },
      __scan: {
        main: "laes",
        __description: "for at laese en vaerdi fra input",
      },
      __return: {
        main: "returner",
        __description: "for at returnere en vaerdi fra en funktion",
      },
    },
    sentences: {
      __function: {
        main: "funktion",
        __description: "for at erklaere en funktion",
      },
      __if: {
        main: "hvis",
        __description: "for at erklaere en betingelse",
      },
      __else: {
        main: "ellers",
        __description: "for at erklaere en alternativ betingelse",
      },
      __while: {
        main: "mens",
        __description: "for at erklaere en mens-loekke",
      },
      __for: {
        main: "for",
        __description: "for at erklaere en for-loekke",
      },
      __switch: {
        main: "vaelg",
        __description: "for at erklaere en valgstruktur",
      },
      __case: {
        main: "tilfaelde",
        __description: "for at erklaere et tilfaelde i valgstrukturen",
      },
      __default: {
        main: "standard",
        __description: "for at erklaere standardtilfaeldet i valgstrukturen",
      },
      __try: {
        main: "proev",
        __description: "for at erklaere en prøv-blok",
      },
      __catch: {
        main: "fang",
        __description: "for at erklaere en fejlhaandteringsblok",
      },
      __finally: {
        main: "endelig",
        __description: "for at erklaere en blok der altid udfores",
      },
    },
  },
  errors: {
    main: { tag: "FEJL", message: "Generisk systemfejl" },
    __UNKNOWN_ERROR: {
      tag: "UKENDT_FEJL",
      message: "Fuldstaendig ukendt fejl",
    },
    __TypeError: { tag: "TYPE_FEJL", message: "Ugyldig type i operationen" },
    __ReferenceError: {
      tag: "REFERENCE_FEJL",
      message: "Variabel eksisterer ikke i omfanget",
    },
    __SyntaxError: { tag: "SYNTAKS_FEJL", message: "Ugyldig kode" },
    __RangeError: {
      tag: "INTERVAL_FEJL",
      message: "Vaerdi uden for det tilladte interval",
    },
    __URIError: { tag: "URI_FEJL", message: "Fejlformet eller ugyldig URI" },
    __EvalError: { tag: "EVAL_FEJL", message: "Fejl relateret til eval" },
  },
}).grammar();
