import { Language } from "../grammar.class.js";

export const ndebele = new Language({
  language: "ndebele",
  about:
    "ENIDE iyikhompayila eguqulwayo evumela ukuphrograma nganoma yiluphi ulimi",
  include: {
    main: "Fakela",
    __description: "Kusetshenziswa ukufaka ulimi noma izinqolobane",
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
        main: "Amabhuku",
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
        main: "IsiqueloSikwele",
        __description: "ukuthola isiquelo sikwele",
      },
      __pow: {
        main: "Amandla",
        __description: "ukuthola amandla enombolo",
      },
      __round: {
        main: "Jikeleza",
        __description: "ukujikeleza inombolo",
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
        __description: "ukuhlola ukuthi inani lingunombolo",
      },
      __isInteger: {
        main: "InguNomboloYonke",
        __description: "ukuhlola ukuthi inani lingunombolo ephelele",
      },
      __isFloat: {
        main: "InguDesimali",
        __description: "ukuhlola ukuthi inani lingedesimali",
      },
    },
    __string: {
      main: {
        main: "Intambo",
        __description: "ukufinyelela imisebenzi yokulungisa umbhalo",
      },
      __length: {
        main: "Ubude",
        __description: "ukuthola ubude bentambo",
      },
      __toUpperCase: {
        main: "Amakhulu",
        __description: "ukuguqula umbhalo ube ngezinhlamvu ezinkulu",
      },
      __toLowerCase: {
        main: "Amancane",
        __description: "ukuguqula umbhalo ube ngezinhlamvu ezincane",
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
        main: "Isekhondi",
        __description: "ukuthola isekhondi",
      },
    },
  },
  types: {
    __object: { main: "Into", __description: "ukumemezela into emile" },
    __number: {
      main: "Inombolo",
      __description: "ukumemezela okuguqukayo kwenombolo",
    },
    __string: {
      main: "Intambo",
      __description: "ukumemezela okuguqukayo kombhalo",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Liqiniso", __false: "Amanga" },
      __description: "ukumemezela okuguqukayo kwe-boolean",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Bonisa",
        __description: "ukubonisa inani kusikrini",
      },
      __scan: {
        main: "Funda",
        __description: "ukufunda inani kumsebenzisi",
      },
      __return: {
        main: "Buyisa",
        __description: "ukubuyisa inani emsebenzini",
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
        __description: "ukumemezela uluphu",
      },
      __for: {
        main: "Phinda",
        __description: "ukumemezela uluphu ephindayo",
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
        main: "Okuzenzakalayo",
        __description: "ukumemezela icala eliyinhloko",
      },
      __try: {
        main: "Zama",
        __description: "ukumemezela ibhulokhi yokuzama",
      },
      __catch: {
        main: "Bamba",
        __description: "ukumemezela ibhulokhi yokubhekana leziphutha",
      },
      __finally: {
        main: "Ekugcineni",
        __description: "ukumemezela ibhulokhi ehlala isebenza",
      },
    },
  },
  errors: {
    main: {
      tag: "ISIPHUTHA",
      message: "Isiphutha esijwayelekile sohlelo",
    },
    __UNKNOWN_ERROR: {
      tag: "ISIPHUTHA_ESINGAZIWA",
      message: "Isiphutha esingaziwa nhlobo",
    },
    __TypeError: {
      tag: "ISIPHUTHA_SOHLOBO",
      message: "Uhlobo alulungile emsebenzini",
    },
    __ReferenceError: {
      tag: "ISIPHUTHA_SOKUKHOMBA",
      message: "Okuguqukayo akukhona esigabeni",
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
      tag: "ISIPHUTHA_URI",
      message: "URI ayilungile noma yonakele",
    },
    __EvalError: {
      tag: "ISIPHUTHA_EVAL",
      message: "Isiphutha esihlobene le-eval",
    },
  },
}).grammar();
