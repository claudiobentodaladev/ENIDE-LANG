import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const ngangela = new Language({
  language: "ngangela",
  about:
    "ENIDE i transpilador wa kuhindulukilako yoneka wa kuprograma mu ndimi yonse",

  include: DocStr(
    "kwambatesa",
    "chizandesa kwambatesa ndaka, mambululyu ni binkumbi bya mu bimbambala binkaka",
  ),

  commands: {
    __about: DocStr("muanda", "ku ziba makanda a sistema ENIDE"),
    __help: DocStr("lusoso", "ku ziba malista a milayo yonse ya kusanga"),
    __version: DocStr("nzila", "ku ziba nzila ya kala ya ENIDE"),
    __languages: DocStr("ndimi", "ku ziba malista a ndimi yonse ya kusanga"),
    __documentation: DocStr("doc", "ku ziba mukanda wa ndimi"),
    __grammar: DocStr("gramatika", "ku ziba bitontho bya gulsgo ya ndimi"),
  },

  library: {
    __standard: {
      main: DocStr("padron", "ku fika misamu ya padron ya sistema"),
      __isarray: DocStr("ye_arraio", "ku tala soku tandu i arraio"),
      __isobject: DocStr("ye_ecifo", "ku tala soku tandu i ecifo"),
      __typeof: DocStr("TipoWa", "ku vutula tipo ya tandu"),
      __parse: DocStr("Analizar", "ku hindula malembu ku tipo ya dado ya cili"),
    },
    __math: {
      main: DocStr("matematika", "ku fika misamu ya matematika"),
      __pi: DocStr("PI", "ku ziba tandu ya custante Pi"),
      __sqrt: DocStr("Mulamu", "ku ziba mulamu wa nzole wa nambala"),
      __pow: DocStr("Nguzu", "ku ziba nguzu ya nambala"),
      __round: DocStr(
        "Zunguluka",
        "ku zungulusa nambala ku nambala yonse ya fika",
      ),
      __random: DocStr("Kasoni", "ku bonga nambala ya kasoni"),
      __max: DocStr("Nene", "ku ziba tandu ya nene mu lista"),
      __min: DocStr("Fioti", "ku ziba tandu ya fioti mu lista"),
      __isNumber: DocStr("INambala", "ku tala soku tandu i nambala"),
      __isInteger: DocStr(
        "INambalaYonse",
        "ku tala soku tandu i nambala yonse",
      ),
      __isFloat: DocStr(
        "INambalaKipande",
        "ku tala soku tandu i nambala ya kipande",
      ),
      __cos: DocStr("Cos", "ku ziba cos wa nambala"),
      __sin: DocStr("Sin", "ku ziba sin wa nambala"),
      __tan: DocStr("Tan", "ku ziba tan wa nambala"),
    },

    __string: {
      main: DocStr("malembu", "ku fika misamu ya kusobela malembu"),
      __length: DocStr("Wupulusu", "ku ziba wupulusu wa malembu"),
      __toUpperCase: DocStr(
        "KuNeneNene",
        "ku hindula malembu ose ku nene nene",
      ),
      __toLowerCase: DocStr(
        "KuFiotiFioti",
        "ku hindula malembu ose ku fioti fioti",
      ),
      __include: DocStr("Conten", "ku tala soku malembu a kuta kima"),
      __repeat: DocStr("Vutukila", "ku vutukila malembu bizinga binyingi"),
    },

    __date: {
      main: DocStr("lusuku", "ku fika misamu ya lusuku ni ngonga"),
      __now: DocStr("Masã", "ku ziba lusuku ni ngonga ya masã"),
      __year: DocStr("Mwaka", "ku ziba mwaka"),
      __month: DocStr("Mweshi", "ku ziba mweshi"),
      __dayMonth: DocStr("LusukuMweshi", "ku ziba lusuku lwa mweshi"),
      __dayWeek: DocStr("LusukuSemana", "ku ziba lusuku lwa semana"),
      __hour: DocStr("Ngonga", "ku ziba ngonga"),
      __minute: DocStr("Minuto", "ku ziba minuto"),
      __second: DocStr("Segundo", "ku ziba segundo"),
    },
  },

  types: {
    __number: DocStr("nambala", "ku xingila chivikilanga cha tipo nambala"),
    __string: DocStr("malembu", "ku xingila chivikilanga cha tipo malembu"),
    __boolean: DocStr("bool", "ku xingila chivikilanga cha tipo bool"),
    __object: DocStr("ecifo", "ku xingila ecifo ekuimama"),
    __void: DocStr("zaalem", "misamu ya kuze ya ku vutula kima"),
    __array: DocStr("arraio", "ku xingila estrutura ya lista"),
  },

  specialValues: {
    __true: DocStr("ocili", "tandu ya cili"),
    __false: DocStr("luvunu", "tandu ya luvunu"),
    __null: DocStr("zaalem", "ku kala ya tandu"),
  },

  words: {
    __new: DocStr("yapa", "ku bonga chivikilanga cha yapa cha classe"),
    __this: DocStr("eci", "ku fika ecifo eci cha classe"),
    __extends: DocStr("yoolge", "ku xingila soku classe i bonga mu nkaka"),
  },

  accessModifiers: {
    __private: DocStr("solgre", "ku fika mu drento ya classe yene"),
    __public: DocStr("yigre", "ku fika mu mbela yonse"),
    __protected: DocStr("kogle", "ku fika mu classe ni baze ba bonga mu yene"),
    __readonly: DocStr("karemgo", "tandu ya kuze ya ku sosa apuis ya xingila"),
    __static: DocStr("zemsa", "i ya classe, kaxi ya chivikilanga ye"),
  },

  methods: {
    method: {
      __print: DocStr("lemba", "ku lemba tandu ku ekele"),
      __scan: DocStr("sosa", "ku sosa tandu ku njila ya kukota"),
      __return: DocStr("vutuka", "ku vutula tandu ku misamu"),
      __break: DocStr("parar", "ku tunda mu ngiedi to mu bloku ya masã"),
      __continue: DocStr("seguinte", "ku fika mu iteraçaun ya nkaka ya ngiedi"),
    },

    sentences: {
      __function: DocStr("misamu", "ku xingila misamu"),
      __if: DocStr("soku", "ku xingila kondisaun"),
      __else: DocStr("kana", "bloku ya nkaka pa kondisaun"),
      __while: DocStr("ngiedi", "ngiedi wa kondisaun"),
      __for: DocStr("mu", "ngiedi wa mu nambala"),
      __switch: DocStr("songola", "estrutura ya kusongola bizinga binyingi"),
      __case: DocStr("kima", "kima ca drento ya kusongola"),
      __default: DocStr("nsuka", "kima soku binkaka bi kaxi bi cili ye"),
      __try: DocStr("suka", "ampeço ya kulukila minsangu"),
      __catch: DocStr("kanga", "ku kanga minsangu ya bue"),
      __finally: DocStr("nkutu", "bloku ya ku kusalama ntangu yonse"),
      __class: DocStr("buudu", "ku xingila classe ya yapa"),
      __constructor: DocStr(
        "custrutor",
        "misamu ya ku xingila ecifo cha classe",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Minsangu",
      "Tandu",
      "Chivikilanga",
      "Kima",
      "Ecifo",
      "Sperado",
      "Recebido",
      "Atribuiçaun_ya_custante",
      "Parametro_vutukila",
      "Songo",
      "Token_wabela",
      "Stack_overloop",
      "Token",
      "Fin_ya_kukota_unexpected",
    ),
    main: errorMessage("MINSANGU", "minsangu ya sistema"),
    __TypeError: errorMessage("MINSANGU_TIPO", "muxima wabela mu misamu"),
    __InitError: errorMessage(
      "MINSANGU_ENICIALIZAÇAUN",
      "chivikilanga kaxi chi xingila bien ye",
    ),
    __ReferenceError: errorMessage(
      "MINSANGU_REFERENCIA",
      "chivikilanga to misamu i kaxi ko",
    ),
    __SyntaxError: errorMessage(
      "MINSANGU_SINTAXE",
      "minsangu ya gulsgo ya codigo",
    ),
    __RangeError: errorMessage(
      "MINSANGU_RANGO",
      "tandu ifuila rango ya kuluvula",
    ),
    __URIError: errorMessage("MINSANGU_URI", "formato ya URI wabela"),
    __EvalError: errorMessage("MINSANGU_EVAL", "minsangu ya misamu eval"),
    __UNKNOWN_ERROR: errorMessage(
      "MINSANGU_ISIBUE",
      "minsangu isibue ya kuziba ya bue",
    ),
  },

  example: {
    __array: [
      "kulia",
      "mafuchi",
      "lista_majina",
      "nambala",
      "quelores",
      "bimbambala",
      "outelizadores",
      "catadories",
      "vipu",
      "ndimi",
    ],
    __boolean: [
      "stado",
      "ye_atibo",
      "puode_ousar",
      "beise_que",
      "outorizado",
      "ya_antrou",
      "andando",
      "feito",
      "berificado",
      "apagado",
    ],
    __function: [
      "bongaJina",
      "quentaTandu",
      "listaDados",
      "atualizaPerfil",
      "formataMalembu",
      "analizaCodigo",
      "berificaAntrada",
      "guardaFexeiro",
      "mandaMinsangu",
      "sumaTodo",
    ],
    __number: [
      "eidade",
      "mwaka_kusemuka",
      "medio",
      "total",
      "presu",
      "indice",
      "ntangu",
      "cantidade",
      "pontuaçaun",
      "ngonga",
    ],
    __object: [
      "pessona",
      "cliente",
      "ajustes",
      "repuosta",
      "pagamento",
      "cunfiguraçaun",
      "perfil",
      "andereçu",
      "metadados",
      "sissaun",
    ],
    __string: [
      "jina",
      "titulo",
      "descriçaun",
      "correio",
      "palabra_passe",
      "minsangu",
      "etiqueta",
      "chabe",
      "url",
      "lhigaçaun",
    ],
    __void: [
      "ampeçar",
      "apagar",
      "parar",
      "lumpa",
      "ctruir",
      "salir",
      "lhimpa_cache",
      "guarda_todo",
      "mandar",
      "antrar",
    ],
  },
}).grammar();
