import { Language } from "../grammar.class.js";

export const nihongo = new Language({
  language: "nihongo",
  about:
    "ENIDE wa dono gengo demo puroguramingu ga dekiru honyaku kano na toransupaira desu",
  include: {
    main: "Fukumeru",
    __description: "Gengo ya raiburari o fukumeru tame ni shiyō saremasu",
  },
  commands: {
    all: {
      __about: {
        main: "shosai",
        __description: "ENIDE ni tsuite no joho o shutoku suru",
      },
      __help: {
        main: "herupu",
        __description: "riyo kano na subete no komando risuto o shutoku suru",
      },
      __version: {
        main: "bajon",
        __description: "ENIDE no genzai no bajon o shutoku suru",
      },
      __languages: {
        main: "gengo",
        __description: "riyo kano na subete no gengo risuto o shutoku suru",
      },
      __documentation: {
        main: "dokyumento",
        __description: "gengo no dokyumento o shutoku suru",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "sugaku",
        __description: "sugaku kansu ni akusesu suru",
      },
      __pi: {
        main: "PI",
        __description: "pai no atai o shutoku suru",
      },
      __sqrt: {
        main: "Heihoukon",
        __description: "heihoukon o shutoku suru",
      },
      __pow: {
        main: "Ruijo",
        __description: "suji no ruijo o shutoku suru",
      },
      __round: {
        main: "Shishagonyu",
        __description: "suji o shishagonyu suru",
      },
      __random: {
        main: "Randomu",
        __description: "ransu o shutoku suru",
      },
      __max: {
        main: "Saidai",
        __description: "saidai atai o shutoku suru",
      },
      __min: {
        main: "Saisho",
        __description: "saisho atai o shutoku suru",
      },
      __isNumber: {
        main: "SujiKa",
        __description: "atai ga suji ka do ka o kakunin suru",
      },
      __isInteger: {
        main: "SeisuKa",
        __description: "atai ga seisu ka do ka o kakunin suru",
      },
      __isFloat: {
        main: "Shosuka",
        __description: "atai ga shosu ka do ka o kakunin suru",
      },
    },
    __string: {
      main: {
        main: "mojiretsu",
        __description: "mojiretsu sosa kansu ni akusesu suru",
      },
      __length: {
        main: "Nagasa",
        __description: "mojiretsu no nagasa o shutoku suru",
      },
      __toUpperCase: {
        main: "Omoji",
        __description: "mojiretsu o omoji ni henkan suru",
      },
      __toLowerCase: {
        main: "Komoji",
        __description: "mojiretsu o komoji ni henkan suru",
      },
    },
    __date: {
      main: {
        main: "hizuke",
        __description: "hizuke to jikan no sosa kansu ni akusesu suru",
      },
      __year: {
        main: "Nen",
        __description: "nen o shutoku suru",
      },
      __month: {
        main: "Tsuki",
        __description: "tsuki o shutoku suru",
      },
      __dayMonth: {
        main: "Hi",
        __description: "hi o shutoku suru",
      },
      __dayWeek: {
        main: "Yobi",
        __description: "yobi o shutoku suru",
      },
      __hour: {
        main: "Ji",
        __description: "ji o shutoku suru",
      },
      __minute: {
        main: "Fun",
        __description: "fun o shutoku suru",
      },
      __second: {
        main: "Byo",
        __description: "byo o shutoku suru",
      },
    },
  },
  types: {
    __object: {
      main: "obujekuto",
      __description: "seitekina obujekuto o sengen suru",
    },
    __number: {
      main: "suji",
      __description: "suji-gata no hensu o sengen suru",
    },
    __string: {
      main: "mojiretsu",
      __description: "mojiretsu-gata no hensu o sengen suru",
    },
    __boolean: {
      main: "shinrigata",
      values: { __true: "Shin", __false: "Gi" },
      __description: "shinrigata no hensu o sengen suru",
    },
  },
  methods: {
    method: {
      __print: {
        main: "hyoji",
        __description: "atai o gamen ni hyoji suru",
      },
      __scan: {
        main: "nyuryoku",
        __description: "nyuryoku kara atai o yomitoru",
      },
      __return: {
        main: "kaesu",
        __description: "kansu kara atai o kaesu",
      },
    },
    sentences: {
      __function: {
        main: "kansu",
        __description: "kansu o sengen suru",
      },
      __if: {
        main: "moshi",
        __description: "jokenbun o sengen suru",
      },
      __else: {
        main: "soreigai",
        __description: "daean no jokenbun o sengen suru",
      },
      __while: {
        main: "aida",
        __description: "while rupu o sengen suru",
      },
      __for: {
        main: "kurikaeshi",
        __description: "for rupu o sengen suru",
      },
      __switch: {
        main: "sentaku",
        __description: "sentaku kozo o sengen suru",
      },
      __case: {
        main: "baai",
        __description: "sentaku kozo no kesu o sengen suru",
      },
      __default: {
        main: "kihan",
        __description: "sentaku kozo no kibon kesu o sengen suru",
      },
      __try: {
        main: "tamesu",
        __description: "try burokku o sengen suru",
      },
      __catch: {
        main: "hosoku",
        __description: "era handoringu burokku o sengen suru",
      },
      __finally: {
        main: "saigoni",
        __description: "kanarazu jikko sareru burokku o sengen suru",
      },
    },
  },
  errors: {
    main: {
      tag: "ERA",
      message: "Shisutemu era",
    },
    __UNKNOWN_ERROR: {
      tag: "FUMEI_NA_ERA",
      message: "Kanzen ni fumei na era",
    },
    __TypeError: {
      tag: "TAIPU_ERA",
      message: "Ensan no taipu ga fukiteki desu",
    },
    __ReferenceError: {
      tag: "SANSHO_ERA",
      message: "Hensu ga sukopu ni sonzai shimasen",
    },
    __SyntaxError: {
      tag: "KUMON_ERA",
      message: "Kodo ga fukiteki desu",
    },
    __RangeError: {
      tag: "HANI_ERA",
      message: "Atai ga kyoka hani-gai desu",
    },
    __URIError: {
      tag: "URI_ERA",
      message: "URI ga fusei desu",
    },
    __EvalError: {
      tag: "EVAL_ERA",
      message: "eval ni kanren suru era",
    },
  },
}).grammar();
