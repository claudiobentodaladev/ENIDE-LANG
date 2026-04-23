import { Language } from "../grammar.class.js";

export const arabitchad = new Language({
  language: "arabitchad",
  about: "ENIDE hu transpayler bi khali-k tusawi barmaja bi ay luga",
  include: {
    main: "Tadmin",
    __description: "Mustamal li-taqrib al-lugha wala al-makatib",
  },
  commands: {
    all: {
      __about: {
        main: "fi_shaana",
        __description: "ashan talga khabar fi ENIDE",
      },
      __help: {
        main: "musaada",
        __description: "ashan talga lamat kulla al-awamir",
      },
      __version: {
        main: "nuskha",
        __description: "ashan talga nuskha al-leyla le ENIDE",
      },
      __languages: {
        main: "lugaat",
        __description: "ashan talga lamat al-lugaat kulla",
      },
      __documentation: {
        main: "waraqa",
        __description: "ashan talga waraqat al-luga",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "riyadiyat",
        __description: "ashan tukhul fi khidmet al-riyadiyat",
      },
      __pi: { main: "PI", __description: "ashan talga gimat pi" },
      __sqrt: { main: "jidr", __description: "ashan talga al-jidr" },
      __pow: { main: "guwa", __description: "ashan talga guwat al-numra" },
      __round: { main: "dawwir", __description: "ashan dawwir al-numra" },
      __random: { main: "balash", __description: "ashan talga numra balash" },
      __max: { main: "kabir", __description: "ashan talga gima al-kabira" },
      __min: { main: "sagir", __description: "ashan talga gima al-sagira" },
      __isNumber: {
        main: "huwa_numra",
        __description: "ashan tshuf hu numra wala la",
      },
      __isInteger: {
        main: "huwa_kamir",
        __description: "ashan tshuf hu numra kamir",
      },
      __isFloat: {
        main: "huwa_fata",
        __description: "ashan tshuf hu numra fata",
      },
    },
    __string: {
      main: { main: "kalam", __description: "khidmet tartib al-kalam" },
      __length: { main: "tul", __description: "ashan talga tul al-kalam" },
      __toUpperCase: {
        main: "harf_kabir",
        __description: "khalli al-kalam bi harf kabir",
      },
      __toLowerCase: {
        main: "harf_sagir",
        __description: "khalli al-kalam bi harf sagir",
      },
    },
    __date: {
      main: { main: "tarix", __description: "khidmet al-tarix wa al-saat" },
      __year: { main: "sana", __description: "ashan talga al-sana" },
      __month: { main: "shahar", __description: "ashan talga al-shahar" },
      __dayMonth: {
        main: "yom_shahar",
        __description: "ashan talga yom al-shahar",
      },
      __dayWeek: { main: "yom_usbu", __description: "ashan talga yom al-usbu" },
      __hour: { main: "saa", __description: "ashan talga al-saa" },
      __minute: { main: "dagiga", __description: "ashan talga al-dagiga" },
      __second: { main: "saniya", __description: "ashan talga al-saniya" },
    },
  },
  types: {
    __object: { main: "kayin", __description: "li-iilan kayin thabit" },
    __number: { main: "numra", __description: "ashan khalli numra" },
    __string: { main: "kalam", __description: "ashan khalli kalam" },
    __boolean: {
      main: "sahi",
      values: {
        __true: "Sah",
        __false: "Kizib",
      },
      __description: "ashan khalli sahi wala kadib",
    },
  },
  methods: {
    method: {
      __print: {
        main: "uktub",
        __description: "ashan talga al-gima fi al-shasha",
      },
      __scan: { main: "agura", __description: "ashan agura al-gima" },
      __return: {
        main: "rajji",
        __description: "ashan rajji gima min al-khidma",
      },
    },
    sentences: {
      __function: { main: "khidma", __description: "ashan tasawi khidma" },
      __if: { main: "kan", __description: "ashan tasawi shart" },
      __else: { main: "wala_kan", __description: "ashan tasawi shart tani" },
      __while: { main: "tula", __description: "ashan tasawi dawran tula" },
      __for: {
        main: "li_kulli",
        __description: "ashan tasawi dawran li_kulli",
      },
      __switch: {
        main: "ikhter",
        __description: "ashan tasawi tartib al-ikhtiyar",
      },
      __case: { main: "hala", __description: "hala fi tartib al-ikhtiyar" },
      __default: { main: "asli", __description: "hala al-asliya" },
      __try: { main: "jarrub", __description: "ashan jarrub al-shugal" },
      __catch: { main: "amsuk", __description: "ashan amsuk al-khata" },
      __finally: {
        main: "fi_al_akhir",
        __description: "shugal bi-tam kulla al-halaat",
      },
    },
  },
  errors: {
    main: { tag: "KHATA", message: "Khata min al-sistem" },
    __UNKNOWN_ERROR: {
      tag: "KHATA_MA_MAARUF",
      message: "Khata ma maaruf kulla",
    },
    __TypeError: { tag: "KHATA_AL_NOW", message: "Now ma sahi fi al-shugal" },
    __ReferenceError: { tag: "KHATA_AL_MARJI", message: "Al-shugal ma fi" },
    __SyntaxError: { tag: "KHATA_AL_KATTAB", message: "Kattab ma sahi" },
    __RangeError: { tag: "KHATA_AL_HAD", message: "Al-gima fatat al-had" },
    __URIError: { tag: "KHATA_AL_URI", message: "URI khata" },
    __EvalError: { tag: "KHATA_AL_EVAL", message: "Khata fi eval" },
  },
}).grammar();
