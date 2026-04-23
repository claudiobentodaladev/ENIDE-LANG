import { Language } from "../grammar.class.js";

export const oshiwambo = new Language({
  language: "oshiwambo",
  about:
    "ENIDE oshi transpiler i na oku lukululwa tai holola okunyola omaprograma moshilongo shike osho",

  include: {
    main: "KwatelaMo",
    __description: "Ohashi longithwa oku kwatela mo elaka nenge omambo",
  },

  commands: {
    all: {
      __about: {
        main: "kombinga",
        __description: "okukola ounongo kombinga ya ENIDE",
      },
      __help: {
        main: "oshimonikilo",
        __description: "okukola olushe lwomayambidido oo a li po",
      },
      __version: {
        main: "uukundi",
        __description: "okukola uukundi wa paife wa ENIDE",
      },
      __languages: {
        main: "omilaka",
        __description: "okukola olushe lwomilaka oo a li po",
      },
      __documentation: {
        main: "omayenditho",
        __description: "okukola omayenditho woshilongo",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "omatjangwa",
        __description: "okutuatera oilandulilo yoshomatjangwa",
      },

      __pi: {
        main: "PI",
        __description: "okukola onhele ya pi",
      },

      __sqrt: {
        main: "EtoLyaKvadrata",
        __description: "okukola eto lya kvadrata",
      },

      __pow: {
        main: "Ondjabi",
        __description: "okukola ondjabi yanomola",
      },

      __round: {
        main: "Pindula",
        __description: "okupindula nomola",
      },

      __random: {
        main: "Oshiponga",
        __description: "okukola nomola yoshiponga",
      },

      __max: {
        main: "Okuulu",
        __description: "okukola onhele okuulu",
      },

      __min: {
        main: "Okudidi",
        __description: "okukola onhele okudidi",
      },

      __isNumber: {
        main: "ShiNomola",
        __description: "okukamburura osho nomola",
      },

      __isInteger: {
        main: "ShiNomolaYopamwe",
        __description: "okukamburura osho nomola yopamwe",
      },

      __isFloat: {
        main: "ShiFloat",
        __description: "okukamburura osho shi na oshipambu",
      },
    },

    __string: {
      main: {
        main: "oshitambo",
        __description: "okutuatera oilandulilo yoshitambo",
      },

      __length: {
        main: "Omuraro",
        __description: "okukola omuraro woshitambo",
      },

      __toUpperCase: {
        main: "KwaOkuulu",
        __description: "okuhulameka oshitambo ko omayele okuulu",
      },

      __toLowerCase: {
        main: "KwaOkudidi",
        __description: "okuhulameka oshitambo ko omayele okudidi",
      },
    },

    __date: {
      main: {
        main: "efimbo",
        __description: "okutuatera oilandulilo yefimbo",
      },

      __year: { main: "Omumvo", __description: "okukola omumvo" },

      __month: { main: "Omwedi", __description: "okukola omwedi" },

      __dayMonth: {
        main: "OshiwikeShomwedi",
        __description: "okukola oshiwike shomwedi",
      },

      __dayWeek: {
        main: "OshiwikeShoveke",
        __description: "okukola oshiwike shoveke",
      },

      __hour: { main: "Ehora", __description: "okukola ehora" },

      __minute: { main: "Ominiti", __description: "okukola ominiti" },

      __second: { main: "Osekonde", __description: "okukola osekonde" },
    },
  },

  types: {
    __object: {
      main: "oshifo",
      __description: "okupopya oshifo oshi li pombanda",
    },

    __number: {
      main: "nomola",
      __description: "okufalika omashindano wonhele ya nomola",
    },

    __string: {
      main: "oshitambo",
      __description: "okufalika omashindano wonhele yoshitambo",
    },

    __boolean: {
      main: "bool",
      values: { __true: "Oshili", __false: "Iifundja" },
      __description: "okufalika omashindano wonhele ya boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "andika",
        __description: "okuandika onhele peskerin",
      },

      __scan: {
        main: "wana",
        __description: "okuwana onhele kumuntu",
      },

      __return: {
        main: "kuta",
        __description: "okukuta onhele koilandulilo",
      },
    },

    sentences: {
      __function: {
        main: "oilandulilo",
        __description: "okufalika oilandulilo",
      },

      __if: {
        main: "ongeno",
        __description: "okufalika oluumbo",
      },

      __else: {
        main: "ashike",
        __description: "okufalika oluumbo lulwe",
      },

      __while: {
        main: "manga",
        __description: "okufalika manga shilonga",
      },

      __for: {
        main: "opo",
        __description: "okufalika opo shilonga",
      },

      __switch: {
        main: "holola",
        __description: "okufalika omuaro wokuholola",
      },

      __case: {
        main: "oshimhinga",
        __description: "okufalika oshimhinga",
      },

      __default: {
        main: "oshiho",
        __description: "okufalika oshimhinga shoshiho",
      },

      __try: {
        main: "yedza",
        __description: "okuyedza oshilonga",
      },

      __catch: {
        main: "mena",
        __description: "okukwata omapuko",
      },

      __finally: {
        main: "okupwa",
        __description: "oshilonga osho tashi ningwa alushe",
      },
    },
  },

  errors: {
    main: {
      tag: "OSHIWIFA",
      message: "Oshiwifa shomisepelo yoshilonga",
    },

    __UNKNOWN_ERROR: {
      tag: "OSHIWIFA_INASHI",
      message: "Oshiwifa inashi shimbangi",
    },

    __TypeError: {
      tag: "OSHIWIFA_OMILAKA",
      message: "Omilaka inai kwata koilandulilo",
    },

    __ReferenceError: {
      tag: "OSHIWIFA_OKUKOLA",
      message: "Omashindano ina li po",
    },

    __SyntaxError: {
      tag: "OSHIWIFA_SINTAKISI",
      message: "Okoodi inai longifa nawa",
    },

    __RangeError: {
      tag: "OSHIWIFA_OMURARO",
      message: "Onhele ikuramena omuraro",
    },

    __URIError: {
      tag: "OSHIWIFA_URI",
      message: "URI inai longifa nawa",
    },

    __EvalError: {
      tag: "OSHIWIFA_EVAL",
      message: "Oshiwifa sha eval",
    },
  },
}).grammar();
