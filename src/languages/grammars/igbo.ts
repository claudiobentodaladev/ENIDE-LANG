import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const igbo = new Language({
  language: "igbo",
  about:
    "ENIDE bụ asụsụ mmemme nwere ọtụtụ asụsụ nke na-enye gị ohere ịhazi ihe n'asụsụ ọ bụla.",
  include: DocStr(
    "Tinye",
    "A na-eji ya etinye asụsụ, ọba akwụkwọ ma ọ bụ ihe owuwu sitere na faịlụ ndị ọzọ",
  ),

  commands: {
    __about: DocStr("maka", "Inweta ozi gbasara ENIDE"),
    __help: DocStr("enyemaka", "Inweta ndepụta nke iwu niile dịnụ"),
    __version: DocStr("udi", "Inweta ụdị koodu ENIDE nke dị ugbu a"),
    __languages: DocStr("asusu", "Inweta ndepụta asụsụ niile dịnụ"),
    __documentation: DocStr("akwukwo", "Inweta akwụkwọ nkuzi maka asụsụ"),
    __grammar: DocStr("utoasusu", "Inweta usoro na ụtọasụsụ nke asụsụ"),
  },

  library: {
    __standard: {
      main: DocStr("okoloto", "Inweta ọrụ ọkọlọtọ bara uru maka sistemụ"),
      __isarray: DocStr("BuNdeputa", "Lelee ma uru ọ bụ ndepụta (array)"),
      __isobject: DocStr("BuIhe", "Lelee ma uru ọ bụ ihe (object)"),
      __typeof: DocStr("Udi", "Inweta ụdị nke uru ahụ"),
      __parse: DocStr("Tugharia", "Tụgharịa ederede ka ọ bụrụ uru ziri ezi"),
    },
    __math: {
      main: DocStr("mgbako", "Inweta ọrụ mgbakọ na mwepụ"),
      __pi: DocStr("PI", "Inweta uru nke konstant PI"),
      __sqrt: DocStr("Mgborogwu", "Inweta mgbọrọgwụ square nke ọnụọgụ"),
      __pow: DocStr("Ike", "Inweta ike nke ọnụọgụ (puissance)"),
      __round: DocStr("Mechie", "Mechie ọnụọgụ ka ọ gaa n'akụkụ kacha nso"),
      __random: DocStr("Otuobula", "Inweta ọnụọgụ na-enweghị usoro (hasard)"),
      __max: DocStr("Kachasi", "Inweta uru kachasị elu"),
      __min: DocStr("KachaNta", "Inweta uru kachasị ala"),
      __isNumber: DocStr("BuOnuogu", "Lelee ma uru ọ bụ ọnụọgụ"),
      __isInteger: DocStr(
        "BuOnuoguOkike",
        "Lelee ma uru ọ bụ ọnụọgụ siri ike (entier)",
      ),
      __isFloat: DocStr("BuDesimali", "Lelee ma uru ọ bụ desimali"),
      __cos: DocStr("Cos", "Inweta cosinus nke nkụchi"),
      __sin: DocStr("Sin", "Inweta sinus nke nkụchi"),
      __tan: DocStr("Tan", "Inweta tangenta nke nkụchi"),
    },

    __string: {
      main: DocStr("eriri", "Inweta ọrụ ntụgharị ederede na eriri"),
      __length: DocStr("Ogologo", "Inweta ogologo nke eriri ederede"),
      __toUpperCase: DocStr(
        "MkpuruNnukwu",
        "Tụgharịa ederede ka ọ bụrụ nnukwu mkpụrụedemede",
      ),
      __toLowerCase: DocStr(
        "MkpuruObere",
        "Tụgharịa ederede ka ọ bụrụ obere mkpụrụedemede",
      ),
      __include: DocStr(
        "Nwere",
        "Lelee ma eriri nwere obere ederede ọzọ n'ime ya",
      ),
      __repeat: DocStr("Megharia", "Megharịa eriri ugboro ole doro anya"),
    },

    __date: {
      main: DocStr("ubochi", "Inweta ọrụ ụbọchị na oge"),
      __now: DocStr("UgbuA", "Inweta ụbọchị na oge nke ugbu a kpamkpam"),
      __year: DocStr("Afo", "Inweta afọ"),
      __month: DocStr("Onwa", "Inweta ọnwa"),
      __dayMonth: DocStr("UbochiOnwa", "Inweta ụbọchị nke ọnwa"),
      __dayWeek: DocStr("UbochiIzu", "Inweta ụbọchị nke izu"),
      __hour: DocStr("Elekere", "Inweta elekere"),
      __minute: DocStr("Nkeji", "Inweta nkeji"),
      __second: DocStr("Sekond", "Inweta sekọnd"),
    },
  },

  types: {
    __number: DocStr("onuogu", "Kwupụta mgbanwe nke ụdị ọnụọgụ"),
    __string: DocStr("eriri", "Kwupụta mgbanwe nke ụdị eriri ederede"),
    __boolean: DocStr("bool", "Kwupụta mgbanwe nke ụdị eziokwu/ụgha"),
    __object: DocStr("ihe", "Ikwupụta ihe owuwu kwụsiri ike (object)"),
    __void: DocStr("efu", "Kwupụta ọrụ na-enweghị ihe ọ bụla ọ na-eweghachi"),
    __array: DocStr("ndeputa", "Kwupụta usoro ndepụta (array)"),
  },

  specialValues: {
    __true: DocStr("Eziokwu", "Uru boolean eziokwu biani"),
    __false: DocStr("Ugha", "Uru boolean nke na-abụghị eziokwu"),
    __null: DocStr("Ndighi", "Uru na-egosi na ọ nweghị ihe dị n'ebe ahụ"),
  },

  words: {
    __new: DocStr("meputa", "Mepụta ihe ọhụrụ sitere na klas"),
    __this: DocStr("nkea", "Inweta akụkụ nke klas nke onwe ya"),
    __extends: DocStr("keta", "Ikwupụta na klas na-eketa ihe site na klas ọzọ"),
  },

  accessModifiers: {
    __private: DocStr("nkeonwe", "A na-ahụ naanị n'ime klas ahụ"),
    __public: DocStr("oha", "Enwere ike ịnweta ya na mpaghara ọ bụla"),
    __protected: DocStr(
      "chekwara",
      "Enwere ike ịnweta na klas ahụ na ụmụ klas ya",
    ),
    __readonly: DocStr(
      "guoso",
      "Enwere ike ịgụ naanị agụ, uru ya anaghị agbanwe",
    ),
    __static: DocStr("kwusiri", "Ihe metụtara klas ahụ mfe, ọ bụghị instanza"),
  },

  methods: {
    method: {
      __print: DocStr("biputa", "Bipụta uru na ihuenyo kọmputa"),
      __scan: DocStr("guo", "Gụọ uru na ntinye sitere n'aka onye ọrụ"),
      __return: DocStr("weghachi", "Weghachi uru sitere na ọrụ (function)"),
      __break: DocStr("kwusi", "Kwụsị ma pụọ na lupu (loop)"),
      __continue: DocStr("gaanihu", "Gaa n'ihu na ntụgharị lupu ọzọ"),
    },

    sentences: {
      __function: DocStr("oru", "Kwupụta blọk ọrụ (function)"),
      __if: DocStr("oburu", "Kwupụta ọnọdụ nlele"),
      __else: DocStr("maobughi", "Kwupụta ihe a ga-eme ma ọnọdụ mbụ daa"),
      __while: DocStr("ka", "Kwupụta lupu na-agba ka ọnọdụ dị eziokwu"),
      __for: DocStr("maka", "Kwupụta lupu nwere usoro ngụkọ"),
      __switch: DocStr("nhoro", "Kwupụta usoro nhọrọ dị iche iche"),
      __case: DocStr("onodu", "Kwupụta otu ọnọdụ n'ime nhọrọ"),
      __default: DocStr("izugbe", "Mgbe ọnọdụ ọ bụla ọzọ emezughị"),
      __try: DocStr("nwaa", "Kwupụta blọk koodu a ga-anwale"),
      __catch: DocStr("nwudo", "Kwupụta blọk njikwa na njide njehie"),
      __finally: DocStr(
        "nikpeazu",
        "Koodu na-arụ ọrụ mgbe niile n'agbanyeghị ihe merenụ",
      ),
      __class: DocStr("klas", "Kwupụta ihe owuwu klas"),
      __constructor: DocStr(
        "nruputa",
        "Ụzọ pụrụ iche e ji asetịpụ akụkụ n'ime klas",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Ozi",
      "Uru",
      "Mgbanwe",
      "Akuku",
      "Ihe",
      "Atumanya",
      "Enwetara",
      "NtinyeNaAdigide",
      "NtinyeOkpukpuAbuo",
      "Ndumodu",
      "TokenNaAdighiMma",
      "OkpukpuNkeOkwu",
      "Token",
      "NjedebeNaAtughiAnya",
    ),
    main: errorMessage("NJEHIE", "Njehie izugbe sitere na sistemụ"),
    __TypeError: errorMessage("NJEHIEUDI", "Ụdị uru ejiri mee ihe adịghị mma"),
    __InitError: errorMessage(
      "NJEHIEMMALITE",
      "Mgbanwe emebeghị mmalite nke ọma",
    ),
    __ReferenceError: errorMessage(
      "NJEHIENTUAKA",
      "A hụghị mgbanwe, ọrụ ma ọ bụ ọba akwụkwọ a hụtara",
    ),
    __SyntaxError: errorMessage(
      "NJEHIESINTAKSI",
      "Usoro ederede koodu adịghị mma",
    ),
    __RangeError: errorMessage("NJEHIEOKE", "Uru nọ n'èzí oke a kwadoro"),
    __URIError: errorMessage(
      "NJEHIEURI",
      "URI nwere nsogbu ma ọ bụ adịghị mma kpamkpam",
    ),
    __EvalError: errorMessage("NJEHIEEVAL", "Njehie metụtara usoro eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NJEHIEAMAGHI",
      "Njehie a na-amaghị ebe ọ sitere kpamkpam",
    ),
  },

  example: {
    __array: [
      "nri",
      "obodo",
      "ihe",
      "akara",
      "agba",
      "ahia",
      "ndioru",
      "ngalaba",
      "ndeputa",
      "asusu",
    ],
    __boolean: [
      "odi",
      "obuOkenye",
      "naAruKua",
      "naAhuAnya",
      "enwereIkike",
      "obanyere",
      "okwadoro",
      "omechara",
      "okwadochara",
      "okagburu",
    ],
    __function: [
      "nwetaAha",
      "nwetaUru",
      "deputa",
      "nwetaData",
      "hazieData",
      "tughariaNtinye",
      "kwadoForm",
      "meliteIhe",
      "meliteOnodu",
      "gbakoOnu",
    ],
    __number: [
      "afo",
      "onuogu",
      "nguko",
      "mkpokota",
      "onuahia",
      "ntupo",
      "ogologoOge",
      "ibu",
      "akara",
      "oge",
    ],
    __object: [
      "mmadu",
      "onyeOru",
      "ntala",
      "aziza",
      "akwuUgwo",
      "nhazi",
      "profailu",
      "adreesi",
      "metadeta",
      "nnoko",
    ],
    __string: [
      "aha",
      "isiokwu",
      "nkowa",
      "email",
      "okwumbanye",
      "ozi",
      "akara",
      "token",
      "url",
      "eriri",
    ],
    __void: [
      "banye",
      "malite",
      "sachapu",
      "togharia",
      "kagbuo",
      "puo",
      "sachapuCache",
      "chekwa",
      "zipuEmail",
      "bata",
    ],
  },
}).grammar();
