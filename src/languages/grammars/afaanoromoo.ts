import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const afaanoromoo = new Language({
  language: "afaanoromoo",
  about: "ENIDE-n tiraansipaayilerii afaan kamittuu hiikamuu dandaau dha",

  include: DocStr(
    "Hamachisu",
    "Afaan ykn kuusaalee itti dabalachuuf tajaajila",
  ),

  commands: {
    __about: DocStr("waee", "waee ENIDE argachuuf"),
    __help: DocStr("gargaarsa", "tarree ajajoota jiran hunda argachuuf"),
    __version: DocStr(
      "lakkoofsa_baasii",
      "lakkoofsa baasii ENIDE ammee argachuuf",
    ),
    __languages: DocStr("afaannota", "tarree afaannota jiran hunda argachuuf"),
    __documentation: DocStr("dokumanti", "dokumanti afaanii argachuuf"),
    __grammar: DocStr("caasaa_afaanii", "caasaa afaanii argachuuf"),
  },

  library: {
    __standard: {
      main: DocStr("sirnaa", "meeshaalee sirnaa fayyadamuuf"),
      __isarray: DocStr(
        "tarree_dha",
        "gatiin sun tarree tauu isaa mirkaneessuuf",
      ),
      __isobject: DocStr(
        "wanti_dha",
        "gatiin sun wanta tauu isaa mirkaneessuuf",
      ),
      __typeof: DocStr("gosa_isaa", "gosa gatii argachuuf"),
      __parse: DocStr(
        "Hiiki",
        "gatii barreeffama irraa gara gatii sirriitti jijjiiruuf",
      ),
    },

    __math: {
      main: DocStr("herrega", "dalagaawwan herregaa fayyadamuuf"),
      __pi: DocStr("PI", "gatii pi argachuuf"),
      __sqrt: DocStr("hidda_isquweerii", "hidda isquweerii argachuuf"),
      __pow: DocStr("aangoo", "aangoo lakkoofsaa argachuuf"),
      __round: DocStr("geengessuu", "lakkoofsa geengessuuf"),
      __random: DocStr("tasaa", "lakkoofsa tasaa argachuuf"),
      __max: DocStr("guddaa", "gatii guddaa argachuuf"),
      __min: DocStr("xiqqaa", "gatii xiqqaa argachuuf"),
      __isNumber: DocStr(
        "lakkoofsa_dha",
        "gatiin sun lakkoofsa tauu isaa mirkaneessuuf",
      ),
      __isInteger: DocStr(
        "lakkoofsa_guutuu_dha",
        "gatiin sun lakkoofsa guutuu tauu isaa mirkaneessuuf",
      ),
      __isFloat: DocStr(
        "lakkoofsa_muraa_dha",
        "gatiin sun lakkoofsa muraa tauu isaa mirkaneessuuf",
      ),
      __cos: DocStr("Cos", "koosinii koonyaa raadiyeenii argachuuf"),
      __sin: DocStr("Sin", "saayinii koonyaa raadiyeenii argachuuf"),
      __tan: DocStr("Tan", "taanjeentii koonyaa raadiyeenii argachuuf"),
    },

    __string: {
      main: DocStr("jecha", "dalagaawwan jechaa fayyadamuuf"),
      __length: DocStr("dheerina", "dheerina jechaa argachuuf"),
      __toUpperCase: DocStr("qubee_guddaa", "jecha qubee guddaatti jijjiiruuf"),
      __toLowerCase: DocStr("qubee_xiqqaa", "jecha qubee xiqqaatti jijjiiruuf"),
      __include: DocStr(
        "qabaa",
        "jecha tokko keessa jiraachuu isaa mirkaneessuuf",
      ),
      __repeat: DocStr("irra_deebistu", "jecha irra deebisuuf"),
    },

    __date: {
      main: DocStr("guyyaa", "dalagaawwan guyyaa fi yeroo fayyadamuuf"),
      __now: DocStr("Amma", "guyyaa fi yeroo ammaa argachuuf"),
      __year: DocStr("waggaa", "waggaa argachuuf"),
      __month: DocStr("jia", "jia argachuuf"),
      __dayMonth: DocStr("guyyaa_jiaa", "guyyaa jiaa argachuuf"),
      __dayWeek: DocStr("guyyaa_torbee", "guyyaa torbee argachuuf"),
      __hour: DocStr("saatii", "saatii argachuuf"),
      __minute: DocStr("daqiiqaa", "daqiiqaa argachuuf"),
      __second: DocStr("sekondii", "sekondii argachuuf"),
    },
  },

  types: {
    __number: DocStr("lakkoofsa", "jijjiiramaa gosa lakkoofsaa labsuuf"),
    __string: DocStr("jecha", "jijjiiramaa gosa jechaa labsuuf"),
    __boolean: DocStr("loojikii", "jijjiiramaa gosa loojikii labsuuf"),
    __object: DocStr("wanti", "wanta tasgabbaa ibsuuf"),
    __void: DocStr("duwwaa", "dalagaa gatii hin deebisnee labsuuf"),
    __array: DocStr("tarree", "caasaa tarree labsuuf"),
  },

  specialValues: {
    __true: DocStr("Dhugaa", "gatii loojikii dhugaa"),
    __false: DocStr("Soba", "gatii loojikii soba"),
    __null: DocStr("Dhabuu", "dhabuu gatii"),
  },

  words: {
    __new: DocStr("Uumi", "fakkii haaraa kutaa irraa uumuuf"),
    __this: DocStr("ofii", "amala kutaa keessaa argachuuf"),
    __extends: DocStr(
      "babalisa",
      "kutaan tokko kutaa biroo irraa dhaaluu isaa labsuuf",
    ),
  },

  accessModifiers: {
    __private: DocStr("dhokataa", "kutaa keessatti qofa argamuu dandaau"),
    __public: DocStr("hawaasaa", "bakka kamirraayyuu argamuu dandaau"),
    __protected: DocStr(
      "eegamaa",
      "kutaa fi kutaalee ishee keessatti argamuu dandaau",
    ),
    __readonly: DocStr(
      "dubbisaa_qofaa",
      "gatiin yeroo tokko qofa ramadamuu dandaau",
    ),
    __static: DocStr(
      "tasgabbaa",
      "kutaatti malee fakkiilee irratti hin ramadamu",
    ),
  },

  methods: {
    method: {
      __print: DocStr("maxxansi", "gatii agarsiisuuf"),
      __scan: DocStr("dubbisi", "gatii galmee irraa dubbisuuf"),
      __return: DocStr("deebisi", "dalagaa irraa gatii deebisuuf"),
      __break: DocStr("dhaabi", "naannoo irraa bahuuf"),
      __continue: DocStr("itti_fufi", "naannoo itti aanutti cehuu"),
    },

    sentences: {
      __function: DocStr("dalagaa", "dalagaa labsuuf"),
      __if: DocStr("yoo", "haala labsuuf"),
      __else: DocStr("yoo_tuu_baate", "filannoo biroo labsuuf"),
      __while: DocStr("yeroo", "naannoo yeroo labsuuf"),
      __for: DocStr("hamma", "naannoo hamma labsuuf"),
      __switch: DocStr("fili", "caasaa filannoo labsuuf"),
      __case: DocStr("haala", "caasaa filannoo keessatti haala labsuuf"),
      __default: DocStr("idilee", "haala idilee caasaa filannoo keessatti"),
      __try: DocStr("yaali", "kuta yaali labsuuf"),
      __catch: DocStr("qabi", "kuta dogoggora qabu labsuuf"),
      __finally: DocStr(
        "dhuma_irratti",
        "kuta dhuma irratti raawwatamu labsuuf",
      ),
      __class: DocStr("kutaa", "kutaa labsuuf"),
      __constructor: DocStr(
        "ijaarsa",
        "amaloota kutaa labsuuf kan dandeessisu caasaa",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Ergaa",
      "Gatii",
      "Jijjiiramaa",
      "Amala",
      "Wanta",
      "Eegame",
      "Argame",
      "Ramaddii_Dhaabbataa",
      "Madaallii_Lammaffaa",
      "Yaadachiisa",
      "Mallattoo_Sirrii_Miti",
      "Kuufama_Guutame",
      "Mallattoo",
      "Xumura_Hin_Eegamne",
    ),
    main: errorMessage("DOGOGGORA", "dogoggora sirnaa idilee"),
    __TypeError: errorMessage(
      "DOGOGGORA_GOSA",
      "gosa hin malle dalagaa keessatti",
    ),
    __InitError: errorMessage(
      "DOGOGGORA_JALQABA",
      "jijjiiramaan sun hin jalqabamne",
    ),
    __ReferenceError: errorMessage(
      "DOGOGGORA_WABI",
      "jijjiiramaan, dalagaan ykn kuusaan sun hin jiru",
    ),
    __SyntaxError: errorMessage("DOGOGGORA_SINTAASII", "koodii hin malle"),
    __RangeError: errorMessage("DOGOGGORA_DAANGAA", "gatiin sun daangaa ala"),
    __URIError: errorMessage("DOGOGGORA_URI", "URI sirrii hin taane"),
    __EvalError: errorMessage(
      "DOGOGGORA_EVAL",
      "dogoggora eval waliin wal qabate",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "DOGOGGORA_HIN_BEEKAMNE",
      "dogoggora guutumaan guututti hin beekamne",
    ),
  },

  example: {
    __array: [
      "nyaata",
      "biyyoota",
      "meeshaalee",
      "mallattoolee",
      "halluu",
      "oomishaalee",
      "fayyadamtoota",
      "sadarkaalee",
      "qabxiilee",
      "afaannota",
    ],
    __boolean: [
      "haala",
      "gurraacheDha",
      "sochiirraJira",
      "mulataDha",
      "hayyamaQaba",
      "seeneDha",
      "dandeessifameDha",
      "xumurameDha",
      "mirkanaDha",
      "haaqameDha",
    ],
    __function: [
      "maqaaFudhu",
      "gatiiBarbaadi",
      "cuqaasaHojjedhu",
      "daataaFudhu",
      "guyyaaHaqi",
      "galchiiHiiki",
      "foomiiMirkaneessi",
      "meeshaaAgarsiisi",
      "haalaHaaromsi",
      "walumaaHerregii",
    ],
    __number: [
      "umurii",
      "waggaa",
      "lakkaacha",
      "waluma",
      "gatii",
      "tilmaama",
      "yeroo",
      "baayina",
      "qabxii",
      "eeggannoo",
    ],
    __object: [
      "nama",
      "fayyadamaa",
      "qindaaina",
      "deebii",
      "kafaltii",
      "qaaqa",
      "eenyummaa",
      "teessoo",
      "odeeffannoo",
      "mariannoo",
    ],
    __string: [
      "maqaa",
      "mata_duree",
      "ibsa",
      "imeelii",
      "jecha_icciitii",
      "ergaa",
      "mallattoo_maqaa",
      "mallattoo",
      "url",
      "slug",
    ],
    __void: [
      "seeni",
      "jalqabi",
      "qulqulleessi",
      "haaromsi",
      "balleessi",
      "bahi",
      "kuufamaQulqulleessi",
      "kuufaaKeessi",
      "imeeliiErgi",
      "galmaai",
    ],
  },
}).grammar();
