import { Language } from "../grammar.class.js";

export const frysk = new Language({
  language: "frysk",
  about:
    "ENIDE is in oersettbere transpiler dy t programmearjen yn elke taal mooglik makket",
  include: {
    main: "Ynfoegje",
    __description: "Brûkt om taal of biblioteken ta te foegjen",
  },
  commands: {
    all: {
      __about: {
        main: "oer",
        __description: "om ynformaasje oer ENIDE te krijen",
      },
      __help: {
        main: "help",
        __description: "om de list fan alle beskikbere kommando s te krijen",
      },
      __version: {
        main: "ferzje",
        __description: "om de aktuele ferzje fan ENIDE te krijen",
      },
      __languages: {
        main: "talen",
        __description: "om de list fan alle beskikbere talen te krijen",
      },
      __documentation: {
        main: "dok",
        __description: "om de dokumintaasje foar in taal te krijen",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "wiskunde",
        __description: "om tagong te krijen ta wiskundige funksjes",
      },
      __pi: {
        main: "PI",
        __description: "om de wearde fan pi te krijen",
      },
      __sqrt: {
        main: "Fjouwerkantswurtel",
        __description: "om de fjouwerkantswurtel te krijen",
      },
      __pow: {
        main: "Macht",
        __description: "om de macht fan in getal te krijen",
      },
      __round: {
        main: "Afruje",
        __description: "om in getal oan te passen",
      },
      __random: {
        main: "Willekeurich",
        __description: "om in willekeurich getal te krijen",
      },
      __max: {
        main: "Maksimum",
        __description: "om de maksimale wearde te krijen",
      },
      __min: {
        main: "Minimum",
        __description: "om de minimale wearde te krijen",
      },
      __isNumber: {
        main: "IsGetal",
        __description: "om te kontrolearjen oft in wearde in getal is",
      },
      __isInteger: {
        main: "IsHeelgetal",
        __description: "om te kontrolearjen oft in wearde in heelgetal is",
      },
      __isFloat: {
        main: "IsDesimaal",
        __description: "om te kontrolearjen oft in wearde in desimaal is",
      },
    },
    __string: {
      main: {
        main: "tekst",
        __description: "om tagong te krijen ta tekstmanipulaasje funksjes",
      },
      __length: {
        main: "Lingte",
        __description: "om de lingte fan in tekst te krijen",
      },
      __toUpperCase: {
        main: "NeiHaadletters",
        __description: "om in tekst nei haadletters te konvertearjen",
      },
      __toLowerCase: {
        main: "NeiLytseLetters",
        __description: "om in tekst nei lytse letters te konvertearjen",
      },
    },
    __date: {
      main: {
        main: "datum",
        __description: "om tagong te krijen ta datum en tiid funksjes",
      },
      __year: {
        main: "Jier",
        __description: "om it jier te krijen",
      },
      __month: {
        main: "Moanne",
        __description: "om de moanne te krijen",
      },
      __dayMonth: {
        main: "DeiMoanne",
        __description: "om de dei fan de moanne te krijen",
      },
      __dayWeek: {
        main: "DeiWike",
        __description: "om de dei fan de wike te krijen",
      },
      __hour: {
        main: "Oere",
        __description: "om it oere te krijen",
      },
      __minute: {
        main: "Minut",
        __description: "om de minút te krijen",
      },
      __second: {
        main: "Sekonde",
        __description: "om de sekonde te krijen",
      },
    },
  },
  types: {
    __object: {
      main: "objekt",
      __description: "om in statysk objekt te deklarearjen",
    },
    __number: {
      main: "getal",
      __description: "om in fariabele fan it type getal te deklarearjen",
    },
    __string: {
      main: "tekst",
      __description: "om in fariabele fan it type tekst te deklarearjen",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Wier",
        __false: "Falsk",
      },
      __description: "om in fariabele fan it type boolsk te deklarearjen",
    },
  },
  methods: {
    method: {
      __print: {
        main: "printsje",
        __description: "om in wearde op it skerm te printsjen",
      },
      __scan: {
        main: "leze",
        __description: "om in wearde fan de ynfier te lezen",
      },
      __return: {
        main: "weromjaan",
        __description: "om in wearde fan in funksje werom te jaan",
      },
    },
    sentences: {
      __function: {
        main: "funksje",
        __description: "om in funksje te deklarearjen",
      },
      __if: {
        main: "as",
        __description: "om in betingst te deklarearjen",
      },
      __else: {
        main: "oars",
        __description: "om in alternative betingst te deklarearjen",
      },
      __while: {
        main: "wylst",
        __description: "om in wylst-lus te deklarearjen",
      },
      __for: {
        main: "foar",
        __description: "om in for-lus te deklarearjen",
      },
      __switch: {
        main: "karstruktur",
        __description: "om in karstruktuuer te deklarearjen",
      },
      __case: {
        main: "gefal",
        __description: "om in gefal yn de karstruktuuer te deklarearjen",
      },
      __default: {
        main: "standert",
        __description: "om it standertefal yn de karstruktuuer te deklarearjen",
      },
      __try: {
        main: "besykje",
        __description: "om in besykje-blok te deklarearjen",
      },
      __catch: {
        main: "opfange",
        __description: "om in flaterbehannelings blok te deklarearjen",
      },
      __finally: {
        main: "uteinlik",
        __description: "om in blok te deklarearjen dat altyd útfierd wurdt",
      },
    },
  },
  errors: {
    main: { tag: "FLATER", message: "Algemiene systeemflater" },
    __UNKNOWN_ERROR: {
      tag: "ONBEKENDE_FLATER",
      message: "Folslein unkende flater",
    },
    __TypeError: {
      tag: "TYPE_FLATER",
      message: "Unjildich type yn de operaasje",
    },
    __ReferenceError: {
      tag: "REFERINSJE_FLATER",
      message: "Fariabele bestiet net yn it berik",
    },
    __SyntaxError: { tag: "SYNTAKSIS_FLATER", message: "Unjildige koade" },
    __RangeError: {
      tag: "BERIK_FLATER",
      message: "Wearde buten it tastiene berik",
    },
    __URIError: {
      tag: "URI_FLATER",
      message: "Ferkeard foarme of unjildige URI",
    },
    __EvalError: { tag: "EVAL_FLATER", message: "Flater relatearre oan eval" },
  },
}).grammar();
