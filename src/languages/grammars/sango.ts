import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const sango = new Language({
  language: "sango",
  about:
    "ENIDE ayeke yanga-ti-koli ti gingo bê ti ordinateur ti ambeni yanga-ti-koli nde so amû lege na mo ti sara kua na yanga-ti-koli kue",
  include: DocStr(
    "zi",
    "a sara na ni ti zingo ayanga ti kodoro wala a-bibliothèque ti koda kuuma na mbeni kaye",
  ),

  commands: {
    __about: DocStr("tene_ti", "fa uhoro ti ENIDE na lekengo ti système"),
    __help: DocStr(
      "za",
      "a fa liste ti a-commande nyonso so ayeke na yâ ti ENIDE",
    ),
    __version: DocStr(
      "version",
      "fa version ti ENIDE so ayeke sara kua fadeso",
    ),
    __languages: DocStr(
      "ayanga",
      "fa liste ti ayanga ti kodoro nyonso so ayeke na yâ ti ENIDE",
    ),
    __documentation: DocStr(
      "mbeti",
      "ambeti ti fango lege ti sarango kua na ENIDE",
    ),
    __grammar: DocStr("ndia", "fa andia ti koda ti yanga ti kodoro so"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "andia ti koda ti base ti système"),
      __isarray: DocStr("YekeLista", "a baa soki valeur ni ayeke lista"),
      __isobject: DocStr(
        "YekeYe",
        "a baa soki valeur ni ayeke mbeni ye (object)",
      ),
      __typeof: DocStr("MaraTi", "a fa mara wala type ti valeur ni"),
      __parse: DocStr(
        "fa_nda",
        "a changer mbeti ti koda ti ga mbeni mara ti valeur",
      ),
    },
    __math: {
      main: DocStr(
        "matika",
        "kua ti namba na matematika, ti sarango calcul nyonso",
      ),
      __pi: DocStr("PI", "namba ti PI so achanger pëpe na matematika"),
      __sqrt: DocStr(
        "MuriSquare",
        "sarango kua ti kura ti namba (racine carrée)",
      ),
      __pow: DocStr("ngangu", "a yeke mû ngangu na namba (puissance)"),
      __round: DocStr(
        "leke_nduru",
        "kanga namba ti ga nduru na valeur so ayeke nduru na ni",
      ),
      __random: DocStr("gi_na_li", "fa mbeni namba gï na li (hasard)"),
      __max: DocStr("kota", "pona kota namba na popo ti a-valeur nyonso"),
      __min: DocStr("kete", "pona kete namba na popo ti a-valeur nyonso"),
      __isNumber: DocStr("YekeNamba", "a baa soki valeur ni ayeke namba"),
      __isInteger: DocStr(
        "NambaGima",
        "a baa soki namba ni ayeke namba so ayeke gima (entier)",
      ),
      __isFloat: DocStr("desimal", "a baa soki namba ni ayeke na desimal"),
      __cos: DocStr("cos", "calcul ti cosinus"),
      __sin: DocStr("sin", "calcul ti sinus"),
      __tan: DocStr("tan", "calcul ti tangenta"),
    },

    __string: {
      main: DocStr("mbeti", "kua ti manipulation ti ambeti (strings)"),
      __length: DocStr("yongo", "a fa yongo ti mbeti ni"),
      __toUpperCase: DocStr(
        "MbetiKota",
        "a changer mbeti ni ti ga na kota mbeti (majuscule)",
      ),
      __toLowerCase: DocStr(
        "MbetiKete",
        "a changer mbeti ni ti ga na kete mbeti (minuscule)",
      ),
      __include: DocStr(
        "yeke_na_be",
        "a baa soki mbeti moko ayeke na yâ ti mbeni mbeti",
      ),
      __repeat: DocStr("kiri_sara", "kiri uzi mbeti ni maita mingi"),
    },

    __date: {
      main: DocStr("lango", "kua ti ngoi na alango nyonso"),
      __now: DocStr("fadeso", "a fa lango na ngbonga ti fadeso"),
      __year: DocStr("ngu", "a fa ngu ti lango ni"),
      __month: DocStr("nze", "a fa nze ti lango ni"),
      __dayMonth: DocStr("LangoNze", "a fa lango ti nze ni"),
      __dayWeek: DocStr("LangoYenga", "a fa lango ti yenga ni"),
      __hour: DocStr("ngbonga", "a fa ngbonga ti ngoi ni"),
      __minute: DocStr("miniti", "a fa miniti ti ngoi ni"),
      __second: DocStr("sekonde", "a fa sekonde ti ngoi ni"),
    },
  },

  types: {
    __number: DocStr("namba", "ndia ti namba"),
    __string: DocStr("mbeti", "ndia ti mbeti ti texte"),
    __boolean: DocStr("bool", "ndia ti tâ tene wala mvene"),
    __object: DocStr("ye", "ndia ti mbeni ye (object)"),
    __void: DocStr("gï_sengele", "a fa so wĩra ni akiri na ye moko pëpe"),
    __array: DocStr("lista", "ndia ti lista ti aye"),
  },

  specialValues: {
    __true: DocStr("ta_tene", "valeur ti tâ tene biani"),
    __false: DocStr("mvene", "valeur ti mvene"),
    __null: DocStr("sengele", "a fa so ye oko ayeke dä pëpe"),
  },

  words: {
    __new: DocStr("fini", "leke mbeni fini ye (instance) ti class"),
    __this: DocStr("so", "a fa ye (object) ti fadeso"),
    __extends: DocStr("mu_na_peko", "a fa so class so alondo na mbeni class"),
  },

  accessModifiers: {
    __private: DocStr("ti_hondo", "ayeke gï na yâ ti class ni"),
    __public: DocStr("ti_zigi", "azo nyonso alingbi ti bâ ni"),
    __protected: DocStr("bata", "ayeke gï na yâ ti class na amolenge ni"),
    __readonly: DocStr(
      "DikoGi",
      "alingbi ti diko ni gï dikongo, ti soppi pëpe",
    ),
    __static: DocStr(
      "kpengba",
      "ayeke ti class ni mveni, ti mbeni ye ti yâ ni pëpe",
    ),
  },

  methods: {
    method: {
      __print: DocStr("andĩka", "a fa valeur ni na lê ti ecran"),
      __scan: DocStr("diko", "a gbu mbeti so zo asungula na ordinateur"),
      __return: DocStr("kiri_na", "a kiri na valeur ti wĩra ni"),
      __break: DocStr("kanga", "fâ uluphu (loop) fadeso"),
      __continue: DocStr("ngbâ", "gue na mbeni uluphu (iteration) ti loop ni"),
    },

    sentences: {
      __function: DocStr("wĩra", "leke mbeni wĩra (fonction) ti code"),
      __if: DocStr("tongana", "ndia ti gbungu li (verification)"),
      __else: DocStr("tongana_pëpe", "mbeni lege soki ndia ni ayeke mvene"),
      __while: DocStr(
        "ngbâ_ti",
        "loop so angbâ ti sara kua soki ndia ni ayeke tâ tene",
      ),
      __for: DocStr("atiri", "loop ti kiri sarango kua na namba"),
      __switch: DocStr("soro", "ndia ti sorongo aye mingi"),
      __case: DocStr("mara", "mbeni lege moko na yâ ti soro"),
      __default: DocStr(
        "mukarire",
        "lege ti peko soki mbeni ye moko ahunda pëpe",
      ),
      __try: DocStr("tara", "tara ti sara mbeni koda"),
      __catch: DocStr("gbu", "gbu fauti soki alondo"),
      __finally: DocStr("na_nda_ni", "koda so ayeke sara kua lakue na nda ni"),
      __class: DocStr("kodoro", "leke mbeni fini kodoro (class)"),
      __constructor: DocStr("leke", "wĩra ti lekengo mbeni ye (object)"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Téné",
      "Ngere",
      "YeTiSoppi",
      "Ye",
      "YeMveni",
      "Ku",
      "Wara",
      "KangaNaConstante",
      "ParametraFiri",
      "Za",
      "TokenMvene",
      "StackAsi",
      "Elembo",
      "HunTiMbeti",
    ),
    main: errorMessage("FAUTI", "fauti ti système, kpalé asi"),
    __TypeError: errorMessage(
      "FAUTIMARA",
      "mara ti valeur ni ayeke na lege ni pëpe",
    ),
    __InitError: errorMessage(
      "FAUTILEKENGO",
      "variabla ni aleke na lege ni pëpe",
    ),
    __ReferenceError: errorMessage(
      "FAUTIREFERENCE",
      "ye so mo hunda ayeke dä pëpe",
    ),
    __SyntaxError: errorMessage(
      "FAUTISINTAKS",
      "mwandĩko ti code ni ayeke na fauti",
    ),
    __RangeError: errorMessage("FAUTINGERE", "valeur ni ahon ndö ti lege ni"),
    __URIError: errorMessage("FAUTIURI", "fauti ti URI so abuba"),
    __EvalError: errorMessage("FAUTIEVAL", "fauti ti eval"),
    __UNKNOWN_ERROR: errorMessage(
      "FAUTISOAHTINGAPEKO",
      "fauti so ahinga nda ni pëpe",
    ),
  },

  example: {
    __array: [
      "kobe",
      "kodoro",
      "lista_iri",
      "anamba",
      "ngorba",
      "ambeti",
      "azo",
      "marazu",
      "punc",
      "ayanga",
    ],
    __boolean: [
      "status",
      "yeke_ta",
      "lingbi_sara",
      "leke_awe",
      "mû_lege",
      "fandi",
      "na_nduzu",
      "hun_awe",
      "tara_awe",
      "kanga_awe",
    ],
    __function: [
      "waraIri",
      "gbuNgere",
      "faAye",
      "lekeProfil",
      "changerMbeti",
      "taraKoda",
      "taraAye",
      "bataMbeti",
      "tokuaTene",
      "bungbiKua",
    ],
    __number: [
      "ngu",
      "ngu_ti_dungo",
      "media",
      "total",
      "ngere",
      "index",
      "ngbonga",
      "mingi",
      "score",
      "miniti",
    ],
    __object: [
      "zo",
      "client",
      "leke_ye",
      "kiri",
      "futa",
      "config",
      "profil",
      "ndo_lango",
      "metadata",
      "sessiun",
    ],
    __string: [
      "iri",
      "titel",
      "ndia",
      "email",
      "parola",
      "tene",
      "tag",
      "cle",
      "url",
      "link",
    ],
    __void: [
      "hon",
      "kanga",
      "londo",
      "sukula",
      "futi",
      "sigua",
      "vuidar_buffer",
      "bata_nyonso",
      "tokua",
      "iri_tene",
    ],
  },
}).grammar();
