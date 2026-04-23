import { Language } from "../grammar.class.js";

export const srpski = new Language({
  language: "srpski",
  about:
    "ENIDE je prevodivi transpajler koji omogucava programiranje na bilo kom jeziku",

  include: {
    main: "Ukljuci",
    __description: "Koristi se za ukljucivanje jezika ili biblioteka",
  },

  commands: {
    all: {
      __about: {
        main: "oprogramu",
        __description: "za dobijanje informacija o ENIDE-u",
      },
      __help: {
        main: "pomoc",
        __description: "za listu svih dostupnih komandi",
      },
      __version: {
        main: "verzija",
        __description: "za trenutnu verziju ENIDE-a",
      },
      __languages: {
        main: "jezici",
        __description: "za listu svih dostupnih jezika",
      },
      __documentation: {
        main: "dokumentacija",
        __description: "za dokumentaciju jezika",
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
        __description: "za vrednost broja pi",
      },
      __sqrt: {
        main: "KvadratniKoren",
        __description: "za kvadratni koren",
      },
      __pow: {
        main: "Stepen",
        __description: "za stepenovanje broja",
      },
      __round: {
        main: "Zaokruzi",
        __description: "za zaokruzivanje broja",
      },
      __random: {
        main: "Nasumicno",
        __description: "za nasumicni broj",
      },
      __max: {
        main: "Maks",
        __description: "za maksimalnu vrednost",
      },
      __min: {
        main: "Min",
        __description: "za minimalnu vrednost",
      },
      __isNumber: {
        main: "JeBroj",
        __description: "provera da li je vrednost broj",
      },
      __isInteger: {
        main: "JeCeoBroj",
        __description: "provera da li je vrednost ceo broj",
      },
      __isFloat: {
        main: "JeDecimalniBroj",
        __description: "provera da li je vrednost decimalni broj",
      },
    },

    __string: {
      main: {
        main: "niska",
        __description: "za funkcije manipulacije tekstom",
      },
      __length: {
        main: "Duzina",
        __description: "za duzinu niske",
      },
      __toUpperCase: {
        main: "VelikaSlova",
        __description: "pretvori u velika slova",
      },
      __toLowerCase: {
        main: "MalaSlova",
        __description: "pretvori u mala slova",
      },
    },

    __date: {
      main: {
        main: "datum",
        __description: "za funkcije manipulacije datumom i vremenom",
      },
      __year: {
        main: "Godina",
        __description: "za godinu",
      },
      __month: {
        main: "Mesec",
        __description: "za mesec",
      },
      __dayMonth: {
        main: "DanUMesecu",
        __description: "za dan u mesecu",
      },
      __dayWeek: {
        main: "DanUNedelji",
        __description: "za dan u nedelji",
      },
      __hour: {
        main: "Sat",
        __description: "za sat",
      },
      __minute: {
        main: "Minut",
        __description: "za minut",
      },
      __second: {
        main: "Sekund",
        __description: "za sekund",
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
      __description: "za deklaraciju promenljive tipa broj",
    },
    __string: {
      main: "tekst",
      __description: "za deklaraciju promenljive tipa tekst",
    },
    __boolean: {
      main: "logicki",
      values: { __true: "Tacno", __false: "Netacno" },
      __description: "za deklaraciju logickog tipa",
    },
  },

  methods: {
    method: {
      __print: {
        main: "ispisi",
        __description: "za ispis vrednosti na ekran",
      },
      __scan: {
        main: "ucitaj",
        __description: "za citanje vrednosti sa ulaza",
      },
      __return: {
        main: "vrati",
        __description: "za vracanje vrednosti iz funkcije",
      },
    },

    sentences: {
      __function: {
        main: "funkcija",
        __description: "za deklaraciju funkcije",
      },
      __if: {
        main: "ako",
        __description: "za uslov",
      },
      __else: {
        main: "inace",
        __description: "alternativni uslov",
      },
      __while: {
        main: "dok",
        __description: "while petlja",
      },
      __for: {
        main: "za",
        __description: "for petlja",
      },
      __switch: {
        main: "prebaci",
        __description: "switch struktura",
      },
      __case: {
        main: "slucaj",
        __description: "case u switch-u",
      },
      __default: {
        main: "podrazumevano",
        __description: "default slucaj",
      },
      __try: {
        main: "pokusaj",
        __description: "try blok",
      },
      __catch: {
        main: "uhvati",
        __description: "catch blok",
      },
      __finally: {
        main: "konacno",
        __description: "finally blok",
      },
    },
  },

  errors: {
    main: {
      tag: "GRESKA",
      message: "Opsta sistemska greska",
    },
    __UNKNOWN_ERROR: {
      tag: "NEPOZNATA_GRESKA",
      message: "Potpuno nepoznata greska",
    },
    __TypeError: {
      tag: "GRESKA_TIPA",
      message: "Nevazeci tip u operaciji",
    },
    __ReferenceError: {
      tag: "GRESKA_REFERENCE",
      message: "Promenljiva ne postoji u opsegu",
    },
    __SyntaxError: {
      tag: "SINTAKSNA_GRESKA",
      message: "Nevazeci kod",
    },
    __RangeError: {
      tag: "GRESKA_OPSEGA",
      message: "Vrednost je van dozvoljenog opsega",
    },
    __URIError: {
      tag: "URI_GRESKA",
      message: "Lose formiran URI",
    },
    __EvalError: {
      tag: "EVAL_GRESKA",
      message: "Greska povezana sa eval",
    },
  },
}).grammar();
