import { Language } from "../grammar.class.js";

export const gikuyu = new Language({
  language: "gikuyu",
  about: "ENIDE ni transpiler yogaga ungihoorie program na rugano ruria rwose",
  include: {
    main: "Kwongerera",
    __description: "Ithagagīrwo kwongerera ruthiomi kana mabuuku",
  },
  commands: {
    all: {
      __about: {
        main: "kuhusu",
        __description: "gukua uria na ENIDE",
      },
      __help: {
        main: "uria",
        __description: "gukua ruthiru rwa maathani mothe matingathanio",
      },
      __version: {
        main: "version",
        __description: "gukua version ya uguo wa ENIDE",
      },
      __languages: {
        main: "rugano",
        __description: "gukua ruthiru rwa rugano rothe rungatihanio",
      },
      __documentation: {
        main: "ndaarimi",
        __description: "gukua ndaarimi ya rugano",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "hisabati",
        __description: "guthamia misango ya hisabati",
      },
      __pi: {
        main: "PI",
        __description: "gukua thamani ya pi",
      },
      __sqrt: {
        main: "MziziSquare",
        __description: "gukua mzizi wa square",
      },
      __pow: {
        main: "Nguvu",
        __description: "gukua nguvu ya namba",
      },
      __round: {
        main: "Igurana",
        __description: "kuigurana namba",
      },
      __random: {
        main: "Bahati",
        __description: "gukua namba ya bahati",
      },
      __max: {
        main: "Nene",
        __description: "gukua thamani nene",
      },
      __min: {
        main: "Nini",
        __description: "gukua thamani nini",
      },
      __isNumber: {
        main: "NiNamba",
        __description: "gwathia namba ni namba",
      },
      __isInteger: {
        main: "NiNambaKamili",
        __description: "gwathia namba ni namba kamili",
      },
      __isFloat: {
        main: "NiDesimali",
        __description: "gwathia namba ni desimali",
      },
    },
    __string: {
      main: {
        main: "murigo",
        __description: "guthamia misango ya murigo",
      },
      __length: {
        main: "Urefu",
        __description: "gukua urefu wa murigo",
      },
      __toUpperCase: {
        main: "KwaNeneHerufi",
        __description: "guthurura murigo kuwa herufi nene",
      },
      __toLowerCase: {
        main: "KwaNiniHerufi",
        __description: "guthurura murigo kuwa herufi nini",
      },
    },
    __date: {
      main: {
        main: "muthia",
        __description: "guthamia misango ya muthia na saa",
      },
      __year: {
        main: "Mwaka",
        __description: "gukua mwaka",
      },
      __month: {
        main: "Mweri",
        __description: "gukua mweri",
      },
      __dayMonth: {
        main: "MuthiaMweri",
        __description: "gukua muthia wa mweri",
      },
      __dayWeek: {
        main: "MuthiaJuma",
        __description: "gukua muthia wa juma",
      },
      __hour: {
        main: "Saa",
        __description: "gukua saa",
      },
      __minute: {
        main: "Dakika",
        __description: "gukua dakika",
      },
      __second: {
        main: "Sekunde",
        __description: "gukua sekunde",
      },
    },
  },
  types: {
    __object: { main: "kitu", __description: "gutangaza kitu kimara" },
    __number: {
      main: "namba",
      __description: "gutangaza kigeuzi cha aina ya namba",
    },
    __string: {
      main: "murigo",
      __description: "gutangaza kigeuzi cha aina ya murigo",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Ma",
        __false: "Waheni",
      },
      __description: "gutangaza kigeuzi cha aina ya boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "andika",
        __description: "kuandika thamani kwa skrini",
      },
      __scan: {
        main: "soma",
        __description: "kusoma thamani kwa mtumiaji",
      },
      __return: {
        main: "rudisha",
        __description: "kurudisha thamani kwa misango",
      },
    },
    sentences: {
      __function: {
        main: "misango",
        __description: "gutangaza misango",
      },
      __if: {
        main: "niko",
        __description: "gutangaza sharti",
      },
      __else: {
        main: "ningine",
        __description: "gutangaza sharti lingine",
      },
      __while: {
        main: "wakati",
        __description: "gutangaza loop ya wakati",
      },
      __for: {
        main: "kwa",
        __description: "gutangaza loop ya kwa",
      },
      __switch: {
        main: "chagua",
        __description: "gutangaza muundo wa chaguo",
      },
      __case: {
        main: "kesi",
        __description: "gutangaza kesi katika muundo wa chaguo",
      },
      __default: {
        main: "kawaida",
        __description: "gutangaza kesi ya kawaida",
      },
      __try: {
        main: "jaribu",
        __description: "gutangaza bloku ya jaribu",
      },
      __catch: {
        main: "kamata",
        __description: "gutangaza bloku ya kukamata makosa",
      },
      __finally: {
        main: "mwishowe",
        __description: "gutangaza bloku inayotekelezwa wakati wote",
      },
    },
  },
  errors: {
    main: {
      tag: "KOSA",
      message: "Kosa la kawaida la sistemu",
    },
    __UNKNOWN_ERROR: {
      tag: "KOSA_LISILOJULIKANA",
      message: "Kosa lisilojulikana kabisa",
    },
    __TypeError: {
      tag: "KOSA_AINA",
      message: "Aina si sahihi katika operesheni",
    },
    __ReferenceError: {
      tag: "KOSA_REJELEO",
      message: "Kigeuzi hakipo katika wigo",
    },
    __SyntaxError: {
      tag: "KOSA_SINTAKSIA",
      message: "Msimbo si sahihi",
    },
    __RangeError: {
      tag: "KOSA_SAFU",
      message: "Thamani nje ya safu inayoruhusiwa",
    },
    __URIError: {
      tag: "KOSA_URI",
      message: "URI iliyopotoka au si sahihi",
    },
    __EvalError: {
      tag: "KOSA_EVAL",
      message: "Kosa linalohusiana na eval",
    },
  },
}).grammar();
