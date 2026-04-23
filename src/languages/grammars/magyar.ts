import { Language } from "../grammar.class.js";

export const magyar = new Language({
  language: "magyar",
  about:
    "Az ENIDE egy fordithato transzpiler, amely barmilyen nyelven lehetove teszi a programozast",
  include: {
    main: "Beillesztes",
    __description: "Nyelv vagy könyvtárak beillesztésére szolgál",
  },
  commands: {
    all: {
      __about: {
        main: "Nevjegy",
        __description: "informacio az ENIDE-rol",
      },
      __help: {
        main: "Segitseg",
        __description: "az osszes elerheto parancs listaja",
      },
      __version: {
        main: "Verzio",
        __description: "az ENIDE aktualis verzioja",
      },
      __languages: {
        main: "Nyelvek",
        __description: "az osszes elerheto nyelv listaja",
      },
      __documentation: {
        main: "Dokumentacio",
        __description: "egy nyelv dokumentacioja",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "Matematika",
        __description: "matematikai funkciok elerese",
      },
      __pi: {
        main: "Pi",
        __description: "a pi erteke",
      },
      __sqrt: {
        main: "Gyok",
        __description: "negyzetgyok szamitasa",
      },
      __pow: {
        main: "Hatvany",
        __description: "szam hatvanyozasa",
      },
      __round: {
        main: "Kerekit",
        __description: "szam kerekitese",
      },
      __random: {
        main: "Veletlen",
        __description: "veletlen szam generalasa",
      },
      __max: {
        main: "Legnagyobb",
        __description: "maximalis ertek",
      },
      __min: {
        main: "Legkisebb",
        __description: "minimalis ertek",
      },
      __isNumber: {
        main: "SzamE",
        __description: "ellenorzi, hogy az ertek szam-e",
      },
      __isInteger: {
        main: "EgeszE",
        __description: "ellenorzi, hogy az ertek egesz szam-e",
      },
      __isFloat: {
        main: "TizedesE",
        __description: "ellenorzi, hogy az ertek tizedes szam-e",
      },
    },
    __string: {
      main: {
        main: "Szoveg",
        __description: "szovegkezelo funkciok elerese",
      },
      __length: {
        main: "Hossz",
        __description: "szoveg hossza",
      },
      __toUpperCase: {
        main: "Nagybetu",
        __description: "szoveg nagybetusse alakitasa",
      },
      __toLowerCase: {
        main: "Kisbetu",
        __description: "szoveg kisbetusse alakitasa",
      },
    },
    __date: {
      main: {
        main: "Datum",
        __description: "datum- es idokezelo funkciok elerese",
      },
      __year: {
        main: "Ev",
        __description: "ev lekerdezese",
      },
      __month: {
        main: "Honap",
        __description: "honap lekerdezese",
      },
      __dayMonth: {
        main: "HonapNapja",
        __description: "a honap napja",
      },
      __dayWeek: {
        main: "HetNapja",
        __description: "a het napja",
      },
      __hour: {
        main: "Ora",
        __description: "ora lekerdezese",
      },
      __minute: {
        main: "Perc",
        __description: "perc lekerdezese",
      },
      __second: {
        main: "Masodperc",
        __description: "masodperc lekerdezese",
      },
    },
  },
  types: {
    __object: {
      main: "Objektum",
      __description: "statikus objektum deklaralasahoz",
    },
    __number: {
      main: "Szam",
      __description: "szam tipusu valtozo deklaralasa",
    },
    __string: {
      main: "Szoveg",
      __description: "szoveg tipusu valtozo deklaralasa",
    },
    __boolean: {
      main: "Logikai",
      values: { __true: "Igaz", __false: "Hamis" },
      __description: "logikai tipusu valtozo deklaralasa",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Kiir",
        __description: "ertek kiirasa a kepernyore",
      },
      __scan: {
        main: "Beolvas",
        __description: "ertek beolvasasa a bemenetrol",
      },
      __return: {
        main: "Visszater",
        __description: "ertek visszadasa egy fuggvenybol",
      },
    },
    sentences: {
      __function: {
        main: "Fuggveny",
        __description: "fuggveny deklaralasa",
      },
      __if: {
        main: "Ha",
        __description: "feltetel deklaralasa",
      },
      __else: {
        main: "Kulonben",
        __description: "alternativ feltetel deklaralasa",
      },
      __while: {
        main: "Amig",
        __description: "while ciklus deklaralasa",
      },
      __for: {
        main: "Ciklus",
        __description: "for ciklus deklaralasa",
      },
      __switch: {
        main: "Valasztas",
        __description: "valasztasi szerkezet deklaralasa",
      },
      __case: {
        main: "Eset",
        __description: "egy eset deklaralasa a szerkezetben",
      },
      __default: {
        main: "Alapertelmezett",
        __description: "alapertelmezett eset deklaralasa",
      },
      __try: {
        main: "Probal",
        __description: "try blokk deklaralasa",
      },
      __catch: {
        main: "Elkap",
        __description: "hibakezelo blokk deklaralasa",
      },
      __finally: {
        main: "Vegezetul",
        __description: "mindenkeppen lefutto blokk deklaralasa",
      },
    },
  },
  errors: {
    main: {
      tag: "HIBA",
      message: "Altalanos rendszerhiba",
    },
    __UNKNOWN_ERROR: {
      tag: "ISMERETLEN_HIBA",
      message: "Teljesen ismeretlen hiba",
    },
    __TypeError: {
      tag: "TIPUS_HIBA",
      message: "Ervenytelen tipus a muveletben",
    },
    __ReferenceError: {
      tag: "HIVATKOZAS_HIBA",
      message: "A valtozo nem letezik a hatokorben",
    },
    __SyntaxError: {
      tag: "SZINTAXIS_HIBA",
      message: "Ervenytelen kod",
    },
    __RangeError: {
      tag: "TARTOMANY_HIBA",
      message: "Az ertek kivul esik a megengedett tartomanyon",
    },
    __URIError: {
      tag: "URI_HIBA",
      message: "Hibas vagy ervenytelen URI",
    },
    __EvalError: {
      tag: "EVAL_HIBA",
      message: "Eval fuggvennyel kapcsolatos hiba",
    },
  },
}).grammar();
