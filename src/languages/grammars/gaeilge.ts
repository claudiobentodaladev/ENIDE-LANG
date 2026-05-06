import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const gaeilge = new Language({
  language: "gaeilge",
  about:
    "Is transpiler inaistrithe é ENIDE a ligeann duit ríomhchlárú in aon teanga",

  include: DocStr(
    "Cuir_san_áireamh",
    "Úsáidtear chun teanga nó leabharlanna a chur san áireamh",
  ),

  commands: {
    __about: DocStr("faoi", "chun eolas faoi ENIDE a fháil"),
    __help: DocStr(
      "cabhair",
      "chun liosta na n-orduithe ar fad atá ar fáil a fháil",
    ),
    __version: DocStr("leagan", "chun leagan reatha ENIDE a fháil"),
    __languages: DocStr(
      "teangacha",
      "chun liosta na dteangacha ar fad atá ar fáil a fháil",
    ),
    __documentation: DocStr("doc", "chun doiciméad teanga a fháil"),
    __grammar: DocStr("gramadach", "chun gramadach teanga a fháil"),
  },

  library: {
    __standard: {
      main: DocStr(
        "caighdeánach",
        "chun rochtain a fháil ar mhodhanna caighdeánacha úsáideacha",
      ),
      __isarray: DocStr("IsEagar", "chun seiceáil an luach eagar"),
      __isobject: DocStr("IsRud", "chun seiceáil an luach rud"),
      __typeof: DocStr("Cineál", "chun cineál luach a fháil"),
      __parse: DocStr("Parse", "chun teaghrán a pharsáil go dtí a luach ceart"),
    },

    __math: {
      main: DocStr(
        "matamaitic",
        "chun rochtain a fháil ar fheidhmeanna matamaitice",
      ),
      __pi: DocStr("PI", "chun luach pi a fháil"),
      __sqrt: DocStr("FreamhCearnach", "chun an fhreamh chearnach a fháil"),
      __pow: DocStr("Cumhacht", "chun cumhacht uimhir a fháil"),
      __round: DocStr("Cruinnigh", "chun uimhir a chruinniú"),
      __random: DocStr("Randamach", "chun uimhir randamach a fháil"),
      __max: DocStr("Uasmhéid", "chun an luach is mó a fháil"),
      __min: DocStr("Íosmhéid", "chun an luach is lú a fháil"),
      __isNumber: DocStr("IsUimhir", "chun seiceáil an luach uimhir"),
      __isInteger: DocStr("IsSlánuimhir", "chun seiceáil an luach slánuimhir"),
      __isFloat: DocStr("IsDeachúlach", "chun seiceáil an luach deachúlach"),
      __cos: DocStr("Cos", "chun cosinus uillinn i radaiméadar a fháil"),
      __sin: DocStr("Sin", "chun síneas uillinn i radaiméadar a fháil"),
      __tan: DocStr("Tan", "chun tangant uillinn i radaiméadar a fháil"),
    },

    __string: {
      main: DocStr(
        "teaghrán",
        "chun rochtain a fháil ar fheidhmeanna ionramhála teaghráin",
      ),
      __length: DocStr("Fad", "chun fad teaghráin a fháil"),
      __toUpperCase: DocStr(
        "GoCeannlitreacha",
        "chun teaghrán a thiontú go ceannlitreacha",
      ),
      __toLowerCase: DocStr(
        "GoLitreachaBeaga",
        "chun teaghrán a thiontú go litreacha beaga",
      ),
      __include: DocStr(
        "ÁirítearAnn",
        "chun seiceáil an bhfuil foteaghrán i dteaghrán",
      ),
      __repeat: DocStr(
        "Athrith",
        "chun teaghrán a athrith líon áirithe uaireanta",
      ),
    },

    __date: {
      main: DocStr(
        "dáta",
        "chun rochtain a fháil ar fheidhmeanna dáta agus ama",
      ),
      __now: DocStr("Anois", "chun an dáta agus am reatha a fháil"),
      __year: DocStr("Bliain", "chun an bhliain a fháil"),
      __month: DocStr("Mí", "chun an mhí a fháil"),
      __dayMonth: DocStr("LáenaMí", "chun lá na míosa a fháil"),
      __dayWeek: DocStr("LáenaSeachtain", "chun lá na seachtaine a fháil"),
      __hour: DocStr("Uair", "chun an uair a fháil"),
      __minute: DocStr("Nóiméad", "chun an nóiméad a fháil"),
      __second: DocStr("Soicind", "chun an soicind a fháil"),
    },
  },

  types: {
    __number: DocStr("uimhir", "chun athróg den chineál uimhir a dhearbhú"),
    __string: DocStr(
      "teaghrán",
      "chun athróg den chineál teaghráin a dhearbhú",
    ),
    __boolean: DocStr("bool", "chun athróg den chineál Boole a dhearbhú"),
    __object: DocStr("rud", "chun rud stataiceach a dhearbhú"),
    __void: DocStr("folús", "chun feidhm a dhearbhú nach dtugann luach ar ais"),
    __array: DocStr("eagar", "chun struchtúr sonraí eagair a dhearbhú"),
  },

  specialValues: {
    __true: DocStr("Fíor", "luach Boole fíor"),
    __false: DocStr("Bréag", "luach Boole bréag"),
    __null: DocStr("nialasach", "easpa luach"),
  },

  words: {
    __new: DocStr("nua", "chun sampla nua de rang a chruthú"),
    __this: DocStr("seo", "chun rochtain a fháil ar thréithe an ranga féin"),
    __extends: DocStr(
      "síneann",
      "chun a dhearbhú go n-oidhreann rang ó rang eile",
    ),
  },

  accessModifiers: {
    __private: DocStr("príobháideach", "inrochtana laistigh den rang amháin"),
    __public: DocStr("poiblí", "inrochtana ó áit ar bith"),
    __protected: DocStr(
      "cosanta",
      "inrochtana laistigh den rang agus a fhorranganna",
    ),
    __readonly: DocStr(
      "léamh_amháin",
      "ní féidir an luach a shannadh ach uair amháin",
    ),
    __static: DocStr("statach", "baineann leis an rang, ní leis na samplaí"),
  },

  methods: {
    method: {
      __print: DocStr("priontáil", "chun luach a phriontáil ar an scáileán"),
      __scan: DocStr("léigh", "chun luach a léamh ón ionchor"),
      __return: DocStr("fill", "chun luach a fhilleadh ó fheidhm"),
      __break: DocStr("bris", "chun lupa a bhriseadh"),
      __continue: DocStr(
        "lean_ar_aghaidh",
        "chun léim go dtí an chéad athrá eile",
      ),
    },

    sentences: {
      __function: DocStr("feidhm", "chun feidhm a dhearbhú"),
      __if: DocStr("má", "chun coinníoll a dhearbhú"),
      __else: DocStr("nó", "chun coinníoll malartach a dhearbhú"),
      __while: DocStr("fad", "chun lupa fad a dhearbhú"),
      __for: DocStr("do", "chun lupa do a dhearbhú"),
      __switch: DocStr("rogha", "chun struchtúr rogha a dhearbhú"),
      __case: DocStr("cás", "chun cás sa struchtúr rogha a dhearbhú"),
      __default: DocStr(
        "réidchás",
        "chun an cás réidh sa struchtúr rogha a dhearbhú",
      ),
      __try: DocStr("déanIarracht", "chun bloc déan iarracht a dhearbhú"),
      __catch: DocStr("gaibh", "chun bloc láimhseála earráidí a dhearbhú"),
      __finally: DocStr(
        "saDeireadh",
        "chun bloc a dhearbhú a rithfidh i gcónaí",
      ),
      __class: DocStr("rang", "chun rang a dhearbhú"),
      __constructor: DocStr(
        "tógálaí",
        "struchtúr chun tréithe ranga a dhearbhú",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Teachtaireacht",
      "Luach",
      "Athróg",
      "Tréith",
      "Rud",
      "Ionchais",
      "Faighte",
      "Sannadh_Tairiseach",
      "Paraiméadar_Dúbailte",
      "Leid",
      "Token_Neamhbhailí",
      "Tuile_Cruaiche",
      "Token",
      "Deireadh_Gan_Choinne",
    ),
    main: errorMessage("EARRÁID", "earráid ghinearálta an chórais"),
    __TypeError: errorMessage(
      "EARRÁID_CINEÁIL",
      "cineál neamhbhailí san oibríocht",
    ),
    __InitError: errorMessage("EARRÁID_TOSAIGH", "níor tosaíodh an athróg"),
    __ReferenceError: errorMessage(
      "EARRÁID_TAGARTHA",
      "ní ann don athróg, fheidhm nó leabharlann sa raon",
    ),
    __SyntaxError: errorMessage("EARRÁID_COMHRÉIRE", "cód neamhbhailí"),
    __RangeError: errorMessage(
      "EARRÁID_RAOIN",
      "luach lasmuigh den raon ceadaithe",
    ),
    __URIError: errorMessage("EARRÁID_URI", "URI míchumtha nó neamhbhailí"),
    __EvalError: errorMessage("EARRÁID_EVAL", "earráid a bhaineann le eval"),
    __UNKNOWN_ERROR: errorMessage(
      "EARRÁID_ANAITHNID",
      "earráid nach bhfuil aithne uirthi",
    ),
  },

  example: {
    __array: [
      "bia",
      "tíortha",
      "míreanna",
      "tags",
      "dathanna",
      "táirgí",
      "úsáideoirí",
      "catagóirí",
      "pointí",
      "teangacha",
    ],
    __boolean: [
      "staid",
      "isAosaigh",
      "isGníomhach",
      "isInfeicthe",
      "taCead",
      "taLogáilteIsteach",
      "taÁbhaithe",
      "taCríochnaithe",
      "taFíoraithe",
      "taScriosta",
    ],
    __function: [
      "faighAinm",
      "faighLuach",
      "láimhseáilCliceáil",
      "faighSonraí",
      "formáidDáta",
      "parsáilIonchor",
      "bailíochtaighFoirm",
      "rindreáilMír",
      "nuashonraighStaid",
      "ríomhIomlán",
    ],
    __number: [
      "aois",
      "bliain",
      "comhaireamh",
      "iomlán",
      "praghas",
      "innéacs",
      "fad_ama",
      "cainníocht",
      "pointí",
      "timeout",
    ],
    __object: [
      "duine",
      "úsáideoir",
      "config",
      "freagra",
      "íocaíocht",
      "socruithe",
      "próifíl",
      "seoladh",
      "meiteashonraí",
      "seisiún",
    ],
    __string: [
      "ainm",
      "teideal",
      "cur_síos",
      "email",
      "pasfhocal",
      "teachtaireacht",
      "lipéad",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "logáilIsteach",
      "tosaigh",
      "glan",
      "athshocraigh",
      "scrios",
      "logáilAmach",
      "folmhaighCache",
      "sábháilChuigDB",
      "seolEmail",
      "logáilImeacht",
    ],
  },
}).grammar();
