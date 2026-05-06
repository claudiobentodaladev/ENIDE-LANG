import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const rumantsch = new Language({
  language: "rumantsch",
  about:
    "ENIDE è in transpilader traducibel che permetta da programmar en mintga lingua",

  include: DocStr(
    "includer",
    "dovra per includer linguas, bibliotecas u moduls ordadora",
  ),

  commands: {
    __about: DocStr("davart", "mussa infurmaziuns davart il project ENIDE"),
    __help: DocStr("agid", "mussa la glista da tut ils cummonds disponibels"),
    __version: DocStr("versiun", "mussa la versiun actuala da ENIDE"),
    __languages: DocStr(
      "linguas",
      "mussa la glista da tut las linguas sustegnidas",
    ),
    __documentation: DocStr(
      "doc",
      "mussa la documentaziun per la lingua actuala",
    ),
    __grammar: DocStr("grammatica", "mussa las reglas da sintaxa da la lingua"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "access a las funcziuns da basa dal sistem"),
      __isarray: DocStr(
        "ei_lista",
        "verifitgescha sche la valur è ina lista (array)",
      ),
      __isobject: DocStr(
        "ei_object",
        "verifitgescha sche la valur è in object",
      ),
      __typeof: DocStr("tip_da", "retuna il tip da datas da la variabla"),
      __parse: DocStr(
        "analisar",
        "convertecha in text en il tip da datas correspundent",
      ),
    },
    __math: {
      main: DocStr("matematica", "access a funcziuns econstantas matematicas"),
      __pi: DocStr("PI", "la valur da la constanta Pi"),
      __sqrt: DocStr("radic_cuadra", "calculeschala radic cuadra"),
      __pow: DocStr("potenza", "calculescha la potenza d'in numer"),
      __round: DocStr("arrondar", "arronda in numer al proxim enter"),
      __random: DocStr("casual", "generescha in numer casual"),
      __max: DocStr("maximum", "retuna la valur la pli gronda d'ina lista"),
      __min: DocStr("minimum", "retuna la valur la pli pitschna d'ina lista"),
      __isNumber: DocStr("ei_numer", "verifitgescha sche la valur è in numer"),
      __isInteger: DocStr(
        "ei_enter",
        "verifitgescha sche la valur è in numer enter",
      ),
      __isFloat: DocStr(
        "ei_decimal",
        "verifitgescha sche la valur ha decimals",
      ),
      __cos: DocStr("cos", "calculescha il cosinus"),
      __sin: DocStr("sin", "calculescha il sinus"),
      __tan: DocStr("tan", "calculescha la tangenta"),
    },

    __string: {
      main: DocStr("chadena", "funcziuns per manipular chadenas da caracters"),
      __length: DocStr("lunghezza", "retuna la lunghezza da la chadena"),
      __toUpperCase: DocStr("a_majusclas", "convertecha il text en majusclas"),
      __toLowerCase: DocStr("a_minusclas", "convertecha il text en minusclas"),
      __include: DocStr(
        "contign",
        "verifitgescha sche la chadena contign in cert element",
      ),
      __repeat: DocStr(
        "repeter",
        "repeta la chadena in tschert dumber da giadas",
      ),
    },

    __date: {
      main: DocStr("data", "funcziuns per manipular data ed ura"),
      __now: DocStr("ussa", "retuna la data e l'ura actuala"),
      __year: DocStr("onn", "retuna l'onn"),
      __month: DocStr("mais", "retuna il mais"),
      __dayMonth: DocStr("di_mais", "retuna il di dal mais"),
      __dayWeek: DocStr("di_emna", "retuna il di da l'emna"),
      __hour: DocStr("ura", "retuna l'ura"),
      __minute: DocStr("minuta", "retuna las minutas"),
      __second: DocStr("segunda", "retuna las secundas"),
    },
  },

  types: {
    __number: DocStr("numer", "declaraziun d'ina variabla numerica"),
    __string: DocStr("chadena", "declaraziun d'ina variabla da text"),
    __boolean: DocStr("bool", "declaraziun d'ina variabla logica (ver/fauls)"),
    __object: DocStr("object", "declaraziun d'ina structura d'object"),
    __void: DocStr("vabid", "inditgescha ch'ina funcziun na retuna nagut"),
    __array: DocStr("lista", "declaraziun d'ina structura da lista"),
  },

  specialValues: {
    __true: DocStr("ver", "valur logica da vardad"),
    __false: DocStr("fauls", "valur logica da faulsetad"),
    __null: DocStr("nill", "represchenta l'absenza d'ina valur"),
  },

  words: {
    __new: DocStr("nov", "creescha ina nova instanza d'ina classa"),
    __this: DocStr("quest", "referenza a l'instanza actuala da l'object"),
    __extends: DocStr("extenda", "inditgescha l'ereditad d'ina classa"),
  },

  accessModifiers: {
    __private: DocStr("privat", "accessibel mo entaifer la classa"),
    __public: DocStr("public", "accessibel da tut las vart"),
    __protected: DocStr(
      "protegiu",
      "accessibel en la classa ed en las subclassas",
    ),
    __readonly: DocStr(
      "mo_leger",
      "la valur na po betg vegnir midada suenter l'inizialisaziun",
    ),
    __static: DocStr("static", "appartegna a la classa, betg a l'instanza"),
  },

  methods: {
    method: {
      __print: DocStr("stampar", "scriva ina valur sin il screm"),
      __scan: DocStr("legier", "legia datas da l'utilisader"),
      __return: DocStr("returnar", "retuna ina valur d'ina funcziun"),
      __break: DocStr("interrumper", "interrumpa l'execuziun dal bucl actual"),
      __continue: DocStr("continuar", "sauda a la proxima iteraziun dal bucl"),
    },

    sentences: {
      __function: DocStr("funcziun", "declaraziun d'ina nova funcziun"),
      __if: DocStr("sche", "instrucziun condiziunala"),
      __else: DocStr("auter", "bloc sch'ina condiziun n'è betg ademplida"),
      __while: DocStr(
        "mentras",
        "bucl executà uschia ditg sco la condiziun è vera",
      ),
      __for: DocStr("per", "bucl iterativ cun dumber fixà"),
      __switch: DocStr(
        "selecziun",
        "structura per eleger tranter pliras opziuns",
      ),
      __case: DocStr("cas", "in cas specific entaifer la selecziun"),
      __default: DocStr("standard", "executà sche nagin cas na correspunda"),
      __try: DocStr("emprovar", "entschatta dal bloc da gestiun d'errurs"),
      __catch: DocStr("capturar", "gestiun da l'errur tschiffada"),
      __finally: DocStr("finalmain", "bloc che vegn adina executà a la fin"),
      __class: DocStr("classa", "declaraziun d'ina nova classa"),
      __constructor: DocStr(
        "constructur",
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
      "Assegnaziun_a_constanta",
      "Parameter_duplitgà",
      "Cussegl",
      "Token_nunvalid",
      "Stack_overflow",
      "Token",
      "Fin_nunspetgada_da_l_input",
    ),
    main: errorMessage("ERRUR", "errur generala dal sistem"),
    __TypeError: errorMessage(
      "ERRUR_TIP",
      "tip da datas nunvalid per l'operaziun",
    ),
    __InitError: errorMessage(
      "ERRUR_INIZIALISAZIUN",
      "la variabla n'è betg vegnida inizialisada",
    ),
    __ReferenceError: errorMessage(
      "ERRUR_REFERENZA",
      "referenza a ina variabla che n'exista betg",
    ),
    __SyntaxError: errorMessage(
      "ERRUR_SINTAXA",
      "errur en la sintaxa dal code",
    ),
    __RangeError: errorMessage(
      "ERRUR_INTERVAL",
      "valur ordaifer ils limits permess",
    ),
    __URIError: errorMessage("ERRUR_URI", "format URI nunvalid"),
    __EvalError: errorMessage(
      "ERRUR_EVAL",
      "errur en connex cun la funcziun eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "ERRUR_NUNENCONUSCHENTA",
      "ina errur nunenconuschenta è capidada",
    ),
  },

  example: {
    __array: [
      "magliar",
      "pajais",
      "glista_nums",
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
      "ei_activ",
      "po_utilisar",
      "ei_pront",
      "autorisà",
      "annunzià",
      "en_curs",
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
      "onn_naschientscha",
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
      " nettegiar",
      "destruir",
      "sortida",
      "svabidar_buffer",
      "salvar_tut",
      "trametter",
      "annunziar",
    ],
  },
}).grammar();
