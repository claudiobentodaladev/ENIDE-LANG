import { Language } from "../grammar.class.js";

export const teke = new Language({
  language: "teke",
  about: "ENIDE i transpiler ngo sili program na lolo nge biani",

  include: {
    main: "Kotisa",
    __description: "Isalilu mu kotisa ndimi mpe babiblioteke",
  },

  commands: {
    all: {
      __about: {
        main: "NaProgramu",
        __description: "baka kumen na ENIDE",
      },
      __help: {
        main: "Fula",
        __description: "baka liste koda biani",
      },
      __version: {
        main: "Version",
        __description: "baka ENIDE version tene",
      },
      __languages: {
        main: "Lolo",
        __description: "baka lolo liste biani",
      },
      __documentation: {
        main: "Mvula",
        __description: "baka lolo mvula",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Kalkilo",
        __description: "duti na kalkilo sara",
      },
      __pi: {
        main: "PI",
        __description: "baka pi supu",
      },
      __sqrt: {
        main: "SquareFini",
        __description: "baka square fini",
      },
      __pow: {
        main: "Ngolo",
        __description: "baka namba ngolo",
      },
      __round: {
        main: "Veke",
        __description: "veke namba",
      },
      __random: {
        main: "Lendo",
        __description: "baka lendo namba",
      },
      __max: {
        main: "Nene",
        __description: "baka supu nene",
      },
      __min: {
        main: "Futi",
        __description: "baka supu futi",
      },
      __isNumber: {
        main: "NambaNa",
        __description: "tene namba supu na",
      },
      __isInteger: {
        main: "NambaToto",
        __description: "tene namba toto supu na",
      },
      __isFloat: {
        main: "Desimal",
        __description: "tene desimal supu na",
      },
    },

    __string: {
      main: {
        main: "Nkolo",
        __description: "duti na nkolo sara",
      },
      __length: {
        main: "Mbola",
        __description: "baka nkolo mbola",
      },
      __toUpperCase: {
        main: "KaNene",
        __description: "nkolo nene letra",
      },
      __toLowerCase: {
        main: "KaFuti",
        __description: "nkolo futi letra",
      },
    },

    __date: {
      main: {
        main: "Mfulu",
        __description: "duti na mfulu ape sara",
      },
      __year: {
        main: "Mvula",
        __description: "baka mvula",
      },
      __month: {
        main: "Ngondo",
        __description: "baka ngondo",
      },
      __dayMonth: {
        main: "MfuluNgondo",
        __description: "baka mfulu ngondo",
      },
      __dayWeek: {
        main: "MfuluWeek",
        __description: "baka mfulu week",
      },
      __hour: {
        main: "Ngonga",
        __description: "baka ngonga",
      },
      __minute: {
        main: "Miniti",
        __description: "baka miniti",
      },
      __second: {
        main: "Sekonde",
        __description: "baka sekonde",
      },
    },
  },

  types: {
    __object: {
      main: "Nto",
      __description: "ko vova nto ya kuzibika",
    },
    __number: {
      main: "Namba",
      __description: "tene jijik namba lolo",
    },
    __string: {
      main: "Nkolo",
      __description: "tene jijik nkolo lolo",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Kidye", __false: "Luvunu" },
      __description: "tene jijik boolean lolo",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Vo",
        __description: "vo supu ekran",
      },
      __scan: {
        main: "Sese",
        __description: "sese supu muntu",
      },
      __return: {
        main: "Eke",
        __description: "eke supu sara",
      },
    },

    sentences: {
      __function: {
        main: "Sara",
        __description: "tene sara",
      },
      __if: {
        main: "Na", // Mantido (era o original)
        __description: "tene sariya",
      },
      __else: {
        main: "Nga",
        __description: "tene sariya wua",
      },
      __while: {
        main: "Tene",
        __description: "tene loop tene",
      },
      __for: {
        main: "Nge",
        __description: "tene loop nge",
      },
      __switch: {
        main: "Supu",
        __description: "tene supu structure",
      },
      __case: {
        main: "Lo",
        __description: "tene lo supu",
      },
      __default: {
        main: "Ndeke",
        __description: "tene lo ndeke",
      },
      __try: {
        main: "Mbi",
        __description: "tene mbi bloku",
      },
      __catch: {
        main: "Ndo",
        __description: "tene ndo gafe bloku",
      },
      __finally: {
        main: "Peko",
        __description: "tene bloku peko sara",
      },
    },
  },

  errors: {
    main: {
      tag: "MPASI",
      message: "Mpasi karda systeem",
    },
    __UNKNOWN_ERROR: {
      tag: "MPASI_LENDO",
      message: "Mpasi lendo yenge",
    },
    __TypeError: {
      tag: "MPASI_LOLO",
      message: "Lolo ziga sara",
    },
    __ReferenceError: {
      tag: "MPASI_TENE",
      message: "Jijik duna kuna",
    },
    __SyntaxError: {
      tag: "MPASI_SINTAKS",
      message: "Koodu ziga",
    },
    __RangeError: {
      tag: "MPASI_MBOLA",
      message: "Supu mbola zola",
    },
    __URIError: {
      tag: "MPASI_URI",
      message: "URI ziga ye",
    },
    __EvalError: {
      tag: "MPASI_EVAL",
      message: "Mpasi eval",
    },
  },
}).grammar();
