import { Language } from "../grammar.class.js";

export const tiv = new Language({
  language: "tiv",
  about:
    "ENIDE i transpiler sha wua ngu a ange yev program sha ityough ityough",

  include: {
    main: "Kohol",
    __description: "Ka i gber i kohol zwa shin ukpandegh mbu mnger",
  },

  commands: {
    all: {
      __about: {
        main: "YangeKpaa",
        __description: "yange kumen kpaa ENIDE",
      },
      __help: {
        main: "HangeYev",
        __description: "yange sha kumen ityo ityo sha gba",
      },
      __version: {
        main: "YangeVersion",
        __description: "yange ENIDE version sha wua",
      },
      __languages: {
        main: "ItyoughZwa",
        __description: "yange sha kumen ityough sha gba",
      },
      __documentation: {
        main: "AtaYev",
        __description: "yange ityough ata",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Akohol",
        __description: "ngu akohol yev",
      },
      __pi: {
        main: "PI",
        __description: "yange pi iyange",
      },
      __sqrt: {
        main: "SquareTor",
        __description: "yange square tor",
      },
      __pow: {
        main: "GbaaNambur",
        __description: "yange nambur gbaa",
      },
      __round: {
        main: "AngeNambur",
        __description: "ange nambur",
      },
      __random: {
        main: "MbaNambur",
        __description: "yange mba nambur",
      },
      __max: {
        main: "AmbeIyang",
        __description: "yange iyange ambe",
      },
      __min: {
        main: "ItiIyang",
        __description: "yange iyange iti",
      },
      __isNumber: {
        main: "NamburNe",
        __description: "tee yav iyange i nambur",
      },
      __isInteger: {
        main: "NamburKpaa",
        __description: "tee yav iyange i nambur kpaa",
      },
      __isFloat: {
        main: "DesimalNambur",
        __description: "tee yav iyange i desimal",
      },
    },

    __string: {
      main: {
        main: "Ikyum",
        __description: "ngu ikyum yev",
      },
      __length: {
        main: "NgorIkyum",
        __description: "yange ikyum ngor",
      },
      __toUpperCase: {
        main: "KaAbam",
        __description: "tsa ikyum sha abam",
      },
      __toLowerCase: {
        main: "KaIti",
        __description: "tsa ikyum sha iti",
      },
    },

    __date: {
      main: {
        main: "NguTime",
        __description: "ngu ngu kpa hun yev",
      },
      __year: {
        main: "Ihom",
        __description: "yange ihom",
      },
      __month: {
        main: "Ikyaa",
        __description: "yange ikyaa",
      },
      __dayMonth: {
        main: "NguIkyaa",
        __description: "yange ngu ikyaa",
      },
      __dayWeek: {
        main: "NguSham",
        __description: "yange ngu week",
      },
      __hour: {
        main: "HaaTime",
        __description: "yange haa",
      },
      __minute: {
        main: "MinitTime",
        __description: "yange minit",
      },
      __second: {
        main: "SekondTime",
        __description: "yange sekond",
      },
    },
  },

  types: {
    __object: {
      main: "KenTar",
      __description: "a kahan ken sha tar",
    },
    __number: {
      main: "Nambur",
      __description: "kumen jijigh sha nambur",
    },
    __string: {
      main: "Ikyum",
      __description: "kumen jijigh sha ikyum",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Mimi", __false: "Yie" },
      __description: "kumen jijigh sha boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "ZwaIyang",
        __description: "zwa iyange sha ekran",
      },
      __scan: {
        main: "GerWuave",
        __description: "ger iyange sha sha wuave",
      },
      __return: {
        main: "YevKera",
        __description: "yev iyange sha yev",
      },
    },

    sentences: {
      __function: {
        main: "YevShira",
        __description: "kumen yev",
      },
      __if: {
        main: "KeSha",
        __description: "kumen sha",
      },
      __else: {
        main: "NguWua",
        __description: "kumen sha wua",
      },
      __while: {
        main: "ShaLoop",
        __description: "kumen loop sha",
      },
      __for: {
        main: "KpaLoop",
        __description: "kumen loop kpa",
      },
      __switch: {
        main: "KwavTyo",
        __description: "kumen kwav structure",
      },
      __case: {
        main: "TyoKwav",
        __description: "kumen tyo sha kwav",
      },
      __default: {
        main: "KpaaDefault",
        __description: "kumen tyo kpaa",
      },
      __try: {
        main: "TseMbi",
        __description: "kumen tse bloku",
      },
      __catch: {
        main: "GbaIyave",
        __description: "kumen gba iyange bloku",
      },
      __finally: {
        main: "TanenCii",
        __description: "kumen bloku sha wua tanen",
      },
    },
  },

  errors: {
    main: {
      tag: "IYAVE",
      message: "Iyave sha systeem",
    },
    __UNKNOWN_ERROR: {
      tag: "IYAVE_MBA",
      message: "Iyave mba yange",
    },
    __TypeError: {
      tag: "IYAVE_YOUGH",
      message: "Yough sha yev zwa",
    },
    __ReferenceError: {
      tag: "IYAVE_KUMEN",
      message: "Jijigh wua ngu kumen",
    },
    __SyntaxError: {
      tag: "IYAVE_SINTAKS",
      message: "Koodnu zwa ke",
    },
    __RangeError: {
      tag: "IYAVE_NGOR",
      message: "Iyange sha ngor a zwa",
    },
    __URIError: {
      tag: "IYAVE_URI",
      message: "URI zwa kpaa ke",
    },
    __EvalError: {
      tag: "IYAVE_EVAL",
      message: "Iyave sha eval",
    },
  },
}).grammar();
