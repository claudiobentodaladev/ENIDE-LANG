import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const gikuyu = new Language({
  language: "gikuyu",
  about:
    "ENIDE ni ruthiomi rwa kuprogramia rwa thiomi nyingĩ rũrĩa rũgwĩtĩkĩriaũprogramie na ruthiomi o rwothe.",
  include: DocStr(
    "Kwongerera",
    "kũhũthĩrwo kwongerera thiomi, mabuku, kana mĩbango ya data kuuma thĩinĩ wa faili ĩngĩ",
  ),

  commands: {
    __about: DocStr("ũhoro", "gũkenia ũhoro wĩgĩĩ ENIDE"),
    __help: DocStr("ũteithio", "kuona mũthĩ rwa watho wothe ũrĩa ũrĩ ho"),
    __version: DocStr("gĩcunjĩ", "kuona gĩcunjĩ kĩa rĩu kĩa ENIDE"),
    __languages: DocStr("thiomi", "kuona mũthĩ rwa thiomi thĩinĩ wa ENIDE"),
    __documentation: DocStr("mabuku", "kuona mabuku ma rũthiomi"),
    __grammar: DocStr("mũbangoWaRũthiomi", "kuona mũbango wa rũthiomi rũu"),
  },

  library: {
    __standard: {
      main: DocStr("mũtũire", "gũtonya mĩtaratara ya mũtũire ĩrĩa ĩteithagia"),
      __isarray: DocStr("NĩMũthĩrĩrĩko", "gũtuĩria kĩndũ kĩrĩ mũthĩrĩrĩko"),
      __isobject: DocStr("NĩKĩndũ", "gũtuĩria kĩndũ kĩrĩ kĩndũ kĩmwe"),
      __typeof: DocStr("MũthembaWa", "kuona mũthemba wa kĩndũ kĩu"),
      __parse: DocStr(
        "Gũtaũra",
        "gũthoororora kĩndũ kuuma mũrĩgo nginya mũthemba ũrĩa mwagĩru",
      ),
    },

    __math: {
      main: DocStr("ũtari", "gũtonya mĩtaratara ya ũtari na ndatĩ"),
      __pi: DocStr("PI", "kuona thogora wa pi"),
      __sqrt: DocStr("MũriWaCiana", "kuona mũri wa ciana cĩa kĩndũ"),
      __pow: DocStr("Hinya", "kuona hinya wa namba nene"),
      __round: DocStr("Gũkuhĩrĩria", "gũkuhĩrĩria namba thĩinĩ"),
      __random: DocStr("Mũtanya", "kuona namba ĩtarĩ ĩbange"),
      __max: DocStr("NeneŨru", "kuona thogora ũrĩa mũnene"),
      __min: DocStr("NiniŨru", "kuona thogora ũrĩa mũnini"),
      __isNumber: DocStr("NĩNamba", "gũtuĩria kana kĩndũ nĩ namba"),
      __isInteger: DocStr("NĩNambaGima", "gũtuĩria kana kĩndũ nĩ namba gima"),
      __isFloat: DocStr(
        "NĩNambaYaGĩcunjĩ",
        "gũtuĩria kana kĩndũ nĩ namba ya gĩcunjĩ",
      ),
      __cos: DocStr("Cos", "kuona cosine ya gĩcunjĩ kĩa radiyan"),
      __sin: DocStr("Sin", "kuona sine ya gĩcunjĩ kĩa radiyan"),
      __tan: DocStr("Tan", "kuona tangent ya gĩcunjĩ kĩa radiyan"),
    },

    __string: {
      main: DocStr("mũrĩgo", "gũthaitĩra mĩrĩgo ya mĩgambo yothe"),
      __length: DocStr("Uraihu", "kuona uraihu wa mũrĩgo ũo"),
      __toUpperCase: DocStr(
        "NeneHerufi",
        "gũthũrũra mũrĩgo gũtuĩka herufi nene",
      ),
      __toLowerCase: DocStr(
        "NiniHerufi",
        "gũthũrũra mũrĩgo gũtuĩka herufi nini",
      ),
      __include: DocStr(
        "KũrĩNa",
        "gũtuĩria kana mũrĩgo nĩũrĩ na mũrĩgo ũngĩ thĩinĩ",
      ),
      __repeat: DocStr("Cokerera", "gũcokerera mũrĩgo maita maingĩ"),
    },

    __date: {
      main: DocStr("tarĩki", "gũtonya mĩbango ya thaa na matukũ"),
      __now: DocStr("Rĩu", "kuona tarĩki na thaa ya rĩu thĩinĩ"),
      __year: DocStr("Mwaka", "kuona mwaka"),
      __month: DocStr("Mweri", "kuona mweri"),
      __dayMonth: DocStr("MũthenyaWaMweri", "kuona mũthenya wa mweri"),
      __dayWeek: DocStr("MũthenyaWaKiumia", "kuona mũthenya wa kiumia"),
      __hour: DocStr("Ithaa", "kuona ithaa"),
      __minute: DocStr("Ndagĩka", "kuona ndagĩka"),
      __second: DocStr("Sekunde", "kuona sekunde"),
    },
  },

  types: {
    __number: DocStr("namba", "gũtua ũgarũrũki wa mũthemba wa namba"),
    __string: DocStr("mũrĩgo", "gũtua ũgarũrũki wa mũthemba wa mũrĩgo"),
    __boolean: DocStr("bool", "gũtua ũgarũrũki wa mũthemba wa bool"),
    __object: DocStr("kĩndũ", "gũtua kĩndũ kĩrĩa gĩtatagarũrũka"),
    __void: DocStr("ĩtheri", "gũtua mĩrũtĩre ĩrĩa ĩtacokagia thogora"),
    __array: DocStr("mũthĩrĩrĩko", "gũtua mũbango wa mũthĩrĩrĩko wa data"),
  },

  specialValues: {
    __true: DocStr("Ma", "thogora wa bool wa ma"),
    __false: DocStr("Maheni", "thogora wa bool wa maheni"),
    __null: DocStr("Ũtheri", "ũkoroku wa thogora thĩinĩ"),
  },

  words: {
    __new: DocStr("Njerũ", "gũtherema kĩndũ kĩnjerũ kuuma kĩgundi"),
    __this: DocStr("gĩkĩ", "gũtonya sifa cia kĩgundi kĩu kĩenere"),
    __extends: DocStr(
      "Kwongerereka",
      "gũtua gĩgundi kĩrĩa gĩkaoya sifa kuuma kĩgundi kĩngĩ",
    ),
  },

  accessModifiers: {
    __private: DocStr("hitho", "gũtonyeka thĩinĩ wa kĩgundi kĩu tu"),
    __public: DocStr("ũgũkũ", "gũtonyeka kuuma kũrĩ kũndũ gwothe"),
    __protected: DocStr(
      "gitĩre",
      "gũtonyeka thĩinĩ wa kĩgundi o na tũgundi tũrĩa tũkũmĩte ho",
    ),
    __readonly: DocStr("gũthomaTu", "thogora rĩngĩ o hĩndĩ ĩmwe tu"),
    __static: DocStr("rũrũme", "nĩ ya kĩgundi kĩenere no ti cia kĩndũ kĩngĩ"),
  },

  methods: {
    method: {
      __print: DocStr("andĩka", "gũtũma thogora uoneke harĩ skrini"),
      __scan: DocStr("thoma", "gũthoma thogora kuuma kũrĩ mũhũthĩri"),
      __return: DocStr("gũcokia", "gũcokia thogora kuuma mĩrũtĩre-inĩ"),
      __break: DocStr("rũgama", "kuuma thĩinĩ wa kĩmũrĩgo"),
      __continue: DocStr("thiĩMbere", "gũthiĩ kũrĩ gũcokerera kũrĩa gũkũmĩte"),
    },

    sentences: {
      __function: DocStr("wĩra", "gũtua mũbango wa wĩra"),
      __if: DocStr("ũngĩkorwo", "gũtua mũbango wa ũgendi"),
      __else: DocStr("kana", "gũtua mũbango ũngĩ wa ũgendi"),
      __while: DocStr("hĩndĩĨrĩa", "gũtua kĩmũrĩgo gĩa hĩndĩ ĩrĩa"),
      __for: DocStr("tondu", "gũtua kĩmũrĩgo kĩa tondũ"),
      __switch: DocStr("thuura", "gũtua mũbango wa gũthuura"),
      __case: DocStr(
        "mũthemba",
        "gũtua mũthemba thĩinĩ wa mũbango wa gũthuura",
      ),
      __default: DocStr(
        "ũrĩaUtũire",
        "gũtua mũthemba ũrĩa utũire thĩinĩ wa gũthuura",
      ),
      __try: DocStr("geria", "gũtua bloku ya geria"),
      __catch: DocStr("nyiita", "gũtua bloku ya gũcamba mahĩtĩa"),
      __finally: DocStr(
        "mũthiaĩrĩ",
        "gũtua bloku ĩrĩa ĩrutaga wĩra hĩndĩ ciothe",
      ),
      __class: DocStr("gĩkundi", "gũtua gĩkundi kĩa wĩra"),
      __constructor: DocStr(
        "mũbangi",
        "mũbango ũrĩa ũgũteithia gũtua sifa thĩinĩ wa gĩkundi",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Ũhoro",
      "Thogora",
      "Ũgarũrũki",
      "Mũhianĩre",
      "Kĩndũ",
      "Kĩerĩgĩrĩrwo",
      "Kĩanyitirwo",
      "WĩgĩrĩroMĩrũme",
      "ParametaMĩcokerere",
      "Ũtaũro",
      "KĩmenyithiaGĩthũku",
      "StakiNĩĩiyũru",
      "Kĩmenyithia",
      "MũthiaŨterĩgĩrĩrwo",
    ),
    main: errorMessage("MAHĨTĨA", "mahĩtĩa ma kawaida ma sistemu"),
    __TypeError: errorMessage(
      "MAHĨTĨAMŨTHEMBA",
      "mũthemba tũgĩ thĩinĩ wa wĩra uo",
    ),
    __InitError: errorMessage(
      "MAHĨTĨAMŨAMBĨRĨRIO",
      "ũgarũrũki ndũriambĩrĩrio wĩra",
    ),
    __ReferenceError: errorMessage(
      "MAHĨTĨAMŨGWETERO",
      "ũgarũrũki, wĩra kana ibuku rĩtĩrĩ thĩinĩ wa wigo",
    ),
    __SyntaxError: errorMessage(
      "MAHĨTĨAMŨBANGO",
      "msimbo tũgĩ thĩinĩ wa watho",
    ),
    __RangeError: errorMessage(
      "MAHĨTĨAMŨIGANA",
      "thogora ũrĩ nja wa wigo ũrĩa wetĩkĩrĩtũo",
    ),
    __URIError: errorMessage("MAHĨTĨAURI", "URI ĩthũkĩte kana tĩ nĩyo"),
    __EvalError: errorMessage("MAHĨTĨAEVAL", "mahĩtĩa makoimanĩte na eval"),
    __UNKNOWN_ERROR: errorMessage(
      "MAHĨTĨAŨTAĨWĨKANE",
      "mahĩtĩa marĩa matamateĩkane gũtuĩka",
    ),
  },

  example: {
    __array: [
      "irio",
      "mabururi",
      "mĩndũ",
      "etiqueti",
      "marangi",
      "magoomano",
      "ahũthĩri",
      "mĩbango",
      "pointi",
      "thiomi",
    ],
    __boolean: [
      "ũhoro",
      "nĩMũndũGima",
      "nĩMũoyo",
      "nĩUonekaga",
      "arĩNaRũtha",
      "atonyete",
      "ĩrĩwĩra-inĩ",
      "ĩrĩkĩte",
      "ĩrĩmĩrũme",
      "ĩreheretũo",
    ],
    __function: [
      "pataRĩtwa",
      "pataThogora",
      "rutithiaKũnyita",
      "kuoyaData",
      "umbaMuthia",
      "taũraIngizo",
      "thĩkaFomu",
      "onyeshaGĩcunjĩ",
      "garũraŨhoro",
      "taraIomlan",
    ],
    __number: [
      "ũkũrũ",
      "mwaka",
      "muigana",
      "iomlan",
      "thogora",
      "faharasa",
      "muda",
      "wingi",
      "alama",
      "saWaGũetereera",
    ],
    __object: [
      "mũndũ",
      "mũhũthĩri",
      "mũbango",
      "jibu",
      "mũriho",
      "mĩangĩro",
      "wasifu",
      "anwani",
      "metadata",
      "kipindi",
    ],
    __string: [
      "rĩtwa",
      "mutwe",
      "ũhoroMũkuhi",
      "marũaMapepe",
      "nywila",
      "ũhoro",
      "kĩmenyithia",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "tonya",
      "ambĩrĩria",
      "theria",
      "wekaUpya",
      "ananga",
      "uma",
      "futaHifadhi",
      "hifadhiDB",
      "tumaMarũa",
      "andĩkaTachartas",
    ],
  },
}).grammar();
