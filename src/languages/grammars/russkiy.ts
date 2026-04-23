import { Language } from "../grammar.class.js";

export const russkiy = new Language({
  language: "russkiy",
  about:
    "ENIDE - eto perevodimyy transpayler, pozvolyayushchiy programmirovat na lyubom yazyke",
  include: {
    main: "Vklyuchit",
    __description: "Ispolzuyetsya dlya vklyucheniya yazyka ili bibliotek",
  },
  commands: {
    all: {
      __about: {
        main: "o_programme",
        __description: "poluchit informatsiyu ob ENIDE",
      },
      __help: {
        main: "pomoshch",
        __description: "poluchit spisok vsekh komand",
      },
      __version: {
        main: "versiya",
        __description: "poluchit tekushchuyu versiyu ENIDE",
      },
      __languages: {
        main: "yazyki",
        __description: "poluchit spisok vsekh yazykov",
      },
      __documentation: {
        main: "dok",
        __description: "poluchit dokumentatsiyu yazyka",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "dostup k matematicheskim funktsiyam",
      },
      __pi: {
        main: "PI",
        __description: "poluchit znacheniye chisla pi",
      },
      __sqrt: {
        main: "koren",
        __description: "izvlech kvadratnyy koren",
      },
      __pow: {
        main: "stepen",
        __description: "vozvesti chislo v stepen",
      },
      __round: {
        main: "okruglit",
        __description: "okruglit chislo",
      },
      __random: {
        main: "sluchayno",
        __description: "poluchit sluchaynoye chislo",
      },
      __max: {
        main: "maks",
        __description: "nayti maksimalnoye znacheniye",
      },
      __min: {
        main: "min",
        __description: "nayti minimalnoye znacheniye",
      },
      __isNumber: {
        main: "eto_chislo",
        __description: "proverit, yavlyayetsya li znacheniye chislom",
      },
      __isInteger: {
        main: "tseloye",
        __description: "proverit, yavlyayetsya li chislo tselym",
      },
      __isFloat: {
        main: "drobnoye",
        __description: "proverit, yavlyayetsya li chislo desyatichnym",
      },
    },
    __string: {
      main: {
        main: "stroka",
        __description: "funktsii manipulyatsii strokami",
      },
      __length: {
        main: "dlina",
        __description: "poluchit dlinu stroki",
      },
      __toUpperCase: {
        main: "v_verkhniy",
        __description: "preobrazovat v verkhniy registr",
      },
      __toLowerCase: {
        main: "v_nizhniy",
        __description: "preobrazovat v nizhniy registr",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "funktsii raboty s datoy i vremenem",
      },
      __year: {
        main: "god",
        __description: "poluchit god",
      },
      __month: {
        main: "mesyats",
        __description: "poluchit mesyats",
      },
      __dayMonth: {
        main: "den_mesyatsa",
        __description: "poluchit den mesyatsa",
      },
      __dayWeek: {
        main: "den_nedeli",
        __description: "poluchit den nedeli",
      },
      __hour: {
        main: "chas",
        __description: "poluchit chas",
      },
      __minute: {
        main: "minuta",
        __description: "poluchit minutu",
      },
      __second: {
        main: "sekunda",
        __description: "poluchit sekundu",
      },
    },
  },
  types: {
    __object: {
      main: "obekt",
      __description: "dlya obyavleniya staticheskogo obekta",
    },
    __number: {
      main: "chislo",
      __description: "obyavit peremennuyu chislovogo tipa",
    },
    __string: {
      main: "tekst",
      __description: "obyavit peremennuyu strokovogo tipa",
    },
    __boolean: {
      main: "logika",
      values: { __true: "Istina", __false: "Lozh" },
      __description: "obyavit logicheskuyu peremennuyu",
    },
  },
  methods: {
    method: {
      __print: {
        main: "pechat",
        __description: "vyvesti znacheniye na ekran",
      },
      __scan: {
        main: "chitat",
        __description: "schitat znacheniye vvoda",
      },
      __return: {
        main: "vernut",
        __description: "vernut znacheniye iz funktsii",
      },
    },
    sentences: {
      __function: {
        main: "funktsiya",
        __description: "obyavit funktsiyu",
      },
      __if: {
        main: "esli",
        __description: "obyavit usloviye",
      },
      __else: {
        main: "inache",
        __description: "obyavit alternativnoye usloviye",
      },
      __while: {
        main: "poka",
        __description: "obyavit tsikl poka",
      },
      __for: {
        main: "dlya",
        __description: "obyavit tsikl dlya",
      },
      __switch: {
        main: "vybor",
        __description: "obyavit strukturu vybora",
      },
      __case: {
        main: "variant",
        __description: "obyavit variant vybora",
      },
      __default: {
        main: "po_umolchaniyu",
        __description: "variant po umolchaniyu",
      },
      __try: {
        main: "poprobovat",
        __description: "blok popytki",
      },
      __catch: {
        main: "poymat",
        __description: "blok obrabotki oshibok",
      },
      __finally: {
        main: "v_itoge",
        __description: "blok, vypolnyayemyy v lyubom sluchaye",
      },
    },
  },
  errors: {
    main: { tag: "OSHIBKA", message: "Obshchaya sistemnaya oshibka" },
    __UNKNOWN_ERROR: {
      tag: "NEIZVESTNAYA_OSHIBKA",
      message: "Polnostyu neizvestnaya oshibka",
    },
    __TypeError: {
      tag: "OSHIBKA_TIPA",
      message: "Nevernyy tip v operatsii",
    },
    __ReferenceError: {
      tag: "OSHIBKA_SSYLKI",
      message: "Peremennaya ne sushchestvuyet",
    },
    __SyntaxError: {
      tag: "OSHIBKA_SINTAKSISA",
      message: "Nedopustimyy kod",
    },
    __RangeError: {
      tag: "OSHIBKA_DIAPAZONA",
      message: "Znacheniye vne diapazona",
    },
    __URIError: {
      tag: "OSHIBKA_URI",
      message: "Nekorrektnyy URI",
    },
    __EvalError: {
      tag: "OSHIBKA_EVAL",
      message: "Oshibka funktsii eval",
    },
  },
}).grammar();
