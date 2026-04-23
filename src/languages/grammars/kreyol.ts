import { Language } from "../grammar.class.js";

export const kreyol = new Language({
  language: "kreyol",
  about:
    "ENIDE se yon transpile tradisib ki pemet pwogramasyon nan nenpot lang",

  include: {
    main: "Enkli",
    __description: "Itilize pou enkli lang oswa bibliyotèk",
  },

  commands: {
    all: {
      __about: {
        main: "konsenan",
        __description: "pou jwenn enfòmasyon sou ENIDE",
      },
      __help: {
        main: "ed",
        __description: "pou jwenn lis tout kòmand ki disponib yo",
      },
      __version: {
        main: "vesyon",
        __description: "pou jwenn vèsyon aktyèl ENIDE a",
      },
      __languages: {
        main: "lang",
        __description: "pou jwenn lis tout lang ki disponib yo",
      },
      __documentation: {
        main: "dokiman",
        __description: "pou jwenn dokimantasyon pou yon lang",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matematik",
        __description: "pou jwenn aksè a fonksyon matematik yo",
      },
      __pi: {
        main: "PI",
        __description: "pou jwenn valè pi a",
      },
      __sqrt: {
        main: "RasinKare",
        __description: "pou jwenn rasin kare a",
      },
      __pow: {
        main: "Pisans",
        __description: "pou jwenn pisans yon nonb",
      },
      __round: {
        main: "Arodi",
        __description: "pou arodi yon nonb",
      },
      __random: {
        main: "Aza",
        __description: "pou jwenn yon nonb aza",
      },
      __max: {
        main: "Maksimom",
        __description: "pou jwenn valè maksimòm nan",
      },
      __min: {
        main: "Minimom",
        __description: "pou jwenn valè minimòm nan",
      },
      __isNumber: {
        main: "SeNonb",
        __description: "pou verifye si yon valè se yon nonb",
      },
      __isInteger: {
        main: "SeAntye",
        __description: "pou verifye si yon valè se yon antye",
      },
      __isFloat: {
        main: "SeDesimal",
        __description: "pou verifye si yon valè se yon desimal",
      },
    },

    __string: {
      main: {
        main: "teks",
        __description: "pou jwenn aksè a fonksyon manipilasyon tèks yo",
      },
      __length: {
        main: "Longe",
        __description: "pou jwenn longè yon tèks",
      },
      __toUpperCase: {
        main: "AnMajiskil",
        __description: "pou konvèti yon tèks an majiskil",
      },
      __toLowerCase: {
        main: "AnMiniskil",
        __description: "pou konvèti yon tèks an miniskil",
      },
    },

    __date: {
      main: {
        main: "dat",
        __description: "pou jwenn aksè a fonksyon dat ak lè yo",
      },
      __year: {
        main: "Ane",
        __description: "pou jwenn ane a",
      },
      __month: {
        main: "Mwa",
        __description: "pou jwenn mwa a",
      },
      __dayMonth: {
        main: "JouMwa",
        __description: "pou jwenn jou nan mwa a",
      },
      __dayWeek: {
        main: "JouSemen",
        __description: "pou jwenn jou nan semèn nan",
      },
      __hour: {
        main: "Le",
        __description: "pou jwenn lè a",
      },
      __minute: {
        main: "Minit",
        __description: "pou jwenn minit la",
      },
      __second: {
        main: "Segond",
        __description: "pou jwenn segond lan",
      },
    },
  },

  types: {
    __object: { main: "obje", __description: "pou deklare yon obje estatik" },

    __number: {
      main: "nonb",
      __description: "pou deklare yon varyab de tip nonb",
    },

    __string: {
      main: "teks",
      __description: "pou deklare yon varyab de tip tèks",
    },

    __boolean: {
      main: "kondisyon",
      values: { __true: "Verite", __false: "Fo" },
      __description: "pou deklare yon varyab de tip boleyen",
    },
  },

  methods: {
    method: {
      __print: {
        main: "enprime",
        __description: "pou enprime yon valè sou ekran an",
      },
      __scan: {
        main: "li",
        __description: "pou li yon valè nan antre a",
      },
      __return: {
        main: "retounen",
        __description: "pou retounen yon valè nan yon fonksyon",
      },
    },

    sentences: {
      __function: {
        main: "fonksyon",
        __description: "pou deklare yon fonksyon",
      },
      __if: {
        main: "si",
        __description: "pou deklare yon kondisyon",
      },
      __else: {
        main: "sinon",
        __description: "pou deklare yon kondisyon altènatif",
      },
      __while: {
        main: "pandan",
        __description: "pou deklare yon bouk pandan",
      },
      __for: {
        main: "pou",
        __description: "pou deklare yon bouk pou",
      },
      __switch: {
        main: "chwazi",
        __description: "pou deklare yon estrikti seleksyon",
      },
      __case: {
        main: "ka",
        __description: "pou deklare yon ka",
      },
      __default: {
        main: "defo",
        __description: "pou deklare ka defo",
      },
      __try: {
        main: "eseye",
        __description: "pou deklare yon blok eseye",
      },
      __catch: {
        main: "trape",
        __description: "pou jere ere",
      },
      __finally: {
        main: "finalman",
        __description: "pou egzekite blok final",
      },
    },
  },

  errors: {
    main: { tag: "ERE", message: "Ere jeneral sistem nan" },

    __UNKNOWN_ERROR: {
      tag: "ERE_ENKONI",
      message: "Ere konpletman enkoni",
    },

    __TypeError: {
      tag: "ERE_TIP",
      message: "Tip ki pa valid",
    },

    __ReferenceError: {
      tag: "ERE_REFERANS",
      message: "Varyab pa egziste nan espas",
    },

    __SyntaxError: {
      tag: "ERE_SENTAKS",
      message: "Kod pa valid",
    },

    __RangeError: {
      tag: "ERE_LIMIT",
      message: "Vale depase limit",
    },

    __URIError: {
      tag: "ERE_URI",
      message: "URI pa valid",
    },

    __EvalError: {
      tag: "ERE_EVAL",
      message: "Ere eval",
    },
  },
}).grammar();
