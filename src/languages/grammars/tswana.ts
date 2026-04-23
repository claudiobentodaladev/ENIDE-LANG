import { Language } from "../grammar.class.js";

export const tswana = new Language({
  language: "tswana",
  about:
    "ENIDE ke transpiler e kgonang go fetolwa e e dumelelang go ngwa porogramo ka puo nngwe le nngwe",

  include: {
    main: "Akaretsa",
    __description: "E dirisetswa go akaretsa loleme kgotsa dilaeborari",
  },

  commands: {
    all: {
      __about: {
        main: "KaEnide",
        __description: "go bona tshedimosetso ka ENIDE",
      },
      __help: {
        main: "Thuso",
        __description: "go bona lenaane la ditaelo tsotlhe tse di leng teng",
      },
      __version: {
        main: "Version",
        __description: "go bona version ya jaanong ya ENIDE",
      },
      __languages: {
        main: "Dipuo",
        __description: "go bona lenaane la dipuo tsotlhe tse di leng teng",
      },
      __documentation: {
        main: "Dikwalo",
        __description: "go bona dikwalo tsa puo",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Dipalo",
        __description: "go fitlhelela mesepamo ya dipalo",
      },
      __pi: {
        main: "PI",
        __description: "go bona boleng jwa pi",
      },
      __sqrt: {
        main: "MoleLesquare",
        __description: "go bona mole wa square",
      },
      __pow: {
        main: "Maatla",
        __description: "go bona maatla a nomoro",
      },
      __round: {
        main: "Pipisana",
        __description: "go pipisanya nomoro",
      },
      __random: {
        main: "Tshepiso",
        __description: "go bona nomoro ya leeto",
      },
      __max: {
        main: "Segolo",
        __description: "go bona boleng jo bogolo",
      },
      __min: {
        main: "Sennye",
        __description: "go bona boleng jo bonnye",
      },
      __isNumber: {
        main: "KeyaNomoro",
        __description: "go netefatsa gore boleng ke nomoro",
      },
      __isInteger: {
        main: "KeyaNomoroKamali",
        __description: "go netefatsa gore boleng ke nomoro kamali",
      },
      __isFloat: {
        main: "KeyaDesimale",
        __description: "go netefatsa gore boleng ke desimale",
      },
    },

    __string: {
      main: {
        main: "Mogala",
        __description: "go fitlhelela mesepamo ya go laola mogala",
      },
      __length: {
        main: "Botelele",
        __description: "go bona botelele jwa mogala",
      },
      __toUpperCase: {
        main: "KwaNnakiSegolo",
        __description: "go fetola mogala go nna dipitso tse dikgolo",
      },
      __toLowerCase: {
        main: "KwaNnakiSennye",
        __description: "go fetola mogala go nna dipitso tse dinnye",
      },
    },

    __date: {
      main: {
        main: "Letsatsi",
        __description: "go fitlhelela mesepamo ya letsatsi le nako",
      },
      __year: {
        main: "Ngwaga",
        __description: "go bona ngwaga",
      },
      __month: {
        main: "Kgwedi",
        __description: "go bona kgwedi",
      },
      __dayMonth: {
        main: "LetsatsiKgwedi",
        __description: "go bona letsatsi la kgwedi",
      },
      __dayWeek: {
        main: "LetsatsiVeke",
        __description: "go bona letsatsi la veke",
      },
      __hour: {
        main: "Nako",
        __description: "go bona nako",
      },
      __minute: {
        main: "Metsotso",
        __description: "go bona metsotso",
      },
      __second: {
        main: "Metsotswana",
        __description: "go bona metsotswana",
      },
    },
  },

  types: {
    __object: {
      main: "Ntho",
      __description: "go phasalatsa ntho e emeng",
    },
    __number: {
      main: "Nomoro",
      __description: "go phasalatsa phetogo ya mofuta wa nomoro",
    },
    __string: {
      main: "Mogala",
      __description: "go phasalatsa phetogo ya mofuta wa mogala",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Boammaaruri", __false: "Maaka" },
      __description: "go phasalatsa phetogo ya mofuta wa boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Gatisa",
        __description: "go gatisa boleng mo skiring",
      },
      __scan: {
        main: "Bala",
        __description: "go bala boleng go tswa go mmedisetsi",
      },
      __return: {
        main: "Busetsa",
        __description: "go busetsa boleng go tswa mo mosepamong",
      },
    },

    sentences: {
      __function: {
        main: "Mosepamo",
        __description: "go phasalatsa mosepamo",
      },
      __if: {
        main: "FaMaemo",
        __description: "go phasalatsa maemo",
      },
      __else: {
        main: "Gongwe",
        __description: "go phasalatsa maemo a mangwe",
      },
      __while: {
        main: "FaLoop",
        __description: "go phasalatsa loop ya fa",
      },
      __for: {
        main: "GoLoop",
        __description: "go phasalatsa loop ya go",
      },
      __switch: {
        main: "Kgetho",
        __description: "go phasalatsa thulaganyo ya kgetho",
      },
      __case: {
        main: "Boleng",
        __description: "go phasalatsa boleng mo thulaganong ya kgetho",
      },
      __default: {
        main: "Tlwaelo",
        __description: "go phasalatsa boleng jwa tlwaelo",
      },
      __try: {
        main: "Leka",
        __description: "go phasalatsa bloko ya go leka",
      },
      __catch: {
        main: "Tshwara",
        __description: "go phasalatsa bloko ya go tshwara diphoso",
      },
      __finally: {
        main: "Bofelo",
        __description: "go phasalatsa bloko e e dirang ka dinako tsotlhe",
      },
    },
  },

  errors: {
    main: {
      tag: "PHOSO",
      message: "Phoso e tlwaelegileng ya sisteme",
    },
    __UNKNOWN_ERROR: {
      tag: "PHOSO_E_SA_ITSIWENG",
      message: "Phoso e e sa itsiweng gotlhe",
    },
    __TypeError: {
      tag: "PHOSO_MOFUTA",
      message: "Mofuta ga o siame mo tirisong",
    },
    __ReferenceError: {
      tag: "PHOSO_TSHUPISO",
      message: "Phetogo ga e leng mo tikologong",
    },
    __SyntaxError: {
      tag: "PHOSO_SINTAKISI",
      message: "Khoutu ga e siame",
    },
    __RangeError: {
      tag: "PHOSO_NTLHA",
      message: "Boleng bo ka ntle ga ntlha e e letleliweng",
    },
    __URIError: {
      tag: "PHOSO_URI",
      message: "URI e senyegileng kgotsa e sa siamang",
    },
    __EvalError: {
      tag: "PHOSO_EVAL",
      message: "Phoso e e amanang le eval",
    },
  },
}).grammar();
