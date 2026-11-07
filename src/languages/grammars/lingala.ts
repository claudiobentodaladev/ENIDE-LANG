import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabels } from "../utils/stucture.grammar.js";

export const lingala = new Language({
  language: "lingala",
  about:
    "ENIDE ezali lokótá ya programe ya minoko mingi oyo epesaka yo nzela ya kosala programe na lokótá nionso",
  include: DocStr(
    "kotia",
    "esalelami mpo na kokotisa monoko, biblioteka to mitindo ya bileko mosusu uta na fisye mosusu",
  ),

  commands: {
    __about: DocStr("mpona", "mpo na kozwa makambo matali ENIDE"),
    __help: DocStr(
      "lisalisi",
      "mpo na kozwa liste ya mitindo nyonso oyo ezali",
    ),
    __version: DocStr("versio", "mpo na kozwa versio ya lelo ya ENIDE"),
    __languages: DocStr(
      "ndimi",
      "mpo na kozwa liste ya ndimi nyonso oyo ezali",
    ),
    __documentation: DocStr("buku", "mpo na kozwa buku ya malako ya monoko"),
    __grammar: DocStr("gramatika", "mpo na kozwa mibeko ya mokomeli ya monoko"),
  },

  library: {
    __standard: {
      main: DocStr(
        "mobimba",
        "mpo na kokota na misala ya mobimba oyo esungaka",
      ),
      __isarray: DocStr(
        "EzaliMolongo",
        "mpo na kotala soki motango ezali molongo (vector)",
      ),
      __isobject: DocStr(
        "EzaliEloko",
        "mpo na kotala soki motango ezali eloko (object)",
      ),
      __typeof: DocStr("Lolenge", "mpo na kozwa lolenge ya motango"),
      __parse: DocStr(
        "Parse",
        "mpo na kobongola maloba (string) na motango ya solo",
      ),
    },
    __math: {
      main: DocStr("matematike", "mpo na kokota na misala ya matematike"),
      __pi: DocStr("PI", "mpo na kozwa motango ya pi"),
      __sqrt: DocStr("Misisa", "mpo na kozwa misisa ya motango"),
      __pow: DocStr("Nguya", "mpo na kotombola motango na nguya"),
      __round: DocStr("Zungisa", "mpo na kozungisa motango"),
      __random: DocStr(
        "Pamba",
        "mpo na kozwa motango ya pamba ya kozanga molongo",
      ),
      __max: DocStr("Monene", "mpo na kozwa motango monene koleka"),
      __min: DocStr("Moke", "mpo na kozwa motango moke koleka"),
      __isNumber: DocStr("EzaliMotango", "mpo na kotala soki ezali motango"),
      __isInteger: DocStr(
        "EzaliMobimba",
        "mpo na kotala soki motango ezali mobimba",
      ),
      __isFloat: DocStr(
        "EzaliDesimale",
        "mpo na kotala soki motango ezali desimale",
      ),
      __cos: DocStr("Cos", "mpo na kozwa cosinus ya likoni (angle)"),
      __sin: DocStr("Sin", "mpo na kozwa sinus ya likoni"),
      __tan: DocStr("Tan", "mpo na kozwa tangente ya likoni"),
    },

    __string: {
      main: DocStr("maloba", "mpo na kokota na misala ya kobongola maloba"),
      __length: DocStr("Bolayi", "mpo na kozwa bolayi ya maloba"),
      __toUpperCase: DocStr(
        "Minene",
        "mpo na kobongola maloba na makomi minene",
      ),
      __toLowerCase: DocStr("Mike", "mpo na kobongola maloba na makomi mike"),
      __include: DocStr(
        "EzaliNa",
        "mpo na kotala soki maloba ezali na kati ya maloba mosusu",
      ),
      __repeat: DocStr("Zongela", "mpo na kozongela maloba mbala mingi"),
    },

    __date: {
      main: DocStr("mokolo", "mpo na kokota na misala ya mokolo na ntango"),
      __now: DocStr("Lelo", "mpo na kozwa mokolo na ntango ya sikoyo"),
      __year: DocStr("Mobu", "mpo na kozwa mobu"),
      __month: DocStr("Sanza", "mpo na kozwa sanza"),
      __dayMonth: DocStr("MokoloSanza", "mpo na kozwa mokolo ya sanza"),
      __dayWeek: DocStr("MokoloPoso", "mpo na kozwa mokolo ya poso"),
      __hour: DocStr("Ngonga", "mpo na kozwa ngonga"),
      __minute: DocStr("Miniti", "mpo na kozwa miniti"),
      __second: DocStr("Sekonde", "mpo na kozwa sekonde"),
      __milliseconds: DocStr("Milisekonde", "mpo na kozwa milisekonde"),
    },

    __array: {
      main: DocStr("molongo", "mpo na kokota na misala ya kobongola molongo"),
      __addStart: DocStr(
        "BakisilEbandeli",
        "Ekotisaka biloko ya sika na ebandeli ya molongo, mpe ezongisaka bolayi ya sika ya molongo.",
      ),
      __addEnd: DocStr(
        "BakisilSuka",
        "Ebakisaka biloko ya sika na suka ya molongo",
      ),
      __join: DocStr(
        "Sangisa",
        "Esangisaka biloko nyonso ya molongo na kati ya maloba moko, ekabwani na maloba ya kopesa ndelo, mpe ezongisaka maloba yango.",
      ),
      __length: DocStr("bolayiMolongo", "Ezwaka to etyaka bolayi ya molongo"),
    },

    __time: {
      main: DocStr(
        "ntango",
        "mpo na kokota na misala ya ntango mpo na kobongisa kokende ya kódigo",
      ),
      __timeOut: DocStr(
        "NtangoEskeli",
        "ekatisaka mosala mbala moko nsima ya kowela mwa ntango na milisekonde",
      ),
      __timeInterval: DocStr(
        "NtangoEtengami",
        "ekatisaka mosala mbala na mbala na ntango etengami na milisekonde",
      ),
    },
  },

  types: {
    __number: DocStr("motango", "mpo na koloba variable ya lolenge motango"),
    __string: DocStr("maloba", "mpo na koloba variable ya lolenge maloba"),
    __boolean: DocStr("bool", "mpo na koloba variable ya solo to lokuta"),
    __object: DocStr("eloko", "mpo na koloba eloko ya kozanga kobongwana"),
    __void: DocStr("pamba", "mpo na mosala oyo ezongisaka eloko te"),
    __array: DocStr("molongo", "mpo na koloba lolenge ya molongo ya mitango"),
  },

  specialValues: {
    __true: DocStr("solo", "motango ya solo"),
    __false: DocStr("lokuta", "motango ya lokuta"),
    __null: DocStr("mpamba", "ntango motango ezali te"),
  },

  words: {
    __new: DocStr("sika", "mpo na kosala eloko ya sika uta na kelasi"),
    __this: DocStr("oyo", "mpo na kokota na biloko ya kelasi moko"),
    __extends: DocStr(
      "kolanda",
      "mpo na koloba ete kelasi moko ekolanda mosusu",
    ),
  },

  accessModifiers: {
    __private: DocStr("YaSekele", "ekoki komonana kaka na kati ya kelasi"),
    __public: DocStr("YaBato", "ekoki komonana bipai nyonso"),
    __protected: DocStr(
      "YaKobatelama",
      "ekoki komonana na kelasi mpe oyo ekolanda yango",
    ),
    __readonly: DocStr("KotangaKaka", "ekoki kobongwana mbala moko kaka"),
    __static: DocStr("YaKotelema", "ezali ya kelasi, kasi ya eloko moko te"),
  },

  methods: {
    method: {
      __print: DocStr("bimisa", "mpo na kobimisa motango na ecran"),
      __clear: DocStr("peto", "mpo na kopɛtola écran"),
      __scan: DocStr("tanga", "mpo na kotanga motango oyo moto akomi"),
      __return: DocStr("zongisa", "mpo na kozongisa motango uta na mosala"),
      __break: DocStr("kata", "mpo na kobima na siklu"),
      __continue: DocStr("landa", "mpo na kokende na iterasion elandi"),
    },

    sentences: {
      __function: DocStr("mosala", "mpo na koloba mosala"),
      __if: DocStr("soki", "mpo na kopesa kondisyo"),
      __else: DocStr("SokiTe", "mpo na kopesa kondisyo mosusu"),
      __while: DocStr("tango", "mpo na kosala siklu tango"),
      __for: DocStr("mpona", "mpo na kosala siklu mpona"),
      __switch: DocStr("pona", "mpo na kopona na kati ya biloko mingi"),
      __case: DocStr("likambo", "likambo moko na kati ya pona"),
      __default: DocStr("YaSuka", "ntango likambo moko te emonani"),
      __try: DocStr("meka", "mpo na komeka makomi"),
      __catch: DocStr("kamata", "mpo na kokamata mabunga"),
      __finally: DocStr("NaNsuka", "esalemaka ntango nyonso na suka"),
      __class: DocStr("kelasi", "mpo na koloba lolenge ya kelasi"),
      __constructor: DocStr(
        "motongi",
        "mosala oyo esalaka biloko na kati ya kelasi",
      ),
    },
  },
  errors: {
    __labels: errorLabels({
      message: "Nsango",
      value: "Motuya",
      variable: "Variable",
      property: "Eteni",
      object: "Eloko",
      expected: "Ezelamaki",
      received: "Ezwamaki",
      constAssignment: "Bokangi ya Constant",
      duplicateParam: "Parametre ezongisami",
      hint: "Toli",
      invalidToken: "Token ya mabe",
      stackOverflow: "Stack efuluki",
      token: "Token",
      unexpectedEnd: "Nsuka oyo ezelamaki te",
      file: "fisye",
      didYouMean: "ozalaki kolinga koloba",
      includedFrom: "etiami na",
      size: "bunene",
      index: "index",
      path: "nzela",
      available: "ezali",
      element: "eloko",
      hintMissingEquals: 'ezangi "=" na kati ya nkoma mpe motuya',
      hintMissingSemicolon: 'ezangi ";" liboso ya malako oyo',
      hintUnclosedBlock: '"{" efungwamaki na molongo {line} ekangami te na "}"',
      hintUnclosedBracket:
        '"[" efungwamaki na molongo {line} ekangami te na "]"',
      hintUnclosedComment:
        "ndimbola efungwamaki na molongo {line} ekangami te na */",
      hintUnclosedString:
        "maloba mafungwamaki na molongo {line} mazangi elembo ya bokanga",
      hintModuleNotFound: 'module ezwamaki te; emonanaki na "{path}"',
      hintLibraryUnknown: "librairie eyebani te; ezali: {list}",
      hintIndexRange:
        "tableau ezali na bunene {size}; index ya malamu: {range}",
      hintIndexEmpty:
        "tableau ezali mpamba, yango wana ezali na index ya malamu te",
      hintNotArray: "motuya ezali tableau te",
      hintNull: "motuya moko episamaki te (null to undefined)",
      hintNaN: "motuya ezali malamu te (NaN)",
      hintInfinite: "motuya ezali na nsuka te",
      hintNoInput: "programme elukaki eloko kasi esukaki",
      hintInternal:
        "oyo emonanaki lokola libunga ya kati ya Enide, ezali libunga ya programme na yo te; sopola yango",
      hintDuplicateProperty: 'eteni "{name}" ekomami mbala koleka moko',
      hintMissingProperty: 'eteni "{name}" ezali te',
      hintArrayMixed: "tableau ekoki kosangisa tableau mpe biteni ya pete te",
      hintArrayEmpty: "tableau ezali na mposa ya motuya moko ata moko",
      hintObjectArrayShape:
        'eloko {index} ekokani na eloko ya liboso te: tala eteni "{name}"',
      hintLoopCounter: "motangi ya loop esengeli ezala motuya",
      hintErrorsFound: "{count} mabunga mazwamaki",
    }),
    main: errorMessage("LIBUNGA", "libunga ya systeme"),
    __TypeError: errorMessage("LIBUNGA YA LOLENGE", "lolenge ya mabe na mosala"),
    __InitError: errorMessage("LIBUNGA YA EBANDE", "variable ebandisamaki te"),
    __ReferenceError: errorMessage(
      "LIBUNGA YA REFERENCE",
      "variable, mosala to librairie ezali te na esika oyo",
    ),
    __SyntaxError: errorMessage("LIBUNGA YA SYNTAX", "code ya mabe"),
    __RangeError: errorMessage(
      "LIBUNGA YA RANGE",
      "motuya ezali na libanda ya nzela epesami",
    ),
    __URIError: errorMessage("LIBUNGA YA URI", "URI ebebi to ezali ya mabe"),
    __EvalError: errorMessage("LIBUNGA YA EVAL", "libunga etali eval"),
    __UNKNOWN_ERROR: errorMessage(
      "LIBUNGA EYEBANI TE",
      "libunga eyebani te ata moke",
    ),
  },
  example: {
    __array: [
      "bilei",
      "bikolo",
      "biloko",
      "biteni",
      "langi",
      "biloko_ya_koteka",
      "basaleli",
      "lolenge",
      "mikolo",
      "ndimi",
    ],
    __boolean: [
      "ezali",
      "mwana_mukulu",
      "ezali_na_mosala",
      "emonanaka",
      "ndingisa",
      "akoti",
      "epesami_nzela",
      "esili",
      "etalami",
      "elongolami",
    ],
    __function: [
      "kozwaKombo",
      "kozwaMotango",
      "talaListe",
      "bongolaMakambo",
      "limbola",
      "tangaMakomi",
      "talaFulu",
      "sikaBiloko",
      "talaNdenge",
      "tangaNyoso",
    ],
    __number: [
      "mibu",
      "mobu",
      "katikati",
      "nyoso",
      "ntalo",
      "ndelo",
      "ntango_eleki",
      "motángo",
      "mikolo",
      "ngonga",
    ],
    __object: [
      "moto",
      "mosaleli",
      "kobongisa",
      "eyano",
      "futi",
      "malako",
      "elongi",
      "ndako",
      "makambo",
      "ntango",
    ],
    __string: [
      "kombo",
      "moto_ya_likambo",
      "ndimbola",
      "email",
      "liloba_ya_sekele",
      "sango",
      "eyebiseli",
      "elembo",
      "adresse",
      "kombo_moke",
    ],
    __void: [
      "kota",
      "banda",
      "longola",
      "zongisa_na_ndenge",
      "bebisaka",
      "bima",
      "longolaCache",
      "bomba",
      "tindaEmail",
      "kokota",
    ],
  },
}).grammar();
