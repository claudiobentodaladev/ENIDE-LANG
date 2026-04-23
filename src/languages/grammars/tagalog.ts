import { Language } from "../grammar.class.js";

export const tagalog = new Language({
  language: "tagalog",
  about:
    "Ang ENIDE ay isang transpilador na maaaring isalin na nagbibigay-daan sa pagprograma sa anumang wika",

  include: {
    main: "Isama",
    __description: "Ginagamit upang isama ang wika o mga aklatan",
  },

  commands: {
    all: {
      __about: {
        main: "Tungkol",
        __description: "upang makakuha ng impormasyon tungkol sa ENIDE",
      },
      __help: {
        main: "Tulong",
        __description: "upang makakuha ng listahan ng lahat ng utos",
      },
      __version: {
        main: "Bersyon",
        __description: "upang makakuha ng kasalukuyang bersyon ng ENIDE",
      },
      __languages: {
        main: "MgaWika",
        __description: "upang makakuha ng listahan ng lahat ng wika",
      },
      __documentation: {
        main: "Dokumentasyon",
        __description: "upang makakuha ng dokumentasyon para sa wika",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematika",
        __description: "upang ma-access ang mga function ng matematika",
      },
      __pi: {
        main: "PI",
        __description: "upang makuha ang halaga ng pi",
      },
      __sqrt: {
        main: "SquareRoot",
        __description: "upang makuha ang square root",
      },
      __pow: {
        main: "Power",
        __description: "upang makuha ang power ng numero",
      },
      __round: {
        main: "Round",
        __description: "upang i-round ang numero",
      },
      __random: {
        main: "Random",
        __description: "upang makuha ang random na numero",
      },
      __max: {
        main: "Max",
        __description: "upang makuha ang pinakamataas na halaga",
      },
      __min: {
        main: "Min",
        __description: "upang makuha ang pinakamababang halaga",
      },
      __isNumber: {
        main: "NumeroBa",
        __description: "upang suriin kung ang halaga ay numero",
      },
      __isInteger: {
        main: "IntegerBa",
        __description: "upang suriin kung ang halaga ay integer",
      },
      __isFloat: {
        main: "DecimalBa",
        __description: "upang suriin kung ang halaga ay decimal",
      },
    },

    __string: {
      main: {
        main: "String",
        __description: "upang ma-access ang mga function ng string",
      },
      __length: {
        main: "Haba",
        __description: "upang makuha ang haba ng string",
      },
      __toUpperCase: {
        main: "GawingMalaki",
        __description: "upang gawing malalaking titik ang string",
      },
      __toLowerCase: {
        main: "GawingMaliit",
        __description: "upang gawing maliliit na titik ang string",
      },
    },

    __date: {
      main: {
        main: "Petsa",
        __description: "upang ma-access ang mga function ng petsa at oras",
      },
      __year: {
        main: "Taon",
        __description: "upang makuha ang taon",
      },
      __month: {
        main: "Buwan",
        __description: "upang makuha ang buwan",
      },
      __dayMonth: {
        main: "ArawNgBuwan",
        __description: "upang makuha ang araw ng buwan",
      },
      __dayWeek: {
        main: "ArawNgLinggo",
        __description: "upang makuha ang araw ng linggo",
      },
      __hour: {
        main: "Oras",
        __description: "upang makuha ang oras",
      },
      __minute: {
        main: "Minuto",
        __description: "upang makuha ang minuto",
      },
      __second: {
        main: "Segundo",
        __description: "upang makuha ang segundo",
      },
    },
  },

  types: {
    __object: {
      main: "Bagay",
      __description: "upang ideklara ang isang static na bagay",
    },
    __number: {
      main: "Numero",
      __description: "upang magdeklara ng variable na numero",
    },
    __string: {
      main: "String",
      __description: "upang magdeklara ng variable na string",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Totoo", __false: "Mali" },
      __description: "upang magdeklara ng variable na boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Ipakita",
        __description: "upang ipakita ang halaga sa screen",
      },
      __scan: {
        main: "Basahin",
        __description: "upang magbasa ng halaga mula sa input",
      },
      __return: {
        main: "Ibalik",
        __description: "upang ibalik ang halaga mula sa function",
      },
    },

    sentences: {
      __function: {
        main: "Function",
        __description: "upang magdeklara ng function",
      },
      __if: {
        main: "Kung",
        __description: "upang magdeklara ng kondisyon",
      },
      __else: {
        main: "Kundi",
        __description: "upang magdeklara ng alternatibong kondisyon",
      },
      __while: {
        main: "Habang",
        __description: "upang magdeklara ng while loop",
      },
      __for: {
        main: "ParaSa",
        __description: "upang magdeklara ng for loop",
      },
      __switch: {
        main: "Lipat",
        __description: "upang magdeklara ng selection structure",
      },
      __case: {
        main: "Kaso",
        __description: "upang magdeklara ng kaso sa selection structure",
      },
      __default: {
        main: "Default",
        __description: "upang magdeklara ng default na kaso",
      },
      __try: {
        main: "Subukan",
        __description: "upang magdeklara ng try block",
      },
      __catch: {
        main: "Saluhin",
        __description: "upang magdeklara ng error handling block",
      },
      __finally: {
        main: "SaWakas",
        __description: "upang magdeklara ng block na laging gagana",
      },
    },
  },

  errors: {
    main: {
      tag: "MALI",
      message: "Pangkalahatang mali sa sistema",
    },
    __UNKNOWN_ERROR: {
      tag: "HINDI_ALAM_NA_MALI",
      message: "Ganap na hindi alam na mali",
    },
    __TypeError: {
      tag: "MALI_SA_URI",
      message: "Hindi wastong uri sa operasyon",
    },
    __ReferenceError: {
      tag: "MALI_SA_SANGGUNIAN",
      message: "Variable ay wala sa saklaw",
    },
    __SyntaxError: {
      tag: "MALI_SA_SINTAKS",
      message: "Hindi wastong code",
    },
    __RangeError: {
      tag: "MALI_SA_SAKLAW",
      message: "Halaga ay labas sa pinapayagang saklaw",
    },
    __URIError: {
      tag: "MALI_SA_URI",
      message: "Mali o hindi wastong URI",
    },
    __EvalError: {
      tag: "MALI_SA_EVAL",
      message: "Mali na may kaugnayan sa eval",
    },
  },
}).grammar();
