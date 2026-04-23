import { Language } from "../grammar.class.js";

export const kimbundu = new Language({
  language: "kimbundu",
  about:
    "ENIDE i transpilador ya kuhindulukilanga yoneka ya kuprograma mu ndimi yonso",

  include: {
    main: "Kwatekesa",
    __description: "Isola ni kwatekesa dimi mba biblioteka",
  },

  commands: {
    all: {
      __about: {
        main: "muanda",
        __description: "ku zaba makanda ya ENIDE",
      },
      __help: {
        main: "diambu",
        __description: "ku zaba malista ya misambu yonso ya kujila",
      },
      __version: {
        main: "nzila",
        __description: "ku zaba nzila ya ENIDE",
      },
      __languages: {
        main: "ndimi",
        __description: "ku zaba malista ya ndimi yonso ya kujila",
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
        main: "malembo",
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
        main: "KialuNgonda",
        __description: "ku zaba kialu kia ngonda",
      },
      __dayWeek: {
        main: "KialuLumingu",
        __description: "ku zaba kialu kia lumingu",
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
        main: "Sekonde",
        __description: "ku zaba sekonde",
      },
    },
  },

  types: {
    __object: { main: "kisu", __description: "ku xingila kisu ka kuimama" },

    __number: {
      main: "namba",
      __description: "ku bonga kivikilanga kia muxima namba",
    },

    __string: {
      main: "malembo",
      __description: "ku bonga kivikilanga kia muxima malembo",
    },

    __boolean: {
      main: "kidi",
      values: { __true: "Kidi", __false: "Makutu" },
      __description: "ku bonga kivikilanga kia muxima ya kidi to makutu",
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
        __description: "ku baka tandu ku njila ya kuingila",
      },
      __return: {
        main: "vutula",
        __description: "ku vutula tandu ku misamu",
      },
    },

    sentences: {
      __function: {
        main: "misamu",
        __description: "ku bonga misamu",
      },
      __if: {
        main: "soki",
        __description: "ku bonga kondisaun",
      },
      __else: {
        main: "kana",
        __description: "ku bonga kondisaun ya nkaka",
      },
      __while: {
        main: "ngyedi",
        __description: "ku bonga ngyedi wa ngyedi",
      },
      __for: {
        main: "mu",
        __description: "ku bonga ngyedi wa mu",
      },
      __switch: {
        main: "songola",
        __description: "ku bonga estrutura ya kusongola",
      },
      __case: {
        main: "kima",
        __description: "ku bonga kima mu estrutura ya kusongola",
      },
      __default: {
        main: "nsuka",
        __description: "ku bonga kima kia nsuka",
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
      message: "URI uabela",
    },

    __EvalError: {
      tag: "MINSANGU_EVAL",
      message: "Minsangu ya eval",
    },
  },
}).grammar();
