import { Language } from "../grammar.class.js";

export const alarabiyyah = new Language({
  language: "alarabiyyah",
  about:
    "ENIDE huwa mutarjim fawri qabil lil-tarjamah yasmah bil-barmajah bi-ayyi lughah",
  include: {
    main: "Tadmin",
    __description: "Yushtakhdamu li-tadmini lughatin aw maktabat",
  },
  commands: {
    all: {
      __about: {
        main: "hawla",
        __description: "lil-husul ala malumat hawla ENIDE",
      },
      __help: {
        main: "musaadah",
        __description: "lil-husul ala qaimat jami al-awamir al-mutahah",
      },
      __version: {
        main: "isdar",
        __description: "lil-husul ala isdar ENIDE al-hali",
      },
      __languages: {
        main: "lughat",
        __description: "lil-husul ala qaimat jami al-lughat al-mutahah",
      },
      __documentation: {
        main: "tawthiq",
        __description: "lil-husul ala tawthiq al-lughah",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "riyadiyyat",
        __description: "lil-wusul ila al-dawal al-riyadiyyah",
      },
      __pi: {
        main: "PI",
        __description: "lil-husul ala qimat pi",
      },
      __sqrt: {
        main: "Jidhr",
        __description: "lil-husul ala al-jidhr al-tarbii",
      },
      __pow: {
        main: "Quwwah",
        __description: "li-raf al-adaad ila quwwah",
      },
      __round: {
        main: "Taqrib",
        __description: "li-taqrib al-adaad",
      },
      __random: {
        main: "Ashwai",
        __description: "lil-husul ala adad ashwai",
      },
      __max: {
        main: "Aqsa",
        __description: "lil-husul ala ala qimah",
      },
      __min: {
        main: "Adna",
        __description: "lil-husul ala aqall qimah",
      },
      __isNumber: {
        main: "HalHuwaAdad",
        __description: "lil-tahaqquq mimma idha kanat al-qimah adadan",
      },
      __isInteger: {
        main: "HalHuwaSahih",
        __description: "lil-tahaqquq mimma idha kanat al-qimah adadan sahihan",
      },
      __isFloat: {
        main: "HalHuwaAshri",
        __description: "lil-tahaqquq mimma idha kanat al-qimah adadan ashriyan",
      },
    },
    __string: {
      main: {
        main: "nass",
        __description: "lil-wusul ila dawal muajalat al-nusus",
      },
      __length: {
        main: "Tul",
        __description: "lil-husul ala tul al-nass",
      },
      __toUpperCase: {
        main: "HurufKabirah",
        __description: "li-tahwil al-nass ila huruf kabirah",
      },
      __toLowerCase: {
        main: "HurufSaghirah",
        __description: "li-tahwil al-nass ila huruf saghirah",
      },
    },
    __date: {
      main: {
        main: "tarikh",
        __description: "lil-wusul ila dawal al-tarikh wal-waqt",
      },
      __year: {
        main: "Sanah",
        __description: "lil-husul ala al-sanah",
      },
      __month: {
        main: "Shahr",
        __description: "lil-husul ala al-shahr",
      },
      __dayMonth: {
        main: "YawmAlShahr",
        __description: "lil-husul ala yawm al-shahr",
      },
      __dayWeek: {
        main: "YawmAlUsbua",
        __description: "lil-husul ala yawm al-usbua",
      },
      __hour: {
        main: "Saah",
        __description: "lil-husul ala al-saah",
      },
      __minute: {
        main: "Daqiqah",
        __description: "lil-husul ala al-daqiqah",
      },
      __second: {
        main: "Thaniyah",
        __description: "lil-husul ala al-thaniyah",
      },
    },
  },
  types: {
    __object: { main: "kayin", __description: "li-iilan kayin thabit" },
    __number: {
      main: "adad",
      __description: "li-taarif mutaghayyir min naw adad",
    },
    __string: {
      main: "nass",
      __description: "li-taarif mutaghayyir min naw nass",
    },
    __boolean: {
      main: "mantiqi",
      values: {
        __true: "Sahih",
        __false: "Batil",
      },
      __description: "li-taarif mutaghayyir min naw mantiqi",
    },
  },
  methods: {
    method: {
      __print: {
        main: "itba",
        __description: "li-ard al-qimah ala al-shashah",
      },
      __scan: {
        main: "imsah",
        __description: "li-qiraat qimah min al-mudkhalat",
      },
      __return: {
        main: "arjia",
        __description: "li-irjaa qimah min ad-dallah",
      },
    },
    sentences: {
      __function: {
        main: "dallah",
        __description: "li-taarif dallah",
      },
      __if: {
        main: "idha",
        __description: "li-taarif shart",
      },
      __else: {
        main: "wa_illa",
        __description: "li-taarif shart badil",
      },
      __while: {
        main: "talama",
        __description: "li-taarif halqat talama",
      },
      __for: {
        main: "li_kulli",
        __description: "li-taarif halqat li-kulli",
      },
      __switch: {
        main: "tabdil",
        __description: "li-taarif hikal al-ikhtiyar",
      },
      __case: {
        main: "halah",
        __description: "li-taarif halah fi hikal al-ikhtiyar",
      },
      __default: {
        main: "iftiradi",
        __description: "li-taarif al-halah al-iftiradiyyah",
      },
      __try: {
        main: "hawil",
        __description: "li-taarif kutlat al-muhawalah",
      },
      __catch: {
        main: "imsik",
        __description: "li-taarif kutlat mualajat al-khata",
      },
      __finally: {
        main: "fi_al_nihayah",
        __description: "li-taarif kutlatun tatanfadhun daiman",
      },
    },
  },
  errors: {
    main: {
      tag: "KHATA",
      message: "Khata nizam amm",
    },
    __UNKNOWN_ERROR: {
      tag: "KHATA_MAJHUL",
      message: "Khata majhul tamaman",
    },
    __TypeError: {
      tag: "KHATA_AL_NAW",
      message: "Naw ghayr salih fi al-amaliyyah",
    },
    __ReferenceError: {
      tag: "KHATA_AL_MARJIA",
      message: "Al-mutaghayyir ghayr mawjud fi al-nitaq",
    },
    __SyntaxError: {
      tag: "KHATA_AL_QAWAID",
      message: "Kud ghayr salih",
    },
    __RangeError: {
      tag: "KHATA_AL_MADA",
      message: "Al-qimah kharij al-mada al-masmuh bih",
    },
    __URIError: {
      tag: "KHATA_URI",
      message: "URI ghayr salih",
    },
    __EvalError: {
      tag: "KHATA_EVAL",
      message: "Khata mutaalliq bi-eval",
    },
  },
}).grammar();
