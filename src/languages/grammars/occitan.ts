import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const occitan = new Language({
  language: "occitan",
  about:
    "ENIDE es un transpilador traducible que permet de programar en quina que siá lenga",

  include: DocStr(
    "inclure",
    "s'utiliza per inclure de lengatges, de bibliotècas o de moduls",
  ),

  commands: {
    __about: DocStr("sus", "per obténer d'informacions sus ENIDE"),
    __help: DocStr("ajuda", "per obténer la lista de las comandas disponiblas"),
    __version: DocStr("version", "per obténer la version actuala d'ENIDE"),
    __languages: DocStr(
      "lengas",
      "per obténer la lista de las lengas disponiblas",
    ),
    __documentation: DocStr("doc", "per obténer la documentacion de la lenga"),
    __grammar: DocStr("gramatica", "per obténer las règlas gramaticalas"),
  },

  library: {
    __standard: {
      main: DocStr("estandard", "accés a las foncions de basa del sistèma"),
      __isarray: DocStr("es_lista", "verificas se la valor es una lista"),
      __isobject: DocStr("es_objecte", "verifica se la valor es un objecte"),
      __typeof: DocStr("tipe_de", "retorna lo tipe de la variabla"),
      __parse: DocStr(
        "analisar",
        "convertís una cadena al tipe de dada correspondent",
      ),
    },
    __math: {
      main: DocStr("matematicas", "per accedir a las foncions matematicas"),
      __pi: DocStr("PI", "obten la valor de pi"),
      __sqrt: DocStr("racina_quadrada", "obten la racina quadrada d'un nombre"),
      __pow: DocStr("potença", "obten la potença d'un nombre"),
      __round: DocStr(
        "arredondir",
        "arredondís un nombre a l'entièr mai pròche",
      ),
      __random: DocStr("aleatòri", "obten un nombre aleatòri"),
      __max: DocStr("maximum", "obten la valor maxima d'una lista"),
      __min: DocStr("minimum", "obten la valor minima d'una lista"),
      __isNumber: DocStr("es_nombre", "verifica se la valor es un nombre"),
      __isInteger: DocStr(
        "es_entièr",
        "verifica se la valor es un nombre entièr",
      ),
      __isFloat: DocStr(
        "es_decimal",
        "verifica se la valor es un nombre decimal",
      ),
      __cos: DocStr("cos", "calcula lo cosinus"),
      __sin: DocStr("sin", "calcula lo sinus"),
      __tan: DocStr("tan", "calcula la tangenta"),
    },

    __string: {
      main: DocStr(
        "cadena",
        "foncions de manipulacion de cadenas de caractèrs",
      ),
      __length: DocStr("longor", "obten la longor d'una cadena"),
      __toUpperCase: DocStr(
        "a_majusculas",
        "convertís una cadena en majusculas",
      ),
      __toLowerCase: DocStr(
        "a_minusculas",
        "convertís una cadena en minusculas",
      ),
      __include: DocStr("contèn", "verifica se la cadena contèn una soscadena"),
      __repeat: DocStr("repetir", "repetís la cadena un nombre de còps donat"),
    },

    __date: {
      main: DocStr("data", "foncions de data e d'ora"),
      __now: DocStr("ara", "obten la data e l'ora actualas"),
      __year: DocStr("an", "obten l'an actual"),
      __month: DocStr("mes", "obten lo mes actual"),
      __dayMonth: DocStr("jorn_mes", "obten lo jorn del mes"),
      __dayWeek: DocStr("jorn_setmana", "obten lo jorn de la setmana"),
      __hour: DocStr("ora", "obten l'ora"),
      __minute: DocStr("minuta", "obten la minuta"),
      __second: DocStr("segonda", "obten la segonda"),
    },
  },

  types: {
    __number: DocStr("nombre", "declaracion d'una variabla numerica"),
    __string: DocStr("cadena", "declaracion d'una variabla de tèxte"),
    __boolean: DocStr(
      "bool",
      "declaracion d'una variabla logica (vertat/fals)",
    ),
    __object: DocStr("objecte", "declaracion d'una estructura d'objecte"),
    __void: DocStr("void", "indica qu'una foncion retorna pas cap de valor"),
    __array: DocStr("lista", "declaracion d'una estructura de lista"),
  },

  specialValues: {
    __true: DocStr("vertat", "valor logica positiva"),
    __false: DocStr("fals", "valor logica negativa"),
    __null: DocStr("nul", "abséncia de valor"),
  },

  words: {
    __new: DocStr("nòu", "crea una instància nòva d'una classa"),
    __this: DocStr("aquò", "referéncia a l'instància actuala"),
    __extends: DocStr("ereta", "indica qu'una classa ereta d'una autra"),
  },

  accessModifiers: {
    __private: DocStr("privat", "accessible solament dins la classa"),
    __public: DocStr("public", "accessible de pertot"),
    __protected: DocStr(
      "protegit",
      "accessible dins la classa e sas sosclassas",
    ),
    __readonly: DocStr("lectura_sola", "la valor pòt pas èsser modificada"),
    __static: DocStr("estatic", "aperten a la classa e non a l'instància"),
  },

  methods: {
    method: {
      __print: DocStr("imprimir", "imprimís una valor sus l'ecran"),
      __scan: DocStr("legir", "legís una valor de l'entrada de l'utilizaire"),
      __return: DocStr("retornar", "retorna una valor d'una foncion"),
      __break: DocStr("rompre", "sortís d'un bocle o d'un blòc"),
      __continue: DocStr("contunhar", "passa a l'iteracion seguenta del bocle"),
    },

    sentences: {
      __function: DocStr("foncion", "declaracion d'una foncion"),
      __if: DocStr("se", "declaracion d'una condicion"),
      __else: DocStr("sinon", "blòc alternatiu d'una condicion"),
      __while: DocStr("mentre", "bocle basat sus una condicion"),
      __for: DocStr("per", "bocle basat sus un comptador"),
      __switch: DocStr("seleccion", "estructura de seleccion multiple"),
      __case: DocStr("cas", "un cas especific dins una seleccion"),
      __default: DocStr("defaut", "cas executat se cap d'autre correspond pas"),
      __try: DocStr("ensajar", "començament d'un blòc de gestion d'errors"),
      __catch: DocStr("capturar", "gestion de l'error capturada"),
      __finally: DocStr("finalament", "blòc que s'executa totjorn a la fin"),
      __class: DocStr("classa", "declaracion d'una classa nòva"),
      __constructor: DocStr(
        "constructor",
        "foncion d'inicializacion d'una classa",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Messatge",
      "Valor",
      "Variabla",
      "Proprietat",
      "Objecte",
      "Esperat",
      "Recebut",
      "Assignacion_a_constanta",
      "Paramètre_duplicat",
      "Pista",
      "Token_invalid",
      "Desbordament_pila",
      "Token",
      "Fin_inesperada_entrada",
    ),
    main: errorMessage("ERROR", "error generic del sistèma"),
    __TypeError: errorMessage("ERROR_TIPE", "tipe invalid dins l'operacion"),
    __InitError: errorMessage(
      "ERROR_INICIALIZACION",
      "la variabla es pas estada inicializada",
    ),
    __ReferenceError: errorMessage(
      "ERROR_REFERENCIA",
      "la variabla existís pas dins l'ambit",
    ),
    __SyntaxError: errorMessage(
      "ERROR_SINTAXI",
      "còdi invalid o error de sintaxi",
    ),
    __RangeError: errorMessage(
      "ERROR_INTERVAL",
      "valor fòra de l'interval permés",
    ),
    __URIError: errorMessage("ERROR_URI", "URI malformat o invalid"),
    __EvalError: errorMessage("ERROR_EVAL", "error ligat a la foncion eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERROR_DESCONEGUT",
      "error completament desconegut",
    ),
  },

  example: {
    __array: [
      "manjar",
      "país",
      "lista_noms",
      "nombres",
      "colors",
      "produits",
      "utilizaires",
      "categorias",
      "punts",
      "lengas",
    ],
    __boolean: [
      "estat",
      "es_actiu",
      "pòt_usar",
      "es_prèst",
      "autorizat",
      "connectat",
      "en_cors",
      "finit",
      "verificat",
      "suprimit",
    ],
    __function: [
      "obténerNom",
      "calcularValor",
      "mostrarDada",
      "actualizarPerfil",
      "formatarTèxte",
      "analisarCòdi",
      "verificarEntrada",
      "salvarFichièr",
      "enviarMessatge",
      "somarTot",
    ],
    __number: [
      "edat",
      "an_naissença",
      "mejana",
      "total",
      "prètz",
      "indèx",
      "temps",
      "quantitat",
      "escore",
      "ora",
    ],
    __object: [
      "persona",
      "client",
      "configuracion",
      "respònsa",
      "pagament",
      "ajustaments",
      "perfil",
      "adreça",
      "metadonada",
      "session",
    ],
    __string: [
      "nom",
      "títol",
      "descripcion",
      "corrièl",
      "senhal",
      "messatge",
      "etiqueta",
      "clau",
      "url",
      "ligam",
    ],
    __void: [
      "començar",
      "suprimir",
      "arrestar",
      "netejar",
      "destruire",
      "sortir",
      "voidar_escondedor",
      "salvar_tot",
      "enviar",
      "entrar",
    ],
  },
}).grammar();
