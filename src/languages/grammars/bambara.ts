import { Language } from "../grammar.class.js";

export const bambara = new Language({
  language: "bambara",
  about:
    "ENIDE ye transpiler wolomanba ye min bɛ se ka dan ka baara kɛ kan o kan na",
  include: {
    main: "be_nono",
    __description: "A be ke k'a sɔrɔ kabilaw walla gafemarayɔrɔw be nono",
  },
  commands: {
    all: {
      __about: {
        main: "kunnafoniko",
        __description: "ka kunnafoni sɔrɔ ENIDE kɔrɔ",
      },
      __help: {
        main: "dɛmɛ",
        __description: "ka taasili sɔrɔ jate bɛɛ la minnu bɛ sɔrɔ",
      },
      __version: {
        main: "version",
        __description: "ka ENIDE ta version sɔrɔ",
      },
      __languages: {
        main: "kan",
        __description: "ka kan bɛɛ taasili sɔrɔ minnu bɛ sɔrɔ",
      },
      __documentation: {
        main: "sɛbɛn",
        __description: "ka kan sɛbɛn sɔrɔ",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "lisɛli",
        __description: "ka lisɛli baara minnu na don",
      },
      __pi: {
        main: "PI",
        __description: "ka pi dama sɔrɔ",
      },
      __sqrt: {
        main: "KungoSquare",
        __description: "ka square kɔrɔ sɔrɔ",
      },
      __pow: {
        main: "Kunatigi",
        __description: "ka jate segin sɔrɔ",
      },
      __round: {
        main: "Wili",
        __description: "ka jate wili",
      },
      __random: {
        main: "Lanzani",
        __description: "ka lanzani jate sɔrɔ",
      },
      __max: {
        main: "Belebeleba",
        __description: "ka dama belebele sɔrɔ",
      },
      __min: {
        main: "Fitinin",
        __description: "ka dama fitinin sɔrɔ",
      },
      __isNumber: {
        main: "JateYe",
        __description: "ka lajɛ ni dama ye jate ye",
      },
      __isInteger: {
        main: "JateYeKun",
        __description: "ka lajɛ ni dama ye jate kun ye",
      },
      __isFloat: {
        main: "JateYeDesimali",
        __description: "ka lajɛ ni dama ye desimali ye",
      },
    },
    __string: {
      main: {
        main: "sira",
        __description: "ka sira baara minnu na don",
      },
      __length: {
        main: "Gueleya",
        __description: "ka sira gueleya sɔrɔ",
      },
      __toUpperCase: {
        main: "KaSebenBelebele",
        __description: "ka sira kɛ tulonkelen na",
      },
      __toLowerCase: {
        main: "KaSebenFitinin",
        __description: "ka sira kɛ nɔgɔlen na",
      },
    },
    __date: {
      main: {
        main: "don",
        __description: "ka don ni waati baara minnu na don",
      },
      __year: {
        main: "San",
        __description: "ka san sɔrɔ",
      },
      __month: {
        main: "Kalo",
        __description: "ka kalo sɔrɔ",
      },
      __dayMonth: {
        main: "DonKalo",
        __description: "ka don kalo na sɔrɔ",
      },
      __dayWeek: {
        main: "DonSuma",
        __description: "ka don suma na sɔrɔ",
      },
      __hour: {
        main: "Lere",
        __description: "ka lɛrɛ sɔrɔ",
      },
      __minute: {
        main: "Miniti",
        __description: "ka miniti sɔrɔ",
      },
      __second: {
        main: "Sekondi",
        __description: "ka sekondi sɔrɔ",
      },
    },
  },
  types: {
    __object: { main: "bagan", __description: "bagan dogoto damine" },
    __number: {
      main: "jate",
      __description: "ka jate ɲɛfɔli siri jate cogo la",
    },
    __string: {
      main: "sira",
      __description: "ka jate ɲɛfɔli siri sira cogo la",
    },
    __boolean: {
      main: "bool",
      values: {
        __false: "Nkalon",
        __true: "Tignɛ",
      },
      __description: "ka jate ɲɛfɔli siri boolean cogo la",
    },
  },
  methods: {
    method: {
      __print: {
        main: "jira",
        __description: "ka dama jira ecran kan",
      },
      __scan: {
        main: "kalan",
        __description: "ka dama kalan baarakɛla fɛ",
      },
      __return: {
        main: "segin",
        __description: "ka segin dama la baara la",
      },
    },
    sentences: {
      __function: {
        main: "baara",
        __description: "ka baara ɲɛfɔ",
      },
      __if: {
        main: "ni",
        __description: "ka sariya ɲɛfɔ",
      },
      __else: {
        main: "wale",
        __description: "ka sariya wele ɲɛfɔ",
      },
      __while: {
        main: "fo",
        __description: "ka loop fɔ ɲɛfɔ",
      },
      __for: {
        main: "kama",
        __description: "ka loop kama ɲɛfɔ",
      },
      __switch: {
        main: "sugandi",
        __description: "ka sugandi lasigilaw ɲɛfɔ",
      },
      __case: {
        main: "cogo",
        __description: "ka cogo ɲɛfɔ sugandi lasigilaw na",
      },
      __default: {
        main: "sababu",
        __description: "ka sababu cogo ɲɛfɔ",
      },
      __try: {
        main: "menni",
        __description: "ka mɛnni bloki ɲɛfɔ",
      },
      __catch: {
        main: "mine",
        __description: "ka fili minɛ bloki ɲɛfɔ",
      },
      __finally: {
        main: "laban",
        __description: "ka bloki ɲɛfɔ min bɛ baara kɛ tuma bɛɛ",
      },
    },
  },
  errors: {
    main: {
      tag: "FILI",
      message: "Fili kɛnɛ ye sisitɛmu ta",
    },
    __UNKNOWN_ERROR: {
      tag: "FILI_DONTALEN",
      message: "Fili dontalen",
    },
    __TypeError: {
      tag: "FILI_COGO",
      message: "Cogo t'a sigilen baara la",
    },
    __ReferenceError: {
      tag: "FILI_NYEFO",
      message: "Jate ɲɛfɔli t'a sigilen fɛ",
    },
    __SyntaxError: {
      tag: "FILI_SINTAKISI",
      message: "Code t'a sigilen",
    },
    __RangeError: {
      tag: "FILI_NTENE",
      message: "Dama bɛ ntɛnɛ saralen kɔfɛ",
    },
    __URIError: {
      tag: "FILI_URI",
      message: "URI ɲɛmankan wala a t'a sigilen",
    },
    __EvalError: {
      tag: "FILI_EVAL",
      message: "Fili min bɛ eval ma",
    },
  },
}).grammar();
