import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const cymraeg = new Language({
  language: "cymraeg",
  about:
    "Mae ENIDE yn drawsbeilydd trosglwyddadwy sy'n caniatáu rhaglennu mewn unrhyw iaith",

  include: DocStr(
    "Cynnwys",
    "defnyddir i gynnwys iaith, llyfrgelloedd neu strwythurau data o ffeil arall",
  ),

  commands: {
    __about: DocStr("am", "i gael gwybodaeth am ENIDE"),
    __help: DocStr("cymorth", "i gael rhestr o'r holl orchmynion sydd ar gael"),
    __version: DocStr("fersiwn", "i gael fersiwn gyfredol ENIDE"),
    __languages: DocStr(
      "ieithoedd",
      "i gael rhestr o'r holl ieithoedd sydd ar gael",
    ),
    __documentation: DocStr("dogfen", "i gael y dogfennaeth ar gyfer iaith"),
    __grammar: DocStr("gramadeg", "i gael y gramadeg ar gyfer iaith"),
  },

  library: {
    __standard: {
      main: DocStr("safonol", "i gael mynediad at ddulliau safonol defnyddiol"),
      __isarray: DocStr("YwArae", "i wirio a yw gwerth yn arae"),
      __isobject: DocStr("YwGwrthrych", "i wirio a yw gwerth yn wrthrych"),
      __typeof: DocStr("Math", "i gael math gwerth"),
      __parse: DocStr("Dosrannu", "i drosi gwerth o linyn i'w fath cywir"),
    },

    __math: {
      main: DocStr("mathemateg", "i gael mynediad at swyddogaethau mathemateg"),
      __pi: DocStr("PI", "i gael gwerth pi"),
      __sqrt: DocStr("Isradd", "i gael yr isradd sgwar"),
      __pow: DocStr("Pwer", "i gael pwer rhif"),
      __round: DocStr("Crynhoi", "i grynhoi rhif"),
      __random: DocStr("Arhap", "i gael rhif ar hap"),
      __max: DocStr("Uchaf", "i gael y gwerth uchaf"),
      __min: DocStr("Isaf", "i gael y gwerth isaf"),
      __isNumber: DocStr("YwRhif", "i wirio a yw gwerth yn rhif"),
      __isInteger: DocStr("YwGyfanrif", "i wirio a yw gwerth yn gyfanrif"),
      __isFloat: DocStr("YwDegol", "i wirio a yw gwerth yn ddegol"),
      __cos: DocStr("Cos", "i gael cosin ongl mewn radianau"),
      __sin: DocStr("Sin", "i gael sin ongl mewn radianau"),
      __tan: DocStr("Tan", "i gael tangiad ongl mewn radianau"),
    },

    __string: {
      main: DocStr("llinyn", "i gael mynediad at swyddogaethau llinyn"),
      __length: DocStr("Hyd", "i gael hyd llinyn"),
      __toUpperCase: DocStr(
        "IBriflythrennau",
        "i drosi llinyn i briflythrennau",
      ),
      __toLowerCase: DocStr(
        "ILythrennauBach",
        "i drosi llinyn i lythrennau bach",
      ),
      __include: DocStr("YnCynnwys", "i wirio a yw llinyn yn cynnwys isllinyn"),
      __repeat: DocStr("Ailadrodd", "i ailadrodd llinyn nifer o weithiau"),
    },

    __date: {
      main: DocStr(
        "dyddiad",
        "i gael mynediad at swyddogaethau dyddiad ac amser",
      ),
      __now: DocStr("Nawr", "i gael y dyddiad a'r amser cyfredol"),
      __year: DocStr("Blwyddyn", "i gael y flwyddyn"),
      __month: DocStr("Mis", "i gael y mis"),
      __dayMonth: DocStr("DiwrnodMis", "i gael diwrnod y mis"),
      __dayWeek: DocStr("DiwrnodWythnos", "i gael diwrnod yr wythnos"),
      __hour: DocStr("Awr", "i gael yr awr"),
      __minute: DocStr("Munud", "i gael y munud"),
      __second: DocStr("Eiliad", "i gael yr eiliad"),
    },
  },

  types: {
    __number: DocStr("rhif", "i ddatgan newidyn o fath rhif"),
    __string: DocStr("llinyn", "i ddatgan newidyn o fath llinyn"),
    __boolean: DocStr("boole", "i ddatgan newidyn o fath boole"),
    __object: DocStr("gwrthrych", "i ddatgan gwrthrych statig"),
    __void: DocStr("gwag", "i ddatgan swyddogaeth nad yw'n dychwelyd gwerth"),
    __array: DocStr("arae", "i ddatgan strwythur arae"),
  },

  specialValues: {
    __true: DocStr("Gwir", "gwerth boole gwir"),
    __false: DocStr("Gau", "gwerth boole gau"),
    __null: DocStr("Dim", "absenoldeb gwerth"),
  },

  words: {
    __new: DocStr("newydd", "i greu enghraifft newydd o ddosbarth"),
    __this: DocStr("hwn", "i gael mynediad at briodweddau'r dosbarth ei hun"),
    __extends: DocStr(
      "ymestyn",
      "i ddatgan bod dosbarth yn etifeddu o ddosbarth arall",
    ),
  },

  accessModifiers: {
    __private: DocStr("preifat", "hygyrch o fewn y dosbarth yn unig"),
    __public: DocStr("cyhoeddus", "hygyrch o unrhyw le"),
    __protected: DocStr(
      "gwarchodedig",
      "hygyrch o fewn y dosbarth a'i is-ddosbarthiadau",
    ),
    __readonly: DocStr(
      "darllenYnUnig",
      "dim ond unwaith y gellir aseinio gwerth",
    ),
    __static: DocStr(
      "statig",
      "yn perthyn i'r dosbarth ei hun nid i enghreifftiau",
    ),
  },

  methods: {
    method: {
      __print: DocStr("argraffu", "i argraffu gwerth ar y sgrin"),
      __scan: DocStr("darllen", "i ddarllen gwerth o'r mewnbwn"),
      __return: DocStr("dychwelyd", "i ddychwelyd gwerth o swyddogaeth"),
      __break: DocStr("torri", "i dorri allan o ddolen"),
      __continue: DocStr("parhau", "i neidio i'r iteriad nesaf o ddolen"),
    },

    sentences: {
      __function: DocStr("swyddogaeth", "i ddatgan swyddogaeth"),
      __if: DocStr("os", "i ddatgan amod"),
      __else: DocStr("arall", "i ddatgan amod amgen"),
      __while: DocStr("tra", "i ddatgan dolen tra"),
      __for: DocStr("am", "i ddatgan dolen am"),
      __switch: DocStr("newid", "i ddatgan strwythur dewis"),
      __case: DocStr("achos", "i ddatgan achos yn y strwythur dewis"),
      __default: DocStr(
        "rhagosodedig",
        "i ddatgan yr achos rhagosodedig yn y strwythur dewis",
      ),
      __try: DocStr("ceisio", "i ddatgan bloc ceisio"),
      __catch: DocStr("dal", "i ddatgan bloc trin gwallau"),
      __finally: DocStr(
        "Or_Diwedd",
        "i ddatgan bloc sy'n gweithredu beth bynnag",
      ),
      __class: DocStr("dosbarth", "i ddatgan dosbarth"),
      __constructor: DocStr(
        "adeiladwr",
        "strwythur sy'n caniatáu datgan priodweddau mewn dosbarth",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Neges",
      "Gwerth",
      "Newidyn",
      "Priodwedd",
      "Gwrthrych",
      "Disgwyliedig",
      "Derbyniwyd",
      "Aseiniad_Cysonyn",
      "Paramedr_Dyblyg",
      "Awgrym",
      "Token_Annilys",
      "Gorlif_Pentwr",
      "Token",
      "Diwedd_Annisgwyl_Mewnbwn",
    ),
    main: errorMessage("GWALL", "gwall system generig"),
    __TypeError: errorMessage("GWALL_MATH", "math annilys mewn gweithrediad"),
    __InitError: errorMessage(
      "GWALL_CYCHWYN",
      "nid oedd y newidyn wedi ei gychwyn",
    ),
    __ReferenceError: errorMessage(
      "GWALL_CYFEIRIAD",
      "nid yw'r newidyn, swyddogaeth neu lyfrgell yn bodoli",
    ),
    __SyntaxError: errorMessage("GWALL_CYSTRAWEN", "cod annilys"),
    __RangeError: errorMessage("GWALL_YSTOD", "gwerth y tu allan i'r ystod"),
    __URIError: errorMessage("GWALL_URI", "URI camffurfiedig neu annilys"),
    __EvalError: errorMessage("GWALL_EVAL", "gwall yn ymwneud ag eval"),
    __UNKNOWN_ERROR: errorMessage("GWALL_ANHYSBYS", "gwall hollol anhysbys"),
  },

  example: {
    __array: [
      "bwyd",
      "gwledydd",
      "eitemau",
      "tagiau",
      "lliwiau",
      "cynhyrchion",
      "defnyddwyr",
      "categoriau",
      "sgорiau",
      "ieithoedd",
    ],
    __boolean: [
      "statws",
      "ywOedolyn",
      "ywWeithredol",
      "ywWeladwy",
      "ganddo_Ganiatad",
      "ywWediMewngofnodi",
      "ywWediGalluogi",
      "ywWediGorffen",
      "ywWediDilysu",
      "ywWediDileu",
    ],
    __function: [
      "caelEnw",
      "caelGwerth",
      "trinClic",
      "nolData",
      "fformatioDate",
      "dosrannuMewnbwn",
      "dilysuFfurflen",
      "rendroEitem",
      "diweddaruCyflwr",
      "cyfrifoTotal",
    ],
    __number: [
      "oedran",
      "blwyddyn",
      "cyfrif",
      "cyfanswm",
      "pris",
      "mynegai",
      "hyd",
      "maint",
      "sgôr",
      "amseriad",
    ],
    __object: [
      "person",
      "defnyddiwr",
      "ffurfweddiad",
      "ymateb",
      "taliad",
      "gosodiadau",
      "proffil",
      "cyfeiriad",
      "metadata",
      "sesiwn",
    ],
    __string: [
      "enw",
      "teitl",
      "disgrifiad",
      "ebost",
      "cyfrinair",
      "neges",
      "label",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "mewngofnodi",
      "cychwyn",
      "glanhau",
      "ailosod",
      "dinistrio",
      "allgofnodi",
      "glanhauCelfa",
      "cadwIDB",
      "anffonEbost",
      "cofnodiDigwyddiad",
    ],
  },
}).grammar();
