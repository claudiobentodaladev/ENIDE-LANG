import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const siswati = new Language({
  language: "siswati",
  about:
    "ENIDE lulwimi lwekubhala tinhlelo tekhompyutha lolunemitfombolunye lolukuvumela kutsi ubhale tinhlelo nganoma lulwimi",
  include: DocStr(
    "Katsa",
    "Kusetjentiswa kufaka tilimi, mabhayibhuli nobe tinhlelo tangephandle",
  ),

  commands: {
    __about: DocStr("Mayelana", "Utfola lwati ngenhlelo ye ENIDE"),
    __help: DocStr("Lusito", "Kubona tonkhe tikhombandlela letikhona ku ENIDE"),
    __version: DocStr(
      "Inguquko",
      "Kubona simo samanje se ENIDE kulekhompyutha",
    ),
    __languages: DocStr("Tilimi", "Kubona tilimi letikhona kusetjentiswa"),
    __documentation: DocStr("Incwadzi", "Kubona incwadzi lechaza lulwimi"),
    __grammar: DocStr("Imitfetho", "Imithetfo yekubhala lulwimi lolu"),
  },

  library: {
    __standard: {
      main: DocStr("Lokujwayelekile", "Imisebentzi yesistimu yaka ENIDE"),
      __isarray: DocStr("Luluhla", "Kubona kutsi loku kuluhla lwetintfo yini"),
      __isobject: DocStr("Yintfo", "Kubona kutsi loku yintfo lehlelekile yini"),
      __typeof: DocStr(
        "LuhloboLwa",
        "Utfola luhlobo lwedatha lolu kusetjentiswako",
      ),
      __parse: DocStr(
        "Hlatiya",
        "Kwenta umbhalo ube luhlobo lwedatha lolufanele",
      ),
    },
    __math: {
      main: DocStr("Tibalo", "Imisebenti yetibalo nemithetfo yemathematika"),
      __pi: DocStr("PI", "Inombolo ye pi leyatiwako"),
      __sqrt: DocStr("Imphandzeyesikwele", "Imphandze yesikwele senombolo"),
      __pow: DocStr("Emandla", "Kusiphakamisa inombolo ngemandla latsite"),
      __round: DocStr("Tungisa", "Kuletha inombolo eduze kwalephatsini"),
      __random: DocStr("Ngamane", "Inombolo levela ngaphandle kokuhleleka"),
      __max: DocStr("Lukhulu", "Inombolo lenkhulu kakhulu kulawa akhona"),
      __min: DocStr("Luncane", "Inombolo lencane kakhulu kulawa akhona"),
      __isNumber: DocStr("Yinombolo", "Kubona kutsi loku yinombolo yini"),
      __isInteger: DocStr("Yiphelele", "Kubona kutsi inombolo iphelele yini"),
      __isFloat: DocStr("Inemaphuzu", "Kubona kutsi inombolo inemaphuzu yini"),
      __cos: DocStr("cos", "Kubala i-cosinus"),
      __sin: DocStr("sin", "Kubala i-sinus"),
      __tan: DocStr("tan", "Kubala i-tangenta"),
    },

    __string: {
      main: DocStr("Umbhalo", "Kusebenta ngemagama nemibhalo"),
      __length: DocStr("Budze", "Utfola budze bembhalo"),
      __toUpperCase: DocStr("Tinkhulu", "Kwenta emagama abe makhulu"),
      __toLowerCase: DocStr("Tincane", "Kwenta emagama abe mancane"),
      __include: DocStr(
        "Unayo",
        "Kubona kutsi umbhalo unawo yini lamanye amagama",
      ),
      __repeat: DocStr("Phindza", "Kuphindza umbhalo kanyenti"),
    },

    __date: {
      main: DocStr("Sikhatsi", "Kusetjentiswa kwesikhatsi nelilanga"),
      __now: DocStr("Nyalo", "Lilanga nesikhatsi sakanyalo"),
      __year: DocStr("Umnyaka", "Utfola umnyaka walelilanga"),
      __month: DocStr("Inyanga", "Utfola inyanga yalelilanga"),
      __dayMonth: DocStr("LilangaLenyanga", "Lilanga lenyanga"),
      __dayWeek: DocStr("LilangaLeviki", "Lilanga leviki"),
      __hour: DocStr("Lihora", "Lihora lamanje"),
      __minute: DocStr("Imizuzu", "Imizuzu yelihora"),
      __second: DocStr("Imizuzwana", "Imizuzwana yemzuzu"),
    },
  },

  types: {
    __number: DocStr("Inombolo", "Luhlobo lwenombolo"),
    __string: DocStr("Umbhalo", "Luhlobo lwemagama nemibhalo"),
    __boolean: DocStr("LicinisoNobeEmanga", "Luhlobo lweliciniso nobe emanga"),
    __object: DocStr("Yintfo", "Luhlobo lwentfo lehlelekile"),
    __void: DocStr("Lite", "Kukhombisa kutsi kute lokubuyiswayo"),
    __array: DocStr("Luluhla", "Luhlobo lweluluhla lwetintfo"),
  },

  specialValues: {
    __true: DocStr("Liciniso", "Inani leliciniso (true)"),
    __false: DocStr("Emanga", "Inani lemanga (false)"),
    __null: DocStr("Kute", "Kukhombisa kutsi kute lutfo lapha"),
  },

  words: {
    __new: DocStr("Lensha", "Kwenta intfo lensha yaloluhlobo"),
    __this: DocStr("Loku", "Kukhombisa intfo lesebentako nyalo kulo luhlobo"),
    __extends: DocStr(
      "Iyandza",
      "Uma luhlobo lutsatsa imitfetho kulelinye luhlobo (inheritance)",
    ),
  },

  accessModifiers: {
    __private: DocStr("Fihlakele", "Kusetjentiswa kuleli luhlobo kuphela"),
    __public: DocStr("Balala", "Kusetjentiswa yonkhe indzawo ekhodini"),
    __protected: DocStr(
      "Vikelekile",
      "Kusetjentiswa kuleli luhlobo netingane tazo letitsetse mtfetho",
    ),
    __readonly: DocStr("FundvwaKuphela", "Ngeke kuguqulwe emva kwekubhalwa"),
    __static: DocStr(
      "Imesisekelo",
      "Yintfo yeluhlobo lonkhe, hhayi yencenye yinye",
    ),
  },

  methods: {
    method: {
      __print: DocStr("Khombisa", "Khombisa lokutsite esikrinini"),
      __scan: DocStr("Faka", "Faka lwati loluchatfwe ngumsebenzisi (input)"),
      __return: DocStr("Buyisa", "Buyisa umphumela levela emsebentini"),
      __break: DocStr("Dzabula", "Kumisa kuphindza kwentfo nyalo (break loop)"),
      __continue: DocStr("Chubeka", "Kuya esicini lesilandzelako sekuphindza"),
    },

    sentences: {
      __function: DocStr(
        "Umsebenti",
        "Kusungula umsebenti lomusha wemaphrogireme",
      ),
      __if: DocStr("Uma", "Kuhlola simo lesitsite sekucala"),
      __else: DocStr(
        "Ngaphandle",
        "Indlela lenye uma simo sekucala singasilo ntiyiso",
      ),
      __while: DocStr("Ngesikhatsi", "Kuphindza luphu uma simo siseliciniso"),
      __for: DocStr("Bhala", "Kuphindza luphu ngeluhlelo lolubaliwe"),
      __switch: DocStr("Khetsa", "Kukhetsa phakatsi kwetintfo letinyenti"),
      __case: DocStr(
        "Xiyimo",
        "Indlela letsite kusetjentiswa ngaphasi kwe 'Khetsa'",
      ),
      __default: DocStr(
        "Lokujwayelekile",
        "Lokwentekako uma kute lokukhetsiwe lofanelana nako",
      ),
      __try: DocStr("Zama", "Zama kusebentisa khodi lengaba nemaphutsa"),
      __catch: DocStr("Bamba", "Bamba liphutsa uma livela kukhodi"),
      __finally: DocStr(
        "Ekugcineni",
        "Lokwentekako nakanjani ekupheleni kwa try na catch",
      ),
      __class: DocStr("Luhlobo", "Kusungula luhlobo (class) lolusha wetintfo"),
      __constructor: DocStr(
        "Umakhi",
        "Umsebenti lowakha futsi ucalise intfo lensha",
      ),
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
      "KushintshaLokungashintfwa",
      "LigamaSelikhona",
      "Seluleko",
      "LuphawuLolungakalungi",
      "SichemeSesigcwele",
      "Luphawu",
      "KuphelaLokungakalindzeleki",
    ),
    main: errorMessage("LIPHUTSA", "Liphutsa lesistimu leliphakama phambili"),
    __TypeError: errorMessage(
      "LIPHUTSALOHLANGOTI",
      "Luhlobo lwedatha lolungahambisani nalomsebenti lowentiwako",
    ),
    __InitError: errorMessage(
      "LIPHUTSAKUCALA",
      "Intfo nobe xicinci ayikakalungi kahle ekucaleni kwenkhombandlela",
    ),
    __ReferenceError: errorMessage(
      "LIPHUTSALEKUTSITSA",
      "Ligama lofuna kusebentisa alikho kulesimo salokuphindvwa",
    ),
    __SyntaxError: errorMessage(
      "LIPHUTSALESIBHALO",
      "Luhlelo lwekubhala isintaksi alukalungi emitfetfweni",
    ),
    __RangeError: errorMessage(
      "LIPHUTSALELEMNGCWE",
      "Inombolo isemngceleni longakalungi waluluhla",
    ),
    __URIError: errorMessage(
      "LIPHUTSAURI",
      "I-URI ayikahleleki kahle emitsintsini",
    ),
    __EvalError: errorMessage(
      "LIPHUTSAEVAL",
      "Liphutsa emsebentini we-eval ngaphakathi",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "LIPHUTSALELINGATIWA",
      "Kuvele liphutsa lelingatiwa nhlobo lelimise sistimu",
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
      "thegi",
      "sikhiye",
      "url",
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
