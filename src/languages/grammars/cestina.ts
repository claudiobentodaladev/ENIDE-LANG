import { Language } from "../grammar.class.js";

export const cestina = new Language({
  language: "cestina",
  about:
    "ENIDE je prelozitelny transpiler ktery umoznuje programovani v jakemkoli jazyce",
  include: {
    main: "Zahrnout",
    __description: "Používá se k zahrnutí jazyka nebo knihoven",
  },
  commands: {
    all: {
      __about: {
        main: "o",
        __description: "pro ziskani informaci o ENIDE",
      },
      __help: {
        main: "pomoc",
        __description: "pro ziskani seznamu vsech dostupnych prikazu",
      },
      __version: {
        main: "verze",
        __description: "pro ziskani aktualni verze ENIDE",
      },
      __languages: {
        main: "jazyky",
        __description: "pro ziskani seznamu vsech dostupnych jazyku",
      },
      __documentation: {
        main: "dok",
        __description: "pro ziskani dokumentace pro jazyk",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "pro pristup k matematickym funkcim",
      },
      __pi: {
        main: "PI",
        __description: "pro ziskani hodnoty pi",
      },
      __sqrt: {
        main: "DruhOdmocnina",
        __description: "pro ziskani druhé odmocniny",
      },
      __pow: {
        main: "Mocnina",
        __description: "pro ziskani mocniny cisla",
      },
      __round: {
        main: "Zaokrouhlit",
        __description: "pro zaokrouhleni cisla",
      },
      __random: {
        main: "Nahodny",
        __description: "pro ziskani nahodneho cisla",
      },
      __max: {
        main: "Maximum",
        __description: "pro ziskani maximalni hodnoty",
      },
      __min: {
        main: "Minimum",
        __description: "pro ziskani minimalni hodnoty",
      },
      __isNumber: {
        main: "JeCislo",
        __description: "pro overeni zda je hodnota cislo",
      },
      __isInteger: {
        main: "JeCelesCislo",
        __description: "pro overeni zda je hodnota cele cislo",
      },
      __isFloat: {
        main: "JeDesetinne",
        __description: "pro overeni zda je hodnota desetinne cislo",
      },
    },
    __string: {
      main: {
        main: "retezec",
        __description: "pro pristup k funkcim manipulace s retezci",
      },
      __length: {
        main: "Delka",
        __description: "pro ziskani delky retezce",
      },
      __toUpperCase: {
        main: "NaVelka",
        __description: "pro prevod retezce na velka pismena",
      },
      __toLowerCase: {
        main: "NaMala",
        __description: "pro prevod retezce na mala pismena",
      },
    },
    __date: {
      main: {
        main: "datum",
        __description: "pro pristup k funkcim data a casu",
      },
      __year: {
        main: "Rok",
        __description: "pro ziskani roku",
      },
      __month: {
        main: "Mesic",
        __description: "pro ziskani mesice",
      },
      __dayMonth: {
        main: "DenMesice",
        __description: "pro ziskani dne mesice",
      },
      __dayWeek: {
        main: "DenTydne",
        __description: "pro ziskani dne tydne",
      },
      __hour: {
        main: "Hodina",
        __description: "pro ziskani hodiny",
      },
      __minute: {
        main: "Minuta",
        __description: "pro ziskani minuty",
      },
      __second: {
        main: "Sekunda",
        __description: "pro ziskani sekundy",
      },
    },
  },
  types: {
    __object: {
      main: "objekt",
      __description: "pro deklaraci statickeho objektu",
    },
    __number: {
      main: "cislo",
      __description: "pro deklaraci promenne typu cislo",
    },
    __string: {
      main: "retezec",
      __description: "pro deklaraci promenne typu retezec",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Pravda",
        __false: "Nepravda",
      },
      __description: "pro deklaraci promenne typu logicky",
    },
  },
  methods: {
    method: {
      __print: {
        main: "vypsat",
        __description: "pro vypis hodnoty na obrazovku",
      },
      __scan: {
        main: "nacist",
        __description: "pro nacteni hodnoty ze vstupu",
      },
      __return: {
        main: "vratit",
        __description: "pro vraceni hodnoty z funkce",
      },
    },
    sentences: {
      __function: {
        main: "funkce",
        __description: "pro deklaraci funkce",
      },
      __if: {
        main: "pokud",
        __description: "pro deklaraci podminky",
      },
      __else: {
        main: "jinak",
        __description: "pro deklaraci alternativni podminky",
      },
      __while: {
        main: "dokud",
        __description: "pro deklaraci cyklu dokud",
      },
      __for: {
        main: "pro",
        __description: "pro deklaraci cyklu pro",
      },
      __switch: {
        main: "vyber",
        __description: "pro deklaraci struktury vyberu",
      },
      __case: {
        main: "pripad",
        __description: "pro deklaraci pripadu ve strukture vyberu",
      },
      __default: {
        main: "vychozi",
        __description: "pro deklaraci vychoziho pripadu ve strukture vyberu",
      },
      __try: {
        main: "zkusit",
        __description: "pro deklaraci bloku zkusit",
      },
      __catch: {
        main: "zachytit",
        __description: "pro deklaraci bloku zpracovani chyb",
      },
      __finally: {
        main: "nakonec",
        __description: "pro deklaraci bloku ktery se vzdy provede",
      },
    },
  },
  errors: {
    main: { tag: "CHYBA", message: "Obecna chyba systemu" },
    __UNKNOWN_ERROR: { tag: "NEZNAMA_CHYBA", message: "Uplne neznama chyba" },
    __TypeError: { tag: "CHYBA_TYPU", message: "Neplatny typ v operaci" },
    __ReferenceError: {
      tag: "CHYBA_REFERENCE",
      message: "Promenna neexistuje v rozsahu",
    },
    __SyntaxError: { tag: "CHYBA_SYNTAXE", message: "Neplatny kod" },
    __RangeError: {
      tag: "CHYBA_ROZSAHU",
      message: "Hodnota mimo povoleny rozsah",
    },
    __URIError: { tag: "CHYBA_URI", message: "Chybne nebo neplatne URI" },
    __EvalError: { tag: "CHYBA_EVAL", message: "Chyba souvisejici s eval" },
  },
}).grammar();
