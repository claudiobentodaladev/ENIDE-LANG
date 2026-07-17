import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const xhosa = new Language({
  language: "xhosa",
  about:
    "ENIDE lulwimi lwenkqubo oluneelwimi ezininzi olukuvumela ukuba wenze inkqubo ngalo naluphi na ulwimi",
  include: DocStr(
    "Fakela",
    "Kusetyenziswa ukufakela ulwimi okanye amathala eencwadi kwikhodi",
  ),

  commands: {
    __about: DocStr("Malunga", "ukufumana ulwazi malunga ne-ENIDE"),
    __help: DocStr("Uncedo", "ukufumana uluhlu lwemiyalelo yonke efumanekayo"),
    __version: DocStr("Inguqulelo", "ukufumana inguqulelo yangoku ye-ENIDE"),
    __languages: DocStr(
      "Iilwimi",
      "ukufumana uluhlu lweelwimi zonke ezifumanekayo",
    ),
    __documentation: DocStr(
      "Amaxwebhu",
      "ukufumana amaxwebhu acacisayo amanyathelo olwimi",
    ),
    __grammar: DocStr("Isintaksi", "ukufumana imithetho yesintaksi yolwimi"),
  },

  library: {
    __standard: {
      main: DocStr("Esisiseko", "imisebenzi eqhelekileyo yesistim"),
      __isarray: DocStr("LuluhluNa", "ukuhlola ukuba ixabiso luluhlu (array)"),
      __isobject: DocStr("YintoNa", "ukuhlola ukuba ixabiso liyinto (object)"),
      __typeof: DocStr("UhloboLwa", "ukufumana uhlobo lwenani okanye uluhlu"),
      __parse: DocStr(
        "Cazulula",
        "ukuguqula umbhalo ube luhlobo lwedatha ekwazi ukufundwa",
      ),
    },
    __math: {
      main: DocStr("Izibalo", "ukufikelela imisebenzi yezibalo"),
      __pi: DocStr("PI", "ukufumana ixabiso le-pi"),
      __sqrt: DocStr("ImpandeYesikwere", "ukufumana impande yesikwere"),
      __pow: DocStr("Amandla", "ukufumana amandla enani (puissance)"),
      __round: DocStr("Sondeza", "ukusondeza inani kwelona likufutshane"),
      __random: DocStr(
        "Ngebhaqo",
        "ukufumana inani ngebhaqo ngaphandle kokhetho",
      ),
      __max: DocStr("Ephezulu", "ukufumana ixabiso eliphezulu kakhulu"),
      __min: DocStr("Ezantsi", "ukufumana ixabiso eliphantsi kakhulu"),
      __isNumber: DocStr("YinaniNa", "ukuhlola ukuba ixabiso linani"),
      __isInteger: DocStr(
        "YinaniPheleleNa",
        "ukuhlola ukuba ixabiso linani elipheleleyo (entier)",
      ),
      __isFloat: DocStr("YiDesimaliNa", "ukuhlola ukuba ixabiso lidesimali"),
      __sin: DocStr("Sin", "ukubala i-sine"),
      __cos: DocStr("Cos", "ukubala i-cosine"),
      __tan: DocStr("Tan", "ukubala i-tangent"),
    },

    __string: {
      main: DocStr("Umbhalo", "ukufikelela imisebenzi yokulungisa umbhalo"),
      __length: DocStr("Ubude", "ukufumana ubude bombhalo"),
      __toUpperCase: DocStr(
        "Ngeenkulu",
        "ukuguqula umbhalo ube noonobumba abakhulu",
      ),
      __toLowerCase: DocStr(
        "Ngeencinci",
        "ukuguqula umbhalo ube noonobumba abancinci",
      ),
      __include: DocStr(
        "Inayo",
        "ukuhlola ukuba umbhalo unento ethile ngezantsi",
      ),
      __repeat: DocStr("Phinda", "ukuphinda umbhalo izihlandlo ezininzi"),
    },

    __date: {
      main: DocStr("Umhla", "ukufikelela imisebenzi yomhla nexesha"),
      __now: DocStr("Ngoku", "ukufumana ixesha langoku lesistim"),
      __year: DocStr("Unyaka", "ukufumana unyaka"),
      __month: DocStr("Inyanga", "ukufumana inyanga"),
      __dayMonth: DocStr("UmhlaWeNyanga", "ukufumana umhla wenyanga"),
      __dayWeek: DocStr("UmhlaWeVeki", "ukufumana umhla weveki"),
      __hour: DocStr("Iyure", "ukufumana iyure"),
      __minute: DocStr("Imizuzu", "ukufumana imizuzu"),
      __second: DocStr("Isekondi", "ukufumana isekondi"),
    },
  },

  types: {
    __number: DocStr("Inani", "ukumemezela uguquko lohlobo lwenani"),
    __string: DocStr("Umbhalo", "ukumemezela uguquko lohlobo lombhalo"),
    __boolean: DocStr("Ibhuli", "ukumemezela uguquko lohlobo lwe-boolean"),
    __object: DocStr("Into", "ukubhengeza into engatshintshiyo (object)"),
    __void: DocStr("Ize", "umsebenzi ongabuyisiyo nanye into"),
    __array: DocStr("Uluhlu", "ukumemezela uluhlu lwedatha"),
  },

  specialValues: {
    __true: DocStr("Inyaniso", "ixabiso lenyaniso"),
    __false: DocStr("Ubuxoki", "ixabiso lobuxoki"),
    __null: DocStr("AkukhoNto", "ixabiso elingenanto kwaye elize"),
  },

  words: {
    __new: DocStr("Entsha", "ukwenza into entsha (instance)"),
    __this: DocStr("Le", "ukukhomba kule nto ikhoyo ngoku"),
    __extends: DocStr(
      "Yandisa",
      "ukufumana iimpawu kwenye iklasi (inheritance)",
    ),
  },

  accessModifiers: {
    __private: DocStr("Iyimfihlo", "ifumaneka kuphela kule klasi"),
    __public: DocStr(
      "Esidlangalala",
      "ifumaneka kuye wonke ubani nezinye iiklasi",
    ),
    __protected: DocStr(
      "Ikhuselekile",
      "ifumaneka kwiiklasi ezinxulumeneyo nabantwana bazo",
    ),
    __readonly: DocStr(
      "FundaKuphela",
      "ixabiso elingakwaziyo ukutshintshwa emva kokubhalwa",
    ),
    __static: DocStr("Imileyo", "eyeklasi hayi eyento ethile eyenziweyo"),
  },

  methods: {
    method: {
      __print: DocStr("Bonisa", "ukubonisa ixabiso kwisikrini"),
      __scan: DocStr("Funda", "ukufunda ixabiso elifakwe ngumsebenzisi"),
      __return: DocStr(
        "Buyisa",
        "ukubuyisa ixabiso elivela kumsebenzi (function)",
      ),
      __break: DocStr("Nqamula", "ukuphuma kuluphu (loop) ngesiquphe"),
      __continue: DocStr("Qhubeka", "ukuya kwinyathelo elilandelayo leluphu"),
    },

    sentences: {
      __function: DocStr("Umsebenzi", "ukumemezela umsebenzi wekhodi"),
      __if: DocStr("Ukuba", "ukumemezela imeko yokuqala"),
      __else: DocStr(
        "Kungenjalo",
        "ukumemezela enye imeko ukuba eyokuqala ayenzekanga",
      ),
      __while: DocStr(
        "Ngexesha",
        "ukumemezela uluphu lwengexesha isasebenza imeko",
      ),
      __for: DocStr("Nge", "ukumemezela uluphu lwe-for olunokubala"),
      __switch: DocStr(
        "Khetha",
        "ukumemezela isakhiwo sokukhetha iindlela ezininzi",
      ),
      __case: DocStr(
        "Isimo",
        "ukumemezela isimo esithile esakhiweni sokukhetha",
      ),
      __default: DocStr(
        "Esimiselweyo",
        "ukumemezela imeko emiselweyo ukuba ezinye aziphumelelanga",
      ),
      __try: DocStr("Zama", "ukumemezela ibhloko yokuzama ikhodi"),
      __catch: DocStr(
        "Bamba",
        "ukumemezela ibhloko yokujongana neempazamo ezibambekayo",
      ),
      __finally: DocStr(
        "Ekugqibeleni",
        "ukumemezela ibhloko esebenzayo emva kokuzama nokubamba isiganeko",
      ),
      __class: DocStr("Iklasi", "ukumemezela iklasi entsha"),
      __constructor: DocStr(
        "Umakhi",
        "umsebenzi okhethekileyo wokwenza into entsha",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Umyalezo",
      "Ixabiso",
      "Uguquko",
      "Impahla",
      "Into",
      "Kulindelekile",
      "Kufunyenwe",
      "UkunikaIConstant",
      "IParamithaEphindiweyo",
      "Uncedo",
      "IsandulelaEsingekho",
      "IStackIgcwele",
      "Isimboli",
      "UkuphelaKokufunda",
    ),
    main: errorMessage("IMPAZAMO", "Impazamo eqhelekileyo yenkqubo yesistim"),
    __TypeError: errorMessage(
      "ImpazamoYohlobo",
      "Uhlobo lwedatha alulunganga kwisenzo",
    ),
    __InitError: errorMessage(
      "ImpazamoYokuqala",
      "Uguquko aluzange luqaliswe ngexesha",
    ),
    __ReferenceError: errorMessage(
      "ImpazamoYobhekiso",
      "Uguquko okanye umbhalo alukho kulo mda ungasentla",
    ),
    __SyntaxError: errorMessage(
      "ImpazamoYesintaksi",
      "Isakhiwo sekhodi asilunganga ngokwemithetho",
    ),
    __RangeError: errorMessage(
      "ImpazamoYomda",
      "Ixabiso lingaphandle komda osemthethweni",
    ),
    __URIError: errorMessage(
      "ImpazamoYeURI",
      "I-URI enempazamo okanye engalunganga kwaphela",
    ),
    __EvalError: errorMessage(
      "ImpazamoYeEval",
      "Impazamo enxulumene nomsebenzi we-eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "ImpazamoEngaziwa",
      "Impazamo engaziwayo kwaye engabhalwanga ndaweni",
    ),
  },

  example: {
    __array: [
      "uluhluLwePizza",
      "izixeko",
      "uhluLweNani",
      "amanani",
      "imibala",
      "izinto",
      "abantu",
      "iofisi",
      "amanqaku",
      "iilwimi",
    ],
    __boolean: [
      "isimo",
      "iyasebenza",
      "unemvume",
      "igqityiwe",
      "qinisekisa",
      "ivuliwe",
      "qhubeka",
      "jika",
      "ihlolwe",
      "rhoxisa",
    ],
    __function: [
      "fumanaIgama",
      "balaIxabiso",
      "bonisaIdatha",
      "vuselela",
      "lungisaUmbhalo",
      "hlolaIkhodi",
      "hlolaIdatha",
      "gcinaIfayile",
      "thumelaUmyalezo",
      "dibanisaKonke",
    ],
    __number: [
      "iminyaka",
      "unyakaWokuzalwa",
      "isilinganiso",
      "isamba",
      "ixabiso",
      "inkomba",
      "ixesha",
      "ubuninzi",
      "amanqaku",
      "iyure",
    ],
    __object: [
      "umsebenzisi",
      "ikhasimende",
      "isetho",
      "impendulo",
      "intlawulo",
      "iprofayili",
      "idilesi",
      "idathaYemetadata",
      "ixeshaLeseshoni",
      "into",
    ],
    __string: [
      "igama",
      "idilesi",
      "inkcazo",
      "iimeyili",
      "iphasiwedi",
      "umyalezo",
      "inombolo",
      "isitshixo",
      "iurl",
      "isixhumanisi",
    ],
    __void: [
      "hamba",
      "vala",
      "misa",
      "hlanza",
      "bulala",
      "phuma",
      "sulaIbhafa",
      "gcinaKonke",
      "thumela",
      "ngena",
    ],
  },
}).grammar();
