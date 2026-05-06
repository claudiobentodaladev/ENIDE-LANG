import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const chokwe = new Language({
  language: "chokwe",
  about:
    "ENIDE i transpilador wa kuhindulukilwa yoneka wa kuprograma mu ndimi yonse",

  include: DocStr(
    "Kushimbika",
    "Chalingiwa ni kushimbika lilimi nyi jimbilioteka",
  ),

  commands: {
    __about: DocStr("mwandji", "ku zaya makanda ya ENIDE"),
    __help: DocStr("wuhanhula", "ku zaya malista ya milayo yonse ya kusanga"),
    __version: DocStr("nzila", "ku zaya nzila ya kala ya ENIDE"),
    __languages: DocStr("ndimi", "ku zaya malista ya ndimi yonse ya kusanga"),
    __documentation: DocStr("doc", "ku zaya makanda ya ndimi"),
    __grammar: DocStr("gramatika", "ku zaya gramatika ya lilimi"),
  },

  library: {
    __standard: {
      main: DocStr("misamu_ya_suka", "ku samba misamu ya suka ya kufwanana"),
      __isarray: DocStr("ILisita", "ku tala soku tandu i lisita"),
      __isobject: DocStr("ICifo", "ku tala soku tandu i cifo"),
      __typeof: DocStr("Muxima", "ku zaya muxima wa tandu"),
      __parse: DocStr("Parse", "ku hindula malembu ku tandu ya wamwenemwene"),
    },

    __math: {
      main: DocStr("matematika", "ku samba misamu ya matematika"),
      __pi: DocStr("PI", "ku zaya tandu ya pi"),
      __sqrt: DocStr("MulamuWaNzole", "ku zaya mulamu wa nzole"),
      __pow: DocStr("Nguzu", "ku zaya nguzu ya nambala"),
      __round: DocStr("Zungulusha", "ku zungulusa nambala"),
      __random: DocStr("Kasoni", "ku zaya nambala ya kasoni"),
      __max: DocStr("Nene", "ku zaya tandu ya nene"),
      __min: DocStr("Fioti", "ku zaya tandu ya fioti"),
      __isNumber: DocStr("INambala", "ku tala soku tandu i nambala"),
      __isInteger: DocStr(
        "INambalaKima",
        "ku tala soku tandu i nambala ya kima",
      ),
      __isFloat: DocStr(
        "INambalaKipande",
        "ku tala soku tandu i nambala ya kipande",
      ),
      __cos: DocStr("Cos", "ku zaya cosinus ya kona mu radianos"),
      __sin: DocStr("Sin", "ku zaya sinus ya kona mu radianos"),
      __tan: DocStr("Tan", "ku zaya tangens ya kona mu radianos"),
    },

    __string: {
      main: DocStr("malembu", "ku samba misamu ya kusobela malembu"),
      __length: DocStr("Wupulusu", "ku zaya wupulusu wa malembu"),
      __toUpperCase: DocStr("KuNeneNene", "ku hindula malembu ku nene nene"),
      __toLowerCase: DocStr(
        "KuFiotiFioti",
        "ku hindula malembu ku fioti fioti",
      ),
      __include: DocStr("Ikwima", "ku tala soku malembu ikwima mu malembu"),
      __repeat: DocStr("Kabusha", "ku kabusha malembu nambala ya ntangu"),
    },

    __date: {
      main: DocStr("lusuku", "ku samba misamu ya lusuku ni ngonga"),
      __now: DocStr("Sono", "ku zaya lusuku ni ngonga ya sono"),
      __year: DocStr("Mwaka", "ku zaya mwaka"),
      __month: DocStr("Mweshi", "ku zaya mweshi"),
      __dayMonth: DocStr("LusukuMweshi", "ku zaya lusuku lwa mweshi"),
      __dayWeek: DocStr("LusukuSemana", "ku zaya lusuku lwa semana"),
      __hour: DocStr("Ngonga", "ku zaya ngonga"),
      __minute: DocStr("Minuto", "ku zaya minuto"),
      __second: DocStr("Segundo", "ku zaya segundo"),
    },
  },

  types: {
    __number: DocStr("nambala", "ku bonga chivikilanga cha mwine nambala"),
    __string: DocStr("malembu", "ku bonga chivikilanga cha mwine malembu"),
    __boolean: DocStr("bool", "ku bonga chivikilanga cha mwine bool"),
    __object: DocStr("cifo", "ku sambila cifo ca kuimama"),
    __void: DocStr("bula_vutuka", "ku bonga misamu ya kubula vutuka tandu"),
    __array: DocStr("lisita", "ku bonga estrutura ya lisita ya makanda"),
  },

  specialValues: {
    __true: DocStr("Wamwenemwene", "tandu ya bool ya wamwenemwene"),
    __false: DocStr("Waululu", "tandu ya bool ya waululu"),
    __null: DocStr("kacifo", "kubula tandu"),
  },

  words: {
    __new: DocStr("cipwa", "ku bonga cipwa cha kilasi"),
    __this: DocStr("eyi", "ku samba makanda ya kilasi yeyoneka"),
    __extends: DocStr(
      "kuluta",
      "ku sambila soku kilasi ikusanga ku kilasi nkaka",
    ),
  },

  accessModifiers: {
    __private: DocStr("wa_nzubu", "ku samba mu kilasi yoneka"),
    __public: DocStr("wa_onse", "ku samba ku malo onse"),
    __protected: DocStr("wa_lukoso", "ku samba mu kilasi ni makilasi yayo"),
    __readonly: DocStr("ku_samba_yoneka", "tandu ingabongwa kamwimwe"),
    __static: DocStr("wa_kuyimama", "wa kilasi, si wa cipwa"),
  },

  methods: {
    method: {
      __print: DocStr("lemba", "ku lemba tandu ku ekele"),
      __scan: DocStr("samba", "ku samba tandu ku njila ya kukota"),
      __return: DocStr("vutuka", "ku vutula tandu ku misamu"),
      __break: DocStr("ima", "ku ima ngiedi"),
      __continue: DocStr("enda", "ku enda ku ngiedi wa kutaha"),
    },

    sentences: {
      __function: DocStr("misamu", "ku bonga misamu"),
      __if: DocStr("soku", "ku bonga kondisaun"),
      __else: DocStr("kana", "ku bonga kondisaun ya nkaka"),
      __while: DocStr("ngiedi", "ku bonga ngiedi wa dokato"),
      __for: DocStr("mu", "ku bonga ngiedi wa mu"),
      __switch: DocStr("songola", "ku bonga estrutura ya kusongola"),
      __case: DocStr("kima", "ku bonga kima mu estrutura ya kusongola"),
      __default: DocStr(
        "nsuka",
        "ku bonga kima kia nsuka mu estrutura ya kusongola",
      ),
      __try: DocStr("suka", "ku bonga bloku ya suka"),
      __catch: DocStr("kanga", "ku bonga bloku ya kulukila minsangu"),
      __finally: DocStr("nkutu", "ku bonga bloku ya kusalama ntangu yonse"),
      __class: DocStr("kilasi", "ku bonga kilasi"),
      __constructor: DocStr("yamba", "estrutura ya kubonga makanda mu kilasi"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mwandji",
      "Tandu",
      "Chivikilanga",
      "Makanda",
      "Cifo",
      "Yafwanina",
      "Yakwima",
      "Kubonga_Kuyimama",
      "Paramitru_Kabusha",
      "Nsongolo",
      "Token_Wabela",
      "Stack_Ifikila",
      "Token",
      "Nsuka_Isibue",
    ),
    main: errorMessage("MINSANGU", "minsangu ya sistema"),
    __TypeError: errorMessage("MINSANGU_MUXIMA", "muxima wabela mu misamu"),
    __InitError: errorMessage(
      "MINSANGU_YAMBA",
      "chivikilanga chibula kuyambiwa",
    ),
    __ReferenceError: errorMessage(
      "MINSANGU_REFERENCIA",
      "chivikilanga, misamu nyi jimbilioteka yajila mu scope",
    ),
    __SyntaxError: errorMessage("MINSANGU_SINTAXE", "codigo wabela"),
    __RangeError: errorMessage(
      "MINSANGU_RANGO",
      "tandu ifikila rango ya kuluvula",
    ),
    __URIError: errorMessage("MINSANGU_URI", "URI wabela invalid"),
    __EvalError: errorMessage("MINSANGU_EVAL", "minsangu ya eval"),
    __UNKNOWN_ERROR: errorMessage(
      "MINSANGU_ISIBUE",
      "minsangu isibue ya kuzaya",
    ),
  },

  example: {
    __array: [
      "biakudia",
      "mateka",
      "bifo",
      "tags",
      "mabala",
      "bipanga",
      "antu",
      "makilasi",
      "manambala",
      "ndimi",
    ],
    __boolean: [
      "muimo",
      "iNeneEo",
      "iSambaEo",
      "iMonaEo",
      "inaLuvula",
      "ikotaEo",
      "inaFwana",
      "ikwimaEo",
      "isangaEo",
      "ibangaEo",
    ],
    __function: [
      "zayaJina",
      "zayaTandu",
      "sambaMisamu",
      "kotaMakanda",
      "hindulaNgonga",
      "sambaNjila",
      "talaFomu",
      "lembaKifo",
      "hindulaMuimo",
      "balaNambala",
    ],
    __number: [
      "miaka",
      "mwaka",
      "nambala",
      "yonse",
      "mutengo",
      "index",
      "ntangu",
      "kipimo",
      "pointi",
      "timeout",
    ],
    __object: [
      "muntu",
      "musambishi",
      "config",
      "chibulo",
      "malipa",
      "misango",
      "profil",
      "malo",
      "makanda",
      "ntangu_ya_samba",
    ],
    __string: [
      "jina",
      "mutwe",
      "nsongolo",
      "email",
      "kalembu_ka_suka",
      "mwandji",
      "chitanda",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "kota",
      "yamba",
      "sungula",
      "kabusha",
      "banga",
      "bula_kota",
      "sungula_cache",
      "sambika_ku_db",
      "tuma_email",
      "andika_cifo",
    ],
  },
}).grammar();
