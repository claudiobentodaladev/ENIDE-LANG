import { Language } from "../grammar.class.js";

export const farsi = new Language({
  language: "farsi",
  about:
    "ENIDE yek transpayler ghabele tarjome ast ke ejaze barname nevisi be har zabani ra midahad",
  include: {
    main: "Shamel_kardan",
    __description: "Baraye gonjandane zaban ya ketabkhane-ha estefade mishavad",
  },
  commands: {
    all: {
      __about: {
        main: "darbare",
        __description: "baraye daryafte etelaat darbare ENIDE",
      },
      __help: {
        main: "komak",
        __description: "baraye daryafte liste hameye dastoorat",
      },
      __version: {
        main: "noskhe",
        __description: "baraye daryafte noskheye feli",
      },
      __languages: {
        main: "zabanha",
        __description: "baraye daryafte liste zabanha",
      },
      __documentation: {
        main: "rahnama",
        __description: "baraye daryafte rahnama",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "riyazi",
        __description: "baraye dastresi be tavabe riyazi",
      },
      __pi: {
        main: "PI",
        __description: "baraye daryafte adade pi",
      },
      __sqrt: {
        main: "Rishe",
        __description: "baraye daryafte risheye dovom",
      },
      __pow: {
        main: "Tavan",
        __description: "baraye mohasebe tavan",
      },
      __round: {
        main: "Gerd",
        __description: "baraye gerd kardane adad",
      },
      __random: {
        main: "Tasodofi",
        __description: "baraye adade tasodofi",
      },
      __max: {
        main: "Bishtarin",
        __description: "baraye daryafte bishtarin meghdar",
      },
      __min: {
        main: "Kamtarin",
        __description: "baraye daryafte kamtarin meghdar",
      },
      __isNumber: {
        main: "AdadAst",
        __description: "check kardan baraye adad boodan",
      },
      __isInteger: {
        main: "SahihAst",
        __description: "check kardan baraye sahih boodan",
      },
      __isFloat: {
        main: "AshariAst",
        __description: "check kardan baraye ashari boodan",
      },
    },
    __string: {
      main: {
        main: "reshte",
        __description: "baraye dastresi be tavabe reshte",
      },
      __length: {
        main: "Tool",
        __description: "baraye daryafte toole reshte",
      },
      __toUpperCase: {
        main: "Bozorg",
        __description: "tabdil be horoofe bozorg",
      },
      __toLowerCase: {
        main: "Koochak",
        __description: "tabdil be horoofe koochak",
      },
    },
    __date: {
      main: {
        main: "tarikh",
        __description: "baraye dastresi be tavabe tarikh",
      },
      __year: {
        main: "Sal",
        __description: "baraye daryafte sal",
      },
      __month: {
        main: "Mah",
        __description: "baraye daryafte mah",
      },
      __dayMonth: {
        main: "RoozMah",
        __description: "baraye daryafte rooze mah",
      },
      __dayWeek: {
        main: "RoozHafte",
        __description: "baraye daryafte rooze hafte",
      },
      __hour: {
        main: "Saat",
        __description: "baraye daryafte saat",
      },
      __minute: {
        main: "Daghighe",
        __description: "baraye daryafte daghighe",
      },
      __second: {
        main: "Saniye",
        __description: "baraye daryafte saniye",
      },
    },
  },
  types: {
    __object: {
      main: "shey",
      __description: "baraye elan kardan yek shey saket",
    },
    __number: {
      main: "adad",
      __description: "baraye tarif moteghayere adadi",
    },
    __string: {
      main: "reshte",
      __description: "baraye tarif moteghayere reshte-i",
    },
    __boolean: {
      main: "manteghi",
      values: {
        __true: "Dorost",
        __false: "Ghalat",
      },
      __description: "baraye tarif moteghayere manteghi",
    },
  },
  methods: {
    method: {
      __print: {
        main: "chap",
        __description: "baraye chape meghdar",
      },
      __scan: {
        main: "begir",
        __description: "baraye daryafte voroodi",
      },
      __return: {
        main: "bazgasht",
        __description: "baraye bazgashte meghdar",
      },
    },
    sentences: {
      __function: {
        main: "tabe",
        __description: "baraye tarife tabe",
      },
      __if: {
        main: "agar",
        __description: "baraye tarife shart",
      },
      __else: {
        main: "vagarne",
        __description: "baraye sharte jaygozin",
      },
      __while: {
        main: "ta_zamani_ke",
        __description: "baraye halgheye while",
      },
      __for: {
        main: "baraye",
        __description: "baraye halgheye for",
      },
      __switch: {
        main: "entekhab",
        __description: "baraye saakhtare entekhabi",
      },
      __case: {
        main: "mored",
        __description: "baraye morede entekhab",
      },
      __default: {
        main: "pishfarz",
        __description: "baraye morede pishfarz",
      },
      __try: {
        main: "emtehan",
        __description: "baraye moshakhase blocke try",
      },
      __catch: {
        main: "gereftan",
        __description: "baraye moshakhase blocke khata",
      },
      __finally: {
        main: "dar_nehyat",
        __description: "baraye blocki ke hamishe ejra mishavad",
      },
    },
  },
  errors: {
    main: {
      tag: "KHATA",
      message: "Khataye omoomi system",
    },
    __UNKNOWN_ERROR: {
      tag: "KHATAYE_NAMALOM",
      message: "Khata kamelan namalom ast",
    },
    __TypeError: {
      tag: "KHATAYE_TYPE",
      message: "Nove na-moatabar",
    },
    __ReferenceError: {
      tag: "KHATAYE_ERJA",
      message: "Moteghayer dar scope voojood nadarad",
    },
    __SyntaxError: {
      tag: "KHATAYE_NEGARESHI",
      message: "Code na-moatabar",
    },
    __RangeError: {
      tag: "KHATAYE_MAHDOODE",
      message: "Meghdar kharej az mahdoode ast",
    },
    __URIError: {
      tag: "KHATAYE_URI",
      message: "URI na-moatabar",
    },
    __EvalError: {
      tag: "KHATAYE_EVAL",
      message: "Khata dar tabe eval",
    },
  },
}).grammar();
