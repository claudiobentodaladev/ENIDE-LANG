import { Language } from "../grammar.class.js";

export const galego = new Language({
  language: "galego",
  about:
    "ENIDE e un transpilador traducible que permite programar en calquera lingua",
  include: {
    main: "Incluir",
    __description: "Úsase para incluír linguaxes ou bibliotecas",
  },
  commands: {
    all: {
      __about: {
        main: "sobre",
        __description: "para obter informacion sobre ENIDE",
      },
      __help: {
        main: "axuda",
        __description: "para obter a lista de todos os comandos dispoñibles",
      },
      __version: {
        main: "version",
        __description: "para obter a version actual de ENIDE",
      },
      __languages: {
        main: "linguas",
        __description: "para obter a lista de todas as linguas dispoñibles",
      },
      __documentation: {
        main: "doc",
        __description: "para obter a documentacion dunha lingua",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematicas",
        __description: "para acceder as funcions matematicas",
      },
      __pi: {
        main: "PI",
        __description: "para obter o valor de pi",
      },
      __sqrt: {
        main: "RaizCadrada",
        __description: "para obter a raiz cadrada",
      },
      __pow: {
        main: "Potencia",
        __description: "para obter a potencia dun numero",
      },
      __round: {
        main: "Redondear",
        __description: "para redondear un numero",
      },
      __random: {
        main: "Aleatorio",
        __description: "para obter un numero aleatorio",
      },
      __max: {
        main: "Maximo",
        __description: "para obter o valor maximo",
      },
      __min: {
        main: "Minimo",
        __description: "para obter o valor minimo",
      },
      __isNumber: {
        main: "EsNumero",
        __description: "para verificar se un valor e un numero",
      },
      __isInteger: {
        main: "EsEnteiro",
        __description: "para verificar se un valor e un enteiro",
      },
      __isFloat: {
        main: "EsDecimal",
        __description: "para verificar se un valor e un decimal",
      },
    },
    __string: {
      main: {
        main: "cadea",
        __description: "para acceder as funcions de manipulacion de cadeas",
      },
      __length: {
        main: "Lonxitude",
        __description: "para obter a lonxitude dunha cadea",
      },
      __toUpperCase: {
        main: "AMaiusculas",
        __description: "para converter unha cadea a maiusculas",
      },
      __toLowerCase: {
        main: "AMinusculas",
        __description: "para converter unha cadea a minusculas",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "para acceder as funcions de data e hora",
      },
      __year: {
        main: "Ano",
        __description: "para obter o ano",
      },
      __month: {
        main: "Mes",
        __description: "para obter o mes",
      },
      __dayMonth: {
        main: "DiaMes",
        __description: "para obter o dia do mes",
      },
      __dayWeek: {
        main: "DiaSemana",
        __description: "para obter o dia da semana",
      },
      __hour: {
        main: "Hora",
        __description: "para obter a hora",
      },
      __minute: {
        main: "Minuto",
        __description: "para obter o minuto",
      },
      __second: {
        main: "Segundo",
        __description: "para obter o segundo",
      },
    },
  },
  types: {
    __object: {
      main: "obxecto",
      __description: "para declarar un obxecto estatico",
    },
    __number: {
      main: "numero",
      __description: "para declarar unha variable de tipo numero",
    },
    __string: {
      main: "cadea",
      __description: "para declarar unha variable de tipo cadea",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Verdadeiro",
        __false: "Falso",
      },
      __description: "para declarar unha variable de tipo booleano",
    },
  },
  methods: {
    method: {
      __print: {
        main: "imprimir",
        __description: "para imprimir un valor na pantalla",
      },
      __scan: {
        main: "ler",
        __description: "para ler un valor da entrada",
      },
      __return: {
        main: "retornar",
        __description: "para retornar un valor dunha funcion",
      },
    },
    sentences: {
      __function: {
        main: "funcion",
        __description: "para declarar unha funcion",
      },
      __if: {
        main: "se",
        __description: "para declarar unha condicion",
      },
      __else: {
        main: "senon",
        __description: "para declarar unha condicion alternativa",
      },
      __while: {
        main: "mentres",
        __description: "para declarar un bucle mentres",
      },
      __for: {
        main: "para",
        __description: "para declarar un bucle para",
      },
      __switch: {
        main: "seleccion",
        __description: "para declarar unha estrutura de seleccion",
      },
      __case: {
        main: "caso",
        __description: "para declarar un caso na estrutura de seleccion",
      },
      __default: {
        main: "predefinido",
        __description:
          "para declarar o caso predefinido na estrutura de seleccion",
      },
      __try: {
        main: "intentar",
        __description: "para declarar un bloque intentar",
      },
      __catch: {
        main: "capturar",
        __description: "para declarar un bloque de xestion de erros",
      },
      __finally: {
        main: "finalmente",
        __description: "para declarar un bloque que se executa sempre",
      },
    },
  },
  errors: {
    main: { tag: "ERRO", message: "Erro xenerico do sistema" },
    __UNKNOWN_ERROR: {
      tag: "ERRO_DESCONECIDO",
      message: "Erro completamente desconecido",
    },
    __TypeError: { tag: "ERRO_TIPO", message: "Tipo invalido na operacion" },
    __ReferenceError: {
      tag: "ERRO_REFERENCIA",
      message: "A variable non existe no scope",
    },
    __SyntaxError: { tag: "ERRO_SINTAXE", message: "Codigo invalido" },
    __RangeError: {
      tag: "ERRO_RANGO",
      message: "Valor fora do rango permitido",
    },
    __URIError: { tag: "ERRO_URI", message: "URI malformado ou invalido" },
    __EvalError: { tag: "ERRO_EVAL", message: "Erro relacionado con eval" },
  },
}).grammar();
