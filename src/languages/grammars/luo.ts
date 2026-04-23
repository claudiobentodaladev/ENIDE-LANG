import { Language } from "../grammar.class.js";

export const luo = new Language({
  language: "luo",
  about:
    "ENIDE en transpiler ma nyalo lokore kendo miyo nyalo ndiko e dhok duto",
  include: {
    main: "Kwalo",
    __description: "itiyo kode e kwalo dhok kata somo",
  },
  commands: {
    all: {
      __about: {
        main: "Kuom",
        __description: "yudo ngʼeyo kuom ENIDE",
      },
      __help: {
        main: "Kony",
        __description: "yudo ndekni wach moko duto ma nitiere",
      },
      __version: {
        main: "Version",
        __description: "yudo version ma en koro mar ENIDE",
      },
      __languages: {
        main: "Dhok",
        __description: "yudo ndekni dhok moko duto ma nitiere",
      },
      __documentation: {
        main: "Ndiko",
        __description: "yudo ndiko mar dhok",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "Aritmetik",
        __description: "donjo e tich aritmetik",
      },
      __pi: {
        main: "Pi",
        __description: "yudo pi",
      },
      __sqrt: {
        main: "Yien",
        __description: "yudo yien mar namba",
      },
      __pow: {
        main: "Teko",
        __description: "miyo namba bedo gi teko",
      },
      __round: {
        main: "Bondo",
        __description: "bondo namba",
      },
      __random: {
        main: "MaokOyore",
        __description: "yudo namba maok oriti",
      },
      __max: {
        main: "Maduong",
        __description: "yudo maduong moloyo",
      },
      __min: {
        main: "Matin",
        __description: "yudo matin moloyo",
      },
      __isNumber: {
        main: "EnNamba",
        __description: "nonro ka en namba",
      },
      __isInteger: {
        main: "EnNambaDuto",
        __description: "nonro ka en namba duto",
      },
      __isFloat: {
        main: "EnDesimal",
        __description: "nonro ka en desimal",
      },
    },
    __string: {
      main: {
        main: "Wach",
        __description: "donjo e tich mar loko wach",
      },
      __length: {
        main: "Bor",
        __description: "yudo bor mar wach",
      },
      __toUpperCase: {
        main: "LiteraMaduong",
        __description: "loko wach e litera maduong",
      },
      __toLowerCase: {
        main: "LiteraMatin",
        __description: "loko wach e litera matin",
      },
    },
    __date: {
      main: {
        main: "Chieng",
        __description: "donjo e tich mar chieng gi saa",
      },
      __year: {
        main: "Higa",
        __description: "yudo higa",
      },
      __month: {
        main: "Dwe",
        __description: "yudo dwe",
      },
      __dayMonth: {
        main: "ChiengDwe",
        __description: "yudo chieng mar dwe",
      },
      __dayWeek: {
        main: "ChiengTich",
        __description: "yudo chieng mar tich",
      },
      __hour: {
        main: "Saa",
        __description: "yudo saa",
      },
      __minute: {
        main: "Dakika",
        __description: "yudo dakika",
      },
      __second: {
        main: "Sekond",
        __description: "yudo sekond",
      },
    },
  },
  types: {
    __object: { main: "Gima", __description: "gima ma ok loke" },
    __number: {
      main: "Namba",
      __description: "fwenyo jokwath e kit namba",
    },
    __string: {
      main: "Wach",
      __description: "fwenyo jokwath e kit wach",
    },
    __boolean: {
      main: "AdierMiriambo",
      values: { __true: "Adier", __false: "Miriambo" },
      __description: "fwenyo jokwath e kit adier kata miriambo",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Ndik",
        __description: "ndiko gima e skrin",
      },
      __scan: {
        main: "Kaw",
        __description: "kayo gima kuom jarit",
      },
      __return: {
        main: "Dok",
        __description: "doki gima kuom tich",
      },
    },
    sentences: {
      __function: {
        main: "Tich",
        __description: "fwenyo tich",
      },
      __if: {
        main: "Ka",
        __description: "fwenyo kaka",
      },
      __else: {
        main: "To",
        __description: "machielo",
      },
      __while: {
        main: "Kane",
        __description: "loop kane",
      },
      __for: {
        main: "Ni",
        __description: "loop ni",
      },
      __switch: {
        main: "Yiero",
        __description: "yiero",
      },
      __case: {
        main: "Kaka",
        __description: "kaka e yiero",
      },
      __default: {
        main: "Makare",
        __description: "wach ma ochungʼ",
      },
      __try: {
        main: "Tem",
        __description: "tem",
      },
      __catch: {
        main: "Mak",
        __description: "mak rach",
      },
      __finally: {
        main: "Gik",
        __description: "gik duto",
      },
    },
  },
  errors: {
    main: {
      tag: "RACH",
      message: "Rach maduong mar sistim",
    },
    __UNKNOWN_ERROR: {
      tag: "RACH_MAONGE",
      message: "Rach maonge ngʼeyo",
    },
    __TypeError: {
      tag: "RACH_KIT",
      message: "Kit ok owinjore",
    },
    __ReferenceError: {
      tag: "RACH_NENO",
      message: "Jokwath onge",
    },
    __SyntaxError: {
      tag: "RACH_SINTAKS",
      message: "Kod ok owinjore",
    },
    __RangeError: {
      tag: "RACH_BOR",
      message: "Okalo bor",
    },
    __URIError: {
      tag: "RACH_URI",
      message: "URI ok owinjore",
    },
    __EvalError: {
      tag: "RACH_EVAL",
      message: "Rach mar eval",
    },
  },
}).grammar();
