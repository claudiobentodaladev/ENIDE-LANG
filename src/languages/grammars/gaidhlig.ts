import { Language } from "../grammar.class.js";

export const gaidhlig = new Language({
  language: "gaidhlig",
  about:
    "Is transpiler eadar-theangachail a tha ann an ENIDE a leigeas leat programadh ann an canan sam bith",
  include: {
    main: "Gabh_a_steach",
    __description:
      "Air a chleachdadh gus cànan no leabharlannan a thoirt a-steach",
  },
  commands: {
    all: {
      __about: {
        main: "mu",
        __description: "gus fiosrachadh mu ENIDE fhaighinn",
      },
      __help: {
        main: "cobhair",
        __description:
          "gus liosta de na h-ordughan uile a tha ri fhaighinn fhaighinn",
      },
      __version: {
        main: "tionndadh",
        __description: "gus tionndadh làithreach ENIDE fhaighinn",
      },
      __languages: {
        main: "canain",
        __description:
          "gus liosta de na cànain uile a tha ri fhaighinn fhaighinn",
      },
      __documentation: {
        main: "doc",
        __description: "gus sgrìobhainn cànan fhaighinn",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matamataig",
        __description: "gus inntrigeadh gu gnìomhan matamataig fhaighinn",
      },
      __pi: {
        main: "PI",
        __description: "gus luach pi fhaighinn",
      },
      __sqrt: {
        main: "FreumhCearnach",
        __description: "gus an freumh cearnach fhaighinn",
      },
      __pow: {
        main: "Cumhachd",
        __description: "gus cumhachd àireamh fhaighinn",
      },
      __round: {
        main: "Cruinnich",
        __description: "gus àireamh a chuairteachadh",
      },
      __random: {
        main: "Tuairmseil",
        __description: "gus àireamh thuairmseil fhaighinn",
      },
      __max: {
        main: "AsMotha",
        __description: "gus an luach as motha fhaighinn",
      },
      __min: {
        main: "AsLugha",
        __description: "gus an luach as lugha fhaighinn",
      },
      __isNumber: {
        main: "IsAireamh",
        __description: "gus dearbhadh am bi luach na aireamh",
      },
      __isInteger: {
        main: "IsSlanaireimh",
        __description: "gus dearbhadh am bi luach na slàn-àireamh",
      },
      __isFloat: {
        main: "IsDeicheach",
        __description: "gus dearbhadh am bi luach na dheicheach",
      },
    },
    __string: {
      main: {
        main: "sreath",
        __description:
          "gus inntrigeadh gu gnìomhan làimhseachaidh sreathan fhaighinn",
      },
      __length: {
        main: "Fad",
        __description: "gus fad sreatha fhaighinn",
      },
      __toUpperCase: {
        main: "GuLitricheanMora",
        __description: "gus sreath a thionndadh gu litrichean mora",
      },
      __toLowerCase: {
        main: "GuLitricheanBeaga",
        __description: "gus sreath a thionndadh gu litrichean beaga",
      },
    },
    __date: {
      main: {
        main: "ceann_latha",
        __description:
          "gus inntrigeadh gu gnìomhan ceann-latha agus uine fhaighinn",
      },
      __year: {
        main: "Bliadhna",
        __description: "gus a bhliadhna fhaighinn",
      },
      __month: {
        main: "Mios",
        __description: "gus am mios fhaighinn",
      },
      __dayMonth: {
        main: "LaaMios",
        __description: "gus latha a mhios fhaighinn",
      },
      __dayWeek: {
        main: "LaaSeachdain",
        __description: "gus latha na seachdainn fhaighinn",
      },
      __hour: {
        main: "Uair",
        __description: "gus an uair fhaighinn",
      },
      __minute: {
        main: "Mionaid",
        __description: "gus am mionaid fhaighinn",
      },
      __second: {
        main: "Diog",
        __description: "gus an diog fhaighinn",
      },
    },
  },
  types: {
    __object: { main: "ni", __description: "gus ni staiteach ainmeachadh" },
    __number: {
      main: "aireamh",
      __description: "gus caochlaideach den seorsa aireamh a dhearbhadh",
    },
    __string: {
      main: "sreath",
      __description: "gus caochlaideach den seorsa sreath a dhearbhadh",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Fior",
        __false: "Meallta",
      },
      __description: "gus caochlaideach den seorsa Boole a dhearbhadh",
    },
  },
  methods: {
    method: {
      __print: {
        main: "clo_bhuail",
        __description: "gus luach a chlò-bhualadh air an sgrìn",
      },
      __scan: {
        main: "leugh",
        __description: "gus luach a leughadh bhon ionchur",
      },
      __return: {
        main: "till",
        __description: "gus luach a thilleadh bho ghnìomh",
      },
    },
    sentences: {
      __function: {
        main: "gniomh",
        __description: "gus gnìomh a dhearbhadh",
      },
      __if: {
        main: "ma",
        __description: "gus cumha a dhearbhadh",
      },
      __else: {
        main: "no",
        __description: "gus cumha eile a dhearbhadh",
      },
      __while: {
        main: "fhad",
        __description: "gus lupa fhad a dhearbhadh",
      },
      __for: {
        main: "airson",
        __description: "gus lupa airson a dhearbhadh",
      },
      __switch: {
        main: "taghadh",
        __description: "gus structar taghaidh a dhearbhadh",
      },
      __case: {
        main: "cas",
        __description: "gus cas anns an structar taghaidh a dhearbhadh",
      },
      __default: {
        main: "bunaiteach",
        __description:
          "gus cas bunaiteach anns an structar taghaidh a dhearbhadh",
      },
      __try: {
        main: "feuch",
        __description: "gus bloc feuch a dhearbhadh",
      },
      __catch: {
        main: "glac",
        __description: "gus bloc làimhseachaidh mhearachdan a dhearbhadh",
      },
      __finally: {
        main: "MuDheireadh",
        __description: "gus bloc a dhearbhadh a ruitheas an-còmhnaidh",
      },
    },
  },
  errors: {
    main: { tag: "MEARACHD", message: "Mearachd choitcheann an t-siostaim" },
    __UNKNOWN_ERROR: {
      tag: "MEARACHD_NEO_AITHNICHTE",
      message: "Mearachd tur neo-aithnichte",
    },
    __TypeError: {
      tag: "MEARACHD_SEORSA",
      message: "Seorsa neo-dhligheach san obrachadh",
    },
    __ReferenceError: {
      tag: "MEARACHD_IOMRAIDH",
      message: "Chan eil an caochlaideach anns an raon",
    },
    __SyntaxError: {
      tag: "MEARACHD_CO_CHAIRICH",
      message: "Cod neo-dhligheach",
    },
    __RangeError: {
      tag: "MEARACHD_RAOIN",
      message: "Luach taobh a-muigh an raoin ceadaichte",
    },
    __URIError: {
      tag: "MEARACHD_URI",
      message: "URI mi-chruthach no neo-dhligheach",
    },
    __EvalError: {
      tag: "MEARACHD_EVAL",
      message: "Mearachd co-cheangailte ri eval",
    },
  },
}).grammar();
