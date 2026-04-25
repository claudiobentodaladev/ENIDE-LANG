import { Language } from "../grammar.class.js";

export const rumantsch = new Language({
  language: "rumantsch",
  about:
    "ENIDE è in transpilader traducibel che permetta da programmar en mintga lingua lingua",
  include: {
    main: "Includer",
    __description: "Dovra per includer lingua u bibliotecas",
  },
  commands: {
    all: {
      __about: {
        main: "davart",
        __description: "per obtener infurmaziuns davart ENIDE",
      },
      __help: {
        main: "agid",
        __description: "per obtener la glista da tuts ils cummonds disponibels",
      },
      __version: {
        main: "versiun",
        __description: "per obtener la versiun actuala da ENIDE",
      },
      __languages: {
        main: "linguas",
        __description: "per obtener la glista da tut las linguas disponiblas",
      },
      __documentation: {
        main: "doc",
        __description: "per obtener la documentaziun d'ina lingua",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematica",
        __description: "per acceder a las funcziuns matematicas",
      },
      __pi: {
        main: "PI",
        __description: "per obtener il valor da pi",
      },
      __sqrt: {
        main: "RadicCuadra",
        __description: "per obtener la radic cuadra",
      },
      __pow: {
        main: "Potenza",
        __description: "per obtener la potenza d'in numer",
      },
      __round: {
        main: "Arrondar",
        __description: "per arrondar in numer",
      },
      __random: {
        main: "Casuali",
        __description: "per obtener in numer casuali",
      },
      __max: {
        main: "Maximum",
        __description: "per obtener il valor maxim",
      },
      __min: {
        main: "Minimum",
        __description: "per obtener il valor minim",
      },
      __isNumber: {
        main: "EiNumer",
        __description: "per verificar sch'in valor è in numer",
      },
      __isInteger: {
        main: "EiEnter",
        __description: "per verificar sch'in valor è in enter",
      },
      __isFloat: {
        main: "EiDecimal",
        __description: "per verificar sch'in valor è in decimal",
      },
    },
    __string: {
      main: {
        main: "chadena",
        __description:
          "per acceder a las funcziuns da manipulaziun da chadenas",
      },
      __length: {
        main: "Lunghezza",
        __description: "per obtener la lunghezza d'ina chadena",
      },
      __toUpperCase: {
        main: "AMajusclas",
        __description: "per convertir ina chadena en majusclas",
      },
      __toLowerCase: {
        main: "AMinusclas",
        __description: "per convertir ina chadena en minusclas",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "per acceder a las funcziuns da data ed ura",
      },
      __year: {
        main: "Onn",
        __description: "per obtener l'onn",
      },
      __month: {
        main: "Mais",
        __description: "per obtener il mais",
      },
      __dayMonth: {
        main: "GiornMais",
        __description: "per obtener il giorn dal mais",
      },
      __dayWeek: {
        main: "GiornEmna",
        __description: "per obtener il giorn da la emna",
      },
      __hour: {
        main: "Ura",
        __description: "per obtener l'ura",
      },
      __minute: {
        main: "Minuta",
        __description: "per obtener la minuta",
      },
      __second: {
        main: "Segunda",
        __description: "per obtener la segunda",
      },
    },
  },
  types: {
    __object: {
      main: "object",
      __description: "per declerar in object static",
    },
    __number: {
      main: "numer",
      __description: "per declarar ina variabla da tip numer",
    },
    __string: {
      main: "chadena",
      __description: "per declarar ina variabla da tip chadena",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Ver", __false: "Fauls" },
      __description: "per declarar ina variabla da tip bulean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "stampar",
        __description: "per stampar in valor sin il screem",
      },
      __scan: {
        main: "legier",
        __description: "per legier in valor da l'input",
      },
      __return: {
        main: "returnar",
        __description: "per returnar in valor d'ina funcziun",
      },
    },
    sentences: {
      __function: {
        main: "funcziun",
        __description: "per declarar ina funcziun",
      },
      __if: {
        main: "sche",
        __description: "per declarar ina condiziun",
      },
      __else: {
        main: "auter",
        __description: "per declarar ina condiziun alternativa",
      },
      __while: {
        main: "mentras",
        __description: "per declarar in bucl mentras",
      },
      __for: {
        main: "per",
        __description: "per declarar in bucl per",
      },
      __switch: {
        main: "selecziun",
        __description: "per declarar ina structura da selecziun",
      },
      __case: {
        main: "cas",
        __description: "per declarar in cas en la structura da selecziun",
      },
      __default: {
        main: "standard",
        __description:
          "per declarar il cas standard en la structura da selecziun",
      },
      __try: {
        main: "emprovar",
        __description: "per declarar in bloc emprovar",
      },
      __catch: {
        main: "capturar",
        __description: "per declarar in bloc da gestiun d errurs",
      },
      __finally: {
        main: "finalmain",
        __description: "per declarar in bloc che executa adina",
      },
    },
  },
  errors: {
    main: { tag: "ERRUR", message: "Errur generala dal sistem" },
    __UNKNOWN_ERROR: {
      tag: "ERRUR_NUNENCONUSCHENTA",
      message: "Errur completamain nunenconuschenta",
    },
    __TypeError: { tag: "ERRUR_TIP", message: "Tip nunvalid en l'operaziun" },
    __ReferenceError: {
      tag: "ERRUR_REFERENZA",
      message: "La variabla na exista betg en il scope",
    },
    __SyntaxError: { tag: "ERRUR_SINTAXI", message: "Code nunvalid" },
    __RangeError: {
      tag: "ERRUR_INTERVAL",
      message: "Valor ordaifer l interval permes",
    },
    __URIError: { tag: "ERRUR_URI", message: "URI malformat u nunvalid" },
    __EvalError: { tag: "ERRUR_EVAL", message: "Errur en connex cun eval" },
  },
}).grammar();
