import { Language } from "../grammar.class.js";

export const espanol = new Language({
  language: "espanol",
  about:
    "ENIDE es un transpilador traducible que permite programar en cualquier idioma",
  include: {
    main: "Incluir",
    __description: "Se utiliza para incluir lenguajes o bibliotecas",
  },
  commands: {
    all: {
      __about: {
        main: "acerca",
        __description: "para obtener informacion sobre ENIDE",
      },
      __help: {
        main: "ayuda",
        __description:
          "para obtener la lista de todos los comandos disponibles",
      },
      __version: {
        main: "version",
        __description: "para obtener la version actual de ENIDE",
      },
      __languages: {
        main: "idiomas",
        __description: "para obtener la lista de todos los idiomas disponibles",
      },
      __documentation: {
        main: "doc",
        __description: "para obtener la documentacion de un idioma",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematica",
        __description: "para acceder a las funciones matematicas",
      },
      __pi: {
        main: "PI",
        __description: "para obtener el valor de pi",
      },
      __sqrt: {
        main: "RaizCuadrada",
        __description: "para obtener la raiz cuadrada",
      },
      __pow: {
        main: "Potencia",
        __description: "para obtener la potencia de un numero",
      },
      __round: {
        main: "Redondear",
        __description: "para redondear un numero",
      },
      __random: {
        main: "Aleatorio",
        __description: "para obtener un numero aleatorio",
      },
      __max: {
        main: "Maximo",
        __description: "para obtener el valor maximo",
      },
      __min: {
        main: "Minimo",
        __description: "para obtener el valor minimo",
      },
      __isNumber: {
        main: "EsNumero",
        __description: "para verificar si un valor es un numero",
      },
      __isInteger: {
        main: "EsEntero",
        __description: "para verificar si un valor es un entero",
      },
      __isFloat: {
        main: "EsDecimal",
        __description: "para verificar si un valor es un decimal",
      },
    },
    __string: {
      main: {
        main: "cadena",
        __description:
          "para acceder a las funciones de manipulacion de cadenas",
      },
      __length: {
        main: "Longitud",
        __description: "para obtener la longitud de una cadena",
      },
      __toUpperCase: {
        main: "AMayusculas",
        __description: "para convertir una cadena a mayusculas",
      },
      __toLowerCase: {
        main: "AMinusculas",
        __description: "para convertir una cadena a minusculas",
      },
    },
    __date: {
      main: {
        main: "fecha",
        __description: "para acceder a las funciones de fecha y hora",
      },
      __year: {
        main: "Anio",
        __description: "para obtener el anio",
      },
      __month: {
        main: "Mes",
        __description: "para obtener el mes",
      },
      __dayMonth: {
        main: "DiaMes",
        __description: "para obtener el dia del mes",
      },
      __dayWeek: {
        main: "DiaSemana",
        __description: "para obtener el dia de la semana",
      },
      __hour: {
        main: "Hora",
        __description: "para obtener la hora",
      },
      __minute: {
        main: "Minuto",
        __description: "para obtener el minuto",
      },
      __second: {
        main: "Segundo",
        __description: "para obtener el segundo",
      },
    },
  },
  types: {
    __object: {
      main: "objeto",
      __description: "para declarar un objeto estatico",
    },
    __number: {
      main: "numero",
      __description: "para declarar una variable de tipo numero",
    },
    __string: {
      main: "cadena",
      __description: "para declarar una variable de tipo cadena",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Verdadero",
        __false: "Falso",
      },
      __description: "para declarar una variable de tipo booleano",
    },
  },
  methods: {
    method: {
      __print: {
        main: "escribir",
        __description: "para escribir un valor en la pantalla",
      },
      __scan: {
        main: "leer",
        __description: "para leer un valor de la entrada",
      },
      __return: {
        main: "retornar",
        __description: "para retornar un valor de una funcion",
      },
    },
    sentences: {
      __function: {
        main: "funcion",
        __description: "para declarar una funcion",
      },
      __if: {
        main: "si",
        __description: "para declarar una condicion",
      },
      __else: {
        main: "sino",
        __description: "para declarar una condicion alternativa",
      },
      __while: {
        main: "mientras",
        __description: "para declarar un bucle mientras",
      },
      __for: {
        main: "para",
        __description: "para declarar un bucle para",
      },
      __switch: {
        main: "seleccion",
        __description: "para declarar una estructura de seleccion",
      },
      __case: {
        main: "caso",
        __description: "para declarar un caso en la estructura de seleccion",
      },
      __default: {
        main: "predeterminado",
        __description:
          "para declarar el caso predeterminado en la estructura de seleccion",
      },
      __try: {
        main: "intentar",
        __description: "para declarar un bloque intentar",
      },
      __catch: {
        main: "capturar",
        __description: "para declarar un bloque de manejo de errores",
      },
      __finally: {
        main: "finalmente",
        __description: "para declarar un bloque que se ejecuta siempre",
      },
    },
  },
  errors: {
    main: { tag: "ERROR", message: "Error generico del sistema" },
    __UNKNOWN_ERROR: {
      tag: "ERROR_DESCONOCIDO",
      message: "Error completamente desconocido",
    },
    __TypeError: {
      tag: "ERROR_TIPO",
      message: "Tipo invalido en la operacion",
    },
    __ReferenceError: {
      tag: "ERROR_REFERENCIA",
      message: "La variable no existe en el scope",
    },
    __SyntaxError: { tag: "ERROR_SINTAXIS", message: "Codigo invalido" },
    __RangeError: {
      tag: "ERROR_RANGO",
      message: "Valor fuera del rango permitido",
    },
    __URIError: { tag: "ERROR_URI", message: "URI mal formada o invalida" },
    __EvalError: { tag: "ERROR_EVAL", message: "Error relacionado con eval" },
  },
}).grammar();
