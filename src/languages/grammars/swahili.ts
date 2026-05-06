import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const swahili = new Language({
  language: "swahili",
  about:
    "ENIDE ni transpila inayoweza kutafsiriwa inayoruhusu programu katika lugha yoyote",

  include: DocStr(
    "Jumuisha",
    "inatumika kujumuisha lugha, maktaba au miundo ya data kutoka faili nyingine",
  ),

  commands: {
    __about: DocStr("Kuhusu", "kupata maelezo kuhusu ENIDE"),
    __help: DocStr("Msaada", "kupata orodha ya amri zote zinazopatikana"),
    __version: DocStr("Toleo", "kupata toleo la sasa la ENIDE"),
    __languages: DocStr("Lugha", "kupata orodha ya lugha zote zinazopatikana"),
    __documentation: DocStr("Nyaraka", "kupata nyaraka za lugha"),
    __grammar: DocStr("Sarufi", "kupata sarufi ya lugha"),
  },

  library: {
    __standard: {
      main: DocStr("Kawaida", "kufikia mbinu za kawaida za msaada"),
      __isarray: DocStr("NiOrodha", "kuangalia kama thamani ni orodha"),
      __isobject: DocStr("NiKitu", "kuangalia kama thamani ni kitu"),
      __typeof: DocStr("AinaYa", "kupata aina ya thamani"),
      __parse: DocStr(
        "Changanua",
        "kubadilisha thamani kutoka mfuatano hadi aina yake sahihi",
      ),
    },

    __math: {
      main: DocStr("Hisabati", "kufikia kazi za hisabati"),
      __pi: DocStr("PI", "kupata thamani ya pi"),
      __sqrt: DocStr("MziziMraba", "kupata mzizi wa mraba"),
      __pow: DocStr("Nguvu", "kupata nguvu ya nambari"),
      __round: DocStr("Karibu", "kukaribishia nambari"),
      __random: DocStr("Nasibu", "kupata nambari ya nasibu"),
      __max: DocStr("Kubwa", "kupata thamani ya juu zaidi"),
      __min: DocStr("Ndogo", "kupata thamani ya chini zaidi"),
      __isNumber: DocStr("NiNambari", "kuangalia kama thamani ni nambari"),
      __isInteger: DocStr(
        "NiNambaraKamili",
        "kuangalia kama thamani ni nambari kamili",
      ),
      __isFloat: DocStr("NiDesimali", "kuangalia kama thamani ni desimali"),
      __cos: DocStr("Cos", "kupata kosini ya pembe kwa radiani"),
      __sin: DocStr("Sin", "kupata sini ya pembe kwa radiani"),
      __tan: DocStr("Tan", "kupata tanjenti ya pembe kwa radiani"),
    },

    __string: {
      main: DocStr("Mfuatano", "kufikia kazi za uhariri wa mfuatano"),
      __length: DocStr("Urefu", "kupata urefu wa mfuatano"),
      __toUpperCase: DocStr(
        "KwaHerufiKubwa",
        "kubadilisha mfuatano kuwa herufi kubwa",
      ),
      __toLowerCase: DocStr(
        "KwaHerufiNdogo",
        "kubadilisha mfuatano kuwa herufi ndogo",
      ),
      __include: DocStr(
        "Ina",
        "kuangalia kama mfuatano una mfuatano mdogo ndani yake",
      ),
      __repeat: DocStr("Rudia", "kurudia mfuatano mara nyingi"),
    },

    __date: {
      main: DocStr("Tarehe", "kufikia kazi za tarehe na wakati"),
      __now: DocStr("Sasa", "kupata tarehe na wakati wa sasa"),
      __year: DocStr("Mwaka", "kupata mwaka"),
      __month: DocStr("Mwezi", "kupata mwezi"),
      __dayMonth: DocStr("SikuYaMwezi", "kupata siku ya mwezi"),
      __dayWeek: DocStr("SikuYaJuma", "kupata siku ya juma"),
      __hour: DocStr("Saa", "kupata saa"),
      __minute: DocStr("Dakika", "kupata dakika"),
      __second: DocStr("Sekunde", "kupata sekunde"),
    },
  },

  types: {
    __number: DocStr("Nambari", "kutangaza kigezo cha aina ya nambari"),
    __string: DocStr("Mfuatano", "kutangaza kigezo cha aina ya mfuatano"),
    __boolean: DocStr("Bool", "kutangaza kigezo cha aina ya boolean"),
    __object: DocStr("Kitu", "kutangaza kitu kisichobadilika"),
    __void: DocStr("Tupu", "kutangaza kazi isiyorudisha thamani"),
    __array: DocStr("Orodha", "kutangaza muundo wa orodha"),
  },

  specialValues: {
    __true: DocStr("Kweli", "thamani ya boolean kweli"),
    __false: DocStr("Uwongo", "thamani ya boolean uwongo"),
    __null: DocStr("Batili", "kukosekana kwa thamani"),
  },

  words: {
    __new: DocStr("Mpya", "kuunda mfano mpya wa darasa"),
    __this: DocStr("Hii", "kufikia sifa za darasa lake mwenyewe"),
    __extends: DocStr(
      "Inapanua",
      "kutangaza kwamba darasa linarithi kutoka darasa lingine",
    ),
  },

  accessModifiers: {
    __private: DocStr("Binafsi", "inafikiwa ndani ya darasa tu"),
    __public: DocStr("Wazi", "inafikiwa kutoka mahali popote"),
    __protected: DocStr(
      "Inalindwa",
      "inafikiwa ndani ya darasa na madarasa yake ya chini",
    ),
    __readonly: DocStr("SomaKutu", "thamani inaweza kupewa mara moja tu"),
    __static: DocStr("Imara", "ni ya darasa yenyewe si ya mifano"),
  },

  methods: {
    method: {
      __print: DocStr("Chapisha", "kuchapisha thamani kwenye skrini"),
      __scan: DocStr("Soma", "kusoma thamani kutoka kwa mtumiaji"),
      __return: DocStr("Rudisha", "kurudisha thamani kutoka kwa kazi"),
      __break: DocStr("Simama", "kutoka kwenye kitanzi"),
      __continue: DocStr("Endelea", "kuruka hadi marudio ijayo ya kitanzi"),
    },

    sentences: {
      __function: DocStr("Kazi", "kutangaza kazi"),
      __if: DocStr("Kama", "kutangaza sharti"),
      __else: DocStr("Sivyo", "kutangaza sharti mbadala"),
      __while: DocStr("Wakati", "kutangaza kitanzi cha wakati"),
      __for: DocStr("Kwa", "kutangaza kitanzi cha kwa"),
      __switch: DocStr("Chagua", "kutangaza muundo wa uchaguzi"),
      __case: DocStr("Kesi", "kutangaza kesi katika muundo wa uchaguzi"),
      __default: DocStr(
        "ChaguoMsingi",
        "kutangaza kesi ya chaguo-msingi katika muundo wa uchaguzi",
      ),
      __try: DocStr("Jaribu", "kutangaza bloku ya jaribu"),
      __catch: DocStr("Kamata", "kutangaza bloku ya kushughulikia makosa"),
      __finally: DocStr(
        "Mwishowe",
        "kutangaza bloku inayotekelezwa bila kujali",
      ),
      __class: DocStr("Darasa", "kutangaza darasa"),
      __constructor: DocStr(
        "Mjenzi",
        "muundo unaokuruhusu kutangaza sifa katika darasa",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Ujumbe",
      "Thamani",
      "Kigezo",
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
    main: errorMessage("KOSA", "kosa la jumla la mfumo"),
    __TypeError: errorMessage(
      "KOSA_LA_AINA",
      "aina si sahihi katika operesheni",
    ),
    __InitError: errorMessage("KOSA_LA_KUANZISHA", "kigezo hakikuanzishwa"),
    __ReferenceError: errorMessage(
      "KOSA_LA_REJELEO",
      "kigezo, kazi au maktaba haipo katika wigo",
    ),
    __SyntaxError: errorMessage("KOSA_LA_SINTAKSIA", "msimbo si sahihi"),
    __RangeError: errorMessage(
      "KOSA_LA_SAFU",
      "thamani nje ya safu inayoruhusiwa",
    ),
    __URIError: errorMessage("KOSA_LA_URI", "URI iliyopotoka au si sahihi"),
    __EvalError: errorMessage("KOSA_LA_EVAL", "kosa linalohusiana na eval"),
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
      "umbaTarehe",
      "changanauIngizo",
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
