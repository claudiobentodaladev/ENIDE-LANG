import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const ndebele = new Language({
  language: "ndebele",
  about:
    "I-ENIDE iyikhompayila eguqulelayo evumela ukuhlelwa kwezinhlelo nganoma yiluphi ulimi",

  include: DocStr(
    "Fakela",
    "Kusetshenziswa ukufaka izilimi, izinqolobane okanye amamojula emithombo yakwamanye amazwe",
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
      "Ukuthola imibhalo namadokhumenti olwazi lolimi",
    ),
    __grammar: DocStr("Isintaksi", "Ukuthola imithetho yesintaksi yolimi"),
  },

  library: {
    __standard: {
      main: DocStr("Okusekelweko", "Imisebenzi eyinhloko yohlelo lwesistimu"),
      __isarray: DocStr("IngoLuhlu", "Ukuhlola ukuthi inani luluhlu (array)"),
      __isobject: DocStr("IngyInto", "Ukuhlola ukuthi inani liyinto (object)"),
      __typeof: DocStr("UhloboLwa", "Ukuthola uhlobo lwenani ledatha"),
      __parse: DocStr(
        "Cazulula",
        "Ukuguqula intambo yombhalo ibe luhlobo lwedatha olufaneleyo",
      ),
    },
    __math: {
      main: DocStr("Izibalo", "Ukufinyelela imisebenzi yezibalo"),
      __pi: DocStr("PI", "Inani le-konstante Pi elinqunyiwe"),
      __sqrt: DocStr(
        "IsiquSikaSkwele",
        "Ukuthola isiqu sika-skwele senombolo (square root)",
      ),
      __pow: DocStr("Amandla", "Ukuthola amandla enombolo (puissance)"),
      __round: DocStr(
        "Sondeza",
        "Ukusondeza inombolo iye kuleyo eseduze kakhulu",
      ),
      __random: DocStr(
        "Okungahleliwe",
        "Ukukhiqiza inombolo engahleliwe ngebhaqo",
      ),
      __max: DocStr(
        "EnkuluKakhulu",
        "Ukuthola inani elikhulu kunawa wonke aphaziweyo",
      ),
      __min: DocStr(
        "EncaneKakhulu",
        "Ukuthola inani elincane kunawa wonke aphaziweyo",
      ),
      __isNumber: DocStr("Iyinombolo", "Ukuhlola ukuthi inani liyinombolo na"),
      __isInteger: DocStr(
        "IyinomboloEpheleleyo",
        "Ukuhlola ukuthi inombolo iphelele engelasidatshana (integer)",
      ),
      __isFloat: DocStr("Iyidesimali", "Ukuhlola ukuthi inani liyidesimali"),
      __cos: DocStr("kos", "Ukuthola i-cosine"),
      __sin: DocStr("sin", "Ukuthola i-sine"),
      __tan: DocStr("tan", "Ukuthola i-tangent"),
    },

    __string: {
      main: DocStr(
        "Umbhalo",
        "Imisebenzi yokulungisa imibhalo lezintambo zamazwi (string)",
      ),
      __length: DocStr("Ubude", "Ukuthola ubude bentambo yombhalo"),
      __toUpperCase: DocStr(
        "Ngezinkulu",
        "Ukuguqula umbhalo ube ngezinhlamvu ezinkulu",
      ),
      __toLowerCase: DocStr(
        "Ngezincane",
        "Ukuguqula umbhalo ube ngezinhlamvu ezincane",
      ),
      __include: DocStr(
        "Iqukethe",
        "Ukuhlola ukuthi intambo iqukethe umbhalo othile phakathi",
      ),
      __repeat: DocStr(
        "Phinda",
        "Ukuphinda intambo yombhalo kaningi ngalezo zikhathi ezibekiweyo",
      ),
    },

    __date: {
      main: DocStr("Usuku", "Imisebenzi yosuku nesikhathi sesistimu"),
      __now: DocStr("Manje", "Ukuthola usuku nesikhathi samanje"),
      __year: DocStr("Unyaka", "Ukuthola unyaka riripo"),
      __month: DocStr("Inyanga", "Ukuthola inyanga"),
      __dayMonth: DocStr("UsukuLwenyanga", "Ukuthola usuku lwenyanga"),
      __dayWeek: DocStr("UsukuLweviki", "Ukuthola usuku lweviki"),
      __hour: DocStr("Ihora", "Ukuthola ihora"),
      __minute: DocStr("Iminithi", "Ukuthola iminithi"),
      __second: DocStr("Isekhondi", "Ukuthola isekhondi"),
    },
  },

  types: {
    __number: DocStr("Inombolo", "Ukumemezela okuguqukayo kwenombolo"),
    __string: DocStr("Umbhalo", "Ukumemezela okuguqukayo kombhalo"),
    __boolean: DocStr("Ibhuli", "Ukumemezela okuguqukayo kwe-logic (boolean)"),
    __object: DocStr("Into", "Ukumemezela into emileyo engatshintshelwayo"),
    __void: DocStr("Ize", "Umsebenzi ongabuyisi lutho lwenani emuva"),
    __array: DocStr("Uhlu", "Ukumemezela uhlu lwezinto ezilandelanayo (array)"),
  },

  specialValues: {
    __true: DocStr("Liqiniso", "Inani eliqinisileyo (true)"),
    __false: DocStr("Amanga", "Inani elingaqinisanga (false)"),
    __null: DocStr("Akulalutho", "Inani elikhombisa ukuthi akunani kule ndawo"),
  },

  words: {
    __new: DocStr("Okusha", "Ukudala into entsha (instance) evela ekilasini"),
    __this: DocStr("Lokhu", "Ukubhekisela kule nto yamanje ekuleli kilasi"),
    __extends: DocStr(
      "Inweba",
      "Ukunwebela noma ukuthatha ilifa kwelinye ikilasi (inheritance)",
    ),
  },

  accessModifiers: {
    __private: DocStr(
      "Ngasese",
      "Kufinyeleleka kuphela ngaphakathi kwaleli kilasi uqobo",
    ),
    __public: DocStr(
      "Obala",
      "Kufinyeleleka noma ngasiphi isikhundla okanye elinye ikilasi",
    ),
    __protected: DocStr(
      "Kuvikelwe",
      "Kufinyeleleka ngezizukulwane laphaya ekilasini elithathiweyo",
    ),
    __readonly: DocStr(
      "FundaKuphela",
      "Inani elingakwazi ukuguqulwa ngemva kokubhalwa kwayo",
    ),
    __static: DocStr(
      "Okumile",
      "Kungokwekilasi lonke, hhayi okwento eyodwa edaliweyo",
    ),
  },

  methods: {
    method: {
      __print: DocStr("Bonisa", "Ukubonisa okanye ukuphrinta inani kusikrini"),
      __scan: DocStr("Funda", "Ukufunda inani elivela kumsebenzisi (input)"),
      __return: DocStr(
        "Buyisa",
        "Ukubuyisa inani elivela emsebenzini (function)",
      ),
      __break: DocStr("Nqamula", "Ukuphuma uluphu (loop) ngokushesha"),
      __continue: DocStr(
        "Qhubeka",
        "Ukuya ekuphindeni okulandelayo kwesinyathelo seluphu",
      ),
    },

    sentences: {
      __function: DocStr("Umsebenzi", "Ukumemezela umsebenzi omusha wekhodi"),
      __if: DocStr("Uma", "Ukuhlola isimo sombandela wokuqala"),
      __else: DocStr(
        "Okunye",
        "Isimo esizakwenzeka uma isimo sokuqala singelona iqiniso",
      ),
      __while: DocStr(
        "Ngenkathi",
        "Uluphu olusebenza ngenkathi isimo siseqiniso",
      ),
      __for: DocStr("Nge", "Uluphu ephindwayo ngenani elinqunyiweyo lokubala"),
      __switch: DocStr(
        "Khetha",
        "Isakhiwo sokukhetha phakathi kwezimo eziningi ezahlukeneyo",
      ),
      __case: DocStr("Isimo", "Isimo esithile esilindelweyo ekukhetheni"),
      __default: DocStr(
        "Esimiselweyo",
        "Okwenziwayo ngokuzenzakalelayo uma kungekho simo esifanayo",
      ),
      __try: DocStr("Zama", "Ukuqala ukuvivinya ikhodi engaba leziphutha"),
      __catch: DocStr("Bamba", "Ukubamba nokulungisa iphutha esenzekileyo"),
      __finally: DocStr(
        "Ekugcineni",
        "Ikhodi esebenza njalo ngemva kokuzama lezokubamba",
      ),
      __class: DocStr("Ikilasi", "Ukumemezela ikilasi elitsha"),
      __constructor: DocStr(
        "Umakhi",
        "Umsebenzi okhethekileyo owakha uze uqalise into entsha",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Umlayezo",
      "Inani",
      "Okuguqukayo",
      "Impahla",
      "Into",
      "Obukulindelekile",
      "Okutholakele",
      "UkunikaIkustante",
      "IpharamithaEphindiwe",
      "Isu",
      "IthokheniEngalunganga",
      "IphuthaLeStack",
      "Ithokheni",
      "UkuphelaOkungalindelekile",
    ),
    main: errorMessage("IPHUTHA", "Iphutha esijwayelekile sohlelo lwesistimu"),
    __TypeError: errorMessage(
      "IPHUTHA_LOHLOBO",
      "Uhlobo lwedatha alufanele kulo msebenzi owenziwayo",
    ),
    __InitError: errorMessage(
      "IPHUTHA_LOKUQALA",
      "Inani lohlobo lwedatha aliqaliswanga kahle ngaphambilini",
    ),
    __ReferenceError: errorMessage(
      "IPHUTHA_LOKUKHOMBA",
      "Inani okanye umbhalo okhonjiweyo awutholakali kulo mda",
    ),
    __SyntaxError: errorMessage(
      "IPHUTHA_LESINTAKSI",
      "Isakhiwo sombhalo wekhodi asilunganga ngokwemithetho",
    ),
    __RangeError: errorMessage(
      "IPHUTHA_LOHLU",
      "Inani lingaphandle kohlu okanye umda ovunyelweyo",
    ),
    __URIError: errorMessage("IPHUTHA_URI", "I-URI ayilunganga kakhulu"),
    __EvalError: errorMessage(
      "IPHUTHA_EVAL",
      "Iphutha elivela kumsebenzi we-eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "IPHUTHA_ESINGAZIWA",
      "Iphutha elingaziwa nhlobo leli elingabhalwanga ndawo",
    ),
  },

  example: {
    __array: [
      "ukudla",
      "amazwe",
      "uhlu_lwamagama",
      "amanani",
      "imibala",
      "izinto",
      "abasebenzisi",
      "izigaba",
      "izindawo",
      "izilimi",
    ],
    __boolean: [
      "isimo",
      "iyasebenza",
      "ingasebenzisa",
      "ikulungele",
      "ivunyelwe",
      "ingenile",
      "iyahamba",
      "iqediwe",
      "iqinisekisiwe",
      "isusiwe",
    ],
    __function: [
      "tholaIgama",
      "balaInani",
      "bonisaIdatha",
      "vuselelaIphrofayili",
      "lungisaUmbhalo",
      "hlolaIkhodi",
      "hlolaOkufakwayo",
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
      "umuntu",
      "ikhasimende",
      "izilungiselelo",
      "impendulo",
      "inkokhelo",
      "ukucushwa",
      "iphrofayili",
      "ikheli",
      "idatha_engeziwe",
      "iseshini",
    ],
    __string: [
      "igama",
      "isihloko",
      "incazelo",
      "imeyili",
      "iphasiwedi",
      "umlayezo",
      "ithegi",
      "isikhiye",
      "i-url",
      "isixhumanisi",
    ],
    __void: [
      "qala",
      "susa",
      "misa",
      "hlanza",
      "bhubhisa",
      "phuma",
      "hlanza_icache",
      "gcina_konke",
      "thumela",
      "ngena",
    ],
  },
}).grammar();
