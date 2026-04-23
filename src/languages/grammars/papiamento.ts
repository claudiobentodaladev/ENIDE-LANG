import { Language } from "../grammar.class.js";

export const papiamento = new Language({
  language: "papiamento",
  about:
    "ENIDE ta un transpiler tradusibel ku ta permiti programacion den tur idioma",
  include: {
    main: "Inklui",
    __description: "Usa pa inklui idioma of biblioteka",
  },
  commands: {
    all: {
      __about: {
        main: "tokante",
        __description: "pa haya informacion tokante ENIDE",
      },
      __help: {
        main: "ayudo",
        __description: "pa haya lista di tur komando disponibel",
      },
      __version: {
        main: "version",
        __description: "pa haya version aktual di ENIDE",
      },
      __languages: {
        main: "idioma",
        __description: "pa haya lista di tur idioma disponibel",
      },
      __documentation: {
        main: "dokumentu",
        __description: "pa haya dokumentacion di idioma",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "pa haya akseso na funshonnan di matematika",
      },
      __pi: {
        main: "PI",
        __description: "pa haya valor di pi",
      },
      __sqrt: {
        main: "RaizKuadrado",
        __description: "pa haya raiz kuadrado",
      },
      __pow: {
        main: "Potensia",
        __description: "pa haya potensia di un numero",
      },
      __round: {
        main: "Redondea",
        __description: "pa redondea un numero",
      },
      __random: {
        main: "Aleatorio",
        __description: "pa haya un numero aleatorio",
      },
      __max: {
        main: "MasGrandi",
        __description: "pa haya valor mas grandi",
      },
      __min: {
        main: "MasChiki",
        __description: "pa haya valor mas chikito",
      },
      __isNumber: {
        main: "TaNumero",
        __description: "pa verifica si valor ta numero",
      },
      __isInteger: {
        main: "TaEntero",
        __description: "pa verifica si valor ta entero",
      },
      __isFloat: {
        main: "TaDesimal",
        __description: "pa verifica si valor ta desimal",
      },
    },
    __string: {
      main: {
        main: "kadena",
        __description: "pa haya akseso na funshonnan di manipulacion di kadena",
      },
      __length: {
        main: "Largura",
        __description: "pa haya largura di kadena",
      },
      __toUpperCase: {
        main: "ParaMayuscula",
        __description: "pa konverti kadena pa mayuscula",
      },
      __toLowerCase: {
        main: "ParaMinuscula",
        __description: "pa konverti kadena pa minuscula",
      },
    },
    __date: {
      main: {
        main: "fecha",
        __description: "pa haya akseso na funshonnan di fecha i ora",
      },
      __year: {
        main: "Anja",
        __description: "pa haya anja",
      },
      __month: {
        main: "Luna",
        __description: "pa haya luna",
      },
      __dayMonth: {
        main: "DiaDiLuna",
        __description: "pa haya dia di luna",
      },
      __dayWeek: {
        main: "DiaDiSiman",
        __description: "pa haya dia di siman",
      },
      __hour: {
        main: "Ora",
        __description: "pa haya ora",
      },
      __minute: {
        main: "Minut",
        __description: "pa haya minut",
      },
      __second: {
        main: "Sigundu",
        __description: "pa haya sigundu",
      },
    },
  },
  types: {
    __object: {
      main: "obhetu",
      __description: "pa deklarar un obhetu estatiko",
    },
    __number: {
      main: "numero",
      __description: "pa deklarar variabel di tipo numero",
    },
    __string: {
      main: "kadena",
      __description: "pa deklarar variabel di tipo kadena",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Berdad", __false: "Falsu" },
      __description: "pa deklarar variabel di tipo boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "mustra",
        __description: "pa mustra valor riba pantaya",
      },
      __scan: {
        main: "lei",
        __description: "pa lesa valor di usuario",
      },
      __return: {
        main: "bolbe",
        __description: "pa bolbe ku valor di funshon",
      },
    },
    sentences: {
      __function: {
        main: "funshon",
        __description: "pa deklarar funshon",
      },
      __if: {
        main: "si",
        __description: "pa deklarar kondishon",
      },
      __else: {
        main: "sino",
        __description: "pa deklarar kondishon alternativa",
      },
      __while: {
        main: "mientras",
        __description: "pa deklarar loop mientras",
      },
      __for: {
        main: "pa",
        __description: "pa deklarar loop pa",
      },
      __switch: {
        main: "skoge",
        __description: "pa deklarar struktura di selekshon",
      },
      __case: {
        main: "kaso",
        __description: "pa deklarar kaso den struktura di selekshon",
      },
      __default: {
        main: "predetermina",
        __description: "pa deklarar kaso predetermina",
      },
      __try: {
        main: "proba",
        __description: "pa deklarar bloke di proba",
      },
      __catch: {
        main: "kaptura",
        __description: "pa deklarar bloke di maneho di error",
      },
      __finally: {
        main: "finalmente",
        __description: "pa deklarar bloke ku ta ehekuta semper",
      },
    },
  },
  errors: {
    main: {
      tag: "ERROR",
      message: "Error heneral di sistema",
    },
    __UNKNOWN_ERROR: {
      tag: "ERROR_DESKONOSI",
      message: "Error kompletamente deskonosi",
    },
    __TypeError: {
      tag: "ERROR_TIPO",
      message: "Tipo invalido den operacion",
    },
    __ReferenceError: {
      tag: "ERROR_REFERENSIA",
      message: "Variabel no ta eksisti den eskopo",
    },
    __SyntaxError: {
      tag: "ERROR_SINTAKSIS",
      message: "Codigo invalido",
    },
    __RangeError: {
      tag: "ERROR_RANGO",
      message: "Valor afor di rango permiti",
    },
    __URIError: {
      tag: "ERROR_URI",
      message: "URI malforma of invalido",
    },
    __EvalError: {
      tag: "ERROR_EVAL",
      message: "Error relashona ku eval",
    },
  },
}).grammar();
