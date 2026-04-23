import { Language } from "../grammar.class.js";

export const lietuviu = new Language({
  language: "lietuviu",
  about:
    "ENIDE yra isverciamas transpileris leidziantis programuoti bet kuria kalba",

  include: {
    main: "Itraukti",
    __description: "Naudojama kalbai ar bibliotekoms įtraukti",
  },

  commands: {
    all: {
      __about: {
        main: "apie",
        __description: "gauti informacija apie ENIDE",
      },
      __help: {
        main: "pagalba",
        __description: "gauti visu prieinamu komandu sarasa",
      },
      __version: {
        main: "versija",
        __description: "gauti dabartine ENIDE versija",
      },
      __languages: {
        main: "kalbos",
        __description: "gauti visu prieinamu kalbu sarasa",
      },
      __documentation: {
        main: "dokumentacija",
        __description: "gauti kalbos dokumentacija",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "pasiekti matematines funkcijas",
      },
      __pi: { main: "PI", __description: "gauti pi reiksme" },

      __sqrt: {
        main: "KvadratineSaknis",
        __description: "gauti kvadratine sakni",
      },

      __pow: {
        main: "Laipsnis",
        __description: "gauti skaiciaus laipsni",
      },

      __round: {
        main: "Apvalinti",
        __description: "apvalinti skaiciu",
      },

      __random: {
        main: "Atsitiktinis",
        __description: "gauti atsitiktini skaiciu",
      },

      __max: {
        main: "Maksimumas",
        __description: "gauti maksimalia reiksme",
      },

      __min: {
        main: "Minimumas",
        __description: "gauti minimalia reiksme",
      },

      __isNumber: {
        main: "YraSkaicius",
        __description: "patikrinti ar reiksme yra skaicius",
      },

      __isInteger: {
        main: "YraSveikasis",
        __description: "patikrinti ar reiksme yra sveikasis skaicius",
      },

      __isFloat: {
        main: "YraFloat",
        __description: "patikrinti ar reiksme yra slankaus kablelio skaicius",
      },
    },

    __string: {
      main: {
        main: "eilute",
        __description: "pasiekti eiluciu manipuliavimo funkcijas",
      },

      __length: {
        main: "Ilgis",
        __description: "gauti eilutes ilgi",
      },

      __toUpperCase: {
        main: "IDidziasias",
        __description: "konvertuoti eilute i didziasias raides",
      },

      __toLowerCase: {
        main: "IMazasias",
        __description: "konvertuoti eilute i mazasias raides",
      },
    },

    __date: {
      main: {
        main: "data",
        __description: "pasiekti datos ir laiko funkcijas",
      },

      __year: { main: "Metai", __description: "gauti metus" },

      __month: { main: "Menuo", __description: "gauti menesi" },

      __dayMonth: {
        main: "MenesioDiena",
        __description: "gauti menesio diena",
      },

      __dayWeek: {
        main: "SavaitesDiena",
        __description: "gauti savaites diena",
      },

      __hour: { main: "Valanda", __description: "gauti valanda" },

      __minute: { main: "Minute", __description: "gauti minute" },

      __second: { main: "Sekunde", __description: "gauti sekunde" },
    },
  },

  types: {
    __object: {
      main: "objektas",
      __description: "deklaruoti statini objekta",
    },

    __number: {
      main: "skaicius",
      __description: "deklaruoti kintamaji tipo skaicius",
    },

    __string: {
      main: "eilute",
      __description: "deklaruoti kintamaji tipo eilute",
    },

    __boolean: {
      main: "bool",
      values: { __true: "Tiesa", __false: "Melas" },
      __description: "deklaruoti kintamaji tipo loginis",
    },
  },

  methods: {
    method: {
      __print: {
        main: "spausdinti",
        __description: "spausdinti reiksme ekrane",
      },

      __scan: {
        main: "skaityti",
        __description: "skaityti reiksme is ivesies",
      },

      __return: {
        main: "grazinti",
        __description: "grazinti reiksme is funkcijos",
      },
    },

    sentences: {
      __function: {
        main: "funkcija",
        __description: "deklaruoti funkcija",
      },

      __if: {
        main: "jei",
        __description: "deklaruoti salyga",
      },

      __else: {
        main: "kitaip",
        __description: "deklaruoti alternatyvia salyga",
      },

      __while: {
        main: "kol",
        __description: "deklaruoti kol cikla",
      },

      __for: {
        main: "ciklas",
        __description: "deklaruoti for cikla",
      },

      __switch: {
        main: "pasirinkimas",
        __description: "deklaruoti pasirinkimo struktura",
      },

      __case: {
        main: "atvejis",
        __description: "deklaruoti atveja",
      },

      __default: {
        main: "numatytasis",
        __description: "deklaruoti numatyta atveji",
      },

      __try: {
        main: "bandyti",
        __description: "deklaruoti bandymo bloka",
      },

      __catch: {
        main: "pagauti",
        __description: "deklaruoti klaidu apdorojima",
      },

      __finally: {
        main: "galiausiai",
        __description: "visada vykdomas blokas",
      },
    },
  },

  errors: {
    main: { tag: "KLAIDA", message: "Bendroji sistemos klaida" },

    __UNKNOWN_ERROR: {
      tag: "NEZINOMA_KLAIDA",
      message: "Visiskai nezinoma klaida",
    },

    __TypeError: {
      tag: "TIPO_KLAIDA",
      message: "Netinkamas tipas",
    },

    __ReferenceError: {
      tag: "NUORODOS_KLAIDA",
      message: "Kintamasis neegzistuoja",
    },

    __SyntaxError: {
      tag: "SINTAKSES_KLAIDA",
      message: "Neteisingas kodas",
    },

    __RangeError: {
      tag: "INTERVALO_KLAIDA",
      message: "Reiksme uz ribu",
    },

    __URIError: {
      tag: "URI_KLAIDA",
      message: "Netinkamas URI",
    },

    __EvalError: {
      tag: "EVAL_KLAIDA",
      message: "Eval klaida",
    },
  },
}).grammar();
