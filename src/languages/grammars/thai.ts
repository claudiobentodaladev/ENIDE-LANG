import { Language } from "../grammar.class.js";

export const thai = new Language({
  language: "thai",
  about:
    "ENIDE kue tua plae phasa thi samat pla dai sueng chuay hai khian prokraem nai phasa dai ko dai",

  include: {
    main: "Ruam",
    __description: "Chai samrap ruam phasa rue laibrari",
  },

  commands: {
    all: {
      __about: {
        main: "Kiaogap",
        __description: "phuea du khomun kiaogap ENIDE",
      },
      __help: {
        main: "Chuayluea",
        __description: "phuea du raichue khamsang thangmot thi mi yu",
      },
      __version: {
        main: "WerChan",
        __description: "phuea du wer-chan patjuban khong ENIDE",
      },
      __languages: {
        main: "Phasa",
        __description: "phuea du raichue phasa thangmot thi mi yu",
      },
      __documentation: {
        main: "EkKasarn",
        __description: "phuea du ek-kasarn khong phasa",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Kanit",
        __description: "phuea khao thueng fank-chan khanitsat",
      },
      __pi: {
        main: "PI",
        __description: "phuea du kha pi",
      },
      __sqrt: {
        main: "RakThiSong",
        __description: "phuea ha rak thi song",
      },
      __pow: {
        main: "Kamlang",
        __description: "phuea ha kha yok kamlang",
      },
      __round: {
        main: "PatLong",
        __description: "phuea pat tua-lek",
      },
      __random: {
        main: "Soom",
        __description: "phuea soom tua-lek",
      },
      __max: {
        main: "MaakSud",
        __description: "phuea ha kha maak thi sud",
      },
      __min: {
        main: "NoiSud",
        __description: "phuea ha kha noi thi sud",
      },
      __isNumber: {
        main: "PenTuaLek",
        __description: "truaj-sob wa pen tua-lek rue mai",
      },
      __isInteger: {
        main: "PenJamnuanTem",
        __description: "truaj-sob wa pen jamnuan tem rue mai",
      },
      __isFloat: {
        main: "PenTotsaniyom",
        __description: "truaj-sob wa pen totsaniyom rue mai",
      },
    },

    __string: {
      main: {
        main: "Khokhwam",
        __description: "phuea khao thueng fank-chan jatkan khokwam",
      },
      __length: {
        main: "KhwamYao",
        __description: "phuea du khwamyao khong khokwam",
      },
      __toUpperCase: {
        main: "TuaPhimYai",
        __description: "plian khokwam pen tua phim yai",
      },
      __toLowerCase: {
        main: "TuaPhimNoi",
        __description: "plian khokwam pen tua phim lek",
      },
    },

    __date: {
      main: {
        main: "Wanthi",
        __description: "phuea khao thueng fank-chan jatkan wan lae wela",
      },
      __year: {
        main: "Pee",
        __description: "phuea du pee",
      },
      __month: {
        main: "Duean",
        __description: "phuea du duean",
      },
      __dayMonth: {
        main: "WanThiNaiDuean",
        __description: "phuea du wanthi nai duean",
      },
      __dayWeek: {
        main: "WanNaiSapda",
        __description: "phuea du wan nai sapda",
      },
      __hour: {
        main: "Chuamong",
        __description: "phuea du chuamong",
      },
      __minute: {
        main: "Nathi",
        __description: "phuea du nathi",
      },
      __second: {
        main: "Winathi",
        __description: "phuea du winathi",
      },
    },
  },

  types: {
    __object: {
      main: "Sing",
      __description: "phuea prakat sing thi khong thi",
    },
    __number: {
      main: "TuaLek",
      __description: "prakard tua-prae praphet tua-lek",
    },
    __string: {
      main: "Khokhwam",
      __description: "prakard tua-prae praphet khokwam",
    },
    __boolean: {
      main: "Bool",
      values: { __true: "Jing", __false: "Thet" },
      __description: "prakard tua-prae praphet bool",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Phim",
        __description: "sadaeng kha bon na jor",
      },
      __scan: {
        main: "Rabkha",
        __description: "an kha jak kan nam khao",
      },
      __return: {
        main: "Khuenkha",
        __description: "khuen kha jak fank-chan",
      },
    },

    sentences: {
      __function: {
        main: "FankChan",
        __description: "prakard fank-chan",
      },
      __if: {
        main: "Tha",
        __description: "prakardเงื่อนไข",
      },
      __else: {
        main: "MiChanan",
        __description: "prakardเงื่อนไขทางเลือก",
      },
      __while: {
        main: "NaiKhanaThi",
        __description: "prakard vong-lop while",
      },
      __for: {
        main: "Samrab",
        __description: "prakard vong-lop for",
      },
      __switch: {
        main: "Savit",
        __description: "prakard khrong-sang lueak",
      },
      __case: {
        main: "Korani",
        __description: "prakard korani nai khrong-sang lueak",
      },
      __default: {
        main: "KhaMuenTon",
        __description: "prakard korani muen ton",
      },
      __try: {
        main: "Long",
        __description: "prakard blok long",
      },
      __catch: {
        main: "Jap",
        __description: "prakard blok jatkan koran phit phat",
      },
      __finally: {
        main: "NaiTisud",
        __description: "prakard blok thi tham-ngan samer",
      },
    },
  },

  errors: {
    main: {
      tag: "PhitPhlat", // transliterado de "ข้อผิดพลาด"
      message: "ข้อผิดพลาดทั่วไปของระบบ",
    },
    __UNKNOWN_ERROR: {
      tag: "MaiThrapSaHet",
      message: "Khor phit phat thi mai thrap sa-het",
    },
    __TypeError: {
      tag: "PhitPraphet",
      message: "Praphet khomun mai thuk tong",
    },
    __ReferenceError: {
      tag: "PhitKarnAngIng",
      message: "Mai phop tua-prae nai khop-khet",
    },
    __SyntaxError: {
      tag: "PhitWaiyakorn",
      message: "Kod mai thuk tong",
    },
    __RangeError: {
      tag: "NokKhopKhet",
      message: "Kha yu nok khop khet thi anumat",
    },
    __URIError: {
      tag: "UriPhitPhat",
      message: "URI mai thuk tong rue mai somboon",
    },
    __EvalError: {
      tag: "EvalPhitPhat",
      message: "Khor phit phat kiaogap fank-chan eval",
    },
  },
}).grammar();
