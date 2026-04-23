import { Language } from "../grammar.class.js";

export const xhosa = new Language({
  language: "xhosa",
  about: "ENIDE yikhompayila ehumusha evumela ukuphrogramwa ngoluphi na ulwimi",

  include: {
    main: "Fakela",
    __description: "Kusetyenziswa ukufakela ulwimi okanye amathala eencwadi",
  },

  commands: {
    all: {
      __about: {
        main: "Malunga",
        __description: "ukufumana ulwazi malunga ne-ENIDE",
      },
      __help: {
        main: "Uncedo",
        __description: "ukufumana uluhlu lwemiyalelo yonke efumanekayo",
      },
      __version: {
        main: "Inguqulelo",
        __description: "ukufumana inguqulelo yangoku ye-ENIDE",
      },
      __languages: {
        main: "Iilwimi",
        __description: "ukufumana uluhlu lweelwimi zonke ezifumanekayo",
      },
      __documentation: {
        main: "Imibhalo",
        __description: "ukufumana imibhalo yolwimi",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Izibalo",
        __description: "ukufikelela imisebenzi yezibalo",
      },
      __pi: {
        main: "PI",
        __description: "ukufumana ixabiso le-pi",
      },
      __sqrt: {
        main: "ImpandoYesikwere",
        __description: "ukufumana impande yesikwere",
      },
      __pow: {
        main: "Amandla",
        __description: "ukufumana amandla enani",
      },
      __round: {
        main: "Jiyela",
        __description: "ukujiyela inani",
      },
      __random: {
        main: "Okungaziwayo",
        __description: "ukufumana inani elingalindelekanga",
      },
      __max: {
        main: "Ephezulu",
        __description: "ukufumana ixabiso eliphezulu",
      },
      __min: {
        main: "Ezantsi",
        __description: "ukufumana ixabiso eliphantsi",
      },
      __isNumber: {
        main: "YinaniNa",
        __description: "ukuhlola ukuba ixabiso linani",
      },
      __isInteger: {
        main: "YinaniPheleleNa",
        __description: "ukuhlola ukuba ixabiso linani elijikeleleyo",
      },
      __isFloat: {
        main: "YiDesimaliNa",
        __description: "ukuhlola ukuba ixabiso lidesimali",
      },
    },

    __string: {
      main: {
        main: "Uluhlu",
        __description: "ukufikelela imisebenzi yokulungisa uluhlu",
      },
      __length: {
        main: "Ubude",
        __description: "ukufumana ubude boluhlu",
      },
      __toUpperCase: {
        main: "KwaziNkulu",
        __description: "ukuguqula uluhlu lube nezinhlamvu ezinkulu",
      },
      __toLowerCase: {
        main: "KwaziNcinci",
        __description: "ukuguqula uluhlu lube nezinhlamvu ezincinci",
      },
    },

    __date: {
      main: {
        main: "Umhla",
        __description: "ukufikelela imisebenzi yomhla nexesha",
      },
      __year: {
        main: "Unyaka",
        __description: "ukufumana unyaka",
      },
      __month: {
        main: "Inyanga",
        __description: "ukufumana inyanga",
      },
      __dayMonth: {
        main: "UmhlaWeNyanga",
        __description: "ukufumana umhla wenyanga",
      },
      __dayWeek: {
        main: "UmhlaWeVeki",
        __description: "ukufumana umhla weveki",
      },
      __hour: {
        main: "Iyure",
        __description: "ukufumana iyure",
      },
      __minute: {
        main: "Imizuzu",
        __description: "ukufumana imizuzu",
      },
      __second: {
        main: "Isekhethi",
        __description: "ukufumana isekhethi",
      },
    },
  },

  types: {
    __object: {
      main: "Into",
      __description: "ukubhengeza into engatshintshiyo",
    },
    __number: {
      main: "Inani",
      __description: "ukumemezela uguquko lohlobo lwenani",
    },
    __string: {
      main: "Uluhlu",
      __description: "ukumemezela uguquko lohlobo loluhlu",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Inyaniso", __false: "Ubuxoki" },
      __description: "ukumemezela uguquko lohlobo lwe-boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Printa",
        __description: "ukuprinta ixabiso kwisikrini",
      },
      __scan: {
        main: "Funda",
        __description: "ukufunda ixabiso kumsebenzi",
      },
      __return: {
        main: "Buyela",
        __description: "ukubuyela nexabiso kumsebenzi",
      },
    },

    sentences: {
      __function: {
        main: "Umsebenzi",
        __description: "ukumemezela umsebenzi",
      },
      __if: {
        main: "Ukuba",
        __description: "ukumemezela imeko",
      },
      __else: {
        main: "Okunye",
        __description: "ukumemezela enye imeko",
      },
      __while: {
        main: "Ngexesha",
        __description: "ukumemezela uluphu lwexesha",
      },
      __for: {
        main: "Nge",
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
        main: "Okuzenzakalayo",
        __description: "ukumemezela icala elinqanaba",
      },
      __try: {
        main: "Zama",
        __description: "ukumemezela ibhloko yokuzama",
      },
      __catch: {
        main: "Bamba",
        __description: "ukumemezela ibhloko yokujongana neempazamo",
      },
      __finally: {
        main: "Ekugqibeleni",
        __description: "ukumemezela ibhloko esebenzayo nangona",
      },
    },
  },

  errors: {
    main: {
      tag: "IMPAZAMO",
      message: "Impazamo evamileyo yohlelo",
    },
    __UNKNOWN_ERROR: {
      tag: "ImpazamoEngaziwa",
      message: "Impazamo engaziwa nhlobo",
    },
    __TypeError: {
      tag: "ImpazamoYohlobo",
      message: "Uhlobo alulunganga kwisenzo",
    },
    __ReferenceError: {
      tag: "ImpazamoYokukhomba",
      message: "Uguquko alukho kumda",
    },
    __SyntaxError: {
      tag: "ImpazamoYesintaksi",
      message: "Ikhodi ayilunganga",
    },
    __RangeError: {
      tag: "ImpazamoYomda",
      message: "Ixabiso lingaphandle komda ovumelekileyo",
    },
    __URIError: {
      tag: "ImpazamoYeUri",
      message: "I-URI enephutha okanye engalunganga",
    },
    __EvalError: {
      tag: "ImpazamoYeEval",
      message: "Impazamo enxulumene ne-eval",
    },
  },
}).grammar();
