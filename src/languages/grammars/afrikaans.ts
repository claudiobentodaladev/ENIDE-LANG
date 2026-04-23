import { Language } from "../grammar.class.js";

export const afrikaans = new Language({
  language: "afrikaans",
  about:
    "ENIDE is 'n vertaalbare transpiler wat programmering in enige taal moontlik maak",
  include: {
    main: "Insluit",
    __description: "Word gebruik om tale of biblioteke in te sluit.",
  },
  commands: {
    all: {
      __about: {
        main: "oor",
        __description: "om inligting oor ENIDE te kry",
      },
      __help: {
        main: "hulp",
        __description: "om die lys van alle beskikbare opdragte te kry",
      },
      __version: {
        main: "weergawe",
        __description: "om die huidige weergawe van ENIDE te kry",
      },
      __languages: {
        main: "tale",
        __description: "om die lys van alle beskikbare tale te kry",
      },
      __documentation: {
        main: "dok",
        __description: "om die dokumentasie vir 'n taal te kry",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "wiskunde",
        __description: "om toegang tot wiskundige funksies te kry",
      },
      __pi: {
        main: "PI",
        __description: "om die waarde van pi te kry",
      },
      __sqrt: {
        main: "Vierkantswortel",
        __description: "om die vierkantswortel te kry",
      },
      __pow: {
        main: "Mag",
        __description: "om die mag van 'n getal te kry",
      },
      __round: {
        main: "Afrond",
        __description: "om 'n getal af te rond",
      },
      __random: {
        main: "Lukraak",
        __description: "om 'n lukrake getal te kry",
      },
      __max: {
        main: "Maksimum",
        __description: "om die maksimum waarde te kry",
      },
      __min: {
        main: "Minimum",
        __description: "om die minimum waarde te kry",
      },
      __isNumber: {
        main: "IsGetal",
        __description: "om te kontroleer of 'n waarde 'n getal is",
      },
      __isInteger: {
        main: "IsHeelgetal",
        __description: "om te kontroleer of 'n waarde 'n heelgetal is",
      },
      __isFloat: {
        main: "IsDesimaal",
        __description: "om te kontroleer of 'n waarde 'n desimale getal is",
      },
    },
    __string: {
      main: {
        main: "teks",
        __description: "om toegang tot teksmanipulasie funksies te kry",
      },
      __length: {
        main: "Lengte",
        __description: "om die lengte van 'n teks te kry",
      },
      __toUpperCase: {
        main: "NaHoofletters",
        __description: "om 'n teks na hoofletters te omskep",
      },
      __toLowerCase: {
        main: "NaKleinletters",
        __description: "om 'n teks na kleinletters te omskep",
      },
    },
    __date: {
      main: {
        main: "datum",
        __description: "om toegang tot datum en tyd funksies te kry",
      },
      __year: {
        main: "Jaar",
        __description: "om die jaar te kry",
      },
      __month: {
        main: "Maand",
        __description: "om die maand te kry",
      },
      __dayMonth: {
        main: "DagMaand",
        __description: "om die dag van die maand te kry",
      },
      __dayWeek: {
        main: "DagWeek",
        __description: "om die dag van die week te kry",
      },
      __hour: {
        main: "Uur",
        __description: "om die uur te kry",
      },
      __minute: {
        main: "Minuut",
        __description: "om die minuut te kry",
      },
      __second: {
        main: "Sekonde",
        __description: "om die sekonde te kry",
      },
    },
  },
  types: {
    __object: {
      main: "voorwerp",
      __description: "om 'n statiese voorwerp te verklaar",
    },
    __number: {
      main: "getal",
      __description: "om 'n veranderlike van tipe getal te verklaar",
    },
    __string: {
      main: "teks",
      __description: "om 'n veranderlike van tipe teks te verklaar",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Waar",
        __false: "Vals",
      },
      __description: "om 'n veranderlike van tipe Boole te verklaar",
    },
  },
  methods: {
    method: {
      __print: {
        main: "druk",
        __description: "om 'n waarde op die skerm te druk",
      },
      __scan: {
        main: "lees",
        __description: "om 'n waarde van die invoer te lees",
      },
      __return: {
        main: "gee_terug",
        __description: "om 'n waarde vanuit 'n funksie terug te gee",
      },
    },
    sentences: {
      __function: {
        main: "funksie",
        __description: "om 'n funksie te verklaar",
      },
      __if: {
        main: "as",
        __description: "om 'n voorwaarde te verklaar",
      },
      __else: {
        main: "anders",
        __description: "om 'n alternatiewe voorwaarde te verklaar",
      },
      __while: {
        main: "terwyl",
        __description: "om 'n terwyl-lus te verklaar",
      },
      __for: {
        main: "vir",
        __description: "om 'n for-lus te verklaar",
      },
      __switch: {
        main: "keuse",
        __description: "om 'n keuse struktuur te verklaar",
      },
      __case: {
        main: "geval",
        __description: "om 'n geval in die keuse struktuur te verklaar",
      },
      __default: {
        main: "standaard",
        __description:
          "om die standaard geval in die keuse struktuur te verklaar",
      },
      __try: {
        main: "probeer",
        __description: "om 'n probeer blok te verklaar",
      },
      __catch: {
        main: "vang",
        __description: "om 'n fouthanteringsblok te verklaar",
      },
      __finally: {
        main: "uiteindelik",
        __description: "om 'n blok te verklaar wat altyd uitgevoer word",
      },
    },
  },
  errors: {
    main: { tag: "FOUT", message: "Generiese stelsel fout" },
    __UNKNOWN_ERROR: {
      tag: "ONBEKENDE_FOUT",
      message: "Heeltemal onbekende fout",
    },
    __TypeError: { tag: "TIPE_FOUT", message: "Ongeldige tipe in operasie" },
    __ReferenceError: {
      tag: "VERWYSING_FOUT",
      message: "Veranderlike bestaan nie in die omvang nie",
    },
    __SyntaxError: { tag: "SINTAKSIS_FOUT", message: "Ongeldige kode" },
    __RangeError: {
      tag: "REEKS_FOUT",
      message: "Waarde buite die toegelate reeks",
    },
    __URIError: { tag: "URI_FOUT", message: "Wanvormige of ongeldige URI" },
    __EvalError: { tag: "EVAL_FOUT", message: "Fout verwant aan eval" },
  },
}).grammar();
