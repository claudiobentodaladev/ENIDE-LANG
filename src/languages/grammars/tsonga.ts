import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const tsonga = new Language({
  language: "tsonga",
  about:
    "ENIDE i khompayila ya ku hundzuluxa (transpiler) leyi pfumelelaka ku tsala maphrogireme hi ririmi rihi na rihi",

  include: DocStr(
    "Katsa",
    "Ku tirhisiwa ku katsa tindzimi, tilayiburari, kumbe amamojula man'wana",
  ),

  commands: {
    __about: DocStr("Mayelana", "Ku kuma vuxokoxoko ni datha hi ENIDE"),
    __help: DocStr("Pfuno", "Ku kuma xitalo xa milayo hinkwayo leyi nga kona"),
    __version: DocStr("Vhezini", "Ku kuma vhezini ya sweswi ya ENIDE"),
    __languages: DocStr(
      "Tindzimi",
      "Ku kuma xitalo xa tindzimi hinkwato leti nga kona",
    ),
    __documentation: DocStr(
      "Matsalwa",
      "Ku kuma matsalwa ni amadokhumenti ya ririmi ra ENIDE",
    ),
    __grammar: DocStr("Isintaksi", "Ku kuma mithetho ya isintaksi ya ririmi"),
  },

  library: {
    __standard: {
      main: DocStr("Ntolovelo", "Ku fikelela mitirho ya ntolovelo ya sisiteme"),
      __isarray: DocStr(
        "IngoLixaka",
        "Ku kambela loko inani ri ri lixaka (array)",
      ),
      __isobject: DocStr(
        "IngoXilo",
        "Ku kambela loko inani ri ri xilo (object)",
      ),
      __typeof: DocStr("MuxakaWa", "Ku kuma muxaka wa inani ra datha"),
      __parse: DocStr(
        "Cazulula",
        "Ku hundzuluxa xitambo ku va muxaka wa datha lowu faneleke",
      ),
    },

    __math: {
      main: DocStr("Matematiki", "Ku fikelela mitirho ya matematiki"),
      __pi: DocStr("PI", "Inani leri vekiweke ra konstante Pi"),
      __sqrt: DocStr(
        "RimitsuRaSkwere",
        "Ku kuma rimitsu ra skwere ra nomboro (square root)",
      ),
      __pow: DocStr("Amandla", "Ku kuma amandla ya nomboro"),
      __round: DocStr(
        "Sondeza",
        "Ku sondeza nomboro eka leyi nga kusuhi kakhulu",
      ),
      __random: DocStr(
        "HiBhaqo",
        "Ku tumbuluxa nomboro leyi nga hleliwangiki (random)",
      ),
      __max: DocStr(
        "YikuluKulu",
        "Ku kuma inani leri nga rikulu kakhulu eka hinkwato",
      ),
      __min: DocStr(
        "YintsongoTsongo",
        "Ku kuma inani leri nga ritsongo kakhulu eka hinkwato",
      ),
      __isNumber: DocStr("INomboro", "Ku kambela loko inani ri ri nomboro na"),
      __isInteger: DocStr(
        "INomboroYipheleleke",
        "Ku kambela loko nomboro yi phelele handle ka desimali (integer)",
      ),
      __isFloat: DocStr("IDesimali", "Ku kambela loko inani ri ri desimali"),
      __cos: DocStr("cos", "Ku kuma cosine ya nkongomelo eka radiyan"),
      __sin: DocStr("sin", "Ku kuma sine ya nkongomelo eka radiyan"),
      __tan: DocStr("tan", "Ku kuma tangent ya nkongomelo eka radiyan"),
    },

    __string: {
      main: DocStr(
        "Xitambo",
        "Mitirho yo lulamisa matsalwa ni switambo zamazwi (string)",
      ),
      __length: DocStr("Ubude", "Ku kuma ubude bya xitambo bya matsalwa"),
      __toUpperCase: DocStr(
        "MaletereLamankulu",
        "Ku hundzuluxa matsalwa leswaku ya va hi maletere lamankulu",
      ),
      __toLowerCase: DocStr(
        "MaletereLamantsongo",
        "Ku hundzuluxa matsalwa leswaku ya va hi maletere lamantsongo",
      ),
      __include: DocStr(
        "Xikatsa",
        "Ku kambela loko xitambo xi ri ni matsalwa man'wana phakathi",
      ),
      __repeat: DocStr(
        "Phinda",
        "Ku phinda xitambo ka mfanelo ya minkarhi leyi vekiweke",
      ),
    },

    __date: {
      main: DocStr("Siku", "Mitirho ya siku ni nkarhi wa sisiteme"),
      __now: DocStr("Sweswi", "Ku kuma siku ni nkarhi wa sweswi"),
      __year: DocStr("Lembe", "Ku kuma lembe leri tirhaka"),
      __month: DocStr("Inyanga", "Ku kuma inyanga"),
      __dayMonth: DocStr("SikuRaInyanga", "Ku kuma siku ra inyanga"),
      __dayWeek: DocStr("SikuRaVhiki", "Ku kuma siku ra vhiki"),
      __hour: DocStr("Ihora", "Ku kuma ihora"),
      __minute: DocStr("Minete", "Ku kuma minete"),
      __second: DocStr("Sekonde", "Ku kuma sekonde"),
    },
  },

  types: {
    __number: DocStr(
      "Nomboro",
      "Ku tivisa xicinci (variable) xa muxaka wa nomboro",
    ),
    __string: DocStr("Xitambo", "Ku tivisa xicinci xa muxaka wa matsalwa"),
    __boolean: DocStr(
      "Ibhuli",
      "Ku tivisa xicinci xa muxaka wa logic (boolean)",
    ),
    __object: DocStr("Xilo", "Ku tivisa xilo xa datha (object) lexi khomiweke"),
    __void: DocStr(
      "Kuhava",
      "Ntirho lowu nga vuyisiki nchumu kumbe inani emuva",
    ),
    __array: DocStr(
      "Lixaka",
      "Ku tivisa lixaka leri nga ni swilo swo hlayanyana (array)",
    ),
  },

  specialValues: {
    __true: DocStr("Ntiyiso", "Inani ra datha ra ntiyiso (true)"),
    __false: DocStr("Mavunwa", "Inani ra datha ra mavunwa (false)"),
    __null: DocStr(
      "KuhavaValu",
      "Inani leri kombisaka leswaku ku hava nchumu kule ndhawu",
    ),
  },

  words: {
    __new: DocStr(
      "Lexintshwa",
      "Ku tumbuluxa xilo xintshwa lexi humaka eka kilasi",
    ),
    __this: DocStr("Lexi", "Ku kombetela eka xilo xa sweswi ekilasini leyi"),
    __extends: DocStr(
      "Yandlala",
      "Ku ndlandlamuxa kumbe ku teka thaka eka kilasi yin'wana (inheritance)",
    ),
  },

  accessModifiers: {
    __private: DocStr(
      "Xihundla",
      "Swi fikeleleka ntsena ngaphakathi ka kilasi leri uqobo",
    ),
    __public: DocStr("Xagwalala", "Swi fikeleleka na kwihi na kwihi ekhodini"),
    __protected: DocStr(
      "Xisirheleriweke",
      "Swi fikeleleka eka kilasi leri ni man'wana lama tekeke thaka eka rona",
    ),
    __readonly: DocStr(
      "HlayaNtsena",
      "Inani leri nga cinciki endzhaku ka ku tsariwa ka rona",
    ),
    __static: DocStr(
      "Lexingacinciki",
      "I ya kilasi hi ku angarheka, ku nga ri ya xilo xin'we",
    ),
  },

  methods: {
    method: {
      __print: DocStr("Bonisa", "Ku kombisa kumbe ku tsala inani eka sikirini"),
      __scan: DocStr(
        "Hlaya",
        "Ku hlaya inani leri nghenisiwaka hi mushandisi (input)",
      ),
      __return: DocStr(
        "Buyisa",
        "Ku vuyisa inani leri humaka eka ntirho (function)",
      ),
      __break: DocStr("Yimisa", "Ku huma eka luphu (loop) hi ku hatlisa"),
      __continue: DocStr(
        "Qhubeka",
        "Ku tlulela eka jiko leri landzelaka ra luphu",
      ),
    },

    sentences: {
      __function: DocStr("Ntirho", "Ku tivisa ntirho lowuntshwa wa khodi"),
      __if: DocStr("Loko", "Ku kambela xiyimo xa mfanelo yo sungula"),
      __else: DocStr(
        "Kumbe",
        "Xiyimo lexi nga ta endleka loko xo sungula xi ri mavunwa",
      ),
      __while: DocStr(
        "Nkarhi",
        "Luphu leyi tirhaka nkarhi lowu xiyimo xi nga ntiyiso",
      ),
      __for: DocStr(
        "Phinda",
        "Luphu leyi phindhaka ku fikela eka inani leri vekiweke",
      ),
      __switch: DocStr(
        "Hlawula",
        "Xivumbeko xo hlawula exikarhi ka swiyimo swo hlayanyana",
      ),
      __case: DocStr("Xiyimo", "Xiyimo xo karhi lexi leriweke eku hlawuleni"),
      __default: DocStr(
        "Ntolovelo",
        "Okwenziwayo hi ntolovelo loko ku nga ri na xiyimo lexi fambelanaka",
      ),
      __try: DocStr(
        "Ringeta",
        "Ku sungula xiyenge xa khodi lexi nga vaka ni swihoxo",
      ),
      __catch: DocStr(
        "Khoma",
        "Ku khoma ni ku lulamisa xihoxo lexi nga humelela",
      ),
      __finally: DocStr(
        "Ekuheleni",
        "Khodi leyi nga ta tirha mikarhi hinkwayo endzhaku ka try ni catch",
      ),
      __class: DocStr("Kilasi", "Ku tivisa kilasi lerintshwa"),
      __constructor: DocStr(
        "Umakhi",
        "Ntirho wo hlawuleka lowu akaka ni ku sungulisa xilo xintshwa",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Umlayezo",
      "Inani",
      "Xicinci",
      "Impahla",
      "Xilo",
      "LeswiLanguteriweke",
      "LeswiKumiweke",
      "KuAvaKonstante",
      "ParamitaraEphindiweke",
      "Isu",
      "ThokeniYoBiha",
      "IphuthaLestack",
      "Thokeni",
      "KuHelelaLokuNgaLingeriwangiki",
    ),
    main: errorMessage("XIHOXO", "Xihoxo xa ntolovelo xa sisiteme"),
    __TypeError: errorMessage(
      "XIHOXO_XA_MUXAKA",
      "Muxaka wa datha awu fanele kulo mfungho lowu endliwangaka",
    ),
    __InitError: errorMessage(
      "XIHOXO_XO_SUNGULA",
      "Xicinci a xi sunguriwanga kahle ngaphambilini",
    ),
    __ReferenceError: errorMessage(
      "XIHOXO_XO_KOMBISA",
      "Inani okanye matsalwa leri kombiweke a ri kumiwanga kulo mda",
    ),
    __SyntaxError: errorMessage(
      "XIHOXO_XA_ISINTAKSI",
      "Xivumbeko xa khodi xi tlula mithetho ya ririmi",
    ),
    __RangeError: errorMessage(
      "XIHOXO_XA_NTSENGO",
      "Inani ri ngaphandle ka ntsengo lowu pfumelelweke kuxa lixaka",
    ),
    __URIError: errorMessage(
      "XIHOXO_XA_URI",
      "I-URI leyi nga lungangiki mbilu",
    ),
    __EvalError: errorMessage(
      "XIHOXO_XA_EVAL",
      "Xihoxo lexi humeleleke kulo ntirho wa eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "XIHOXO_LEXI_NGA_TIVEKIKI",
      "Xihoxo lexi nga tivekiki nhlobo lexi hoxeke sisiteme",
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
