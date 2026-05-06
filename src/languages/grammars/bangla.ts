import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const bangla = new Language({
  language: "bangla",
  about:
    "ENIDE holo ekti onubad-joggo transpiler ja jekono bhashay programming korar sujog dey",

  include: DocStr(
    "Antarbhukta_kara",
    "Bhasha ba laibreri antarbhukta karate byabahrita haya",
  ),

  commands: {
    __about: DocStr("somporke", "ENIDE somporke jante"),
    __help: DocStr("sahajjo", "sob upolobdho command-er talika pete"),
    __version: DocStr("sanskaran", "ENIDE-er bortoman sanskaran jante"),
    __languages: DocStr("bhashasomuho", "sob upolobdho bhashar talika pete"),
    __documentation: DocStr("nothipotro", "ekti bhashar nothipotro pete"),
    __grammar: DocStr("byakoron", "ekti bhashar byakoron pete"),
  },

  library: {
    __standard: {
      main: DocStr("sadharon", "sadharon sahayok method gulo korte"),
      __isarray: DocStr("SuchiKi", "man-ti suchi ki na porikkha korte"),
      __isobject: DocStr("BastuKi", "man-ti bastu ki na porikkha korte"),
      __typeof: DocStr("Dhoron", "ekti man-er dhoron jante"),
      __parse: DocStr(
        "Parse",
        "string-ke sothik dhoroner man-e rupantor korte",
      ),
    },

    __math: {
      main: DocStr("gonit", "gonit-er kaj gulo korte"),
      __pi: DocStr("PI", "pi-er man pete"),
      __sqrt: DocStr("Borgomool", "borgomool ninnoy korte"),
      __pow: DocStr("Ghaat", "sonkhar ghaat ninnoy korte"),
      __round: DocStr("Round", "sonkhake round korte"),
      __random: DocStr("Elo_melo", "ekti elo-melo sonkha pete"),
      __max: DocStr("Sorboccho", "sorboccho man pete"),
      __min: DocStr("Sorbonimno", "sorbonimno man pete"),
      __isNumber: DocStr("SonkhaKi", "man-ti sonkha ki na porikkha korte"),
      __isInteger: DocStr(
        "PurnosonkhaKi",
        "man-ti purnosonkha ki na porikkha korte",
      ),
      __isFloat: DocStr("DosomikKi", "man-ti dosomik ki na porikkha korte"),
      __cos: DocStr("Cos", "rediyan-e koner cosine pete"),
      __sin: DocStr("Sin", "rediyan-e koner sine pete"),
      __tan: DocStr("Tan", "rediyan-e koner tangent pete"),
    },

    __string: {
      main: DocStr("shobdo", "shobdo manipulate korar kaj gulo korte"),
      __length: DocStr("Doirgho", "string-er doirgho pete"),
      __toUpperCase: DocStr(
        "BoroHate",
        "string-ke boro hater okkhore rupantor korte",
      ),
      __toLowerCase: DocStr(
        "ChotoHate",
        "string-ke choto hater okkhore rupantor korte",
      ),
      __include: DocStr("AcheKi", "string-e kono substring ache ki na dekhte"),
      __repeat: DocStr(
        "Punoravrito",
        "string-ke nirdishto sংkhyay punoravrito korte",
      ),
    },

    __date: {
      main: DocStr("tarikh", "tarikh o somoyer kaj gulo korte"),
      __now: DocStr("Ekhoni", "bortoman tarikh o somoy pete"),
      __year: DocStr("Bochor", "bochor pete"),
      __month: DocStr("Maas", "maas pete"),
      __dayMonth: DocStr("Din", "maser din pete"),
      __dayWeek: DocStr("SaptahikDin", "saptahik din pete"),
      __hour: DocStr("Ghonta", "ghonta pete"),
      __minute: DocStr("Minute", "minute pete"),
      __second: DocStr("Second", "second pete"),
    },
  },

  types: {
    __number: DocStr("sonkha", "sonkha dhoroner variable ghoshona korte"),
    __string: DocStr("shobdo", "string dhoroner variable ghoshona korte"),
    __boolean: DocStr("bool", "boolean dhoroner variable ghoshona korte"),
    __object: DocStr("bastu", "ekti sthir bastu ghoshana korte"),
    __void: DocStr("shunno", "kono man ferot na deya function ghoshona korte"),
    __array: DocStr("taalika", "taalika data structure ghoshona korte"),
  },

  specialValues: {
    __true: DocStr("Sotti", "boolean sotti man"),
    __false: DocStr("Mithya", "boolean mithya man"),
    __null: DocStr("kichhuna", "man-er abortamata"),
  },

  words: {
    __new: DocStr("notun", "ekti class-er notun instance toiri korte"),
    __this: DocStr("nije", "nijer class-er attribute access korte"),
    __extends: DocStr(
      "uttaradhikar",
      "class-ti onno ekti class theke uttaradhikar niyeche bujhate",
    ),
  },

  accessModifiers: {
    __private: DocStr("nijoswo", "shudhumatro class-er bhitore access joggo"),
    __public: DocStr("sokolke", "jekono jayga theke access joggo"),
    __protected: DocStr("surakhkhito", "class o tar subclass-e access joggo"),
    __readonly: DocStr("shudhupora", "man shudhumatro ekbar assign kora jabe"),
    __static: DocStr("sthir", "instance-er noy, class-er nijer"),
  },

  methods: {
    method: {
      __print: DocStr("dekhao", "screen-e man prokash korte"),
      __scan: DocStr("input", "input theke man nite"),
      __return: DocStr("ferot", "function theke man ferot dite"),
      __break: DocStr("thamo", "loop theke ber hote"),
      __continue: DocStr("chalo", "loop-er porer iterasyone jete"),
    },

    sentences: {
      __function: DocStr("kaj", "ekti function ghoshona korte"),
      __if: DocStr("jodi", "ekti shorto ghoshona korte"),
      __else: DocStr("othoba", "ekti bokolpo shorto ghoshona korte"),
      __while: DocStr("jotokkhon", "while loop ghoshona korte"),
      __for: DocStr("jonno", "for loop ghoshona korte"),
      __switch: DocStr("switch", "selection structure ghoshona korte"),
      __case: DocStr("case", "selection structure-e case ghoshona korte"),
      __default: DocStr("vabit", "default case ghoshona korte"),
      __try: DocStr("chesta", "try block ghoshona korte"),
      __catch: DocStr("dhoro", "error handling block ghoshona korte"),
      __finally: DocStr(
        "oboseshe",
        "sob somoy cholbe emon block ghoshona korte",
      ),
      __class: DocStr("shreni", "ekti class ghoshona korte"),
      __constructor: DocStr(
        "nirmata",
        "class-e attribute ghoshona korar structure",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Barta",
      "Man",
      "Choroshil",
      "Gunoboili",
      "Bastu",
      "Protyashit",
      "Propto",
      "Sthir_Nirupan",
      "Punorukti_Param",
      "Ishara",
      "Oboidho_Token",
      "Stack_Purnota",
      "Token",
      "Aborkhito_Shesh",
    ),
    main: errorMessage("TRUTI", "sadharon system truti"),
    __TypeError: errorMessage("TYPE_TRUTI", "kaje oboidho type"),
    __InitError: errorMessage(
      "AROMBHO_TRUTI",
      "variable-ti initialize kora hoyni",
    ),
    __ReferenceError: errorMessage(
      "REFERENCE_TRUTI",
      "variable, function ba laibreri scope-e nei",
    ),
    __SyntaxError: errorMessage("SYNTAX_TRUTI", "oboidho code"),
    __RangeError: errorMessage("RANGE_TRUTI", "man-ti simar baire"),
    __URIError: errorMessage("URI_TRUTI", "oboidho ba bikrito URI"),
    __EvalError: errorMessage("EVAL_TRUTI", "eval somporkito truti"),
    __UNKNOWN_ERROR: errorMessage("OJAN_TRUTI", "sompurno ojana truti"),
  },

  example: {
    __array: [
      "khabar",
      "desh",
      "jinish",
      "tags",
      "rong",
      "ponno",
      "byaboharkari",
      "bivaag",
      "punto",
      "bhasha",
    ],
    __boolean: [
      "obastha",
      "bodoKi",
      "sochiolKi",
      "dorshonioyKi",
      "onumotiAche",
      "loginKoreche",
      "chalooKi",
      "sesKi",
      "sotikKi",
      "mocheFelaKi",
    ],
    __function: [
      "namNao",
      "manNao",
      "clickSambhal",
      "dataAnao",
      "tarikkhFormat",
      "inputParse",
      "formJachao",
      "itemDekhao",
      "obasthaProsbar",
      "mojmuTirKora",
    ],
    __number: [
      "boyosh",
      "bochor",
      "gonona",
      "mojmu",
      "dam",
      "soochok",
      "somoy",
      "poriman",
      "punto",
      "timeout",
    ],
    __object: [
      "byakti",
      "byaboharkari",
      "config",
      "sada",
      "payment",
      "settings",
      "profil",
      "thikana",
      "metadata",
      "session",
    ],
    __string: [
      "naam",
      "shirshom",
      "biboron",
      "email",
      "guptokothon",
      "barta",
      "label",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "login",
      "shuru",
      "porikar",
      "punorudo",
      "dhongsha",
      "logout",
      "cacheKhali",
      "dbSংrakkhon",
      "emailPathao",
      "ghostoNibondhon",
    ],
  },
}).grammar();
