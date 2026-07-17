import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const rumantsch = new Language({
  language: "rumantsch",
  about:
    "ENIDE è in transpilader traducibel che permetta da programmar en mintga lingua",

  include: DocStr(
    "Includer",
    "dovra per includer linguas, bibliotecas u moduls ordadora",
  ),

  commands: {
    __about: DocStr("Davart", "mussa infurmaziuns davart il project ENIDE"),
    __help: DocStr("Agid", "mussa la glista da tut ils cummonds disponibels"),
    __version: DocStr("Versiun", "mussa la versiun actuala da ENIDE"),
    __languages: DocStr(
      "Linguas",
      "mussa la glista da tut las linguas sustegnidas",
    ),
    __documentation: DocStr(
      "Doc",
      "mussa la documentaziun per la lingua actuala",
    ),
    __grammar: DocStr("Grammatica", "mussa las reglas da sintaxa da la lingua"),
  },

  library: {
    __standard: {
      main: DocStr("Standard", "access a las funcziuns da basa dal sistem"),
      __isarray: DocStr(
        "EiLista",
        "verifitgescha sche la valur è ina lista (array)",
      ),
      __isobject: DocStr("EiObject", "verifitgescha sche la valur è in object"),
      __typeof: DocStr("TipDa", "retuna il tip da datas da la variabla"),
      __parse: DocStr(
        "Analisar",
        "convertecha in text en il tip da datas correspundent",
      ),
    },
    __math: {
      main: DocStr("Matematica", "access a funcziuns e constantas matematicas"),
      __pi: DocStr("PI", "la valur da la constanta Pi"),
      __sqrt: DocStr("RadicCuadra", "calculescha la radic cuadra"),
      __pow: DocStr("Potenza", "calculescha la potenza d'in numer"),
      __round: DocStr("Arrondar", "arronda in numer al proxim enter"),
      __random: DocStr("Casual", "generescha in numer casual"),
      __max: DocStr("Maximum", "retuna la valur la pli gronda d'ina lista"),
      __min: DocStr("Minimum", "retuna la valur la pli pitschna d'ina lista"),
      __isNumber: DocStr("EiNumer", "verifitgescha sche la valur è in numer"),
      __isInteger: DocStr(
        "EiEnter",
        "verifitgescha sche la valur è in numer enter",
      ),
      __isFloat: DocStr("EiDecimal", "verifitgescha sche la valur ha decimals"),
      __cos: DocStr("Cos", "calculescha il cosinus"),
      __sin: DocStr("Sin", "calculescha il sinus"),
      __tan: DocStr("Tan", "calculescha la tangenta"),
    },

    __string: {
      main: DocStr("Chadena", "funcziuns per manipular chadenas da caracters"),
      __length: DocStr("Lunghezza", "retuna la lunghezza da la chadena"),
      __toUpperCase: DocStr("AMajusclas", "convertecha il text en majusclas"),
      __toLowerCase: DocStr("AMinusclas", "convertecha il text en minusclas"),
      __include: DocStr(
        "Contign",
        "verifitgescha sche la chadena contign in cert element",
      ),
      __repeat: DocStr(
        "Repeter",
        "repeta la chadena in tschert dumber da giadas",
      ),
    },

    __date: {
      main: DocStr("Data", "funcziuns per manipular data ed ura"),
      __now: DocStr("Ussa", "retuna la data e l'ura actuala"),
      __year: DocStr("Onn", "retuna l'onn"),
      __month: DocStr("Mais", "retuna il mais"),
      __dayMonth: DocStr("DiMais", "retuna il di dal mais"),
      __dayWeek: DocStr("DiEmna", "retuna il di da l'emna"),
      __hour: DocStr("Ura", "retuna l'ura"),
      __minute: DocStr("Minuta", "retuna las minutas"),
      __second: DocStr("Segunda", "retuna las secundas"),
    },
  },

  types: {
    __number: DocStr("Numer", "declaraziun d'ina variabla numerica"),
    __string: DocStr("Chadena", "declaraziun d'ina variabla da text"),
    __boolean: DocStr("Bool", "declaraziun d'ina variabla logica (ver/fauls)"),
    __object: DocStr("Object", "declaraziun d'ina structura d'object"),
    __void: DocStr("Vabid", "inditgescha ch'ina funcziun na retuna nagut"),
    __array: DocStr("Lista", "declaraziun d'ina structura da lista"),
  },

  specialValues: {
    __true: DocStr("Ver", "valur logica da vardad"),
    __false: DocStr("Fauls", "valur logica da faulsetad"),
    __null: DocStr("Nill", "represchenta l'absenza d'ina valur"),
  },

  words: {
    __new: DocStr("Nov", "creescha ina nova instanza d'ina classa"),
    __this: DocStr("Quest", "referenza a l'instanza actuala da l'object"),
    __extends: DocStr("Extenda", "inditgescha l'ereditad d'ina classa"),
  },

  accessModifiers: {
    __private: DocStr("Privat", "accessibel mo entaifer la classa"),
    __public: DocStr("Public", "accessibel da tut las vart"),
    __protected: DocStr(
      "Protegiu",
      "accessibel en la classa ed en las subclassas",
    ),
    __readonly: DocStr(
      "MoLeger",
      "la valur na po betg vegnir midada suenter l'inizialisaziun",
    ),
    __static: DocStr("Static", "appartegna a la classa, betg a l'instanza"),
  },

  methods: {
    method: {
      __print: DocStr("Stampar", "scriva ina valur sin il screm"),
      __scan: DocStr("Legier", "legia datas da l'utilisader"),
      __return: DocStr("Returnar", "retuna ina valur d'ina funcziun"),
      __break: DocStr("Interrumper", "interrumpa l'execuziun dal bucl actual"),
      __continue: DocStr("Continuar", "sauda a la proxima iteraziun dal bucl"),
    },

    sentences: {
      __function: DocStr("Funcziun", "declaraziun d'ina nova funcziun"),
      __if: DocStr("Sche", "instrucziun condiziunala"),
      __else: DocStr("Auter", "bloc sch'ina condiziun n'è betg ademplida"),
      __while: DocStr(
        "Mentras",
        "bucl executà uschia ditg sco la condiziun è vera",
      ),
      __for: DocStr("Per", "bucl iterativ cun dumber fixà"),
      __switch: DocStr(
        "Selecziun",
        "structura per eleger tranter pliras opziuns",
      ),
      __case: DocStr("Cas", "in cas specific entaifer la selecziun"),
      __default: DocStr("Standard", "executà sche nagin cas na correspunda"),
      __try: DocStr("Emprovar", "entschatta dal bloc da gestiun d'errurs"),
      __catch: DocStr("Capturar", "gestiun da l'errur tschiffada"),
      __finally: DocStr("Finalmain", "bloc che vegn adina executà a la fin"),
      __class: DocStr("Classa", "declaraziun d'ina nova classa"),
      __constructor: DocStr(
        "Constructur",
        "funcziun che inizialisescha in object",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Messadi",
      "Valur",
      "Variabla",
      "Proprietad",
      "Object",
      "Sperà",
      "Retschivì",
      "AssegnaziunAConstanta",
      "ParameterDuplitgà",
      "Cussegl",
      "TokenNunvalid",
      "StackOverflow",
      "Token",
      "FinNunspetgadaDalInput",
    ),
    main: errorMessage("ERRUR", "errur generala dal sistem"),
    __TypeError: errorMessage(
      "ErrurTip",
      "tip da datas nunvalid per l'operaziun",
    ),
    __InitError: errorMessage(
      "ErrurInizialisaziun",
      "la variabla n'è betg vegnida inizialisada",
    ),
    __ReferenceError: errorMessage(
      "ErrurReferenza",
      "referenza a ina variabla che n'exista betg",
    ),
    __SyntaxError: errorMessage("ErrurSintaxa", "errur en la sintaxa dal code"),
    __RangeError: errorMessage(
      "ErrurInterval",
      "valur ordaifer ils limits permess",
    ),
    __URIError: errorMessage("ErrurUri", "format URI nunvalid"),
    __EvalError: errorMessage(
      "ErrurEval",
      "errur en connex cun la funcziun eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "ErrurNunenconuschenta",
      "ina errur nunenconuschenta è capidada",
    ),
  },

  example: {
    __array: [
      "listaPizza",
      "pajais",
      "glistaNums",
      "numers",
      "colurs",
      "products",
      "utilisaders",
      "categorias",
      "puncs",
      "linguas",
    ],
    __boolean: [
      "status",
      "eiActiv",
      "poUtilisar",
      "eiPront",
      "autorisà",
      "annunzià",
      "enCurs",
      "completà",
      "verifitgà",
      "stizzà",
    ],
    __function: [
      "obtignNum",
      "calculValur",
      "mussaDatas",
      "actualisarProfil",
      "formatarText",
      "analisarCode",
      "verifitgarDatas",
      "alvarDatoteca",
      "trametterMessadi",
      "summarTut",
    ],
    __number: [
      "evit",
      "onnNaschientscha",
      "media",
      "total",
      "prezi",
      "index",
      "temp",
      "quantitad",
      "punctaziun",
      "ura",
    ],
    __object: [
      "persuna",
      "client",
      "ajustaments",
      "respunda",
      "pajament",
      "configuraziun",
      "profil",
      "adressa",
      "metadata",
      "sessiun",
    ],
    __string: [
      "prenum",
      "titel",
      "descripziun",
      "email",
      "parola",
      "messadi",
      "tag",
      "clav",
      "url",
      "link",
    ],
    __void: [
      "partir",
      "stizzer",
      "fermar",
      "nettegiar",
      "destruir",
      "sortida",
      "svabidarBuffer",
      "salvarTut",
      "trametter",
      "annunziar",
    ],
  },
}).grammar();
