import { Language } from "../grammar.class.js";

export const fulfulde = new Language({
  language: "fulfulde",
  about: "ENIDE woni transpiler moyyiniraaɗo ngo yaɓɓana kodde e kala hakkunde",
  include: {
    main: "Nastinki",
    __description: "No naftire nastinki dhemngal malla bibaariiji",
  },
  commands: {
    all: {
      __about: {
        main: "faade",
        __description: "hoolnaade habaruuji faade ENIDE",
      },
      __help: {
        main: "ballal",
        __description: "hoolnaade liste yamirooje fof jeyaaɗe",
      },
      __version: {
        main: "version",
        __description: "hoolnaade version jooni ngo ENIDE",
      },
      __languages: {
        main: "hakkundeji",
        __description: "hoolnaade liste hakkundeji fof jeyaaɗi",
      },
      __documentation: {
        main: "dewtere",
        __description: "hoolnaade dewtere hakkunde",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "aritmetik",
        __description: "naatde e golle aritmetik",
      },
      __pi: {
        main: "PI",
        __description: "hoolnaade darnde pi",
      },
      __sqrt: {
        main: "SquareHakko",
        __description: "hoolnaade hakko square",
      },
      __pow: {
        main: "Doole",
        __description: "hoolnaade doole namba",
      },
      __round: {
        main: "Faadna",
        __description: "faadnaade namba",
      },
      __random: {
        main: "Hareeji",
        __description: "hoolnaade namba hareeji",
      },
      __max: {
        main: "Toowdu",
        __description: "hoolnaade darnde toowdu",
      },
      __min: {
        main: "Laabdu",
        __description: "hoolnaade darnde laaɓdu",
      },
      __isNumber: {
        main: "WoniNamba",
        __description: "ƴeewde so darnde woni namba",
      },
      __isInteger: {
        main: "WoniNambaHimre",
        __description: "ƴeewde so darnde woni namba himre",
      },
      __isFloat: {
        main: "WoniDesimal",
        __description: "ƴeewde so darnde woni desimal",
      },
    },
    __string: {
      main: {
        main: "diwgol",
        __description: "naatde e golle moƴƴingol diwgol",
      },
      __length: {
        main: "Juutde",
        __description: "hoolnaade juutde diwgol",
      },
      __toUpperCase: {
        main: "KooBaadeToowde",
        __description: "sifnaade diwgol e deeje toowde",
      },
      __toLowerCase: {
        main: "KooBaadeLaabde",
        __description: "sifnaade diwgol e deeje laaɓde",
      },
    },
    __date: {
      main: {
        main: "nalnde",
        __description: "naatde e golle ñalnde e waktu",
      },
      __year: {
        main: "Hitaande",
        __description: "hoolnaade hitaande",
      },
      __month: {
        main: "Lewru",
        __description: "hoolnaade lewru",
      },
      __dayMonth: {
        main: "NyalLewru",
        __description: "hoolnaade ñal lewru",
      },
      __dayWeek: {
        main: "NyalPekaan",
        __description: "hoolnaade ñal pekaan",
      },
      __hour: {
        main: "Waktu",
        __description: "hoolnaade waktu",
      },
      __minute: {
        main: "Miniti",
        __description: "hoolnaade miniti",
      },
      __second: {
        main: "Sekondi",
        __description: "hoolnaade sekondi",
      },
    },
  },
  types: {
    __object: {
      main: "huunde",
      __description: "wallude hollude huunde jabnore",
    },
    __number: {
      main: "namba",
      __description: "hollirde jantaare e suudu namba",
    },
    __string: {
      main: "diwgol",
      __description: "hollirde jantaare e suudu diwgol",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Goonga",
        __false: "Fewre",
      },
      __description: "hollirde jantaare e suudu boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "hollir",
        __description: "hollirde darnde e ɓanndu",
      },
      __scan: {
        main: "janngo",
        __description: "janngude darnde e jom golle",
      },
      __return: {
        main: "rutto",
        __description: "ruttoyde darnde e golle",
      },
    },
    sentences: {
      __function: {
        main: "golle",
        __description: "hollirde golle",
      },
      __if: {
        main: "so",
        __description: "hollirde tiitoonde",
      },
      __else: {
        main: "wanaa",
        __description: "hollirde tiitoonde welnde",
      },
      __while: {
        main: "tuma",
        __description: "hollirde loop tuma",
      },
      __for: {
        main: "kono",
        __description: "hollirde loop kono",
      },
      __switch: {
        main: "subo",
        __description: "hollirde laawol suɓaare",
      },
      __case: {
        main: "haala",
        __description: "hollirde haala e laawol suɓaare",
      },
      __default: {
        main: "celal",
        __description: "hollirde haala celal",
      },
      __try: {
        main: "miya",
        __description: "hollirde bloki miya",
      },
      __catch: {
        main: "jom",
        __description: "hollirde bloki jom juumre",
      },
      __finally: {
        main: "caggal",
        __description: "hollirde bloki ngo dartata tuma fof",
      },
    },
  },
  errors: {
    main: {
      tag: "JUUMRE",
      message: "Juumre jaajunde e ɗemngal",
    },
    __UNKNOWN_ERROR: {
      tag: "JUUMRE_ANNDAAKA",
      message: "Juumre anndaaka kala",
    },
    __TypeError: {
      tag: "JUUMRE_SUUDU",
      message: "Suudu dañaaka e golle",
    },
    __ReferenceError: {
      tag: "JUUMRE_DEFTERE",
      message: "Jantaare wondaake e asamaande",
    },
    __SyntaxError: {
      tag: "JUUMRE_SINTAKS",
      message: "Koodal sifaaka",
    },
    __RangeError: {
      tag: "JUUMRE_TAYRE",
      message: "Darnde addii e taƴre maɓɓaande",
    },
    __URIError: {
      tag: "JUUMRE_URI",
      message: "URI baaɗaa walla sifaaka",
    },
    __EvalError: {
      tag: "JUUMRE_EVAL",
      message: "Juumre yiiltunde e eval",
    },
  },
}).grammar();
