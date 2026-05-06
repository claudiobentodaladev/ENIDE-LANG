import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const sardu = new Language({
  language: "sardu",
  about:
    "ENIDE est unu tradutore programabile chi permitit de programmare in limba sarda",

  include: DocStr(
    "includi",
    "serbit pro agiungire limbas, bibliotecas o mòdulos esternos in su sistema",
  ),

  commands: {
    __about: DocStr("subra", "mostrat informatziones subra su progetu ENIDE"),
    __help: DocStr(
      "agiudu",
      "mostrat sa lista de totu sos cumandos disponìbiles",
    ),
    __version: DocStr("tenore", "mostrat sa versione atuale de ENIDE"),
    __languages: DocStr(
      "limbas",
      "mostrat sa lista de totu sas limbas suportadas",
    ),
    __documentation: DocStr("manu", "mostrat su manuale de sa limba atuale"),
    __grammar: DocStr(
      "grammàtica",
      "mostrat sas règulas de sintassi de sa limba",
    ),
  },

  library: {
    __standard: {
      main: DocStr(
        "istandard",
        "atzessu a sas funtziones de base de su sistema",
      ),
      __isarray: DocStr(
        "est_lista",
        "controllat si sa balore est una lista (array)",
      ),
      __isobject: DocStr("est_ogetu", "controllat si sa balore est un'ogetu"),
      __typeof: DocStr("tipu_de", "torrat su tipu de datus de sa variàbile"),
      __parse: DocStr(
        "analisat",
        "cunvertit unu testu in su tipu de datus giustu",
      ),
    },
    __math: {
      main: DocStr(
        "matemàtica",
        "atzessu a funtziones e costantes matemàticas",
      ),
      __pi: DocStr("PI", "su valore de sa costante Pi"),
      __sqrt: DocStr("raighina", "càlculat sa raighina quadrada"),
      __pow: DocStr("potentzia", "càlculat sa potentzia de unu nùmeru"),
      __round: DocStr("tundu", "arredondat unu nùmeru a su prus bighinu"),
      __random: DocStr("casu", "generat unu nùmeru casuale"),
      __max: DocStr("mannu", "torrat su valore prus mannu de una lista"),
      __min: DocStr("piticu", "torrat su valore prus piticu de una lista"),
      __isNumber: DocStr(
        "est_nùmeru",
        "controllat si sa balore est unu nùmeru",
      ),
      __isInteger: DocStr(
        "est_integu",
        "controllat si est unu nùmeru sena decimales",
      ),
      __isFloat: DocStr(
        "est_decimale",
        "controllat si su nùmeru tenet decimales",
      ),
      __cos: DocStr("cos", "càlculat su cosinu"),
      __sin: DocStr("sin", "càlculat su sinu"),
      __tan: DocStr("tan", "càlculat sa tangente"),
    },

    __string: {
      main: DocStr("cadena", "funtziones pro manipolare cadenas de testu"),
      __length: DocStr("longura", "torrat sa cantidade de caràteres"),
      __toUpperCase: DocStr(
        "maiuscule",
        "cunvertit su testu in lìteras mannas",
      ),
      __toLowerCase: DocStr(
        "minuscule",
        "cunvertit su testu in lìteras piticas",
      ),
      __include: DocStr(
        "cuntenet",
        "controllat si sa cadena cuntenet unu testu",
      ),
      __repeat: DocStr("ripete", "ripetet sa cadena pro unu totu de bortas"),
    },

    __date: {
      main: DocStr("data", "funtziones pro gestire data e ora"),
      __now: DocStr("ora_como", "torrat sa data e s'ora atuale"),
      __year: DocStr("annu", "torrat s'annu"),
      __month: DocStr("mese", "torrat su mese"),
      __dayMonth: DocStr("die_mese", "torrat sa die de su mese"),
      __dayWeek: DocStr("die_chida", "torrat sa die de sa chida"),
      __hour: DocStr("ora", "torrat s'ora"),
      __minute: DocStr("minutu", "torrat sos minutos"),
      __second: DocStr("segundu", "torrat sos segundos"),
    },
  },

  types: {
    __number: DocStr("nùmeru", "dechiaratziun de una variàbile numèrica"),
    __string: DocStr("cadena", "dechiaratziun de una variàbile de testu"),
    __boolean: DocStr("lògicu", "dechiaratziun de una variàbile bera o falsa"),
    __object: DocStr("ogetu", "dechiaratziun de un'ogetu istàticu"),
    __void: DocStr("bodu", "inditat chi una funtzione non torrat nudda"),
    __array: DocStr("lista", "dechiaratziun de una lista de elementos"),
  },

  specialValues: {
    __true: DocStr("beru", "valore lògicu de beritade"),
    __false: DocStr("falsu", "valore lògicu de falsidade"),
    __null: DocStr("nudda", "representat s'assèntzia de unu valore"),
  },

  words: {
    __new: DocStr("nou", "creat una istàntzia noa de una classe"),
    __this: DocStr("custu", "riferimentu a s'ogetu atuale"),
    __extends: DocStr("estendit", "inditat s'ereditade de una classe"),
  },

  accessModifiers: {
    __private: DocStr("privadu", "atzessìbile ebbia a intro de sa classe"),
    __public: DocStr("pùblicu", "atzessìbile dae totu sas partes"),
    __protected: DocStr(
      "protetu",
      "atzessìbile in sa classe e in sas suta-classes",
    ),
    __readonly: DocStr("solu_leghe", "su valore no podet èssere modificadu"),
    __static: DocStr("stàticu", "pertentet a sa classe, no a s'ogetu"),
  },

  methods: {
    method: {
      __print: DocStr("imprimi", "iscrit unu valore in s'ischermu"),
      __scan: DocStr("leghe", "leget datus dae s'utente"),
      __return: DocStr("torra", "torrat unu valore dae una funtzione"),
      __break: DocStr("interrumpe", "isfermat su ciclu atuale"),
      __continue: DocStr("sighit", "sartat a sa pròssima iteratzione"),
    },

    sentences: {
      __function: DocStr("funtzione", "dechiaratziun de una funtzione noa"),
      __if: DocStr("si", "istrutziune de conditziune"),
      __else: DocStr("sennon", "blocu si sa conditziune est falsa"),
      __while: DocStr("mentres", "ciclu finas a cando sa conditziune est bera"),
      __for: DocStr("pro", "ciclu cun nùmeru fissu de bortas"),
      __switch: DocStr(
        "iscioberu",
        "istrutziune pro isseberare optziones vàrias",
      ),
      __case: DocStr("casu", "unu casu ispetzìficu in s'iscioberu"),
      __default: DocStr("base", "esecutadu si nudda de sos casos est binu"),
      __try: DocStr("proa", "blocu pro gestire errores"),
      __catch: DocStr("piga", "gestione de s'errore agatadu"),
      __finally: DocStr("finale", "blocu esecutadu semper a sa fine"),
      __class: DocStr("classe", "dechiaratziun de una classe noa"),
      __constructor: DocStr(
        "costrutore",
        "funtzione pro dechiarare un'ogetu nou",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Messàgiu",
      "Valore",
      "Variàbile",
      "Propriedade",
      "Ogetu",
      "Isperadu",
      "Retzìvidu",
      "Assignadura_a_costante",
      "Paràmetru_duplicadu",
      "Cussìgiu",
      "Token_non_vàlidu",
      "Stack_overflow",
      "Token",
      "Fine_non_isperada_de_input",
    ),
    main: errorMessage("ERRORE", "errore de sistema generale"),
    __TypeError: errorMessage(
      "ERRORE_TIPU",
      "tipu de datus non vàlidu pro s'operatzione",
    ),
    __InitError: errorMessage(
      "ERRORE_INITZIALITZATZIUNE",
      "sa variàbile no est istada initzialitzada",
    ),
    __ReferenceError: errorMessage(
      "ERRORE_RIFERIMENTU",
      "riferimentu a una variàbile chi no esistit",
    ),
    __SyntaxError: errorMessage(
      "ERRORE_SINTASSI",
      "errore de sintassi in su còdice",
    ),
    __RangeError: errorMessage(
      "ERRORE_INTERVALLU",
      "valore fora de sos lìmites",
    ),
    __URIError: errorMessage("ERRORE_URI", "formadu URI non vàlidu"),
    __EvalError: errorMessage("ERRORE_EVAL", "errore in sa funtzione eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERRORE_NON_ISCHIDU",
      "un'errore inconnotu est capitadu",
    ),
  },

  example: {
    __array: [
      "pitzas",
      "comunas",
      "lista_nùmeros",
      "nùmeros",
      "colores",
      "produtos",
      "utentes",
      "categorìas",
      "puntos",
      "limbas",
    ],
    __boolean: [
      "istadu",
      "est_ativu",
      "podet_impreare",
      "est_prontu",
      "autorizadu",
      "conetadu",
      "in_cursu",
      "completadu",
      "verificadu",
      "cantzelladu",
    ],
    __function: [
      "pigaNùmeru",
      "càlculaValore",
      "mostraDatus",
      "atziornaPerfilu",
      "formataTestu",
      "analisaCòdice",
      "controllaDatus",
      "sarbaDocumentu",
      "mandaMessàgiu",
      "summaTotu",
    ],
    __number: [
      "edade",
      "annu_nàschida",
      "mèdia",
      "totale",
      "pretu",
      "ìnditze",
      "tempus",
      "cantidade",
      "puntegiu",
      "ora",
    ],
    __object: [
      "persona",
      "cliente",
      "impostatziones",
      "risposta",
      "pajamentu",
      "cunfiguratzione",
      "perfilu",
      "indiritzu",
      "metadatus",
      "sessìone",
    ],
    __string: [
      "nùmene",
      "tìtulu",
      "descritziune",
      "posta",
      "fraziga",
      "messàgiu",
      "eticheta",
      "ciae",
      "url",
      "collegamentu",
    ],
    __void: [
      "andat",
      "cantzella",
      "firma",
      "pulit",
      "distruet",
      "essida",
      "isboda_buffer",
      "sarba_totu",
      "manda",
      "entra",
    ],
  },
}).grammar();
