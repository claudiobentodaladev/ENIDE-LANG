import { Language } from "../grammar.class.js";

export const gonja = new Language({
  language: "gonja",
  about: "ENIDE nye transpiler be din di program yelma be yelma pam",
  include: {
    main: "Kpalan",
    __description: "Ba de kpalani mparɛ bee biblioteka nɛ",
  },
  commands: {
    all: {
      __about: {
        main: "kara",
        __description: "ni daa kumen ENIDE kara",
      },
      __help: {
        main: "song",
        __description: "ni daa liste karda bɛ",
      },
      __version: {
        main: "version",
        __description: "ni daa ENIDE version",
      },
      __languages: {
        main: "gbele",
        __description: "ni daa gbele liste bɛ",
      },
      __documentation: {
        main: "sebili",
        __description: "ni daa gbele sɛbili",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "kalkulo",
        __description: "ni wuni kalkulo karda",
      },
      __pi: {
        main: "PI",
        __description: "ni daa pi ŋun",
      },
      __sqrt: {
        main: "SquareRoot",
        __description: "ni daa square too",
      },
      __pow: {
        main: "Gbahi",
        __description: "ni daa namba gbahi",
      },
      __round: {
        main: "Wogsi",
        __description: "wogsi namba",
      },
      __random: {
        main: "Wuhim",
        __description: "ni daa wuhim namba",
      },
      __max: {
        main: "Zori",
        __description: "ni daa ŋun zori",
      },
      __min: {
        main: "Pili",
        __description: "ni daa ŋun pili",
      },
      __isNumber: {
        main: "NambaNye",
        __description: "ni nyɛli namba ŋun nye",
      },
      __isInteger: {
        main: "NambaYeli",
        __description: "ni nyɛli namba yeli ŋun nye",
      },
      __isFloat: {
        main: "Desimal",
        __description: "ni nyɛli desimal ŋun nye",
      },
    },
    __string: {
      main: {
        main: "kpam",
        __description: "ni wuni kpam karda",
      },
      __length: {
        main: "Ndo",
        __description: "ni daa kpam ndo",
      },
      __toUpperCase: {
        main: "KaZori",
        __description: "kpam zori kasi",
      },
      __toLowerCase: {
        main: "KaPili",
        __description: "kpam pili kasi",
      },
    },
    __date: {
      main: {
        main: "daa",
        __description: "ni wuni daa ŋun karda",
      },
      __year: {
        main: "Nyimdi",
        __description: "ni daa nyimdi",
      },
      __month: {
        main: "Goli",
        __description: "ni daa gɔli",
      },
      __dayMonth: {
        main: "DaaGoli",
        __description: "ni daa wula gɔli",
      },
      __dayWeek: {
        main: "DaaNyimdi",
        __description: "ni daa wula week",
      },
      __hour: {
        main: "Yaa",
        __description: "ni daa yaa",
      },
      __minute: {
        main: "Miniti",
        __description: "ni daa miniti",
      },
      __second: {
        main: "Sekond",
        __description: "ni daa sekond",
      },
    },
  },
  types: {
    __object: { main: "nani", __description: "la palo nani papala" },
    __number: {
      main: "namba",
      __description: "yege jijik namba gbele",
    },
    __string: {
      main: "kpam",
      __description: "yege jijik kpam gbele",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Kanyin",
        __false: "Kasu",
      },
      __description: "yege jijik boolean gbele",
    },
  },
  methods: {
    method: {
      __print: {
        main: "beng",
        __description: "bɛŋ ŋun ekran",
      },
      __scan: {
        main: "kuli",
        __description: "kuli ŋun kuna",
      },
      __return: {
        main: "nyahim",
        __description: "nyahim ŋun karda",
      },
    },
    sentences: {
      __function: {
        main: "karda",
        __description: "yege karda",
      },
      __if: {
        main: "ni",
        __description: "yege sariya",
      },
      __else: {
        main: "ka",
        __description: "yege sariya wua",
      },
      __while: {
        main: "be",
        __description: "yege loop be",
      },
      __for: {
        main: "nge",
        __description: "yege loop nge",
      },
      __switch: {
        main: "behim",
        __description: "yege bɛhim structure",
      },
      __case: {
        main: "pam",
        __description: "yege pam bɛhim",
      },
      __default: {
        main: "nyaga",
        __description: "yege pam nyaga",
      },
      __try: {
        main: "nye",
        __description: "yege nyɛ bloku",
      },
      __catch: {
        main: "gba",
        __description: "yege gba gafe bloku",
      },
      __finally: {
        main: "tuma",
        __description: "yege bloku tuma karda",
      },
    },
  },
  errors: {
    main: {
      tag: "GAFE",
      message: "Gafe karda system",
    },
    __UNKNOWN_ERROR: {
      tag: "GAFE_WUHIM",
      message: "Gafe yenge wuhim",
    },
    __TypeError: {
      tag: "GAFE_GBELE",
      message: "Gbele ziga karda",
    },
    __ReferenceError: {
      tag: "GAFE_YEGE",
      message: "Jijik duna kuna",
    },
    __SyntaxError: {
      tag: "GAFE_SINTAKS",
      message: "Koodu ziga",
    },
    __RangeError: {
      tag: "GAFE_NDO",
      message: "Namba ndo zola",
    },
    __URIError: {
      tag: "GAFE_URI",
      message: "URI ziga ye",
    },
    __EvalError: {
      tag: "GAFE_EVAL",
      message: "Gafe eval",
    },
  },
}).grammar();
