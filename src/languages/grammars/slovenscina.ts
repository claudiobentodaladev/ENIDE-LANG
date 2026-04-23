import { Language } from "../grammar.class.js";

export const slovenscina = new Language({
  language: "slovenscina",
  about:
    "ENIDE je prevedljivi transpiler ki omogoca programiranje v kateremkoli jeziku",

  include: {
    main: "Vkljuci",
    __description: "vkljucitev jezika ali knjiznic",
  },

  commands: {
    all: {
      __about: {
        main: "o",
        __description: "informacije o ENIDE",
      },
      __help: {
        main: "pomoc",
        __description: "seznam vseh ukazov",
      },
      __version: {
        main: "razlicica",
        __description: "trenutna razlicica ENIDE",
      },
      __languages: {
        main: "jeziki",
        __description: "seznam vseh jezikov",
      },
      __documentation: {
        main: "dok",
        __description: "dokumentacija jezika",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "matematicne funkcije",
      },
      __pi: {
        main: "PI",
        __description: "vrednost pi",
      },
      __sqrt: {
        main: "KvadratniKoren",
        __description: "kvadratni koren",
      },
      __pow: {
        main: "Potenca",
        __description: "potenca stevila",
      },
      __round: {
        main: "Zaokrozi",
        __description: "zaokrozevanje stevila",
      },
      __random: {
        main: "Nakljucno",
        __description: "nakljucno stevilo",
      },
      __max: {
        main: "Maksimum",
        __description: "najvecja vrednost",
      },
      __min: {
        main: "Minimum",
        __description: "najmanjsa vrednost",
      },
      __isNumber: {
        main: "JeStevilo",
        __description: "preveri ce je stevilo",
      },
      __isInteger: {
        main: "JeCeloStevilo",
        __description: "preveri ce je celo stevilo",
      },
      __isFloat: {
        main: "JeDecimalno",
        __description: "preveri ce je decimalno stevilo",
      },
    },

    __string: {
      main: {
        main: "niz",
        __description: "funkcije za delo z nizi",
      },
      __length: {
        main: "Dolzina",
        __description: "dolzina niza",
      },
      __toUpperCase: {
        main: "NaVelike",
        __description: "pretvorba v velike crke",
      },
      __toLowerCase: {
        main: "NaMale",
        __description: "pretvorba v male crke",
      },
    },

    __date: {
      main: {
        main: "datum",
        __description: "funkcije za datum in cas",
      },
      __year: {
        main: "Leto",
        __description: "leto",
      },
      __month: {
        main: "Mesec",
        __description: "mesec",
      },
      __dayMonth: {
        main: "DanMeseca",
        __description: "dan v mesecu",
      },
      __dayWeek: {
        main: "DanTedna",
        __description: "dan v tednu",
      },
      __hour: {
        main: "Ura",
        __description: "ura",
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
      __description: "staticni objekt",
    },
    __number: {
      main: "stevilo",
      __description: "tip stevilo",
    },
    __string: {
      main: "niz",
      __description: "tip niz",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Resnica", __false: "Laz" },
      __description: "logicni tip",
    },
  },

  methods: {
    method: {
      __print: {
        main: "izpisi",
        __description: "izpis vrednosti",
      },
      __scan: {
        main: "preberi",
        __description: "branje vhoda",
      },
      __return: {
        main: "vrni",
        __description: "vrnitev vrednosti",
      },
    },

    sentences: {
      __function: {
        main: "funkcija",
        __description: "funkcija",
      },
      __if: {
        main: "ce",
        __description: "pogoj",
      },
      __else: {
        main: "sicer",
        __description: "alternativa",
      },
      __while: {
        main: "dokler",
        __description: "zanka dokler",
      },
      __for: {
        main: "za",
        __description: "zanka za",
      },
      __switch: {
        main: "izbira",
        __description: "izbirna struktura",
      },
      __case: {
        main: "primer",
        __description: "primer v izbiri",
      },
      __default: {
        main: "privzeto",
        __description: "privzeti primer",
      },
      __try: {
        main: "poskusi",
        __description: "poskusni blok",
      },
      __catch: {
        main: "ujemi",
        __description: "obravnava napak",
      },
      __finally: {
        main: "nakoncuf",
        __description: "vedno izveden blok",
      },
    },
  },

  errors: {
    main: { tag: "NAPAKA", message: "splosna sistemska napaka" },
    __UNKNOWN_ERROR: { tag: "NEZNANA_NAPAKA", message: "neznana napaka" },
    __TypeError: { tag: "NAPAKA_TIPA", message: "neveljaven tip" },
    __ReferenceError: {
      tag: "NAPAKA_REFERENCE",
      message: "neobstojeca spremenljivka",
    },
    __SyntaxError: { tag: "NAPAKA_SINTAKSE", message: "neveljaven kod" },
    __RangeError: { tag: "NAPAKA_OBSEGA", message: "izven obsega" },
    __URIError: { tag: "NAPAKA_URI", message: "nepravilen URI" },
    __EvalError: { tag: "NAPAKA_EVAL", message: "napaka eval" },
  },
}).grammar();
