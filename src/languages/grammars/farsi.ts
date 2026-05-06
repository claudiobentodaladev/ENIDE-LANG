import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const farsi = new Language({
  language: "farsi",
  about:
    "ENIDE yek transpayler ghabele tarjome ast ke ejaze barname nevisi be har zabani ra midahad",

  include: DocStr(
    "Shamel_kardan",
    "Baraye gonjandane zaban ya ketabkhane-ha estefade mishavad",
  ),

  commands: {
    __about: DocStr("darbare", "baraye daryafte etelaat darbare ENIDE"),
    __help: DocStr("komak", "baraye daryafte liste hameye dastoorat"),
    __version: DocStr("noskhe", "baraye daryafte noskhye feli ENIDE"),
    __languages: DocStr("zabanha", "baraye daryafte liste hameye zabanha"),
    __documentation: DocStr("rahnama", "baraye daryafte rahnama"),
    __grammar: DocStr(
      "dastor_zaban",
      "baraye daryafte dastor zabane mored nazar",
    ),
  },

  library: {
    __standard: {
      main: DocStr("standard", "baraye dastresi be tavabe standard mofid"),
      __isarray: DocStr("ArrayAst", "check kardan baraye array boodan"),
      __isobject: DocStr("SheyAst", "check kardan baraye shey boodan"),
      __typeof: DocStr("Noe", "baraye daryafte noe meghdar"),
      __parse: DocStr("Parse", "baraye tabdile reshte be meghdar sahih"),
    },

    __math: {
      main: DocStr("riyazi", "baraye dastresi be tavabe riyazi"),
      __pi: DocStr("PI", "baraye daryafte adade pi"),
      __sqrt: DocStr("Rishe", "baraye daryafte rishye dovom"),
      __pow: DocStr("Tavan", "baraye mohasebe tavan"),
      __round: DocStr("Gerd", "baraye gerd kardane adad"),
      __random: DocStr("Tasodofi", "baraye adade tasodofi"),
      __max: DocStr("Bishtarin", "baraye daryafte bishtarin meghdar"),
      __min: DocStr("Kamtarin", "baraye daryafte kamtarin meghdar"),
      __isNumber: DocStr("AdadAst", "check kardan baraye adad boodan"),
      __isInteger: DocStr("SahihAst", "check kardan baraye sahih boodan"),
      __isFloat: DocStr("AshariAst", "check kardan baraye ashari boodan"),
      __cos: DocStr("Cos", "baraye cosinus zaveye be radyan"),
      __sin: DocStr("Sin", "baraye sinus zaveye be radyan"),
      __tan: DocStr("Tan", "baraye tangent zaveye be radyan"),
    },

    __string: {
      main: DocStr("reshte", "baraye dastresi be tavabe reshte"),
      __length: DocStr("Tool", "baraye daryafte toole reshte"),
      __toUpperCase: DocStr("Bozorg", "tabdil be horoofe bozorg"),
      __toLowerCase: DocStr("Koochak", "tabdil be horoofe koochak"),
      __include: DocStr("Darad", "check kardan baraye vojoode zir-reshte"),
      __repeat: DocStr("Takrar", "baraye takrare reshte be tedad moshakhas"),
    },

    __date: {
      main: DocStr("tarikh", "baraye dastresi be tavabe tarikh va saat"),
      __now: DocStr("Hala", "baraye daryafte tarikhe feli"),
      __year: DocStr("Sal", "baraye daryafte sal"),
      __month: DocStr("Mah", "baraye daryafte mah"),
      __dayMonth: DocStr("RoozMah", "baraye daryafte rooze mah"),
      __dayWeek: DocStr("RoozHafte", "baraye daryafte rooze hafte"),
      __hour: DocStr("Saat", "baraye daryafte saat"),
      __minute: DocStr("Daghighe", "baraye daryafte daghighe"),
      __second: DocStr("Saniye", "baraye daryafte saniye"),
    },
  },

  types: {
    __number: DocStr("adad", "baraye tarife moteghayere adadi"),
    __string: DocStr("reshte", "baraye tarife moteghayere reshte-i"),
    __boolean: DocStr("manteghi", "baraye tarife moteghayere manteghi"),
    __object: DocStr("shey", "baraye elan kardane yek shey saket"),
    __void: DocStr("khali", "baraye tarife tabe-i ke meghdar barmigardanad"),
    __array: DocStr("araye", "baraye tarife sakhtare dadaye araye"),
  },

  specialValues: {
    __true: DocStr("Dorost", "meghdare manteghi dorost"),
    __false: DocStr("Ghalat", "meghdare manteghi ghalat"),
    __null: DocStr("hich", "adam-e vojood-e meghdar"),
  },

  words: {
    __new: DocStr("jadid", "baraye sakhtane namoone jadide yek class"),
    __this: DocStr("in", "baraye dastresi be sefate classe khod"),
    __extends: DocStr(
      "miras",
      "baraye elan inke class az class dige miras mibarad",
    ),
  },

  accessModifiers: {
    __private: DocStr("khososi", "faghat dakhele class ghabel dastresi ast"),
    __public: DocStr("omoomi", "az harja ghabel dastresi ast"),
    __protected: DocStr(
      "mohafezat_shode",
      "dakhele class va subclass-haye an ghabel dastresi ast",
    ),
    __readonly: DocStr(
      "faghat_khandan",
      "meghdar faghat yek bar mishavad tayin shod",
    ),
    __static: DocStr("saket", "be class taalogh darad na be namoone"),
  },

  methods: {
    method: {
      __print: DocStr("chap", "baraye chape meghdar"),
      __scan: DocStr("begir", "baraye daryafte voroodi"),
      __return: DocStr("bazgasht", "baraye bazgashte meghdar az tabe"),
      __break: DocStr("shekstan", "baraye khoroj az halghye"),
      __continue: DocStr("edame", "baraye raftan be takrare badi"),
    },

    sentences: {
      __function: DocStr("tabe", "baraye tarife tabe"),
      __if: DocStr("agar", "baraye tarife shart"),
      __else: DocStr("vagarne", "baraye sharte jaygozin"),
      __while: DocStr("ta_zamani_ke", "baraye halgheye while"),
      __for: DocStr("baraye", "baraye halgheye for"),
      __switch: DocStr("entekhab", "baraye saakhtare entekhabi"),
      __case: DocStr("mored", "baraye morede entekhab"),
      __default: DocStr("pishfarz", "baraye morede pishfarz"),
      __try: DocStr("emtehan", "baraye moshakhase blocke try"),
      __catch: DocStr("gereftan", "baraye moshakhase blocke khata"),
      __finally: DocStr("dar_nehyat", "baraye blocki ke hamishe ejra mishavad"),
      __class: DocStr("kelase", "baraye tarife kelase"),
      __constructor: DocStr(
        "sazande",
        "sakhtare baraye elan sefat-haye kelase",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Payam",
      "Meghdar",
      "Moteghayer",
      "Sefe",
      "Shey",
      "Montazar",
      "Daryaft",
      "Tayin_Sabit",
      "Parametre_Tekrari",
      "Rahnamaei",
      "Token_Namoatabar",
      "Sarriz_Stack",
      "Token",
      "Payan_Ghayr_Montazar",
    ),
    main: errorMessage("KHATA", "khataye omoomi system"),
    __TypeError: errorMessage("KHATAYE_TYPE", "nove na-moatabar dar amaliyat"),
    __InitError: errorMessage(
      "KHATAYE_MOGHADDAME_SAZI",
      "moteghayer moghaddame sazi nashode ast",
    ),
    __ReferenceError: errorMessage(
      "KHATAYE_ERJA",
      "moteghayer, tabe ya ketabkhane dar scope vojood nadarad",
    ),
    __SyntaxError: errorMessage("KHATAYE_NEGARESHI", "code na-moatabar"),
    __RangeError: errorMessage(
      "KHATAYE_MAHDOODE",
      "meghdar kharej az mahdoode ast",
    ),
    __URIError: errorMessage("KHATAYE_URI", "URI na-moatabar ya malformed"),
    __EvalError: errorMessage("KHATAYE_EVAL", "khata dar tabe eval"),
    __UNKNOWN_ERROR: errorMessage(
      "KHATAYE_NAMALOM",
      "khata kamelan namalom ast",
    ),
  },

  example: {
    __array: [
      "ghaza",
      "keshvarha",
      "asnad",
      "tags",
      "rangha",
      "mahsolat",
      "karbaran",
      "dosteha",
      "emtiazha",
      "zabanha",
    ],
    __boolean: [
      "halat",
      "bazeghAst",
      "faAlAst",
      "namayonAst",
      "ejazedarad",
      "varedShode",
      "faalShode",
      "tamomShode",
      "taeidShode",
      "hazfShode",
    ],
    __function: [
      "namBedar",
      "meghdarbedar",
      "clickRasidegi",
      "dataBegir",
      "tarikFormatkun",
      "vorodiParse",
      "formValidkun",
      "elementNeshanBede",
      "halatUpdate",
      "majiKhesab",
    ],
    __number: [
      "son",
      "sal",
      "shomaresh",
      "majmoe",
      "gheymat",
      "index",
      "moddat",
      "meghdar",
      "emtiaz",
      "timeout",
    ],
    __object: [
      "shakhs",
      "karbard",
      "config",
      "pasokh",
      "pardakht",
      "tanzim",
      "profil",
      "neshani",
      "metadata",
      "neshast",
    ],
    __string: [
      "nam",
      "onvan",
      "sharh",
      "email",
      "ramz_oboor",
      "payam",
      "etikete",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "vorod",
      "shorooe",
      "paksazi",
      "bazneshin",
      "nabod",
      "khoroj",
      "cachePak",
      "dbZakhire",
      "emailErsal",
      "ruydadSabt",
    ],
  },
}).grammar();
