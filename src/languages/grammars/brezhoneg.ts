import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const brezhoneg = new Language({
  language: "brezhoneg",
  about: "ENIDE a zo un treuzdouger a aotre programmmañ e n'eus forzh pe yezh",

  include: DocStr(
    "Enderc'hel",
    "Implijet evit enderc'hel yezhoù pe levraouegoù",
  ),

  commands: {
    __about: DocStr("diwar_benn", "evit kaout titouroù diwar-benn ENIDE"),
    __help: DocStr("skoazell", "evit kaout roll an holl urzhioù hegerz"),
    __version: DocStr("stumm", "evit kaout stumm red ENIDE"),
    __languages: DocStr("yezhoù", "evit kaout roll an holl yezhoù hegerz"),
    __documentation: DocStr(
      "teuliadur",
      "evit kaout an teuliadur evit ur yezh",
    ),
    __grammar: DocStr("yezhadur", "evit kaout ar yezhadur evit ur yezh"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "evit tizhout arc'hwelioù standard talvoudus"),
      __isarray: DocStr("UnRolEo", "evit gwiriañ m'eo ur roll"),
      __isobject: DocStr("UnTraEo", "evit gwiriañ m'eo ur tra"),
      __typeof: DocStr("Stumm", "evit kaout stumm un dalvoudenn"),
      __parse: DocStr("Parse", "evit treiñ ur chadenn d'e dalvoudenn resis"),
    },

    __math: {
      main: DocStr("matematik", "evit tizhout an arc'hwelioù matematik"),
      __pi: DocStr("PI", "evit kaout talvoudenn pi"),
      __sqrt: DocStr("Gwrizienn", "evit kaout ar wrizienn garrez"),
      __pow: DocStr("Galloud", "evit kaout galloud un niver"),
      __round: DocStr("Krennañ", "evit krennañ un niver"),
      __random: DocStr("Dre_zegouezh", "evit kaout un niver dre zegouezh"),
      __max: DocStr("Uc'hek", "evit kaout an dalvoudenn uc'hek"),
      __min: DocStr("Izek", "evit kaout an dalvoudenn izek"),
      __isNumber: DocStr("UnNiverEo", "evit gwiriañ m'eo un niver"),
      __isInteger: DocStr("UnNiverKealEo", "evit gwiriañ m'eo un niver keal"),
      __isFloat: DocStr("UnNiverDekredEo", "evit gwiriañ m'eo un niver dekred"),
      __cos: DocStr("Cos", "evit kaout kosinusoù un ugent e radiannoù"),
      __sin: DocStr("Sin", "evit kaout sinusoù un ugent e radiannoù"),
      __tan: DocStr("Tan", "evit kaout tanjantoù un ugent e radiannoù"),
    },

    __string: {
      main: DocStr("chadennoù", "evit kemmañ chadennoù testenn"),
      __length: DocStr("Hed", "evit kaout hed ar chadennoù"),
      __toUpperCase: DocStr(
        "EPennlizherennoù",
        "lakaat ar chadennoù e pennlizherennoù",
      ),
      __toLowerCase: DocStr(
        "ELizherennoùBihan",
        "lakaat ar chadennoù e lizherennoù bihan",
      ),
      __include: DocStr(
        "Endalc'hañ",
        "evit gwiriañ ma'z eus ur chadenn en ur chadenn",
      ),
      __repeat: DocStr(
        "Adober",
        "evit adober ur chadenn un niver gwech bennak",
      ),
    },

    __date: {
      main: DocStr("deiziad", "evit kemmañ deiziadoù hag eurioù"),
      __now: DocStr("Bremañ", "evit kaout an deiziad hag an eur bremañ"),
      __year: DocStr("Bloaz", "evit kaout ar bloaz"),
      __month: DocStr("Miz", "evit kaout ar miz"),
      __dayMonth: DocStr("DeizMiz", "evit kaout deiz ar miz"),
      __dayWeek: DocStr("DeizSizhun", "evit kaout deiz ar sizhun"),
      __hour: DocStr("Eur", "evit kaout an eur"),
      __minute: DocStr("Munut", "evit kaout ar munut"),
      __second: DocStr("Eilenn", "evit kaout an eilenn"),
    },
  },

  types: {
    __number: DocStr("niver", "evit diskleriañ ur variabilell niver"),
    __string: DocStr("chadenn", "evit diskleriañ ur variabilell chadenn"),
    __boolean: DocStr("booleen", "evit diskleriañ ur variabilell booleen"),
    __object: DocStr("tra", "da ziskleria ur tra statis"),
    __void: DocStr(
      "goullo",
      "evit diskleriañ un arc'hwel hep dalvoudenn distro",
    ),
    __array: DocStr("roll", "evit diskleriañ ur roll roadennoù"),
  },

  specialValues: {
    __true: DocStr("Gwir", "talvoudenn booleen gwir"),
    __false: DocStr("Gaou", "talvoudenn booleen gaou"),
    __null: DocStr("netra", "digoll dalvoudenn"),
  },

  words: {
    __new: DocStr("nevez", "evit krouiñ ur stumm nevez eus ur c'hlass"),
    __this: DocStr("hemañ", "evit tizhout attributoù e klass e unan"),
    __extends: DocStr(
      "astenn",
      "evit diskleriañ ma teu ur c'hlass eus unan all",
    ),
  },

  accessModifiers: {
    __private: DocStr("prevez", "hegerz e-barzh ar c'hlass hepken"),
    __public: DocStr("foran", "hegerz eus pep lec'h"),
    __protected: DocStr(
      "gwarezet",
      "hegerz e-barzh ar c'hlass hag e isklasaoù",
    ),
    __readonly: DocStr(
      "lenn_hepken",
      "n'haller ober gant ar stummad nemet ur wech",
    ),
    __static: DocStr("statis", "a zo eus ar c'hlass, ket eus ar stumm"),
  },

  methods: {
    method: {
      __print: DocStr("moullañ", "evit diskouez un dalvoudenn war ar skramm"),
      __scan: DocStr("lenn", "evit lenn un dalvoudenn"),
      __return: DocStr(
        "distreiñ",
        "evit distreiñ un dalvoudenn gant un arc'hwel",
      ),
      __break: DocStr("paouez", "evit kuitaat ur rodell"),
      __continue: DocStr(
        "kenderc'hel",
        "evit mont war-raok d'ar c'houlad da-heul",
      ),
    },

    sentences: {
      __function: DocStr("arc'hwel", "evit diskleriañ un arc'hwel"),
      __if: DocStr("ma", "evit diskleriañ ur reolenn"),
      __else: DocStr("a_hend_all", "evit diskleriañ ur reolenn all"),
      __while: DocStr("keit_ha", "evit diskleriañ ur rodell keit ha"),
      __for: DocStr("evit", "evit diskleriañ ur rodell evit"),
      __switch: DocStr("dibab", "evit diskleriañ ur framm dibab"),
      __case: DocStr("degouezh", "evit diskleriañ un degouezh"),
      __default: DocStr("dre_ziouer", "evit diskleriañ an degouezh dre ziouer"),
      __try: DocStr("esa", "evit diskleriañ ur bloc'had esa"),
      __catch: DocStr("tapout", "evit diskleriañ ur bloc'had manaj kludoù"),
      __finally: DocStr("er_fin", "evit ur bloc'had a vez renet d'ar fin"),
      __class: DocStr("klass", "evit diskleriañ ur c'hlass"),
      __constructor: DocStr(
        "saver",
        "framm evit diskleriañ attributoù ur c'hlass",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Kemennadenn",
      "Dalvoudenn",
      "Variabilell",
      "Attribut",
      "Tra",
      "Gortozet",
      "Resevet",
      "Stummad_Kenstroll",
      "Paramstr_Doubleget",
      "Tip",
      "Token_Direizh",
      "Gorren_Stak",
      "Token",
      "Fin_Dizouspeet",
    ),
    main: errorMessage("KLUD", "klud reizhiad hollek"),
    __TypeError: errorMessage("KLUD_STUMM", "stumm direizh en oberiadur"),
    __InitError: errorMessage(
      "KLUD_KREGIÑ",
      "n'eo ket bet kregiñ gant ar variabilell",
    ),
    __ReferenceError: errorMessage(
      "KLUD_DEVEZ",
      "variabilell, arc'hwel pe levraouegoù n'eus ket anezho er c'hasenn",
    ),
    __SyntaxError: errorMessage("KLUD_SINTAKS", "kod direizh"),
    __RangeError: errorMessage(
      "KLUD_LECH",
      "talvoudenn er-maez d'al lec'h aotreet",
    ),
    __URIError: errorMessage("KLUD_URI", "URI fallstummmet pe direizh"),
    __EvalError: errorMessage("KLUD_EVAL", "klud liammet ouzh eval"),
    __UNKNOWN_ERROR: errorMessage("KLUD_DIANAV", "klud dianav penn-da-benn"),
  },

  example: {
    __array: [
      "boued",
      "broioù",
      "traoù",
      "tags",
      "livioù",
      "produioù",
      "implijerien",
      "rummadoù",
      "poentioù",
      "yezhoù",
    ],
    __boolean: [
      "stad",
      "oadultEo",
      "oberiantEo",
      "wellerEo",
      "aotreoùBeus",
      "kevreetEo",
      "gwereketEo",
      "graetEo",
      "gwirietEo",
      "divetEo",
    ],
    __function: [
      "kaoutAnv",
      "kaoutDalvoudenn",
      "oberWarBouton",
      "kaoutRoadennoù",
      "furmañDeiziad",
      "parsañMenadenn",
      "gwiriekañFurm",
      "diskouezElvenn",
      "hizivañStad",
      "jediñKensumm",
    ],
    __number: [
      "oad",
      "bloaz",
      "niver",
      "kensumm",
      "priz",
      "index",
      "pad",
      "brasder",
      "poent",
      "timeout",
    ],
    __object: [
      "den",
      "implijer",
      "kefluniadur",
      "respont",
      "paeadur",
      "arventennoù",
      "profil",
      "chomlec'h",
      "metadata",
      "kendalc'h",
    ],
    __string: [
      "anv",
      "titl",
      "deskrivadur",
      "email",
      "ger_tremen",
      "kemennadenn",
      "tikedenn",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "kevreañ",
      "kregiñ",
      "purgañ",
      "adderaouekaat",
      "distrujañ",
      "dileziañ",
      "goullañCache",
      "enrollañDB",
      "kasoEmail",
      "enrollañDarvoud",
    ],
  },
}).grammar();
