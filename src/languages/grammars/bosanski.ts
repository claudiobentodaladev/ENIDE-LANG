import { Language } from "../grammar.class.js";

export const bosanski = new Language({
  language: "bosanski",
  about:
    "ENIDE je prevodivi transpiler koji omogucava programiranje na bilo kojem jeziku",
  include: {
    main: "Ukljuci",
    __description: "Koristi se za uključivanje jezika ili biblioteka",
  },
  commands: {
    all: {
      __about: {
        main: "o",
        __description: "za dobijanje informacija o ENIDE",
      },
      __help: {
        main: "pomoc",
        __description: "za dobijanje liste svih dostupnih naredbi",
      },
      __version: {
        main: "verzija",
        __description: "za dobijanje trenutne verzije ENIDE",
      },
      __languages: {
        main: "jezici",
        __description: "za dobijanje liste svih dostupnih jezika",
      },
      __documentation: {
        main: "dok",
        __description: "za dobijanje dokumentacije za jezik",
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
        __description: "za dobijanje vrijednosti pi",
      },
      __sqrt: {
        main: "KvadratniKorijen",
        __description: "za dobijanje kvadratnog korijena",
      },
      __pow: {
        main: "Stepen",
        __description: "za dobijanje stepena broja",
      },
      __round: {
        main: "Zaokruzi",
        __description: "za zaokruzivanje broja",
      },
      __random: {
        main: "Slucajno",
        __description: "za dobijanje slucajnog broja",
      },
      __max: {
        main: "Maksimum",
        __description: "za dobijanje maksimalne vrijednosti",
      },
      __min: {
        main: "Minimum",
        __description: "za dobijanje minimalne vrijednosti",
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
        main: "Duzina",
        __description: "za dobijanje duzine niza",
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
        __description: "za dobijanje godine",
      },
      __month: {
        main: "Mjesec",
        __description: "za dobijanje mjeseca",
      },
      __dayMonth: {
        main: "DanMjeseca",
        __description: "za dobijanje dana u mjesecu",
      },
      __dayWeek: {
        main: "DanSedmice",
        __description: "za dobijanje dana u sedmici",
      },
      __hour: {
        main: "Sat",
        __description: "za dobijanje sata",
      },
      __minute: {
        main: "Minuta",
        __description: "za dobijanje minute",
      },
      __second: {
        main: "Sekunda",
        __description: "za dobijanje sekunde",
      },
    },
  },
  types: {
    __object: {
      main: "objekat",
      __description: "za deklarisanje statickog objekta",
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
      values: {
        __true: "Tacno",
        __false: "Netacno",
      },
      __description: "za deklariranje varijable tipa logicki",
    },
  },
  methods: {
    method: {
      __print: {
        main: "ispisi",
        __description: "za ispis vrijednosti na ekran",
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
