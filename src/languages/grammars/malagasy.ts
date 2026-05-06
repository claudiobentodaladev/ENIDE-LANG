import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const malagasy = new Language({
  language: "malagasy",
  about:
    "ENIDE dia transpiler mamela anao hanao fandaharana amin'ny fiteny rehetra",

  include: DocStr(
    "ampidirina",
    "ampiasaina hampidirana fiteny, tahirim-boky, na rafitra avy amin'ny rakitra hafa",
  ),

  commands: {
    __about: DocStr("momba", "hahazoana vaovao momba ny ENIDE"),
    __help: DocStr("fanampiana", "hijerena ny lisitry ny baiko rehetra misy"),
    __version: DocStr("kinova", "hijerena ny kinova ENIDE ampiasaina"),
    __languages: DocStr("fiteny", "hijerena ny lisitry ny fiteny rehetra misy"),
    __documentation: DocStr(
      "tahirin_kevitra",
      "hahazoana ny torolalana momba ny fiteny",
    ),
    __grammar: DocStr("fitsipika", "hahazoana ny fitsipika mifehy ny fiteny"),
  },

  library: {
    __standard: {
      main: DocStr("fototra", "fidirana amin'ny fomba fiasa mahazatra"),
      __isarray: DocStr(
        "karazana_lisitra",
        "manamarina raha lisitra (array) ny sanda",
      ),
      __isobject: DocStr(
        "karazana_zavatra",
        "manamarina raha zavatra (object) ny sanda",
      ),
      __typeof: DocStr("Karazany", "mamerina ny karazana sanda"),
      __parse: DocStr(
        "Fakafakaina",
        "mamadika sanda soratra ho lasa karazany marina",
      ),
    },
    __math: {
      main: DocStr("matematika", "fidirana amin'ny asa matematika"),
      __pi: DocStr("PI", "hahazoana ny sandan'ny pi"),
      __sqrt: DocStr("Faka", "hahazoana ny faka efamira"),
      __pow: DocStr("Hery", "mampiakatra isa amin'ny hery"),
      __round: DocStr(
        "Boriboriana",
        "manao boribory ny isa ho akaiky indrindra",
      ),
      __random: DocStr("Kisendrasendra", "mamorona isa tsy ampoizina"),
      __max: DocStr("LehibeIndrindra", "mifidy ny isa lehibe indrindra"),
      __min: DocStr("KelyIndrindra", "mifidy ny isa kely indrindra"),
      __isNumber: DocStr("IsaVe", "manamarina raha isa ny sanda"),
      __isInteger: DocStr(
        "IsaFenoVe",
        "manamarina raha isa feno (integer) ny sanda",
      ),
      __isFloat: DocStr(
        "IsaDesimalyVe",
        "manamarina raha isa misy koma ny sanda",
      ),
      __cos: DocStr("Cos", "hahazoana ny cosinus amin'ny radian"),
      __sin: DocStr("Sin", "hahazoana ny sinus amin'ny radian"),
      __tan: DocStr("Tan", "hahazoana ny tangente amin'ny radian"),
    },

    __string: {
      main: DocStr("soratra", "fidirana amin'ny fikirakirana soratra"),
      __length: DocStr("Halava", "hahazoana ny halavan'ny soratra"),
      __toUpperCase: DocStr(
        "Sorabaventy",
        "mamadika ny soratra ho sorabaventy",
      ),
      __toLowerCase: DocStr(
        "Soramadinika",
        "mamadika ny soratra ho soramadinika",
      ),
      __include: DocStr(
        "Ahitana",
        "manamarina raha misy soratra hafa ao anatiny",
      ),
      __repeat: DocStr("Averimberina", "mamerina soratra araka ny isa nomena"),
    },

    __date: {
      main: DocStr("daty", "fidirana amin'ny fotoana sy daty"),
      __now: DocStr("Ankehitriny", "hahazoana ny daty sy ora izao anio izao"),
      __year: DocStr("Taona", "hahazoana ny taona"),
      __month: DocStr("Volana", "hahazoana ny volana"),
      __dayMonth: DocStr(
        "AndronNyVolana",
        "hahazoana ny andro ao anatin'ny volana",
      ),
      __dayWeek: DocStr(
        "AndronNyHerinandro",
        "hahazoana ny andro ao anatin'ny herinandro",
      ),
      __hour: DocStr("Ora", "hahazoana ny ora"),
      __minute: DocStr("Minitra", "hahazoana ny minitra"),
      __second: DocStr("Segondra", "hahazoana ny segondra"),
    },
  },

  types: {
    __number: DocStr("isa", "mamaritra ny karazana isa"),
    __string: DocStr("soratra", "mamaritra ny karazana soratra"),
    __boolean: DocStr("bool", "mamaritra raha marina na diso"),
    __object: DocStr("zavatra", "mamaritra zavatra iray"),
    __void: DocStr("foana", "mamaritra asa tsy mamerina sanda"),
    __array: DocStr("lisitra", "mamaritra rafitra lisitra"),
  },

  specialValues: {
    __true: DocStr("marina", "sanda lojika marina"),
    __false: DocStr("diso", "sanda lojika diso"),
    __null: DocStr("tsisy", "tsy fisian'ny sanda"),
  },

  words: {
    __new: DocStr("vao", "mamorona santionany vaovao amin'ny kilasy"),
    __this: DocStr("ity", "manondro ny kilasy misy ankehitriny"),
    __extends: DocStr("mandova", "manondro fa mandova avy amin'ny kilasy hafa"),
  },

  accessModifiers: {
    __private: DocStr(
      "manokana",
      "tsy hita raha tsy ao anatin'ny kilasy ihany",
    ),
    __public: DocStr("ho_ny_rehetra", "azo jerena na aiza na aiza"),
    __protected: DocStr(
      "arovana",
      "hita ao amin'ny kilasy sy ireo mandova azy",
    ),
    __readonly: DocStr("vakiana_ihany", "tsy azo ovaina ny sandany"),
    __static: DocStr("static", "an'ny kilasy fa tsy an'ny santionany"),
  },

  methods: {
    method: {
      __print: DocStr("pirinty", "mampiseho ny valiny eo amin'ny efijery"),
      __scan: DocStr("vakio", "mamaky ny sanda nampidirin'ny mpampiasa"),
      __return: DocStr("avereno", "mamerina ny sandan'ny asa vita"),
      __break: DocStr("tapaho", "mivoaka amin'ny fiverenana (loop)"),
      __continue: DocStr("tohizo", "mandingana ho amin'ny manaraka"),
    },

    sentences: {
      __function: DocStr("asa", "mamaritra asa iray"),
      __if: DocStr("raha", "mamaritra fepetra"),
      __else: DocStr("rahatsyizany", "mamaritra fepetra hafa"),
      __while: DocStr("mandritra", "manao fiverenana mandritra ny fepetra"),
      __for: DocStr("ho_an_ny", "manao fiverenana voafetra"),
      __switch: DocStr("safidy", "mamaritra safidy maro"),
      __case: DocStr("tranga", "mamaritra tranga iray ao anatin'ny safidy"),
      __default: DocStr("mahazatra", "tranga raha tsy misy mifanaraka"),
      __try: DocStr("andramo", "manandrana koda mety hisy fahadisoana"),
      __catch: DocStr("sambory", "mikarakara ny fahadisoana azo"),
      __finally: DocStr("farany", "tanterahina foana na misy diso na tsy misy"),
      __class: DocStr("kilasy", "mamaritra kilasy vaovao"),
      __constructor: DocStr("mpanorina", "mamaritra ny fanombohana ny kilasy"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Hafatra",
      "Sanda",
      "Miovaova",
      "Toetra",
      "Zavatra",
      "Andrasana",
      "Voaray",
      "Fandaminana tsy azo ovaina",
      "Parametatra miverina",
      "Torohevitra",
      "Token tsy mety",
      "Stack feno loatra",
      "Token",
      "Tapaka tampoka ny fidirana",
    ),
    main: errorMessage("FAHADISOANA", "fahadisoana ankapobeny"),
    __TypeError: errorMessage(
      "DISO_KARAZANA",
      "tsy mety ny karazana ampiasaina",
    ),
    __InitError: errorMessage(
      "DISO_FANOMBOHANA",
      "tsy mbola nomena sanda ny miovaova",
    ),
    __ReferenceError: errorMessage(
      "DISO_FANONDROANA",
      "tsy misy ny miovaova na ny asa antsoina",
    ),
    __SyntaxError: errorMessage("DISO_SINTAKSA", "diso ny fanoratana ny koda"),
    __RangeError: errorMessage(
      "DISO_FETRA",
      "mihoatra ny fetra azo ekena ny sanda",
    ),
    __URIError: errorMessage("DISO_URI", "diso ny endriky ny URI"),
    __EvalError: errorMessage("DISO_EVAL", "fahadisoana momba ny eval"),
    __UNKNOWN_ERROR: errorMessage(
      "TSY_FANTATRA",
      "fahadisoana tsy fantatra tanteraka",
    ),
  },

  example: {
    __array: [
      "sakafo",
      "firenena",
      "zavatra",
      "marika",
      "loko",
      "vokatra",
      "mpampiasa",
      "sokajy",
      "isa",
      "fiteny",
    ],
    __boolean: [
      "toe_javatra",
      "lehibe_ve",
      "miasa_ve",
      "hita_ve",
      "azo_atao",
      "tafiditra",
      "mandeha",
      "vita",
      "voamarina",
      "voafafa",
    ],
    __function: [
      "alaoAnarana",
      "kajioSanda",
      "lisitra",
      "havaozyDona",
      "amboaryEndrika",
      "fakafakao",
      "hamarino",
      "tehirizo",
      "alefasoMailaka",
      "atambaro",
    ],
    __number: [
      "taona",
      "daty",
      "salanisa",
      "fitambarany",
      "vidiny",
      "filaharany",
      "faharetany",
      "habetsany",
      "isa",
      "ora",
    ],
    __object: [
      "olona",
      "mpampiasa",
      "fanamafisana",
      "valiny",
      "fandoavam_bola",
      "sary",
      "mombamomba",
      "adiresy",
      "tahiry",
      "fotoana",
    ],
    __string: [
      "anarana",
      "lohateny",
      "famaritana",
      "mailaka",
      "tenimiafina",
      "hafatra",
      "anarana_fohy",
      "token",
      "url",
      "rohy",
    ],
    __void: [
      "atombohy",
      "fafao",
      "ajanony",
      "avereno_tsotra",
      "ravao",
      "mivoaha",
      "diovy_ny_cache",
      "tehirizo_izao",
      "alefaso",
      "hiditra",
    ],
  },
}).grammar();
