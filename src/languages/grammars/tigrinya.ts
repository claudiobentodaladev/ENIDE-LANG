import { Language } from "../grammar.class.js";

export const tigrinya = new Language({
  language: "tigrinya",
  about:
    "ENIDE bemananyawun quanquwa prwgiram lemagber yemiyakil transpiler eyu",

  include: {
    main: "Miitaw",
    __description: "Qwanqwa wey metsahafti nim'itaw yegelgil",
  },

  commands: {
    all: {
      __about: {
        main: "BiZaeba",
        __description: "bi zaeba ENIDE merja lemagnet",
      },
      __help: {
        main: "Hagez",
        __description: "ye_ajaj_zerzer_lemayet",
      },
      __version: {
        main: "Bershen",
        __description: "ye_ENIDE_bershen_lemayet",
      },
      __languages: {
        main: "Quanquatat",
        __description: "ye_quanquatat_zerzer",
      },
      __documentation: {
        main: "Dawkumenteshen",
        __description: "ye_quanqua_merja",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Hisab",
        __description: "ye_hisab_shira",
      },
      __pi: {
        main: "PI",
        __description: "waga_pi",
      },
      __sqrt: {
        main: "SkwerRut",
        __description: "skwer_rut_lemagnet",
      },
      __pow: {
        main: "Hayli",
        __description: "hayli_qutsi",
      },
      __round: {
        main: "Rawund",
        __description: "qutsi_lemamulat",
      },
      __random: {
        main: "Tesa",
        __description: "yetasaba_qutsi",
      },
      __max: {
        main: "Abiy",
        __description: "ka_hulu_abiy",
      },
      __min: {
        main: "Nishtey",
        __description: "ka_hulu_nishtey",
      },
      __isNumber: {
        main: "QutsiEyu",
        __description: "qutsi_mehonun_lemaregaget",
      },
      __isInteger: {
        main: "MuluQutsi",
        __description: "mulu_qutsi_mehonun",
      },
      __isFloat: {
        main: "DesimalEyu",
        __description: "desimal_mehonun",
      },
    },

    __string: {
      main: {
        main: "Qalt",
        __description: "ye_qalt_shira",
      },
      __length: {
        main: "Nuhmet",
        __description: "nuhmet_qalt",
      },
      __toUpperCase: {
        main: "AbiyFidel",
        __description: "wed_abiy_fidel_lemalewet",
      },
      __toLowerCase: {
        main: "NishteyFidel",
        __description: "wed_nishtey_fidel_lemalewet",
      },
    },

    __date: {
      main: {
        main: "Mealti",
        __description: "mealti_inna_saat",
      },
      __year: {
        main: "Amet",
        __description: "amet_lemagnet",
      },
      __month: {
        main: "Werhi",
        __description: "werhi_lemagnet",
      },
      __dayMonth: {
        main: "MealtiWerhi",
        __description: "mealti_werhi_lemagnet",
      },
      __dayWeek: {
        main: "MealtiShammun",
        __description: "mealti_shammun",
      },
      __hour: {
        main: "Saat",
        __description: "saat_lemagnet",
      },
      __minute: {
        main: "Deqiqa",
        __description: "deqiqa_lemagnet",
      },
      __second: {
        main: "Sekond",
        __description: "sekond_lemagnet",
      },
    },
  },

  types: {
    __object: {
      main: "Neger",
      __description: "yemayitakakel neger lamisasel",
    },
    __number: {
      main: "Qutsi",
      __description: "aynet_qutsi",
    },
    __string: {
      main: "Qalt",
      __description: "aynet_qalt",
    },
    __boolean: {
      main: "HaqiHasot",
      values: { __true: "Haqqi", __false: "Hasot" },
      __description: "aynet_haqi_hasot",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Htem",
        __description: "merja_lemassa-yet",
      },
      __scan: {
        main: "Anbaba",
        __description: "merja_lemanbebt",
      },
      __return: {
        main: "Melles",
        __description: "waga_lememelles",
      },
    },

    sentences: {
      __function: {
        main: "Shira",
        __description: "shira_lememessret",
      },
      __if: {
        main: "Ente",
        __description: "huneta_lemamlket",
      },
      __else: {
        main: "Entezaykoynu",
        __description: "le_huneta_meleyet",
      },
      __while: {
        main: "Kemezey",
        __description: "lemeziget",
      },
      __for: {
        main: "Nishtu",
        __description: "le_meziget",
      },
      __switch: {
        main: "Mertsat",
        __description: "le_mertsat",
      },
      __case: {
        main: "Hunetat",
        __description: "aynet_hunetat",
      },
      __default: {
        main: "Lammid",
        __description: "lammid_huneta",
      },
      __try: {
        main: "Fetin",
        __description: "lemefetun",
      },
      __catch: {
        main: "Yiz",
        __description: "gige_lemeyaz",
      },
      __finally: {
        main: "Mewadaeta",
        __description: "bemewadaeta",
      },
    },
  },

  errors: {
    main: {
      tag: "GIGE",
      message: "gige_sistem",
    },
    __UNKNOWN_ERROR: {
      tag: "YaletaWweqe",
      message: "yaletawweqe_gige",
    },
    __TypeError: {
      tag: "YeAynetGige",
      message: "aynetu_ayikonun",
    },
    __ReferenceError: {
      tag: "YeMarjiGige",
      message: "variable_yelem",
    },
    __SyntaxError: {
      tag: "YeSintaksGige",
      message: "ye_tsihuf_gige",
    },
    __RangeError: {
      tag: "YeWessenGige",
      message: "bewessen_wi-chi_eyu",
    },
    __URIError: {
      tag: "YeUriGige",
      message: "URI_gige",
    },
    __EvalError: {
      tag: "YeEvalGige",
      message: "eval_gige",
    },
  },
}).grammar();
