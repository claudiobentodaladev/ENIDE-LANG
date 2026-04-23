import { Language } from "../grammar.class.js";

export const latviesu = new Language({
  language: "latviesu",
  about: "ENIDE ir tulkojams transpilers, kas lauj programmet jebkura valoda",
  include: {
    main: "Ieklaut",
    __description: "Izmanto, lai iekļautu valodu vai bibliotēkas",
  },
  commands: {
    all: {
      __about: {
        main: "Par",
        __description: "lai iegutu informaciju par ENIDE",
      },
      __help: {
        main: "Palidziba",
        __description: "lai iegutu visu pieejamo komandu sarakstu",
      },
      __version: {
        main: "Versija",
        __description: "lai iegutu pasreizejo ENIDE versiju",
      },
      __languages: {
        main: "Valodas",
        __description: "lai iegutu visu pieejamo valodu sarakstu",
      },
      __documentation: {
        main: "Dokumentacija",
        __description: "lai iegutu valodas dokumentaciju",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "Matematika",
        __description: "lai pieklutu matematikas funkcijam",
      },
      __pi: { main: "Pi", __description: "lai iegutu pi vertibu" },
      __sqrt: {
        main: "Kvadratsakne",
        __description: "lai iegutu kvadratsakni",
      },
      __pow: { main: "Pakape", __description: "lai celtu skaitli pakape" },
      __round: { main: "Noapalot", __description: "lai noapalotu skaitli" },
      __random: {
        main: "Nejaus",
        __description: "lai iegutu nejausu skaitli",
      },
      __max: {
        main: "Maksimums",
        __description: "lai iegutu maksimalo vertibu",
      },
      __min: { main: "Minimums", __description: "lai iegutu minimalo vertibu" },
      __isNumber: {
        main: "IrSkaitlis",
        __description: "lai parbauditu vai vertiba ir skaitlis",
      },
      __isInteger: {
        main: "IrVesels",
        __description: "lai parbauditu vai vertiba ir vesels skaitlis",
      },
      __isFloat: {
        main: "IrDecimalaSkaitlis",
        __description: "lai parbauditu vai vertiba ir decimalskaitlis",
      },
    },
    __string: {
      main: {
        main: "Virkne",
        __description: "lai pieklutu virknes manipulesanas funkcijam",
      },
      __length: { main: "Garums", __description: "lai iegutu virknes garumu" },
      __toUpperCase: {
        main: "UzLielajiem",
        __description: "parverst virkni uz lielajiem burtiem",
      },
      __toLowerCase: {
        main: "UzMazajiem",
        __description: "parverst virkni uz mazajiem burtiem",
      },
    },
    __date: {
      main: {
        main: "Datums",
        __description: "lai pieklutu datuma un laika funkcijam",
      },
      __year: { main: "Gads", __description: "lai iegutu gadu" },
      __month: { main: "Menesis", __description: "lai iegutu menesi" },
      __dayMonth: {
        main: "MenesaDiena",
        __description: "lai iegutu menesa dienu",
      },
      __dayWeek: {
        main: "NedelasDiena",
        __description: "lai iegutu nedelas dienu",
      },
      __hour: { main: "Stunda", __description: "lai iegutu stundu" },
      __minute: { main: "Minute", __description: "lai iegutu minuti" },
      __second: { main: "Sekunde", __description: "lai iegutu sekundi" },
    },
  },
  types: {
    __object: {
      main: "Objekts",
      __description: "lai deklaretu statisku objektu",
    },
    __number: {
      main: "Skaitlis",
      __description: "lai deklaretu skaitla tipa mainigo",
    },
    __string: {
      main: "Virkne",
      __description: "lai deklaretu virknes tipa mainigo",
    },
    __boolean: {
      main: "Bools",
      values: { __true: "Patiess", __false: "Aplams" },
      __description: "lai deklaretu logiska tipa mainigo",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Drukat",
        __description: "lai izvaditu vertibu uz ekrana",
      },
      __scan: { main: "Lasit", __description: "lai lasitu vertibu no ievades" },
      __return: {
        main: "Atgriezt",
        __description: "lai atgrieztu vertibu no funkcijas",
      },
    },
    sentences: {
      __function: { main: "Funkcija", __description: "lai deklaretu funkciju" },
      __if: { main: "Ja", __description: "lai deklaretu nosacijumu" },
      __else: {
        main: "Citadi",
        __description: "lai deklaretu alternativu nosacijumu",
      },
      __while: { main: "Kamer", __description: "lai deklaretu kamer ciklu" },
      __for: { main: "Cikls", __description: "lai deklaretu ciklu" },
      __switch: {
        main: "Izvele",
        __description: "lai deklaretu atlases strukturu",
      },
      __case: {
        main: "Gadijums",
        __description: "lai deklaretu gadijumu atlases struktura",
      },
      __default: {
        main: "Noklusejuma",
        __description: "lai deklaretu noklusējuma gadijumu",
      },
      __try: { main: "Meginat", __description: "lai deklaretu meginat bloku" },
      __catch: {
        main: "Kert",
        __description: "lai deklaretu kludu apstrades bloku",
      },
      __finally: {
        main: "Beigas",
        __description: "lai deklaretu bloku kas izpildas vienmer",
      },
    },
  },
  errors: {
    main: { tag: "KLUDA", message: "Sistemas kluda" },
    __UNKNOWN_ERROR: {
      tag: "NEZINAMA_KLUDA",
      message: "Pilnigi nezinama kluda",
    },
    __TypeError: { tag: "TIPA_KLUDA", message: "Nederigs tips operacija" },
    __ReferenceError: {
      tag: "ATSAUCES_KLUDA",
      message: "Mainigais neeksiste apjoma",
    },
    __SyntaxError: { tag: "SINTAKSES_KLUDA", message: "Nederigs kods" },
    __RangeError: {
      tag: "DIAPAZONA_KLUDA",
      message: "Vertiba arpus atlauta diapazona",
    },
    __URIError: {
      tag: "URI_KLUDA",
      message: "Slikti formets vai nederigs URI",
    },
    __EvalError: { tag: "EVAL_KLUDA", message: "Kluda saistiba ar eval" },
  },
}).grammar();
