import { Language } from "../grammar.class.js";

export const swahili = new Language({
  language: "swahili",
  about:
    "ENIDE ni transpila inayoweza kutafsiriwa inayoruhusu programu katika lugha yoyote",

  include: {
    main: "Jumuisha",
    __description: "Inatumika kujumuisha lugha au maktaba",
  },

  commands: {
    all: {
      __about: {
        main: "Kuhusu",
        __description: "kupata maelezo kuhusu ENIDE",
      },
      __help: {
        main: "Msaada",
        __description: "kupata orodha ya amri zote zinazopatikana",
      },
      __version: {
        main: "Toleo",
        __description: "kupata toleo la sasa la ENIDE",
      },
      __languages: {
        main: "Lugha",
        __description: "kupata orodha ya lugha zote zinazopatikana",
      },
      __documentation: {
        main: "Nyaraka",
        __description: "kupata nyaraka za lugha",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Hisabati",
        __description: "kufikia kazi za hisabati",
      },
      __pi: {
        main: "PI",
        __description: "kupata thamani ya pi",
      },
      __sqrt: {
        main: "MziziMraba",
        __description: "kupata mzizi wa mraba",
      },
      __pow: {
        main: "Nguvu",
        __description: "kupata nguvu ya nambari",
      },
      __round: {
        main: "Karibu",
        __description: "kukaribishia nambari",
      },
      __random: {
        main: "Nasibu",
        __description: "kupata nambari ya nasibu",
      },
      __max: {
        main: "Kubwa",
        __description: "kupata thamani ya juu zaidi",
      },
      __min: {
        main: "Ndogo",
        __description: "kupata thamani ya chini zaidi",
      },
      __isNumber: {
        main: "NiNambari",
        __description: "kuangalia kama thamani ni nambari",
      },
      __isInteger: {
        main: "NiNambaraKamili",
        __description: "kuangalia kama thamani ni nambari kamili",
      },
      __isFloat: {
        main: "NiDesimali",
        __description: "kuangalia kama thamani ni desimali",
      },
    },

    __string: {
      main: {
        main: "Mfuatano",
        __description: "kufikia kazi za uhariri wa mfuatano",
      },
      __length: {
        main: "Urefu",
        __description: "kupata urefu wa mfuatano",
      },
      __toUpperCase: {
        main: "KwaHerufiKubwa",
        __description: "kubadilisha mfuatano kuwa herufi kubwa",
      },
      __toLowerCase: {
        main: "KwaHerufiNdogo",
        __description: "kubadilisha mfuatano kuwa herufi ndogo",
      },
    },

    __date: {
      main: {
        main: "Tarehe",
        __description: "kufikia kazi za tarehe na wakati",
      },
      __year: {
        main: "Mwaka",
        __description: "kupata mwaka",
      },
      __month: {
        main: "Mwezi",
        __description: "kupata mwezi",
      },
      __dayMonth: {
        main: "SikuYaMwezi",
        __description: "kupata siku ya mwezi",
      },
      __dayWeek: {
        main: "SikuYaJuma",
        __description: "kupata siku ya juma",
      },
      __hour: {
        main: "Saa",
        __description: "kupata saa",
      },
      __minute: {
        main: "Dakika",
        __description: "kupata dakika",
      },
      __second: {
        main: "Sekunde",
        __description: "kupata sekunde",
      },
    },
  },

  types: {
    __object: {
      main: "Kitu",
      __description: "kutangaza kitu kisichobadilika",
    },
    __number: {
      main: "Nambari",
      __description: "kutangaza kigezo cha aina ya nambari",
    },
    __string: {
      main: "Mfuatano",
      __description: "kutangaza kigezo cha aina ya mfuatano",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Kweli", __false: "Uwongo" },
      __description: "kutangaza kigezo cha aina ya boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Chapisha",
        __description: "kuchapisha thamani kwenye skrini",
      },
      __scan: {
        main: "Soma",
        __description: "kusoma thamani kutoka kwa mtumiaji",
      },
      __return: {
        main: "Rudisha",
        __description: "kurudisha thamani kutoka kwa kazi",
      },
    },

    sentences: {
      __function: {
        main: "Kazi",
        __description: "kutangaza kazi",
      },
      __if: {
        main: "Kama",
        __description: "kutangaza sharti",
      },
      __else: {
        main: "Sivyo",
        __description: "kutangaza sharti mbadala",
      },
      __while: {
        main: "Wakati",
        __description: "kutangaza kitanzi cha wakati",
      },
      __for: {
        main: "Kwa",
        __description: "kutangaza kitanzi cha kwa",
      },
      __switch: {
        main: "Chagua",
        __description: "kutangaza muundo wa uchaguzi",
      },
      __case: {
        main: "Kesi",
        __description: "kutangaza kesi katika muundo wa uchaguzi",
      },
      __default: {
        main: "ChaguoMsingi",
        __description: "kutangaza kesi ya chaguo-msingi",
      },
      __try: {
        main: "Jaribu",
        __description: "kutangaza bloku ya jaribu",
      },
      __catch: {
        main: "Kamata",
        __description: "kutangaza bloku ya kushughulikia makosa",
      },
      __finally: {
        main: "Mwishowe",
        __description: "kutangaza bloku inayotekelezwa bila kujali",
      },
    },
  },

  errors: {
    main: {
      tag: "KOSA",
      message: "Kosa la jumla la mfumo",
    },
    __UNKNOWN_ERROR: {
      tag: "KOSA_LISILOJULIKANA",
      message: "Kosa lisilojulikana kabisa",
    },
    __TypeError: {
      tag: "KOSA_LA_AINA",
      message: "Aina si sahihi katika operesheni",
    },
    __ReferenceError: {
      tag: "KOSA_LA_REJELEO",
      message: "Kigezo hakipo katika wigo",
    },
    __SyntaxError: {
      tag: "KOSA_LA_SINTAKSIA",
      message: "Msimbo si sahihi",
    },
    __RangeError: {
      tag: "KOSA_LA_SAFU",
      message: "Thamani nje ya safu inayoruhusiwa",
    },
    __URIError: {
      tag: "KOSA_LA_URI",
      message: "URI iliyopotoka au si sahihi",
    },
    __EvalError: {
      tag: "KOSA_LA_EVAL",
      message: "Kosa linalohusiana na eval",
    },
  },
}).grammar();
