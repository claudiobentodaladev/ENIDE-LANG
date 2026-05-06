import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const zulu = new Language({
  language: "zulu",
  about:
    "ENIDE iyikhompayila ehumusha evumela ukuphrogramwa nganoma iluphi ulimi",

  include: DocStr("Faka", "Kusetshenziswa ukufaka ulimi noma imitapo yolwazi"),

  commands: {
    __about: DocStr("Mayelana", "ukuthola ulwazi mayelana ne-ENIDE"),
    __help: DocStr("Usizo", "ukuthola uhlu lwemiyalo yonke etholakalayo"),
    __version: DocStr("Inguqulo", "ukuthola inguqulo yamanje ye-ENIDE"),
    __languages: DocStr(
      "Izilimi",
      "ukuthola uhlu lwezilimi zonke ezitholakalayo",
    ),
    __documentation: DocStr("Imibhalo", "ukuthola imibhalo yolimi"),
    __grammar: DocStr("Isintaksi", "ukuthola imitsetfo yolimi"),
  },

  library: {
    __standard: {
      main: DocStr("Ezingeni", "imisebenzi ejwayelekile yesistimu"),
      __isarray: DocStr("InguLuhlu", "ukuhlola uma inani lingu luhlu (array)"),
      __isobject: DocStr("InguInto", "ukuhlola uma inani lingu into (object)"),
      __typeof: DocStr("UhloboLwa", "ukuthola uhlobo lwenani"),
      __parse: DocStr("Humusha", "ukuguqula umbhalo ube uhlobo lwedatha"),
    },
    __math: {
      main: DocStr("Izibalo", "ukufinyelela imisebenzi yezibalo"),
      __pi: DocStr("PI", "ukuthola inani le-pi"),
      __sqrt: DocStr("IsiquSomz", "ukuthola isiqelo sikwele"),
      __pow: DocStr("Amandla", "ukuthola amandla enombolo"),
      __round: DocStr("Rounda", "ukuphindaphinda inombolo"),
      __random: DocStr("Okungahleliwe", "ukuthola inombolo engahleliwe"),
      __max: DocStr("Enkulu", "ukuthola inani eliphezulu"),
      __min: DocStr("Encane", "ukuthola inani eliphansi"),
      __isNumber: DocStr("InguNombolo", "ukuhlola uma inani lingenombolo"),
      __isInteger: DocStr(
        "InguNomboloYonke",
        "ukuhlola uma inani lingenombolo yonke",
      ),
      __isFloat: DocStr("InguDesimali", "ukuhlola uma inani lingedesimali"),
      __cos: DocStr("cos", "ukubala i-cosine"),
      __sin: DocStr("sin", "ukubala i-sine"),
      __tan: DocStr("tan", "ukubala i-tangent"),
    },

    __string: {
      main: DocStr("Uketanga", "ukufinyelela imisebenzi yokulungisa uketanga"),
      __length: DocStr("Ubude", "ukuthola ubude bukaketanga"),
      __toUpperCase: DocStr(
        "Upper",
        "ukuguqula uketanga waba nezinhlamvu ezinkulu",
      ),
      __toLowerCase: DocStr(
        "Lower",
        "ukuguqula uketanga waba nezinhlamvu ezincane",
      ),
      __include: DocStr("Inakho", "ukuhlola uma uketanga unombhalo othile"),
      __repeat: DocStr("Phinda", "ukuphinda uketanga izikhathi eziningi"),
    },

    __date: {
      main: DocStr("Usuku", "ukufinyelela imisebenzi yosuku nesikhathi"),
      __now: DocStr("Manje", "ukuthola isikhathi samanje"),
      __year: DocStr("Unyaka", "ukuthola unyaka"),
      __month: DocStr("Inyanga", "ukuthola inyanga"),
      __dayMonth: DocStr("UsukuLwenyanga", "ukuthola usuku lwenyanga"),
      __dayWeek: DocStr("UsukuLweviki", "ukuthola usuku lweviki"),
      __hour: DocStr("Ihora", "ukuthola ihora"),
      __minute: DocStr("Iminithi", "ukuthola iminithi"),
      __second: DocStr("Isekhendi", "ukuthola isekhendi"),
    },
  },

  types: {
    __number: DocStr("Inombolo", "ukumemezela inguquko yohlobo lwenombolo"),
    __string: DocStr("Uketanga", "ukumemezela inguquko yohlobo lukaketanga"),
    __boolean: DocStr("Bool", "ukumemezela inguquko yohlobo lwe-boolean"),
    __object: DocStr("Into", "ukumemezela into emile"),
    __void: DocStr("Lutho", "umsebenzi ongabuyi nani"),
    __array: DocStr("Uluhlu", "ukumemezela uhlu lwedatha"),
  },

  specialValues: {
    __true: DocStr("Iqiniso", "inani leqiniso"),
    __false: DocStr("Amanga", "inani lamanga"),
    __null: DocStr("Neqiwe", "inani elingenalutho"),
  },

  words: {
    __new: DocStr("Okusha", "ukudala into entsha"),
    __this: DocStr("Lokhu", "ukukhomba into yamanje"),
    __extends: DocStr("Ngeza", "ukuzuza izici kwenye iklasi"),
  },

  accessModifiers: {
    __private: DocStr("Imfihlo", "kufundwa kuphela ngaphakathi kweklasi"),
    __public: DocStr("Obala", "kufundwa yinoma ubani"),
    __protected: DocStr("Vikelwe", "kufundwa ngaphakathi nezingane"),
    __readonly: DocStr("FundaKuphela", "inani elingaguquki"),
    __static: DocStr("Insimbi", "eyeklasi hhayi eyento"),
  },

  methods: {
    method: {
      __print: DocStr("Phrinta", "ukuphrinta inani kuskrini"),
      __scan: DocStr("Funda", "ukufunda inani kusuka kumsebenzisi"),
      __return: DocStr("Buya", "ukubuya ngenani emsebenzi"),
      __break: DocStr("Nquma", "ukuphuma kuluphu"),
      __continue: DocStr("Qhubeka", "ukuya esinyathelweni esilandelayo"),
    },

    sentences: {
      __function: DocStr("Umsebenzi", "ukumemezela umsebenzi"),
      __if: DocStr("Uma", "ukumemezela isimo"),
      __else: DocStr("Okunye", "ukumemezela isimo esinye"),
      __while: DocStr("Ngenkathi", "ukumemezela uluphu lwengenkathi"),
      __for: DocStr("For", "ukumemezela uluphu lwe-for"),
      __switch: DocStr("Khetha", "ukumemezela isakhiwo sokukhetha"),
      __case: DocStr("Icala", "ukumemezela icala esakhiweni sokukhetha"),
      __default: DocStr("Okuzenzekelayo", "ukumemezela icala eliyinhloko"),
      __try: DocStr("Zama", "ukumemezela ibulokhi yokuzama"),
      __catch: DocStr("Bamba", "ukumemezela ibulokhi yokubhekana neziphutha"),
      __finally: DocStr(
        "Ekugcineni",
        "ukumemezela ibulokhi esebenza noma ngabe",
      ),
      __class: DocStr("Iklasi", "ukumemezela iklasi entsha"),
      __constructor: DocStr("Umakhi", "umsebenzi wokudala into"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Umlayezo",
      "Inani",
      "Inguquko",
      "Impahla",
      "Into",
      "Kulindeleke",
      "Kutholwe",
      "UkunikaI-Constant",
      "I-ParamithaEphindiwe",
      "Usizo",
      "IsibonakalisoEsingalungile",
      "I-StackIgcwele",
      "Isibonakaliso",
      "UkuphelaKokufundaOkungazelelwe",
    ),
    main: errorMessage("ISIPHUTHA", "Isiphutha sevamile sohlelo"),
    __TypeError: errorMessage(
      "ISIPHUTHA_SOHLOBO",
      "Uhlobo alulungile ensebenzweni",
    ),
    __InitError: errorMessage("ISIPHUTHA_SOKUQALA", "Inguquko ayizange iqalwe"),
    __ReferenceError: errorMessage(
      "ISIPHUTHA_SOKUKHOMBA",
      "Inguquko ayikho esifundeni",
    ),
    __SyntaxError: errorMessage("ISIPHUTHA_SESINTAKSI", "Ikhodi ayilungile"),
    __RangeError: errorMessage(
      "ISIPHUTHA_SOHLU",
      "Inani lingaphandle kohlu oluvunyelwe",
    ),
    __URIError: errorMessage(
      "ISIPHUTHA_SE_URI",
      "I-URI enokusilela noma engalungile",
    ),
    __EvalError: errorMessage(
      "ISIPHUTHA_SE_EVAL",
      "Isiphutha esihlobene ne-eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "ISIPHUTHA_ESINGAZIWA",
      "Isiphutha esingaziwa nhlobo",
    ),
  },

  example: {
    __array: [
      "uluhlu_lwepizza",
      "amadolobha",
      "uhlu_lwenombolo",
      "izinombolo",
      "imibala",
      "izinto",
      "abantu",
      "amahhovisi",
      "amanani",
      "izilimi",
    ],
    __boolean: [
      "isimo",
      "iyasebenza",
      "unemvume",
      "kuphelile",
      "qinisekisa",
      "ivuliwe",
      "qhubeka",
      "jika",
      "ihlolwe",
      "khansela",
    ],
    __function: [
      "tholaIgama",
      "balaInani",
      "khombisaIdatha",
      "vuselela",
      "lungisaUmbhalo",
      "hlolaIkhodi",
      "hlolaIdatha",
      "gcinaIfayela",
      "thumelaUmlayezo",
      "hlanganisaKonke",
    ],
    __number: [
      "iminyaka",
      "unyaka_wokuzalwa",
      "isilinganiso",
      "isamba",
      "intengo",
      "inkomba",
      "isikhathi",
      "ubuningi",
      "amaphuzu",
      "ihora",
    ],
    __object: [
      "umsebenzisi",
      "ikhasimende",
      "isetho",
      "impendulo",
      "inkokhelo",
      "iphrofayili",
      "ikheli",
      "idatha_yemethadatha",
      "isikhathi_seseshini",
      "into",
    ],
    __string: [
      "igama",
      "ikheli",
      "incazelo",
      "i-imeyili",
      "iphasiwedi",
      "umlayezo",
      "inombolo",
      "ukhiye",
      "i-url",
      "isixhumanisi",
    ],
    __void: [
      "hamba",
      "vala",
      "misa",
      "hlanza",
      "bulala",
      "phuma",
      "sula_ibhafa",
      "gcina_konke",
      "thumela",
      "ngena",
    ],
  },
}).grammar();
