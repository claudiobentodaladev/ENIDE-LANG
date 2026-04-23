import { Language } from "../grammar.class.js";

export const herero = new Language({
  language: "herero",
  about: "ENIDE i transpiler otji nayafana yokuhangana program motjini wotjihe",
  include: {
    main: "Okupatela_mo",
    __description: "Isapiwa okupatela mo eraka poo omambo",
  },
  commands: {
    all: {
      __about: {
        main: "pokati",
        __description: "okukura omatjangwa pokati na ENIDE",
      },
      __help: {
        main: "okuzuva",
        __description: "okukura ombapaura yomiyendo yozonene",
      },
      __version: {
        main: "version",
        __description: "okukura version yotjonaona ya ENIDE",
      },
      __languages: {
        main: "otjitjini",
        __description: "okukura ombapaura yotjitjini zozonene",
      },
      __documentation: {
        main: "omapaper",
        __description: "okukura omapaper otjitjini",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "omatjangwa",
        __description: "okutuatera omisepelo yomatjangwa",
      },
      __pi: {
        main: "PI",
        __description: "okukura onomero ya pi",
      },
      __sqrt: {
        main: "NomeroSquare",
        __description: "okukura square nomero",
      },
      __pow: {
        main: "Omautiro",
        __description: "okukura omautiro wa nomero",
      },
      __round: {
        main: "Omapindu",
        __description: "omapindu nomero",
      },
      __random: {
        main: "Ozonyama",
        __description: "okukura nomero yozonyama",
      },
      __max: {
        main: "Omutumba",
        __description: "okukura onomero omutumba",
      },
      __min: {
        main: "Omuini",
        __description: "okukura onomero omuini",
      },
      __isNumber: {
        main: "IiNomero",
        __description: "okukamburura iyii nomero",
      },
      __isInteger: {
        main: "IiNomeroKamili",
        __description: "okukamburura iyii nomero kamili",
      },
      __isFloat: {
        main: "IiDesimali",
        __description: "okukamburura iyii desimali",
      },
    },
    __string: {
      main: {
        main: "otjitambo",
        __description: "okutuatera omisepelo yotjitambo",
      },
      __length: {
        main: "Omuraro",
        __description: "okukura omuraro wotjitambo",
      },
      __toUpperCase: {
        main: "KwaOmutumba",
        __description: "okufetola otjitambo ko omutumba",
      },
      __toLowerCase: {
        main: "KwaOmuini",
        __description: "okufetola otjitambo ko omuini",
      },
    },
    __date: {
      main: {
        main: "omutezo",
        __description: "okutuatera omisepelo yomutezo na onganda",
      },
      __year: {
        main: "Omumvo",
        __description: "okukura omumvo",
      },
      __month: {
        main: "Omwedi",
        __description: "okukura omwedi",
      },
      __dayMonth: {
        main: "OmutezOmwedi",
        __description: "okukura omutezo womwedi",
      },
      __dayWeek: {
        main: "OmutezVeke",
        __description: "okukura omutezo woveke",
      },
      __hour: {
        main: "Ehora",
        __description: "okukura ehora",
      },
      __minute: {
        main: "Ominiti",
        __description: "okukura ominiti",
      },
      __second: {
        main: "Osekonde",
        __description: "okukura osekonde",
      },
    },
  },
  types: {
    __object: {
      main: "otjindu",
      __description: "okutjindura otjindu otjimari",
    },
    __number: {
      main: "nomero",
      __description: "okupopera ojingundu yonomero",
    },
    __string: {
      main: "otjitambo",
      __description: "okupopera ojingundu yotjitambo",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Oshili", __false: "Ovisutua" },
      __description: "okupopera ojingundu ya boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "andika",
        __description: "okuputa onomero peskerin",
      },
      __scan: {
        main: "nzura",
        __description: "okunzura onomero kutjina omurumendu",
      },
      __return: {
        main: "okukura",
        __description: "okukura onomero kutjina omisepelo",
      },
    },
    sentences: {
      __function: {
        main: "omisepelo",
        __description: "okupopera omisepelo",
      },
      __if: {
        main: "mbii",
        __description: "okupopera ombangi",
      },
      __else: {
        main: "nakora",
        __description: "okupopera ombangi imwe",
      },
      __while: {
        main: "manga",
        __description: "okupopera loop yamanga",
      },
      __for: {
        main: "otjoo",
        __description: "okupopera loop yotjoo",
      },
      __switch: {
        main: "kara",
        __description: "okupopera omuaro wokara",
      },
      __case: {
        main: "otjinawa",
        __description: "okupopera otjinawa omuaro wokara",
      },
      __default: {
        main: "otjiuru",
        __description: "okupopera otjinawa otjiuru",
      },
      __try: {
        main: "ringa",
        __description: "okupopera bloko yaringa",
      },
      __catch: {
        main: "mena",
        __description: "okupopera bloko yomisepelo",
      },
      __finally: {
        main: "nokuhepa",
        __description: "okupopera bloko yonayafana",
      },
    },
  },
  errors: {
    main: {
      tag: "OTJIREMA",
      message: "Otjirema tjotjitjini tjomutezo",
    },
    __UNKNOWN_ERROR: {
      tag: "OTJIREMA_OTJIINDJI",
      message: "Otjirema otjiindji tjazuvwa",
    },
    __TypeError: {
      tag: "OTJIREMA_OTJITJINI",
      message: "Otjitjini kaatjiri nawa omisepelo",
    },
    __ReferenceError: {
      tag: "OTJIREMA_OKUKURA",
      message: "Ojingundu kaipukanene",
    },
    __SyntaxError: {
      tag: "OTJIREMA_SINTAKISI",
      message: "Koodi kaatjiri nawa",
    },
    __RangeError: {
      tag: "OTJIREMA_OMURARO",
      message: "Onomero ikuramene omuraro",
    },
    __URIError: {
      tag: "OTJIREMA_URI",
      message: "URI kaatjiri nawa",
    },
    __EvalError: {
      tag: "OTJIREMA_EVAL",
      message: "Otjirema tja eval",
    },
  },
}).grammar();
