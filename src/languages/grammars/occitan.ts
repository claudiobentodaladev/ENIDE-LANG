import { Language } from "../grammar.class.js";

export const occitan = new Language({
  language: "occitan",
  about:
    "ENIDE es un transpilador traducible que permet de programar en quina que siá lenga",
  include: {
    main: "Inclure",
    __description: "S'utiliza per inclure de lengatges o de bibliotècas",
  },
  commands: {
    all: {
      __about: {
        main: "sus",
        __description: "per obténer d'informacions sus ENIDE",
      },
      __help: {
        main: "ajuda",
        __description: "per obténer la lista de totas las comandas disponiblas",
      },
      __version: {
        main: "version",
        __description: "per obténer la version actuala d'ENIDE",
      },
      __languages: {
        main: "lengas",
        __description: "per obténer la lista de totas las lengas disponiblas",
      },
      __documentation: {
        main: "doc",
        __description: "per obténer la documentacion d'una lenga",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematicas",
        __description: "per accedir a las foncions matematicas",
      },
      __pi: {
        main: "PI",
        __description: "per obténer la valor de pi",
      },
      __sqrt: {
        main: "RacinaQuadrada",
        __description: "per obténer la racina quadrada",
      },
      __pow: {
        main: "Potença",
        __description: "per obténer la potença d'un nombre",
      },
      __round: {
        main: "Arredondir",
        __description: "per arredondir un nombre",
      },
      __random: {
        main: "Aleatòri",
        __description: "per obténer un nombre aleatòri",
      },
      __max: {
        main: "Maximum",
        __description: "per obténer la valor maxima",
      },
      __min: {
        main: "Minimum",
        __description: "per obténer la valor minima",
      },
      __isNumber: {
        main: "EsNombre",
        __description: "per verificar se una valor es un nombre",
      },
      __isInteger: {
        main: "EsEnter",
        __description: "per verificar se una valor es un nombre entièr",
      },
      __isFloat: {
        main: "EsDecimal",
        __description: "per verificar se una valor es un nombre decimal",
      },
    },
    __string: {
      main: {
        main: "cadena",
        __description: "per accedir a las foncions de manipulacion de cadenas",
      },
      __length: {
        main: "Longor",
        __description: "per obténer la longor d'una cadena",
      },
      __toUpperCase: {
        main: "AMajusculas",
        __description: "per convertir una cadena en majusculas",
      },
      __toLowerCase: {
        main: "AMinusculas",
        __description: "per convertir una cadena en minusculas",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "per accedir a las foncions de data e d'ora",
      },
      __year: {
        main: "An",
        __description: "per obténer l'an",
      },
      __month: {
        main: "Mes",
        __description: "per obténer lo mes",
      },
      __dayMonth: {
        main: "JornMes",
        __description: "per obténer lo jorn del mes",
      },
      __dayWeek: {
        main: "JornSetmana",
        __description: "per obténer lo jorn de la setmana",
      },
      __hour: {
        main: "Ora",
        __description: "per obténer l'ora",
      },
      __minute: {
        main: "Minuta",
        __description: "per obténer la minuta",
      },
      __second: {
        main: "Segonda",
        __description: "per obténer la segonda",
      },
    },
  },
  types: {
    __object: {
      main: "objecte",
      __description: "per declarar un objecte estatic",
    },
    __number: {
      main: "nombre",
      __description: "per declarar una variabla de tipe nombre",
    },
    __string: {
      main: "cadena",
      __description: "per declarar una variabla de tipe cadena",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Vertat", __false: "Fals" },
      __description: "per declarar una variabla de tipe boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "imprimir",
        __description: "per imprimir una valor sus l'ecran",
      },
      __scan: {
        main: "legir",
        __description: "per legir una valor de l'entrada",
      },
      __return: {
        main: "retornar",
        __description: "per retornar una valor d'una foncion",
      },
    },
    sentences: {
      __function: {
        main: "foncion",
        __description: "per declarar una foncion",
      },
      __if: {
        main: "se",
        __description: "per declarar una condicion",
      },
      __else: {
        main: "sinon",
        __description: "per declarar una condicion alternativa",
      },
      __while: {
        main: "mentre",
        __description: "per declarar un bocle mentre",
      },
      __for: {
        main: "per",
        __description: "per declarar un bocle per",
      },
      __switch: {
        main: "seleccion",
        __description: "per declarar una estructura de seleccion",
      },
      __case: {
        main: "cas",
        __description: "per declarar un cas dins l'estructura de seleccion",
      },
      __default: {
        main: "defaut",
        __description:
          "per declarar lo cas per defaut dins l'estructura de seleccion",
      },
      __try: {
        main: "ensajar",
        __description: "per declarar un blòc ensajar",
      },
      __catch: {
        main: "capturar",
        __description: "per declarar un blòc de gestion dels errors",
      },
      __finally: {
        main: "finalament",
        __description: "per declarar un blòc que s'executa totjorn",
      },
    },
  },
  errors: {
    main: { tag: "ERROR", message: "Error generic del sistèma" },
    __UNKNOWN_ERROR: {
      tag: "ERROR_DESCONEGUT",
      message: "Error completament desconegut",
    },
    __TypeError: {
      tag: "ERROR_TIPE",
      message: "Tipe invalid dins l'operacion",
    },
    __ReferenceError: {
      tag: "ERROR_REFERENCIA",
      message: "La variabla existís pas dins l'ambit",
    },
    __SyntaxError: {
      tag: "ERROR_SINTAXI",
      message: "Còdi invalid",
    },
    __RangeError: {
      tag: "ERROR_INTERVAL",
      message: "Valor fòra de l'interval permés",
    },
    __URIError: {
      tag: "ERROR_URI",
      message: "URI malformat o invalid",
    },
    __EvalError: {
      tag: "ERROR_EVAL",
      message: "Error ligat a eval",
    },
  },
}).grammar();
