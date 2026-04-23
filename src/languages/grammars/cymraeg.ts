import { Language } from "../grammar.class.js";

export const cymraeg = new Language({
  language: "cymraeg",
  about:
    "Mae ENIDE yn drawsbeilydd trosglwyddadwy sy'n caniatáu rhaglennu mewn unrhyw iaith",
  include: {
    main: "Cynnwys",
    __description: "Defnyddir i gynnwys iaith neu lyfrgelloedd",
  },
  commands: {
    all: {
      __about: { main: "am", __description: "i gael gwybodaeth am ENIDE" },
      __help: {
        main: "cymorth",
        __description: "i gael rhestr o'r holl orchmynion sydd ar gael",
      },
      __version: {
        main: "fersiwn",
        __description: "i gael fersiwn gyfredol ENIDE",
      },
      __languages: {
        main: "ieithoedd",
        __description: "i gael rhestr o'r holl ieithoedd sydd ar gael",
      },
      __documentation: {
        main: "dogfen",
        __description: "i gael y dogfennaeth ar gyfer iaith",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "mathemateg",
        __description: "i gael mynediad at swyddogaethau mathemateg",
      },
      __pi: { main: "PI", __description: "i gael gwerth pi" },
      __sqrt: { main: "Isradd", __description: "i gael yr isradd sgwar" },
      __pow: { main: "Pwer", __description: "i gael pwer rhif" },
      __round: { main: "Crynhoi", __description: "i grynhoi rhif" },
      __random: { main: "Arhap", __description: "i gael rhif ar hap" },
      __max: { main: "Uchaf", __description: "i gael y gwerth uchaf" },
      __min: { main: "Isaf", __description: "i gael y gwerth isaf" },
      __isNumber: {
        main: "YwRhif",
        __description: "i wirio a yw gwerth yn rhif",
      },
      __isInteger: {
        main: "YwGyfanrif",
        __description: "i wirio a yw gwerth yn gyfanrif",
      },
      __isFloat: {
        main: "YwDegol",
        __description: "i wirio a yw gwerth yn ddegol",
      },
    },
    __string: {
      main: {
        main: "llinyn",
        __description: "i gael mynediad at swyddogaethau llinyn",
      },
      __length: { main: "Hyd", __description: "i gael hyd llinyn" },
      __toUpperCase: {
        main: "IBriflythrennau",
        __description: "i drosi llinyn i briflythrennau",
      },
      __toLowerCase: {
        main: "ILythrennauBach",
        __description: "i drosi llinyn i lythrennau bach",
      },
    },
    __date: {
      main: {
        main: "dyddiad",
        __description: "i gael mynediad at swyddogaethau dyddiad ac amser",
      },
      __year: { main: "Blwyddyn", __description: "i gael y flwyddyn" },
      __month: { main: "Mis", __description: "i gael y mis" },
      __dayMonth: { main: "DiwrnodMis", __description: "i gael diwrnod y mis" },
      __dayWeek: {
        main: "DiwrnodWythnos",
        __description: "i gael diwrnod yr wythnos",
      },
      __hour: { main: "Awr", __description: "i gael yr awr" },
      __minute: { main: "Munud", __description: "i gael y munud" },
      __second: { main: "Eiliad", __description: "i gael yr eiliad" },
    },
  },
  types: {
    __object: {
      main: "gwrthrych",
      __description: "i ddatgan gwrthrych statig",
    },
    __number: { main: "rhif", __description: "i ddatgan newidyn o fath rhif" },
    __string: {
      main: "llinyn",
      __description: "i ddatgan newidyn o fath llinyn",
    },
    __boolean: {
      main: "boole",
      values: {
        __true: "Gwir",
        __false: "Gau",
      },
      __description: "i ddatgan newidyn o fath boole",
    },
  },
  methods: {
    method: {
      __print: {
        main: "argraffu",
        __description: "i argraffu gwerth ar y sgrin",
      },
      __scan: {
        main: "darllen",
        __description: "i ddarllen gwerth o'r mewnbwn",
      },
      __return: {
        main: "dychwelyd",
        __description: "i ddychwelyd gwerth o swyddogaeth",
      },
    },
    sentences: {
      __function: {
        main: "swyddogaeth",
        __description: "i ddatgan swyddogaeth",
      },
      __if: { main: "os", __description: "i ddatgan amod" },
      __else: { main: "arall", __description: "i ddatgan amod amgen" },
      __while: { main: "tra", __description: "i ddatgan dolen tra" },
      __for: { main: "am", __description: "i ddatgan dolen am" },
      __switch: { main: "newid", __description: "i ddatgan strwythur dewis" },
      __case: {
        main: "achos",
        __description: "i ddatgan achos yn y strwythur dewis",
      },
      __default: {
        main: "rhagosodedig",
        __description: "i ddatgan yr achos rhagosodedig",
      },
      __try: { main: "ceisio", __description: "i ddatgan bloc ceisio" },
      __catch: { main: "dal", __description: "i ddatgan bloc trin gwallau" },
      __finally: {
        main: "Or_Diwedd",
        __description: "i ddatgan bloc sy'n gweithredu beth bynnag",
      },
    },
  },
  errors: {
    main: { tag: "GWALL", message: "Gwall system generig" },
    __UNKNOWN_ERROR: {
      tag: "GWALL_ANHYSBYS",
      message: "Gwall hollol anhysbys",
    },
    __TypeError: {
      tag: "GWALL_MATH",
      message: "Math annilys mewn gweithrediad",
    },
    __ReferenceError: {
      tag: "GWALL_CYFEIRIAD",
      message: "Nid yw'r newidyn yn bodoli",
    },
    __SyntaxError: { tag: "GWALL_CYSTRAWEN", message: "Cod annilys" },
    __RangeError: {
      tag: "GWALL_YSTOD",
      message: "Gwerth y tu allan i'r ystod",
    },
    __URIError: { tag: "GWALL_URI", message: "URI camffurfiedig neu annilys" },
    __EvalError: { tag: "GWALL_EVAL", message: "Gwall yn ymwneud ag eval" },
  },
}).grammar();
