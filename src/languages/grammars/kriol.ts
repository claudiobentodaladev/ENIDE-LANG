import { Language } from "../grammar.class.js";

export const kriol = new Language({
  language: "kriol",
  about:
    "ENIDE i un transpiler traduzivel ki permiti programason na kualker lingua",

  include: {
    main: "Inklui",
    __description: "Pa inklui lingua o biblioteka",
  },

  commands: {
    all: {
      __about: {
        main: "sobre",
        __description: "pa otxa informason sobre ENIDE",
      },
      __help: {
        main: "ajuda",
        __description: "pa otxa lista di tudu kumandu disponivel",
      },
      __version: {
        main: "versaun",
        __description: "pa otxa versaun atual di ENIDE",
      },
      __languages: {
        main: "lingua",
        __description: "pa otxa lista di tudu lingua disponivel",
      },
      __documentation: {
        main: "dokumentu",
        __description: "pa otxa dokumentason di lingua",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "pa asede funsaun di matematika",
      },
      __pi: {
        main: "PI",
        __description: "pa otxa valor di pi",
      },
      __sqrt: {
        main: "RaizKuadrada",
        __description: "pa otxa raiz kuadrada",
      },
      __pow: {
        main: "Pudensia",
        __description: "pa otxa pudensia di un numiru",
      },
      __round: {
        main: "Rodia",
        __description: "pa rodia un numiru",
      },
      __random: {
        main: "Azar",
        __description: "pa otxa numiru di azar",
      },
      __max: {
        main: "Masimu",
        __description: "pa otxa valor masimu",
      },
      __min: {
        main: "Minimu",
        __description: "pa otxa valor minimu",
      },
      __isNumber: {
        main: "ENumiru",
        __description: "pa verifica si valor i numiru",
      },
      __isInteger: {
        main: "ENumiruInteiru",
        __description: "pa verifica si valor i numiru inteiru",
      },
      __isFloat: {
        main: "EDesimal",
        __description: "pa verifica si valor i desimal",
      },
    },

    __string: {
      main: {
        main: "testu",
        __description: "pa asede funsaun di manipulason di testu",
      },
      __length: {
        main: "Tamanu",
        __description: "pa otxa tamanu di testu",
      },
      __toUpperCase: {
        main: "Maiusku",
        __description: "pa torna testu maiusku",
      },
      __toLowerCase: {
        main: "Minusku",
        __description: "pa torna testu minusku",
      },
    },

    __date: {
      main: {
        main: "data",
        __description: "pa asede funsaun di data i ora",
      },
      __year: {
        main: "Anu",
        __description: "pa otxa anu",
      },
      __month: {
        main: "Mes",
        __description: "pa otxa mes",
      },
      __dayMonth: {
        main: "DiaMes",
        __description: "pa otxa dia di mes",
      },
      __dayWeek: {
        main: "DiaSimana",
        __description: "pa otxa dia di simana",
      },
      __hour: {
        main: "Ora",
        __description: "pa otxa ora",
      },
      __minute: {
        main: "Minutu",
        __description: "pa otxa minutu",
      },
      __second: {
        main: "Sigundu",
        __description: "pa otxa sigundu",
      },
    },
  },

  types: {
    __object: {
      main: "objetu",
      __description: "pa deklara objetu",
    },

    __number: {
      main: "numiru",
      __description: "pa deklara variavel di tipu numiru",
    },

    __string: {
      main: "testu",
      __description: "pa deklara variavel di tipu testu",
    },

    __boolean: {
      main: "verdadi",
      values: { __true: "Bardadi", __false: "Falsu" },
      __description: "pa deklara variavel di tipu verdadi o falsu",
    },
  },

  methods: {
    method: {
      __print: {
        main: "mustra",
        __description: "pa mustra valor na ekran",
      },
      __scan: {
        main: "le",
        __description: "pa le valor di utilizador",
      },
      __return: {
        main: "volta",
        __description: "pa volta valor di funsaun",
      },
    },

    sentences: {
      __function: {
        main: "funsaun",
        __description: "pa deklara funsaun",
      },
      __if: {
        main: "si",
        __description: "pa deklara kondison",
      },
      __else: {
        main: "sinon",
        __description: "pa deklara kondison alternativa",
      },
      __while: {
        main: "duranti",
        __description: "pa loop duranti kondison",
      },
      __for: {
        main: "pa",
        __description: "pa loop pa",
      },
      __switch: {
        main: "skolhe",
        __description: "pa faze selesaun",
      },
      __case: {
        main: "kazu",
        __description: "pa kazu espesifiku",
      },
      __default: {
        main: "padraun",
        __description: "pa kazu padraun",
      },
      __try: {
        main: "tenta",
        __description: "pa tenta operason",
      },
      __catch: {
        main: "kaptura",
        __description: "pa trata erru",
      },
      __finally: {
        main: "final",
        __description: "pa blok final",
      },
    },
  },

  errors: {
    main: {
      tag: "ERRU",
      message: "Erru jeneral di sistema",
    },

    __UNKNOWN_ERROR: {
      tag: "ERRU_DESKUNIIDU",
      message: "Erru deskuniidu",
    },

    __TypeError: {
      tag: "ERRU_TIPU",
      message: "Tipu invalidu",
    },

    __ReferenceError: {
      tag: "ERRU_REFERENSIA",
      message: "Variavel ka egzisti",
    },

    __SyntaxError: {
      tag: "ERRU_SINTAKSI",
      message: "Kodiku invalidu",
    },

    __RangeError: {
      tag: "ERRU_LIMITI",
      message: "Valor fora di limiti",
    },

    __URIError: {
      tag: "ERRU_URI",
      message: "URI invalidu",
    },

    __EvalError: {
      tag: "ERRU_EVAL",
      message: "Erru eval",
    },
  },
}).grammar();
