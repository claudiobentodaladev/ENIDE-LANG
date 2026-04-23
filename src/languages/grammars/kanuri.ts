import { Language } from "../grammar.class.js";

export const kanuri = new Language({
  language: "kanuri",
  about: "ENIDE ye transpiler nze sarte du program karda fata ye",
  include: {
    main: "Kaltin",
    __description: "Də ləngə awu biblioteka kaltinfə ro nafa dunya",
  },
  commands: {
    all: {
      __about: {
        main: "kara",
        __description: "wuye kara ENIDE ye",
      },
      __help: {
        main: "faga",
        __description: "wuye liste fata karda ye",
      },
      __version: {
        main: "version",
        __description: "wuye ENIDE version fata ye",
      },
      __languages: {
        main: "karda",
        __description: "wuye karda liste fata ye",
      },
      __documentation: {
        main: "sura",
        __description: "wuye karda sura",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "kalkulo",
        __description: "kalkulo karda do ye",
      },
      __pi: {
        main: "PI",
        __description: "wuye pi kalam",
      },
      __sqrt: {
        main: "KwadraFato",
        __description: "wuye kwadra fato",
      },
      __pow: {
        main: "Kama",
        __description: "wuye nambar kama",
      },
      __round: {
        main: "Gana",
        __description: "gana nambar",
      },
      __random: {
        main: "Baya",
        __description: "wuye baya nambar",
      },
      __max: {
        main: "Zola",
        __description: "wuye kalam zola",
      },
      __min: {
        main: "Dike",
        __description: "wuye kalam dike",
      },
      __isNumber: {
        main: "NambarYe",
        __description: "wante kalam nambar ye",
      },
      __isInteger: {
        main: "NambarKun",
        __description: "wante kalam nambar kun ye",
      },
      __isFloat: {
        main: "Desimal",
        __description: "wante kalam desimal ye",
      },
    },
    __string: {
      main: {
        main: "kura",
        __description: "zara karda do ye",
      },
      __length: {
        main: "Siga",
        __description: "wuye zara siga",
      },
      __toUpperCase: {
        main: "KaDoGolo",
        __description: "zara golo huru ye",
      },
      __toLowerCase: {
        main: "KaDoDike",
        __description: "zara dike huru ye",
      },
    },
    __date: {
      main: {
        main: "wulo",
        __description: "wulo kardo karda do ye",
      },
      __year: {
        main: "Kuro",
        __description: "wuye kuro",
      },
      __month: {
        main: "Woyi",
        __description: "wuye woyi",
      },
      __dayMonth: {
        main: "WuloWoyi",
        __description: "wuye wulo woyi ye",
      },
      __dayWeek: {
        main: "WuloWiku",
        __description: "wuye wulo wiku ye",
      },
      __hour: {
        main: "Saati",
        __description: "wuye saati",
      },
      __minute: {
        main: "Dakika",
        __description: "wuye dakika",
      },
      __second: {
        main: "Saniya",
        __description: "wuye saniya",
      },
    },
  },
  types: {
    __object: { main: "kadu", __description: "ci kadu siri labo" },
    __number: {
      main: "nambar",
      __description: "yege jijik nambar ye",
    },
    __string: {
      main: "zara",
      __description: "yege jijik zara ye",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Jiri", __false: "Kandi" },
      __description: "yege jijik boolean ye",
    },
  },
  methods: {
    method: {
      __print: {
        main: "ziga",
        __description: "ziga kalam ekran ye",
      },
      __scan: {
        main: "dende",
        __description: "dende kalam kuna ye",
      },
      __return: {
        main: "yege",
        __description: "yege kalam karda ye",
      },
    },
    sentences: {
      __function: {
        main: "larma",
        __description: "yege larma",
      },
      __if: {
        main: "wo",
        __description: "yege sariya",
      },
      __else: {
        main: "ye",
        __description: "yege sariya wua",
      },
      __while: {
        main: "fato",
        __description: "yege loop fato",
      },
      __for: {
        main: "kuna",
        __description: "yege loop kuna",
      },
      __switch: {
        main: "suwe",
        __description: "yege suwe suru",
      },
      __case: {
        main: "kolo",
        __description: "yege kolo suwe ye",
      },
      __default: {
        main: "karibe",
        __description: "yege kolo karibe",
      },
      __try: {
        main: "gande",
        __description: "yege gande bloku",
      },
      __catch: {
        main: "duna",
        __description: "yege duna gafe bloku",
      },
      __finally: {
        main: "kune",
        __description: "yege bloku kune karda",
      },
    },
  },
  errors: {
    main: {
      tag: "GAFE",
      message: "Gafe karda sistem ye",
    },
    __UNKNOWN_ERROR: {
      tag: "GAFE_MBA",
      message: "Gafe wuye yenge",
    },
    __TypeError: {
      tag: "GAFE_SUWE",
      message: "Suwe ziga karda ye",
    },
    __ReferenceError: {
      tag: "GAFE_YEGE",
      message: "Jijik duna kuna ye",
    },
    __SyntaxError: {
      tag: "GAFE_SINTAKS",
      message: "Koodu ziga ke",
    },
    __RangeError: {
      tag: "GAFE_SIGA",
      message: "Kalam siga zola ye",
    },
    __URIError: {
      tag: "GAFE_URI",
      message: "URI ziga ye",
    },
    __EvalError: {
      tag: "GAFE_EVAL",
      message: "Gafe eval ye",
    },
  },
}).grammar();
