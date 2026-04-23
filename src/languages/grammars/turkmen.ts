import { Language } from "../grammar.class.js";

export const turkmen = new Language({
  language: "turkmen",
  about:
    "ENIDE islendik dilde programlamaga mümkinçilik beryan terjime edilip bilinyan transpiler",

  include: {
    main: "Gosmak",
    __description: "Dil ýa-da kitaphanalary goşmak üçin ulanylýar",
  },

  commands: {
    all: {
      __about: {
        main: "Hakda",
        __description: "ENIDE hakda maglumat almak ucin",
      },
      __help: {
        main: "Komek",
        __description: "eliyeterli buyrukların hemmesinin sanawyny almak ucin",
      },
      __version: {
        main: "Wersiya",
        __description: "ENIDE nin häzirki wersiýasyny almak ucin",
      },
      __languages: {
        main: "Diller",
        __description: "eliyeterli dillerin hemmesinin sanawyny almak ucin",
      },
      __documentation: {
        main: "Dok",
        __description: "dil ucin resminamany almak ucin",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematika",
        __description: "matematiki funksiýalara girmek ucin",
      },
      __pi: {
        main: "PI",
        __description: "pi nin gymmatin almak ucin",
      },
      __sqrt: {
        main: "KwadratKok",
        __description: "kwadrat köki almak ucin",
      },
      __pow: {
        main: "Dereje",
        __description: "sanyň derejsini almak ucin",
      },
      __round: {
        main: "Tegelek",
        __description: "sany tegelelemek ucin",
      },
      __random: {
        main: "Tossun",
        __description: "tossun san almak ucin",
      },
      __max: {
        main: "InYokary",
        __description: "iň yokary gymmaty almak ucin",
      },
      __min: {
        main: "InPes",
        __description: "iň pes gymmaty almak ucin",
      },
      __isNumber: {
        main: "SanMy",
        __description: "gymmatyň san bolup bolmandygyny barlamak ucin",
      },
      __isInteger: {
        main: "TamlaSanMy",
        __description: "gymmatyň tam san bolup bolmandygyny barlamak ucin",
      },
      __isFloat: {
        main: "OnlukSanMy",
        __description: "gymmatyň onluk san bolup bolmandygyny barlamak ucin",
      },
    },

    __string: {
      main: {
        main: "Setir",
        __description: "setir manipulyasiýa funksiýalaryna girmek ucin",
      },
      __length: {
        main: "Uzunluk",
        __description: "setiriň uzunlugyny almak ucin",
      },
      __toUpperCase: {
        main: "UluHarplar",
        __description: "setiri uly harplara owurmek ucin",
      },
      __toLowerCase: {
        main: "KiciHarplar",
        __description: "setiri kici harplara owurmek ucin",
      },
    },

    __date: {
      main: {
        main: "Sene",
        __description: "sene we wagt funksiýalaryna girmek ucin",
      },
      __year: {
        main: "Yyl",
        __description: "yyli almak ucin",
      },
      __month: {
        main: "Ay",
        __description: "ayi almak ucin",
      },
      __dayMonth: {
        main: "AyinGuni",
        __description: "ayın günini almak ucin",
      },
      __dayWeek: {
        main: "HepdaninGuni",
        __description: "heptanin günini almak ucin",
      },
      __hour: {
        main: "Sagat",
        __description: "sagaty almak ucin",
      },
      __minute: {
        main: "Minut",
        __description: "minudy almak ucin",
      },
      __second: {
        main: "Sekunt",
        __description: "sekundy almak ucin",
      },
    },
  },

  types: {
    __object: {
      main: "Obekt",
      __description: "statik obekt yglan etmek ucin",
    },
    __number: {
      main: "San",
      __description: "san typli uytgeýjini yglan etmek ucin",
    },
    __string: {
      main: "Setir",
      __description: "setir typli uytgeýjini yglan etmek ucin",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Dogru", __false: "Yalan" },
      __description: "bool typli uytgeýjini yglan etmek ucin",
    },
  },

  methods: {
    method: {
      __print: {
        main: "CapEt",
        __description: "gymmaty ekrana çap etmek ucin",
      },
      __scan: {
        main: "Oku",
        __description: "giriş den gymmaty okamak ucin",
      },
      __return: {
        main: "Gaytar",
        __description: "funksiýadan gymmaty gaytarmak ucin",
      },
    },

    sentences: {
      __function: {
        main: "Funksiya",
        __description: "funksiýa yglan etmek ucin",
      },
      __if: {
        main: "Eger",
        __description: "sert yglan etmek ucin",
      },
      __else: {
        main: "Yoksa",
        __description: "alternatiw sert yglan etmek ucin",
      },
      __while: {
        main: "Taydac",
        __description: "taydaç sikli yglan etmek ucin",
      },
      __for: {
        main: "Ucin",
        __description: "ucin sikli yglan etmek ucin",
      },
      __switch: {
        main: "Saylaw",
        __description: "saylaw strukturasyny yglan etmek ucin",
      },
      __case: {
        main: "Hal",
        __description: "saylaw strukturasynda hal yglan etmek ucin",
      },
      __default: {
        main: "Deslapky",
        __description: "saylaw strukturasynda deslapky haly yglan etmek ucin",
      },
      __try: {
        main: "Synan",
        __description: "synan blogy yglan etmek ucin",
      },
      __catch: {
        main: "Tut",
        __description: "yalnys dolandyryş blogyny yglan etmek ucin",
      },
      __finally: {
        main: "Ahyrynda",
        __description: "hemişe iyerine ýetirilýan blogy yglan etmek ucin",
      },
    },
  },

  errors: {
    main: {
      tag: "YALNYS",
      message: "Umumy ulgam ýalnyşy",
    },
    __UNKNOWN_ERROR: {
      tag: "NamalimYalnys",
      message: "Doly nämälim ýalnyş",
    },
    __TypeError: {
      tag: "TypYalnys",
      message: "Operasiýada nädogry görnüş",
    },
    __ReferenceError: {
      tag: "SalgyYalnys",
      message: "Uytgeýji kapsulada yok",
    },
    __SyntaxError: {
      tag: "SintaksisYalnys",
      message: "Nädogry kod",
    },
    __RangeError: {
      tag: "AralykYalnys",
      message: "Gymmat rugsat edilýan aralykdan daşynda",
    },
    __URIError: {
      tag: "UriYalnys",
      message: "Nädogry düzülen ya da geçersiz URI",
    },
    __EvalError: {
      tag: "EvalYalnys",
      message: "eval bilen baglanyşykly ýalnyş",
    },
  },
}).grammar();
