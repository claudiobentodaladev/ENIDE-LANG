import { Language } from "../grammar.class.js";

export const gaeilge = new Language({
  language: "gaeilge",
  about:
    "Is transpiler inaistrithe e ENIDE a ligeann duit riomhclaru in aon teanga",
  include: {
    main: "Cuir_san_aireamh",
    __description: "Úsáidtear chun teanga nó leabharlanna a chur san áireamh",
  },
  commands: {
    all: {
      __about: {
        main: "faoi",
        __description: "chun eolas faoi ENIDE a fhail",
      },
      __help: {
        main: "cabhair",
        __description: "chun liosta na n-orduithe ar fad ata ar fail a fhail",
      },
      __version: {
        main: "leagan",
        __description: "chun leagan reatha ENIDE a fhail",
      },
      __languages: {
        main: "teangacha",
        __description: "chun liosta na dteangacha ar fad ata ar fail a fhail",
      },
      __documentation: {
        main: "doc",
        __description: "chun docimead teanga a fhail",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matamaitic",
        __description: "chun rochtain a fhail ar fheidhmeanna matamaitice",
      },
      __pi: {
        main: "PI",
        __description: "chun luach pi a fhail",
      },
      __sqrt: {
        main: "FreamhCearnach",
        __description: "chun an fhreamh chearnach a fhail",
      },
      __pow: {
        main: "Cumhacht",
        __description: "chun cumhacht uimhir a fhail",
      },
      __round: {
        main: "Cruinnigh",
        __description: "chun uimhir a chruinniu",
      },
      __random: {
        main: "Randamach",
        __description: "chun uimhir randamach a fhail",
      },
      __max: {
        main: "Uasmheid",
        __description: "chun an luach is mo a fhail",
      },
      __min: {
        main: "Iosmheid",
        __description: "chun an luach is lu a fhail",
      },
      __isNumber: {
        main: "IsUimhir",
        __description: "chun seiceail an luach uimhir",
      },
      __isInteger: {
        main: "IsSlanuimhir",
        __description: "chun seiceail an luach slanuimhir",
      },
      __isFloat: {
        main: "IsDeachulach",
        __description: "chun seiceail an luach deachulach",
      },
    },
    __string: {
      main: {
        main: "teaghra",
        __description:
          "chun rochtain a fhail ar fheidhmeanna ionramhala teaghran",
      },
      __length: {
        main: "Fad",
        __description: "chun fad teaghrain a fhail",
      },
      __toUpperCase: {
        main: "GoCeannlitreacha",
        __description: "chun teaghra a thiontú go ceannlitreacha",
      },
      __toLowerCase: {
        main: "GoLitreachaBeaga",
        __description: "chun teaghra a thiontú go litreacha beaga",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "chun rochtain a fhail ar fheidhmeanna data agus ama",
      },
      __year: {
        main: "Bliain",
        __description: "chun an bhliain a fhail",
      },
      __month: {
        main: "Mi",
        __description: "chun an mi a fhail",
      },
      __dayMonth: {
        main: "LaenaMi",
        __description: "chun la na mi a fhail",
      },
      __dayWeek: {
        main: "LaenaSheachtain",
        __description: "chun la na seachtaine a fhail",
      },
      __hour: {
        main: "Uair",
        __description: "chun an uair a fhail",
      },
      __minute: {
        main: "Noimead",
        __description: "chun an noiméad a fhail",
      },
      __second: {
        main: "Soicind",
        __description: "chun an soicind a fhail",
      },
    },
  },
  types: {
    __object: { main: "rud", __description: "chun rud staiteach a dhearbhu" },
    __number: {
      main: "uimhir",
      __description: "chun athrog den chineál uimhir a dhearbhu",
    },
    __string: {
      main: "teaghra",
      __description: "chun athrog den chineál teaghráin a dhearbhu",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Fior",
        __false: "Breag",
      },
      __description: "chun athrog den chineál Boole a dhearbhu",
    },
  },
  methods: {
    method: {
      __print: {
        main: "priontail",
        __description: "chun luach a phriontail ar an scailean",
      },
      __scan: {
        main: "leigh",
        __description: "chun luach a leamh on ionchur",
      },
      __return: {
        main: "fill",
        __description: "chun luach a fhilleadh o fheidhm",
      },
    },
    sentences: {
      __function: {
        main: "feidhm",
        __description: "chun feidhm a dhearbhu",
      },
      __if: {
        main: "ma",
        __description: "chun coinnioll a dhearbhu",
      },
      __else: {
        main: "no",
        __description: "chun coinnioll malartach a dhearbhu",
      },
      __while: {
        main: "fad",
        __description: "chun lupa fad a dhearbhu",
      },
      __for: {
        main: "do",
        __description: "chun lupa do a dhearbhu",
      },
      __switch: {
        main: "rogha",
        __description: "chun struchtúr rogha a dhearbhu",
      },
      __case: {
        main: "cas",
        __description: "chun cas sa struchtúr rogha a dhearbhu",
      },
      __default: {
        main: "reidhchas",
        __description: "chun an cas reidhchais sa struchtúr rogha a dhearbhu",
      },
      __try: {
        main: "DeanIarracht",
        __description: "chun bloc dean iarracht a dhearbhu",
      },
      __catch: {
        main: "gaibh",
        __description: "chun bloc laimhseala earraidi a dhearbhu",
      },
      __finally: {
        main: "SaDeireadh",
        __description: "chun bloc a dhearbhu a rithfidh i gconal",
      },
    },
  },
  errors: {
    main: { tag: "EARRAID", message: "Earraid ghinearalta an chorais" },
    __UNKNOWN_ERROR: {
      tag: "EARRAID_ANAITHNID",
      message: "Earraid nach bhfuil aithne uirthi",
    },
    __TypeError: {
      tag: "EARRAID_CINEAIL",
      message: "Cineal neamhbhaili san oibriocht",
    },
    __ReferenceError: {
      tag: "EARRAID_TAGARTHA",
      message: "Ni ann don athrog san raon",
    },
    __SyntaxError: { tag: "EARRAID_COMHREIRE", message: "Cod neamhbhaili" },
    __RangeError: {
      tag: "EARRAID_RAOIN",
      message: "Luach lasmuigh den raon ceadaithe",
    },
    __URIError: { tag: "EARRAID_URI", message: "URI michumtha no neamhbhaili" },
    __EvalError: {
      tag: "EARRAID_EVAL",
      message: "Earraid a bhaineann le eval",
    },
  },
}).grammar();
