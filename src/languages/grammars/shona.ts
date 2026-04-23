import { Language } from "../grammar.class.js";

export const shona = new Language({
  language: "shona",

  about:
    "ENIDE chirongwa chinobvumira kushandura makodhi uye kuprograma mumitauro yakasiyana",

  include: {
    main: "batanidza",
    __description: "inoshandiswa kubatanidza mutauro kana maraibhurari",
  },

  commands: {
    all: {
      __about: {
        main: "nezve",
        __description: "kuwana ruzivo nezve ENIDE",
      },

      __help: {
        main: "rubatsiro",
        __description: "kuratidza mirairo yose iripo",
      },

      __version: {
        main: "shanduro",
        __description: "kuratidza shanduro iripo ye ENIDE",
      },

      __languages: {
        main: "mitauro",
        __description: "kuratidza mitauro yose iripo",
      },

      __documentation: {
        main: "gwaro",
        __description: "kuratidza gwaro remutauro",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "masvomhu",
        __description: "mabasa emasvomhu",
      },

      __pi: {
        main: "pi",
        __description: "kukosha kwe pi",
      },

      __sqrt: {
        main: "mudzi",
        __description: "mudzi weskweya wenhamba",
      },

      __pow: {
        main: "simba",
        __description: "kusimudza nhamba kusimba",
      },

      __round: {
        main: "kutenderedza",
        __description: "kutenderedza nhamba",
      },

      __random: {
        main: "zvakasarudzwa",
        __description: "kugadzira nhamba isina kurongeka",
      },

      __max: {
        main: "huru",
        __description: "nhamba huru pakati pezvakapihwa",
      },

      __min: {
        main: "diki",
        __description: "nhamba diki pakati pezvakapihwa",
      },

      __isNumber: {
        main: "inhamba",
        __description: "kuona kana kukosha kuri nhamba",
      },

      __isInteger: {
        main: "inhambaYose",
        __description: "kuona kana nhamba iri yose",
      },

      __isFloat: {
        main: "inedesimali",
        __description: "kuona kana nhamba ine desimali",
      },
    },

    __string: {
      main: {
        main: "chinyorwa",
        __description: "mabasa ekushanda nemashoko",
      },

      __length: {
        main: "kureba",
        __description: "urefu hwechinyorwa",
      },

      __toUpperCase: {
        main: "mavaraMakuru",
        __description: "kushandura kuva mavara makuru",
      },

      __toLowerCase: {
        main: "mavaraMadiki",
        __description: "kushandura kuva mavara madiki",
      },
    },

    __date: {
      main: {
        main: "nguva",
        __description: "mabasa enguva nemazuva",
      },

      __year: {
        main: "gore",
        __description: "kuwana gore",
      },

      __month: {
        main: "mwedzi",
        __description: "kuwana mwedzi",
      },

      __dayMonth: {
        main: "zuvaMwedzi",
        __description: "zuva remwedzi",
      },

      __dayWeek: {
        main: "zuvaVhiki",
        __description: "zuva revhiki",
      },

      __hour: {
        main: "awa",
        __description: "kuwana awa",
      },

      __minute: {
        main: "maminitsi",
        __description: "kuwana maminitsi",
      },

      __second: {
        main: "sekondi",
        __description: "kuwana sekondi",
      },
    },
  },

  types: {
    __object: {
      main: "chinhu",
      __description: "chinhu chine data rakarongeka",
    },

    __number: {
      main: "nhamba",
      __description: "mhando yenhamba",
    },

    __string: {
      main: "chinyorwa",
      __description: "mhando yemavara",
    },

    __boolean: {
      main: "chokwadiNhema",
      values: {
        __true: "chokwadi",
        __false: "nhema",
      },
      __description: "mhando yechokwadi kana nhema",
    },
  },

  methods: {
    method: {
      __print: {
        main: "dhinda",
        __description: "kuratidza pachiratidziri",
      },

      __scan: {
        main: "verenga",
        __description: "kutora input kubva kumushandisi",
      },

      __return: {
        main: "dzorera",
        __description: "kudzosa kukosha",
      },
    },

    sentences: {
      __function: {
        main: "basa",
        __description: "kutsanangura basa",
      },

      __if: {
        main: "kana",
        __description: "mamiriro",
      },

      __else: {
        main: "zvimwe",
        __description: "imwe nzira kana mamiriro asiri echokwadi",
      },

      __while: {
        main: "apo",
        __description: "loop inomhanya apo mamiriro achiri echokwadi",
      },

      __for: {
        main: "kune",
        __description: "loop ine kuverenga",
      },

      __switch: {
        main: "sarudza",
        __description: "sarudzo pakati pemamiriro",
      },

      __case: {
        main: "nyaya",
        __description: "imwe sarudzo mukusarudza",
      },

      __default: {
        main: "yakajairika",
        __description: "sarudzo yekupedzisira",
      },

      __try: {
        main: "edza",
        __description: "kuyedza kodhi",
      },

      __catch: {
        main: "bata",
        __description: "kubata zvikanganiso",
      },

      __finally: {
        main: "pakupedzisira",
        __description: "inomhanya nguva dzose",
      },
    },
  },

  errors: {
    main: {
      tag: "KUKANGANISA",
      message: "kukanganisa kwehurongwa",
    },

    __UNKNOWN_ERROR: {
      tag: "KUKANGANISA_KUSAZIVIKWA",
      message: "kukanganisa kusingazivikanwi",
    },

    __TypeError: {
      tag: "KUKANGANISA_MHANDO",
      message: "mhando isiri iyo",
    },

    __ReferenceError: {
      tag: "KUKANGANISA_REF",
      message: "chinhu hachina kuwanikwa",
    },

    __SyntaxError: {
      tag: "KUKANGANISA_SYNTAX",
      message: "syntax isiri iyo",
    },

    __RangeError: {
      tag: "KUKANGANISA_RANGE",
      message: "kunze kwemiganhu",
    },

    __URIError: {
      tag: "KUKANGANISA_URI",
      message: "URI haina kurongeka",
    },

    __EvalError: {
      tag: "KUKANGANISA_EVAL",
      message: "kukanganisa kwe eval",
    },
  },
}).grammar();
