import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const catala = new Language({
  language: "catala",
  about:
    "ENIDE és un transpilador traduïble que permet programar en qualsevol llengua",

  include: DocStr(
    "Incloure",
    "S'utilitza per incloure llenguatge o biblioteques",
  ),

  commands: {
    __about: DocStr("sobre", "per obtenir informació sobre ENIDE"),
    __help: DocStr(
      "ajuda",
      "per obtenir la llista de totes les ordres disponibles",
    ),
    __version: DocStr("versió", "per obtenir la versió actual de ENIDE"),
    __languages: DocStr(
      "llengües",
      "per obtenir la llista de totes les llengües disponibles",
    ),
    __documentation: DocStr("doc", "per obtenir la documentació d'una llengua"),
    __grammar: DocStr("gramàtica", "per obtenir la gramàtica d'una llengua"),
  },

  library: {
    __standard: {
      main: DocStr("estàndard", "per accedir als mètodes estàndard útils"),
      __isarray: DocStr("ÉsMatriu", "per verificar si un valor és una matriu"),
      __isobject: DocStr(
        "ÉsObjecte",
        "per verificar si un valor és un objecte",
      ),
      __typeof: DocStr("Tipus", "per obtenir el tipus d'un valor"),
      __parse: DocStr(
        "Parse",
        "per analitzar un valor de cadena al seu valor analitzat correcte",
      ),
    },

    __math: {
      main: DocStr("matemàtiques", "per accedir a les funcions matemàtiques"),
      __pi: DocStr("PI", "per obtenir el valor de pi"),
      __sqrt: DocStr("ArrelQuadrada", "per obtenir l'arrel quadrada"),
      __pow: DocStr("Potència", "per obtenir la potència d'un nombre"),
      __round: DocStr("Arrodoneix", "per arrodonir un nombre"),
      __random: DocStr("Aleatori", "per obtenir un nombre aleatori"),
      __max: DocStr("Màxim", "per obtenir el valor màxim"),
      __min: DocStr("Mínim", "per obtenir el valor mínim"),
      __isNumber: DocStr("ÉsNombre", "per verificar si un valor és un nombre"),
      __isInteger: DocStr("ÉsEnter", "per verificar si un valor és un enter"),
      __isFloat: DocStr("ÉsDecimal", "per verificar si un valor és un decimal"),
      __cos: DocStr("Cos", "per obtenir el cosinus d'un angle en radians"),
      __sin: DocStr("Sin", "per obtenir el sinus d'un angle en radians"),
      __tan: DocStr("Tan", "per obtenir la tangent d'un angle en radians"),
    },

    __string: {
      main: DocStr(
        "cadena",
        "per accedir a les funcions de manipulació de cadenes",
      ),
      __length: DocStr("Longitud", "per obtenir la longitud d'una cadena"),
      __toUpperCase: DocStr(
        "AMajúscules",
        "per convertir una cadena a majúscules",
      ),
      __toLowerCase: DocStr(
        "AMinúscules",
        "per convertir una cadena a minúscules",
      ),
      __include: DocStr(
        "Conté",
        "per verificar si una cadena conté una subcadena",
      ),
      __repeat: DocStr(
        "Repeteix",
        "per repetir una cadena un nombre de vegades",
      ),
    },

    __date: {
      main: DocStr("data", "per accedir a les funcions de data i hora"),
      __now: DocStr("Ara", "per obtenir la data i hora actuals"),
      __year: DocStr("Any", "per obtenir l'any"),
      __month: DocStr("Mes", "per obtenir el mes"),
      __dayMonth: DocStr("DiaMes", "per obtenir el dia del mes"),
      __dayWeek: DocStr("DiaSetmana", "per obtenir el dia de la setmana"),
      __hour: DocStr("Hora", "per obtenir l'hora"),
      __minute: DocStr("Minut", "per obtenir el minut"),
      __second: DocStr("Segon", "per obtenir el segon"),
    },
  },

  types: {
    __number: DocStr("nombre", "per declarar una variable de tipus nombre"),
    __string: DocStr("cadena", "per declarar una variable de tipus cadena"),
    __boolean: DocStr("bool", "per declarar una variable de tipus booleà"),
    __object: DocStr("objecte", "per declarar un objecte estàtic"),
    __void: DocStr("buit", "per declarar una funció que no retorna cap valor"),
    __array: DocStr("matriu", "per declarar una estructura de dades en matriu"),
  },

  specialValues: {
    __true: DocStr("Verdader", "valor booleà vertader"),
    __false: DocStr("Fals", "valor booleà fals"),
    __null: DocStr("nul", "absència de valor"),
  },

  words: {
    __new: DocStr("nou", "per crear una nova instància d'una classe"),
    __this: DocStr("açò", "per accedir als atributs de la pròpia classe"),
    __extends: DocStr(
      "estén",
      "per declarar que una classe hereta d'una altra",
    ),
  },

  accessModifiers: {
    __private: DocStr("privat", "accessible només dins de la classe"),
    __public: DocStr("públic", "accessible des de qualsevol lloc"),
    __protected: DocStr(
      "protegit",
      "accessible dins de la classe i les seves subclasses",
    ),
    __readonly: DocStr(
      "només_lectura",
      "el valor només es pot assignar una vegada",
    ),
    __static: DocStr("estàtic", "pertany a la classe, no a les instàncies"),
  },

  methods: {
    method: {
      __print: DocStr("imprimeix", "per imprimir un valor a la pantalla"),
      __scan: DocStr("llegeix", "per llegir un valor de l'entrada"),
      __return: DocStr("retorna", "per retornar un valor d'una funció"),
      __break: DocStr("trenca", "per sortir d'un bucle"),
      __continue: DocStr(
        "continua",
        "per saltar a la següent iteració d'un bucle",
      ),
    },

    sentences: {
      __function: DocStr("funció", "per declarar una funció"),
      __if: DocStr("si", "per declarar una condició"),
      __else: DocStr("sinó", "per declarar una condició alternativa"),
      __while: DocStr("mentre", "per declarar un bucle mentre"),
      __for: DocStr("per", "per declarar un bucle per"),
      __switch: DocStr("selecció", "per declarar una estructura de selecció"),
      __case: DocStr("cas", "per declarar un cas en l'estructura de selecció"),
      __default: DocStr(
        "defecte",
        "per declarar el cas per defecte en l'estructura de selecció",
      ),
      __try: DocStr("intenta", "per declarar un bloc intenta"),
      __catch: DocStr("captura", "per declarar un bloc de gestió d'errors"),
      __finally: DocStr(
        "finalment",
        "per declarar un bloc que s'executa sempre",
      ),
      __class: DocStr("classe", "per declarar una classe"),
      __constructor: DocStr(
        "constructor",
        "estructura per declarar atributs en una classe",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Missatge",
      "Valor",
      "Variable",
      "Propietat",
      "Objecte",
      "Esperat",
      "Rebut",
      "Assignació_Constant",
      "Paràmetre_Duplicat",
      "Suggeriment",
      "Token_Invàlid",
      "Desbordament_Pila",
      "Token",
      "Fi_Inesperat",
    ),
    main: errorMessage("ERROR", "error genèric del sistema"),
    __TypeError: errorMessage("ERROR_TIPUS", "tipus invàlid en l'operació"),
    __InitError: errorMessage(
      "ERROR_INICIALITZACIÓ",
      "la variable no ha estat inicialitzada",
    ),
    __ReferenceError: errorMessage(
      "ERROR_REFERÈNCIA",
      "la variable, funció o biblioteca no existeix en l'àmbit",
    ),
    __SyntaxError: errorMessage("ERROR_SINTAXI", "codi invàlid"),
    __RangeError: errorMessage("ERROR_RANG", "valor fora del rang permès"),
    __URIError: errorMessage("ERROR_URI", "URI malformat o invàlid"),
    __EvalError: errorMessage("ERROR_EVAL", "error relacionat amb eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERROR_DESCONEGUT",
      "error completament desconegut",
    ),
  },

  example: {
    __array: [
      "aliments",
      "països",
      "elements",
      "tags",
      "colors",
      "productes",
      "usuaris",
      "categories",
      "puntuacions",
      "llengües",
    ],
    __boolean: [
      "estat",
      "ésAdult",
      "ésActiu",
      "ésVisible",
      "téPermís",
      "haIniciatSessió",
      "estàHabilitat",
      "estàFet",
      "estàVerificat",
      "estàEsborrat",
    ],
    __function: [
      "obtenirNom",
      "obtenirValor",
      "gestionarClic",
      "obtindreData",
      "formatarData",
      "analitzarEntrada",
      "validarFormulari",
      "renderitzarElement",
      "actualitzarEstat",
      "calcularTotal",
    ],
    __number: [
      "edat",
      "any",
      "comptador",
      "total",
      "preu",
      "índex",
      "durada",
      "quantitat",
      "puntuació",
      "timeout",
    ],
    __object: [
      "persona",
      "usuari",
      "config",
      "resposta",
      "pagament",
      "configuració",
      "perfil",
      "adreça",
      "metadades",
      "sessió",
    ],
    __string: [
      "nom",
      "títol",
      "descripció",
      "email",
      "contrasenya",
      "missatge",
      "etiqueta",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "iniciarSessió",
      "inicialitzar",
      "netejar",
      "reiniciar",
      "destruir",
      "tancarSessió",
      "buidarCache",
      "desarABD",
      "enviarEmail",
      "registrarEsdeveniment",
    ],
  },
}).grammar();
