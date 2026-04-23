import { Language } from "../grammar.class.js";

export const slovencina = new Language({
  language: "slovencina",
  about:
    "ENIDE je prelozitelny transpiler ktory umoznuje programovanie v akomkolvek jazyku",

  include: {
    main: "Zahrnut",
    __description: "Pouziva sa na zahrnutie jazyka alebo kniznic",
  },

  commands: {
    all: {
      __about: {
        main: "o",
        __description: "informacie o ENIDE",
      },
      __help: {
        main: "pomoc",
        __description: "zoznam vsetkych dostupnych prikazov",
      },
      __version: {
        main: "verzia",
        __description: "aktualna verzia ENIDE",
      },
      __languages: {
        main: "jazyky",
        __description: "zoznam vsetkych dostupnych jazykov",
      },
      __documentation: {
        main: "dok",
        __description: "dokumentacia jazyka",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "matematicke funkcie",
      },
      __pi: {
        main: "PI",
        __description: "hodnota pi",
      },
      __sqrt: {
        main: "DruhaCodmocnina",
        __description: "druha odmocnina",
      },
      __pow: {
        main: "Mocnina",
        __description: "mocnina cisla",
      },
      __round: {
        main: "Zaokruhlit",
        __description: "zaokruhlenie cisla",
      },
      __random: {
        main: "Nahodny",
        __description: "nahodne cislo",
      },
      __max: {
        main: "Maximum",
        __description: "maximalna hodnota",
      },
      __min: {
        main: "Minimum",
        __description: "minimalna hodnota",
      },
      __isNumber: {
        main: "JeCislo",
        __description: "overenie ci je hodnota cislo",
      },
      __isInteger: {
        main: "JeCeleCislo",
        __description: "overenie ci je hodnota cele cislo",
      },
      __isFloat: {
        main: "JeDesatinne",
        __description: "overenie ci je hodnota desatinne cislo",
      },
    },

    __string: {
      main: {
        main: "retazec",
        __description: "funkcie pre pracu s retazcami",
      },
      __length: {
        main: "Dlzka",
        __description: "dlzka retazca",
      },
      __toUpperCase: {
        main: "NaVelke",
        __description: "prevod na velke pismena",
      },
      __toLowerCase: {
        main: "NaMale",
        __description: "prevod na male pismena",
      },
    },

    __date: {
      main: {
        main: "datum",
        __description: "funkcie pre datum a cas",
      },
      __year: {
        main: "Rok",
        __description: "rok",
      },
      __month: {
        main: "Mesiac",
        __description: "mesiac",
      },
      __dayMonth: {
        main: "DenMesiaca",
        __description: "den mesiaca",
      },
      __dayWeek: {
        main: "DenTyzdna",
        __description: "den tyzdna",
      },
      __hour: {
        main: "Hodina",
        __description: "hodina",
      },
      __minute: {
        main: "Minuta",
        __description: "minuta",
      },
      __second: {
        main: "Sekunda",
        __description: "sekunda",
      },
    },
  },

  types: {
    __object: {
      main: "objekt",
      __description: "staticky objekt",
    },
    __number: {
      main: "cislo",
      __description: "typ cislo",
    },
    __string: {
      main: "retazec",
      __description: "typ retazec",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Pravda", __false: "Loz" },
      __description: "logicky typ",
    },
  },

  methods: {
    method: {
      __print: {
        main: "vypisat",
        __description: "vypis hodnoty na obrazovku",
      },
      __scan: {
        main: "nacitat",
        __description: "nacitanie vstupu",
      },
      __return: {
        main: "vratit",
        __description: "navrat z funkcie",
      },
    },

    sentences: {
      __function: {
        main: "funkcia",
        __description: "deklaracia funkcie",
      },
      __if: {
        main: "ak",
        __description: "podmienka",
      },
      __else: {
        main: "inak",
        __description: "alternativa",
      },
      __while: {
        main: "pokial",
        __description: "cyklus pokial",
      },
      __for: {
        main: "pre",
        __description: "cyklus pre",
      },
      __switch: {
        main: "vyber",
        __description: "vyber hodnoty",
      },
      __case: {
        main: "pripad",
        __description: "pripad vyberu",
      },
      __default: {
        main: "predvoleny",
        __description: "predvolena vetva",
      },
      __try: {
        main: "skusit",
        __description: "blok skusania",
      },
      __catch: {
        main: "zachytit",
        __description: "spracovanie chyb",
      },
      __finally: {
        main: "nakoniec",
        __description: "vzdy vykonany blok",
      },
    },
  },

  errors: {
    main: { tag: "CHYBA", message: "vseobecna chyba systemu" },
    __UNKNOWN_ERROR: { tag: "NEZNAMA_CHYBA", message: "neznama chyba" },
    __TypeError: { tag: "CHYBA_TYPU", message: "neplatny typ operacie" },
    __ReferenceError: {
      tag: "CHYBA_REFERENCIE",
      message: "neexistujuca premenna",
    },
    __SyntaxError: { tag: "CHYBA_SYNTAXE", message: "neplatny kod" },
    __RangeError: { tag: "CHYBA_ROZSAHU", message: "hodnota mimo rozsahu" },
    __URIError: { tag: "CHYBA_URI", message: "neplatne URI" },
    __EvalError: { tag: "CHYBA_EVAL", message: "chyba eval" },
  },
}).grammar();
