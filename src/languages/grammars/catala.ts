import { Language } from "../grammar.class.js";

export const catala = new Language({
  language: "catala",
  about:
    "ENIDE es un transpilador traduible que permet programar en qualsevol llengua",
  include: {
    main: "Incloure",
    __description: "S'utilitza per incloure llenguatge o biblioteques",
  },
  commands: {
    all: {
      __about: {
        main: "sobre",
        __description: "per obtenir informacio sobre ENIDE",
      },
      __help: {
        main: "ajuda",
        __description: "per obtenir la llista de totes les ordres disponibles",
      },
      __version: {
        main: "versio",
        __description: "per obtenir la versio actual de ENIDE",
      },
      __languages: {
        main: "llengues",
        __description:
          "per obtenir la llista de totes les llengues disponibles",
      },
      __documentation: {
        main: "doc",
        __description: "per obtenir la documentacio d'una llengua",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematiques",
        __description: "per accedir a les funcions matematiques",
      },
      __pi: {
        main: "PI",
        __description: "per obtenir el valor de pi",
      },
      __sqrt: {
        main: "ArrelQuadrada",
        __description: "per obtenir l'arrel quadrada",
      },
      __pow: {
        main: "Potencia",
        __description: "per obtenir la potencia d'un nombre",
      },
      __round: {
        main: "Arrodoneix",
        __description: "per arrodonir un nombre",
      },
      __random: {
        main: "Aleatori",
        __description: "per obtenir un nombre aleatori",
      },
      __max: {
        main: "Maxim",
        __description: "per obtenir el valor maxim",
      },
      __min: {
        main: "Minim",
        __description: "per obtenir el valor minim",
      },
      __isNumber: {
        main: "EsNombre",
        __description: "per verificar si un valor es un nombre",
      },
      __isInteger: {
        main: "EsEnter",
        __description: "per verificar si un valor es un enter",
      },
      __isFloat: {
        main: "EsDecimal",
        __description: "per verificar si un valor es un decimal",
      },
    },
    __string: {
      main: {
        main: "cadena",
        __description: "per accedir a les funcions de manipulacio de cadenes",
      },
      __length: {
        main: "Longitud",
        __description: "per obtenir la longitud d'una cadena",
      },
      __toUpperCase: {
        main: "AMajuscules",
        __description: "per convertir una cadena a majuscules",
      },
      __toLowerCase: {
        main: "AMinuscules",
        __description: "per convertir una cadena a minuscules",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "per accedir a les funcions de data i hora",
      },
      __year: {
        main: "Any",
        __description: "per obtenir l'any",
      },
      __month: {
        main: "Mes",
        __description: "per obtenir el mes",
      },
      __dayMonth: {
        main: "DiaMes",
        __description: "per obtenir el dia del mes",
      },
      __dayWeek: {
        main: "DiaSemana",
        __description: "per obtenir el dia de la setmana",
      },
      __hour: {
        main: "Hora",
        __description: "per obtenir l'hora",
      },
      __minute: {
        main: "Minut",
        __description: "per obtenir el minut",
      },
      __second: {
        main: "Segon",
        __description: "per obtenir el segon",
      },
    },
  },
  types: {
    __object: {
      main: "objecte",
      __description: "per declarar un objecte static",
    },
    __number: {
      main: "nombre",
      __description: "per declarar una variable de tipus nombre",
    },
    __string: {
      main: "cadena",
      __description: "per declarar una variable de tipus cadena",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Verdader",
        __false: "Fals",
      },
      __description: "per declarar una variable de tipus boolea",
    },
  },
  methods: {
    method: {
      __print: {
        main: "imprimeix",
        __description: "per imprimir un valor a la pantalla",
      },
      __scan: {
        main: "llegeix",
        __description: "per llegir un valor de l'entrada",
      },
      __return: {
        main: "retorna",
        __description: "per retornar un valor d'una funcio",
      },
    },
    sentences: {
      __function: {
        main: "funcio",
        __description: "per declarar una funcio",
      },
      __if: {
        main: "si",
        __description: "per declarar una condicio",
      },
      __else: {
        main: "sino",
        __description: "per declarar una condicio alternativa",
      },
      __while: {
        main: "mentre",
        __description: "per declarar un bucle mentre",
      },
      __for: {
        main: "per",
        __description: "per declarar un bucle per",
      },
      __switch: {
        main: "seleccio",
        __description: "per declarar una estructura de seleccio",
      },
      __case: {
        main: "cas",
        __description: "per declarar un cas en l'estructura de seleccio",
      },
      __default: {
        main: "defecte",
        __description:
          "per declarar el cas per defecte en l'estructura de seleccio",
      },
      __try: {
        main: "intenta",
        __description: "per declarar un bloc intenta",
      },
      __catch: {
        main: "captura",
        __description: "per declarar un bloc de gestio d'errors",
      },
      __finally: {
        main: "finalment",
        __description: "per declarar un bloc que s'executa sempre",
      },
    },
  },
  errors: {
    main: { tag: "ERROR", message: "Error generic del sistema" },
    __UNKNOWN_ERROR: {
      tag: "ERROR_DESCONEGUT",
      message: "Error completament desconegut",
    },
    __TypeError: { tag: "ERROR_TIPUS", message: "Tipus invalid en l'operacio" },
    __ReferenceError: {
      tag: "ERROR_REFERENCIA",
      message: "La variable no existeix en l'ambit",
    },
    __SyntaxError: { tag: "ERROR_SINTAXI", message: "Codi invalid" },
    __RangeError: { tag: "ERROR_RANG", message: "Valor fora del rang permes" },
    __URIError: { tag: "ERROR_URI", message: "URI malformat o invalid" },
    __EvalError: { tag: "ERROR_EVAL", message: "Error relacionat amb eval" },
  },
}).grammar();
