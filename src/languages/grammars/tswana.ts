import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const tswana = new Language({
  language: "tswana",
  about:
    "ENIDE ke transpiler e kgonang go fetolwa e e dumelelang go ngwa porogramo ka puo nngwe le nngwe",

  include: DocStr(
    "Akaretsa",
    "E dirisetswa go akaretsa loleme kgotsa dilaeborari",
  ),

  commands: {
    __about: DocStr("KaEnide", "go bona tshedimosetso ka ENIDE"),
    __help: DocStr(
      "Thuso",
      "go bona lenaane la ditaelo tsotlhe tse di leng teng",
    ),
    __version: DocStr("Version", "go bona version ya jaanong ya ENIDE"),
    __languages: DocStr(
      "Dipuo",
      "go bona lenaane la dipuo tsotlhe tse di leng teng",
    ),
    __documentation: DocStr("Dikwalo", "go bona dikwalo tsa puo"),
    __grammar: DocStr("Puo_ya_Puo", "go bona puo ya puo ya loleme"),
  },

  library: {
    __standard: {
      main: DocStr("Tlwaelo", "go fitlhelela mesepamo ya tlwaelo e e thusang"),
      __isarray: DocStr("KeyaLenaane", "go netefatsa gore boleng ke lenaane"),
      __isobject: DocStr("KeyaNtho", "go netefatsa gore boleng ke ntho"),
      __typeof: DocStr("Mofuta", "go bona mofuta wa boleng"),
      __parse: DocStr("Parse", "go fetola mogala go nna boleng jo bo siameng"),
    },

    __math: {
      main: DocStr("Dipalo", "go fitlhelela mesepamo ya dipalo"),
      __pi: DocStr("PI", "go bona boleng jwa pi"),
      __sqrt: DocStr("MoleLesquare", "go bona mole wa square"),
      __pow: DocStr("Maatla", "go bona maatla a nomoro"),
      __round: DocStr("Pipisana", "go pipisanya nomoro"),
      __random: DocStr("Tshepiso", "go bona nomoro ya leeto"),
      __max: DocStr("Segolo", "go bona boleng jo bogolo"),
      __min: DocStr("Sennye", "go bona boleng jo bonnye"),
      __isNumber: DocStr("KeyaNomoro", "go netefatsa gore boleng ke nomoro"),
      __isInteger: DocStr(
        "KeyaNomoroKamali",
        "go netefatsa gore boleng ke nomoro kamali",
      ),
      __isFloat: DocStr("KeyaDesimale", "go netefatsa gore boleng ke desimale"),
      __cos: DocStr("Cos", "go bona cosinus ya kgutlo mo radianeng"),
      __sin: DocStr("Sin", "go bona sinus ya kgutlo mo radianeng"),
      __tan: DocStr("Tan", "go bona tangens ya kgutlo mo radianeng"),
    },

    __string: {
      main: DocStr("Mogala", "go fitlhelela mesepamo ya go laola mogala"),
      __length: DocStr("Botelele", "go bona botelele jwa mogala"),
      __toUpperCase: DocStr(
        "KwaNnakiSegolo",
        "go fetola mogala go nna dipitso tse dikgolo",
      ),
      __toLowerCase: DocStr(
        "KwaNnakiSennye",
        "go fetola mogala go nna dipitso tse dinnye",
      ),
      __include: DocStr(
        "OnaKe",
        "go netefatsa gore mogala o na le mogala o mongwe",
      ),
      __repeat: DocStr("Boelela", "go boelela mogala di-nako tse di rileng"),
    },

    __date: {
      main: DocStr("Letsatsi", "go fitlhelela mesepamo ya letsatsi le nako"),
      __now: DocStr("Jaanong", "go bona letsatsi le nako ya jaanong"),
      __year: DocStr("Ngwaga", "go bona ngwaga"),
      __month: DocStr("Kgwedi", "go bona kgwedi"),
      __dayMonth: DocStr("LetsatsiKgwedi", "go bona letsatsi la kgwedi"),
      __dayWeek: DocStr("LetsatsiVeke", "go bona letsatsi la veke"),
      __hour: DocStr("Nako", "go bona nako"),
      __minute: DocStr("Metsotso", "go bona metsotso"),
      __second: DocStr("Metsotswana", "go bona metsotswana"),
    },
  },

  types: {
    __number: DocStr("Nomoro", "go phasalatsa phetogo ya mofuta wa nomoro"),
    __string: DocStr("Mogala", "go phasalatsa phetogo ya mofuta wa mogala"),
    __boolean: DocStr("Bool", "go phasalatsa phetogo ya mofuta wa boolean"),
    __object: DocStr("Ntho", "go phasalatsa ntho e emeng"),
    __void: DocStr("Seno", "go phasalatsa mosepamo o o sa busetseng boleng"),
    __array: DocStr("Lenaane", "go phasalatsa thulaganyo ya lenaane la data"),
  },

  specialValues: {
    __true: DocStr("Boammaaruri", "boleng jwa boolean jwa boammaaruri"),
    __false: DocStr("Maaka", "boleng jwa boolean jwa maaka"),
    __null: DocStr("Sepe", "go se na boleng"),
  },

  words: {
    __new: DocStr("Setlha", "go bopa setlha se setjha sa klaase"),
    __this: DocStr("Seno_Se", "go fitlhelela ditlhaloso tsa klaase ya gago"),
    __extends: DocStr(
      "Nolofatsa",
      "go phasalatsa gore klaase e tsholwa ke e nngwe",
    ),
  },

  accessModifiers: {
    __private: DocStr("Sephiri", "o fitlhelelwa fela mo klaseng"),
    __public: DocStr(
      "Pepeneneng",
      "o fitlhelelwa go tswa kwa gongwe le gongwe",
    ),
    __protected: DocStr(
      "Sirelediwa",
      "o fitlhelelwa mo klaseng le mo disubklaaseng",
    ),
    __readonly: DocStr("Bala_Fela", "boleng bo ka bewa fela gangwe"),
    __static: DocStr("Emeng", "e ya klaase, e seng ya setlha"),
  },

  methods: {
    method: {
      __print: DocStr("Gatisa", "go gatisa boleng mo skiring"),
      __scan: DocStr("Bala", "go bala boleng go tswa go mmedisetsi"),
      __return: DocStr("Busetsa", "go busetsa boleng go tswa mo mosepamong"),
      __break: DocStr("Emisa", "go emisa loop"),
      __continue: DocStr("Tswelela", "go ya kwa go latelong ga loop"),
    },

    sentences: {
      __function: DocStr("Mosepamo", "go phasalatsa mosepamo"),
      __if: DocStr("FaMaemo", "go phasalatsa maemo"),
      __else: DocStr("Gongwe", "go phasalatsa maemo a mangwe"),
      __while: DocStr("FaLoop", "go phasalatsa loop ya fa"),
      __for: DocStr("GoLoop", "go phasalatsa loop ya go"),
      __switch: DocStr("Kgetho", "go phasalatsa thulaganyo ya kgetho"),
      __case: DocStr("Boleng", "go phasalatsa boleng mo thulaganong ya kgetho"),
      __default: DocStr("Tlwaelo", "go phasalatsa boleng jwa tlwaelo"),
      __try: DocStr("Leka", "go phasalatsa bloko ya go leka"),
      __catch: DocStr("Tshwara", "go phasalatsa bloko ya go tshwara diphoso"),
      __finally: DocStr(
        "Bofelo",
        "go phasalatsa bloko e e dirang ka dinako tsotlhe",
      ),
      __class: DocStr("Klaase", "go phasalatsa klaase"),
      __constructor: DocStr(
        "Moagi",
        "thulaganyo ya go phasalatsa ditlhaloso mo klaseng",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Molaetsa",
      "Boleng",
      "Phetogo",
      "Tlhaloso",
      "Ntho",
      "Go_Lebeletswe",
      "Go_Amogelwa",
      "Neelo_Ya_Emeng",
      "Paramitara_E_Boeletseng",
      "Tlhagiso",
      "Token_E_Sa_Siamang",
      "Stack_E_Tletseng",
      "Token",
      "Bofelo_Jo_Bo_Sa_Lebeletsewang",
    ),
    main: errorMessage("PHOSO", "phoso e tlwaelegileng ya sisteme"),
    __TypeError: errorMessage("PHOSO_MOFUTA", "mofuta ga o siame mo tirisong"),
    __InitError: errorMessage("PHOSO_SIMOLOLA", "phetogo ga e a simolola"),
    __ReferenceError: errorMessage(
      "PHOSO_TSHUPISO",
      "phetogo, mosepamo kgotsa laeborari ga e leng mo tikologong",
    ),
    __SyntaxError: errorMessage("PHOSO_SINTAKISI", "khoutu ga e siame"),
    __RangeError: errorMessage(
      "PHOSO_NTLHA",
      "boleng bo ka ntle ga ntlha e e letleliweng",
    ),
    __URIError: errorMessage(
      "PHOSO_URI",
      "URI e senyegileng kgotsa e sa siamang",
    ),
    __EvalError: errorMessage("PHOSO_EVAL", "phoso e e amanang le eval"),
    __UNKNOWN_ERROR: errorMessage(
      "PHOSO_E_SA_ITSIWENG",
      "phoso e e sa itsiweng gotlhe",
    ),
  },

  example: {
    __array: [
      "dijo",
      "dinaga",
      "dilo",
      "tags",
      "mebala",
      "ditirelo",
      "batho",
      "mefuta",
      "dipalo",
      "dipuo",
    ],
    __boolean: [
      "maemo",
      "keyoMogolo",
      "keyoTiriso",
      "keyoBonalagala",
      "keyoTumelelo",
      "keyoKena",
      "keyoNetefatso",
      "keyoBoela",
      "keyoNetefadiwa",
      "keyoFiswa",
    ],
    __function: [
      "bonaMaina",
      "bonaBoleng",
      "tshwaraMaemo",
      "bonaDatha",
      "laoleLetsatsi",
      "balaMmedisetsi",
      "netefatsaFomo",
      "bontshaNtho",
      "fetolaMaemo",
      "balaDipalo",
    ],
    __number: [
      "dingwaga",
      "ngwaga",
      "palo",
      "kakaretso",
      "tlhwatlhwa",
      "index",
      "nako",
      "palomoka",
      "dipalo",
      "timeout",
    ],
    __object: [
      "motho",
      "modirisetsi",
      "config",
      "karabo",
      "tuelo",
      "dipeelo",
      "profaele",
      "aterese",
      "metadata",
      "nako_ya_tiriso",
    ],
    __string: [
      "leina",
      "setlhogo",
      "tlhaloso",
      "email",
      "password",
      "molaetsa",
      "lebaka",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "tsena",
      "simolola",
      "phepafatsa",
      "busetsa",
      "senya",
      "tswa",
      "phepafatsaCache",
      "bolokaDatha",
      "romela_email",
      "kwala_ditiragalo",
    ],
  },
}).grammar();
