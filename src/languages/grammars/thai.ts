import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const thai = new Language({
  language: "thai",
  about:
    "ENIDE kue tua plae phasa thi samat pla dai sueng chuay hai khian prokraem nai phasa dai ko dai",

  include: DocStr(
    "Ruam",
    "chai samrap ruam phasa, laibrari rue khrong-sang khomun jak fai uen",
  ),

  commands: {
    __about: DocStr("Kiaogap", "phuea du khomun kiaogap ENIDE"),
    __help: DocStr("Chuayluea", "phuea du raichue khamsang thangmot thi mi yu"),
    __version: DocStr("WerChan", "phuea du wer-chan patjuban khong ENIDE"),
    __languages: DocStr("Phasa", "phuea du raichue phasa thangmot thi mi yu"),
    __documentation: DocStr("EkKasarn", "phuea du ek-kasarn khong phasa"),
    __grammar: DocStr("Waiyakorn", "phuea du waiyakorn khong phasa"),
  },

  library: {
    __standard: {
      main: DocStr("Matrathan", "phuea khao thueng withi matrathan thi mi yu"),
      __isarray: DocStr("PenArray", "truaj-sob wa pen array rue mai"),
      __isobject: DocStr("PenSing", "truaj-sob wa pen sing rue mai"),
      __typeof: DocStr("PraphetKhong", "phuea du praphet khong kha"),
      __parse: DocStr(
        "WiKhro",
        "plian kha jak khokwam pen praphet thi thuk tong",
      ),
    },

    __math: {
      main: DocStr("Kanit", "phuea khao thueng fank-chan khanitsat"),
      __pi: DocStr("PI", "phuea du kha pi"),
      __sqrt: DocStr("RakThiSong", "phuea ha rak thi song"),
      __pow: DocStr("Kamlang", "phuea ha kha yok kamlang"),
      __round: DocStr("PatLong", "phuea pat tua-lek"),
      __random: DocStr("Soom", "phuea soom tua-lek"),
      __max: DocStr("MaakSud", "phuea ha kha maak thi sud"),
      __min: DocStr("NoiSud", "phuea ha kha noi thi sud"),
      __isNumber: DocStr("PenTuaLek", "truaj-sob wa pen tua-lek rue mai"),
      __isInteger: DocStr(
        "PenJamnuanTem",
        "truaj-sob wa pen jamnuan tem rue mai",
      ),
      __isFloat: DocStr("PenTotsaniyom", "truaj-sob wa pen totsaniyom rue mai"),
      __cos: DocStr("Cos", "phuea ha cosine khong mum nai radian"),
      __sin: DocStr("Sin", "phuea ha sine khong mum nai radian"),
      __tan: DocStr("Tan", "phuea ha tangent khong mum nai radian"),
    },

    __string: {
      main: DocStr("Khokhwam", "phuea khao thueng fank-chan jatkan khokwam"),
      __length: DocStr("KhwamYao", "phuea du khwamyao khong khokwam"),
      __toUpperCase: DocStr("TuaPhimYai", "plian khokwam pen tua phim yai"),
      __toLowerCase: DocStr("TuaPhimNoi", "plian khokwam pen tua phim lek"),
      __include: DocStr(
        "Mi_Yu_Nai",
        "truaj-sob wa khokwam mi khokwam uen yu nai",
      ),
      __repeat: DocStr("Samlao", "samlao khokwam jamnuan khrang"),
    },

    __date: {
      main: DocStr("Wanthi", "phuea khao thueng fank-chan jatkan wan lae wela"),
      __now: DocStr("Tondni", "phuea du wanthi lae wela patjuban"),
      __year: DocStr("Pee", "phuea du pee"),
      __month: DocStr("Duean", "phuea du duean"),
      __dayMonth: DocStr("WanThiNaiDuean", "phuea du wanthi nai duean"),
      __dayWeek: DocStr("WanNaiSapda", "phuea du wan nai sapda"),
      __hour: DocStr("Chuamong", "phuea du chuamong"),
      __minute: DocStr("Nathi", "phuea du nathi"),
      __second: DocStr("Winathi", "phuea du winathi"),
    },
  },

  types: {
    __number: DocStr("TuaLek", "prakard tua-prae praphet tua-lek"),
    __string: DocStr("Khokhwam", "prakard tua-prae praphet khokwam"),
    __boolean: DocStr("Bool", "prakard tua-prae praphet bool"),
    __object: DocStr("Sing", "phuea prakat sing thi khong thi"),
    __void: DocStr("Wanwao", "prakard fank-chan thi mai khuen kha"),
    __array: DocStr("Array", "prakard khrong-sang array"),
  },

  specialValues: {
    __true: DocStr("Jing", "kha bool jing"),
    __false: DocStr("Thet", "kha bool thet"),
    __null: DocStr("WangPlao", "mai mi kha"),
  },

  words: {
    __new: DocStr("Mai", "sang instance mai khong klas"),
    __this: DocStr("Ni", "khao thueng khunsombat khong klas tua eng"),
    __extends: DocStr("SibThot", "prakard wa klas sib-thot jak klas uen"),
  },

  accessModifiers: {
    __private: DocStr("Suan-tua", "khao thueng dai nai klas thaonan"),
    __public: DocStr("Satharon", "khao thueng dai jak thi dai"),
    __protected: DocStr("Khum-khong", "khao thueng dai nai klas lae sub-klas"),
    __readonly: DocStr("AnDai", "kha kamnot dai khrung diao thaonan"),
    __static: DocStr("Khong-thi", "pen khong klas eng mai chai instance"),
  },

  methods: {
    method: {
      __print: DocStr("Phim", "sadaeng kha bon na jor"),
      __scan: DocStr("Rabkha", "an kha jak kan nam khao"),
      __return: DocStr("Khuenkha", "khuen kha jak fank-chan"),
      __break: DocStr("Yut", "ok jak vong-lop"),
      __continue: DocStr("TomTaw", "kham pai yang vong rob na khong vong-lop"),
    },

    sentences: {
      __function: DocStr("FankChan", "prakard fank-chan"),
      __if: DocStr("Tha", "prakard nguean-khai"),
      __else: DocStr("MiChanan", "prakard nguean-khai thang-lueak"),
      __while: DocStr("NaiKhanaThi", "prakard vong-lop while"),
      __for: DocStr("Samrab", "prakard vong-lop for"),
      __switch: DocStr("Savit", "prakard khrong-sang lueak"),
      __case: DocStr("Korani", "prakard korani nai khrong-sang lueak"),
      __default: DocStr(
        "KhaMuenTon",
        "prakard korani muen ton nai khrong-sang lueak",
      ),
      __try: DocStr("Long", "prakard blok long"),
      __catch: DocStr("Jap", "prakard blok jatkan koran phit phat"),
      __finally: DocStr("NaiTisud", "prakard blok thi tham-ngan samer"),
      __class: DocStr("Klas", "prakard klas"),
      __constructor: DocStr(
        "PhuSang",
        "khrong-sang thi anumat prakard khunsombat nai klas",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Khowkhwam",
      "Kha",
      "TuaPrae",
      "Khunsombat",
      "Sing",
      "Khaad_Wang",
      "DaiRab",
      "Kamnotkha_Khongti",
      "Paramiter_Sarm",
      "Khofaen",
      "Token_Phit",
      "Stack_Tem",
      "Token",
      "PlaiSud_Khomun_Phitkhad",
    ),
    main: errorMessage("PhitPhlat", "khor phitphlat thuapai khong rabob"),
    __TypeError: errorMessage("PhitPraphet", "praphet khomun mai thuk tong"),
    __InitError: errorMessage(
      "PhitRoem",
      "tua-prae yang mai dai tham-ngan roem ton",
    ),
    __ReferenceError: errorMessage(
      "PhitKarnAngIng",
      "mai phob tua-prae, fank-chan rue laibrari nai khop-khet",
    ),
    __SyntaxError: errorMessage("PhitWaiyakorn", "kod mai thuk tong"),
    __RangeError: errorMessage(
      "NokKhopKhet",
      "kha yu nok khop khet thi anumat",
    ),
    __URIError: errorMessage(
      "UriPhitPhat",
      "URI mai thuk tong rue mai somboon",
    ),
    __EvalError: errorMessage(
      "EvalPhitPhat",
      "khor phit phat kiaogap fank-chan eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "MaiThrapSaHet",
      "khor phit phat thi mai thrap sa-het",
    ),
  },

  example: {
    __array: [
      "ahan",
      "prathet",
      "raikan",
      "tag",
      "si",
      "sinkhา",
      "phuchai",
      "praepheth",
      "khaen",
      "phasa",
    ],
    __boolean: [
      "sathana",
      "penPhuyai",
      "penActive",
      "henDai",
      "miSitthi",
      "logIn_laeo",
      "uenGan",
      "set_laeo",
      "yanYan",
      "lop_laeo",
    ],
    __function: [
      "duChue",
      "duKha",
      "jatkanKlik",
      "duKhomun",
      "rupbabWanthi",
      "wikroKhomun",
      "tatsoiFormular",
      "sadaengRaikan",
      "upDateSathana",
      "khanwonRuam",
    ],
    __number: [
      "aayu",
      "pee",
      "jamnuan",
      "ruam",
      "rakha",
      "index",
      "wela",
      "priminan",
      "khaen",
      "timeout",
    ],
    __object: [
      "khon",
      "phuchai",
      "karntatang",
      "khomtob",
      "jaidngen",
      "karntatang_rabob",
      "profai",
      "thiyu",
      "khomun_propaet",
      "session",
    ],
    __string: [
      "chue",
      "hua-kho",
      "railaiad",
      "email",
      "rhadphan",
      "khowkhwam",
      "label",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "logKhao",
      "roem-ton",
      "tambaikhai",
      "reset",
      "thamlaai",
      "logOk",
      "lobCache",
      "banthukDB",
      "songEmail",
      "banthukthueng",
    ],
  },
}).grammar();
