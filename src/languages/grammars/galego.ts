import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const galego = new Language({
  language: "galego",
  about:
    "ENIDE é un transpilador traducible que permite programar en calquera lingua",

  include: DocStr("Incluír", "Úsase para incluír linguaxes ou bibliotecas"),

  commands: {
    __about: DocStr("sobre", "para obter información sobre ENIDE"),
    __help: DocStr(
      "axuda",
      "para obter a lista de todos os comandos dispoñibles",
    ),
    __version: DocStr("versión", "para obter a versión actual de ENIDE"),
    __languages: DocStr(
      "linguas",
      "para obter a lista de todas as linguas dispoñibles",
    ),
    __documentation: DocStr("doc", "para obter a documentación dunha lingua"),
    __grammar: DocStr("gramática", "para obter a gramática dunha lingua"),
  },

  library: {
    __standard: {
      main: DocStr("estándar", "para acceder aos métodos estándar útiles"),
      __isarray: DocStr("ÉArray", "para verificar se un valor é un array"),
      __isobject: DocStr("ÉObxecto", "para verificar se un valor é un obxecto"),
      __typeof: DocStr("Tipo", "para obter o tipo dun valor"),
      __parse: DocStr(
        "Parse",
        "para analizar un valor de cadea ao seu valor analizado correcto",
      ),
    },

    __math: {
      main: DocStr("matemáticas", "para acceder ás funcións matemáticas"),
      __pi: DocStr("PI", "para obter o valor de pi"),
      __sqrt: DocStr("RaízCadrada", "para obter a raíz cadrada"),
      __pow: DocStr("Potencia", "para obter a potencia dun número"),
      __round: DocStr("Redondear", "para redondear un número"),
      __random: DocStr("Aleatorio", "para obter un número aleatorio"),
      __max: DocStr("Máximo", "para obter o valor máximo"),
      __min: DocStr("Mínimo", "para obter o valor mínimo"),
      __isNumber: DocStr("ÉNúmero", "para verificar se un valor é un número"),
      __isInteger: DocStr(
        "ÉEnteiro",
        "para verificar se un valor é un enteiro",
      ),
      __isFloat: DocStr("ÉDecimal", "para verificar se un valor é un decimal"),
      __cos: DocStr("Cos", "para obter o coseno dun ángulo en radiáns"),
      __sin: DocStr("Sin", "para obter o seno dun ángulo en radiáns"),
      __tan: DocStr("Tan", "para obter a tanxente dun ángulo en radiáns"),
    },

    __string: {
      main: DocStr(
        "cadea",
        "para acceder ás funcións de manipulación de cadeas",
      ),
      __length: DocStr("Lonxitude", "para obter a lonxitude dunha cadea"),
      __toUpperCase: DocStr(
        "AMaiúsculas",
        "para converter unha cadea a maiúsculas",
      ),
      __toLowerCase: DocStr(
        "AMinúsculas",
        "para converter unha cadea a minúsculas",
      ),
      __include: DocStr(
        "Contén",
        "para verificar se unha cadea contén unha subcadea",
      ),
      __repeat: DocStr("Repetir", "para repetir unha cadea un número de veces"),
    },

    __date: {
      main: DocStr("data", "para acceder ás funcións de data e hora"),
      __now: DocStr("Agora", "para obter a data e hora actuais"),
      __year: DocStr("Ano", "para obter o ano"),
      __month: DocStr("Mes", "para obter o mes"),
      __dayMonth: DocStr("DiaMes", "para obter o día do mes"),
      __dayWeek: DocStr("DiaSemana", "para obter o día da semana"),
      __hour: DocStr("Hora", "para obter a hora"),
      __minute: DocStr("Minuto", "para obter o minuto"),
      __second: DocStr("Segundo", "para obter o segundo"),
    },
  },

  types: {
    __number: DocStr("número", "para declarar unha variable de tipo número"),
    __string: DocStr("cadea", "para declarar unha variable de tipo cadea"),
    __boolean: DocStr("bool", "para declarar unha variable de tipo booleano"),
    __object: DocStr("obxecto", "para declarar un obxecto estático"),
    __void: DocStr(
      "baleiro",
      "para declarar unha función que non retorna valor",
    ),
    __array: DocStr("array", "para declarar unha estrutura de datos en array"),
  },

  specialValues: {
    __true: DocStr("Verdadeiro", "valor booleano verdadeiro"),
    __false: DocStr("Falso", "valor booleano falso"),
    __null: DocStr("nulo", "ausencia de valor"),
  },

  words: {
    __new: DocStr("novo", "para crear unha nova instancia dunha clase"),
    __this: DocStr("isto", "para acceder aos atributos da propia clase"),
    __extends: DocStr("estende", "para declarar que unha clase herda doutra"),
  },

  accessModifiers: {
    __private: DocStr("privado", "accesible só dentro da clase"),
    __public: DocStr("público", "accesible desde calquera lugar"),
    __protected: DocStr(
      "protexido",
      "accesible dentro da clase e as súas subclases",
    ),
    __readonly: DocStr("só_lectura", "o valor só pode asignarse unha vez"),
    __static: DocStr("estático", "pertence á clase, non ás instancias"),
  },

  methods: {
    method: {
      __print: DocStr("imprimir", "para imprimir un valor na pantalla"),
      __scan: DocStr("ler", "para ler un valor da entrada"),
      __return: DocStr("retornar", "para retornar un valor dunha función"),
      __break: DocStr("romper", "para saír dun bucle"),
      __continue: DocStr(
        "continuar",
        "para saltar á seguinte iteración do bucle",
      ),
    },

    sentences: {
      __function: DocStr("función", "para declarar unha función"),
      __if: DocStr("se", "para declarar unha condición"),
      __else: DocStr("senón", "para declarar unha condición alternativa"),
      __while: DocStr("mentres", "para declarar un bucle mentres"),
      __for: DocStr("para", "para declarar un bucle para"),
      __switch: DocStr(
        "selección",
        "para declarar unha estrutura de selección",
      ),
      __case: DocStr("caso", "para declarar un caso na estrutura de selección"),
      __default: DocStr(
        "predefinido",
        "para declarar o caso predefinido na estrutura de selección",
      ),
      __try: DocStr("intentar", "para declarar un bloque intentar"),
      __catch: DocStr(
        "capturar",
        "para declarar un bloque de xestión de erros",
      ),
      __finally: DocStr(
        "finalmente",
        "para declarar un bloque que se executa sempre",
      ),
      __class: DocStr("clase", "para declarar unha clase"),
      __constructor: DocStr(
        "constructor",
        "estrutura para declarar atributos nunha clase",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mensaxe",
      "Valor",
      "Variable",
      "Propiedade",
      "Obxecto",
      "Esperado",
      "Recibido",
      "Asignación_Constante",
      "Parámetro_Duplicado",
      "Suxestión",
      "Token_Inválido",
      "Desbordamento_Pila",
      "Token",
      "Fin_Inesperado",
    ),
    main: errorMessage("ERRO", "erro xenérico do sistema"),
    __TypeError: errorMessage("ERRO_TIPO", "tipo inválido na operación"),
    __InitError: errorMessage(
      "ERRO_INICIALIZACIÓN",
      "a variable non foi inicializada",
    ),
    __ReferenceError: errorMessage(
      "ERRO_REFERENCIA",
      "a variable, función ou biblioteca non existe no scope",
    ),
    __SyntaxError: errorMessage("ERRO_SINTAXE", "código inválido"),
    __RangeError: errorMessage("ERRO_RANGO", "valor fóra do rango permitido"),
    __URIError: errorMessage("ERRO_URI", "URI malformado ou inválido"),
    __EvalError: errorMessage("ERRO_EVAL", "erro relacionado con eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERRO_DESCOÑECIDO",
      "erro completamente descoñecido",
    ),
  },

  example: {
    __array: [
      "alimentos",
      "países",
      "elementos",
      "tags",
      "cores",
      "produtos",
      "usuarios",
      "categorías",
      "puntuacións",
      "linguas",
    ],
    __boolean: [
      "estado",
      "éAdulto",
      "éActivo",
      "éVisible",
      "tenPermiso",
      "iniciouSesión",
      "estáHabilitado",
      "estáFeito",
      "estáVerificado",
      "estáEliminado",
    ],
    __function: [
      "obterNome",
      "obterValor",
      "xestionarClic",
      "obterDatos",
      "formatarData",
      "analizarEntrada",
      "validarFormulario",
      "renderizarElemento",
      "actualizarEstado",
      "calcularTotal",
    ],
    __number: [
      "idade",
      "ano",
      "contador",
      "total",
      "prezo",
      "índice",
      "duración",
      "cantidade",
      "puntuación",
      "timeout",
    ],
    __object: [
      "persoa",
      "usuario",
      "config",
      "resposta",
      "pagamento",
      "configuración",
      "perfil",
      "enderezo",
      "metadatos",
      "sesión",
    ],
    __string: [
      "nome",
      "título",
      "descrición",
      "email",
      "contrasinal",
      "mensaxe",
      "etiqueta",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "iniciarSesión",
      "inicializar",
      "limpar",
      "reiniciar",
      "destruír",
      "pecharSesión",
      "baleirarCache",
      "gardarNaBD",
      "enviarEmail",
      "rexistrarEvento",
    ],
  },
}).grammar();
