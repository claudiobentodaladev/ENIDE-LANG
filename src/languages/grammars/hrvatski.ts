import { Language } from "../grammar.class.js";

export const hrvatski = new Language({
  language: "hrvatski",
  about:
    "ENIDE je prevodivi transpiler koji omogucuje programiranje na bilo kojem jeziku",
  include: {
    main: "Ukljuci",
    __description: "Koristi se za uključivanje jezika ili knjižnica",
  },
  commands: {
    all: {
      __about: {
        main: "o",
        __description: "za dobivanje informacija o ENIDE",
      },
      __help: {
        main: "pomoc",
        __description: "za dobivanje popisa svih dostupnih naredbi",
      },
      __version: {
        main: "verzija",
        __description: "za dobivanje trenutne verzije ENIDE",
      },
      __languages: {
        main: "jezici",
        __description: "za dobivanje popisa svih dostupnih jezika",
      },
      __documentation: {
        main: "dok",
        __description: "za dobivanje dokumentacije za jezik",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "za pristup matematickim funkcijama",
      },
      __pi: {
        main: "PI",
        __description: "za dobivanje vrijednosti pi",
      },
      __sqrt: {
        main: "KvadratniKorijen",
        __description: "za dobivanje kvadratnog korijena",
      },
      __pow: {
        main: "Potencija",
        __description: "za dobivanje potencije broja",
      },
      __round: {
        main: "Zaokruzi",
        __description: "za zaokruzivanje broja",
      },
      __random: {
        main: "Slucajno",
        __description: "za dobivanje slucajnog broja",
      },
      __max: {
        main: "Maksimum",
        __description: "za dobivanje maksimalne vrijednosti",
      },
      __min: {
        main: "Minimum",
        __description: "za dobivanje minimalne vrijednosti",
      },
      __isNumber: {
        main: "JeBroj",
        __description: "za provjeru je li vrijednost broj",
      },
      __isInteger: {
        main: "JeCijeli",
        __description: "za provjeru je li vrijednost cijeli broj",
      },
      __isFloat: {
        main: "JeDecimalan",
        __description: "za provjeru je li vrijednost decimalni broj",
      },
    },
    __string: {
      main: {
        main: "niz",
        __description: "za pristup funkcijama manipulacije nizovima",
      },
      __length: {
        main: "Duljina",
        __description: "za dobivanje duljine niza",
      },
      __toUpperCase: {
        main: "NaVelike",
        __description: "za pretvaranje niza u velika slova",
      },
      __toLowerCase: {
        main: "NaMala",
        __description: "za pretvaranje niza u mala slova",
      },
    },
    __date: {
      main: {
        main: "datum",
        __description: "za pristup funkcijama datuma i vremena",
      },
      __year: {
        main: "Godina",
        __description: "za dobivanje godine",
      },
      __month: {
        main: "Mjesec",
        __description: "za dobivanje mjeseca",
      },
      __dayMonth: {
        main: "DanMjeseca",
        __description: "za dobivanje dana u mjesecu",
      },
      __dayWeek: {
        main: "DanTjedna",
        __description: "za dobivanje dana u tjednu",
      },
      __hour: {
        main: "Sat",
        __description: "za dobivanje sata",
      },
      __minute: {
        main: "Minuta",
        __description: "za dobivanje minute",
      },
      __second: {
        main: "Sekunda",
        __description: "za dobivanje sekunde",
      },
    },
  },
  types: {
    __object: {
      main: "objekt",
      __description: "za deklariranje statickog objekta",
    },
    __number: {
      main: "broj",
      __description: "za deklariranje varijable tipa broj",
    },
    __string: {
      main: "niz",
      __description: "za deklariranje varijable tipa niz",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Tocno", __false: "Netocno" },
      __description: "za deklariranje varijable tipa logicki",
    },
  },
  methods: {
    method: {
      __print: {
        main: "ispisi",
        __description: "za ispis vrijednosti na zaslon",
      },
      __scan: {
        main: "ucitaj",
        __description: "za ucitavanje vrijednosti s ulaza",
      },
      __return: {
        main: "vrati",
        __description: "za vracanje vrijednosti iz funkcije",
      },
    },
    sentences: {
      __function: {
        main: "funkcija",
        __description: "za deklariranje funkcije",
      },
      __if: {
        main: "ako",
        __description: "za deklariranje uvjeta",
      },
      __else: {
        main: "inace",
        __description: "za deklariranje alternativnog uvjeta",
      },
      __while: {
        main: "dok",
        __description: "za deklariranje petlje dok",
      },
      __for: {
        main: "za",
        __description: "za deklariranje petlje za",
      },
      __switch: {
        main: "odabir",
        __description: "za deklariranje strukture odabira",
      },
      __case: {
        main: "slucaj",
        __description: "za deklariranje slucaja u strukturi odabira",
      },
      __default: {
        main: "zadano",
        __description: "za deklariranje zadanog slucaja u strukturi odabira",
      },
      __try: {
        main: "pokusaj",
        __description: "za deklariranje bloka pokusaj",
      },
      __catch: {
        main: "uhvati",
        __description: "za deklariranje bloka za rukovanje greskama",
      },
      __finally: {
        main: "konacno",
        __description: "za deklariranje bloka koji se uvijek izvrsava",
      },
    },
  },
  errors: {
    main: { tag: "GRESKA", message: "Opca sistemska greska" },
    __UNKNOWN_ERROR: {
      tag: "NEPOZNATA_GRESKA",
      message: "Potpuno nepoznata greska",
    },
    __TypeError: { tag: "GRESKA_TIPA", message: "Nevazeci tip u operaciji" },
    __ReferenceError: {
      tag: "GRESKA_REFERENCE",
      message: "Varijabla ne postoji u opsegu",
    },
    __SyntaxError: { tag: "GRESKA_SINTAKSE", message: "Nevazeci kod" },
    __RangeError: {
      tag: "GRESKA_RASPONA",
      message: "Vrijednost izvan dozvoljenog raspona",
    },
    __URIError: {
      tag: "GRESKA_URI",
      message: "Lose oblikovani ili nevazeci URI",
    },
    __EvalError: { tag: "GRESKA_EVAL", message: "Greska vezana uz eval" },
  },
}).grammar();
