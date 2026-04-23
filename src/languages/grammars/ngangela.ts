import { Language } from "../grammar.class.js";

export const ngangela = new Language({
  language: "ngangela",
  about:
    "ENIDE i transpilador wa kuhindulukilako yoneka wa kuprograma mu ndimi yonse",
  include: {
    main: "Kwambatesa",
    __description: "Chizandesa kwambatesa ndaka ni mambululyu",
  },
  commands: {
    all: {
      __about: {
        main: "muanda",
        __description: "ku ziba makanda ya ENIDE",
      },
      __help: {
        main: "lusoso",
        __description: "ku ziba malista ya milayo yonse ya kusanga",
      },
      __version: {
        main: "nzila",
        __description: "ku ziba nzila ya kala ya ENIDE",
      },
      __languages: {
        main: "ndimi",
        __description: "ku ziba malista ya ndimi yonse ya kusanga",
      },
      __documentation: {
        main: "doc",
        __description: "ku ziba makanda ya ndimi",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "ku fika misamu ya matematika",
      },
      __pi: {
        main: "PI",
        __description: "ku ziba tandu ya pi",
      },
      __sqrt: {
        main: "MulamuWaNzole",
        __description: "ku ziba mulamu wa nzole",
      },
      __pow: {
        main: "Nguzu",
        __description: "ku ziba nguzu ya nambala",
      },
      __round: {
        main: "Zunguluka",
        __description: "ku zungulusa nambala",
      },
      __random: {
        main: "Kasoni",
        __description: "ku ziba nambala ya kasoni",
      },
      __max: {
        main: "Nene",
        __description: "ku ziba tandu ya nene",
      },
      __min: {
        main: "Fioti",
        __description: "ku ziba tandu ya fioti",
      },
      __isNumber: {
        main: "INambala",
        __description: "ku tala soku tandu i nambala",
      },
      __isInteger: {
        main: "INambalaYonse",
        __description: "ku tala soku tandu i nambala yonse",
      },
      __isFloat: {
        main: "INambalaKipande",
        __description: "ku tala soku tandu i nambala ya kipande",
      },
    },
    __string: {
      main: {
        main: "malembu",
        __description: "ku fika misamu ya kusobela malembu",
      },
      __length: {
        main: "Wupulusu",
        __description: "ku ziba wupulusu wa malembu",
      },
      __toUpperCase: {
        main: "KuNeneNene",
        __description: "ku hindula malembu ku nene nene",
      },
      __toLowerCase: {
        main: "KuFiotiFioti",
        __description: "ku hindula malembu ku fioti fioti",
      },
    },
    __date: {
      main: {
        main: "lusuku",
        __description: "ku fika misamu ya lusuku ni ngonga",
      },
      __year: {
        main: "Mwaka",
        __description: "ku ziba mwaka",
      },
      __month: {
        main: "Mweshi",
        __description: "ku ziba mweshi",
      },
      __dayMonth: {
        main: "LusukuMweshi",
        __description: "ku ziba lusuku lwa mweshi",
      },
      __dayWeek: {
        main: "LusukuSemana",
        __description: "ku ziba lusuku lwa semana",
      },
      __hour: {
        main: "Ngonga",
        __description: "ku ziba ngonga",
      },
      __minute: {
        main: "Minuto",
        __description: "ku ziba minuto",
      },
      __second: {
        main: "Segundo",
        __description: "ku ziba segundo",
      },
    },
  },
  types: {
    __object: {
      main: "ecifo",
      __description: "ku xingila ecifo ekuimama",
    },
    __number: {
      main: "nambala",
      __description: "ku bonga chivikilanga cha mwine nambala",
    },
    __string: {
      main: "malembu",
      __description: "ku bonga chivikilanga cha mwine malembu",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Ocili", __false: "Luvunu" },
      __description: "ku bonga chivikilanga cha mwine bool",
    },
  },
  methods: {
    method: {
      __print: {
        main: "lemba",
        __description: "ku lemba tandu ku ekele",
      },
      __scan: {
        main: "sosa",
        __description: "ku sosa tandu ku njila ya kukota",
      },
      __return: {
        main: "vutuka",
        __description: "ku vutula tandu ku misamu",
      },
    },
    sentences: {
      __function: {
        main: "misamu",
        __description: "ku bonga misamu",
      },
      __if: {
        main: "soku",
        __description: "ku bonga kondisaun",
      },
      __else: {
        main: "kana",
        __description: "ku bonga kondisaun ya nkaka",
      },
      __while: {
        main: "ngiedi",
        __description: "ku bonga ngiedi wa ngiedi",
      },
      __for: {
        main: "mu",
        __description: "ku bonga ngiedi wa mu",
      },
      __switch: {
        main: "songola",
        __description: "ku bonga estrutura ya kusongola",
      },
      __case: {
        main: "kima",
        __description: "ku bonga kima mu estrutura ya kusongola",
      },
      __default: {
        main: "nsuka",
        __description: "ku bonga kima kia nsuka mu estrutura ya kusongola",
      },
      __try: {
        main: "suka",
        __description: "ku bonga bloku ya suka",
      },
      __catch: {
        main: "kanga",
        __description: "ku bonga bloku ya kulukila minsangu",
      },
      __finally: {
        main: "nkutu",
        __description: "ku bonga bloku ya kusalama ntangu yonse",
      },
    },
  },
  errors: {
    main: {
      tag: "MINSANGU",
      message: "Minsangu ya sistema",
    },
    __UNKNOWN_ERROR: {
      tag: "MINSANGU_ISIBUE",
      message: "Minsangu isibue ya kuziba",
    },
    __TypeError: {
      tag: "MINSANGU_TIPO",
      message: "Muxima wabela mu misamu",
    },
    __ReferenceError: {
      tag: "MINSANGU_REFERENCIA",
      message: "Chivikilanga chijila mu scope",
    },
    __SyntaxError: {
      tag: "MINSANGU_SINTAXE",
      message: "Codigo wabela",
    },
    __RangeError: {
      tag: "MINSANGU_RANGO",
      message: "Tandu ifuila rango ya kuluvula",
    },
    __URIError: {
      tag: "MINSANGU_URI",
      message: "URI wabela to invalid",
    },
    __EvalError: {
      tag: "MINSANGU_EVAL",
      message: "Minsangu ya eval",
    },
  },
}).grammar();
