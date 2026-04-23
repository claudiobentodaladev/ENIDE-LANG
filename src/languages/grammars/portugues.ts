import { Language } from "../grammar.class.js";

export const portugues = new Language({
  language: "portugues",
  about:
    "ENIDE e um transpilador traduzivel que permite programar em qualquer idioma",
  include: {
    main: "Incluir",
    __description: "Usado para incluir idioma ou bibliotecas",
  },
  commands: {
    all: {
      __about: {
        main: "sobre",
        __description: "para obter as informações sobre o ENIDE",
      },
      __help: {
        main: "ajuda",
        __description: "para obter a lista de todos os comandos disponíveis",
      },
      __version: {
        main: "versao",
        __description: "para obter a versão atual do ENIDE",
      },
      __languages: {
        main: "linguas",
        __description: "para obter a lista de todos os idiomas disponíveis",
      },
      __documentation: {
        main: "manual",
        __description: "para obter a documentação de um idioma",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematica",
        __description: "para acessar as funções matemáticas",
      },
      __pi: {
        main: "PI",
        __description: "para obter o valor de pi",
      },
      __sqrt: {
        main: "Raiz",
        __description: "para obter a raiz quadrada",
      },
      __pow: {
        main: "Potencia",
        __description: "para obter a potência de um número",
      },
      __round: {
        main: "Arredondar",
        __description: "para arredondar um número",
      },
      __random: {
        main: "Aleatorio",
        __description: "para obter um número aleatório",
      },
      __max: {
        main: "Maximo",
        __description: "para obter o valor máximo",
      },
      __min: {
        main: "Minimo",
        __description: "para obter o valor mínimo",
      },
      __isNumber: {
        main: "ENumero",
        __description: "para verificar se um valor é um número",
      },
      __isInteger: {
        main: "EInteiro",
        __description: "para verificar se um valor é um inteiro",
      },
      __isFloat: {
        main: "EDecimal",
        __description: "para verificar se um valor é um decimal",
      },
    },
    __string: {
      main: {
        main: "texto",
        __description: "para acessar as funções de manipulação de texto",
      },
      __length: {
        main: "Tamanho",
        __description: "para obter o tamanho de uma string",
      },
      __toUpperCase: {
        main: "Maiusculo",
        __description: "para converter uma string para maiúsculo",
      },
      __toLowerCase: {
        main: "Minusculo",
        __description: "para converter uma string para minúsculo",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "para acessar as funções de manipulação de data e hora",
      },
      __year: {
        main: "Ano",
        __description: "para obter o ano",
      },
      __month: {
        main: "Mes",
        __description: "para obter o mês",
      },
      __dayMonth: {
        main: "DiaMes",
        __description: "para obter o dia do mês",
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
      main: "objecto",
      __description: "para declarar um objeto estático",
    },
    __number: {
      main: "numero",
      __description: "para declarar uma variável do tipo número",
    },
    __string: {
      main: "texto",
      __description: "para declarar uma variável do tipo texto",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Verdadeiro", __false: "Falso" },
      __description: "para declarar uma variável do tipo booleano",
    },
  },
  methods: {
    method: {
      __print: {
        main: "escreva",
        __description: "para imprimir um valor na tela",
      },
      __scan: {
        main: "leia",
        __description: "para ler um valor da entrada",
      },
      __return: {
        main: "retorna",
        __description: "para retornar um valor da função",
      },
    },
    sentences: {
      __function: {
        main: "funcao",
        __description: "para declarar uma função",
      },
      __if: {
        main: "se",
        __description: "para declarar uma condição",
      },
      __else: {
        main: "senao",
        __description: "para declarar uma condição alternativa",
      },
      __while: {
        main: "enquanto",
        __description: "para declarar um loop enquanto",
      },
      __for: {
        main: "para",
        __description: "para declarar um loop para",
      },
      __switch: {
        main: "escolha",
        __description: "para declarar uma estrutura de seleção",
      },
      __case: {
        main: "caso",
        __description: "para declarar um caso na estrutura de seleção",
      },
      __default: {
        main: "contrario",
        __description: "para declarar o caso padrão na estrutura de seleção",
      },
      __try: {
        main: "tentar",
        __description: "para declarar um bloco de tentativa",
      },
      __catch: {
        main: "erro",
        __description: "para declarar um bloco de tratamento de erro",
      },
      __finally: {
        main: "final",
        __description:
          "para declarar um bloco que é executado independentemente",
      },
    },
  },
  errors: {
    main: {
      tag: "ERRO",
      message: "Erro generico do sistema.",
    },
    __UNKNOWN_ERROR: {
      tag: "ERRO_DESCONHECIDO",
      message: "Erro completamente desconhecido",
    },
    __TypeError: {
      tag: "ERRO_DE_TIPO",
      message: "Tipo invalido em operacao",
    },
    __ReferenceError: {
      tag: "ERRO_DE_REFERENCIA",
      message: "Variavel nao existe no escopo",
    },
    __SyntaxError: {
      tag: "ERRO_DE_SINTAXE",
      message: "Codigo invalido",
    },
    __RangeError: {
      tag: "ERRO_DE_LIMITE",
      message: "Valor fora dos limites permitidos",
    },
    __URIError: {
      tag: "ERRO_DE_URI",
      message: "URI mal formatada ou invalida",
    },
    __EvalError: {
      tag: "ERRO_DO_EVAL",
      message: "Erro relacionado ao eval",
    },
  },
}).grammar();
