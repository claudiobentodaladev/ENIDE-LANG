import { Language } from "../grammar.class.js";

export const kriolu = new Language({
  language: "kriolu",
  about:
    "ENIDE e un transpiler ki ta permiti fazi programason na kualker lingua",

  include: {
    main: "Inklui",
    __description: "Pa inklui lingua o biblioteka",
  },

  commands: {
    all: {
      __about: {
        main: "sobre",
        __description: "pa odja informason sobre ENIDE",
      },
      __help: {
        main: "ajuda",
        __description: "pa odja lista di tudu kumandus disponivel",
      },
      __version: {
        main: "verson",
        __description: "pa odja verson atual di ENIDE",
      },
      __languages: {
        main: "lingua",
        __description: "pa odja lista di tudu lingua disponivel",
      },
      __documentation: {
        main: "dukumentu",
        __description: "pa odja dukumentason di un lingua",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "pa entra na funsons di matematika",
      },
      __pi: { main: "PI", __description: "pa odja valor di pi" },
      __sqrt: {
        main: "RaizKuadradu",
        __description: "pa kalkula raiz kuadradu",
      },
      __pow: {
        main: "Putensia",
        __description: "pa kalkula putensia di un numeru",
      },
      __round: {
        main: "Rodia",
        __description: "pa rodia un numeru",
      },
      __random: {
        main: "Azar",
        __description: "pa odja numeru di azar",
      },
      __max: { main: "Masimu", __description: "pa odja valor masimu" },
      __min: { main: "Minimu", __description: "pa odja valor minimu" },
      __isNumber: {
        main: "ENumeru",
        __description: "pa odja si valor e numeru",
      },
      __isInteger: {
        main: "EInteru",
        __description: "pa odja si valor e interu",
      },
      __isFloat: {
        main: "EDesimal",
        __description: "pa odja si valor e desimal",
      },
    },

    __string: {
      main: {
        main: "Testu",
        __description: "pa entra na funsons di manipulason di testu",
      },
      __length: {
        main: "Tamanhu",
        __description: "pa odja tamanhu di testu",
      },
      __toUpperCase: {
        main: "PaMaiuskulu",
        __description: "pa muda testu pa letra grandi",
      },
      __toLowerCase: {
        main: "PaMinuskulu",
        __description: "pa muda testu pa letra pikininu",
      },
    },

    __date: {
      main: {
        main: "Data",
        __description: "pa entra na funsons di data ku ora",
      },
      __year: { main: "Anu", __description: "pa odja anu" },
      __month: { main: "Mes", __description: "pa odja mes" },
      __dayMonth: {
        main: "DiaMes",
        __description: "pa odja dia di mes",
      },
      __dayWeek: {
        main: "DiaSimana",
        __description: "pa odja dia di simana",
      },
      __hour: { main: "Ora", __description: "pa odja ora" },
      __minute: { main: "Minutu", __description: "pa odja minutu" },
      __second: { main: "Sigundu", __description: "pa odja sigundu" },
    },
  },

  types: {
    __object: {
      main: "Objetu",
      __description: "pa deklara un objetu",
    },
    __number: {
      main: "Numeru",
      __description: "pa deklara variavel di tipu numeru",
    },
    __string: {
      main: "Testu",
      __description: "pa deklara variavel di tipu testu",
    },
    __boolean: {
      main: "Verdadi",
      values: { __true: "Berdadi", __false: "Falsu" },
      __description: "pa deklara variavel di tipu berdadi o falsu",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Skrebi",
        __description: "pa mostra valor na ekra",
      },
      __scan: {
        main: "Le",
        __description: "pa le valor di utilizador",
      },
      __return: {
        main: "Retorna",
        __description: "pa retorna valor di funson",
      },
    },

    sentences: {
      __function: {
        main: "Funson",
        __description: "pa deklara un funson",
      },
      __if: {
        main: "Si",
        __description: "pa deklara un kondison",
      },
      __else: {
        main: "Sino",
        __description: "pa deklara kondison alternativu",
      },
      __while: {
        main: "Enkuantu",
        __description: "pa loop enkuantu",
      },
      __for: {
        main: "Pa",
        __description: "pa loop pa",
      },
      __switch: {
        main: "Skodji",
        __description: "pa faze seleson",
      },
      __case: {
        main: "Kasu",
        __description: "pa kazu espesifiku",
      },
      __default: {
        main: "Padran",
        __description: "pa kazu padran",
      },
      __try: {
        main: "Tenta",
        __description: "pa tenta operason",
      },
      __catch: {
        main: "Kaptura",
        __description: "pa trata eru",
      },
      __finally: {
        main: "Final",
        __description: "pa blok final",
      },
    },
  },

  errors: {
    main: { tag: "ERU", message: "Eru di sistema" },

    __UNKNOWN_ERROR: {
      tag: "ERU_DISKONHESIDU",
      message: "Eru diskonhesidu",
    },

    __TypeError: {
      tag: "ERU_TIPU",
      message: "Tipu invalidu",
    },

    __ReferenceError: {
      tag: "ERU_REFERENSIA",
      message: "Variavel ka izisti",
    },

    __SyntaxError: {
      tag: "ERU_SINTAXI",
      message: "Kodigu invalidu",
    },

    __RangeError: {
      tag: "ERU_LIMITI",
      message: "Valor fora di limiti",
    },

    __URIError: {
      tag: "ERU_URI",
      message: "URI invalidu",
    },

    __EvalError: {
      tag: "ERU_EVAL",
      message: "Eru eval",
    },
  },
}).grammar();
