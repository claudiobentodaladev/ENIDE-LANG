import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const tagalog = new Language({
  language: "tagalog",
  about:
    "Ang ENIDE ay isang transpilador na maaaring isalin na nagbibigay-daan sa pagprograma sa anumang wika",

  include: DocStr(
    "Isama",
    "ginagamit upang isama ang wika, mga aklatan o mga istruktura ng data mula sa ibang file",
  ),

  commands: {
    __about: DocStr(
      "Tungkol",
      "upang makakuha ng impormasyon tungkol sa ENIDE",
    ),
    __help: DocStr("Tulong", "upang makakuha ng listahan ng lahat ng utos"),
    __version: DocStr(
      "Bersyon",
      "upang makakuha ng kasalukuyang bersyon ng ENIDE",
    ),
    __languages: DocStr(
      "MgaWika",
      "upang makakuha ng listahan ng lahat ng wika",
    ),
    __documentation: DocStr(
      "Dokumentasyon",
      "upang makakuha ng dokumentasyon para sa wika",
    ),
    __grammar: DocStr("Gramatika", "upang makakuha ng gramatika ng wika"),
  },

  library: {
    __standard: {
      main: DocStr(
        "Pamantayan",
        "upang ma-access ang mga karaniwang pamamaraan",
      ),
      __isarray: DocStr("ArrayBa", "upang suriin kung ang halaga ay array"),
      __isobject: DocStr("BagayBa", "upang suriin kung ang halaga ay bagay"),
      __typeof: DocStr("UriNg", "upang makuha ang uri ng halaga"),
      __parse: DocStr(
        "I_parse",
        "upang i-convert ang halaga mula sa string sa tamang uri",
      ),
    },

    __math: {
      main: DocStr(
        "Matematika",
        "upang ma-access ang mga function ng matematika",
      ),
      __pi: DocStr("PI", "upang makuha ang halaga ng pi"),
      __sqrt: DocStr("SquareRoot", "upang makuha ang square root ng numero"),
      __pow: DocStr("Power", "upang makuha ang power ng numero"),
      __round: DocStr("Round", "upang i-round ang numero"),
      __random: DocStr("Random", "upang makuha ang random na numero"),
      __max: DocStr("Max", "upang makuha ang pinakamataas na halaga"),
      __min: DocStr("Min", "upang makuha ang pinakamababang halaga"),
      __isNumber: DocStr("NumeroBa", "upang suriin kung ang halaga ay numero"),
      __isInteger: DocStr(
        "IntegerBa",
        "upang suriin kung ang halaga ay integer",
      ),
      __isFloat: DocStr("DecimalBa", "upang suriin kung ang halaga ay decimal"),
      __cos: DocStr("Cos", "upang makuha ang cosine ng anggulo sa radyan"),
      __sin: DocStr("Sin", "upang makuha ang sine ng anggulo sa radyan"),
      __tan: DocStr("Tan", "upang makuha ang tangente ng anggulo sa radyan"),
    },

    __string: {
      main: DocStr("String", "upang ma-access ang mga function ng string"),
      __length: DocStr("Haba", "upang makuha ang haba ng string"),
      __toUpperCase: DocStr(
        "GawingMalaki",
        "upang gawing malalaking titik ang string",
      ),
      __toLowerCase: DocStr(
        "GawingMaliit",
        "upang gawing maliliit na titik ang string",
      ),
      __include: DocStr(
        "Naglalaman",
        "upang suriin kung ang string ay naglalaman ng substring",
      ),
      __repeat: DocStr("Ulitin", "upang ulitin ang string nang ilang beses"),
    },

    __date: {
      main: DocStr(
        "Petsa",
        "upang ma-access ang mga function ng petsa at oras",
      ),
      __now: DocStr("Ngayon", "upang makuha ang kasalukuyang petsa at oras"),
      __year: DocStr("Taon", "upang makuha ang taon"),
      __month: DocStr("Buwan", "upang makuha ang buwan"),
      __dayMonth: DocStr("ArawNgBuwan", "upang makuha ang araw ng buwan"),
      __dayWeek: DocStr("ArawNgLinggo", "upang makuha ang araw ng linggo"),
      __hour: DocStr("Oras", "upang makuha ang oras"),
      __minute: DocStr("Minuto", "upang makuha ang minuto"),
      __second: DocStr("Segundo", "upang makuha ang segundo"),
    },
  },

  types: {
    __number: DocStr("Numero", "upang magdeklara ng variable na numero"),
    __string: DocStr("String", "upang magdeklara ng variable na string"),
    __boolean: DocStr("Bool", "upang magdeklara ng variable na boolean"),
    __object: DocStr("Bagay", "upang ideklara ang isang static na bagay"),
    __void: DocStr(
      "Walang",
      "upang magdeklara ng function na walang ibinabalik",
    ),
    __array: DocStr("Listahan", "upang magdeklara ng istruktura ng listahan"),
  },

  specialValues: {
    __true: DocStr("Totoo", "boolean na halaga ng totoo"),
    __false: DocStr("Mali", "boolean na halaga ng mali"),
    __null: DocStr("Wala", "kawalan ng halaga"),
  },

  words: {
    __new: DocStr("Bago", "upang lumikha ng bagong instance ng klase"),
    __this: DocStr(
      "Ito",
      "upang ma-access ang mga katangian ng sariling klase",
    ),
    __extends: DocStr(
      "Nagmamana",
      "upang ideklara na ang klase ay nagmamana mula sa isa pang klase",
    ),
  },

  accessModifiers: {
    __private: DocStr("Pribado", "naa-access lamang sa loob ng klase"),
    __public: DocStr("Pampubliko", "naa-access mula sa kahit saan"),
    __protected: DocStr(
      "Protektado",
      "naa-access sa loob ng klase at mga subklase nito",
    ),
    __readonly: DocStr(
      "BasahamLamang",
      "ang halaga ay maaari lamang italaga nang isang beses",
    ),
    __static: DocStr(
      "Estatiko",
      "kabilang sa mismong klase at hindi sa mga instance",
    ),
  },

  methods: {
    method: {
      __print: DocStr("Ipakita", "upang ipakita ang halaga sa screen"),
      __scan: DocStr("Basahin", "upang magbasa ng halaga mula sa input"),
      __return: DocStr("Ibalik", "upang ibalik ang halaga mula sa function"),
      __break: DocStr("Tigilan", "upang lumabas sa loop"),
      __continue: DocStr(
        "Ituloy",
        "upang lumaktaw sa susunod na iterasyon ng loop",
      ),
    },

    sentences: {
      __function: DocStr("Function", "upang magdeklara ng function"),
      __if: DocStr("Kung", "upang magdeklara ng kondisyon"),
      __else: DocStr("Kundi", "upang magdeklara ng alternatibong kondisyon"),
      __while: DocStr("Habang", "upang magdeklara ng while loop"),
      __for: DocStr("ParaSa", "upang magdeklara ng for loop"),
      __switch: DocStr("Lipat", "upang magdeklara ng selection structure"),
      __case: DocStr("Kaso", "upang magdeklara ng kaso sa selection structure"),
      __default: DocStr(
        "Default",
        "upang magdeklara ng default na kaso sa selection structure",
      ),
      __try: DocStr("Subukan", "upang magdeklara ng try block"),
      __catch: DocStr("Saluhin", "upang magdeklara ng error handling block"),
      __finally: DocStr(
        "SaWakas",
        "upang magdeklara ng block na laging gagana",
      ),
      __class: DocStr("Klase", "upang magdeklara ng klase"),
      __constructor: DocStr(
        "Tagagawa",
        "istruktura na nagbibigay-daan sa pagdedeklara ng mga katangian sa klase",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mensahe",
      "Halaga",
      "Variable",
      "Katangian",
      "Bagay",
      "Inaasahan",
      "Natanggap",
      "Pagtatalaga_Ng_Constant",
      "Dobleng_Parameter",
      "Pahiwatig",
      "Hindi_Wastong_Token",
      "Stack_Overflow",
      "Token",
      "Hindi_Inaasahang_Wakas_Ng_Input",
    ),
    main: errorMessage("MALI", "pangkalahatang mali sa sistema"),
    __TypeError: errorMessage("MALI_SA_URI", "hindi wastong uri sa operasyon"),
    __InitError: errorMessage(
      "MALI_SA_PAGSISIMULA",
      "ang variable ay hindi pa na-initialize",
    ),
    __ReferenceError: errorMessage(
      "MALI_SA_SANGGUNIAN",
      "ang variable, function o aklatan ay wala sa saklaw",
    ),
    __SyntaxError: errorMessage("MALI_SA_SINTAKS", "hindi wastong code"),
    __RangeError: errorMessage(
      "MALI_SA_SAKLAW",
      "halaga ay labas sa pinapayagang saklaw",
    ),
    __URIError: errorMessage("MALI_SA_URI_LINK", "mali o hindi wastong URI"),
    __EvalError: errorMessage("MALI_SA_EVAL", "mali na may kaugnayan sa eval"),
    __UNKNOWN_ERROR: errorMessage(
      "HINDI_ALAM_NA_MALI",
      "ganap na hindi alam na mali",
    ),
  },

  example: {
    __array: [
      "pagkain",
      "bansa",
      "mga_bagay",
      "mga_tanda",
      "mga_kulay",
      "mga_produkto",
      "mga_gumagamit",
      "mga_kategorya",
      "mga_puntos",
      "mga_wika",
    ],
    __boolean: [
      "katayuan",
      "mayGulang",
      "aktibo",
      "nakikita",
      "mayPahintulot",
      "nakaLoginNa",
      "pinagana",
      "tapos",
      "naberipika",
      "nabura",
    ],
    __function: [
      "kuninPangalan",
      "kuninHalaga",
      "hawakangKlik",
      "kuninkData",
      "i_formatPetsa",
      "i_parseInput",
      "i_validateForm",
      "ipakitaItem",
      "i_updateEstado",
      "kalkulahinTotal",
    ],
    __number: [
      "edad",
      "taon",
      "bilang",
      "kabuuan",
      "presyo",
      "indeks",
      "tagal",
      "dami",
      "puntos",
      "timeout",
    ],
    __object: [
      "tao",
      "gumagamit",
      "konfigurasyon",
      "tugon",
      "bayad",
      "mga_setting",
      "profile",
      "address",
      "metadata",
      "sesyon",
    ],
    __string: [
      "pangalan",
      "pamagat",
      "paglalarawan",
      "email",
      "password",
      "mensahe",
      "label",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "mag_login",
      "simulan",
      "linisin",
      "i_reset",
      "sirain",
      "mag_logout",
      "linisinCache",
      "i_saveDB",
      "magpadalaEmail",
      "italaEvent",
    ],
  },
}).grammar();
