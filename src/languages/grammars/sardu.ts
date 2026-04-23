import { Language } from "../grammar.class.js";

export const sardu = new Language({
  language: "sardu",

  about:
    "ENIDE est unu tradutore programabile chi permitit de programmare in limba sarda",

  include: {
    main: "Includi",
    __description: "serbit pro agiungire limbas o bibliotecas in su sistema",
  },

  commands: {
    all: {
      __about: {
        main: "subra",
        __description: "pro ischire informatziones subra ENIDE",
      },

      __help: {
        main: "agiudu",
        __description: "mostrat totu sos cumandos disponibiles",
      },

      __version: {
        main: "tenore",
        __description: "mostrat sa versione atuale de ENIDE",
      },

      __languages: {
        main: "limbas",
        __description: "mostrat sas limbas disponibiles in su sistema",
      },

      __documentation: {
        main: "manu",
        __description: "mostrat sa documentatzione de sa limba",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matematica",
        __description: "modulu pro operatziones matematicas",
      },

      __pi: {
        main: "PI",
        __description: "valore de pi",
      },

      __sqrt: {
        main: "raighina",
        __description: "raighina quadrada de unu numeru",
      },

      __pow: {
        main: "potentzia",
        __description: "elevatzione a potentzia",
      },

      __round: {
        main: "tundu",
        __description: "arredondat unu numeru",
      },

      __random: {
        main: "casu",
        __description: "genera unu numeru aleatoriu",
      },

      __max: {
        main: "mannu",
        __description: "sighit su numeru pius mannu",
      },

      __min: {
        main: "piticu",
        __description: "sighit su numeru pius piticu",
      },

      __isNumber: {
        main: "estNumeru",
        __description: "controllat si est unu numeru",
      },

      __isInteger: {
        main: "estIntegu",
        __description: "controllat si est unu numeru integu",
      },

      __isFloat: {
        main: "estDecimale",
        __description: "controllat si est unu numeru decimale",
      },
    },

    __string: {
      main: {
        main: "cadena",
        __description: "modulu pro manipular cadenas de testu",
      },

      __length: {
        main: "longura",
        __description: "calcolat sa longura de sa cadena",
      },

      __toUpperCase: {
        main: "maiuscule",
        __description: "cambiat totu in letras maiusculas",
      },

      __toLowerCase: {
        main: "minuscule",
        __description: "cambiat totu in letras minusculas",
      },
    },

    __date: {
      main: {
        main: "data",
        __description: "modulu pro data e ora",
      },

      __year: {
        main: "annu",
        __description: "retornat s'annu",
      },

      __month: {
        main: "mese",
        __description: "retornat su mese",
      },

      __dayMonth: {
        main: "dieMese",
        __description: "retornat su die de su mese",
      },

      __dayWeek: {
        main: "dieChida",
        __description: "retornat su die de sa chida",
      },

      __hour: {
        main: "ora",
        __description: "retornat s'ora",
      },

      __minute: {
        main: "minutu",
        __description: "retornat su minutu",
      },

      __second: {
        main: "segundu",
        __description: "retornat su segundu",
      },
    },
  },

  types: {
    __object: {
      main: "ogetu",
      __description: "tipu oggetu de datos",
    },

    __number: {
      main: "numeru",
      __description: "tipu numericu",
    },

    __string: {
      main: "cadena",
      __description: "tipu de testu",
    },

    __boolean: {
      main: "logicu",
      values: {
        __true: "beru",
        __false: "falsu",
      },
      __description: "valores logicos beru o falsu",
    },
  },

  methods: {
    method: {
      __print: {
        main: "imprimi",
        __description: "mostrat in ischermu",
      },

      __scan: {
        main: "leghe",
        __description: "leget input de s'usadori",
      },

      __return: {
        main: "torra",
        __description: "retornat unu valore",
      },
    },

    sentences: {
      __function: {
        main: "funtzione",
        __description: "definit una funtzione",
      },

      __if: {
        main: "si",
        __description: "conditzione si",
      },

      __else: {
        main: "sennon",
        __description: "alternativa a sa conditzione",
      },

      __while: {
        main: "mentres",
        __description: "ciclu mentres sa conditzione est vera",
      },

      __for: {
        main: "pro",
        __description: "ciclu cun contadore",
      },

      __switch: {
        main: "sighi",
        __description: "strutura de selezione",
      },

      __case: {
        main: "casu",
        __description: "casu de sa selezione",
      },

      __default: {
        main: "base",
        __description: "casu predefinidu",
      },

      __try: {
        main: "proa",
        __description: "bloccu de prova",
      },

      __catch: {
        main: "prende",
        __description: "captura de errore",
      },

      __finally: {
        main: "finale",
        __description: "esecutadu semper",
      },
    },
  },

  errors: {
    main: {
      tag: "ERRORE",
      message: "errore genericu de sistema",
    },

    __UNKNOWN_ERROR: {
      tag: "ERRORE_INCONNOTU",
      message: "errore non ischidu",
    },

    __TypeError: {
      tag: "ERRORE_TIPU",
      message: "tipu non validu",
    },

    __ReferenceError: {
      tag: "ERRORE_RIFERIMENTU",
      message: "riferimentu non existent",
    },

    __SyntaxError: {
      tag: "ERRORE_SINTASSI",
      message: "sintassi non valida",
    },

    __RangeError: {
      tag: "ERRORE_INTERVALU",
      message: "valore fora de intervallu",
    },

    __URIError: {
      tag: "ERRORE_URI",
      message: "URI non valida",
    },

    __EvalError: {
      tag: "ERRORE_EVAL",
      message: "errore de eval",
    },
  },
}).grammar();
