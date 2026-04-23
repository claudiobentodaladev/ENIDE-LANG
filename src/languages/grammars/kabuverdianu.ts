import { Language } from "../grammar.class.js";

export const kabuverdianu = new Language({
  language: "kabuverdianu",
  about:
    "ENIDE e un transpiler traduzivel ki permiti programason na kalker lingua",
  include: {
    main: "Inklui",
    __description: "Uzadu pa inklui língua ô bibliotéka",
  },
  commands: {
    all: {
      __about: {
        main: "sobri",
        __description: "pa otxe informason sobri ENIDE",
      },
      __help: {
        main: "ajuda",
        __description: "pa otxe lista di tudu kumandu disponibi",
      },
      __version: {
        main: "versaun",
        __description: "pa otxe versaun atual di ENIDE",
      },
      __languages: {
        main: "linguas",
        __description: "pa otxe lista di tudu lingua disponibi",
      },
      __documentation: {
        main: "dokumentu",
        __description: "pa otxe dokumentason di lingua",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "pa acesa funsaun di matematika",
      },
      __pi: {
        main: "PI",
        __description: "pa otxe valor di pi",
      },
      __sqrt: {
        main: "RaizKuadrada",
        __description: "pa otxe raiz kuadrada",
      },
      __pow: {
        main: "Putensia",
        __description: "pa otxe putensia di un numeru",
      },
      __round: {
        main: "Arredonda",
        __description: "pa arredonda un numeru",
      },
      __random: {
        main: "Aleatori",
        __description: "pa otxe numeru aleatori",
      },
      __max: {
        main: "Masimu",
        __description: "pa otxe valor masimu",
      },
      __min: {
        main: "Minimu",
        __description: "pa otxe valor minimu",
      },
      __isNumber: {
        main: "ENumeru",
        __description: "pa verifica si valor e numeru",
      },
      __isInteger: {
        main: "ENumeruInteru",
        __description: "pa verifica si valor e numeru interu",
      },
      __isFloat: {
        main: "EDesimal",
        __description: "pa verifica si valor e desimal",
      },
    },
    __string: {
      main: {
        main: "tekstu",
        __description: "pa acesa funsaun di manipulason di kadeia",
      },
      __length: {
        main: "Tamanu",
        __description: "pa otxe tamanu di kadeia",
      },
      __toUpperCase: {
        main: "ParaMaiuscula",
        __description: "pa konverte kadeia pa maiuscula",
      },
      __toLowerCase: {
        main: "ParaMinuscula",
        __description: "pa konverte kadeia pa minuscula",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "pa acesa funsaun di data e ora",
      },
      __year: {
        main: "Anu",
        __description: "pa otxe anu",
      },
      __month: {
        main: "Mes",
        __description: "pa otxe mes",
      },
      __dayMonth: {
        main: "DiaMes",
        __description: "pa otxe dia di mes",
      },
      __dayWeek: {
        main: "DiaSemana",
        __description: "pa otxe dia di semana",
      },
      __hour: {
        main: "Ora",
        __description: "pa otxe ora",
      },
      __minute: {
        main: "Minutu",
        __description: "pa otxe minutu",
      },
      __second: {
        main: "Segundu",
        __description: "pa otxe segundu",
      },
    },
  },
  types: {
    __object: {
      main: "objetu",
      __description: "pa deklarar un objetu statiku",
    },
    __number: {
      main: "numeru",
      __description: "pa deklarar variavel di tipu numeru",
    },
    __string: {
      main: "kadeia",
      __description: "pa deklarar variavel di tipu kadeia",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Berdadi", __false: "Falsu" },
      __description: "pa deklarar variavel di tipu boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "mostra",
        __description: "pa mostra valor na ekran",
      },
      __scan: {
        main: "le",
        __description: "pa le valor di utilizador",
      },
      __return: {
        main: "volta",
        __description: "pa volta ku valor di funsaun",
      },
    },
    sentences: {
      __function: {
        main: "funsaun",
        __description: "pa deklarar funsaun",
      },
      __if: {
        main: "si",
        __description: "pa deklarar kondisaun",
      },
      __else: {
        main: "sinon",
        __description: "pa deklarar kondisaun alternativa",
      },
      __while: {
        main: "enkuantu",
        __description: "pa deklarar loop enkuantu",
      },
      __for: {
        main: "pa",
        __description: "pa deklarar loop pa",
      },
      __switch: {
        main: "Xuje",
        __description: "pa deklarar estrutura di seleson",
      },
      __case: {
        main: "kazu",
        __description: "pa deklarar kazu na estrutura di seleson",
      },
      __default: {
        main: "padraun",
        __description: "pa deklarar kazu padraun",
      },
      __try: {
        main: "tenta",
        __description: "pa deklarar bloku di tentativa",
      },
      __catch: {
        main: "kaptura",
        __description: "pa deklarar bloku di tratamentu di erru",
      },
      __finally: {
        main: "finalmentu",
        __description: "pa deklarar bloku ki ezekuta sempri",
      },
    },
  },
  errors: {
    main: {
      tag: "ERRU",
      message: "Erru jeneral di sistema",
    },
    __UNKNOWN_ERROR: {
      tag: "ERRU_DESKONEDU",
      message: "Erru kompletamenti deskonedu",
    },
    __TypeError: {
      tag: "ERRU_TIPU",
      message: "Tipu invalidu na operason",
    },
    __ReferenceError: {
      tag: "ERRU_REFERENSIA",
      message: "Variavel ka existi na eskupu",
    },
    __SyntaxError: {
      tag: "ERRU_SINTAKSI",
      message: "Kodiku invalidu",
    },
    __RangeError: {
      tag: "ERRU_INTERVALU",
      message: "Valor fora di intervalu permitidu",
    },
    __URIError: {
      tag: "ERRU_URI",
      message: "URI malformadu o invalidu",
    },
    __EvalError: {
      tag: "ERRU_EVAL",
      message: "Erru relasionadu ku eval",
    },
  },
}).grammar();
