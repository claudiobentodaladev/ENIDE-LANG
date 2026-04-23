import { Language } from "../grammar.class.js";

export const svenska = new Language({
  language: "svenska",
  about:
    "ENIDE ar en oversattbar transpiler som mojliggor programmering pa vilket sprak som helst",

  include: {
    main: "Inkludera",
    __description: "Används för att inkludera språk eller bibliotek",
  },

  commands: {
    all: {
      __about: {
        main: "Info",
        __description: "for att fa information om ENIDE",
      },
      __help: {
        main: "Hjalp",
        __description: "for att fa en lista over alla tillgangliga kommandon",
      },
      __version: {
        main: "Version",
        __description: "for att fa den aktuella versionen av ENIDE",
      },
      __languages: {
        main: "Sprak",
        __description: "for att fa en lista over alla tillgangliga sprak",
      },
      __documentation: {
        main: "Dok",
        __description: "for att fa dokumentation for ett sprak",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematik",
        __description: "for att komma at matematiska funktioner",
      },
      __pi: {
        main: "PI",
        __description: "for att fa vardet av pi",
      },
      __sqrt: {
        main: "Kvadratrot",
        __description: "for att fa kvadratroten",
      },
      __pow: {
        main: "Potens",
        __description: "for att fa potensen av ett tal",
      },
      __round: {
        main: "Avrunda",
        __description: "for att avrunda ett tal",
      },
      __random: {
        main: "Slumpmassig",
        __description: "for att fa ett slumpmassigt tal",
      },
      __max: {
        main: "Maximum",
        __description: "for att fa det maximala vardet",
      },
      __min: {
        main: "Minimum",
        __description: "for att fa det minimala vardet",
      },
      __isNumber: {
        main: "ArTal",
        __description: "for att kontrollera om ett varde ar ett tal",
      },
      __isInteger: {
        main: "ArHeltal",
        __description: "for att kontrollera om ett varde ar ett heltal",
      },
      __isFloat: {
        main: "ArDecimal",
        __description: "for att kontrollera om ett varde ar ett decimaltal",
      },
    },

    __string: {
      main: {
        main: "Strang",
        __description: "for att komma at textmanipuleringsfunktioner",
      },
      __length: {
        main: "Langd",
        __description: "for att fa langden pa en text",
      },
      __toUpperCase: {
        main: "TillVersaler",
        __description: "for att konvertera en text till versaler",
      },
      __toLowerCase: {
        main: "TillGemener",
        __description: "for att konvertera en text till gemener",
      },
    },

    __date: {
      main: {
        main: "Datum",
        __description: "for att komma at datum och tidsfunktioner",
      },
      __year: {
        main: "Ar",
        __description: "for att fa aret",
      },
      __month: {
        main: "Manad",
        __description: "for att fa manaden",
      },
      __dayMonth: {
        main: "DagManad",
        __description: "for att fa dagen i manaden",
      },
      __dayWeek: {
        main: "DagVecka",
        __description: "for att fa dagen i veckan",
      },
      __hour: {
        main: "Timme",
        __description: "for att fa timmen",
      },
      __minute: {
        main: "Minut",
        __description: "for att fa minuten",
      },
      __second: {
        main: "Sekund",
        __description: "for att fa sekunden",
      },
    },
  },

  types: {
    __object: {
      main: "Objekt",
      __description: "for att deklarera ett statiskt objekt",
    },
    __number: {
      main: "Tal",
      __description: "for att deklarera en variabel av typen tal",
    },
    __string: {
      main: "Text",
      __description: "for att deklarera en variabel av typen text",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Sant", __false: "Falskt" },
      __description: "for att deklarera en variabel av typen boolesk",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Skriv",
        __description: "for att skriva ut ett varde pa skarmen",
      },
      __scan: {
        main: "Las",
        __description: "for att lasa ett varde fran inmatning",
      },
      __return: {
        main: "Returnera",
        __description: "for att returnera ett varde fran en funktion",
      },
    },

    sentences: {
      __function: {
        main: "Funktion",
        __description: "for att deklarera en funktion",
      },
      __if: {
        main: "Om",
        __description: "for att deklarera ett villkor",
      },
      __else: {
        main: "Annars",
        __description: "for att deklarera ett alternativt villkor",
      },
      __while: {
        main: "Medan",
        __description: "for att deklarera en medan-loop",
      },
      __for: {
        main: "For",
        __description: "for att deklarera en for-loop",
      },
      __switch: {
        main: "Val",
        __description: "for att deklarera en valstruktur",
      },
      __case: {
        main: "Fall",
        __description: "for att deklarera ett fall i valstrukturen",
      },
      __default: {
        main: "Standard",
        __description: "for att deklarera standardfallet i valstrukturen",
      },
      __try: {
        main: "Forsok",
        __description: "for att deklarera ett forsok-block",
      },
      __catch: {
        main: "Fanga",
        __description: "for att deklarera ett felhanteringsblock",
      },
      __finally: {
        main: "Slutligen",
        __description: "for att deklarera ett block som alltid körs",
      },
    },
  },

  errors: {
    main: { tag: "FEL", message: "Generiskt systemfel" },
    __UNKNOWN_ERROR: { tag: "OKANT_FEL", message: "Fullstandigt okant fel" },
    __TypeError: { tag: "TYP_FEL", message: "Ogiltig typ i operationen" },
    __ReferenceError: {
      tag: "REFERENS_FEL",
      message: "Variabeln finns inte i omfanget",
    },
    __SyntaxError: { tag: "SYNTAX_FEL", message: "Ogiltig kod" },
    __RangeError: {
      tag: "INTERVALL_FEL",
      message: "Varde utanfor det tillatna intervallet",
    },
    __URIError: { tag: "URI_FEL", message: "Felformaterad eller ogiltig URI" },
    __EvalError: { tag: "EVAL_FEL", message: "Fel relaterat till eval" },
  },
}).grammar();
