import { Language } from "../grammar.class.js";

export const somali = new Language({
  language: "somali",
  about:
    "ENIDE waa transpiler kuu ogolaanaya inaad ku qorto barnaamij kasta luuqad kasta",

  include: {
    main: "KuDar",
    __description: "loo isticmaalo in lagu daro luuqad ama maktabado",
  },

  commands: {
    all: {
      __about: {
        main: "ku_saabsan",
        __description: "macluumaad ku saabsan ENIDE",
      },
      __help: {
        main: "caawimo",
        __description: "liiska amarrada",
      },
      __version: {
        main: "nuqul",
        __description: "nuqulka ENIDE",
      },
      __languages: {
        main: "luuqadaha",
        __description: "liiska luuqadaha",
      },
      __documentation: {
        main: "dukumiinti",
        __description: "dukumiintiga luuqadda",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "xisaab",
        __description: "hawlaha xisaabta",
      },
      __pi: {
        main: "PI",
        __description: "qiimaha pi",
      },
      __sqrt: {
        main: "xidid",
        __description: "xidid laba-geesood ah",
      },
      __pow: {
        main: "quwad",
        __description: "kor u qaadis tiro",
      },
      __round: {
        main: "wareeg",
        __description: "wareejinta tiro",
      },
      __random: {
        main: "nasiib",
        __description: "tiro aan la saadaalin",
      },
      __max: {
        main: "weyn",
        __description: "ugu weyn",
      },
      __min: {
        main: "yar",
        __description: "ugu yar",
      },
      __isNumber: {
        main: "waa_lambar",
        __description: "hubi haddii ay tahay lambar",
      },
      __isInteger: {
        main: "waa_idil",
        __description: "hubi haddii ay tahay tiro idil",
      },
      __isFloat: {
        main: "waa_dhibic",
        __description: "hubi haddii ay leedahay jajab",
      },
    },

    __string: {
      main: {
        main: "qoraal",
        __description: "hawlaha qoraalka",
      },
      __length: {
        main: "dherer",
        __description: "dhererka qoraalka",
      },
      __toUpperCase: {
        main: "weynee",
        __description: "u beddel xarfo waaweyn",
      },
      __toLowerCase: {
        main: "yaree",
        __description: "u beddel xarfo yaryar",
      },
    },

    __date: {
      main: {
        main: "taariikh",
        __description: "waqti iyo taariikh",
      },
      __year: {
        main: "sanad",
        __description: "sanad",
      },
      __month: {
        main: "bil",
        __description: "bil",
      },
      __dayMonth: {
        main: "maalin_bil",
        __description: "maalinta bisha",
      },
      __dayWeek: {
        main: "maalin_toddobaad",
        __description: "maalinta toddobaadka",
      },
      __hour: {
        main: "saacad",
        __description: "saacad",
      },
      __minute: {
        main: "daqiiqad",
        __description: "daqiiqad",
      },
      __second: {
        main: "ilbiriqsi",
        __description: "ilbiriqsi",
      },
    },
  },

  types: {
    __object: {
      main: "walax",
      __description: "shay taagan",
    },
    __number: {
      main: "lambar",
      __description: "nooca lambar",
    },
    __string: {
      main: "qoraal",
      __description: "nooca qoraal",
    },
    __boolean: {
      main: "run_been",
      values: { __true: "Run", __false: "Been" },
      __description: "nooca run iyo been",
    },
  },

  methods: {
    method: {
      __print: {
        main: "daabac",
        __description: "soo saar qiimaha",
      },
      __scan: {
        main: "akhri",
        __description: "akhrinta gelinta",
      },
      __return: {
        main: "celi",
        __description: "soo celi natiijo",
      },
    },

    sentences: {
      __function: {
        main: "hawl",
        __description: "hawl",
      },
      __if: {
        main: "haddii",
        __description: "shardi",
      },
      __else: {
        main: "kale",
        __description: "ikhtiyaar kale",
      },
      __while: {
        main: "inta",
        __description: "wareeg joogto ah",
      },
      __for: {
        main: "for",
        __description: "wareeg",
      },
      __switch: {
        main: "doorasho",
        __description: "xulasho xaalado",
      },
      __case: {
        main: "xaalad",
        __description: "xaalad gaar ah",
      },
      __default: {
        main: "caadi",
        __description: "xaalad caadi ah",
      },
      __try: {
        main: "isku_day",
        __description: "tijaabi kood",
      },
      __catch: {
        main: "qabo",
        __description: "qabashada qalad",
      },
      __finally: {
        main: "ugu_dambe",
        __description: "had iyo jeer shaqeeya",
      },
    },
  },

  errors: {
    main: { tag: "KHALAD", message: "qalad guud ee nidaamka" },
    __UNKNOWN_ERROR: {
      tag: "KHALAD_LAMA_YAQAN",
      message: "qalad aan la aqoon",
    },
    __TypeError: { tag: "KHALAD_NOOC", message: "nooc khaldan" },
    __ReferenceError: { tag: "KHALAD_TIXRAAC", message: "tixraac ma jiro" },
    __SyntaxError: { tag: "KHALAD_HAB_QORAAL", message: "qoraal khaldan" },
    __RangeError: { tag: "KHALAD_XAD", message: "xad dhaaf" },
    __URIError: { tag: "KHALAD_URI", message: "URI khaldan" },
    __EvalError: { tag: "KHALAD_EVAL", message: "qalad eval" },
  },
}).grammar();
