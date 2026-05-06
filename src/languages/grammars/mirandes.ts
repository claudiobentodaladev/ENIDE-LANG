import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const mirandes = new Language({
  language: "mirandes",
  about:
    "ENIDE ye un transpilador traduzíbel que permite programar an qualquiera lhéngua",

  include: DocStr(
    "ancluir",
    "outelizado para ancluir lhénguas, bibliotecas ó módulos d'outros fexeiros",
  ),

  commands: {
    __about: DocStr("subre", "para oubter anformaçon subre l sistema ENIDE"),
    __help: DocStr(
      "ajuda",
      "para ber la lhista de todos ls comandos çponíbeis",
    ),
    __version: DocStr("berson", "para oubter la berson atual de l ENIDE"),
    __languages: DocStr("lhénguas", "para ber la lhista de todas las lhénguas"),
    __documentation: DocStr(
      "decumentaçon",
      "para oubter l manual de la lhéngua",
    ),
    __grammar: DocStr(
      "gramática",
      "para ber las regras gramaticals de la lhéngua",
    ),
  },

  library: {
    __standard: {
      main: DocStr("padron", "acesso als métodos padron de l sistema"),
      __isarray: DocStr("ye_arraio", "berifica se l balor ye un arraio"),
      __isobject: DocStr("ye_oubjeto", "berifica se l balor ye un oubjeto"),
      __typeof: DocStr("TipoDe", "debolbe l tipo de l balor"),
      __parse: DocStr(
        "Analizar",
        "cunberte ua cadena ne l tipo de dado correto",
      ),
    },
    __math: {
      main: DocStr("matemática", "acesso a las funçones matemáticas"),
      __pi: DocStr("PI", "oubter l balor de la custante Pi"),
      __sqrt: DocStr("Raiç", "oubter la raiç quadrada dun nambro"),
      __pow: DocStr("Poténcia", "oubter la poténcia dun nambro"),
      __round: DocStr(
        "Arredondar",
        "arredondar un nambro para l'enteiro mais próssimo",
      ),
      __random: DocStr("Alhadure", "gerar un nambro aleatório"),
      __max: DocStr("Máksimo", "oubter l maior balor de la lhista"),
      __min: DocStr("Mínimo", "oubter l menor balor de la lhista"),
      __isNumber: DocStr("YeNambro", "berifica se l balor ye un nambro"),
      __isInteger: DocStr(
        "YeEnteiro",
        "berifica se l balor ye un nambro enteiro",
      ),
      __isFloat: DocStr(
        "YeDecimal",
        "berifica se l balor ye un nambro decimal",
      ),
      __cos: DocStr("Cos", "oubter l cosseno dun nambro"),
      __sin: DocStr("Sin", "oubter l seno dun nambro"),
      __tan: DocStr("Tan", "oubter la tangente dun nambro"),
    },

    __string: {
      main: DocStr("cadena", "acesso a las funçones de manipulaçon de testo"),
      __length: DocStr("Largura", "oubter l tamanho de la cadena de testo"),
      __toUpperCase: DocStr(
        "AMaiúsculas",
        "passar to l testo para letras maiúsculas",
      ),
      __toLowerCase: DocStr(
        "AMinúsculas",
        "passar to l testo para letras minúsculas",
      ),
      __include: DocStr(
        "Conten",
        "berifica se la cadena conten un pedaço de testo",
      ),
      __repeat: DocStr("Repetir", "repite l testo bárias bezes"),
    },

    __date: {
      main: DocStr("data", "acesso a las funçones de data i hora"),
      __now: DocStr("Agora", "oubter la data i hora atual"),
      __year: DocStr("Anho", "oubter l'anho"),
      __month: DocStr("Mes", "oubter l més"),
      __dayMonth: DocStr("DieMes", "oubter l die de l més"),
      __dayWeek: DocStr("DieSelmana", "oubter l die de la selmana"),
      __hour: DocStr("Hora", "oubter la hora"),
      __minute: DocStr("Minuto", "oubter ls minutos"),
      __second: DocStr("Segundo", "oubter ls segundos"),
    },
  },

  types: {
    __number: DocStr("nambro", "declaraçon de bariábel de tipo nambro"),
    __string: DocStr("cadena", "declaraçon de bariábel de tipo testo"),
    __boolean: DocStr("bool", "declaraçon de bariábel lógica"),
    __object: DocStr("oubjeto", "declaraçon de strutura d'oubjeto"),
    __void: DocStr("bazio", "funçon que nun debolbe nanhun balor"),
    __array: DocStr("arraio", "declaraçon de strutura de lhista"),
  },

  specialValues: {
    __true: DocStr("berdadeiro", "balor lógico berdadeiro"),
    __false: DocStr("falso", "balor lógico falso"),
    __null: DocStr("nulo", "auséncia de balor"),
  },

  words: {
    __new: DocStr("nuobo", "cria ua nuoba anstáncia de la classe"),
    __this: DocStr("esto", "refere-se a l'anstáncia atual de la classe"),
    __extends: DocStr("stende", "declara qu'ua classe heirda d'outra"),
  },

  accessModifiers: {
    __private: DocStr("pribado", "solo acessíbel drento de la própia classe"),
    __public: DocStr("público", "acessíbel de qualquiera lhado"),
    __protected: DocStr(
      "protegido",
      "acessíbel na classe i naqueilhas qu'heirdan deilha",
    ),
    __readonly: DocStr(
      "solo_lher",
      "balor que nun puode ser alterado apuis de definido",
    ),
    __static: DocStr("stático", "pertenç a la classe i nun a l'anstáncia"),
  },

  methods: {
    method: {
      __print: DocStr("amostrar", "pón l balor na pantaila"),
      __scan: DocStr("lher", "lhé l balor de l'antrada de l'outelizador"),
      __return: DocStr("debolber", "debolbe un balor dua funçon"),
      __break: DocStr("parar", "sal dun bucle ó de l bloco atual"),
      __continue: DocStr(
        "seguinte",
        "salta pa la próssima iteraçon de l bucle",
      ),
    },

    sentences: {
      __function: DocStr("funçon", "declaraçon dua funçon"),
      __if: DocStr("se", "declaraçon dua cundiçon"),
      __else: DocStr("senon", "bloco d'altarnatiba pa la cundiçon"),
      __while: DocStr("mientres", "bucle baseado nua cundiçon"),
      __for: DocStr("para", "bucle baseado nun cuntador"),
      __switch: DocStr("scuolha", "strutura de bárias scolhas"),
      __case: DocStr("causo", "causo specífico drento de la scolha"),
      __default: DocStr("predefinido", "causo se nanhun outro fur bálido"),
      __try: DocStr("tentar", "ampeço de la geston d'erros"),
      __catch: DocStr("cachar", "trata l'erro qu'acunteciu"),
      __finally: DocStr("finalmente", "bloco que siempre s'eisecuta"),
      __class: DocStr("classe", "declaraçon dua nuoba classe"),
      __constructor: DocStr(
        "custrutor",
        "funçon que cria l'oubjeto de la classe",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mensage",
      "Balor",
      "Bariábel",
      "Propiadade",
      "Oubjeto",
      "Sperado",
      "Recebido",
      "Atribuiçon de custante",
      "Parámetro duplicado",
      "Dica",
      "Token inbálido",
      "Stouro de pilha",
      "Token",
      "Fin de l'antrada inesperado",
    ),
    main: errorMessage("ERRO", "erro giral de l sistema"),
    __TypeError: errorMessage(
      "ERRO_TIPO",
      "tipo de dado inbálido na ouparaçon",
    ),
    __InitError: errorMessage(
      "ERRO_ENICIALIZAÇON",
      "bariábel nun fui bien enicializada",
    ),
    __ReferenceError: errorMessage(
      "ERRO_REFERÉNCIA",
      "bariábel ó funçon nun eisiste",
    ),
    __SyntaxError: errorMessage("ERRO_SINTAXE", "erro na scrita de l código"),
    __RangeError: errorMessage(
      "ERRO_RANGO",
      "balor fura de l lhemite permitido",
    ),
    __URIError: errorMessage("ERRO_URI", "formato de URI inbálido"),
    __EvalError: errorMessage("ERRO_EVAL", "erro na funçon eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERRO_DESCONHECIDO",
      "acunteciu un erro que nun puode ser eidantificado",
    ),
  },

  example: {
    __array: [
      "comida",
      "paízes",
      "lhista_nomes",
      "notas",
      "quelores",
      "perdutos",
      "outelizadores",
      "catadories",
      "pontos",
      "lhénguas",
    ],
    __boolean: [
      "stado",
      "ye_atibo",
      "puode_ousar",
      "beise_que",
      "outorizado",
      "yá_antrou",
      "andando",
      "feito",
      "berificado",
      "apagado",
    ],
    __function: [
      "pigaNome",
      "quentaBalor",
      "lhistaDados",
      "atualizaPerfil",
      "formataTesto",
      "analizaCódigo",
      "berificaAntrada",
      "guardaFexeiro",
      "mandaMensage",
      "sumaTodo",
    ],
    __number: [
      "eidade",
      "anho_nacimiento",
      "médio",
      "total",
      "preço",
      "índice",
      "tiempo",
      "cantidade",
      "pontuaçon",
      "hora",
    ],
    __object: [
      "pessona",
      "cliente",
      "ajustes",
      "repuosta",
      "pagamento",
      "cunfiguraçon",
      "perfil",
      "andereço",
      "metadados",
      "sisson",
    ],
    __string: [
      "nome",
      "título",
      "çcriçon",
      "correio",
      "palabra_passe",
      "mensage",
      "etiqueta",
      "chabe",
      "url",
      "lhigaçon",
    ],
    __void: [
      "ampeçar",
      "apagar",
      "parar",
      "lhunpar",
      "çtruir",
      "salir",
      "lhimpa_cache",
      "guarda_todo",
      "mandar",
      "antrar",
    ],
  },
}).grammar();
