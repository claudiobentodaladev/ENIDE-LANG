import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const ellinika = new Language({
  language: "ellinika",
  about:
    "To ENIDE einai enas metafrastikos metaplittis pou epitrepei ton programmatismo se opoiadipote glossa",

  include: DocStr(
    "Symperilipsi",
    "Chrisimopoieitai gia ti symperilipsi glossas i vivliothikon",
  ),

  commands: {
    __about: DocStr("schetika", "gia plirofories schetika me to ENIDE"),
    __help: DocStr("voithia", "gia ti lista me oles tis diathesimes entoles"),
    __version: DocStr("ekdosi", "gia tin trechousa ekdosi tou ENIDE"),
    __languages: DocStr(
      "glosses",
      "gia ti lista me oles tis diathesimes glosses",
    ),
    __documentation: DocStr("tekmiriosi", "gia tin tekmiriosi mias glossas"),
    __grammar: DocStr("grammatiki", "gia ti grammatiki mias glossas"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "gia prosvasi se chrisimes typikas methodous"),
      __isarray: DocStr("EinaiPinakas", "elenchos an mia timi einai pinakas"),
      __isobject: DocStr(
        "EinaiAntikeimeno",
        "elenchos an mia timi einai antikeimeno",
      ),
      __typeof: DocStr("Typos", "gia ton typo mias timis"),
      __parse: DocStr("Parse", "metatropi keimenou stin swsti analysi tou"),
    },

    __math: {
      main: DocStr("mathimatika", "gia prosvasi se mathimatikes sinartiseis"),
      __pi: DocStr("PI", "gia tin timi tou pi"),
      __sqrt: DocStr("TetragonikiRiza", "gia tin tetragoniki riza"),
      __pow: DocStr("Dinami", "gia ti dinami enos arithmou"),
      __round: DocStr("Strogilopoiisi", "gia ti strogilopoiisi enos arithmou"),
      __random: DocStr("Tychaios", "gia enan tychaio arithmo"),
      __max: DocStr("Megisto", "gia ti megisti timi"),
      __min: DocStr("Elachisto", "gia tin elachisti timi"),
      __isNumber: DocStr(
        "EinaiArithmos",
        "elenchos an mia timi einai arithmos",
      ),
      __isInteger: DocStr(
        "EinaiAkeraios",
        "elenchos an mia timi einai akeraios",
      ),
      __isFloat: DocStr(
        "EinaiDekadikos",
        "elenchos an mia timi einai dekadikos",
      ),
      __cos: DocStr("Cos", "gia to synimito mias gonias se aktinia"),
      __sin: DocStr("Sin", "gia to imimio mias gonias se aktinia"),
      __tan: DocStr("Tan", "gia tin efaptomeni mias gonias se aktinia"),
    },

    __string: {
      main: DocStr("alfarithmitiko", "gia sinartiseis epexergasias keimenou"),
      __length: DocStr("Mikos", "gia to mikos enos keimenou"),
      __toUpperCase: DocStr("Kefalaia", "metatropi keimenou se kefalaia"),
      __toLowerCase: DocStr("Peza", "metatropi keimenou se peza"),
      __include: DocStr(
        "Periechet",
        "elenchos an keimeno periechet allo keimeno",
      ),
      __repeat: DocStr(
        "Epanalipsi",
        "epanalipsi keimenou se dosi arithmo foron",
      ),
    },

    __date: {
      main: DocStr("imerominia", "gia sinartiseis imerominias kai oras"),
      __now: DocStr("Tora", "gia tin trexousa imerominia kai ora"),
      __year: DocStr("Etos", "gia to etos"),
      __month: DocStr("Minas", "gia ton mina"),
      __dayMonth: DocStr("ImeraMinos", "gia tin imera tou mina"),
      __dayWeek: DocStr("ImeraEvdomadas", "gia tin imera tis evdomadas"),
      __hour: DocStr("Ora", "gia tin ora"),
      __minute: DocStr("Lepto", "gia to lepto"),
      __second: DocStr("Defterolepto", "gia to defterolepto"),
    },
  },

  types: {
    __number: DocStr("arithmos", "dilosi metavlitis typou arithmou"),
    __string: DocStr("keimeno", "dilosi metavlitis typou keimenou"),
    __boolean: DocStr("logiki", "dilosi metavlitis typou logikis"),
    __object: DocStr("antikeimeno", "gia na dilothei ena statiko antikeimeno"),
    __void: DocStr("keno", "dilosi sinartisis choris epistrofi timis"),
    __array: DocStr("pinakas", "dilosi domis dedomenwn pinaka"),
  },

  specialValues: {
    __true: DocStr("Alithes", "logiki timi alithes"),
    __false: DocStr("Pseudes", "logiki timi pseudes"),
    __null: DocStr("tipota", "apoysia timis"),
  },

  words: {
    __new: DocStr("neo", "gia dimiourgia neas ekdossis mias klasis"),
    __this: DocStr("ayto", "gia prosvasi sta idiotita tis idias klasis"),
    __extends: DocStr("epekteinei", "dilosi oti mia klasi klironomei apo alli"),
  },

  accessModifiers: {
    __private: DocStr("idiotiko", "prosvasi mono ento tis klasis"),
    __public: DocStr("dimosio", "prosvasi apo opoiodipote simio"),
    __protected: DocStr("prostateymeno", "prosvasi entos klasis kai ypoklaswn"),
    __readonly: DocStr(
      "mono_anagnosi",
      "i timi mporei na apodothei mono mia fora",
    ),
    __static: DocStr("statiko", "anikei stin klasi kai ochi stin ekdosi"),
  },

  methods: {
    method: {
      __print: DocStr("ektypose", "emfanisi timis stin othoni"),
      __scan: DocStr("diavasma", "anagnosi timis apo tin eisodo"),
      __return: DocStr("epistrofi", "epistrofi timis apo sinartisi"),
      __break: DocStr("diakopi", "eksodos apo ton vrogcho"),
      __continue: DocStr("synecheia", "metavasi stin epomeni epanalipsi"),
    },

    sentences: {
      __function: DocStr("sinartisi", "dilosi sinartisis"),
      __if: DocStr("an", "dilosi sinthikis"),
      __else: DocStr("allios", "dilosi enallaktikis sinthikis"),
      __while: DocStr("oso", "dilosi vrogchou while"),
      __for: DocStr("gia", "dilosi vrogchou for"),
      __switch: DocStr("epilogi", "dilosi domis epilogis"),
      __case: DocStr("periptosi", "dilosi periptosis stin epilogi"),
      __default: DocStr("proepilogi", "dilosi proepilegmenis periptosis"),
      __try: DocStr("dokimi", "dilosi blok dokimis"),
      __catch: DocStr("syllipsi", "dilosi blok chirismou sfalmatos"),
      __finally: DocStr("telika", "dilosi blok pou ekteleitai panta"),
      __class: DocStr("klasi", "dilosi klasis"),
      __constructor: DocStr("kataskevastis", "domis dilosis idiotiton klasis"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Minima",
      "Timi",
      "Metavliti",
      "Idiotita",
      "Antikeimeno",
      "Anameno",
      "Elifthi",
      "Anaforasi_Statheris",
      "Diplos_Parametros",
      "Ipodeixi",
      "Mh_Egkyro_Token",
      "Ypervasi_Stivas",
      "Token",
      "Anapomeno_Telos",
    ),
    main: errorMessage("SFALMA", "geniko sfalma systimatos"),
    __TypeError: errorMessage("SFALMA_TYPOU", "mi egkiros typos stin praxi"),
    __InitError: errorMessage(
      "SFALMA_ARCHIKOPOIISIS",
      "i metavliti den echet archikopoiithei",
    ),
    __ReferenceError: errorMessage(
      "SFALMA_ANAFORAS",
      "i metavliti, sinartisi i vivliothiki den iparchei sto emveleia",
    ),
    __SyntaxError: errorMessage("SFALMA_SYNTAXIS", "mi egkiros kodikas"),
    __RangeError: errorMessage(
      "SFALMA_EMVELEIAS",
      "i timi einai ekto epitreptou oriou",
    ),
    __URIError: errorMessage("SFALMA_URI", "kakochismenos i mi egkiros URI"),
    __EvalError: errorMessage("SFALMA_EVAL", "sfalma schetiko me tin eval"),
    __UNKNOWN_ERROR: errorMessage("AGNOSTO_SFALMA", "pliros agnosto sfalma"),
  },

  example: {
    __array: [
      "trofima",
      "chores",
      "stoicheia",
      "tags",
      "chromata",
      "proionta",
      "christs",
      "kategorias",
      "vathmoi",
      "glosses",
    ],
    __boolean: [
      "katastasi",
      "einaiEnilikos",
      "einaiEnergos",
      "einaiOratos",
      "echetAdeia",
      "einaiSyndedemenos",
      "einaiEnergopo",
      "einaiOloklirwmenos",
      "einaiEpivevai",
      "einaiDiagramenos",
    ],
    __function: [
      "lipiOnoma",
      "lipiTimi",
      "epexergasiKlik",
      "anaktiDedomeni",
      "morphopoiiImerominia",
      "analysiEisodou",
      "epikyrosi",
      "apodosistStocheiou",
      "enimerosKatastasis",
      "ypologismosYnolou",
    ],
    __number: [
      "ilikia",
      "etos",
      "metriti",
      "synolo",
      "timi",
      "deiktis",
      "diarkeia",
      "posotita",
      "vathmologia",
      "timeout",
    ],
    __object: [
      "atomo",
      "christis",
      "config",
      "apantisi",
      "pliromi",
      "rythmiseis",
      "profil",
      "dieythynsi",
      "metadedomena",
      "synedrasi",
    ],
    __string: [
      "onoma",
      "titlos",
      "perigrafi",
      "email",
      "kodikos",
      "minima",
      "etiketa",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "syndesmos",
      "archikopoiisi",
      "katharismos",
      "epanaforá",
      "katastrofi",
      "apossyndesi",
      "katharismoCache",
      "apoThikeysi",
      "apostoliEmail",
      "katagramatismos",
    ],
  },
}).grammar();
