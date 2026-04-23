import { Language } from "../grammar.class.js";

export const umbundu = new Language({
  language: "umbundu",
  about:
    "ENIDE i transpilador uo kuhindulukilako yoneka yo kuprograma mu ndimi yosi",

  include: {
    main: "OkukapaMo",
    __description: "Ci lingiwa oku kapa mo elimi ale o mambululyu",
  },

  commands: {
    all: {
      __about: {
        main: "Ehulo",
        __description: "okupulapula omalaka kombanda yaENIDE",
      },
      __help: {
        main: "Epukululo",
        __description: "okupulapula ovilista vya milayo yosi yokufikamena",
      },
      __version: {
        main: "Olupale",
        __description: "okupulapula olupale lwokulyo lwa ENIDE",
      },
      __languages: {
        main: "Ondimi",
        __description: "okupulapula ovilista vya ondimi yosi yokufikamena",
      },
      __documentation: {
        main: "Doc",
        __description: "okupulapula ovilembiso vya olulimi",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Omatematika",
        __description: "okufika oviungula vya omatematika",
      },
      __pi: {
        main: "PI",
        __description: "okupulapula omuholo wa pi",
      },
      __sqrt: {
        main: "OmulamuWaNzole",
        __description: "okupulapula omulamu wa nzole",
      },
      __pow: {
        main: "Ongeve",
        __description: "okupulapula ongeve yo onombolo",
      },
      __round: {
        main: "Okuzunguluka",
        __description: "okuzungulusa onombolo",
      },
      __random: {
        main: "Okasoni",
        __description: "okupulapula onombolo yokasoni",
      },
      __max: {
        main: "Okulamba",
        __description: "okupulapula omuholo okulamba",
      },
      __min: {
        main: "Okufioti",
        __description: "okupulapula omuholo okufioti",
      },
      __isNumber: {
        main: "IOnombolo",
        __description: "okutalela nge omuholo i onombolo",
      },
      __isInteger: {
        main: "IOnomboloKima",
        __description: "okutalela nge omuholo i onombolo yokima",
      },
      __isFloat: {
        main: "IOnomboloKipande",
        __description: "okutalela nge omuholo i onombolo yokipande",
      },
    },

    __string: {
      main: {
        main: "Ovilembiso",
        __description: "okufika oviungula vyo kusobola ovilembiso",
      },
      __length: {
        main: "Omulali",
        __description: "okupulapula omulali wovilembiso",
      },
      __toUpperCase: {
        main: "KuNeneNene",
        __description: "okuhindulukilako ovilembiso ku nene nene",
      },
      __toLowerCase: {
        main: "KuFiotiFioti",
        __description: "okuhindulukilako ovilembiso ku fioti fioti",
      },
    },

    __date: {
      main: {
        main: "Esiku",
        __description: "okufika oviungula vya esiku ni engonga",
      },
      __year: {
        main: "Omvula",
        __description: "okupulapula omvula",
      },
      __month: {
        main: "Ongonda",
        __description: "okupulapula ongonda",
      },
      __dayMonth: {
        main: "EsikuNgonda",
        __description: "okupulapula esiku lya ongonda",
      },
      __dayWeek: {
        main: "EsikuSemana",
        __description: "okupulapula esiku lya semana",
      },
      __hour: {
        main: "Engonga",
        __description: "okupulapula engonga",
      },
      __minute: {
        main: "Ominuto",
        __description: "okupulapula ominuto",
      },
      __second: {
        main: "Osegundo",
        __description: "okupulapula osegundo",
      },
    },
  },

  types: {
    __object: {
      main: "Ombuto",
      __description: "okwamba ombuto ombimbi",
    },
    __number: {
      main: "Onombolo",
      __description: "okufumana ovivikilanga vyo muxima onombolo",
    },
    __string: {
      main: "Ovilembiso",
      __description: "okufumana ovivikilanga vyo muxima ovilembiso",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Ocili", __false: "Uhembi" },
      __description: "okufumana ovivikilanga vyo muxima bool",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Okulembisa",
        __description: "okulembisa omuholo ku ekele",
      },
      __scan: {
        main: "Okusosa",
        __description: "okusosa omuholo ku njila yokuingila",
      },
      __return: {
        main: "Okuvutuka",
        __description: "okuvutula omuholo ku oviungula",
      },
    },

    sentences: {
      __function: {
        main: "Oviungula",
        __description: "okufumana oviungula",
      },
      __if: {
        main: "Nge",
        __description: "okufumana kondisaun",
      },
      __else: {
        main: "Kana",
        __description: "okufumana kondisaun yokanka",
      },
      __while: {
        main: "Ngiedi",
        __description: "okufumana ngiedi wa ngiedi",
      },
      __for: {
        main: "Ku",
        __description: "okufumana ngiedi wa ku",
      },
      __switch: {
        main: "Okusongola",
        __description: "okufumana estrutura yokusongola",
      },
      __case: {
        main: "Okima",
        __description: "okufumana okima mu estrutura yokusongola",
      },
      __default: {
        main: "Onsuka",
        __description: "okufumana okima konsuka mu estrutura yokusongola",
      },
      __try: {
        main: "Okusuka",
        __description: "okufumana bloku ya okusuka",
      },
      __catch: {
        main: "Okukanga",
        __description: "okufumana bloku yokulukila ominsangu",
      },
      __finally: {
        main: "Konsuka",
        __description: "okufumana bloku yokusalama ntangu yosi",
      },
    },
  },

  errors: {
    main: {
      tag: "OLUSITA",
      message: "Olusita lwa sistema",
    },
    __UNKNOWN_ERROR: {
      tag: "OlusitaOlusiziwa",
      message: "Olusita olo olusiziwa",
    },
    __TypeError: {
      tag: "OlusitaMuxima",
      message: "Omuxima owabela mu oviungula",
    },
    __ReferenceError: {
      tag: "OlusitaReferencia",
      message: "Ovivikilanga ovijila mu scope",
    },
    __SyntaxError: {
      tag: "OlusitaSintaxe",
      message: "Codigo owabela",
    },
    __RangeError: {
      tag: "OlusitaRango",
      message: "Omuholo ofuila rango ya kuluvula",
    },
    __URIError: {
      tag: "OlusitaUri",
      message: "URI owabela to invalid",
    },
    __EvalError: {
      tag: "OlusitaEval",
      message: "Olusita lwa eval",
    },
  },
}).grammar();
