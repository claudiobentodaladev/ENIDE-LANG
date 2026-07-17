import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const hindi = new Language({
  language: "hindi",
  about:
    "ENIDE ek bahubhashi programming bhasha hai jo aapko kisi bhi bhasha mein programming karne ki anumati deti hai.",
  include: DocStr(
    "ShamilKarna",
    "Bhasha ya library ko shamil karne ke liye upyog kiya jaata hai",
  ),

  commands: {
    __about: DocStr(
      "KeBaareMein",
      "ENIDE ke baare mein jaankari prapt karne ke liye",
    ),
    __help: DocStr(
      "Sahayata",
      "sabhi upalabdh commands ki soochi prapt karne ke liye",
    ),
    __version: DocStr(
      "Sanskaran",
      "ENIDE ka vartaman sanskaran prapt karne ke liye",
    ),
    __languages: DocStr(
      "Bhashayein",
      "sabhi upalabdh bhashaon ki soochi prapt karne ke liye",
    ),
    __documentation: DocStr(
      "Dastaavez",
      "kisi bhasha ke liye dastaavez prapt karne ke liye",
    ),
    __grammar: DocStr(
      "Vyaakaran",
      "kisi bhasha ka vyaakaran prapt karne ke liye",
    ),
  },

  library: {
    __standard: {
      main: DocStr("Maanak", "maanak upyogi vidhiyon tak pahunchne ke liye"),
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
      main: DocStr("Ganit", "ganit karyon tak pahunchne ke liye"),
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
      main: DocStr("Shabd", "shabd herafer karyon tak pahunchne ke liye"),
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
        "ShamilHai",
        "jaanchne ke liye ki string mein substring hai",
      ),
      __repeat: DocStr(
        "Dohraayen",
        "string ko nishchit baar dohraaane ke liye",
      ),
    },

    __date: {
      main: DocStr("Tithi", "tithi aur samay karyon tak pahunchne ke liye"),
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
      "Sankhya",
      "sankhya prakar ke variable ki ghoshna karne ke liye",
    ),
    __string: DocStr(
      "Shabd",
      "string prakar ke variable ki ghoshna karne ke liye",
    ),
    __boolean: DocStr(
      "Bool",
      "boolean prakar ke variable ki ghoshna karne ke liye",
    ),
    __object: DocStr("Vastu", "ek sthir vastu ghoshit karne ke liye"),
    __void: DocStr(
      "Shunya",
      "aisi function ghoshit karne ke liye jo maan vapas na kare",
    ),
    __array: DocStr("Soochi", "soochi data sanrachna ghoshit karne ke liye"),
  },

  specialValues: {
    __true: DocStr("Sahi", "boolean sahi maan"),
    __false: DocStr("Galat", "boolean galat maan"),
    __null: DocStr("Khaali", "maan ki anutpasthiti"),
  },

  words: {
    __new: DocStr("Naya", "kisi class ka naya udaaharan banane ke liye"),
    __this: DocStr("Yeh", "apni class ke visheshataon tak pahunchne ke liye"),
    __extends: DocStr(
      "Vistaar",
      "ghoshna karne ke liye ki class doosri class se uti hai",
    ),
  },

  accessModifiers: {
    __private: DocStr("Niji", "sirf class ke andar pahunch yogya"),
    __public: DocStr("Saarvjanik", "kahin se bhi pahunch yogya"),
    __protected: DocStr(
      "Surakshit",
      "class aur uski subclasses mein pahunch yogya",
    ),
    __readonly: DocStr(
      "SirfPadhna",
      "maan sirf ek baar nirdharit kiya ja sakta hai",
    ),
    __static: DocStr("Sthir", "class ka hai, instances ka nahi"),
  },

  methods: {
    method: {
      __print: DocStr("Dikhao", "screen par maan dikhane ke liye"),
      __scan: DocStr("Input", "input se maan padhne ke liye"),
      __return: DocStr("Vapas", "function se maan vapas karne ke liye"),
      __break: DocStr("Todo", "loop se bahar nikalne ke liye"),
      __continue: DocStr("JaariRakho", "agale punaravarti par jaane ke liye"),
    },

    sentences: {
      __function: DocStr("Kaarya", "function ki ghoshna karne ke liye"),
      __if: DocStr("Agar", "shart ki ghoshna karne ke liye"),
      __else: DocStr("NahiToh", "vikalpik shart ki ghoshna karne ke liye"),
      __while: DocStr("JabTak", "while loop ki ghoshna karne ke liye"),
      __for: DocStr("KeLiye", "for loop ki ghoshna karne ke liye"),
      __switch: DocStr("Badlo", "chayan sanrachna ki ghoshna karne ke liye"),
      __case: DocStr(
        "Sthiti",
        "chayan sanrachna mein sthiti ki ghoshna karne ke liye",
      ),
      __default: DocStr(
        "Mool",
        "chayan sanrachna mein mool sthiti ki ghoshna karne ke liye",
      ),
      __try: DocStr("Koshish", "try block ki ghoshna karne ke liye"),
      __catch: DocStr("Pakdo", "truti nivaaran block ki ghoshna karne ke liye"),
      __finally: DocStr(
        "Antatah",
        "antatah block ki ghoshna jo hamesha chalta hai",
      ),
      __class: DocStr("Kaksha", "class ki ghoshna karne ke liye"),
      __constructor: DocStr(
        "Nirmata",
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
      "SthiraankNirdhaaran",
      "DvitiyaParameter",
      "Sujaav",
      "AvaidhToken",
      "StackBhaav",
      "Token",
      "AnapekshitAnt",
    ),
    main: errorMessage("TRUTI", "samanya system truti"),
    __TypeError: errorMessage("PRAKARTRUTI", "operation mein avaidh prakar"),
    __InitError: errorMessage(
      "PRARAMBHTRUTI",
      "variable ko aarambh nahi kiya gaya",
    ),
    __ReferenceError: errorMessage(
      "SANDARBHTRUTI",
      "variable, function ya library scope mein maujood nahi hai",
    ),
    __SyntaxError: errorMessage("SYNTAXTRUTI", "avaidh code"),
    __RangeError: errorMessage(
      "SEEMATRUTI",
      "maan anumati prapt seema se bahar hai",
    ),
    __URIError: errorMessage("URITRUTI", "vikrut ya avaidh URI"),
    __EvalError: errorMessage("EVALTRUTI", "eval se sambandhit truti"),
    __UNKNOWN_ERROR: errorMessage("AGYAATTRUTI", "poori tarah se agyaat truti"),
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
      "mitaDiyaHai",
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
