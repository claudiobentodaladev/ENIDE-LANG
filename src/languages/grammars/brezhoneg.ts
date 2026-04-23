import { Language } from "../grammar.class.js";

export const brezhoneg = new Language({
  language: "brezhoneg",
  about: "ENIDE a zo un treuzdouger a aotre programmman e n'eus forzh pe yezh",
  include: {
    main: "Enderc'hel",
    __description: "Implijet evit enderc'hel yezhoù pe levraouegoù.",
  },
  commands: {
    all: {
      __about: {
        main: "diwar_benn",
        __description: "evit kaout titouroù diwar-benn ENIDE",
      },
      __help: {
        main: "skoazell",
        __description: "evit kaout roll an holl urzhioù hegerz",
      },
      __version: { main: "stumm", __description: "evit kaout stumm red ENIDE" },
      __languages: {
        main: "yezhoù",
        __description: "evit kaout roll an holl yezhoù hegerz",
      },
      __documentation: {
        main: "teuliadur",
        __description: "evit kaout an teuliadur evit ur yezh",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematik",
        __description: "evit tizhout an arc'hwelioù matematik",
      },
      __pi: { main: "PI", __description: "evit kaout talvoudenn pi" },
      __sqrt: {
        main: "Gwrizienn",
        __description: "evit kaout ar wrizienn garrez",
      },
      __pow: { main: "Galloud", __description: "evit kaout galloud un niver" },
      __round: { main: "Krennañ", __description: "evit krennañ un niver" },
      __random: {
        main: "Dre_zegouezh",
        __description: "evit kaout un niver dre zegouezh",
      },
      __max: {
        main: "Uc'hek",
        __description: "evit kaout an dalvoudenn uc'hek",
      },
      __min: { main: "Izek", __description: "evit kaout an dalvoudenn izek" },
      __isNumber: {
        main: "UnNiverEo",
        __description: "evit gwiriañ m'eo un niver",
      },
      __isInteger: {
        main: "UnNiverKealEo",
        __description: "evit gwiriañ m'eo un niver keal",
      },
      __isFloat: {
        main: "UnNiverDekredEo",
        __description: "evit gwiriañ m'eo un niver dekred",
      },
    },
    __string: {
      main: {
        main: "chadennoù",
        __description: "evit kemmañ chadennoù testenn",
      },
      __length: { main: "Hed", __description: "evit kaout hed ar chadennoù" },
      __toUpperCase: {
        main: "EPennlizherennoù",
        __description: "lakaat ar chadennoù e pennlizherennoù",
      },
      __toLowerCase: {
        main: "ELizherennoùBihan",
        __description: "lakaat ar chadennoù e lizherennoù bihan",
      },
    },
    __date: {
      main: {
        main: "deiziad",
        __description: "evit kemmañ deiziadoù hag eurioù",
      },
      __year: { main: "Bloaz", __description: "evit kaout ar bloaz" },
      __month: { main: "Miz", __description: "evit kaout ar miz" },
      __dayMonth: { main: "DeizMiz", __description: "evit kaout deiz ar miz" },
      __dayWeek: {
        main: "DeizSizhun",
        __description: "evit kaout deiz ar sizhun",
      },
      __hour: { main: "Eur", __description: "evit kaout an eur" },
      __minute: { main: "Munut", __description: "evit kaout ar munut" },
      __second: { main: "Eilenn", __description: "evit kaout an eilenn" },
    },
  },
  types: {
    __object: { main: "tra", __description: "da ziskleria ur tra statis" },
    __number: {
      main: "niver",
      __description: "evit diskleriañ ur variabilell niver",
    },
    __string: {
      main: "chadenn",
      __description: "evit diskleriañ ur variabilell chadenn",
    },
    __boolean: {
      main: "booleen",
      values: {
        __true: "Gwir",
        __false: "Gaou",
      },
      __description: "evit diskleriañ ur variabilell booleen",
    },
  },
  methods: {
    method: {
      __print: {
        main: "moullañ",
        __description: "evit diskouez un dalvoudenn war ar skramm",
      },
      __scan: { main: "lenn", __description: "evit lenn un dalvoudenn" },
      __return: {
        main: "distreiñ",
        __description: "evit distreiñ un dalvoudenn gant un arc'hwel",
      },
    },
    sentences: {
      __function: {
        main: "arc'hwel",
        __description: "evit diskleriañ un arc'hwel",
      },
      __if: { main: "ma", __description: "evit diskleriañ ur reolenn" },
      __else: {
        main: "a_hend_all",
        __description: "evit diskleriañ ur reolenn all",
      },
      __while: {
        main: "keit_ha",
        __description: "evit diskleriañ ur rodell keit ha",
      },
      __for: { main: "evit", __description: "evit diskleriañ ur rodell evit" },
      __switch: {
        main: "dibab",
        __description: "evit diskleriañ ur framm dibab",
      },
      __case: {
        main: "degouezh",
        __description: "evit diskleriañ un degouezh",
      },
      __default: {
        main: "dre_ziouer",
        __description: "evit diskleriañ an degouezh dre ziouer",
      },
      __try: { main: "esa", __description: "evit diskleriañ ur bloc'had esa" },
      __catch: {
        main: "tapout",
        __description: "evit diskleriañ ur bloc'had manaj kludoù",
      },
      __finally: {
        main: "er_fin",
        __description: "evit ur bloc'had a vez renet d'ar fin",
      },
    },
  },
  errors: {
    main: { tag: "KLUD", message: "Klud reizhiad hollek" },
    __UNKNOWN_ERROR: {
      tag: "KLUD_DIANAV",
      message: "Klud dianav penn-da-benn",
    },
    __TypeError: { tag: "KLUD_STUMM", message: "Stumm direizh en oberiadur" },
    __ReferenceError: {
      tag: "KLUD_DEVEZ",
      message: "N'eus ket eus ar variabilell-se",
    },
    __SyntaxError: { tag: "KLUD_SINTAKS", message: "Kod direizh" },
    __RangeError: {
      tag: "KLUD_LECH",
      message: "Talvoudenn er-maez d'al lec'h aotreet",
    },
    __URIError: { tag: "KLUD_URI", message: "URI fallstummmet pe direizh" },
    __EvalError: { tag: "KLUD_EVAL", message: "Klud liammet ouzh eval" },
  },
}).grammar();
