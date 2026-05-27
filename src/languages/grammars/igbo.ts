import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const igbo = new Language({
  language: "igbo",
  about:
    "ENIDE bụ ihe ntụgharị koodu nke na-enye ohere ide mmemme na mmemme n'asụsụ ọ bụla",

  include: DocStr(
    "Tinye",
    "A na-eji ya etinye asụsụ, ọba akwụkwọ ma ọ bụ ihe owuwu sitere na faịlụ ndị ọzọ",
  ),

  commands: {
    __about: DocStr("maka", "Inweta ozi gbasara ENIDE"),
    __help: DocStr("enyemaka", "Inweta ndepụta nke iwu niile dịnụ"),
    __version: DocStr("ụdị", "Inweta ụdị koodu ENIDE nke dị ugbu a"),
    __languages: DocStr("asụsụ", "Inweta ndepụta asụsụ niile dịnụ"),
    __documentation: DocStr("akwụkwọ", "Inweta akwụkwọ nkuzi maka asụsụ"),
    __grammar: DocStr("ụtọasụsụ", "Inweta usoro na ụtọasụsụ nke asụsụ"),
  },

  library: {
    __standard: {
      main: DocStr("ọkọlọtọ", "Inweta ọrụ ọkọlọtọ bara uru maka sistemụ"),
      __isarray: DocStr("BuNdepụta", "Lelee ma uru ọ bụ ndepụta (array)"),
      __isobject: DocStr("BuIhe", "Lelee ma uru ọ bụ ihe (object)"),
      __typeof: DocStr("Ụdị", "Inweta ụdị nke uru ahụ"),
      __parse: DocStr("Tụgharịa", "Tụgharịa ederede ka ọ bụrụ uru ziri ezi"),
    },
    __math: {
      main: DocStr("mgbakọ", "Inweta ọrụ mgbakọ na mwepụ"),
      __pi: DocStr("PI", "Inweta uru nke konstant PI"),
      __sqrt: DocStr("Mgbọrọgwụ", "Inweta mgbọrọgwụ square nke ọnụọgụ"),
      __pow: DocStr("Ike", "Inweta ike nke ọnụọgụ (puissance)"),
      __round: DocStr("Mechie", "Mechie ọnụọgụ ka ọ gaa n'akụkụ kacha nso"),
      __random: DocStr("Otuọbụla", "Inweta ọnụọgụ na-enweghị usoro (hasard)"),
      __max: DocStr("Kachasị", "Inweta uru kachasị elu"),
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
        "MkpụrụNnukwu",
        "Tụgharịa ederede ka ọ bụrụ nnukwu mkpụrụedemede",
      ),
      __toLowerCase: DocStr(
        "MkpụrụObere",
        "Tụgharịa ederede ka ọ bụrụ obere mkpụrụedemede",
      ),
      __include: DocStr(
        "Nwere",
        "Lelee ma eriri nwere obere ederede ọzọ n'ime ya",
      ),
      __repeat: DocStr("Megharịa", "Megharịa eriri ugboro ole doro anya"),
    },

    __date: {
      main: DocStr("ụbọchị", "Inweta ọrụ ụbọchị na oge"),
      __now: DocStr("UgbuA", "Inweta ụbọchị na oge nke ugbu a kpamkpam"),
      __year: DocStr("Afọ", "Inweta afọ"),
      __month: DocStr("Ọnwa", "Inweta ọnwa"),
      __dayMonth: DocStr("ỤbọchịỌnwa", "Inweta ụbọchị nke ọnwa"),
      __dayWeek: DocStr("ỤbọchịIzu", "Inweta ụbọchị nke izu"),
      __hour: DocStr("Elekere", "Inweta elekere"),
      __minute: DocStr("Nkeji", "Inweta nkeji"),
      __second: DocStr("Sekọnd", "Inweta sekọnd"),
    },
  },

  types: {
    __number: DocStr("ọnụọgụ", "Kwupụta mgbanwe nke ụdị ọnụọgụ"),
    __string: DocStr("eriri", "Kwupụta mgbanwe nke ụdị eriri ederede"),
    __boolean: DocStr("bool", "Kwupụta mgbanwe nke ụdị eziokwu/ụgha"),
    __object: DocStr("ihe", "Ikwupụta ihe owuwu kwụsiri ike (object)"),
    __void: DocStr("efu", "Kwupụta ọrụ na-enweghị ihe ọ bụla ọ na-eweghachi"),
    __array: DocStr("ndepụta", "Kwupụta usoro ndepụta (array)"),
  },

  specialValues: {
    __true: DocStr("Eziokwu", "Uru boolean eziokwu biani"),
    __false: DocStr("Ụgha", "Uru boolean nke na-abụghị eziokwu"),
    __null: DocStr("Ndịghị", "Uru na-egosi na ọ nweghị ihe dị n'ebe ahụ"),
  },

  words: {
    __new: DocStr("mepụta", "Mepụta ihe ọhụrụ sitere na klas"),
    __this: DocStr("nkea", "Inweta akụkụ nke klas nke onwe ya"),
    __extends: DocStr("keta", "Ikwupụta na klas na-eketa ihe site na klas ọzọ"),
  },

  accessModifiers: {
    __private: DocStr("nkeonwe", "A na-ahụ naanị n'ime klas ahụ"),
    __public: DocStr("ọha", "Enwere ike ịnweta ya na mpaghara ọ bụla"),
    __protected: DocStr(
      "chekwara",
      "Enwere ike ịnweta na klas ahụ na ụmụ klas ya",
    ),
    __readonly: DocStr(
      "gụọsọ",
      "Enwere ike ịgụ naanị agụ, uru ya anaghị agbanwe",
    ),
    __static: DocStr("kwụsiri", "Ihe metụtara klas ahụ mfe, ọ bụghị instanza"),
  },

  methods: {
    method: {
      __print: DocStr("bipụta", "Bipụta uru na ihuenyo kọmputa"),
      __scan: DocStr("gụọ", "Gụọ uru na ntinye sitere n'aka onye ọrụ"),
      __return: DocStr("weghachi", "Weghachi uru sitere na ọrụ (function)"),
      __break: DocStr("kwụsị", "Kwụsị ma pụọ na lupu (loop)"),
      __continue: DocStr("gaanihu", "Gaa n'ihu na ntụgharị lupu ọzọ"),
    },

    sentences: {
      __function: DocStr("ọrụ", "Kwupụta blọk ọrụ (function)"),
      __if: DocStr("ọbụrụ", "Kwupụta ọnọdụ nlele"),
      __else: DocStr("maọbụghị", "Kwupụta ihe a ga-eme ma ọnọdụ mbụ daa"),
      __while: DocStr("ka", "Kwupụta lupu na-agba ka ọnọdụ dị eziokwu"),
      __for: DocStr("maka", "Kwupụta lupu nwere usoro ngụkọ"),
      __switch: DocStr("nhọrọ", "Kwupụta usoro nhọrọ dị iche iche"),
      __case: DocStr("ọnọdụ", "Kwupụta otu ọnọdụ n'ime nhọrọ"),
      __default: DocStr("izugbe", "Mgbe ọnọdụ ọ bụla ọzọ emezughị"),
      __try: DocStr("nwaa", "Kwupụta blọk koodu a ga-anwale"),
      __catch: DocStr("nwụdo", "Kwupụta blọk njikwa na njide njehie"),
      __finally: DocStr(
        "nikpeazụ",
        "Koodu na-arụ ọrụ mgbe niile n'agbanyeghị ihe merenụ",
      ),
      __class: DocStr("klas", "Kwupụta ihe owuwu klas"),
      __constructor: DocStr(
        "nrụpụta",
        "Ụzọ pụrụ iche e ji asetịpụ akụkụ n'ime klas",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Ozi",
      "Uru",
      "Mgbanwe",
      "Akụkụ",
      "Ihe",
      "Atụmanya",
      "Enwetara",
      "NtinyeNaAdịgide",
      "NtinyeOkpukpuAbụọ",
      "Ndụmọdụ",
      "TokenNaAdịghịMma",
      "ỌkpụkpụNkeOkwu",
      "Token",
      "NjedebeNaAtụghịAnya",
    ),
    main: errorMessage("NJEHIE", "Njehie izugbe sitere na sistemụ"),
    __TypeError: errorMessage("NJEHIE_ỤDỊ", "Ụdị uru ejiri mee ihe adịghị mma"),
    __InitError: errorMessage(
      "NJEHIE_MMALITE",
      "Mgbanwe emebeghị mmalite nke ọma",
    ),
    __ReferenceError: errorMessage(
      "NJEHIE_NTỤAKA",
      "A hụghị mgbanwe, ọrụ ma ọ bụ ọba akwụkwọ a hụtara",
    ),
    __SyntaxError: errorMessage(
      "NJEHIE_SINTAKSI",
      "Usoro ederede koodu adịghị mma",
    ),
    __RangeError: errorMessage("NJEHIE_OKE", "Uru nọ n'èzí oke a kwadoro"),
    __URIError: errorMessage(
      "NJEHIE_URI",
      "URI nwere nsogbu ma ọ bụ adịghị mma kpamkpam",
    ),
    __EvalError: errorMessage("NJEHIE_EVAL", "Njehie metụtara usoro eval"),
    __UNKNOWN_ERROR: errorMessage(
      "NJEHIE_AMAGHỊ",
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
      "ahịa",
      "ndịọrụ",
      "ngalaba",
      "ndepụta",
      "asụsụ",
    ],
    __boolean: [
      "ọDị",
      "ọBụOkenye",
      "ọNaArụKua",
      "ọNaAhụAnya",
      "enwereIkike",
      "ọBanyere",
      "ọKwadoro",
      "ọMechara",
      "ọKwadochara",
      "ọKagburu",
    ],
    __function: [
      "nwetaAha",
      "nwetaUru",
      "depụta",
      "nwetaData",
      "hazieData",
      "tụgharịaNtinye",
      "kwadoForm",
      "meliteIhe",
      "meliteOnọdụ",
      "gbakọỌnụ",
    ],
    __number: [
      "afọ",
      "ọnụọgụ",
      "ngụkọ",
      "mkpokọta",
      "ọnụahịa",
      "ntụpọ",
      "ogologoOge",
      "ibu",
      "akara",
      "oge",
    ],
    __object: [
      "mmadụ",
      "onyeỌrụ",
      "ntọala",
      "azịza",
      "akwụŪgwọ",
      "nhazi",
      "profaịlụ",
      "adreesị",
      "metadeta",
      "nnọkọ",
    ],
    __string: [
      "aha",
      "isiokwu",
      "nkọwa",
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
      "sachapụ",
      "tọgharịa",
      "kagbuo",
      "pụọ",
      "sachapụCache",
      "chekwa",
      "zipụEmail",
      "bata",
    ],
  },
}).grammar();
