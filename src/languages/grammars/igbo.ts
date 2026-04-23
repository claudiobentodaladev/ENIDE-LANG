import { Language } from "../grammar.class.js";

export const igbo = new Language({
  language: "igbo",
  about:
    "ENIDE bu ihe ntughari nke enwere ike tugharịa nke na-enye ohere mmemme n'asusu o bula",
  include: {
    main: "Tinye",
    __description: "A na-eji ya etinye asụsụ ma ọ bụ ọba akwụkwọ",
  },
  commands: {
    all: {
      __about: {
        main: "maka",
        __description: "inweta ozi maka ENIDE",
      },
      __help: {
        main: "enyemaka",
        __description: "inweta ndeputa iwu niile dị n'aka",
      },
      __version: {
        main: "nsacha",
        __description: "inweta nsacha dị ugbu a nke ENIDE",
      },
      __languages: {
        main: "asusu",
        __description: "inweta ndeputa asụsụ niile dị n'aka",
      },
      __documentation: {
        main: "akwukwo",
        __description: "inweta akwụkwọ nkuzi maka asụsụ",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "mgbako",
        __description: "banye na ọrụ mgbakọ",
      },
      __pi: {
        main: "PI",
        __description: "inweta uru nke pi",
      },
      __sqrt: {
        main: "OtaAkara",
        __description: "inweta mgbọta square",
      },
      __pow: {
        main: "Ike",
        __description: "inweta ike nke ọnụọgụ",
      },
      __round: {
        main: "Gbagbuo",
        __description: "gbagbuo ọnụọgụ",
      },
      __random: {
        main: "Onwero",
        __description: "inweta ọnụọgụ onwerọ usoro",
      },
      __max: {
        main: "Kachasi",
        __description: "inweta uru kachasị elu",
      },
      __min: {
        main: "Nta",
        __description: "inweta uru kachasị ala",
      },
      __isNumber: {
        main: "BuOnuogu",
        __description: "lelee ma uru bụ ọnụọgụ",
      },
      __isInteger: {
        main: "BuOnuoguOkike",
        __description: "lelee ma uru bụ ọnụọgụ okike",
      },
      __isFloat: {
        main: "BuDesimali",
        __description: "lelee ma uru bụ desimali",
      },
    },
    __string: {
      main: {
        main: "eriri",
        __description: "banye na ọrụ ntụgharị eriri",
      },
      __length: {
        main: "Ogologo",
        __description: "inweta ogologo eriri",
      },
      __toUpperCase: {
        main: "KawaLitaIkpe",
        __description: "tụgharị eriri ka ọ bụrụ mkpụrụedemede nnukwu",
      },
      __toLowerCase: {
        main: "KawaLitaNta",
        __description: "tụgharị eriri ka ọ bụrụ mkpụrụedemede nta",
      },
    },
    __date: {
      main: {
        main: "ubochi",
        __description: "banye na ọrụ ụbọchị na oge",
      },
      __year: {
        main: "Afo",
        __description: "inweta afọ",
      },
      __month: {
        main: "Onwa",
        __description: "inweta ọnwa",
      },
      __dayMonth: {
        main: "UbochiOnwa",
        __description: "inweta ụbọchị ọnwa",
      },
      __dayWeek: {
        main: "UbochiIzu",
        __description: "inweta ụbọchị izu",
      },
      __hour: {
        main: "Elekere",
        __description: "inweta elekere",
      },
      __minute: {
        main: "Nkeji",
        __description: "inweta nkeji",
      },
      __second: {
        main: "Sekond",
        __description: "inweta sekọnd",
      },
    },
  },
  types: {
    __object: { main: "ihe", __description: "ikwuputa ihe kwusiri ike" },
    __number: {
      main: "onuogu",
      __description: "kwupụta mgbanwe nke ụdị ọnụọgụ",
    },
    __string: {
      main: "eriri",
      __description: "kwupụta mgbanwe nke ụdị eriri",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Eziokwu", __false: "Asi" },
      __description: "kwupụta mgbanwe nke ụdị boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "dee",
        __description: "dee uru na ihuenyo",
      },
      __scan: {
        main: "guo",
        __description: "gụọ uru site n'aka onye ọrụ",
      },
      __return: {
        main: "laghachi",
        __description: "laghachi na uru site n'ọrụ",
      },
    },
    sentences: {
      __function: {
        main: "oru",
        __description: "kwupụta ọrụ",
      },
      __if: {
        main: "oburu",
        __description: "kwupụta ọnọdụ",
      },
      __else: {
        main: "ma",
        __description: "kwupụta ọnọdụ ọzọ",
      },
      __while: {
        main: "ka",
        __description: "kwupụta lupu ka",
      },
      __for: {
        main: "maka",
        __description: "kwupụta lupu maka",
      },
      __switch: {
        main: "hoo",
        __description: "kwupụta nhọrọ nhọrọ",
      },
      __case: {
        main: "onodu",
        __description: "kwupụta ọnọdụ n'ime nhọrọ",
      },
      __default: {
        main: "izugbe",
        __description: "kwupụta ọnọdụ izugbe",
      },
      __try: {
        main: "nwaa",
        __description: "kwupụta blọk nwaa",
      },
      __catch: {
        main: "nwucha",
        __description: "kwupụta blọk njikwa njehie",
      },
      __finally: {
        main: "nikpeazu",
        __description: "kwupụta blọk na-arụ ọrụ n'agbanyeghị ihe ọ bụla",
      },
    },
  },
  errors: {
    main: {
      tag: "NJEHIE",
      message: "Njehie izugbe nke sistemu",
    },
    __UNKNOWN_ERROR: {
      tag: "NJEHIE_AMAGHI",
      message: "Njehie a na-amaghị n'ụzọ ọ bụla",
    },
    __TypeError: {
      tag: "NJEHIE_UDI",
      message: "Ụdị adịghị mma n'ime ọrụ",
    },
    __ReferenceError: {
      tag: "NJEHIE_NTUAKA",
      message: "Mgbanwe adịghị na-ezuzu",
    },
    __SyntaxError: {
      tag: "NJEHIE_SINTAKSI",
      message: "Koodu adịghị mma",
    },
    __RangeError: {
      tag: "NJEHIE_IHE",
      message: "Uru nọ n'èzí oke a kwenyere",
    },
    __URIError: {
      tag: "NJEHIE_URI",
      message: "URI nwere njehie ma ọ bụ adịghị mma",
    },
    __EvalError: {
      tag: "NJEHIE_EVAL",
      message: "Njehie metụtara eval",
    },
  },
}).grammar();
