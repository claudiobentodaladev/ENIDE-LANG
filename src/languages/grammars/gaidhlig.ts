import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const gaidhlig = new Language({
  language: "gaidhlig",
  about:
    "Is e cànan prògramaidh ioma-chànanach a th' ann an ENIDE a leigeas leat prògramadh ann an cànan sam bith.",
  include: DocStr(
    "GabhASteach",
    "air a chleachdadh gus canan, leabharlannan no structaran datha a thoirt a-steach bho fhaidhle eile",
  ),

  commands: {
    __about: DocStr("mu", "gus fiosrachadh mu ENIDE fhaighinn"),
    __help: DocStr(
      "cobhair",
      "gus liosta de na h-ordughan uile a tha ri fhaighinn fhaighinn",
    ),
    __version: DocStr("tionndadh", "gus tionndadh laithreach ENIDE fhaighinn"),
    __languages: DocStr(
      "canain",
      "gus liosta de na canain uile a tha ri fhaighinn fhaighinn",
    ),
    __documentation: DocStr("doc", "gus sgrìobhainn canan fhaighinn"),
    __grammar: DocStr("gramar", "gus graimare canan fhaighinn"),
  },

  library: {
    __standard: {
      main: DocStr(
        "caighdeanta",
        "gus inntrigeadh gu modhan caighdeanta feumail fhaighinn",
      ),
      __isarray: DocStr("IsArray", "gus dearbhadh am bi luach na array"),
      __isobject: DocStr("IsNi", "gus dearbhadh am bi luach na ni"),
      __typeof: DocStr("SeorsaDe", "gus seorsa luach fhaighinn"),
      __parse: DocStr(
        "MionSgrùdadh",
        "gus luach a thionndadh bho shreath dhan t-seorsa ceart",
      ),
    },

    __math: {
      main: DocStr(
        "matamataig",
        "gus inntrigeadh gu gniomhan matamataig fhaighinn",
      ),
      __pi: DocStr("PI", "gus luach pi fhaighinn"),
      __sqrt: DocStr("FreumhCearnach", "gus an freumh cearnach fhaighinn"),
      __pow: DocStr("Cumhachd", "gus cumhachd aireamh fhaighinn"),
      __round: DocStr("Cruinnich", "gus aireamh a chuairteachadh"),
      __random: DocStr("Tuairmseil", "gus aireamh thuairmseil fhaighinn"),
      __max: DocStr("AsMotha", "gus an luach as motha fhaighinn"),
      __min: DocStr("AsLugha", "gus an luach as lugha fhaighinn"),
      __isNumber: DocStr("IsAireamh", "gus dearbhadh am bi luach na aireamh"),
      __isInteger: DocStr(
        "IsSlanaireimh",
        "gus dearbhadh am bi luach na slan-aireamh",
      ),
      __isFloat: DocStr(
        "IsDeicheach",
        "gus dearbhadh am bi luach na dheicheach",
      ),
      __cos: DocStr("Cos", "gus cosinus cearna ann an raidian fhaighinn"),
      __sin: DocStr("Sin", "gus sinus cearna ann an raidian fhaighinn"),
      __tan: DocStr("Tan", "gus tangant cearna ann an raidian fhaighinn"),
    },

    __string: {
      main: DocStr(
        "sreath",
        "gus inntrigeadh gu gniomhan laimhseachaidh sreathan fhaighinn",
      ),
      __length: DocStr("Fad", "gus fad sreatha fhaighinn"),
      __toUpperCase: DocStr(
        "GuLitricheanMora",
        "gus sreath a thionndadh gu litrichean mora",
      ),
      __toLowerCase: DocStr(
        "GuLitricheanBeaga",
        "gus sreath a thionndadh gu litrichean beaga",
      ),
      __include: DocStr(
        "AnSas",
        "gus dearbhadh am bi fo-shreath ann an sreath",
      ),
      __repeat: DocStr("AthAithris", "gus sreath ath-aithris iomadh uair"),
    },

    __date: {
      main: DocStr(
        "ceannLatha",
        "gus inntrigeadh gu gniomhan ceann-latha agus uine fhaighinn",
      ),
      __now: DocStr(
        "AnDrasda",
        "gus an ceann-latha agus an uair làithreach fhaighinn",
      ),
      __year: DocStr("Bliadhna", "gus a bhliadhna fhaighinn"),
      __month: DocStr("Mios", "gus am mios fhaighinn"),
      __dayMonth: DocStr("LaaMios", "gus latha a mhios fhaighinn"),
      __dayWeek: DocStr("LaaSeachdain", "gus latha na seachdainn fhaighinn"),
      __hour: DocStr("Uair", "gus an uair fhaighinn"),
      __minute: DocStr("Mionaid", "gus am mionaid fhaighinn"),
      __second: DocStr("Diog", "gus an diog fhaighinn"),
    },
  },

  types: {
    __number: DocStr(
      "aireamh",
      "gus caochlaideach den seorsa aireamh a dhearbhadh",
    ),
    __string: DocStr(
      "sreath",
      "gus caochlaideach den seorsa sreath a dhearbhadh",
    ),
    __boolean: DocStr(
      "bool",
      "gus caochlaideach den seorsa Boole a dhearbhadh",
    ),
    __object: DocStr("ni", "gus ni staiteach ainmeachadh"),
    __void: DocStr("falamh", "gus gnìomh a dhearbhadh nach till luach"),
    __array: DocStr("array", "gus structar array a dhearbhadh"),
  },

  specialValues: {
    __true: DocStr("Fior", "luach Boole fior"),
    __false: DocStr("Meallta", "luach Boole meallta"),
    __null: DocStr("Neoni", "as-làthair luach"),
  },

  words: {
    __new: DocStr("ur", "gus eisimpleir ur de chlas a chruthachadh"),
    __this: DocStr("seo", "gus buadhan a chlas fhein a ruigheachd"),
    __extends: DocStr(
      "leudaich",
      "gus ainmeachadh gu bheil clas ag oighreachd bho chlas eile",
    ),
  },

  accessModifiers: {
    __private: DocStr(
      "prìobhaideach",
      "ruigsinneach a-mhain taobh a-staigh a chlas",
    ),
    __public: DocStr("poblach", "ruigsinneach bho àite sam bith"),
    __protected: DocStr(
      "dion",
      "ruigsinneach taobh a-staigh a chlas agus fo-chlasan",
    ),
    __readonly: DocStr(
      "leughadhAMhain",
      "chan fhaod an luach a shuidheachadh ach aon uair",
    ),
    __static: DocStr(
      "staiteach",
      "buinidh don chlas fhein chan ann do eisimpleirean",
    ),
  },

  methods: {
    method: {
      __print: DocStr("cloBhuail", "gus luach a chlo-bhualadh air an sgrìn"),
      __scan: DocStr("leugh", "gus luach a leughadh bhon ionchur"),
      __return: DocStr("till", "gus luach a thilleadh bho ghniomh"),
      __break: DocStr("bris", "gus lupa a bhriseadh"),
      __continue: DocStr(
        "leanOrt",
        "gus leum gu tionndadh ath-aithris an lupa",
      ),
    },

    sentences: {
      __function: DocStr("gniomh", "gus gniomh a dhearbhadh"),
      __if: DocStr("ma", "gus cumha a dhearbhadh"),
      __else: DocStr("no", "gus cumha eile a dhearbhadh"),
      __while: DocStr("fhad", "gus lupa fhad a dhearbhadh"),
      __for: DocStr("airson", "gus lupa airson a dhearbhadh"),
      __switch: DocStr("taghadh", "gus structar taghaidh a dhearbhadh"),
      __case: DocStr("cas", "gus cas anns an structar taghaidh a dhearbhadh"),
      __default: DocStr(
        "bunaiteach",
        "gus cas bunaiteach anns an structar taghaidh a dhearbhadh",
      ),
      __try: DocStr("feuch", "gus bloc feuch a dhearbhadh"),
      __catch: DocStr(
        "glac",
        "gus bloc laimhseachaidh mhearachdan a dhearbhadh",
      ),
      __finally: DocStr(
        "MuDheireadh",
        "gus bloc a dhearbhadh a ruitheas an-comhnaidh",
      ),
      __class: DocStr("clas", "gus clas a dhearbhadh"),
      __constructor: DocStr(
        "togalair",
        "structar a leigeas leat buadhan a dhearbhadh ann an clas",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Teachdaireachd",
      "Luach",
      "Caochlaideach",
      "Buadh",
      "Ni",
      "AnDùilRi",
      "Fhuaras",
      "SuidheachadhMaireannach",
      "ParameterDùbailte",
      "Iomradh",
      "TokenNeoDhligheach",
      "CurThairisStac",
      "Token",
      "CrìochIonchurGunFhiosd",
    ),
    main: errorMessage("MEARACHD", "mearachd choitcheann an t-siostaim"),
    __TypeError: errorMessage(
      "MEARACHD_SEORSA",
      "seorsa neo-dhligheach san obrachadh",
    ),
    __InitError: errorMessage(
      "MEARACHD_TOISEACH",
      "cha deach an caochlaideach a thoisich",
    ),
    __ReferenceError: errorMessage(
      "MEARACHD_IOMRAIDH",
      "chan eil an caochlaideach, gnìomh no leabharlann anns an raon",
    ),
    __SyntaxError: errorMessage("MEARACHD_CO_CHAIRICH", "cod neo-dhligheach"),
    __RangeError: errorMessage(
      "MEARACHD_RAOIN",
      "luach taobh a-muigh an raoin ceadaichte",
    ),
    __URIError: errorMessage(
      "MEARACHD_URI",
      "URI mi-chruthach no neo-dhligheach",
    ),
    __EvalError: errorMessage(
      "MEARACHD_EVAL",
      "mearachd co-cheangailte ri eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "MEARACHD_NEO_AITHNICHTE",
      "mearachd tur neo-aithnichte",
    ),
  },

  example: {
    __array: [
      "biadh",
      "duthaichan",
      "nithean",
      "clibeanna",
      "dathan",
      "bathar",
      "luchdCleachdaidh",
      "roinnean",
      "puingean",
      "canain",
    ],
    __boolean: [
      "staid",
      "isInbheach",
      "isGniomhach",
      "isFaicsinneach",
      "aigCead",
      "isClàraichte",
      "isComasach",
      "isDeiseil",
      "isDhearbhte",
      "isAirAsgairt",
    ],
    __function: [
      "faighInnleachd",
      "faighLuach",
      "laimhsichBriogadh",
      "luchdaichData",
      "cruthachCeannLatha",
      "mionSgrùdadh",
      "dearbhFoirm",
      "sealltainnEileamaid",
      "nuadhaichStaid",
      "aithrisIomlan",
    ],
    __number: [
      "aois",
      "bliadhna",
      "cunntas",
      "iomlan",
      "pris",
      "clàrInnse",
      "fadÙine",
      "meud",
      "puingean",
      "ùineFeitheimh",
    ],
    __object: [
      "neach",
      "luchdCleachdaidh",
      "rèiteachadh",
      "freagairt",
      "pàigheadh",
      "roghainnean",
      "pròifil",
      "seòladh",
      "meataDhata",
      "seisean",
    ],
    __string: [
      "ainm",
      "tiotal",
      "tuairisgeul",
      "postDealain",
      "facalFaire",
      "teachdaireachd",
      "bileag",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "logaichASteach",
      "toisich",
      "glan",
      "athShuidhich",
      "sgrios",
      "logaichAMach",
      "glanCache",
      "sabhailDB",
      "cuirPost",
      "clàraichTachartas",
    ],
  },
}).grammar();
