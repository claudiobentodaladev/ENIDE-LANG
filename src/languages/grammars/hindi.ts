import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const hindi = new Language({
  language: "hindi",
  about:
    "ENIDE ek anuvaad yogya transpiler hai jo kisi bhi bhasha mein programming ki anumati deta hai",

  include: DocStr(
    "Shamil_karna",
    "Bhasha ya library ko shamil karne ke liye upyog kiya jaata hai",
  ),

  commands: {
    __about: DocStr(
      "ke_baare_mein",
      "ENIDE ke baare mein jaankari prapt karne ke liye",
    ),
    __help: DocStr(
      "sahayata",
      "sabhi upalabdh commands ki soochi prapt karne ke liye",
    ),
    __version: DocStr(
      "sanskaran",
      "ENIDE ka vartaman sanskaran prapt karne ke liye",
    ),
    __languages: DocStr(
      "bhashayein",
      "sabhi upalabdh bhashaon ki soochi prapt karne ke liye",
    ),
    __documentation: DocStr(
      "dastaavez",
      "kisi bhasha ke liye dastaavez prapt karne ke liye",
    ),
    __grammar: DocStr(
      "vyaakaran",
      "kisi bhasha ka vyaakaran prapt karne ke liye",
    ),
  },

  library: {
    __standard: {
      main: DocStr("maanak", "maanak upyogi vidhiyon tak pahunchne ke liye"),
      __isarray: DocStr(
        "SoocheeHai",
        "jaanchne ke liye ki kya maan ek soochi hai",
      ),
      __isobject: DocStr(
        "VastuHai",
        "jaanchne ke liye ki kya maan ek vastu hai",
      ),
      __typeof: DocStr("Prakar", "maan ka prakar prapt karne ke liye"),
      __parse: DocStr(
        "Parse",
        "string ko sahi parsit maan mein badalne ke liye",
      ),
    },

    __math: {
      main: DocStr("ganit", "ganit karyon tak pahunchne ke liye"),
      __pi: DocStr("PI", "pi ka maan prapt karne ke liye"),
      __sqrt: DocStr("Vargmool", "vargmool prapt karne ke liye"),
      __pow: DocStr("Ghaat", "kisi sankhya ki ghaat prapt karne ke liye"),
      __round: DocStr("Round", "sankhya ko round karne ke liye"),
      __random: DocStr(
        "Yadrichhik",
        "ek yadrichhik sankhya prapt karne ke liye",
      ),
      __max: DocStr("Adhikatam", "adhikatam maan prapt karne ke liye"),
      __min: DocStr("Nyunatam", "nyunatam maan prapt karne ke liye"),
      __isNumber: DocStr(
        "SankhyaHai",
        "jaanchne ke liye ki kya maan ek sankhya hai",
      ),
      __isInteger: DocStr(
        "PurnankHai",
        "jaanchne ke liye ki kya maan ek purnank hai",
      ),
      __isFloat: DocStr(
        "DashamlavHai",
        "jaanchne ke liye ki kya maan ek dashamlav hai",
      ),
      __cos: DocStr("Cos", "rediyan mein kon ka cosine prapt karne ke liye"),
      __sin: DocStr("Sin", "rediyan mein kon ka sine prapt karne ke liye"),
      __tan: DocStr("Tan", "rediyan mein kon ka tangent prapt karne ke liye"),
    },

    __string: {
      main: DocStr("shabd", "shabd herafer karyon tak pahunchne ke liye"),
      __length: DocStr("Lambai", "string ki lambai prapt karne ke liye"),
      __toUpperCase: DocStr(
        "BadeAkshar",
        "string ko bade aksharon mein badalne ke liye",
      ),
      __toLowerCase: DocStr(
        "ChoteAkshar",
        "string ko chote aksharon mein badalne ke liye",
      ),
      __include: DocStr(
        "ShamailHai",
        "jaanchne ke liye ki string mein substring hai",
      ),
      __repeat: DocStr(
        "Dohraayen",
        "string ko nishchit baar dohraaane ke liye",
      ),
    },

    __date: {
      main: DocStr("tithi", "tithi aur samay karyon tak pahunchne ke liye"),
      __now: DocStr("Abhi", "vartaman tithi aur samay prapt karne ke liye"),
      __year: DocStr("Varsh", "varsh prapt karne ke liye"),
      __month: DocStr("Maah", "maah prapt karne ke liye"),
      __dayMonth: DocStr("Din", "maah ka din prapt karne ke liye"),
      __dayWeek: DocStr("SaptahDin", "saptah ka din prapt karne ke liye"),
      __hour: DocStr("Ghanta", "ghanta prapt karne ke liye"),
      __minute: DocStr("Minut", "minut prapt karne ke liye"),
      __second: DocStr("Second", "second prapt karne ke liye"),
    },
  },

  types: {
    __number: DocStr(
      "sankhya",
      "sankhya prakar ke variable ki ghoshna karne ke liye",
    ),
    __string: DocStr(
      "shabd",
      "string prakar ke variable ki ghoshna karne ke liye",
    ),
    __boolean: DocStr(
      "bool",
      "boolean prakar ke variable ki ghoshna karne ke liye",
    ),
    __object: DocStr("vastu", "ek sthir vastu ghoshit karne ke liye"),
    __void: DocStr(
      "shunya",
      "aisi function ghoshit karne ke liye jo maan vapas na kare",
    ),
    __array: DocStr("soochi", "soochi data sanrachna ghoshit karne ke liye"),
  },

  specialValues: {
    __true: DocStr("Sahi", "boolean sahi maan"),
    __false: DocStr("Galat", "boolean galat maan"),
    __null: DocStr("khaali", "maan ki anutpasthiti"),
  },

  words: {
    __new: DocStr("naya", "kisi class ka naya udaaharan banane ke liye"),
    __this: DocStr("yeh", "apni class ke visheshataon tak pahunchne ke liye"),
    __extends: DocStr(
      "vistaar",
      "ghoshna karne ke liye ki class doosri class se uti hai",
    ),
  },

  accessModifiers: {
    __private: DocStr("niji", "sirf class ke andar pahunch yogya"),
    __public: DocStr("saarvjanik", "kahin se bhi pahunch yogya"),
    __protected: DocStr(
      "surakshit",
      "class aur uski subclasses mein pahunch yogya",
    ),
    __readonly: DocStr(
      "sirf_padhna",
      "maan sirf ek baar nirdharit kiya ja sakta hai",
    ),
    __static: DocStr("sthir", "class ka hai, instances ka nahi"),
  },

  methods: {
    method: {
      __print: DocStr("dikhao", "screen par maan dikhane ke liye"),
      __scan: DocStr("input", "input se maan padhne ke liye"),
      __return: DocStr("vapas", "function se maan vapas karne ke liye"),
      __break: DocStr("todo", "loop se bahar nikalne ke liye"),
      __continue: DocStr("jaari_rakho", "agale punaravarti par jaane ke liye"),
    },

    sentences: {
      __function: DocStr("kaarya", "function ki ghoshna karne ke liye"),
      __if: DocStr("agar", "shart ki ghoshna karne ke liye"),
      __else: DocStr("nahi_toh", "vikalpik shart ki ghoshna karne ke liye"),
      __while: DocStr("jab_tak", "while loop ki ghoshna karne ke liye"),
      __for: DocStr("ke_liye", "for loop ki ghoshna karne ke liye"),
      __switch: DocStr("badlo", "chayan sanrachna ki ghoshna karne ke liye"),
      __case: DocStr(
        "sthiti",
        "chayan sanrachna mein sthiti ki ghoshna karne ke liye",
      ),
      __default: DocStr(
        "mool",
        "chayan sanrachna mein mool sthiti ki ghoshna karne ke liye",
      ),
      __try: DocStr("koshish", "try block ki ghoshna karne ke liye"),
      __catch: DocStr("pakdo", "truti nivaaran block ki ghoshna karne ke liye"),
      __finally: DocStr(
        "antatah",
        "antatah block ki ghoshna jo hamesha chalta hai",
      ),
      __class: DocStr("kaksha", "class ki ghoshna karne ke liye"),
      __constructor: DocStr(
        "nirmata",
        "class mein visheshataon ki ghoshna ke liye sanrachna",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Sandesh",
      "Maan",
      "Charar",
      "Visheshata",
      "Vastu",
      "Apekshit",
      "Prapt",
      "Sthiraank_Nirdhaaran",
      "Dvitiya_Paramiter",
      "Sujaav",
      "Avaidh_Token",
      "Stack_Bhaav",
      "Token",
      "Anapekshit_Ant",
    ),
    main: errorMessage("TRUTI", "samanya system truti"),
    __TypeError: errorMessage("PRAKAR_TRUTI", "operation mein avaidh prakar"),
    __InitError: errorMessage(
      "PRARAMBH_TRUTI",
      "variable ko aarambh nahi kiya gaya",
    ),
    __ReferenceError: errorMessage(
      "SANDARBH_TRUTI",
      "variable, function ya library scope mein maujood nahi hai",
    ),
    __SyntaxError: errorMessage("SYNTAX_TRUTI", "avaidh code"),
    __RangeError: errorMessage(
      "SEEMA_TRUTI",
      "maan anumati prapt seema se bahar hai",
    ),
    __URIError: errorMessage("URI_TRUTI", "vikrut ya avaidh URI"),
    __EvalError: errorMessage("EVAL_TRUTI", "eval se sambandhit truti"),
    __UNKNOWN_ERROR: errorMessage(
      "AGYAAT_TRUTI",
      "poori tarah se agyaat truti",
    ),
  },

  example: {
    __array: [
      "khaana",
      "desh",
      "cheezein",
      "tags",
      "rang",
      "utpaad",
      "upyogkarta",
      "shreniyaan",
      "ank",
      "bhashayein",
    ],
    __boolean: [
      "sthiti",
      "vaayaskHai",
      "sakriyHai",
      "drishyHai",
      "anumatiHai",
      "loginKiyaHai",
      "sakshamHai",
      "pooraHai",
      "satyaapitHai",
      "mita_diyaHai",
    ],
    __function: [
      "naamPrapt",
      "maanPrapt",
      "clikSambhalo",
      "dataLao",
      "tithiFormaatKaro",
      "inputParse",
      "formValidKaro",
      "tattvaDikhao",
      "sthitiUpdate",
      "yogPhalo",
    ],
    __number: [
      "aayu",
      "varsh",
      "ginti",
      "yog",
      "keemat",
      "soochkaank",
      "samay",
      "matra",
      "ank",
      "timeout",
    ],
    __object: [
      "vyakti",
      "upyogkarta",
      "config",
      "uttar",
      "bhugtaan",
      "settings",
      "profil",
      "pataa",
      "metadata",
      "session",
    ],
    __string: [
      "naam",
      "shirshak",
      "vivaran",
      "email",
      "password",
      "sandesh",
      "chinh",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "loginKaro",
      "shuru",
      "saafKaro",
      "punahPraambh",
      "nasht",
      "logoutKaro",
      "cacheSaafKaro",
      "dbMeinSaaho",
      "emailBhejo",
      "ghatnaaDarj",
    ],
  },
}).grammar();
