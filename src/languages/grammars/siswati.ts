import { Language } from "../grammar.class.js";

export const siswati = new Language({
  language: "siswati",

  about: "ENIDE licedze lelivumela kutsi ubhale tinhlelo ngemilimi leyehlukene",

  include: {
    main: "faka",
    __description: "kusetjentiswa kufaka limilimi nobe libhayibhuli",
  },

  commands: {
    all: {
      __about: {
        main: "mayelana",
        __description: "utfola lwati nge ENIDE",
      },

      __help: {
        main: "lusito",
        __description: "kubona tonkhe tikhombandlela",
      },

      __version: {
        main: "inguquko",
        __description: "kubona simo samanje se ENIDE",
      },

      __languages: {
        main: "tilimi",
        __description: "kubona tilimi letikhona",
      },

      __documentation: {
        main: "incwadzi",
        __description: "kubona incwadzi yelulwimi",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "tibalo",
        __description: "imisebenti yetibalo",
      },

      __pi: {
        main: "pi",
        __description: "inombolo ye pi",
      },

      __sqrt: {
        main: "imphandze",
        __description: "imphandze yesikwele senombolo",
      },

      __pow: {
        main: "emandla",
        __description: "kusiphakamisa inombolo",
      },

      __round: {
        main: "tungisa",
        __description: "kuletha inombolo eduze",
      },

      __random: {
        main: "ngaletindzaba",
        __description: "inombolo levela ngaphandle kokuhleleka",
      },

      __max: {
        main: "lukhulu",
        __description: "inombolo lenkhulu kakhulu",
      },

      __min: {
        main: "luncane",
        __description: "inombolo lencane kakhulu",
      },

      __isNumber: {
        main: "yinombolo",
        __description: "kubona kutsi loku yinombolo yini",
      },

      __isInteger: {
        main: "yiphelele",
        __description: "kubona kutsi inombolo iphelele yini",
      },

      __isFloat: {
        main: "inemaphuzu",
        __description: "kubona kutsi inemaphuzu yini",
      },
    },

    __string: {
      main: {
        main: "umbhalo",
        __description: "kusebenta ngemagama",
      },

      __length: {
        main: "budze",
        __description: "budze bemagama",
      },

      __toUpperCase: {
        main: "tinkhulu",
        __description: "kwenta emagama abe makhulu",
      },

      __toLowerCase: {
        main: "tincane",
        __description: "kwenta emagama abe mancane",
      },
    },

    __date: {
      main: {
        main: "sikhatsi",
        __description: "kusetyenziswa kwesikhatsi nelilanga",
      },

      __year: {
        main: "umnyaka",
        __description: "umnyaka lamanje",
      },

      __month: {
        main: "inyanga",
        __description: "inyanga lamanje",
      },

      __dayMonth: {
        main: "lilangaLenyanga",
        __description: "lilanga ngaphakathi kwenyanga",
      },

      __dayWeek: {
        main: "lilangaLeviki",
        __description: "lilanga leliviki",
      },

      __hour: {
        main: "lihora",
        __description: "lihora lamanje",
      },

      __minute: {
        main: "imizuzu",
        __description: "imizuzu yelihora",
      },

      __second: {
        main: "imizuzwana",
        __description: "imizuzwana yemzuzu",
      },
    },
  },

  types: {
    __object: {
      main: "intfo",
      __description: "intfo lenedatha yangaphakathi",
    },

    __number: {
      main: "inombolo",
      __description: "luhlobo lwenombolo",
    },

    __string: {
      main: "umbhalo",
      __description: "luhlobo lwemagama",
    },

    __boolean: {
      main: "licinisoNobeEmanga",
      values: {
        __true: "liciniso",
        __false: "emanga",
      },
      __description: "kusho liciniso noma emanga",
    },
  },

  methods: {
    method: {
      __print: {
        main: "khombisa",
        __description: "khombisa lokusekhompyutheni",
      },

      __scan: {
        main: "faka",
        __description: "faka lwati kumsebenzisi",
      },

      __return: {
        main: "buyisa",
        __description: "buyisa umphumela",
      },
    },

    sentences: {
      __function: {
        main: "umsebenti",
        __description: "kusungula umsebenti",
      },

      __if: {
        main: "uma",
        __description: "uma kusimo",
      },

      __else: {
        main: "ngaphandle",
        __description: "indlela lenye",
      },

      __while: {
        main: "ngesikhatsi",
        __description: "kuphindza uma kusasolo",
      },

      __for: {
        main: "kute",
        __description: "kuphindza ngeluhlelo",
      },

      __switch: {
        main: "khetsa",
        __description: "kukhetsa indlela",
      },

      __case: {
        main: "khetsi",
        __description: "indlela letsite",
      },

      __default: {
        main: "lokujwayelekile",
        __description: "indlela yakhona",
      },

      __try: {
        main: "zama",
        __description: "zama kusebenta",
      },

      __catch: {
        main: "bamba",
        __description: "bamba liphutsa",
      },

      __finally: {
        main: "ekugcineni",
        __description: "ekupheleni",
      },
    },
  },

  errors: {
    main: {
      tag: "LIPHUTSA",
      message: "liphutsa lesistimu",
    },

    __UNKNOWN_ERROR: {
      tag: "LIPHUTSA_LELINGATIWA",
      message: "liphutsa lelingatiwa",
    },

    __TypeError: {
      tag: "LIPHUTSA_LOHLANGOTI",
      message: "luhlobo lolungahambisani",
    },

    __ReferenceError: {
      tag: "LIPHUTSA_LEKUTSITSA",
      message: "akutfolakali",
    },

    __SyntaxError: {
      tag: "LIPHUTSA_LESIBHALO",
      message: "kubhala okungakalungi",
    },

    __RangeError: {
      tag: "LIPHUTSA_LEMNGCWE",
      message: "ngaphandle kwemngcele",
    },

    __URIError: {
      tag: "LIPHUTSA_URI",
      message: "URI ayihambisani",
    },

    __EvalError: {
      tag: "LIPHUTSA_EVAL",
      message: "liphutsa le eval",
    },
  },
}).grammar();
