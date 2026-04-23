import { Language } from "../grammar.class.js";

export const bangla = new Language({
  language: "bangla",
  about:
    "ENIDE holo ekti onubad-joggo transpiler ja jekono bhashay programming korar sujog dey",
  include: {
    main: "Antarbhukta_kara",
    __description: "Bhasha ba laibreri antarbhukta karate byabahrita haya",
  },
  commands: {
    all: {
      __about: {
        main: "somporke",
        __description: "ENIDE somporke jante",
      },
      __help: {
        main: "sahajjo",
        __description: "sob upolobdho command-er talika pete",
      },
      __version: {
        main: "sanskaran",
        __description: "ENIDE-er bortoman sanskaran jante",
      },
      __languages: {
        main: "bhashasomuho",
        __description: "sob upolobdho bhashar talika pete",
      },
      __documentation: {
        main: "nothipotro",
        __description: "ekti bhashar nothipotro pete",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "gonit",
        __description: "gonit-er kaj gulo korte",
      },
      __pi: {
        main: "PI",
        __description: "pi-er man pete",
      },
      __sqrt: {
        main: "Borgomool",
        __description: "borgomool ninnoy korte",
      },
      __pow: {
        main: "Ghaat",
        __description: "sonkhar ghaat ninnoy korte",
      },
      __round: {
        main: "Round",
        __description: "sonkhake round korte",
      },
      __random: {
        main: "Elo_melo",
        __description: "ekti elo-melo sonkha pete",
      },
      __max: {
        main: "Sorboccho",
        __description: "sorboccho man pete",
      },
      __min: {
        main: "Sorbonimno",
        __description: "sorbonimno man pete",
      },
      __isNumber: {
        main: "SonkhaKi",
        __description: "man-ti sonkha ki na porikkha korte",
      },
      __isInteger: {
        main: "PurnosonkhaKi",
        __description: "man-ti purnosonkha ki na porikkha korte",
      },
      __isFloat: {
        main: "DosomikKi",
        __description: "man-ti dosomik ki na porikkha korte",
      },
    },
    __string: {
      main: {
        main: "string",
        __description: "string-er kaj gulo korte",
      },
      __length: {
        main: "Doirgho",
        __description: "string-er doirgho pete",
      },
      __toUpperCase: {
        main: "BoroHate",
        __description: "string-ke boro hater okkhore rupantor korte",
      },
      __toLowerCase: {
        main: "ChotoHate",
        __description: "string-ke choto hater okkhore rupantor korte",
      },
    },
    __date: {
      main: {
        main: "tarikh",
        __description: "tarikh o somoyer kaj gulo korte",
      },
      __year: {
        main: "Bochor",
        __description: "bochor pete",
      },
      __month: {
        main: "Maas",
        __description: "maas pete",
      },
      __dayMonth: {
        main: "Din",
        __description: "maser din pete",
      },
      __dayWeek: {
        main: "SaptahikDin",
        __description: "saptahik din pete",
      },
      __hour: {
        main: "Ghonta",
        __description: "ghonta pete",
      },
      __minute: {
        main: "Minute",
        __description: "minute pete",
      },
      __second: {
        main: "Second",
        __description: "second pete",
      },
    },
  },
  types: {
    __object: {
      main: "bastu",
      __description: "ekti sthir bastu ghoshana korte",
    },
    __number: {
      main: "sonkha",
      __description: "sonkha dhoroner variable ghoshona korte",
    },
    __string: {
      main: "shobdo",
      __description: "string dhoroner variable ghoshona korte",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Sotti",
        __false: "Mithya",
      },
      __description: "boolean dhoroner variable ghoshona korte",
    },
  },
  methods: {
    method: {
      __print: {
        main: "dekhao",
        __description: "screen-e man prokash korte",
      },
      __scan: {
        main: "input",
        __description: "input theke man nite",
      },
      __return: {
        main: "ferot",
        __description: "function theke man ferot dite",
      },
    },
    sentences: {
      __function: {
        main: "kaj",
        __description: "ekti function ghoshona korte",
      },
      __if: {
        main: "jodi",
        __description: "ekti shorto ghoshona korte",
      },
      __else: {
        main: "othoba",
        __description: "ekti bokolpo shorto ghoshona korte",
      },
      __while: {
        main: "jotokkhon",
        __description: "while loop ghoshona korte",
      },
      __for: {
        main: "jonno",
        __description: "for loop ghoshona korte",
      },
      __switch: {
        main: "switch",
        __description: "selection structure ghoshona korte",
      },
      __case: {
        main: "case",
        __description: "selection structure-e case ghoshona korte",
      },
      __default: {
        main: "vabit",
        __description: "default case ghoshona korte",
      },
      __try: {
        main: "chesta",
        __description: "try block ghoshona korte",
      },
      __catch: {
        main: "dhoro",
        __description: "error handling block ghoshona korte",
      },
      __finally: {
        main: "oboseshe",
        __description: "sob somoy cholbe emon block ghoshona korte",
      },
    },
  },
  errors: {
    main: {
      tag: "TRUTI",
      message: "Sadharon system truti",
    },
    __UNKNOWN_ERROR: {
      tag: "OJAN_TRUTI",
      message: "Sompurno ojana truti",
    },
    __TypeError: {
      tag: "TYPE_TRUTI",
      message: "Kaje oboidho type",
    },
    __ReferenceError: {
      tag: "REFERENCE_TRUTI",
      message: "Variable-ti scope-e nei",
    },
    __SyntaxError: {
      tag: "SYNTAX_TRUTI",
      message: "Oboidho code",
    },
    __RangeError: {
      tag: "RANGE_TRUTI",
      message: "Man-ti simar baire",
    },
    __URIError: {
      tag: "URI_TRUTI",
      message: "Oboidho URI",
    },
    __EvalError: {
      tag: "EVAL_TRUTI",
      message: "Eval somporkito truti",
    },
  },
}).grammar();
