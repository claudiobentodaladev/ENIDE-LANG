import { Language } from "../grammar.class.js";

export const wolof = new Language({
  language: "wolof",
  about: "ENIDE moy un transpiler bu dem ay laaj ci kenn ci benn ci dëkk bi",

  include: {
    main: "Boole",
    __description: "Ñu koy jëfandikoo ngir boole làkk walla mbindu-téere yi",
  },

  commands: {
    all: {
      __about: {
        main: "CiEnide",
        __description: "jënd xam-xam ci ENIDE",
      },
      __help: {
        main: "Ndimbal",
        __description: "jënd liste yi nep ngay soxor",
      },
      __version: {
        main: "Version",
        __description: "jënd version bi tey bi ENIDE",
      },
      __languages: {
        main: "Lakk",
        __description: "jënd liste yi nep lakk yi",
      },
      __documentation: {
        main: "Dekk",
        __description: "jënd documentation lakk bi",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematig",
        __description: "dugg ci liggey matematig",
      },
      __pi: {
        main: "PI",
        __description: "jënd jëm pi",
      },
      __sqrt: {
        main: "TaanSquare",
        __description: "jënd taan square",
      },
      __pow: {
        main: "Doole",
        __description: "jënd doole numero",
      },
      __round: {
        main: "Weefu",
        __description: "weefu numero",
      },
      __random: {
        main: "Diidante",
        __description: "jënd numero diidante",
      },
      __max: {
        main: "Reewi",
        __description: "jënd jëm bi reewi",
      },
      __min: {
        main: "Ndaw",
        __description: "jënd jëm bi ndaw",
      },
      __isNumber: {
        main: "DafaNumero",
        __description: "xool bu jëm dafay numero",
      },
      __isInteger: {
        main: "DafaNumeroYep",
        __description: "xool bu jëm dafay numero yep",
      },
      __isFloat: {
        main: "DafaDesimal",
        __description: "xool bu jëm dafay desimal",
      },
    },

    __string: {
      main: {
        main: "Xare",
        __description: "dugg ci liggey xare",
      },
      __length: {
        main: "Gudde",
        __description: "jënd gudde xare bi",
      },
      __toUpperCase: {
        main: "KaWaxtuGorgor",
        __description: "tëral xare ci kaso gorgor",
      },
      __toLowerCase: {
        main: "KaWaxtuNdaw",
        __description: "tëral xare ci kaso ndaw",
      },
    },

    __date: {
      main: {
        main: "Bess",
        __description: "dugg ci liggey bëss ak waktu",
      },
      __year: {
        main: "At",
        __description: "jënd at",
      },
      __month: {
        main: "Weer",
        __description: "jënd weer",
      },
      __dayMonth: {
        main: "BessWeer",
        __description: "jënd bëss weer bi",
      },
      __dayWeek: {
        main: "BessAjuma",
        __description: "jënd bëss ajuma bi",
      },
      __hour: {
        main: "Waktu",
        __description: "jënd waktu",
      },
      __minute: {
        main: "Minit",
        __description: "jënd minit",
      },
      __second: {
        main: "Segon",
        __description: "jënd segon",
      },
    },
  },

  types: {
    __object: {
      main: "Bepp",
      __description: "def bepp bu dek",
    },
    __number: {
      main: "Numero",
      __description: "wax jëm yi ci yoon numero",
    },
    __string: {
      main: "Xare",
      __description: "wax jëm yi ci yoon xare",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Degg", __false: "Fen" },
      __description: "wax jëm yi ci yoon boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Bind",
        __description: "bind jëm ci ecran",
      },
      __scan: {
        main: "Jend",
        __description: "jënd jëm ci jëndkat",
      },
      __return: {
        main: "Dellu",
        __description: "dellu ak jëm ci liggey",
      },
    },

    sentences: {
      __function: {
        main: "Liggey",
        __description: "wax liggey",
      },
      __if: {
        main: "BuYegel",
        __description: "wax yëgël",
      },
      __else: {
        main: "Wante",
        __description: "wax yëgël wente",
      },
      __while: {
        main: "CaLoop",
        __description: "wax loop ca",
      },
      __for: {
        main: "NuLoop",
        __description: "wax loop nu",
      },
      __switch: {
        main: "Tanu",
        __description: "wax yëgël tanu",
      },
      __case: {
        main: "Dekk",
        __description: "wax dëkk ci yëgël tanu",
      },
      __default: {
        main: "Tuuru",
        __description: "wax dëkk tuuru",
      },
      __try: {
        main: "Dem",
        __description: "wax bloku dem",
      },
      __catch: {
        main: "Jot",
        __description: "wax bloku jot jafe-jafe",
      },
      __finally: {
        main: "CiKaw",
        __description: "wax bloku bu dafay liggey ndaxte",
      },
    },
  },

  errors: {
    main: {
      tag: "JAFE",
      message: "Jafe ci biir sisteem bi",
    },
    __UNKNOWN_ERROR: {
      tag: "JafeXamuloo",
      message: "Jafe bu xamul",
    },
    __TypeError: {
      tag: "JafeYoon",
      message: "Yoon bi baax dafa fay liggey",
    },
    __ReferenceError: {
      tag: "JafeDakkal",
      message: "Jëm amul ci ëmb bi",
    },
    __SyntaxError: {
      tag: "JafeSintaks",
      message: "Code bi baaxul",
    },
    __RangeError: {
      tag: "JafeWeesu",
      message: "Jëm bi dees ci jëm bi weesu",
    },
    __URIError: {
      tag: "JafeUri",
      message: "URI bi bañ wala baaxul",
    },
    __EvalError: {
      tag: "JafeEval",
      message: "Jafe ci eval",
    },
  },
}).grammar();
