import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const siswati = new Language({
  language: "siswati",
  about: "ENIDE licedze lelivumela kutsi ubhale tinhlelo ngemilimi leyehlukene",

  include: DocStr(
    "faka",
    "kusetjentiswa kufaka tilimi, mabhayibhuli nobe tinhlelo tangephandle",
  ),

  commands: {
    __about: DocStr("mayelana", "utfola lwati ngenhlelo ye ENIDE"),
    __help: DocStr("lusito", "kubona tonkhe tikhombandlela letikhona ku ENIDE"),
    __version: DocStr(
      "inguquko",
      "kubona simo samanje se ENIDE kulekhompyutha",
    ),
    __languages: DocStr("tilimi", "kubona tilimi letikhona kusetjentiswa"),
    __documentation: DocStr("incwadzi", "kubona incwadzi lechaza lulwimi"),
    __grammar: DocStr("mthetho", "imithetfo yekubhala lulwimi lolu"),
  },

  library: {
    __standard: {
      main: DocStr("lokujwayelekile", "imisebentzi yesistimu yaka ENIDE"),
      __isarray: DocStr("luluhla", "kubona kutsi loku kuluhla lwetintfo yini"),
      __isobject: DocStr("yintfo", "kubona kutsi loku yintfo lehlelekile yini"),
      __typeof: DocStr(
        "luhlobo_lwa",
        "utfola luhlobo lwedatha lolu kusetjentiswako",
      ),
      __parse: DocStr(
        "hlatiya",
        "kwenta umbhalo ube luhlobo lwedatha lolufanele",
      ),
    },
    __math: {
      main: DocStr("tibalo", "imisebenti yetibalo nemithetfo yemathematika"),
      __pi: DocStr("PI", "inombolo ye pi leyatiwako"),
      __sqrt: DocStr("imphandze", "imphandze yesikwele senombolo"),
      __pow: DocStr("emandla", "kusiphakamisa inombolo ngemandla latsite"),
      __round: DocStr("tungisa", "kuletha inombolo eduze kwalephatsini"),
      __random: DocStr("ngamane", "inombolo levela ngaphandle kokuhleleka"),
      __max: DocStr("lukhulu", "inombolo lenkhulu kakhulu kulawa akhona"),
      __min: DocStr("luncane", "inombolo lencane kakhulu kulawa akhona"),
      __isNumber: DocStr("yinombolo", "kubona kutsi loku yinombolo yini"),
      __isInteger: DocStr("yiphelele", "kubona kutsi inombolo iphelele yini"),
      __isFloat: DocStr("inemaphuzu", "kubona kutsi inombolo inemaphuzu yini"),
      __cos: DocStr("cos", "kubala i-cosinus"),
      __sin: DocStr("sin", "kubala i-sinus"),
      __tan: DocStr("tan", "kubala i-tangenta"),
    },

    __string: {
      main: DocStr("umbhalo", "kusebenta ngemagama nemibhalo"),
      __length: DocStr("budze", "utfola budze bembhalo"),
      __toUpperCase: DocStr("tinkhulu", "kwenta emagama abe makhulu"),
      __toLowerCase: DocStr("tincane", "kwenta emagama abe mancane"),
      __include: DocStr(
        "unayo",
        "kubona kutsi umbhalo unawo yini lamanye amagama",
      ),
      __repeat: DocStr("phindza", "kuphindza umbhalo kanyenti"),
    },

    __date: {
      main: DocStr("sikhatsi", "kusetyenziswa kwesikhatsi nelilanga"),
      __now: DocStr("nyalo", "lilanga nesikhatsi sakanyalo"),
      __year: DocStr("umnyaka", "utfola umnyaka walelilanga"),
      __month: DocStr("inyanga", "utfola inyanga yalelilanga"),
      __dayMonth: DocStr("lilangaLenyanga", "lilanga lenyanga"),
      __dayWeek: DocStr("lilangaLeviki", "lilanga leviki"),
      __hour: DocStr("lihora", "lihora lamanje"),
      __minute: DocStr("imizuzu", "imizuzu yelihora"),
      __second: DocStr("imizuzwana", "imizuzwana yemzuzu"),
    },
  },

  types: {
    __number: DocStr("inombolo", "luhlobo lwenombolo"),
    __string: DocStr("umbhalo", "luhlobo lwemagama nemibhalo"),
    __boolean: DocStr("licinisoNobeEmanga", "luhlobo lweliciniso nobe emanga"),
    __object: DocStr("intfo", "luhlobo lwentfo lehlelekile"),
    __void: DocStr("lite", "kukhombisa kutsi kute lokubuyiswayo"),
    __array: DocStr("luluhla", "luhlobo lweluluhla lwetintfo"),
  },

  specialValues: {
    __true: DocStr("liciniso", "li-value leliciniso"),
    __false: DocStr("emanga", "li-value lemagama"),
    __null: DocStr("site", "kukhombisa kutsi kute lutfo"),
  },

  words: {
    __new: DocStr("lensha", "kwenta intfo lensha ye-class"),
    __this: DocStr("loku", "kukhombisa intfo lesebentako nyalo"),
    __extends: DocStr("iyandza", "uma i-class litsatsa mthetho kulelinye"),
  },

  accessModifiers: {
    __private: DocStr("fihlakele", "kusetjentiswa kule-class kuphela"),
    __public: DocStr("balala", "kusetjentiswa yonkhe indzawo"),
    __protected: DocStr(
      "vikelekile",
      "kusetjentiswa kule-class netingane tazo",
    ),
    __readonly: DocStr("fundvwa_kuphela", "ngeke kuguqulwe"),
    __static: DocStr("imelele", "yintfo ye-class, hhayi ye-instance"),
  },

  methods: {
    method: {
      __print: DocStr("khombisa", "khombisa lokutsite esikrinini"),
      __scan: DocStr("faka", "faka lwati loluchatfwe ngumsebenzisi"),
      __return: DocStr("buyisa", "buyisa umphumela e-function"),
      __break: DocStr("dzabula", "kumisa kuphindza kwentfo nyalo"),
      __continue: DocStr("chubeka", "kuya esicini lesilandzelako sekuphindza"),
    },

    sentences: {
      __function: DocStr("umsebenti", "kusungula umsebenti lomusha"),
      __if: DocStr("uma", "kuhlola simo lesitsite"),
      __else: DocStr("ngaphandle", "indlela lenye uma simo singasilo"),
      __while: DocStr("ngesikhatsi", "kuphindza uma simo siseliciniso"),
      __for: DocStr("kute", "kuphindza ngeluhlelo lolubaliwe"),
      __switch: DocStr("khetsa", "kukhetsa phakatsi kwetintfo letinyenti"),
      __case: DocStr("khetsi", "indlela letsite kusetjentiswa 'khetsa'"),
      __default: DocStr(
        "lokujwayelekile",
        "lokwentekako uma kute lokukhetsiwe",
      ),
      __try: DocStr("zama", "zama kusebentisa khodi"),
      __catch: DocStr("bamba", "bamba liphutsa uma livela"),
      __finally: DocStr("ekugcineni", "lokwentekako nakanjani ekupheleni"),
      __class: DocStr("sicumbi", "kusungula sicumbi (class) lesisha"),
      __constructor: DocStr("umsunguli", "umsebenti lowakha intfo lensha"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Umbiko",
      "Inombolo",
      "Ligama",
      "Imphandze",
      "Intfo",
      "Bekulindzelwe",
      "Kutfleakale",
      "Kushintsha_lokungashintfwa",
      "Ligama_selikhona",
      "Seluleko",
      "Luphawu_lolungakalungi",
      "Sicheme_sesigcwele",
      "Luphawu",
      "Kuphela_lokungakalindzeleki",
    ),
    main: errorMessage("LIPHUTSA", "liphutsa lesistimu leliphakama phambili"),
    __TypeError: errorMessage(
      "LIPHUTSA_LOHLANGOTI",
      "luhlobo lolungahambisani nalomsebenti",
    ),
    __InitError: errorMessage(
      "LIPHUTSA_KUCALA",
      "intfo ayikakalungi kahle ekucaleni",
    ),
    __ReferenceError: errorMessage(
      "LIPHUTSA_LEKUTSITSA",
      "ligama lofuna kusebentisa alikho",
    ),
    __SyntaxError: errorMessage(
      "LIPHUTSA_LESIBHALO",
      "luhlelo lwekubhala alukalungi",
    ),
    __RangeError: errorMessage(
      "LIPHUTSA_LEMNGCWE",
      "inombolo isemngceleni longakalungi",
    ),
    __URIError: errorMessage("LIPHUTSA_URI", "i-URI ayikahleleki kahle"),
    __EvalError: errorMessage("LIPHUTSA_EVAL", "liphutsa emsebentini we-eval"),
    __UNKNOWN_ERROR: errorMessage(
      "LIPHUTSA_LELINGATIWA",
      "kuvele liphutsa lelingatiwa",
    ),
  },

  example: {
    __array: [
      "kudla",
      "live",
      "maluhla_emagama",
      "tinombolo",
      "imibala",
      "timphahla",
      "basebentisi",
      "tincenye",
      "emaphuzu",
      "tilimi",
    ],
    __boolean: [
      "simo",
      "iyasebenta",
      "ivumelekile",
      "icedziwe",
      "imvume",
      "iku-inthanethi",
      "isendleleni",
      "yentiwe",
      "ihloliwe",
      "isulwe",
    ],
    __function: [
      "tsatsaLigama",
      "balaInombolo",
      "khombisaDatha",
      "lungisaProfil",
      "bhalaUmbhalo",
      "hlatiyaKhodi",
      "hlolaDatha",
      "gcinaIncwadzi",
      "tfumaUmbiko",
      "hlanganisaKonkhe",
    ],
    __number: [
      "budzala",
      "umnyaka_wekutalwa",
      "imphumela",
      "konkhe",
      "intsengo",
      "inkhomba",
      "sikhatsi",
      "liningi",
      "emaphuzu",
      "lihora",
    ],
    __object: [
      "umuntfu",
      "ikhasimende",
      "tinhlelo",
      "imphumela",
      "inkhokhelo",
      "ukuhleleka",
      "profil",
      "likheli",
      "metadatha",
      "sikhatsi_sekusebenta",
    ],
    __string: [
      "ligama",
      "sihloko",
      "inchazelo",
      "imeyili",
      "iphasiwedi",
      "umbiko",
      "ithegi",
      "sikhiye",
      "i-url",
      "ilinki",
    ],
    __void: [
      "hamba",
      "sula",
      "misa",
      "hlobisa",
      "futa",
      "phuma",
      "khulula_ibhafa",
      "gcina_konkhe",
      "tfuma",
      "ngena",
    ],
  },
}).grammar();
