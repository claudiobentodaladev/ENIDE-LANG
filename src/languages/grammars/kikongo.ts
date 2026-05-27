import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const kikongo = new Language({
  language: "kikongo",
  about:
    "ENIDE kele ndinga ya ke balulaka mpi ke salaka baprograme ya bandinga mingi yina ke pesaka nzila ya kusala baprograme na konso ndinga.",

  include: DocStr(
    "kuvanda ti",
    "Isadilua mu kotisa ndinga, biblioteka to struktura mu file zankaka",
  ),

  commands: {
    __about: DocStr("kiteso ya", "ku zaba makanda ya ENIDE"),
    __help: DocStr("lusadisu", "sambu na kusonga lisiti ya bantuma yonso"),
    __version: DocStr(
      "versio",
      "Sambu na kumona mutindu ya ENIDE ya ntangu yai.",
    ),
    __languages: DocStr(
      "bandinga",
      "sambu na kubaka lisiti ya bandinga yonso yina kele",
    ),
    __documentation: DocStr("Mikanda", "kumona mikanda na ndinga mosi"),
    __grammar: DocStr("gramatika", "ku zaba gramatika ya ndimi"),
  },

  library: {
    __standard: {
      main: DocStr("ya mfunu", "sambu na kuzwa bametode ya bo me sadilaka"),
      __isarray: DocStr("liste", "ku tala soki tandu i array"),
      __isobject: DocStr("kima", "sambu na kutala kana ntalu kele kima"),
      __typeof: DocStr("Mutindu", "sambu na kubaka mutindu ya ntalu mosi"),
      __parse: DocStr(
        "kubalusa",
        "Converte o valor do texto em seu valor correspondente.",
      ),
    },
    __math: {
      main: DocStr("matematiki", "sambu na kukota na bisalu ya matematike"),
      __pi: DocStr("PI", "sambu na kubaka ntalu ya pi ."),
      __sqrt: DocStr("misisa ya carré", "sambu na kubaka kisina ya ntalu mosi"),
      __pow: DocStr("Ngolo", "sambu na kubaka ngolo ya ntalu mosi ."),
      __round: DocStr("Rondre", "Kusala nimero ya nziunga"),
      __random: DocStr(
        "Kaka mpidina",
        "sambu na kubaka nimero mosi ya mpamba-mpamba",
      ),
      __max: DocStr("kuluta mingi", "sambu na kubaka ntalu ya kuluta mingi"),
      __min: DocStr("Minimum", "sambu na kubaka ntalu ya kuluta fioti"),
      __isNumber: DocStr("Quantia", "sambu na kutala kana ntalu kele nimero"),
      __isInteger: DocStr(
        "ÉInteiro", // stay
        "sambu na kutala kana ntalu mosi kele ntalu ya mvimba",
      ),
      __isFloat: DocStr(
        "desimale",
        "sambu na kutala kana ntalu mosi kele nimero mosi ya desimale",
      ),
      __cos: DocStr("Cos", "para obter o cosseno do ângulo em radianos"),
      __sin: DocStr("Sin", "sambu na kubaka sinus ya angle na radian"),
      __tan: DocStr("Tan", "sambu na kubaka tangente ya angle na radian"),
    },

    __string: {
      main: DocStr("bisono", "sambu na kukota na bisalu ya kuyidika masonama"),
      __length: DocStr("nda", "sambu na kubaka nene ya masonama"),
      __toUpperCase: DocStr(
        "masonama ya nene",
        "kubalula masonama na bisono ya nene",
      ),
      __toLowerCase: DocStr(
        "masonama ya fioti",
        "Converter o texto para minúsculas.",
      ),
      __include: DocStr(
        "kuvanda ti",
        "sambu na kutala kana masonama kele ti masonama ya fioti",
      ),
      __repeat: DocStr(
        "Kuvutuila",
        "kuvutukila ndonga ya masonama mbala mingi",
      ),
    },

    __date: {
      main: DocStr(
        "dati",
        "sambu na kukota na bisalu ya kilumbu mpi ya ntangu",
      ),
      __now: DocStr("Sesepi", "sambu na kubaka kilumbu mpi ntangu ya sesepi"),
      __year: DocStr("mvula", "sambu na kubaka mvula"),
      __month: DocStr("Ngonda", "sambu na kubaka ngonda"),
      __dayMonth: DocStr("Kilumbu ya Ngonda", "kuzwa kilumbu ya ngonda ."),
      __dayWeek: DocStr("Kilumbu ya mposo", "kuzwa kilumbu ya mposo"),
      __hour: DocStr("ntangu ya kilumbu", "sambu na kuzaba ntangu ya kilumbu"),
      __minute: DocStr("Miniti", "kuvanda na munuta"),
      __second: DocStr("Ya zole", "sambu na kubaka ya zole"),
    },
  },

  types: {
    __number: DocStr("ntalu", "kuzabisa variable ya mutindu ya nimero"),
    __string: DocStr("bisono", "kuzabisa variable ya mutindu ya masonama"),
    __boolean: DocStr("bool", "zabisa ntalu ya booléen"),
    __object: DocStr("kima", "kuzabisa kima mosi ya kukonda kusoba"),
    __void: DocStr("vide", "kuzabisa kisalu yina ke vutulaka ve ntalu"),
    __array: DocStr("liste", "Kuzabisa ngidika ya lisiti"),
  },

  specialValues: {
    __true: DocStr("kieleka", "vraie valeur logique"),
    __false: DocStr("kukusa", "fausse valeur logique"),
    __null: DocStr("mfunu ve", "absence de valeur"),
  },

  words: {
    __new: DocStr("ya_mpa", "kusala mbandu ya mpa ya nzo-nkanda"),
    __this: DocStr("yai", "sambu na kukota na kikalulu mosi ya klase yo mosi"),
    __extends: DocStr(
      "kutandula",
      "kuzabisa nde kimvuka mosi ke bakaka difwa ya kimvuka ya nkaka .",
    ),
  },

  accessModifiers: {
    __private: DocStr("ya kinsweki", "lenda kota kaka na kati ya nzo-nkanda"),
    __public: DocStr("ya bantu yonso", "nge lenda kota na konso kisika"),
    __protected: DocStr(
      "bo me tanina",
      "lenda kota kaka na kati ya nzo-nkanda",
    ),
    __readonly: DocStr("tanga kaka", "Ntalu lenda pesama kaka mbala mosi."),
    __static: DocStr("statique", "kele ya kitini kansi ya instance ve."),
  },

  methods: {
    method: {
      __print: DocStr("sonika", "sambu na kuniema ntalu na ecran"),
      __scan: DocStr(
        "kutanga",
        "sambu na kubaka valere ya muntu yina ke sadila yo",
      ),
      __return: DocStr("kuvutuka", "kuvutula ntalu ya kisalu mosi"),
      __break: DocStr("kubuka", "kanga nziunga"),
      __continue: DocStr("kulanda", "sambu na kukwenda na kisalu ya ke landa"),
    },

    sentences: {
      __function: DocStr("kisalu", "kuzabisa kisalu mosi"),
      __if: DocStr("kana", "kuzabisa kikalulu mosi"),
      __else: DocStr("kana ve", "kuzabisa kikalulu ya nkaka"),
      __while: DocStr("ntangu", "kuzabisa nzietelo mosi ntangu ."),
      __for: DocStr("na", "Kuzabisa nzila"),
      __switch: DocStr("nsola", "kuzabisa ngidika ya kupona"),
      __case: DocStr("diambu", "kuzabisa diambu mosi na kupona"),
      __default: DocStr("kifu", "ntangu ata kimbefo mosi ve me monana"),
      __try: DocStr("kumeka", "kuzabisa bloque ya kumeka"),
      __catch: DocStr("kununga ve", "Kuzabisa bloque ya kifu"),
      __finally: DocStr("nsuka", "Yo me salama, ata nsuka na yo kele inki."),
      __class: DocStr("klase", "kuzabisa kimvuka mosi"),
      __constructor: DocStr(
        "kusala",
        "estrutura que permite declarar atributos numa classe",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Nsangu",
      "Ntalu",
      "Kivanduri",
      "Kikalulu",
      "Kima",
      "Kuvila",
      "Me baka",
      "Nsobolo ya Ntandula",
      "Kiyidika ya Mbala Zole",
      "Ngibusa",
      "Kizidi ya luvunu",
      "Katuka na Kinkonzi",
      "Kizidi",
      "Nsuka ya Kukituka ya Mbasi",
    ),
    main: errorMessage("KIFU", "kifu ya lukanu ya ngidika"),
    __TypeError: errorMessage("KIFU_YA_MUTINDU", "mutindu ya luvunu na kisalu"),
    __InitError: errorMessage(
      "KIFU_YA_LUBANTIKU",
      "kivanduri yai me yantika naino ve",
    ),
    __ReferenceError: errorMessage(
      "KIFU_YA_NSIKU",
      "kivanduri, kisalu to nzo-mikanda kele ve na lukanu yai",
    ),
    __SyntaxError: errorMessage("KIFU_YA_ASONO", "kizidi ya luvunu"),
    __RangeError: errorMessage(
      "KIFU_YA_KITESO",
      "ntalu kele nganda ya kiteso ya me tendulama",
    ),
    __URIError: errorMessage("KIFU_YA_URI", "URI ya kubeba to ya luvunu"),
    __EvalError: errorMessage("KIFU_YA_EVAL", "kifu ya me tana ti eval"),
    __UNKNOWN_ERROR: errorMessage(
      "KIFU_KIKONDA_KUZABANA",
      "kifu mosi ya nzenza mpi ya kukonda kuzabana",
    ),
  },
  example: {
    __array: [
      "bima_ya_kudia",
      "bansi",
      "bima",
      "bidimbu",
      "balangi",
      "bima_ya_kuteka",
      "bansadi",
      "bikalulu",
      "bitini",
      "bandinga",
    ],
    __boolean: [
      "kikalulu",
      "kele_mbuta",
      "kele_na_kisalu",
      "keti_monana",
      "na_nsualu",
      "me_kota",
      "me_pesama_nzila",
      "me_salama",
      "me_talama",
      "me_katulwa",
    ],
    __function: [
      "bakaNkumbu",
      "bakaNtalu",
      "lisiti",
      "bakaBansangu",
      "yidikaBansangu",
      "balulaKuyantika",
      "ndundulaMukanda",
      "yidikaBima",
      "yidikaKikalulu",
      "tangaKiteso",
    ],
    __number: [
      "bamvula",
      "mvula",
      "katikati",
      "kimvuka",
      "ntalu_ya_musumba",
      "ndonga",
      "ntangu",
      "kiteso",
      "bitini",
      "ntangu_ya_kilumbu",
    ],
    __object: [
      "muntu",
      "nsadi",
      "ngidika",
      "mvutu",
      "kifutilu",
      "bansiku",
      "kikalulu_ya_muntu",
      "kisika",
      "bansangu_ya_kati",
      "kikalulu_ya_kisalu",
    ],
    __string: [
      "nkumbu",
      "muteso",
      "ntendula",
      "nsangu_ya_kizidika",
      "mpovo_ya_kinsweki",
      "nsangu",
      "kidimbu",
      "nswa",
      "nzila",
      "nkumbu_ya_fioti",
    ],
    __void: [
      "kota",
      "yantika",
      "sukula",
      "vutukila",
      "fwa",
      "basika",
      "sukulaKinsweki",
      "bumba",
      "tindaNsangu",
      "kota_na_kati",
    ],
  },
}).grammar();
