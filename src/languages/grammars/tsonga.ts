import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const tsonga = new Language({
  language: "tsonga",
  about:
    "ENIDE i transpiler leri nga hundzuliwa leri pfumelaka ku tsala program hi rito rihani",

  include: DocStr("Katsa", "Swi tirhisiwa ku katsa ririmi kumbe tilayiburari"),

  commands: {
    __about: DocStr("HiEnide", "ku kuma vuxokoxoko hi ENIDE"),
    __help: DocStr("Pfuno", "ku kuma ndlela ya milayo yolohe leyi nga kona"),
    __version: DocStr("Version", "ku kuma version ya sweswi ya ENIDE"),
    __languages: DocStr(
      "Tindzimi",
      "ku kuma ndlela ya tindzimi tinhungu leyi nga kona",
    ),
    __documentation: DocStr("Matsalwa", "ku kuma matsalwa ya rito"),
    __grammar: DocStr("Vukomu", "ku kuma vukomu bya rito"),
  },

  library: {
    __standard: {
      main: DocStr(
        "Ntolovelo",
        "ku fikelela misepelo ya ntolovelo leyi pfumelekaka",
      ),
      __isarray: DocStr("ILisiti", "ku hlaya leswi nhlayo i lisiti"),
      __isobject: DocStr("IXinto", "ku hlaya leswi nhlayo i xinto"),
      __typeof: DocStr("Muxaka", "ku kuma muxaka wa nhlayo"),
      __parse: DocStr("Parse", "ku hundzula xitambo ku va nhlayo ya kahle"),
    },

    __math: {
      main: DocStr("Matematiki", "ku fikelela misepelo ya matematiki"),
      __pi: DocStr("PI", "ku kuma nhlayo ya pi"),
      __sqrt: DocStr("MihlaNasquare", "ku kuma mihla wa square"),
      __pow: DocStr("Matimba", "ku kuma matimba ya nomboro"),
      __round: DocStr("Tsindzisa", "ku tsindzisa nomboro"),
      __random: DocStr("Ngopfu", "ku kuma nomboro ya mbhalo"),
      __max: DocStr("Kulu", "ku kuma nhlayo yo kululeka"),
      __min: DocStr("Ntsongo", "ku kuma nhlayo yo ntsongotsongo"),
      __isNumber: DocStr("INomboro", "ku hlaya leswi nhlayo i nomboro"),
      __isInteger: DocStr(
        "INomboroKamalo",
        "ku hlaya leswi nhlayo i nomboro kamalo",
      ),
      __isFloat: DocStr("IDesimali", "ku hlaya leswi nhlayo i desimali"),
      __cos: DocStr("Cos", "ku kuma cosinus ya nkongomelo eka radiyan"),
      __sin: DocStr("Sin", "ku kuma sinus ya nkongomelo eka radiyan"),
      __tan: DocStr("Tan", "ku kuma tangens ya nkongomelo eka radiyan"),
    },

    __string: {
      main: DocStr("Xitambo", "ku fikelela misepelo ya ku lulamisela xitambo"),
      __length: DocStr("Xitalo", "ku kuma xitalo xa xitambo"),
      __toUpperCase: DocStr(
        "KwaHarufuKulu",
        "ku hundzula xitambo ku va harufu tikulu",
      ),
      __toLowerCase: DocStr(
        "KwaHarufuNtsongo",
        "ku hundzula xitambo ku va harufu tintsongo",
      ),
      __include: DocStr(
        "XiKatsa",
        "ku hlaya leswi xitambo xi katsa xitambo xin'wana",
      ),
      __repeat: DocStr("Phinda", "ku phinda xitambo nomboro ya minkarhi"),
    },

    __date: {
      main: DocStr("Siku", "ku fikelela misepelo ya siku na nkarhi"),
      __now: DocStr("Sweswi", "ku kuma siku na nkarhi wa sweswi"),
      __year: DocStr("Lembe", "ku kuma lembe"),
      __month: DocStr("Inyanga", "ku kuma inyanga"),
      __dayMonth: DocStr("SikuInyanga", "ku kuma siku ra inyanga"),
      __dayWeek: DocStr("SikuWiki", "ku kuma siku ra wiki"),
      __hour: DocStr("Hora", "ku kuma hora"),
      __minute: DocStr("Minete", "ku kuma minete"),
      __second: DocStr("Sekhonde", "ku kuma sekhonde"),
    },
  },

  types: {
    __number: DocStr("Nomboro", "ku pasalatsa ku cinca ka muxaka wa nomboro"),
    __string: DocStr("Xitambo", "ku pasalatsa ku cinca ka muxaka wa xitambo"),
    __boolean: DocStr("Bool", "ku pasalatsa ku cinca ka muxaka wa boolean"),
    __object: DocStr("Xinto", "ku landza xinto xa nkoka"),
    __void: DocStr(
      "Nkarhi_Lowu",
      "ku pasalatsa misepelo leyi nga buyeliki nhlayo",
    ),
    __array: DocStr("Lisiti", "ku pasalatsa xivumbeko xa lisiti ya swilo"),
  },

  specialValues: {
    __true: DocStr("Ntiyiso", "nhlayo ya boolean ya ntiyiso"),
    __false: DocStr("Mavunwa", "nhlayo ya boolean ya mavunwa"),
    __null: DocStr("Xiviri", "ku hava ka nhlayo"),
  },

  words: {
    __new: DocStr("Ntlhanu", "ku tumbuluxa xitsundzuxo xintlhanu xa kilasi"),
    __this: DocStr("Lexi", "ku fikelela switirhisiwa swa kilasi leyi"),
    __extends: DocStr(
      "Huma",
      "ku pasalatsa leswi kilasi yi huma eka kilasi xin'wana",
    ),
  },

  accessModifiers: {
    __private: DocStr("Xisirhelelo", "swi fikeleriwa ntsena eka kilasi"),
    __public: DocStr("Xipfumelo", "swi fikeleriwa laha hinkwaho"),
    __protected: DocStr(
      "Xivangelo",
      "swi fikeleriwa eka kilasi na tikilasi ta yona",
    ),
    __readonly: DocStr("Hlaya_Ntsena", "nhlayo yi nga aviwa ntsena kambe"),
    __static: DocStr("Xintshuxo", "i ya kilasi, a yi ya xitsundzuxo"),
  },

  methods: {
    method: {
      __print: DocStr("Tsala", "ku tsala nhlayo eka sikirinini"),
      __scan: DocStr("Hlaya", "ku hlaya nhlayo eka musavali"),
      __return: DocStr("Buyela", "ku buyela nhlayo eka misepelo"),
      __break: DocStr("Tshama", "ku tshama loop"),
      __continue: DocStr("Tlhela", "ku tlhela eka nhlayo leyi landzelaka"),
    },

    sentences: {
      __function: DocStr("Misepelo", "ku pasalatsa misepelo"),
      __if: DocStr("Loko", "ku pasalatsa malembe"),
      __else: DocStr("Xikona", "ku pasalatsa malembe ya nwana"),
      __while: DocStr("Laha", "ku pasalatsa loop ya laha"),
      __for: DocStr("KuLoop", "ku pasalatsa loop ya ku"),
      __switch: DocStr("Hlawula", "ku pasalatsa xivumbeko xa ku hlawula"),
      __case: DocStr(
        "Xikongomelo",
        "ku pasalatsa xikongomelo xivumbeko xa ku hlawula",
      ),
      __default: DocStr("Kahle", "ku pasalatsa xikongomelo xa kahle"),
      __try: DocStr("Ringeta", "ku pasalatsa bloko ya ku ringeta"),
      __catch: DocStr("Tshixa", "ku pasalatsa bloko ya ku tshixa siphoso"),
      __finally: DocStr("Ekuheleni", "ku pasalatsa bloko leyi tirhaka ntlhanu"),
      __class: DocStr("Kilasi", "ku pasalatsa kilasi"),
      __constructor: DocStr(
        "Xivumbeko",
        "xivumbeko xa ku pasalatsa switirhisiwa eka kilasi",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Vito",
      "Nhlayo",
      "Ku_Cinca",
      "Switirhisiwa",
      "Xinto",
      "Ku_Languteriwa",
      "Ku_Amukeriwa",
      "Ku_Ava_Xintshuxo",
      "Paramitara_Mbirhi",
      "Xitsundzuxo",
      "Token_Yo_Biha",
      "Stack_Yi_Tele",
      "Token",
      "Xihelelo_Xo_Biha",
    ),
    main: errorMessage("SIPHOSO", "siphoso sa ntolovelo sa sisteme"),
    __TypeError: errorMessage(
      "SIPHOSO_MUXAKA",
      "muxaka wu nga ri kahle eka ntirho",
    ),
    __InitError: errorMessage("SIPHOSO_KUTUMELA", "ku cinca a ku thomiwanga"),
    __ReferenceError: errorMessage(
      "SIPHOSO_NKOMBELO",
      "ku cinca, misepelo kumbe layiburari a kuna eka xiyimo",
    ),
    __SyntaxError: errorMessage("SIPHOSO_SINTAKISI", "khodi a yi kahle"),
    __RangeError: errorMessage(
      "SIPHOSO_NHLAYO",
      "nhlayo i handle ka nhlayo leyi pfumelekiwaka",
    ),
    __URIError: errorMessage("SIPHOSO_URI", "URI yo biha kumbe leyi nga kahle"),
    __EvalError: errorMessage("SIPHOSO_EVAL", "siphoso lexi vulaneke na eval"),
    __UNKNOWN_ERROR: errorMessage(
      "SIPHOSO_XITSAKATISO",
      "siphoso lexi nga tivekiki",
    ),
  },

  example: {
    __array: [
      "swakudya",
      "tindzhawu",
      "swilo",
      "tags",
      "mintirho",
      "swakurhengeta",
      "vanhu",
      "tihlomu",
      "tinhlayo",
      "tindzimi",
    ],
    __boolean: [
      "xiyimo",
      "iKuluNe",
      "iNtirhoNe",
      "iLeriwaNe",
      "iNtlhanuNe",
      "iKotaNe",
      "iPfumeriNe",
      "iHeliNe",
      "iKhazimulaNe",
      "iFambaNe",
    ],
    __function: [
      "kumaVito",
      "kumaNhlayo",
      "tirhaMisepelo",
      "kotaSwilo",
      "lulamisaSiku",
      "hlayaMusavali",
      "hlayaFomo",
      "bonisaXilo",
      "cincaXiyimo",
      "balaNhlayo",
    ],
    __number: [
      "malembe",
      "lembe",
      "nomboro",
      "hinkwaswo",
      "nhlawulo",
      "index",
      "nkarhi",
      "xitalo",
      "tinhlayo",
      "timeout",
    ],
    __object: [
      "munhu",
      "murhandzi",
      "config",
      "nhlamulo",
      "mfanelo",
      "swilaveko",
      "profailo",
      "ndzhawu",
      "swipimelo",
      "nkarhi_wa_ku_tirha",
    ],
    __string: [
      "vito",
      "ntlhanu",
      "vuxokoxoko",
      "email",
      "password",
      "vito_ra_ku_tlhela",
      "maka",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "kota",
      "toma",
      "hlambulula",
      "buyela",
      "tshaba",
      "huma",
      "hlambululaCache",
      "hluvukisaDB",
      "tumaEmail",
      "tsalaXitirhelo",
    ],
  },
}).grammar();
