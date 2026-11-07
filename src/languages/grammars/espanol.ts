import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabels } from "../utils/stucture.grammar.js";

export const espanol = new Language({
  language: "español",
  about:
    "ENIDE es un lenguaje de programación multilingüe que te permite programar en cualquier idioma.",
  include: DocStr("Incluir", "Se utiliza para incluir lenguajes o bibliotecas"),

  commands: {
    __about: DocStr("acerca", "para obtener información sobre ENIDE"),
    __help: DocStr(
      "ayuda",
      "para obtener la lista de todos los comandos disponibles",
    ),
    __version: DocStr("versión", "para obtener la versión actual de ENIDE"),
    __languages: DocStr(
      "idiomas",
      "para obtener la lista de todos los idiomas disponibles",
    ),
    __documentation: DocStr(
      "doc",
      "para obtener la documentación de un idioma",
    ),
    __grammar: DocStr("gramática", "para obtener la gramática de un idioma"),
  },

  library: {
    __standard: {
      main: DocStr("estándar", "para acceder a los métodos estándar útiles"),
      __isarray: DocStr(
        "EsArreglo",
        "para verificar si un valor es un arreglo",
      ),
      __isobject: DocStr("EsObjeto", "para verificar si un valor es un objeto"),
      __typeof: DocStr("Tipo", "para obtener el tipo de un valor"),
      __parse: DocStr(
        "Parse",
        "para analizar un valor de cadena a su valor analizado correcto",
      ),
    },

    __math: {
      main: DocStr("matemática", "para acceder a las funciones matemáticas"),
      __pi: DocStr("PI", "para obtener el valor de pi"),
      __sqrt: DocStr("RaízCuadrada", "para obtener la raíz cuadrada"),
      __pow: DocStr("Potencia", "para obtener la potencia de un número"),
      __round: DocStr("Redondear", "para redondear un número"),
      __random: DocStr("Aleatorio", "para obtener un número aleatorio"),
      __max: DocStr("Máximo", "para obtener el valor máximo"),
      __min: DocStr("Mínimo", "para obtener el valor mínimo"),
      __isNumber: DocStr("EsNúmero", "para verificar si un valor es un número"),
      __isInteger: DocStr(
        "EsEntero",
        "para verificar si un valor es un entero",
      ),
      __isFloat: DocStr(
        "EsDecimal",
        "para verificar si un valor es un decimal",
      ),
      __cos: DocStr("Cos", "para obtener el coseno de un ángulo en radianes"),
      __sin: DocStr("Sin", "para obtener el seno de un ángulo en radianes"),
      __tan: DocStr("Tan", "para obtener la tangente de un ángulo en radianes"),
    },

    __string: {
      main: DocStr(
        "cadena",
        "para acceder a las funciones de manipulación de cadenas",
      ),
      __length: DocStr("Longitud", "para obtener la longitud de una cadena"),
      __toUpperCase: DocStr(
        "AMayúsculas",
        "para convertir una cadena a mayúsculas",
      ),
      __toLowerCase: DocStr(
        "AMinúsculas",
        "para convertir una cadena a minúsculas",
      ),
      __include: DocStr(
        "Contiene",
        "para verificar si una cadena contiene una subcadena",
      ),
      __repeat: DocStr("Repetir", "para repetir una cadena un número de veces"),
    },

    __date: {
      main: DocStr("fecha", "para acceder a las funciones de fecha y hora"),
      __now: DocStr("Ahora", "para obtener la fecha y hora actuales"),
      __year: DocStr("Año", "para obtener el año"),
      __month: DocStr("Mes", "para obtener el mes"),
      __dayMonth: DocStr("DiaMes", "para obtener el día del mes"),
      __dayWeek: DocStr("DiaSemana", "para obtener el día de la semana"),
      __hour: DocStr("Hora", "para obtener la hora"),
      __minute: DocStr("Minuto", "para obtener el minuto"),
      __second: DocStr("Segundo", "para obtener el segundo"),
      __milliseconds: DocStr("Milisegundos", "para obtener los milisegundos"),
    },

    __array: {
      main: DocStr(
        "arreglo",
        "para acceder a las funciones de manipulación de arreglos",
      ),
      __addStart: DocStr(
        "AgregarInicio",
        "Inserta nuevos elementos al inicio de un arreglo y devuelve la nueva longitud del arreglo.",
      ),
      __addEnd: DocStr(
        "AgregarFinal",
        "Agrega nuevos elementos al final de un arreglo",
      ),
      __join: DocStr(
        "Unir",
        "Une todos los elementos de un arreglo en una cadena, separados por la cadena separadora especificada, y devuelve la cadena resultante.",
      ),
      __length: DocStr(
        "loLongitudArreg",
        "Obtiene o establece la longitud del arreglo",
      ),
    },

    __time: {
      main: DocStr(
        "tiempo",
        "para acceder a las funciones de tiempo para programar la ejecución de código",
      ),
      __timeOut: DocStr(
        "Retraso",
        "ejecuta una función una vez después de un retraso específico en milisegundos",
      ),
      __timeInterval: DocStr(
        "Intervalo",
        "ejecuta una función repetidamente a intervalos de tiempo fijos en milisegundos",
      ),
    },
  },

  types: {
    __number: DocStr("número", "para declarar una variable de tipo número"),
    __string: DocStr("cadena", "para declarar una variable de tipo cadena"),
    __boolean: DocStr("bool", "para declarar una variable de tipo booleano"),
    __object: DocStr("objeto", "para declarar un objeto estático"),
    __void: DocStr("vacío", "para declarar una función que no retorna valor"),
    __array: DocStr(
      "arreglo",
      "para declarar una estructura de datos en arreglo",
    ),
  },

  specialValues: {
    __true: DocStr("Verdadero", "valor booleano verdadero"),
    __false: DocStr("Falso", "valor booleano falso"),
    __null: DocStr("nulo", "ausencia de valor"),
  },

  words: {
    __new: DocStr("nuevo", "para crear una nueva instancia de una clase"),
    __this: DocStr("esto", "para acceder a atributos de la propia clase"),
    __extends: DocStr("extiende", "para declarar que una clase hereda de otra"),
  },

  accessModifiers: {
    __private: DocStr("privado", "accesible solo dentro de la clase"),
    __public: DocStr("público", "accesible desde cualquier lugar"),
    __protected: DocStr(
      "protegido",
      "accesible dentro de la clase y sus subclases",
    ),
    __readonly: DocStr("solo_lectura", "el valor solo puede asignarse una vez"),
    __static: DocStr("estático", "pertenece a la clase, no a las instancias"),
  },

  methods: {
    method: {
      __print: DocStr("escribir", "para escribir un valor en la pantalla"),
      __clear: DocStr("limpio", "para vaciar la pantalla"),
      __scan: DocStr("leer", "para leer un valor de la entrada"),
      __return: DocStr("retornar", "para retornar un valor de una función"),
      __break: DocStr("romper", "para salir de un bucle"),
      __continue: DocStr(
        "continuar",
        "para saltar a la siguiente iteración del bucle",
      ),
    },

    sentences: {
      __function: DocStr("función", "para declarar una función"),
      __if: DocStr("si", "para declarar una condición"),
      __else: DocStr("sino", "para declarar una condición alternativa"),
      __while: DocStr("mientras", "para declarar un bucle mientras"),
      __for: DocStr("para", "para declarar un bucle para"),
      __switch: DocStr(
        "selección",
        "para declarar una estructura de selección",
      ),
      __case: DocStr(
        "caso",
        "para declarar un caso en la estructura de selección",
      ),
      __default: DocStr(
        "predeterminado",
        "para declarar el caso predeterminado en la estructura de selección",
      ),
      __try: DocStr("intentar", "para declarar un bloque intentar"),
      __catch: DocStr(
        "capturar",
        "para declarar un bloque de manejo de errores",
      ),
      __finally: DocStr(
        "finalmente",
        "para declarar un bloque que se ejecuta siempre",
      ),
      __class: DocStr("clase", "para declarar una clase"),
      __constructor: DocStr(
        "constructor",
        "estructura para declarar atributos en una clase",
      ),
    },
  },

  errors: {
    __labels: errorLabels({
      message: "Mensaje",
      value: "Valor",
      variable: "Variable",
      property: "Propiedad",
      object: "Objeto",
      expected: "Esperado",
      received: "Recibido",
      constAssignment: "Asignación_Constante",
      duplicateParam: "Parámetro_Duplicado",
      hint: "Sugerencia",
      invalidToken: "Token_Inválido",
      stackOverflow: "Desbordamiento_Pila",
      token: "Token",
      unexpectedEnd: "Fin_Inesperado",
      file: "archivo",
      didYouMean: "quisiste decir",
      includedFrom: "incluido desde",
      size: "tamaño",
      index: "índice",
      path: "ruta",
      available: "disponibles",
      element: "elemento",
      hintMissingEquals: "falta el \"=\" entre el nombre y el valor",
      hintMissingSemicolon: "falta \";\" antes de esta instrucción",
      hintUnclosedBlock: "la \"{\" abierta en la línea {line} nunca se cierra con \"}\"",
      hintUnclosedBracket: "el \"[\" abierto en la línea {line} nunca se cierra con \"]\"",
      hintUnclosedComment: "el comentario abierto en la línea {line} nunca se cierra con */",
      hintUnclosedString: "al texto abierto en la línea {line} le falta la comilla de cierre",
      hintModuleNotFound: "módulo no encontrado; se buscó en \"{path}\"",
      hintLibraryUnknown: "biblioteca desconocida; disponibles: {list}",
      hintIndexRange: "el arreglo tiene tamaño {size}; índices válidos: {range}",
      hintIndexEmpty: "el arreglo está vacío, por lo que no tiene índices válidos",
      hintNotArray: "el valor no es un arreglo",
      hintNull: "no se proporcionó ningún valor (nulo o indefinido)",
      hintNaN: "el número no es válido (NaN)",
      hintInfinite: "el número es infinito",
      hintNoInput: "el programa pidió una entrada pero la entrada terminó",
      hintInternal: "esto parece un error interno de Enide, no un fallo de tu programa; por favor repórtalo",
      hintDuplicateProperty: "la propiedad \"{name}\" está declarada más de una vez",
      hintMissingProperty: "la propiedad \"{name}\" no existe",
      hintArrayMixed: "un arreglo no puede mezclar arreglos y valores simples",
      hintArrayEmpty: "un arreglo necesita al menos un valor",
      hintObjectArrayShape: "el elemento {index} no coincide con el primero: revisa la propiedad \"{name}\"",
      hintLoopCounter: "el contador del ciclo debe ser un número",
      hintErrorsFound: "{count} errores encontrados",
    }),
    main: errorMessage("ERROR", "error genérico del sistema"),
    __TypeError: errorMessage("ERROR_TIPO", "tipo inválido en la operación"),
    __InitError: errorMessage(
      "ERROR_INICIALIZACIÓN",
      "la variable no ha sido inicializada",
    ),
    __ReferenceError: errorMessage(
      "ERROR_REFERENCIA",
      "la variable, función o biblioteca no existe en el scope",
    ),
    __SyntaxError: errorMessage("ERROR_SINTAXIS", "código inválido"),
    __RangeError: errorMessage("ERROR_RANGO", "valor fuera del rango permitido"),
    __URIError: errorMessage("ERROR_URI", "URI mal formada o inválida"),
    __EvalError: errorMessage("ERROR_EVAL", "error relacionado con eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERROR_DESCONOCIDO",
      "error completamente desconocido",
    ),
  },

  example: {
    __array: [
      "alimentos",
      "países",
      "elementos",
      "tags",
      "colores",
      "productos",
      "usuarios",
      "categorías",
      "puntuaciones",
      "idiomas",
    ],
    __boolean: [
      "estado",
      "esAdulto",
      "esActivo",
      "esVisible",
      "tienePermiso",
      "haIniciadoSesión",
      "estáHabilitado",
      "estáListo",
      "estáVerificado",
      "estáEliminado",
    ],
    __function: [
      "obtenerNombre",
      "obtenerValor",
      "manejarClic",
      "obtenerDatos",
      "formatearFecha",
      "analizarEntrada",
      "validarFormulario",
      "renderizarElemento",
      "actualizarEstado",
      "calcularTotal",
    ],
    __number: [
      "edad",
      "año",
      "contador",
      "total",
      "precio",
      "índice",
      "duración",
      "cantidad",
      "puntuación",
      "timeout",
    ],
    __object: [
      "persona",
      "usuario",
      "config",
      "respuesta",
      "pago",
      "configuración",
      "perfil",
      "dirección",
      "metadatos",
      "sesión",
    ],
    __string: [
      "nombre",
      "título",
      "descripción",
      "email",
      "contraseña",
      "mensaje",
      "etiqueta",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "iniciarSesión",
      "inicializar",
      "limpiar",
      "reiniciar",
      "destruir",
      "cerrarSesión",
      "vaciarCache",
      "guardarEnBD",
      "enviarEmail",
      "registrarEvento",
    ],
  },
}).grammar();
