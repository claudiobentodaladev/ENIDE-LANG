import { Language } from "../grammar.class.js";

export const svenska = new Language({
  language: "svenska",
  about:
    "ENIDE är en översättbar transpiler som möjliggör programmering på vilket språk som helst",

  include: {
    main: "Inkludera",
    __description: "Används för att inkludera språk eller bibliotek",
  },

  commands: {
    all: {
      __about: {
        main: "Info",
        __description: "för att få information om ENIDE",
      },
      __help: {
        main: "Hjalp",
        __description: "för att få en lista över alla tillgängliga kommandon",
      },
      __version: {
        main: "Version",
        __description: "för att få den aktuella versionen av ENIDE",
      },
      __languages: {
        main: "Sprak",
        __description: "för att få en lista över alla tillgängliga språk",
      },
      __documentation: {
        main: "Dok",
        __description: "för att få dokumentation för ett språk",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematik",
        __description: "för att komma åt matematiska funktioner",
      },
      __pi: {
        main: "PI",
        __description: "för att få värdet av pi",
      },
      __sqrt: {
        main: "Kvadratrot",
        __description: "för att få kvadratroten",
      },
      __pow: {
        main: "Potens",
        __description: "för att få potensen av ett tal",
      },
      __round: {
        main: "Avrunda",
        __description: "för att avrunda ett tal",
      },
      __random: {
        main: "Slumpmassig",
        __description: "för att få ett slumpmässigt tal",
      },
      __max: {
        main: "Maximum",
        __description: "för att få det maximala värdet",
      },
      __min: {
        main: "Minimum",
        __description: "för att få det minimala värdet",
      },
      __isNumber: {
        main: "ArTal",
        __description: "för att kontrollera om ett värde är ett tal",
      },
      __isInteger: {
        main: "ArHeltal",
        __description: "för att kontrollera om ett värde är ett heltal",
      },
      __isFloat: {
        main: "ArDecimal",
        __description: "för att kontrollera om ett värde är ett decimaltal",
      },
    },

    __string: {
      main: {
        main: "Strang",
        __description: "för att komma åt textmanipuleringsfunktioner",
      },
      __length: {
        main: "Langd",
        __description: "för att få längden på en text",
      },
      __toUpperCase: {
        main: "TillVersaler",
        __description: "för att konvertera en text till versaler",
      },
      __toLowerCase: {
        main: "TillGemener",
        __description: "för att konvertera en text till gemener",
      },
    },

    __date: {
      main: {
        main: "Datum",
        __description: "för att komma åt datum och tidsfunktioner",
      },
      __year: {
        main: "Ar",
        __description: "för att få året",
      },
      __month: {
        main: "Manad",
        __description: "för att få månaden",
      },
      __dayMonth: {
        main: "DagManad",
        __description: "för att få dagen i månaden",
      },
      __dayWeek: {
        main: "DagVecka",
        __description: "för att få dagen i veckan",
      },
      __hour: {
        main: "Timme",
        __description: "för att få timmen",
      },
      __minute: {
        main: "Minut",
        __description: "för att få minuten",
      },
      __second: {
        main: "Sekund",
        __description: "för att få sekunden",
      },
    },
  },

  types: {
    __object: {
      main: "Objekt",
      __description: "för att deklarera ett statiskt objekt",
    },
    __number: {
      main: "Tal",
      __description: "för att deklarera en variabel av typen tal",
    },
    __string: {
      main: "Text",
      __description: "för att deklarera en variabel av typen text",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Sant", __false: "Falskt" },
      __description: "för att deklarera en variabel av typen boolesk",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Skriv",
        __description: "för att skriva ut ett värde på skärmen",
      },
      __scan: {
        main: "Las",
        __description: "för att läsa ett värde från inmatning",
      },
      __return: {
        main: "Returnera",
        __description: "för att returnera ett värde från en funktion",
      },
    },

    sentences: {
      __function: {
        main: "Funktion",
        __description: "för att deklarera en funktion",
      },
      __if: {
        main: "Om",
        __description: "för att deklarera ett villkor",
      },
      __else: {
        main: "Annars",
        __description: "för att deklarera ett alternativt villkor",
      },
      __while: {
        main: "Medan",
        __description: "för att deklarera en medan-loop",
      },
      __for: {
        main: "For",
        __description: "för att deklarera en for-loop",
      },
      __switch: {
        main: "Val",
        __description: "för att deklarera en valstruktur",
      },
      __case: {
        main: "Fall",
        __description: "för att deklarera ett fall i valstrukturen",
      },
      __default: {
        main: "Standard",
        __description: "för att deklarera standardfallet i valstrukturen",
      },
      __try: {
        main: "Forsok",
        __description: "för att deklarera ett försök-block",
      },
      __catch: {
        main: "Fanga",
        __description: "för att deklarera ett felhanteringsblock",
      },
      __finally: {
        main: "Slutligen",
        __description: "för att deklarera ett block som alltid körs",
      },
    },
  },

  errors: {
    main: { tag: "FEL", message: "Generiskt systemfel" },
    __UNKNOWN_ERROR: { tag: "OKÄNT_FEL", message: "Fullständigt okänt fel" },
    __TypeError: { tag: "TYP_FEL", message: "Ogiltig typ i operationen" },
    __ReferenceError: {
      tag: "REFERENS_FEL",
      message: "Variabeln finns inte i omfånget",
    },
    __SyntaxError: { tag: "SYNTAX_FEL", message: "Ogiltig kod" },
    __RangeError: {
      tag: "INTERVALL_FEL",
      message: "Värde utanför det tillåtna intervallet",
    },
    __URIError: { tag: "URI_FEL", message: "Felformaterad eller ogiltig URI" },
    __EvalError: { tag: "EVAL_FEL", message: "Fel relaterat till eval" },
  },
}).grammar();
