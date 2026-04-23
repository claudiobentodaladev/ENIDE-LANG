import { Language } from "../grammar.class.js";

export const mirandes = new Language({
  language: "mirandes",
  about:
    "ENIDE ye un transpilador traduzibol que permite programar an qualquiera lhengua",
  include: {
    main: "Ancluir",
    __description: "Outelizado para ancluir lhéngua ó bibliotecas",
  },
  commands: {
    all: {
      __about: {
        main: "Subre",
        __description: "para obter informacon subre ENIDE",
      },
      __help: {
        main: "Ajuda",
        __description: "para obter la lista de todos los comandos disponibles",
      },
      __version: {
        main: "Version",
        __description: "para obter la version atual de ENIDE",
      },
      __languages: {
        main: "Lhenguas",
        __description: "para obter la lista de todas las lhenguas disponibles",
      },
      __documentation: {
        main: "Documentacon",
        __description: "para obter la documentacon dua lhengua",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "Matematica",
        __description: "para aceder as funçones matematicas",
      },
      __pi: {
        main: "Pi",
        __description: "para obter l valor de pi",
      },
      __sqrt: {
        main: "RaizQuadrada",
        __description: "para obter la raiz quadrada",
      },
      __pow: {
        main: "Potencia",
        __description: "para obter la potencia dun numbro",
      },
      __round: {
        main: "Arredondar",
        __description: "para arredondar un numbro",
      },
      __random: {
        main: "Aleatorio",
        __description: "para obter un numbro aleatorio",
      },
      __max: {
        main: "Maximo",
        __description: "para obter l valor maximo",
      },
      __min: {
        main: "Minimo",
        __description: "para obter l valor minimo",
      },
      __isNumber: {
        main: "YeNumbro",
        __description: "para verificar se un valor ye un numbro",
      },
      __isInteger: {
        main: "YeEnteiro",
        __description: "para verificar se un valor ye un enteiro",
      },
      __isFloat: {
        main: "YeDecimal",
        __description: "para verificar se un valor ye un decimal",
      },
    },
    __string: {
      main: {
        main: "Cadena",
        __description: "para aceder as funçones de manipulaçon de cadenas",
      },
      __length: {
        main: "Largura",
        __description: "para obter la largura dua cadena",
      },
      __toUpperCase: {
        main: "AMaiusculas",
        __description: "para cunbertir ua cadena an maiusculas",
      },
      __toLowerCase: {
        main: "AMinusculas",
        __description: "para cunbertir ua cadena an minusculas",
      },
    },
    __date: {
      main: {
        main: "Data",
        __description: "para aceder as funçones de data i hora",
      },
      __year: {
        main: "Anho",
        __description: "para obter l anho",
      },
      __month: {
        main: "Mes",
        __description: "para obter l mes",
      },
      __dayMonth: {
        main: "DiaMes",
        __description: "para obter l die de l mes",
      },
      __dayWeek: {
        main: "DiaSemana",
        __description: "para obter l die de la semana",
      },
      __hour: {
        main: "Hora",
        __description: "para obter la hora",
      },
      __minute: {
        main: "Minuto",
        __description: "para obter l minuto",
      },
      __second: {
        main: "Segundo",
        __description: "para obter l segundo",
      },
    },
  },
  types: {
    __object: {
      main: "Objeto",
      __description: "pa declarar un objeto estatico",
    },
    __number: {
      main: "Numbro",
      __description: "para declarar ua bariable de tipo numbro",
    },
    __string: {
      main: "Cadena",
      __description: "para declarar ua bariable de tipo cadena",
    },
    __boolean: {
      main: "BerdadeiroFalso",
      values: { __true: "Berdadeiro", __false: "Falso" },
      __description: "para declarar ua bariable de tipo booleano",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Amostrar",
        __description: "para amostrar un valor na pantaila",
      },
      __scan: {
        main: "Lher",
        __description: "para lher un valor de l'anput",
      },
      __return: {
        main: "Retornar",
        __description: "para retornar un valor dua funçon",
      },
    },
    sentences: {
      __function: {
        main: "Funcon",
        __description: "para declarar ua funçon",
      },
      __if: {
        main: "Se",
        __description: "para declarar ua cundiçon",
      },
      __else: {
        main: "Senon",
        __description: "para declarar ua cundiçon alternativa",
      },
      __while: {
        main: "Mientres",
        __description: "para declarar un bucle mientres",
      },
      __for: {
        main: "Para",
        __description: "para declarar un bucle para",
      },
      __switch: {
        main: "Selecon",
        __description: "para declarar ua strutura de seleçon",
      },
      __case: {
        main: "Caso",
        __description: "para declarar un caso na strutura de seleçon",
      },
      __default: {
        main: "Predefinido",
        __description:
          "para declarar l caso predefinido na strutura de seleçon",
      },
      __try: {
        main: "Tentar",
        __description: "para declarar un bloco tentar",
      },
      __catch: {
        main: "Capturar",
        __description: "para declarar un bloco de geston de erros",
      },
      __finally: {
        main: "Finalmente",
        __description: "para declarar un bloco que s'eisecuta siempre",
      },
    },
  },
  errors: {
    main: { tag: "ERRO", message: "Erro xenerico de l sistema" },
    __UNKNOWN_ERROR: {
      tag: "ERRO_DESCONHECIDO",
      message: "Erro completamente desconhecido",
    },
    __TypeError: { tag: "ERRO_TIPO", message: "Tipo inbalido na operacon" },
    __ReferenceError: {
      tag: "ERRO_REFERENCIA",
      message: "La bariable nun existe ne l scope",
    },
    __SyntaxError: { tag: "ERRO_SINTAXE", message: "Codigo inbalido" },
    __RangeError: {
      tag: "ERRO_RANGO",
      message: "Balor fuora de l rango permitido",
    },
    __URIError: { tag: "ERRO_URI", message: "URI malformado ou inbalido" },
    __EvalError: { tag: "ERRO_EVAL", message: "Erro relacjonado cun eval" },
  },
}).grammar();
