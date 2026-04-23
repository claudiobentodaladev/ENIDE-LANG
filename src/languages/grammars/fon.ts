import { Language } from "../grammar.class.js";

export const fon = new Language({
  language: "fon",
  about:
    "ENIDE nyɔ transpiler e nɔ sixu sɛn bo na do hlonhlon nu kodu do gbe bi me",
  include: {
    main: "Biba_do_me",
    __description: "È nɔ zán dó dó gbè aló wemaxɔmɛ lɛ dó mɛ",
  },
  commands: {
    all: {
      __about: {
        main: "do",
        __description: "mɔ kpɔndéwú dó ENIDE jí",
      },
      __help: {
        main: "dokunu",
        __description: "mɔ alɔdo nú jikpá lɛ bǐ",
      },
      __version: {
        main: "version",
        __description: "mɔ ENIDE version tɔn ɖò égbé",
      },
      __languages: {
        main: "gbe",
        __description: "mɔ gbè lɛ bǐ list tɔn",
      },
      __documentation: {
        main: "sen",
        __description: "mɔ gbè documentation tɔn",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matimatiki",
        __description: "byɔ matimatiki nùjiwanú lɛ",
      },
      __pi: {
        main: "PI",
        __description: "mɔ pi tɔn sunsun",
      },
      __sqrt: {
        main: "SquareFan",
        __description: "mɔ square fan",
      },
      __pow: {
        main: "Hlonhlon",
        __description: "mɔ nɔmba tɔn hlɔnhlɔn",
      },
      __round: {
        main: "Blo",
        __description: "bló nɔmba ɖokpo",
      },
      __random: {
        main: "Linlin",
        __description: "mɔ linlin nɔmba",
      },
      __max: {
        main: "Nyito",
        __description: "mɔ sunsun nyitɔ",
      },
      __min: {
        main: "Nanto",
        __description: "mɔ sunsun nantɔ",
      },
      __isNumber: {
        main: "NombaTon",
        __description: "kpɔ bo mɔ ɖɔ sunsun nyɔ nɔmba",
      },
      __isInteger: {
        main: "NombaKponkpon",
        __description: "kpɔ bo mɔ ɖɔ sunsun nyɔ nɔmba kpɔnkpɔn",
      },
      __isFloat: {
        main: "Desimal",
        __description: "kpɔ bo mɔ ɖɔ sunsun nyɔ desimal",
      },
    },
    __string: {
      main: {
        main: "nudidi",
        __description: "byɔ nuɖiɖi zinkponɔ nùjiwanú lɛ",
      },
      __length: {
        main: "Nojeno",
        __description: "mɔ nuɖiɖi tɔn nɔjɛnɔ",
      },
      __toUpperCase: {
        main: "YiDo",
        __description: "sɛn nuɖiɖi yí akɔ gɔn",
      },
      __toLowerCase: {
        main: "YiNan",
        __description: "sɛn nuɖiɖi yí akɔ nan",
      },
    },
    __date: {
      main: {
        main: "azan",
        __description: "byɔ azǎn kpo hwenu kpo nùjiwanú lɛ",
      },
      __year: {
        main: "Xwe",
        __description: "mɔ xwè",
      },
      __month: {
        main: "Azan",
        __description: "mɔ azan",
      },
      __dayMonth: {
        main: "AzanXwe",
        __description: "mɔ azǎn e ɖo azan mɛ",
      },
      __dayWeek: {
        main: "AzanSo",
        __description: "mɔ azǎn e ɖo so mɛ",
      },
      __hour: {
        main: "Hwenu",
        __description: "mɔ hwenu",
      },
      __minute: {
        main: "Miniti",
        __description: "mɔ miniti",
      },
      __second: {
        main: "Segon",
        __description: "mɔ segon",
      },
    },
  },
  types: {
    __object: { main: "nu", __description: "bo ana nu e dido" },
    __number: {
      main: "nomba",
      __description: "ɖekle jǐ ɖó nɔmba klɔ mɛ",
    },
    __string: {
      main: "nudidi",
      __description: "ɖekle jǐ ɖó nuɖiɖi klɔ mɛ",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Nugbo",
        __false: "Atayaba",
      },
      __description: "ɖekle jǐ ɖó boolean klɔ mɛ",
    },
  },
  methods: {
    method: {
      __print: {
        main: "xle",
        __description: "xlɛ sunsun ɖo ecran jí",
      },
      __scan: {
        main: "xlo",
        __description: "xló sunsun sín tɛnmɛxɔntɔ",
      },
      __return: {
        main: "le",
        __description: "lɛ sunsun sín nùjiwanú mɛ",
      },
    },
    sentences: {
      __function: {
        main: "nujiwanu",
        __description: "ɖekle nùjiwanú",
      },
      __if: {
        main: "do",
        __description: "ɖekle acɛ kpikpa",
      },
      __else: {
        main: "o",
        __description: "ɖekle acɛ kpikpa wɛ",
      },
      __while: {
        main: "bo",
        __description: "ɖekle loop bó",
      },
      __for: {
        main: "nu",
        __description: "ɖekle loop nú",
      },
      __switch: {
        main: "so",
        __description: "ɖekle yiɖɔ structure",
      },
      __case: {
        main: "hinhen",
        __description: "ɖekle hinhɛn ɖo yiɖɔ mɛ",
      },
      __default: {
        main: "side",
        __description: "ɖekle siɖé hinhɛn",
      },
      __try: {
        main: "mi",
        __description: "ɖekle mi bloku",
      },
      __catch: {
        main: "godo",
        __description: "ɖekle bloku e nɔ bló nǔ blɔzɛ",
      },
      __finally: {
        main: "ene",
        __description: "ɖekle bloku e nɔ wà azɔ hwɛhwɛ",
      },
    },
  },
  errors: {
    main: {
      tag: "NUWLANGO",
      message: "Nuwlango e no tiin sistemu me",
    },
    __UNKNOWN_ERROR: {
      tag: "NUWLANGO_VOVOTO",
      message: "Nuwlango e mo vovoto",
    },
    __TypeError: {
      tag: "NUWLANGO_KLO",
      message: "Klo e nyo a do azowanu me",
    },
    __ReferenceError: {
      tag: "NUWLANGO_DEKLE",
      message: "Ji e dekle me mo a",
    },
    __SyntaxError: {
      tag: "NUWLANGO_SINTAKS",
      message: "Kodu nyo a",
    },
    __RangeError: {
      tag: "NUWLANGO_DIDI",
      message: "Sunsun do didi e le ate",
    },
    __URIError: {
      tag: "NUWLANGO_URI",
      message: "URI blo we ma nyo a",
    },
    __EvalError: {
      tag: "NUWLANGO_EVAL",
      message: "Nuwlango e sogbe kpo eval kpo",
    },
  },
}).grammar();
