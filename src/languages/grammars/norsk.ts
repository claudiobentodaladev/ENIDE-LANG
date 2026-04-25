import { Language } from "../grammar.class.js";

export const norsk = new Language({
  language: "norsk",
  about:
    "ENIDE er en oversettbar transpiler som gjør det mulig å programmere på ethvert språk",
  include: {
    main: "Inkluder",
    __description: "Brukes til å inkludere språk eller biblioteker",
  },
  commands: {
    all: {
      __about: {
        main: "om",
        __description: "for å få informasjon om ENIDE",
      },
      __help: {
        main: "hjelp",
        __description: "for å få en liste over alle tilgjengelige kommandoer",
      },
      __version: {
        main: "versjon",
        __description: "for å få den gjeldende versjonen av ENIDE",
      },
      __languages: {
        main: "sprak",
        __description: "for å få en liste over alle tilgjengelige språk",
      },
      __documentation: {
        main: "dok",
        __description: "for å få dokumentasjon for et språk",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematikk",
        __description: "for å få tilgang til matematiske funksjoner",
      },
      __pi: {
        main: "PI",
        __description: "for å få verdien av pi",
      },
      __sqrt: {
        main: "Kvadratrot",
        __description: "for å få kvadratroten",
      },
      __pow: {
        main: "Potens",
        __description: "for å få potensen av et tall",
      },
      __round: {
        main: "Avrund",
        __description: "for å avrunde et tall",
      },
      __random: {
        main: "Tilfeldig",
        __description: "for å få et tilfeldig tall",
      },
      __max: {
        main: "Maksimum",
        __description: "for å få den maksimale verdien",
      },
      __min: {
        main: "Minimum",
        __description: "for å få den minimale verdien",
      },
      __isNumber: {
        main: "ErTall",
        __description: "for å sjekke om en verdi er et tall",
      },
      __isInteger: {
        main: "ErHeltall",
        __description: "for å sjekke om en verdi er et heltall",
      },
      __isFloat: {
        main: "ErDesimal",
        __description: "for å sjekke om en verdi er et desimaltall",
      },
    },
    __string: {
      main: {
        main: "tekst",
        __description: "for å få tilgang til tekstmanipuleringsfunksjoner",
      },
      __length: {
        main: "Lengde",
        __description: "for å få lengden på en tekst",
      },
      __toUpperCase: {
        main: "TilStore",
        __description: "for å konvertere en tekst til store bokstaver",
      },
      __toLowerCase: {
        main: "TilSma",
        __description: "for å konvertere en tekst til små bokstaver",
      },
    },
    __date: {
      main: {
        main: "dato",
        __description: "for å få tilgang til dato- og tidsfunksjoner",
      },
      __year: {
        main: "Ar",
        __description: "for å få året",
      },
      __month: {
        main: "Maned",
        __description: "for å få måneden",
      },
      __dayMonth: {
        main: "DagManed",
        __description: "for å få dagen i måneden",
      },
      __dayWeek: {
        main: "DagUke",
        __description: "for å få dagen i uken",
      },
      __hour: {
        main: "Time",
        __description: "for å få timen",
      },
      __minute: {
        main: "Minutt",
        __description: "for å få minuttet",
      },
      __second: {
        main: "Sekund",
        __description: "for å få sekundet",
      },
    },
  },
  types: {
    __object: {
      main: "objekt",
      __description: "for å deklarere et statisk objekt",
    },
    __number: {
      main: "tall",
      __description: "for å deklarere en variabel av typen tall",
    },
    __string: {
      main: "tekst",
      __description: "for å deklarere en variabel av typen tekst",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Sant", __false: "Usant" },
      __description: "for å deklarere en variabel av typen boolsk",
    },
  },
  methods: {
    method: {
      __print: {
        main: "skriv",
        __description: "for å skrive ut en verdi på skjermen",
      },
      __scan: {
        main: "les",
        __description: "for å lese en verdi fra inndata",
      },
      __return: {
        main: "returner",
        __description: "for å returnere en verdi fra en funksjon",
      },
    },
    sentences: {
      __function: {
        main: "funksjon",
        __description: "for å deklarere en funksjon",
      },
      __if: {
        main: "hvis",
        __description: "for å deklarere en betingelse",
      },
      __else: {
        main: "ellers",
        __description: "for å deklarere en alternativ betingelse",
      },
      __while: {
        main: "mens",
        __description: "for å deklarere en mens-løkke",
      },
      __for: {
        main: "for",
        __description: "for å deklarere en for-løkke",
      },
      __switch: {
        main: "velg",
        __description: "for å deklarere en valgstruktur",
      },
      __case: {
        main: "tilfelle",
        __description: "for å deklarere et tilfelle i valgstrukturen",
      },
      __default: {
        main: "standard",
        __description: "for å deklarere standardtilfellet i valgstrukturen",
      },
      __try: {
        main: "prov",
        __description: "for å deklarere en prøv-blokk",
      },
      __catch: {
        main: "fang",
        __description: "for å deklarere en feilbehandlingsblokk",
      },
      __finally: {
        main: "endelig",
        __description: "for å deklarere en blokk som alltid kjører",
      },
    },
  },
  errors: {
    main: { tag: "FEIL", message: "Generisk systemfeil" },
    __UNKNOWN_ERROR: { tag: "UKJENT_FEIL", message: "Fullstendig ukjent feil" },
    __TypeError: { tag: "TYPE_FEIL", message: "Ugyldig type i operasjonen" },
    __ReferenceError: {
      tag: "REFERANSE_FEIL",
      message: "Variabelen eksisterer ikke i omfanget",
    },
    __SyntaxError: { tag: "SYNTAKS_FEIL", message: "Ugyldig kode" },
    __RangeError: {
      tag: "INTERVALL_FEIL",
      message: "Verdi utenfor tillatt intervall",
    },
    __URIError: { tag: "URI_FEIL", message: "Feilformatert eller ugyldig URI" },
    __EvalError: { tag: "EVAL_FEIL", message: "Feil relatert til eval" },
  },
}).grammar();
