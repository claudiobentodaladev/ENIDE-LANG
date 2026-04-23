import { Language } from "../grammar.class.js";

export const nupe = new Language({
  language: "nupe",
  about: "ENIDE wo transpiler gbe wu eci program mu cibe nyonso",
  include: {
    main: "Saci",
    __description: "A lá gã sãci cibe ko biblioteka",
  },
  commands: {
    all: {
      __about: {
        main: "yeci",
        __description: "ba yeci kumen ENIDE",
      },
      __help: {
        main: "belo",
        __description: "ba liste kumen eci",
      },
      __version: {
        main: "versio",
        __description: "ba ENIDE versio",
      },
      __languages: {
        main: "cibe",
        __description: "ba liste cibe",
      },
      __documentation: {
        main: "sura",
        __description: "ba sura cibe",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "kalkulo",
        __description: "nge kalkulo tuuma",
      },
      __pi: {
        main: "PI",
        __description: "ba pi elo",
      },
      __sqrt: {
        main: "FatoKpata",
        __description: "ba fato kpata",
      },
      __pow: {
        main: "Tswafi",
        __description: "ba tswafi namba",
      },
      __round: {
        main: "Zuba",
        __description: "zuba namba",
      },
      __random: {
        main: "Wuci",
        __description: "ba wuci namba",
      },
      __max: {
        main: "Gba",
        __description: "ba elo gba",
      },
      __min: {
        main: "Kpe",
        __description: "ba elo kpe",
      },
      __isNumber: {
        main: "YeNamba",
        __description: "de elo ye namba",
      },
      __isInteger: {
        main: "YeKpun",
        __description: "de elo ye namba kpun",
      },
      __isFloat: {
        main: "YeDesimal",
        __description: "de elo ye desimal",
      },
    },
    __string: {
      main: {
        main: "gbolu",
        __description: "nge gbolu tuuma",
      },
      __length: {
        main: "Godo",
        __description: "ba gbolu godo",
      },
      __toUpperCase: {
        main: "KaGba",
        __description: "gbolu gba",
      },
      __toLowerCase: {
        main: "KaKpe",
        __description: "gbolu kpe",
      },
    },
    __date: {
      main: {
        main: "wuci",
        __description: "nge wuci tuuma",
      },
      __year: {
        main: "Koro",
        __description: "ba koro",
      },
      __month: {
        main: "Uwuci",
        __description: "ba uwuci",
      },
      __dayMonth: {
        main: "WuciUwuci",
        __description: "ba wuci uwuci",
      },
      __dayWeek: {
        main: "WuciSati",
        __description: "ba wuci sati",
      },
      __hour: {
        main: "Elo",
        __description: "ba elo",
      },
      __minute: {
        main: "Miniti",
        __description: "ba miniti",
      },
      __second: {
        main: "Sekondi",
        __description: "ba sekondi",
      },
    },
  },
  types: {
    __object: {
      main: "gana",
      __description: "ka gana ebi la",
    },
    __number: {
      main: "namba",
      __description: "ye jijik namba",
    },
    __string: {
      main: "gbolu",
      __description: "ye jijik gbolu",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Eyi", __false: "Ayi" },
      __description: "ye jijik bool",
    },
  },
  methods: {
    method: {
      __print: {
        main: "kuna",
        __description: "kuna elo ekran",
      },
      __scan: {
        main: "dogo",
        __description: "dogo elo",
      },
      __return: {
        main: "yege",
        __description: "yege elo",
      },
    },
    sentences: {
      __function: {
        main: "karda",
        __description: "ye karda",
      },
      __if: {
        main: "de",
        __description: "ye sariya",
      },
      __else: {
        main: "kama",
        __description: "ye sariya taci",
      },
      __while: {
        main: "wu",
        __description: "ye loop wu",
      },
      __for: {
        main: "nge",
        __description: "ye loop nge",
      },
      __switch: {
        main: "suwe",
        __description: "ye suwe",
      },
      __case: {
        main: "kolo",
        __description: "ye kolo",
      },
      __default: {
        main: "kolo_faa",
        __description: "ye kolo faa",
      },
      __try: {
        main: "gande",
        __description: "ye gande",
      },
      __catch: {
        main: "buka",
        __description: "ye buka gafe",
      },
      __finally: {
        main: "kune",
        __description: "ye kune",
      },
    },
  },
  errors: {
    main: {
      tag: "GAFE",
      message: "Gafe karda",
    },
    __UNKNOWN_ERROR: {
      tag: "GAFE_KA_BANG",
      message: "Gafe ka bang",
    },
    __TypeError: {
      tag: "GAFE_CIBE",
      message: "Cibe ziga",
    },
    __ReferenceError: {
      tag: "GAFE_REFERENS",
      message: "Jijik duna",
    },
    __SyntaxError: {
      tag: "GAFE_SINTAKS",
      message: "Koodu ziga",
    },
    __RangeError: {
      tag: "GAFE_GODO",
      message: "Elo godo zola",
    },
    __URIError: {
      tag: "GAFE_URI",
      message: "URI ziga",
    },
    __EvalError: {
      tag: "GAFE_EVAL",
      message: "Eval gafe",
    },
  },
}).grammar();
