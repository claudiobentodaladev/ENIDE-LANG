import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const zulu = new Language({
  language: "zulu",
  about:
    "I-ENIDE iyikhompayila eguqulelayo evumela ukuhlelwa kwezinhlelo nganoma iluphi ulimi",

  include: DocStr(
    "Faka",
    "Kusetshenziswa ukufaka ulimi noma imitapo yolwazi eyengeziwe",
  ),

  commands: {
    __about: DocStr("Mayelana", "Ukuthola ulwazi mayelana ne-ENIDE"),
    __help: DocStr("Usizo", "Ukuthola uhlu lwemiyalo yonke etholakalayo"),
    __version: DocStr("Inguqulo", "Ukuthola inguqulo yamanje ye-ENIDE"),
    __languages: DocStr(
      "Izilimi",
      "Ukuthola uhlu lwezilimi zonke ezitholakalayo",
    ),
    __documentation: DocStr(
      "Amadokhumenti",
      "Ukuthola amadokhumenti namacebiso olimi",
    ),
    __grammar: DocStr("Isintaksi", "Ukuthola imithetho yesintaksi yolimi"),
  },

  library: {
    __standard: {
      main: DocStr("Isisekelo", "Imisebenzi ejwayelekile yesistimu"),
      __isarray: DocStr("IngoLuhlu", "Ukuhlola uma inani liluhlu (array)"),
      __isobject: DocStr("IngoInto", "Ukuhlola uma inani liyinto (object)"),
      __typeof: DocStr("UhloboLwa", "Ukuthola uhlobo lwedatha lwenani"),
      __parse: DocStr(
        "Cazulula",
        "Ukuguqula umbhalo ube uhlobo lwedatha ekwazi ukufundwa",
      ),
    },
    __math: {
      main: DocStr("Izibalo", "Ukufinyelela imisebenzi yezibalo"),
      __pi: DocStr("PI", "Ukuthola inani le-konstant PI"),
      __sqrt: DocStr(
        "IsiquSikasikwele",
        "Ukuthola isiqu sikasikwele senombolo (square root)",
      ),
      __pow: DocStr("Amandla", "Ukuthola amandla enombolo (puissance)"),
      __round: DocStr("Sondeza", "Ukusondeza inombolo kwesiseduze kakhulu"),
      __random: DocStr(
        "Ngebhaqo",
        "Ukuthola inombolo engahleliwe ngaphandle kokukhetha",
      ),
      __max: DocStr("EnkuluKakhulu", "Ukuthola inani eliphezulu kakhulu"),
      __min: DocStr("EncaneKakhulu", "Ukuthola inani eliphansi kakhulu"),
      __isNumber: DocStr("Iyinombolo", "Ukuhlola uma inani liyinombolo"),
      __isInteger: DocStr(
        "IyinomboloEhelele",
        "Ukuhlola uma inani liyinombolo ephelele (entier)",
      ),
      __isFloat: DocStr("IyiDesimali", "Ukuhlola uma inani liyidesimali"),
      __cos: DocStr("cos", "Ukubala i-cosine"),
      __sin: DocStr("sin", "Ukubala i-sine"),
      __tan: DocStr("tan", "Ukubala i-tangent"),
    },

    __string: {
      main: DocStr(
        "Umbhalo",
        "Ukufinyelela imisebenzi yokulungisa umbhalo (string)",
      ),
      __length: DocStr("Ubude", "Ukuthola ubude bombhalo"),
      __toUpperCase: DocStr(
        "Ngezinkulu",
        "Ukuguqula umbhalo ube nezinhlamvu ezinkulu",
      ),
      __toLowerCase: DocStr(
        "Ngezincane",
        "Ukuguqula umbhalo ube nezinhlamvu ezincane",
      ),
      __include: DocStr(
        "Inakho",
        "Ukuhlola uma umbhalo unemisolotshwana ethile ngezansi",
      ),
      __repeat: DocStr(
        "Phinda",
        "Ukuphinda umbhalo izikhathi eziningi ezishiwoyo",
      ),
    },

    __date: {
      main: DocStr("Usuku", "Ukufinyelela imisebenzi yosuku nesikhathi"),
      __now: DocStr("Manje", "Ukuthola usuku nesikhathi samanje sesistimu"),
      __year: DocStr("Unyaka", "Ukuthola unyaka"),
      __month: DocStr("Inyanga", "Ukuthola inyanga"),
      __dayMonth: DocStr("UsukuLwenyanga", "Ukuthola usuku lwenyanga"),
      __dayWeek: DocStr("UsukuLweviki", "Ukuthola usuku lweviki"),
      __hour: DocStr("Ihora", "Ukuthola ihora"),
      __minute: DocStr("Iminithi", "Ukuthola iminithi"),
      __second: DocStr("Isekondi", "Ukuthola isekondi"),
    },
  },

  types: {
    __number: DocStr("Inombolo", "Ukumemezela uguquko lohlobo lwenombolo"),
    __string: DocStr("Umbhalo", "Ukumemezela uguquko lohlobo lombhalo"),
    __boolean: DocStr("Ibhuli", "Ukumemezela uguquko lohlobo lwe-boolean"),
    __object: DocStr("Into", "Ukumemezela into emile engatshintshiyo (object)"),
    __void: DocStr("Ize", "Umsebenzi ongabuyisi nani emuva"),
    __array: DocStr("Uluhlu", "Ukumemezela uhlu lwedatha (array)"),
  },

  specialValues: {
    __true: DocStr("Iqiniso", "Inani leqiniso bakhona"),
    __false: DocStr("Amanga", "Inani lamanga"),
    __null: DocStr("Akunalutho", "Inani elikhombisa ukuthi akunani kule ndawo"),
  },

  words: {
    __new: DocStr("Okusha", "Ukudala into entsha (instance) yeklasi"),
    __this: DocStr("Lokhu", "Ukukhomba into yamanje ekule klasi"),
    __extends: DocStr(
      "Yandisa",
      "Ukuzuza izici namandla kwenye iklasi (inheritance)",
    ),
  },

  accessModifiers: {
    __private: DocStr(
      "Ngasese",
      "Kufundwa kuphela ngaphakathi kweklasi uqobo lwayo",
    ),
    __public: DocStr(
      "Obala",
      "Kufundwa yinoma iyiphi iklasi noma ezinye izindawo",
    ),
    __protected: DocStr(
      "Vikelwe",
      "Kufundwa ngaphakathi kweklasi kanye nezizukulwane zayo",
    ),
    __readonly: DocStr(
      "FundaKuphela",
      "Inani elingakwazi ukuguqulwa ngemva kokubhalwa",
    ),
    __static: DocStr(
      "Okumile",
      "Okungatshalwanga entweni kodwa okweklasi lonke",
    ),
  },

  methods: {
    method: {
      __print: DocStr("Bonisa", "Ukuphrinta okanye ukubonisa inani esikrinini"),
      __scan: DocStr("Funda", "Ukufunda inani elifakwe umsebenzisi"),
      __return: DocStr(
        "Buyisa",
        "Ukubuyisa inani elivela emsebenzini (function)",
      ),
      __break: DocStr("Nqamula", "Ukuphuma kuluphu (loop) ngokushesha"),
      __continue: DocStr(
        "Qhubeka",
        "Ukuya esinyathelweni esilandelayo seluphu",
      ),
    },

    sentences: {
      __function: DocStr(
        "Umsebenzi",
        "Ukumemezela umsebenzi wekhodi (function)",
      ),
      __if: DocStr("Uma", "Ukumemezela isimo sokuhlola sokuqala"),
      __else: DocStr(
        "Kungenjalo",
        "Ukumemezela isimo esizokwenzeka uma isimo sokuqala sishaye eceleni",
      ),
      __while: DocStr(
        "Ngenkathi",
        "Ukumemezela uluphu olusebenza ngenkathi isimo siyiqiniso",
      ),
      __for: DocStr("Nge", "Ukumemezela uluphu lwe-for olunokubala okuhleliwe"),
      __switch: DocStr(
        "Khetha",
        "Ukumemezela isakhiwo sokukhetha izindlela eziningi",
      ),
      __case: DocStr(
        "Isimo",
        "Ukumemezela isimo esithile esakhiweni sokukhetha",
      ),
      __default: DocStr(
        "Esimiselwe",
        "Isimo esizenzakalelayo uma ezinye izimo zingaphumelelanga",
      ),
      __try: DocStr("Zama", "Ukumemezela ibulokhi yokuzama ikhodi"),
      __catch: DocStr(
        "Bamba",
        "Ukumemezela ibulokhi yokubamba nokulungisa iziphutha",
      ),
      __finally: DocStr(
        "Ekugcineni",
        "Ukumemezela ibulokhi esebenza njalo ngemva kokuzama nokubamba",
      ),
      __class: DocStr("Iklasi", "Ukumemezela iklasi entsha"),
      __constructor: DocStr(
        "Umakhi",
        "Umsebenzi okhethekile wokwakha nokuqalisa into entsha",
      ),
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
      "UkunikaIConstant",
      "IParamithaEphindiwe",
      "Usizo",
      "IsibonakalisoEsingalungile",
      "IStackIgcwele",
      "Isibonakaliso",
      "UkuphelaKokufundaOkungazelelwe",
    ),
    main: errorMessage(
      "ISIPHUTHA",
      "Isiphutha esijwayelekile sohlelo lwesistimu",
    ),
    __TypeError: errorMessage(
      "ISIPHUTHA_SOHLOBO",
      "Uhlobo lwedatha alulungile kulo msebenzi owenzwayo",
    ),
    __InitError: errorMessage(
      "ISIPHUTHA_SOKUQALA",
      "Inguquko ayizange iqaliswe kahle ngaphambilini",
    ),
    __ReferenceError: errorMessage(
      "ISIPHUTHA_SOKUKHOMBA",
      "Inguquko okanye umbhalo okhombiwe awukho kulo mda ongenhla",
    ),
    __SyntaxError: errorMessage(
      "ISIPHUTHA_SESINTAKSI",
      "Ikhodi ayibhaliwe ngokwemithetho yesintaksi",
    ),
    __RangeError: errorMessage(
      "ISIPHUTHA_SOMDA",
      "Inani lingaphandle komda okanye uhlu oluvunyelwe",
    ),
    __URIError: errorMessage(
      "ISIPHUTHA_SE_URI",
      "I-URI enokusilela okanye engalunganga kakhulu",
    ),
    __EvalError: errorMessage(
      "ISIPHUTHA_SE_EVAL",
      "Isiphutha esihlobene nendlela yokusebenza ye-eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "ISIPHUTHA_ESINGAZIWA",
      "Isiphutha esingaziwa futhi esingabhalwanga ndawo",
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
      "iimeyili",
      "iphasiwedi",
      "umlayezo",
      "inombolo",
      "ukhiye",
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
      "sula_ibhafa",
      "gcina_konke",
      "thumela",
      "ngena",
    ],
  },
}).grammar();
