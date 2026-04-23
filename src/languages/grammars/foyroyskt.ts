import { Language } from "../grammar.class.js";

export const foyroyskt = new Language({
  language: "foyroyskt",
  about:
    "ENIDE er ein umsettanligur transpiler sum loyvir forritning a hvat mal sum er",
  include: {
    main: "Feila",
    __description: "Verður nýtt til at feila mál ella bókasøvn",
  },
  commands: {
    all: {
      __about: {
        main: "um",
        __description: "fyri at faa upplysningar um ENIDE",
      },
      __help: {
        main: "hjalp",
        __description: "fyri at faa lista yvir allar tøkkar kommandur",
      },
      __version: {
        main: "utgava",
        __description: "fyri at faa aktualu utgavu av ENIDE",
      },
      __languages: {
        main: "mal",
        __description: "fyri at faa lista yvir øll tøk mál",
      },
      __documentation: {
        main: "dok",
        __description: "fyri at faa skjalsetingina fyri eitt mál",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "staerdfraedi",
        __description: "fyri at faa atgongd til stærdfræðilig foell",
      },
      __pi: {
        main: "PI",
        __description: "fyri at faa verdina av pi",
      },
      __sqrt: {
        main: "FirkantaRot",
        __description: "fyri at faa firkantarót",
      },
      __pow: {
        main: "Potensur",
        __description: "fyri at faa potens av tali",
      },
      __round: {
        main: "Rundna",
        __description: "fyri at rundna eitt tal",
      },
      __random: {
        main: "Slembi",
        __description: "fyri at faa eitt slembið tal",
      },
      __max: {
        main: "Haesta",
        __description: "fyri at faa hæstu verdina",
      },
      __min: {
        main: "Laegsta",
        __description: "fyri at faa lægstu verdina",
      },
      __isNumber: {
        main: "ErTal",
        __description: "fyri at eftirkanna um ein verdi er eitt tal",
      },
      __isInteger: {
        main: "ErHeilttal",
        __description: "fyri at eftirkanna um ein verdi er eitt heilttal",
      },
      __isFloat: {
        main: "ErDesimaltal",
        __description: "fyri at eftirkanna um ein verdi er eitt desimaltal",
      },
    },
    __string: {
      main: {
        main: "tekstur",
        __description: "fyri at faa atgongd til tekstmeðferðarfoell",
      },
      __length: {
        main: "Longd",
        __description: "fyri at faa longdina av einum teksti",
      },
      __toUpperCase: {
        main: "TilStoran",
        __description: "fyri at umbreyta tekst til storan stavi",
      },
      __toLowerCase: {
        main: "TilLitlan",
        __description: "fyri at umbreyta tekst til litlan stavi",
      },
    },
    __date: {
      main: {
        main: "dato",
        __description: "fyri at faa atgongd til dato og tíðarfoell",
      },
      __year: {
        main: "Ar",
        __description: "fyri at faa arið",
      },
      __month: {
        main: "Manuður",
        __description: "fyri at faa mánaðin",
      },
      __dayMonth: {
        main: "DagurManudur",
        __description: "fyri at faa dagin í mánaðinum",
      },
      __dayWeek: {
        main: "DagurVika",
        __description: "fyri at faa dagin í vikuni",
      },
      __hour: {
        main: "Timi",
        __description: "fyri at faa tíman",
      },
      __minute: {
        main: "Minutt",
        __description: "fyri at faa minuttin",
      },
      __second: {
        main: "Sekund",
        __description: "fyri at faa sekundið",
      },
    },
  },
  types: {
    __object: {
      main: "hlutur",
      __description: "at lysing eitt kyrrstett hlutur",
    },
    __number: {
      main: "tal",
      __description: "fyri at forkynna ein broytiliga av slag tal",
    },
    __string: {
      main: "tekstur",
      __description: "fyri at forkynna ein broytiliga av slag tekstur",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Satt",
        __false: "Osatt",
      },
      __description: "fyri at forkynna ein broytiliga av slag bool",
    },
  },
  methods: {
    method: {
      __print: {
        main: "prenta",
        __description: "fyri at prenta ein verdi á skerminum",
      },
      __scan: {
        main: "lesa",
        __description: "fyri at lesa ein verdi frá innlegg",
      },
      __return: {
        main: "returna",
        __description: "fyri at returna ein verdi frá falli",
      },
    },
    sentences: {
      __function: {
        main: "fall",
        __description: "fyri at forkynna eitt fall",
      },
      __if: {
        main: "um",
        __description: "fyri at forkynna eitt skilyrdi",
      },
      __else: {
        main: "annars",
        __description: "fyri at forkynna eitt alternativt skilyrdi",
      },
      __while: {
        main: "medan",
        __description: "fyri at forkynna eina meðan-lykkju",
      },
      __for: {
        main: "fyri",
        __description: "fyri at forkynna eina fyri-lykkju",
      },
      __switch: {
        main: "val",
        __description: "fyri at forkynna eina valstruktur",
      },
      __case: {
        main: "tilfelli",
        __description: "fyri at forkynna eitt tilfelli í valstrukturini",
      },
      __default: {
        main: "standard",
        __description: "fyri at forkynna standardtilfellið í valstrukturini",
      },
      __try: {
        main: "royna",
        __description: "fyri at forkynna eitt royna-blokk",
      },
      __catch: {
        main: "gripa",
        __description: "fyri at forkynna eitt villumeðferðarblokk",
      },
      __finally: {
        main: "TilSist",
        __description: "fyri at forkynna eitt blokk sum altíð keyrir",
      },
    },
  },
  errors: {
    main: { tag: "VILLA", message: "Almenn kerfis villa" },
    __UNKNOWN_ERROR: { tag: "OKEND_VILLA", message: "Allaheilt ókend villa" },
    __TypeError: { tag: "SLAG_VILLA", message: "Ogildur slag í operatiónini" },
    __ReferenceError: {
      tag: "TILVISING_VILLA",
      message: "Broytiligur er ikki til í umfanginum",
    },
    __SyntaxError: { tag: "MALFRODI_VILLA", message: "Ogildur kodi" },
    __RangeError: {
      tag: "INTERVAL_VILLA",
      message: "Verdi uttanfyri loyft interval",
    },
    __URIError: { tag: "URI_VILLA", message: "Misskapat ella ogildur URI" },
    __EvalError: { tag: "EVAL_VILLA", message: "Villa tengt vid eval" },
  },
}).grammar();
