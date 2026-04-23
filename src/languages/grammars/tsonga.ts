import { Language } from "../grammar.class.js";

export const tsonga = new Language({
  language: "tsonga",
  about:
    "ENIDE i transpiler leri nga hundzuliwa leri pfumelaka ku tsala program hi rito rihani",

  include: {
    main: "Katsa",
    __description: "Swi tirhisiwa ku katsa ririmi kumbe tilayiburari",
  },

  commands: {
    all: {
      __about: {
        main: "HiEnide",
        __description: "ku kuma vuxokoxoko hi ENIDE",
      },
      __help: {
        main: "Pfuno",
        __description: "ku kuma ndlela ya milayo yolohe leyi nga kona",
      },
      __version: {
        main: "Version",
        __description: "ku kuma version ya sweswi ya ENIDE",
      },
      __languages: {
        main: "Tindzimi",
        __description: "ku kuma ndlela ya tindzimi tinhungu leyi nga kona",
      },
      __documentation: {
        main: "Matsalwa",
        __description: "ku kuma matsalwa ya rito",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematiki",
        __description: "ku fikelela misepelo ya matematiki",
      },
      __pi: {
        main: "PI",
        __description: "ku kuma nhlayo ya pi",
      },
      __sqrt: {
        main: "MihlaNasquare",
        __description: "ku kuma mihla wa square",
      },
      __pow: {
        main: "Matimba",
        __description: "ku kuma matimba ya nomboro",
      },
      __round: {
        main: "Tsindzisa",
        __description: "ku tsindzisa nomboro",
      },
      __random: {
        main: "Ngopfu",
        __description: "ku kuma nomboro ya mbhalo",
      },
      __max: {
        main: "Kulu",
        __description: "ku kuma nhlayo yo kululeka",
      },
      __min: {
        main: "Ntsongo",
        __description: "ku kuma nhlayo yo ntsongotsongo",
      },
      __isNumber: {
        main: "INomboro",
        __description: "ku hlaya leswi nhlayo i nomboro",
      },
      __isInteger: {
        main: "INomboroKamalo",
        __description: "ku hlaya leswi nhlayo i nomboro kamalo",
      },
      __isFloat: {
        main: "IDesimali",
        __description: "ku hlaya leswi nhlayo i desimali",
      },
    },

    __string: {
      main: {
        main: "Xitambo",
        __description: "ku fikelela misepelo ya ku lulamisela xitambo",
      },
      __length: {
        main: "Xitalo",
        __description: "ku kuma xitalo xa xitambo",
      },
      __toUpperCase: {
        main: "KwaHarufuKulu",
        __description: "ku hundzula xitambo ku va harufu tikulu",
      },
      __toLowerCase: {
        main: "KwaHarufuNtsongo",
        __description: "ku hundzula xitambo ku va harufu tintsongo",
      },
    },

    __date: {
      main: {
        main: "Siku",
        __description: "ku fikelela misepelo ya siku na nkarhi",
      },
      __year: {
        main: "Lembe",
        __description: "ku kuma lembe",
      },
      __month: {
        main: "Inyanga",
        __description: "ku kuma inyanga",
      },
      __dayMonth: {
        main: "SikuInyanga",
        __description: "ku kuma siku ra inyanga",
      },
      __dayWeek: {
        main: "SikuWiki",
        __description: "ku kuma siku ra wiki",
      },
      __hour: {
        main: "Hora",
        __description: "ku kuma hora",
      },
      __minute: {
        main: "Minete",
        __description: "ku kuma minete",
      },
      __second: {
        main: "Sekhonde",
        __description: "ku kuma sekhonde",
      },
    },
  },

  types: {
    __object: {
      main: "Xinto",
      __description: "ku landza xinto xa nkoka",
    },
    __number: {
      main: "Nomboro",
      __description: "ku pasalatsa ku cinca ka muxaka wa nomboro",
    },
    __string: {
      main: "Xitambo",
      __description: "ku pasalatsa ku cinca ka muxaka wa xitambo",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Ntiyiso", __false: "Mavunwa" },
      __description: "ku pasalatsa ku cinca ka muxaka wa boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Tsala",
        __description: "ku tsala nhlayo eka sikirinini",
      },
      __scan: {
        main: "Hlaya",
        __description: "ku hlaya nhlayo eka musavali",
      },
      __return: {
        main: "Buyela",
        __description: "ku buyela nhlayo eka misepelo",
      },
    },

    sentences: {
      __function: {
        main: "Misepelo",
        __description: "ku pasalatsa misepelo",
      },
      __if: {
        main: "Loko",
        __description: "ku pasalatsa malembe",
      },
      __else: {
        main: "Xikona",
        __description: "ku pasalatsa malembe ya nwana",
      },
      __while: {
        main: "Laha",
        __description: "ku pasalatsa loop ya laha",
      },
      __for: {
        main: "KuLoop",
        __description: "ku pasalatsa loop ya ku",
      },
      __switch: {
        main: "Hlawula",
        __description: "ku pasalatsa xivumbeko xa ku hlawula",
      },
      __case: {
        main: "Xikongomelo",
        __description: "ku pasalatsa xikongomelo xivumbeko xa ku hlawula",
      },
      __default: {
        main: "Kahle",
        __description: "ku pasalatsa xikongomelo xa kahle",
      },
      __try: {
        main: "Ringeta",
        __description: "ku pasalatsa bloko ya ku ringeta",
      },
      __catch: {
        main: "Tshixa",
        __description: "ku pasalatsa bloko ya ku tshixa siphoso",
      },
      __finally: {
        main: "Ekuheleni",
        __description: "ku pasalatsa bloko leyi tirhaka ntlhanu",
      },
    },
  },

  errors: {
    main: {
      tag: "SIPHOSO",
      message: "Siphoso sa ntolovelo sa sisteme",
    },
    __UNKNOWN_ERROR: {
      tag: "SIPHOSO_XITSAKATISO",
      message: "Siphoso lexi nga tivekiki",
    },
    __TypeError: {
      tag: "SIPHOSO_MUXAKA",
      message: "Muxaka wu nga ri kahle eka ntirho",
    },
    __ReferenceError: {
      tag: "SIPHOSO_NKOMBELO",
      message: "Ku cinca a kuna eka xiyimo",
    },
    __SyntaxError: {
      tag: "SIPHOSO_SINTAKISI",
      message: "Khodi a yi kahle",
    },
    __RangeError: {
      tag: "SIPHOSO_NHLAYO",
      message: "Nhlayo i handle ka nhlayo leyi pfumelekiwaka",
    },
    __URIError: {
      tag: "SIPHOSO_URI",
      message: "URI yo biha kumbe leyi nga kahli",
    },
    __EvalError: {
      tag: "SIPHOSO_EVAL",
      message: "Siphoso lexi vulaneke na eval",
    },
  },
}).grammar();
