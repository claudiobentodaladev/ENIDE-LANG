import { Language } from "../grammar.class.js";

export const kikongo = new Language({
  language: "kikongo",
  about:
    "ENIDE i transpilador ya kulukumanisa yoneka ya kuprograma mu ndimi yonso",

  include: {
    main: "Kotisa",
    __description: "Isadilua mu kotisa ndinga evo biblioteka",
  },

  commands: {
    all: {
      __about: {
        main: "na",
        __description: "ku zaba makanda ya ENIDE",
      },
      __help: {
        main: "diambu",
        __description: "ku zaba malista ya misambu yonso ya kukota",
      },
      __version: {
        main: "nzila",
        __description: "ku zaba nzila ya ENIDE",
      },
      __languages: {
        main: "ndimi",
        __description: "ku zaba malista ya ndimi yonso ya kukota",
      },
      __documentation: {
        main: "masono",
        __description: "ku zaba makanda ya ndimi",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "ku sosa misamu ya matematika",
      },
      __pi: {
        main: "PI",
        __description: "ku zaba tandu ya pi",
      },
      __sqrt: {
        main: "NsukaYaNzole",
        __description: "ku baka nsuka ya nzole",
      },
      __pow: {
        main: "Nguvu",
        __description: "ku zaba nguvu ya namba",
      },
      __round: {
        main: "Fingununa",
        __description: "ku fingununa namba",
      },
      __random: {
        main: "Sola",
        __description: "ku baka namba ya sola",
      },
      __max: {
        main: "Nene",
        __description: "ku zaba tandu ya nene",
      },
      __min: {
        main: "Fioti",
        __description: "ku zaba tandu ya fioti",
      },
      __isNumber: {
        main: "KenaNamba",
        __description: "ku tala soki tandu i namba",
      },
      __isInteger: {
        main: "KenaNambaYonso",
        __description: "ku tala soki tandu i namba ya yonso",
      },
      __isFloat: {
        main: "KenaNambaKipande",
        __description: "ku tala soki tandu i namba ya kipande",
      },
    },

    __string: {
      main: {
        main: "mazwi",
        __description: "ku sosa misamu ya kusobela malembo",
      },
      __length: {
        main: "Yinda",
        __description: "ku zaba yinda ya malembo",
      },
      __toUpperCase: {
        main: "KuNene",
        __description: "ku hindula malembo ku nene",
      },
      __toLowerCase: {
        main: "KuFioti",
        __description: "ku hindula malembo ku fioti",
      },
    },

    __date: {
      main: {
        main: "lumbu",
        __description: "ku sosa misamu ya lumbu ni ngonga",
      },
      __year: {
        main: "Mvula",
        __description: "ku zaba mvula",
      },
      __month: {
        main: "Ngonda",
        __description: "ku zaba ngonda",
      },
      __dayMonth: {
        main: "LumbuNgonda",
        __description: "ku zaba lumbu lwa ngonda",
      },
      __dayWeek: {
        main: "LumbuLumingu",
        __description: "ku zaba lumbu lwa lumingu",
      },
      __hour: {
        main: "Ngonga",
        __description: "ku zaba ngonga",
      },
      __minute: {
        main: "Minutu",
        __description: "ku zaba minutu",
      },
      __second: {
        main: "Sekunde",
        __description: "ku zaba sekunde",
      },
    },
  },

  types: {
    __object: { main: "ntu", __description: "ku vova ntu ya kumana" },

    __number: {
      main: "namba",
      __description: "ku baka kivikilanga kia muxima namba",
    },

    __string: {
      main: "malembo",
      __description: "ku baka kivikilanga kia muxima malembo",
    },

    __boolean: {
      main: "kieleka",
      values: { __true: "Kieleka", __false: "Luvunu" },
      __description: "ku baka kivikilanga kia muxima ya kieleka to luvunu",
    },
  },

  methods: {
    method: {
      __print: {
        main: "lemba",
        __description: "ku lemba tandu ku ekele",
      },
      __scan: {
        main: "sosa",
        __description: "ku baka tandu ku njila ya kukota",
      },
      __return: {
        main: "vutula",
        __description: "ku vutula tandu ku misamu",
      },
    },

    sentences: {
      __function: {
        main: "misamu",
        __description: "ku baka misamu",
      },
      __if: {
        main: "soki",
        __description: "ku baka kondisaun",
      },
      __else: {
        main: "kana",
        __description: "ku baka kondisaun ya nkaka",
      },
      __while: {
        main: "ngyedi",
        __description: "ku baka ngyedi wa ngyedi",
      },
      __for: {
        main: "mu",
        __description: "ku baka ngyedi wa mu",
      },
      __switch: {
        main: "songola",
        __description: "ku baka mpila ya kusongola",
      },
      __case: {
        main: "kima",
        __description: "ku baka kima mu mpila ya kusongola",
      },
      __default: {
        main: "nsuka",
        __description: "ku baka kima kia nsuka mu mpila ya kusongola",
      },
      __try: {
        main: "meka",
        __description: "ku meka kusala",
      },
      __catch: {
        main: "baka",
        __description: "ku baka minsangu ya lubanza",
      },
      __finally: {
        main: "nsukaYonso",
        __description: "ku suka ntangu yonso",
      },
    },
  },

  errors: {
    main: { tag: "MINSANGU", message: "Minsangu ya sistema" },

    __UNKNOWN_ERROR: {
      tag: "MINSANGU_ISIBUE",
      message: "Minsangu isibue ya kutala",
    },

    __TypeError: {
      tag: "MINSANGU_MUXIMA",
      message: "Muxima uabela mu misamu",
    },

    __ReferenceError: {
      tag: "MINSANGU_REFERENCIA",
      message: "Kivikilanga kikijila mu esika",
    },

    __SyntaxError: {
      tag: "MINSANGU_SINTAXE",
      message: "Koodu uabela",
    },

    __RangeError: {
      tag: "MINSANGU_RANGO",
      message: "Tandu ifuila rango ya kuluvula",
    },

    __URIError: {
      tag: "MINSANGU_URI",
      message: "URI uabela ya bue",
    },

    __EvalError: {
      tag: "MINSANGU_EVAL",
      message: "Minsangu ya eval",
    },
  },
}).grammar();
