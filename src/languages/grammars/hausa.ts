import { Language } from "../grammar.class.js";

export const hausa = new Language({
  language: "hausa",
  about:
    "ENIDE transpiler ne wanda yake ba da damar rubuta kodi a kowane harshe",
  include: {
    main: "Hadawa",
    __description: "Ana amfani da shi don hada harshe ko dakin karatu",
  },
  commands: {
    all: {
      __about: { main: "game_da", __description: "samun bayani game da ENIDE" },
      __help: { main: "taimako", __description: "ganin jerin duk umarni" },
      __version: {
        main: "fasali",
        __description: "ganin fasalin ENIDE na yanzu",
      },
      __languages: {
        main: "harsuna",
        __description: "ganin jerin duk harsuna",
      },
      __documentation: {
        main: "takardu",
        __description: "samun takardun harshe",
      },
    },
  },
  library: {
    __math: {
      main: { main: "lissafi", __description: "ayyukan lissafi" },
      __pi: { main: "PI", __description: "samun lambar pi" },
      __sqrt: { main: "tushe", __description: "samun tushen lamba" },
      __pow: { main: "iko", __description: "samun ikon lamba" },
      __round: { main: "kewaye", __description: "kewayen lamba" },
      __random: { main: "bazata", __description: "samun lambar bazata" },
      __max: { main: "babba", __description: "lamba mafi girma" },
      __min: { main: "kankane", __description: "lamba mafi kankanta" },
      __isNumber: { main: "lamba_ce", __description: "duba idan lamba ce" },
      __isInteger: {
        main: "cikakkiya_ce",
        __description: "duba idan cikakkiyar lamba ce",
      },
      __isFloat: {
        main: "mai_digo_ce",
        __description: "duba idan tana da digo",
      },
    },
    __string: {
      main: { main: "rubutu", __description: "sarrafa rubutu" },
      __length: { main: "tsawo", __description: "tsawon rubutu" },
      __toUpperCase: {
        main: "babbaku",
        __description: "mayar da rubutu babban baki",
      },
      __toLowerCase: {
        main: "kankanku",
        __description: "mayar da rubutu kankanin baki",
      },
    },
    __date: {
      main: { main: "kwanan_wata", __description: "lokaci da kwanan wata" },
      __year: { main: "shekara", __description: "samun shekara" },
      __month: { main: "wata", __description: "samun wata" },
      __dayMonth: { main: "ranar_wata", __description: "ranar ga wata" },
      __dayWeek: { main: "ranar_mako", __description: "ranar mako" },
      __hour: { main: "awa", __description: "samun awa" },
      __minute: { main: "minti", __description: "samun minti" },
      __second: { main: "sakan", __description: "samun sakan" },
    },
  },
  types: {
    __object: { main: "abu", __description: "don bayyana abu mai tsaye" },
    __number: { main: "lamba", __description: "bayyana lambobi" },
    __string: { main: "rubutu", __description: "bayyana rubutu" },
    __boolean: {
      main: "gaskiya",
      values: { __true: "Gaskiya", __false: "Karya" },
      __description: "bayyana e ko a a",
    },
  },
  methods: {
    method: {
      __print: { main: "buga", __description: "nuna sakamako" },
      __scan: { main: "karanta", __description: "karanta bayanai" },
      __return: { main: "dawo", __description: "dawo da sakamako" },
    },
    sentences: {
      __function: { main: "aiki", __description: "fara aiki" },
      __if: { main: "idan", __description: "sharadi" },
      __else: {
        main: "in_ba_haka_ba",
        __description: "idan sharadi bai cika ba",
      },
      __while: { main: "muddin", __description: "maimaitawa muddin" },
      __for: { main: "ga", __description: "maimaitawa ga" },
      __switch: { main: "zabi", __description: "zabar yanayi" },
      __case: { main: "yanayi", __description: "yanayin zabi" },
      __default: { main: "asali", __description: "yanayin asali" },
      __try: { main: "gwada", __description: "gwada kodi" },
      __catch: { main: "kama", __description: "kama kuskure" },
      __finally: { main: "karshe", __description: "karshen komai" },
    },
  },
  errors: {
    main: { tag: "KUSKURE", message: "Kuskuren tsarin aiki" },
    __UNKNOWN_ERROR: {
      tag: "KUSKURE_BOYAYYE",
      message: "Kuskure wanda ba a sani ba",
    },
    __TypeError: {
      tag: "KUSKUREN_NAUI",
      message: "Nauin bayanan bai dace ba",
    },
    __ReferenceError: { tag: "KUSKUREN_ISHARA", message: "Bayanin babu shi" },
    __SyntaxError: {
      tag: "KUSKUREN_TSARI",
      message: "Tsarin rubutu ba daidai ba",
    },
    __RangeError: { tag: "KUSKUREN_IYAKA", message: "Ya wuce iyaka" },
    __URIError: { tag: "KUSKUREN_URI", message: "Hanyar URI ba daidai ba" },
    __EvalError: {
      tag: "KUSKUREN_EVAL",
      message: "Kuskure wajen tantance kodi",
    },
  },
}).grammar();
