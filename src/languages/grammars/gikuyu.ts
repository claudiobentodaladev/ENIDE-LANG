import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const gikuyu = new Language({
  language: "gikuyu",
  about: "ENIDE ni transpiler yogaga ungihoorie program na rugano ruria rwose",

  include: DocStr(
    "Kwongerera",
    "ithagagirwo kwongerera ruthiomi, mabuuku kana miundo ya data kuuma faili ingine",
  ),

  commands: {
    __about: DocStr("kuhusu", "gukua uria na ENIDE"),
    __help: DocStr("uria", "gukua ruthiru rwa maathani mothe matingathanio"),
    __version: DocStr("version", "gukua version ya uguo wa ENIDE"),
    __languages: DocStr(
      "rugano",
      "gukua ruthiru rwa rugano rothe rungatihanio",
    ),
    __documentation: DocStr("ndaarimi", "gukua ndaarimi ya rugano"),
    __grammar: DocStr("sarufi", "gukua sarufi ya rugano"),
  },

  library: {
    __standard: {
      main: DocStr("kawaida", "guthamia misango ya kawaida inayosaidia"),
      __isarray: DocStr("NiOrodha", "gwathia thamani ni orodha"),
      __isobject: DocStr("NiKitu", "gwathia thamani ni kitu"),
      __typeof: DocStr("AinaYa", "gukua aina ya thamani"),
      __parse: DocStr(
        "Fasiri",
        "guthurura thamani kuuma murigo kwenda aina yake sahihi",
      ),
    },

    __math: {
      main: DocStr("hisabati", "guthamia misango ya hisabati"),
      __pi: DocStr("PI", "gukua thamani ya pi"),
      __sqrt: DocStr("MziziSquare", "gukua mzizi wa square"),
      __pow: DocStr("Nguvu", "gukua nguvu ya namba"),
      __round: DocStr("Igurana", "kuigurana namba"),
      __random: DocStr("Bahati", "gukua namba ya bahati"),
      __max: DocStr("Nene", "gukua thamani nene"),
      __min: DocStr("Nini", "gukua thamani nini"),
      __isNumber: DocStr("NiNamba", "gwathia thamani ni namba"),
      __isInteger: DocStr("NiNambaKamili", "gwathia thamani ni namba kamili"),
      __isFloat: DocStr("NiDesimali", "gwathia thamani ni desimali"),
      __cos: DocStr("Cos", "gukua cosine ya pembe kwa radiani"),
      __sin: DocStr("Sin", "gukua sine ya pembe kwa radiani"),
      __tan: DocStr("Tan", "gukua tangent ya pembe kwa radiani"),
    },

    __string: {
      main: DocStr("murigo", "guthamia misango ya murigo"),
      __length: DocStr("Urefu", "gukua urefu wa murigo"),
      __toUpperCase: DocStr(
        "KwaNeneHerufi",
        "guthurura murigo kuwa herufi nene",
      ),
      __toLowerCase: DocStr(
        "KwaNiniHerufi",
        "guthurura murigo kuwa herufi nini",
      ),
      __include: DocStr("Ina", "gwathia murigo una murigo mwingine ndani yake"),
      __repeat: DocStr("Rudia", "kurudia murigo mara nyingi"),
    },

    __date: {
      main: DocStr("muthia", "guthamia misango ya muthia na saa"),
      __now: DocStr("Sasa", "gukua muthia na saa ya sasa"),
      __year: DocStr("Mwaka", "gukua mwaka"),
      __month: DocStr("Mweri", "gukua mweri"),
      __dayMonth: DocStr("MuthiaMweri", "gukua muthia wa mweri"),
      __dayWeek: DocStr("MuthiaJuma", "gukua muthia wa juma"),
      __hour: DocStr("Saa", "gukua saa"),
      __minute: DocStr("Dakika", "gukua dakika"),
      __second: DocStr("Sekunde", "gukua sekunde"),
    },
  },

  types: {
    __number: DocStr("namba", "gutangaza kigeuzi cha aina ya namba"),
    __string: DocStr("murigo", "gutangaza kigeuzi cha aina ya murigo"),
    __boolean: DocStr("bool", "gutangaza kigeuzi cha aina ya boolean"),
    __object: DocStr("kitu", "gutangaza kitu kimara"),
    __void: DocStr("tupu", "gutangaza misango isiyorudisha thamani"),
    __array: DocStr("orodha", "gutangaza muundo wa orodha"),
  },

  specialValues: {
    __true: DocStr("Ma", "thamani ya boolean kweli"),
    __false: DocStr("Waheni", "thamani ya boolean uongo"),
    __null: DocStr("Andu", "kukosekana kwa thamani"),
  },

  words: {
    __new: DocStr("Pya", "kuunda mfano mpya wa darasa"),
    __this: DocStr("ino", "kupata sifa za darasa lake mwenyewe"),
    __extends: DocStr(
      "Endelea",
      "kutangaza darasa linalorithi kutoka darasa lingine",
    ),
  },

  accessModifiers: {
    __private: DocStr("siri", "inafikiwa ndani ya darasa tu"),
    __public: DocStr("wazi", "inafikiwa kutoka mahali popote"),
    __protected: DocStr(
      "linda",
      "inafikiwa ndani ya darasa na madarasa yake ya chini",
    ),
    __readonly: DocStr("somaKutu", "thamani inaweza kupewa mara moja tu"),
    __static: DocStr("imara", "ni ya darasa yenyewe si ya mifano"),
  },

  methods: {
    method: {
      __print: DocStr("andika", "kuandika thamani kwa skrini"),
      __scan: DocStr("soma", "kusoma thamani kwa mtumiaji"),
      __return: DocStr("rudisha", "kurudisha thamani kwa misango"),
      __break: DocStr("simama", "kutoka kwa loop"),
      __continue: DocStr("endelea", "kuruka kwenye marudio ijayo ya loop"),
    },

    sentences: {
      __function: DocStr("misango", "gutangaza misango"),
      __if: DocStr("niko", "gutangaza sharti"),
      __else: DocStr("ningine", "gutangaza sharti lingine"),
      __while: DocStr("wakati", "gutangaza loop ya wakati"),
      __for: DocStr("kwa", "gutangaza loop ya kwa"),
      __switch: DocStr("chagua", "gutangaza muundo wa chaguo"),
      __case: DocStr("kesi", "gutangaza kesi katika muundo wa chaguo"),
      __default: DocStr(
        "kawaida",
        "gutangaza kesi ya kawaida katika muundo wa chaguo",
      ),
      __try: DocStr("jaribu", "gutangaza bloku ya jaribu"),
      __catch: DocStr("kamata", "gutangaza bloku ya kukamata makosa"),
      __finally: DocStr(
        "mwishowe",
        "gutangaza bloku inayotekelezwa wakati wote",
      ),
      __class: DocStr("darasa", "gutangaza darasa"),
      __constructor: DocStr(
        "mjenzi",
        "muundo unaokuruhusu kutangaza sifa katika darasa",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Ujumbe",
      "Thamani",
      "Kigeuzi",
      "Sifa",
      "Kitu",
      "Inatarajiwa",
      "Ilipokelewa",
      "Ugawaji_Wa_Kudumu",
      "Parameta_Rudia",
      "Kidokezo",
      "Tokeni_Batili",
      "Mfumo_Umejaa",
      "Tokeni",
      "Mwisho_Wa_Ingizo_Usiotarajiwa",
    ),
    main: errorMessage("KOSA", "kosa la kawaida la sistemu"),
    __TypeError: errorMessage("KOSA_AINA", "aina si sahihi katika operesheni"),
    __InitError: errorMessage("KOSA_KUANZA", "kigeuzi hakikuanzishwa"),
    __ReferenceError: errorMessage(
      "KOSA_REJELEO",
      "kigeuzi, misango au buuku haipo katika wigo",
    ),
    __SyntaxError: errorMessage("KOSA_SINTAKSIA", "msimbo si sahihi"),
    __RangeError: errorMessage(
      "KOSA_SAFU",
      "thamani nje ya safu inayoruhusiwa",
    ),
    __URIError: errorMessage("KOSA_URI", "URI iliyopotoka au si sahihi"),
    __EvalError: errorMessage("KOSA_EVAL", "kosa linalohusiana na eval"),
    __UNKNOWN_ERROR: errorMessage(
      "KOSA_LISILOJULIKANA",
      "kosa lisilojulikana kabisa",
    ),
  },

  example: {
    __array: [
      "chakula",
      "nchi",
      "vitu",
      "lebo",
      "rangi",
      "bidhaa",
      "watumiaji",
      "makundi",
      "pointi",
      "lugha",
    ],
    __boolean: [
      "hali",
      "niMtu",
      "niHai",
      "niOnekana",
      "anaRuhusa",
      "ameingia",
      "imewezeshwa",
      "imekamilika",
      "imethibitishwa",
      "imefutwa",
    ],
    __function: [
      "pataJina",
      "pataThamani",
      "shughulikaBofya",
      "pakuaData",
      "umbaMuthia",
      "fasiriIngizo",
      "thibitishaFomu",
      "onyeshaKipande",
      "sasinaHali",
      "hesabuJumla",
    ],
    __number: [
      "umri",
      "mwaka",
      "idadi",
      "jumla",
      "bei",
      "faharasa",
      "muda",
      "wingi",
      "alama",
      "muda_wa_kusubiri",
    ],
    __object: [
      "mtu",
      "mtumiaji",
      "usanidi",
      "jibu",
      "malipo",
      "mipangilio",
      "wasifu",
      "anwani",
      "metadata",
      "kipindi",
    ],
    __string: [
      "jina",
      "kichwa",
      "maelezo",
      "barua_pepe",
      "nywila",
      "ujumbe",
      "lebo",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "ingia",
      "anzisha",
      "safisha",
      "weka_upya",
      "haribu",
      "toka",
      "futa_hifadhi",
      "hifadhi_DB",
      "tuma_barua",
      "rekodi_tukio",
    ],
  },
}).grammar();
