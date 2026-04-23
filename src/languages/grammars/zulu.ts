import { Language } from "../grammar.class.js";

export const zulu = new Language({
  language: "zulu",
  about:
    "ENIDE iyikhompayila ehumusha evumela ukuphrogramwa nganoma iluphi ulimi",
  include: {
    main: "Faka",
    __description: "Kusetshenziswa ukufaka ulimi noma imitapo yolwazi",
  },
  commands: {
    all: {
      __about: {
        main: "Mayelana",
        __description: "ukuthola ulwazi mayelana ne-ENIDE",
      },
      __help: {
        main: "Usizo",
        __description: "ukuthola uhlu lwemiyalo yonke etholakalayo",
      },
      __version: {
        main: "Inguqulo",
        __description: "ukuthola inguqulo yamanje ye-ENIDE",
      },
      __languages: {
        main: "Izilimi",
        __description: "ukuthola uhlu lwezilimi zonke ezitholakalayo",
      },
      __documentation: {
        main: "Imibhalo",
        __description: "ukuthola imibhalo yolimi",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "Izibalo",
        __description: "ukufinyelela imisebenzi yezibalo",
      },
      __pi: {
        main: "PI",
        __description: "ukuthola inani le-pi",
      },
      __sqrt: {
        main: "IsiquSomz",
        __description: "ukuthola isiqelo sikwele",
      },
      __pow: {
        main: "Amandla",
        __description: "ukuthola amandla enombolo",
      },
      __round: {
        main: "Rounda",
        __description: "ukuphindaphinda inombolo",
      },
      __random: {
        main: "Okungahleliwe",
        __description: "ukuthola inombolo engahleliwe",
      },
      __max: {
        main: "Enkulu",
        __description: "ukuthola inani eliphezulu",
      },
      __min: {
        main: "Encane",
        __description: "ukuthola inani eliphansi",
      },
      __isNumber: {
        main: "InguNombolo",
        __description: "ukuhlola uma inani lingenombolo",
      },
      __isInteger: {
        main: "InguNomboloYonke",
        __description: "ukuhlola uma inani lingenombolo yonke",
      },
      __isFloat: {
        main: "InguDesimali",
        __description: "ukuhlola uma inani lingedesimali",
      },
    },
    __string: {
      main: {
        main: "Uketanga",
        __description: "ukufinyelela imisebenzi yokulungisa uketanga",
      },
      __length: {
        main: "Ubude",
        __description: "ukuthola ubude bukaketanga",
      },
      __toUpperCase: {
        main: "Upper",
        __description: "ukuguqula uketanga waba nezinhlamvu ezinkulu",
      },
      __toLowerCase: {
        main: "Lower",
        __description: "ukuguqula uketanga waba nezinhlamvu ezincane",
      },
    },
    __date: {
      main: {
        main: "Usuku",
        __description: "ukufinyelela imisebenzi yosuku nesikhathi",
      },
      __year: {
        main: "Unyaka",
        __description: "ukuthola unyaka",
      },
      __month: {
        main: "Inyanga",
        __description: "ukuthola inyanga",
      },
      __dayMonth: {
        main: "UsukuLwenyanga",
        __description: "ukuthola usuku lwenyanga",
      },
      __dayWeek: {
        main: "UsukuLweviki",
        __description: "ukuthola usuku lweviki",
      },
      __hour: {
        main: "Ihora",
        __description: "ukuthola ihora",
      },
      __minute: {
        main: "Iminithi",
        __description: "ukuthola iminithi",
      },
      __second: {
        main: "Isekhendi",
        __description: "ukuthola isekhendi",
      },
    },
  },
  types: {
    __object: {
      main: "Into",
      __description: "ukumemezela into emile",
    },
    __number: {
      main: "Inombolo",
      __description: "ukumemezela inguquko yohlobo lwenombolo",
    },
    __string: {
      main: "Uketanga",
      __description: "ukumemezela inguquko yohlobo lukaketanga",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Iqiniso", __false: "Amanga" },
      __description: "ukumemezela inguquko yohlobo lwe-boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Phrinta",
        __description: "ukuphrinta inani kuskrini",
      },
      __scan: {
        main: "Funda",
        __description: "ukufunda inani kusuka kumuntu osebenzisayo",
      },
      __return: {
        main: "Buya",
        __description: "ukubuya ngenani emsebenzi",
      },
    },
    sentences: {
      __function: {
        main: "Umsebenzi",
        __description: "ukumemezela umsebenzi",
      },
      __if: {
        main: "Uma",
        __description: "ukumemezela isimo",
      },
      __else: {
        main: "Okunye",
        __description: "ukumemezela isimo esinye",
      },
      __while: {
        main: "Ngenkathi",
        __description: "ukumemezela uluphu lwengenkathi",
      },
      __for: {
        main: "For",
        __description: "ukumemezela uluphu lwe-for",
      },
      __switch: {
        main: "Khetha",
        __description: "ukumemezela isakhiwo sokukhetha",
      },
      __case: {
        main: "Icala",
        __description: "ukumemezela icala esakhiweni sokukhetha",
      },
      __default: {
        main: "Okuzenzekelayo",
        __description: "ukumemezela icala eliyinhloko",
      },
      __try: {
        main: "Zama",
        __description: "ukumemezela ibulokhi yokuzama",
      },
      __catch: {
        main: "Bamba",
        __description: "ukumemezela ibulokhi yokubhekana neziphutha",
      },
      __finally: {
        main: "Ekugcineni",
        __description: "ukumemezela ibulokhi esebenza noma ngabe",
      },
    },
  },
  errors: {
    main: {
      tag: "ISIPHUTHA",
      message: "Isiphutha sevamile sohlelo",
    },
    __UNKNOWN_ERROR: {
      tag: "ISIPHUTHA_ESINGAZIWA",
      message: "Isiphutha esingaziwa nhlobo",
    },
    __TypeError: {
      tag: "ISIPHUTHA_SOHLOBO",
      message: "Uhlobo alulungile ensebenzweni",
    },
    __ReferenceError: {
      tag: "ISIPHUTHA_SOKUKHOMBA",
      message: "Inguquko ayikho esifundeni",
    },
    __SyntaxError: {
      tag: "ISIPHUTHA_SESINTAKSI",
      message: "Ikhodi ayilungile",
    },
    __RangeError: {
      tag: "ISIPHUTHA_SOHLU",
      message: "Inani lingaphandle kohlu oluvunyelwe",
    },
    __URIError: {
      tag: "ISIPHUTHA_SE_URI",
      message: "I-URI enokusilela noma engalungile",
    },
    __EvalError: {
      tag: "ISIPHUTHA_SE_EVAL",
      message: "Isiphutha esihlobene ne-eval",
    },
  },
}).grammar();
