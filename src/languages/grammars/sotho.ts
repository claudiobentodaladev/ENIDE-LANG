import { Language } from "../grammar.class.js";

export const sotho = new Language({
  language: "sotho",
  about:
    "ENIDE ke transpiler e kgonang ho fetoha e dumellang ho ngola programo ka puo efe kapa efe",
  include: {
    main: "Kenyeletsa",
    __description: "E sebelisetsoa ho kenyeletsa puo kapa lilaeborari",
  },
  commands: {
    all: {
      __about: {
        main: "ka",
        __description: "ho fumana tsebiso ka ENIDE",
      },
      __help: {
        main: "thuso",
        __description: "ho fumana lethathamo la ditaelo tsohle tse fumanehang",
      },
      __version: {
        main: "version",
        __description: "ho fumana version ya hona joale ya ENIDE",
      },
      __languages: {
        main: "dipuo",
        __description: "ho fumana lethathamo la dipuo tsohle tse fumanehang",
      },
      __documentation: {
        main: "dikwalo",
        __description: "ho fumana dikwalo tsa puo",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "dipalo",
        __description: "ho fumana mesebetsi ya dipalo",
      },
      __pi: {
        main: "PI",
        __description: "ho fumana boleng ba pi",
      },
      __sqrt: {
        main: "MoleleSquare",
        __description: "ho fumana mole wa square",
      },
      __pow: {
        main: "Matla",
        __description: "ho fumana matla a nomoro",
      },
      __round: {
        main: "Potolohisa",
        __description: "ho potolohisa nomoro",
      },
      __random: {
        main: "Leeto",
        __description: "ho fumana nomoro ya leeto",
      },
      __max: {
        main: "Seholo",
        __description: "ho fumana boleng bo boholo",
      },
      __min: {
        main: "Senyenyane",
        __description: "ho fumana boleng bo bonyenyane",
      },
      __isNumber: {
        main: "KeNomoro",
        __description: "ho netefatsa hore boleng ke nomoro",
      },
      __isInteger: {
        main: "KeNomoroKamaho",
        __description: "ho netefatsa hore boleng ke nomoro kamaho",
      },
      __isFloat: {
        main: "KeDesimale",
        __description: "ho netefatsa hore boleng ke desimale",
      },
    },
    __string: {
      main: {
        main: "thapo",
        __description: "ho fumana mesebetsi ya ho laola thapo",
      },
      __length: {
        main: "Bolelele",
        __description: "ho fumana bolelele ba thapo",
      },
      __toUpperCase: {
        main: "KwaNnakiSeholo",
        __description: "ho fetola thapo ho ba le ditlhaku tse dikgolo",
      },
      __toLowerCase: {
        main: "KwaNnakiSenyenyane",
        __description: "ho fetola thapo ho ba le ditlhaku tse dinyenyane",
      },
    },
    __date: {
      main: {
        main: "letsatsi",
        __description: "ho fumana mesebetsi ya letsatsi le nako",
      },
      __year: {
        main: "Selemo",
        __description: "ho fumana selemo",
      },
      __month: {
        main: "Kgwedi",
        __description: "ho fumana kgwedi",
      },
      __dayMonth: {
        main: "LetsatsiKgwedi",
        __description: "ho fumana letsatsi la kgwedi",
      },
      __dayWeek: {
        main: "LetsatsiVeke",
        __description: "ho fumana letsatsi la veke",
      },
      __hour: {
        main: "Hora",
        __description: "ho fumana hora",
      },
      __minute: {
        main: "Metsotso",
        __description: "ho fumana metsotso",
      },
      __second: {
        main: "Motsotswana",
        __description: "ho fumana motsotswana",
      },
    },
  },
  types: {
    __object: { main: "ntho", __description: "ho phatlalatsa ntho e itseng" },
    __number: {
      main: "nomoro",
      __description: "ho phatlalatsa phetoho ya mofuta wa nomoro",
    },
    __string: {
      main: "thapo",
      __description: "ho phatlalatsa phetoho ya mofuta wa thapo",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Nnete", __false: "Mashano" },
      __description: "ho phatlalatsa phetoho ya mofuta wa boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "gatisa",
        __description: "ho gatisa boleng skiring",
      },
      __scan: {
        main: "bala",
        __description: "ho bala boleng ho tswa ho mosebedisi",
      },
      __return: {
        main: "khutlisa",
        __description: "ho khutlisa boleng ho tswa mesebetsing",
      },
    },
    sentences: {
      __function: {
        main: "mosebetsi",
        __description: "ho phatlalatsa mosebetsi",
      },
      __if: {
        main: "haeba",
        __description: "ho phatlalatsa maemo",
      },
      __else: {
        main: "ntle",
        __description: "ho phatlalatsa maemo a mang",
      },
      __while: {
        main: "ha",
        __description: "ho phatlalatsa loop ya ha",
      },
      __for: {
        main: "ho",
        __description: "ho phatlalatsa loop ya ho",
      },
      __switch: {
        main: "kgetho",
        __description: "ho phatlalatsa sebopeho sa kgetho",
      },
      __case: {
        main: "boleng",
        __description: "ho phatlalatsa boleng sebopeho sa kgetho",
      },
      __default: {
        main: "tlwaelo",
        __description: "ho phatlalatsa boleng ba tlwaelo",
      },
      __try: {
        main: "leka",
        __description: "ho phatlalatsa bloko ya ho leka",
      },
      __catch: {
        main: "tshwara",
        __description: "ho phatlalatsa bloko ya ho tshwara diphoso",
      },
      __finally: {
        main: "qetellong",
        __description: "ho phatlalatsa bloko e sebetsang kamehla",
      },
    },
  },
  errors: {
    main: {
      tag: "PHOSO",
      message: "Phoso e tlwaelehileng ya sisteme",
    },
    __UNKNOWN_ERROR: {
      tag: "PHOSO_E_SA_TSEJOENG",
      message: "Phoso e sa tsejoeng ka botlalo",
    },
    __TypeError: {
      tag: "PHOSO_MOFUTA",
      message: "Mofuta ha o siame tshebedisong",
    },
    __ReferenceError: {
      tag: "PHOSO_TSHUPISO",
      message: "Phetoho ha e yo tikologong",
    },
    __SyntaxError: {
      tag: "PHOSO_SINTAKISI",
      message: "Khoutu ha e siame",
    },
    __RangeError: {
      tag: "PHOSO_BOPHARA",
      message: "Boleng bo ka ntle ho bophara bo dumellwang",
    },
    __URIError: {
      tag: "PHOSO_URI",
      message: "URI e senyehileng kapa e sa siamang",
    },
    __EvalError: {
      tag: "PHOSO_EVAL",
      message: "Phoso e amanang le eval",
    },
  },
}).grammar();
