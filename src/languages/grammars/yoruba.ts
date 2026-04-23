import { Language } from "../grammar.class.js";

export const yoruba = new Language({
  language: "yoruba",
  about: "ENIDE je oluyipada ti o le tumasi ti o gba laaye eto ni ede eyikeyi",

  include: {
    main: "Pelu",
    __description: "A máa ń lò ó láti fi èdè tàbí àwọn ohun ìkàwé kún un",
  },

  commands: {
    all: {
      __about: {
        main: "Nipa",
        __description: "lati gba alaye nipa ENIDE",
      },
      __help: {
        main: "Iranlowo",
        __description: "lati gba atokun gbogbo aawon aṣe to wa",
      },
      __version: {
        main: "Eya",
        __description: "lati gba eya lọwọlọwọ ti ENIDE",
      },
      __languages: {
        main: "Ede",
        __description: "lati gba atokun gbogbo ede ti o wa",
      },
      __documentation: {
        main: "Iwe",
        __description: "lati gba iwe aṣẹ fun ede",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Isiro",
        __description: "lati wọle si awọn iṣẹ isiro",
      },
      __pi: {
        main: "PI",
        __description: "lati gba iye pi",
      },
      __sqrt: {
        main: "GbongboSquare",
        __description: "lati gba gbongbo square",
      },
      __pow: {
        main: "Agbara",
        __description: "lati gba agbara nọmba kan",
      },
      __round: {
        main: "Yika",
        __description: "lati yika nọmba kan",
      },
      __random: {
        main: "Airiirọ",
        __description: "lati gba nọmba airiiro",
      },
      __max: {
        main: "Tobi",
        __description: "lati gba iye ti o pọ julọ",
      },
      __min: {
        main: "Kekere",
        __description: "lati gba iye ti o kere julọ",
      },
      __isNumber: {
        main: "JeNomba",
        __description: "lati ṣayẹwo boya iye jẹ nọmba",
      },
      __isInteger: {
        main: "JeNombaKun",
        __description: "lati ṣayẹwo boya iye jẹ nọmba kikun",
      },
      __isFloat: {
        main: "JeDesimali",
        __description: "lati ṣayẹwo boya iye jẹ desimali",
      },
    },

    __string: {
      main: {
        main: "Okun",
        __description: "lati wọle si awọn iṣẹ ṣiṣatunṣe okun",
      },
      __length: {
        main: "Gigun",
        __description: "lati gba gigun okun",
      },
      __toUpperCase: {
        main: "KawaItokaKekere",
        __description: "lati yi okun pada si lẹta nla",
      },
      __toLowerCase: {
        main: "KawaItokaTobi",
        __description: "lati yi okun pada si lẹta kekere",
      },
    },

    __date: {
      main: {
        main: "Ojo",
        __description: "lati wọle si awọn iṣẹ ojo ati akoko",
      },
      __year: {
        main: "Odun",
        __description: "lati gba ọdun",
      },
      __month: {
        main: "Osu",
        __description: "lati gba oṣù",
      },
      __dayMonth: {
        main: "OjoOsu",
        __description: "lati gba ọjọ oṣù",
      },
      __dayWeek: {
        main: "OjoOse",
        __description: "lati gba ọjọ ọsẹ",
      },
      __hour: {
        main: "Wakati",
        __description: "lati gba wakati",
      },
      __minute: {
        main: "Iseju",
        __description: "lati gba iṣẹju",
      },
      __second: {
        main: "Aaya",
        __description: "lati gba aaya",
      },
    },
  },

  types: {
    __object: {
      main: "Nkan",
      __description: "lati kede nkan kan ti ko yipada",
    },
    __number: {
      main: "Nomba",
      __description: "lati kede iyipada ti iru nomba",
    },
    __string: {
      main: "Okun",
      __description: "lati kede iyipada ti iru okun",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Otito", __false: "Iro" },
      __description: "lati kede iyipada ti iru boolean",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Te",
        __description: "lati tẹ iye sori iboju",
      },
      __scan: {
        main: "Ka",
        __description: "lati ka iye lati ọdọ olumulo",
      },
      __return: {
        main: "Pada",
        __description: "lati pada pẹlu iye lati iṣẹ",
      },
    },

    sentences: {
      __function: {
        main: "Ise",
        __description: "lati kede iṣẹ",
      },
      __if: {
        main: "Biba",
        __description: "lati kede ipo",
      },
      __else: {
        main: "Tabi",
        __description: "lati kede ipo miiran",
      },
      __while: {
        main: "Nigba",
        __description: "lati kede lupu nigba",
      },
      __for: {
        main: "Fun",
        __description: "lati kede lupu fun",
      },
      __switch: {
        main: "Yan",
        __description: "lati kede eto iyọọda",
      },
      __case: {
        main: "Oro",
        __description: "lati kede ọrọ ninu eto iyọọda",
      },
      __default: {
        main: "Ipile",
        __description: "lati kede ọrọ ipilẹ",
      },
      __try: {
        main: "Gbiyanju",
        __description: "lati kede bulọọki gbiyanju",
      },
      __catch: {
        main: "Mu",
        __description: "lati kede bulọọki mimu aṣiṣe",
      },
      __finally: {
        main: "Lakotan",
        __description: "lati kede bulọọki ti o ṣiṣẹ laibikita",
      },
    },
  },

  errors: {
    main: {
      tag: "ASISE",
      message: "Asise gbogboogbo ti eto",
    },
    __UNKNOWN_ERROR: {
      tag: "AsiseAimo",
      message: "Asise ti a ko mọ rara",
    },
    __TypeError: {
      tag: "AsiseIru",
      message: "Iru ko tọ ninu isẹ",
    },
    __ReferenceError: {
      tag: "AsiseItoka",
      message: "Iyipada ko si ni aaye",
    },
    __SyntaxError: {
      tag: "AsiseSintasi",
      message: "Koodu ko tọ",
    },
    __RangeError: {
      tag: "AsiseIsele",
      message: "Iye wa ni ita aaye ti a gba laaye",
    },
    __URIError: {
      tag: "AsiseUri",
      message: "URI ti bajẹ tabi ti ko tọ",
    },
    __EvalError: {
      tag: "AsiseEval",
      message: "Asise ti o ni ibatan pelu eval",
    },
  },
}).grammar();
