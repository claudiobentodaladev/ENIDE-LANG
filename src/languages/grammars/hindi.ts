import { Language } from "../grammar.class.js";

export const hindi = new Language({
  language: "hindi",
  about:
    "ENIDE ek anuvaad yogya transpiler hai jo kisi bhi bhasha mein programming ki anumati deta hai",
  include: {
    main: "Shamil_karna",
    __description:
      "Bhasha ya library ko shamil karne ke liye upyog kiya jata hai",
  },
  commands: {
    all: {
      __about: {
        main: "ke_baare_mein",
        __description: "ENIDE ke baare mein jaankari prapt karne ke liye",
      },
      __help: {
        main: "sahayata",
        __description: "sabhi upalabdh commands ki soochi prapt karne ke liye",
      },
      __version: {
        main: "sanskaran",
        __description: "ENIDE ka vartaman sanskaran prapt karne ke liye",
      },
      __languages: {
        main: "bhashayein",
        __description: "sabhi upalabdh bhashaon ki soochi prapt karne ke liye",
      },
      __documentation: {
        main: "dastaavez",
        __description: "kisi bhasha ke liye dastaavez prapt karne ke liye",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "ganit",
        __description: "ganit karyon tak pahunchne ke liye",
      },
      __pi: {
        main: "PI",
        __description: "pi ka maan prapt karne ke liye",
      },
      __sqrt: {
        main: "Vargmool",
        __description: "vargmool prapt karne ke liye",
      },
      __pow: {
        main: "Ghaat",
        __description: "kisi sankhya ki ghaat prapt karne ke liye",
      },
      __round: {
        main: "Round",
        __description: "sankhya ko round karne ke liye",
      },
      __random: {
        main: "Yadrichhik",
        __description: "ek yadrichhik sankhya prapt karne ke liye",
      },
      __max: {
        main: "Adhikatam",
        __description: "adhikatam maan prapt karne ke liye",
      },
      __min: {
        main: "Nyunatam",
        __description: "nyunatam maan prapt karne ke liye",
      },
      __isNumber: {
        main: "SankhyaHai",
        __description: "jaanchne ke liye ki kya maan ek sankhya hai",
      },
      __isInteger: {
        main: "PurnankHai",
        __description: "jaanchne ke liye ki kya maan ek purnank hai",
      },
      __isFloat: {
        main: "DashamlavHai",
        __description: "jaanchne ke liye ki kya maan ek dashamlav hai",
      },
    },
    __string: {
      main: {
        main: "string",
        __description: "string herafer karyon tak pahunchne ke liye",
      },
      __length: {
        main: "Lambai",
        __description: "string ki lambai prapt karne ke liye",
      },
      __toUpperCase: {
        main: "BadeAkshar",
        __description: "string ko bade aksharon mein badalne ke liye",
      },
      __toLowerCase: {
        main: "ChoteAkshar",
        __description: "string ko chote aksharon mein badalne ke liye",
      },
    },
    __date: {
      main: {
        main: "tithi",
        __description: "tithi aur samay karyon tak pahunchne ke liye",
      },
      __year: {
        main: "Varsh",
        __description: "varsh prapt karne ke liye",
      },
      __month: {
        main: "Maah",
        __description: "maah prapt karne ke liye",
      },
      __dayMonth: {
        main: "Din",
        __description: "maah ka din prapt karne ke liye",
      },
      __dayWeek: {
        main: "SaptahDin",
        __description: "saptah ka din prapt karne ke liye",
      },
      __hour: {
        main: "Ghanta",
        __description: "ghanta prapt karne ke liye",
      },
      __minute: {
        main: "Minut",
        __description: "minut prapt karne ke liye",
      },
      __second: {
        main: "Second",
        __description: "second prapt karne ke liye",
      },
    },
  },
  types: {
    __object: {
      main: "vastu",
      __description: "ek sthir vastu ghoshit karne ke liye",
    },
    __number: {
      main: "sankhya",
      __description: "sankhya prakar ke variable ki ghoshna karne ke liye",
    },
    __string: {
      main: "shabd",
      __description: "string prakar ke variable ki ghoshna karne ke liye",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Sahi", __false: "Galat" },
      __description: "boolean prakar ke variable ki ghoshna karne ke liye",
    },
  },
  methods: {
    method: {
      __print: {
        main: "dikhao",
        __description: "screen par maan dikhane ke liye",
      },
      __scan: {
        main: "input",
        __description: "input se maan padhne ke liye",
      },
      __return: {
        main: "vapas",
        __description: "function se maan vapas karne ke liye",
      },
    },
    sentences: {
      __function: {
        main: "kaarya",
        __description: "function ki ghoshna karne ke liye",
      },
      __if: {
        main: "agar",
        __description: "shart ki ghoshna karne ke liye",
      },
      __else: {
        main: "nahi_toh",
        __description: "vikalpik shart ki ghoshna karne ke liye",
      },
      __while: {
        main: "jab_tak",
        __description: "while loop ki ghoshna karne ke liye",
      },
      __for: {
        main: "ke_liye",
        __description: "for loop ki ghoshna karne ke liye",
      },
      __switch: {
        main: "badlo",
        __description: "chayan sanrachna ki ghoshna karne ke liye",
      },
      __case: {
        main: "sthiti",
        __description: "chayan sanrachna mein sthiti ki ghoshna karne ke liye",
      },
      __default: {
        main: "mool",
        __description: "chayan sanrachna mein mool sthiti ki ghoshna",
      },
      __try: {
        main: "koshish",
        __description: "try block ki ghoshna karne ke liye",
      },
      __catch: {
        main: "pakdo",
        __description: "truti nivaaran block ki ghoshna karne ke liye",
      },
      __finally: {
        main: "antatah",
        __description: "antatah block ki ghoshna jo hamesha chalta hai",
      },
    },
  },
  errors: {
    main: {
      tag: "TRUTI",
      message: "Samanya system truti",
    },
    __UNKNOWN_ERROR: {
      tag: "AGYAAT_TRUTI",
      message: "Poori tarah se agyaat truti",
    },
    __TypeError: {
      tag: "PRAKAR_TRUTI",
      message: "Operation mein avaidh prakar",
    },
    __ReferenceError: {
      tag: "SANDARBH_TRUTI",
      message: "Variable scope mein maujood nahi hai",
    },
    __SyntaxError: {
      tag: "SYNTAX_TRUTI",
      message: "Avaidh code",
    },
    __RangeError: {
      tag: "SEEMA_TRUTI",
      message: "Maan anumati prapt seema se bahar hai",
    },
    __URIError: {
      tag: "URI_TRUTI",
      message: "Vikrut ya avaidh URI",
    },
    __EvalError: {
      tag: "EVAL_TRUTI",
      message: "Eval se sambandhit truti",
    },
  },
}).grammar();
