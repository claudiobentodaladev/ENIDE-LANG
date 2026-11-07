import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabels } from "../utils/stucture.grammar.js";

export const zulu = new Language({
  language: "zulu",
  about:
    "I-ENIDE uwulimi lohlelo lwekhompyutha olunezilimi eziningi olukuvumela ukuthi ubhale izinhlelo nganoma yiluphi ulimi",
  include: DocStr(
    "Faka",
    "Isetshenziselwa ukufaka ulimi, umtapo wolwazi, noma amamojula angaphandle ohlelweni",
  ),

  commands: {
    __about: DocStr("Mayelana", "ukuthola ulwazi mayelana ne-ENIDE"),
    __help: DocStr("Usizo", "ukukhombisa yonke imiyalelo etholakalayo"),
    __version: DocStr("Inguqulo", "ukukhombisa inguqulo yamanje ye-ENIDE"),
    __languages: DocStr("Izilimi", "ukukhombisa uhlu lwezilimi ezisekelwayo"),
    __documentation: DocStr(
      "Imibhalo",
      "ukukhombisa imibhalo yesiqondiso solimi",
    ),
    __grammar: DocStr("Ulimi", "imithetho yokwakheka kolimi"),
  },

  library: {
    __standard: {
      main: DocStr("Okuyinhloko", "imisebenzi eyinhloko yesistimu"),
      __isarray: DocStr("Kuyiluhlu", "ukuhlola ukuthi inani liyiluhlu yini"),
      __isobject: DocStr("Kuyinto", "ukuhlola ukuthi inani liyinto yini"),
      __typeof: DocStr("UhloboLwento", "ukuthola uhlobo lwedatha"),
      __parse: DocStr(
        "Hlaziya",
        "ukuguqula umbhalo ube idatha eqondakala kusistimu",
      ),
    },
    __math: {
      main: DocStr("Izibalo", "imisebenzi yezibalo"),
      __pi: DocStr("PI", "inani le-Pi"),
      __sqrt: DocStr("Impande", "impande yesikwele yenani"),
      __pow: DocStr("Amandla", "ukuphakamisa inani ngamandla athile"),
      __round: DocStr("Sondeza", "ukusondeza inani enanini eliseduze"),
      __random: DocStr("Okungahleliwe", "ukwenza inani elingahleliwe"),
      __max: DocStr("Okukhulu", "ukuthola inani elikhulu kunawo wonke"),
      __min: DocStr("Okuncane", "ukuthola inani elincane kunawo wonke"),
      __isNumber: DocStr(
        "Kuyinombolo",
        "ukuhlola ukuthi inani liyinombolo yini",
      ),
      __isInteger: DocStr(
        "KuyinomboloEphelele",
        "ukuhlola ukuthi inani liyinombolo ephelele",
      ),
      __isFloat: DocStr(
        "KuyinomboloYamadijithi",
        "ukuhlola ukuthi inani linamadigit yini",
      ),
      __cos: DocStr("Cos", "ukuthola i-cosine"),
      __sin: DocStr("Sin", "ukuthola i-sine"),
      __tan: DocStr("Tan", "ukuthola i-tangent"),
    },

    __string: {
      main: DocStr("Umbhalo", "imisebenzi yokusebenza ngombhalo"),
      __length: DocStr("Ubude", "ukuthola ubude bombhalo"),
      __toUpperCase: DocStr(
        "OkwamagamaAmakhulu",
        "ukuguqula umbhalo ube amagama amakhulu",
      ),
      __toLowerCase: DocStr(
        "OkwamagamaAmancane",
        "ukuguqula umbhalo ube amagama amancane",
      ),
      __include: DocStr(
        "Kuqukethe",
        "ukuhlola ukuthi umbhalo uqukethe amagama athile",
      ),
      __repeat: DocStr("Phinda", "ukuphinda umbhalo izikhathi eziningi"),
    },

    __date: {
      main: DocStr("Usuku", "imisebenzi yezinsuku nesikhathi"),
      __now: DocStr("Manje", "usuku nesikhathi samanje"),
      __year: DocStr("Unyaka", "ukuthola unyaka"),
      __month: DocStr("Inyanga", "ukuthola inyanga"),
      __dayMonth: DocStr("UsukuLwenyanga", "ukuthola usuku lwenyanga"),
      __dayWeek: DocStr("UsukuLwesonto", "ukuthola usuku lwesonto"),
      __hour: DocStr("Ihora", "ukuthola ihora"),
      __minute: DocStr("Umzuzu", "ukuthola umzuzu"),
      __second: DocStr("Umzuzwana", "ukuthola umzuzwana"),
      __milliseconds: DocStr("UmzuzwanaOmncane", "ukuthola umzuzwana omncane"),
    },

    __array: {
      main: DocStr("Uhlu", "imisebenzi yokusebenza ngohlu"),
      __addStart: DocStr(
        "FakaEkuqaleni",
        "Kufaka into entsha ekuqaleni kohlu futhi kubuyise ubude obusha.",
      ),
      __addEnd: DocStr("FakaEkugcineni", "Kufaka into entsha ekugcineni kohlu"),
      __join: DocStr(
        "Hlanganisa",
        "Kuhlanganisa zonke izinto zohlu zibe umbhalo owodwa.",
      ),
      __length: DocStr("UbudeLohlu", "Ukuthola noma ukubeka ubude lohlu"),
    },

    __time: {
      main: DocStr(
        "Isikhathi",
        "imisebenzi yesikhathi yokulawula ukusebenza kwekhodi",
      ),
      __timeOut: DocStr(
        "IsikhathiEsiphelile",
        "Ukuqala umsebenzi ngemuva kwesikhathi esimisiwe",
      ),
      __timeInterval: DocStr(
        "IsikhathiEsiphindaphindwayo",
        "Ukuqala umsebenzi ngezikhathi ezithile",
      ),
    },
  },

  types: {
    __number: DocStr("Inombolo", "uchaza uguquko lohlobo lwenombolo"),
    __string: DocStr("Umbhalo", "uchaza uguquko lohlobo lombhalo"),
    __boolean: DocStr(
      "IqinisoAmanga",
      "uchaza uguquko lohlobo lweqiniso/amanga",
    ),
    __object: DocStr("Into", "uchaza into engashintshiyo"),
    __void: DocStr("Okungenalutho", "umsebenzi ongenalutho olubuyiswayo"),
    __array: DocStr("Uhlu", "uchaza uhlu lwezinto"),
  },

  specialValues: {
    __true: DocStr("Iqiniso", "inani leqiniso"),
    __false: DocStr("Amanga", "inani lamanga"),
    __null: DocStr("Lutho", "ukushoda kwenani"),
  },

  words: {
    __new: DocStr("Okusha", "ukwakha into entsha kusuka ekilasini"),
    __this: DocStr("Lokhu", "ukubhekisela entweni yamanje"),
    __extends: DocStr("Nweba", "ukuthatha ifa kusuka kwesinye ikilasi"),
  },

  accessModifiers: {
    __private: DocStr(
      "Okuyimfihlo",
      "kuyabonakala ngaphakathi kwelikilasi kuphela",
    ),
    __public: DocStr("Okusesidlangalaleni", "kuyabonakala kuyo yonke indawo"),
    __protected: DocStr(
      "Okubikelwe",
      "kuyabonakala ngaphakathi kwelikilasi nakwizingane zalo",
    ),
    __readonly: DocStr(
      "UkufundaKuphela",
      "inani alikwazi ukuguqulwa ngemuva kokubhalwa",
    ),
    __static: DocStr("Okunganyakazi", "okwekilasi uqobo, hhayi entweni eyodwa"),
  },

  methods: {
    method: {
      __print: DocStr("Phrinta", "ukukhombisa inani esikrinini"),
      __clear: DocStr("Sula", "ukusula isikrini"),
      __scan: DocStr("Funda", "ukufunda inani kumsebenzisi"),
      __return: DocStr("Buyisa", "ukubuyisa inani emsebenzini"),
      __break: DocStr("Nquma", "ukuphula ilophu"),
      __continue: DocStr("Qhubeka", "ukuqhubeka nenqubo elandelayo yelophu"),
    },

    sentences: {
      __function: DocStr("Umsebenzi", "ukwakha umsebenzi"),
      __if: DocStr("Uma", "ukwenza isimo"),
      __else: DocStr(
        "NgaphandleKwalokho",
        "isimo esinye uma esokuqala singelona iqiniso",
      ),
      __while: DocStr("Ngesikhathi", "ilophu eqhubeka uma isimo siyiqiniso"),
      __for: DocStr("Okwe", "ilophu enenani elimisiwe"),
      __switch: DocStr("Shintsha", "ukukhetha phakathi kwezinketho eziningi"),
      __case: DocStr("IsimoEsithile", "isimo esisodwa phakathi kwezinketho"),
      __default: DocStr(
        "Okuzenzakalelayo",
        "uma kungekho simo esihlangabezene nakho",
      ),
      __try: DocStr("Zama", "ukuzama ukuqhuba ikhodi"),
      __catch: DocStr("Bamba", "ukubamba amaphutha"),
      __finally: DocStr("Ekugcineni", "ikhodi eqhuba noma ngabe kunjani"),
      __class: DocStr("Ikilasi", "ukwakha ikilasi elisha"),
      __constructor: DocStr("Umakhi", "umsebenzi wokwakha into yelikilasi"),
    },
  },
  errors: {
    __labels: errorLabels({
      message: "Umlayezo",
      value: "Inani",
      variable: "Uguquko",
      property: "Impahla",
      object: "Into",
      expected: "Okulindelwe",
      received: "Okutholakele",
      constAssignment: "Ukuhlinzekwa kwe-Constant",
      duplicateParam: "Ipharamitha Ephindiwe",
      hint: "Ithiphu",
      invalidToken: "Uphawu Olungasebenzi",
      stackOverflow: "Isitaki Siphelile",
      token: "Uphawu",
      unexpectedEnd: "Ukuphela okungalindelekile",
      file: "ifayela",
      didYouMean: "bewusho ukuthi",
      includedFrom: "kufakwe kusuka ku",
      size: "usayizi",
      index: "inkomba",
      path: "indlela",
      available: "kuyatholakala",
      element: "into",
      hintMissingEquals: 'kushoda u "=" phakathi kwegama nenani',
      hintMissingSemicolon: 'kushoda u ";" ngaphambi kwalesi siyalezo',
      hintUnclosedBlock: 'u "{" ovulwe kulayini {line} akavaliwe ngo "}"',
      hintUnclosedBracket: 'u "[" ovulwe kulayini {line} akavaliwe ngo "]"',
      hintUnclosedComment:
        "ukuphawula okuvulwe kulayini {line} akavaliwe ngo */",
      hintUnclosedString: "umbhalo ovulwe kulayini {line} awuvaliwe kahle",
      hintModuleNotFound: 'imodula ayitholakali; isesandleni "{path}"',
      hintLibraryUnknown: "umtapo wolwazi awaziwa; okutholakalayo: {list}",
      hintIndexRange: "uhlu lunusayizi {size}; inkomba evumelekile: {range}",
      hintIndexEmpty: "uhlu alunalutho, ngakho alunenkomba evumelekile",
      hintNotArray: "inani akulona uhlu",
      hintNull: "akunani elinikeziwe (null noma undefined)",
      hintNaN: "inombolo ayilona iqiniso (NaN)",
      hintInfinite: "inombolo ayinamkhawulo",
      hintNoInput: "uhlelo lucele okokufaka kodwa kwaphela",
      hintInternal:
        "lokhu kubonakala kuyiphutha langaphakathi le-ENIDE, hhayi iphutha kuhlelo lwakho; sicela ubike",
      hintDuplicateProperty:
        'impahla "{name}" ibhalwe izikhathi ezingaphezu kweyodwa',
      hintMissingProperty: 'impahla "{name}" ayikho',
      hintArrayMixed: "uhlu alukwazi ukuxuba uhlu namani alula",
      hintArrayEmpty: "uhlu ludinga okungenani inani elilodwa",
      hintObjectArrayShape:
        'into {index} ayifani nento yokuqala: bheka impahla "{name}"',
      hintLoopCounter: "ikhawunta yelophu kumelwe ibe yinombolo",
      hintErrorsFound: "kutholakale amaphutha angu-{count}",
    }),
    main: errorMessage("IPHUTHA", "iphutha lesistimu"),
    __TypeError: errorMessage(
      "IPHUTHA_LOHLOBO",
      "uhlobo olungalungile emsebenzini",
    ),
    __InitError: errorMessage("IPHUTHA_LOKUQALA", "uguquko aluzange luqalwe"),
    __ReferenceError: errorMessage(
      "IPHUTHA_LOKUKHOMBA",
      "uguquko, umsebenzi noma umtapo wolwazi awukho",
    ),
    __SyntaxError: errorMessage("IPHUTHA_LOKWAKHEKA", "ikhodi engalungile"),
    __RangeError: errorMessage(
      "IPHUTHA_LOLWESIKHALA",
      "inani lingaphandle kwesikhala esivunyelwe",
    ),
    __URIError: errorMessage("IPHUTHA_LE_URI", "i-URI yonakele noma ayilungile"),
    __EvalError: errorMessage("IPHUTHA_LE_EVAL", "iphutha elihlobene ne-eval"),
    __UNKNOWN_ERROR: errorMessage(
      "IPHUTHA_ELINGAZIWAYO",
      "iphutha elingaziwa nhlobo",
    ),
  },
  example: {
    __array: [
      "ukudla",
      "izwe",
      "amagama",
      "izinombolo",
      "izinhlamvu",
      "izinto",
      "abasebenzisi",
      "isigaba",
      "amaphuzu",
      "zilimi",
    ],
    __boolean: [
      "esimo",
      "siyasebenza",
      "kuyavunyelwa",
      "kuqedile",
      "imvume",
      "ku-inthanethi",
      "kuseendleleni",
      "kwenziwe",
      "kuhloliwe",
      "kucinywe",
    ],
    __function: [
      "thathaIgama",
      "fundaInani",
      "khombisaIdatha",
      "lungisaIphrofayela",
      "dalaUmbhalo",
      "hlolaIkhodi",
      "bhekaIdatha",
      "gcinaIfayela",
      "thumelaUmlayezo",
      "hlanganisaKonke",
    ],
    __number: [
      "ubudala",
      "unyakaWokuzalwa",
      "isilinganiso",
      "konke",
      "intengo",
      "inkomba",
      "isikhathi",
      "inani",
      "uphawu",
      "ihora",
    ],
    __object: [
      "umuntu",
      "umakhasimende",
      "izinhlelo",
      "impendulo",
      "inkokhelo",
      "izilungiselelo",
      "iphrofayela",
      "ikheli",
      "imininingwane",
      "isikhathiSokusebenza",
    ],
    __string: [
      "igama",
      "isihloko",
      "incazelo",
      "incwadi",
      "iphasiwedi",
      "umyalezo",
      "uphawu",
      "ukhiye",
      "i-url",
      "isixhumanisi",
    ],
    __void: [
      "gijima",
      "cima",
      "yima",
      "hlanza",
      "bhubhisa",
      "phuma",
      "sulaIsikhumbuzo",
      "gcinaKonke",
      "thumela",
      "ngena",
    ],
  },
}).grammar();
