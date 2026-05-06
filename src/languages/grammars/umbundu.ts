import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const umbundu = new Language({
  language: "umbundu",
  about:
    "ENIDE i transpilador uo kuhindulukilako yoneka yo kuprograma mu ndimi yosi",

  include: DocStr("OkukapaMo", "Ci lingiwa oku kapa mo elimi ale o mambululyu"),

  commands: {
    __about: DocStr("Ehulo", "okupulapula omalaka kombanda ya ENIDE"),
    __help: DocStr(
      "Epukululo",
      "okupulapula ovilista vya milayo yosi yokufikamena",
    ),
    __version: DocStr("Olupale", "okupulapula olupale lwokulyo lwa ENIDE"),
    __languages: DocStr(
      "Ondimi",
      "okupulapula ovilista vya ondimi yosi yokufikamena",
    ),
    __documentation: DocStr("Doc", "okupulapula ovilembiso vya olulimi"),
    __grammar: DocStr("Naxve", "ovihandeleko vio kusoneka elimi"),
  },

  library: {
    __standard: {
      main: DocStr("Standard", "esasy ulgam funksiyalaryna giris"),
      __isarray: DocStr("ISanaw", "okutalela nge omuholo i onombolo yokima"),
      __isobject: DocStr("IOmbuto", "okutalela nge omuholo i ombuto"),
      __typeof: DocStr("OmuximaWa", "okupulapula omuxima wa uytgeyji"),
      __parse: DocStr(
        "Okutandula",
        "okuhindulukilako o qoraal ku omuxima wa ximbue",
      ),
    },
    __math: {
      main: DocStr("Omatematika", "okufika oviungula vya omatematika"),
      __pi: DocStr("PI", "okupulapula omuholo wa pi"),
      __sqrt: DocStr("OmulamuWaNzole", "okupulapula omulamu wa nzole"),
      __pow: DocStr("Ongeve", "okupulapula ongeve yo onombolo"),
      __round: DocStr("Okuzunguluka", "okuzungulusa onombolo"),
      __random: DocStr("Okasoni", "okupulapula onombolo yokasoni"),
      __max: DocStr("Okulamba", "okupulapula omuholo okulamba"),
      __min: DocStr("Okufioti", "okupulapula omuholo okufioti"),
      __isNumber: DocStr("IOnombolo", "okutalela nge omuholo i onombolo"),
      __isInteger: DocStr(
        "IOnomboloKima",
        "okutalela nge omuholo i onombolo yokima",
      ),
      __isFloat: DocStr(
        "IOnomboloKipande",
        "okutalela nge omuholo i onombolo yokipande",
      ),
      __cos: DocStr("cos", "okutalela cosine"),
      __sin: DocStr("sin", "okutalela sine"),
      __tan: DocStr("tan", "okutalela tangent"),
    },

    __string: {
      main: DocStr("Ovilembiso", "okufika oviungula vyo kusobola ovilembiso"),
      __length: DocStr("Omulali", "okupulapula omulali wovilembiso"),
      __toUpperCase: DocStr(
        "KuNeneNene",
        "okuhindulukilako ovilembiso ku nene nene",
      ),
      __toLowerCase: DocStr(
        "KuFiotiFioti",
        "okuhindulukilako ovilembiso ku fioti fioti",
      ),
      __include: DocStr(
        "Kukuvetela",
        "okutalela nge ovilembiso vi vetele qoraal",
      ),
      __repeat: DocStr("Okupitula", "okupitula ovilembiso ovipitulo vialua"),
    },

    __date: {
      main: DocStr("Esiku", "okufika oviungula vya esiku ni engonga"),
      __now: DocStr("Kaliye", "esiku ni engonga ya kaliye"),
      __year: DocStr("Omvula", "okupulapula omvula"),
      __month: DocStr("Ongonda", "okupulapula ongonda"),
      __dayMonth: DocStr("EsikuNgonda", "okupulapula esiku lya ongonda"),
      __dayWeek: DocStr("EsikuSemana", "okupulapula esiku lya semana"),
      __hour: DocStr("Engonga", "okupulapula engonga"),
      __minute: DocStr("Ominuto", "okupulapula ominuto"),
      __second: DocStr("Osegundo", "okupulapula osegundo"),
    },
  },

  types: {
    __number: DocStr("Onombolo", "okufumana ovivikilanga vyo muxima onombolo"),
    __string: DocStr(
      "Ovilembiso",
      "okufumana ovivikilanga vyo muxima ovilembiso",
    ),
    __boolean: DocStr("Bool", "okufumana ovivikilanga vyo muxima bool"),
    __object: DocStr("Ombuto", "okwamba ombuto ombimbi"),
    __void: DocStr("Opullu", "ombi yetu ka i vutula omuholo"),
    __array: DocStr("Olista", "omuxima wa olista yo ovina"),
  },

  specialValues: {
    __true: DocStr("Ocili", "mu logiki omuholo uo cili"),
    __false: DocStr("Uhembi", "mu logiki omuholo uo uhembi"),
    __null: DocStr("Lacimue", "eyi i lekisa nge ka kuli omuholo"),
  },

  words: {
    __new: DocStr("Okaliye", "okululika ombuto yokaliye"),
    __this: DocStr("Eci", "oku lekisa ku ombuto ya kaliye"),
    __extends: DocStr("Okulanda", "oku landa ovituwa via klas"),
  },

  accessModifiers: {
    __private: DocStr("Vupombo", "ci taviwa lika mu kanyamo ka klas"),
    __public: DocStr("Vuavele", "ci taviwa mu afu yosi"),
    __protected: DocStr("Vukangue", "ci taviwa mu klas ni vana va landa"),
    __readonly: DocStr("OkulivisaLika", "omuholo kau sobiwa"),
    __static: DocStr("Static", "ci tiamela ku klas, ka ci tiamela ku ombuto"),
  },

  methods: {
    method: {
      __print: DocStr("Okulembisa", "okulembisa omuholo ku ekele"),
      __scan: DocStr("Okusosa", "okusosa omuholo ku njila yokuingila"),
      __return: DocStr("Okuvutuka", "okuvutula omuholo ku oviungula"),
      __break: DocStr("Okutata", "okutata ngiedi ya kaliye"),
      __continue: DocStr("Okutwalako", "okuenda ku ngiedi yi landa"),
    },

    sentences: {
      __function: DocStr("Oviungula", "okufumana oviungula"),
      __if: DocStr("Nge", "okufumana kondisaun"),
      __else: DocStr("Kana", "okufumana kondisaun yokanka"),
      __while: DocStr("Ngiedi", "okufumana ngiedi wa ngiedi"),
      __for: DocStr("Ku", "okufumana ngiedi wa ku"),
      __switch: DocStr("Okusongola", "okufumana estrutura yokusongola"),
      __case: DocStr("Okima", "okufumana okima mu estrutura yokusongola"),
      __default: DocStr(
        "Onsuka",
        "okufumana okima konsuka mu estrutura yokusongola",
      ),
      __try: DocStr("Okusuka", "okufumana bloku ya okusuka"),
      __catch: DocStr("Okukanga", "okufumana bloku yokulukila ominsangu"),
      __finally: DocStr("Konsuka", "okufumana bloku yokusalama ntangu yosi"),
      __class: DocStr("Klas", "okululika klas yokaliye"),
      __constructor: DocStr("Okululika", "oviungula vyo okululika ombuto"),
    },
  },

  errors: {
    __labels: errorLabel(
      "Esapulo",
      "Omuholo",
      "Ovivikilanga",
      "Ocituwa",
      "Ombuto",
      "Okulavelela",
      "Okusanga",
      "OkukapaKonstante",
      "ParametroYapandulula",
      "Epukululo",
      "OlembaYavela",
      "StackYapula",
      "Olemba",
      "EsuloKaLialavelele",
    ),
    main: errorMessage("OLUSITA", "Olusita lwa sistema"),
    __TypeError: errorMessage("OlusitaMuxima", "Omuxima owabela mu oviungula"),
    __InitError: errorMessage(
      "OlusitaInit",
      "Ovivikilanga ka via kapiwile mo omuholo",
    ),
    __ReferenceError: errorMessage(
      "OlusitaReferencia",
      "Ovivikilanga ovijila mu scope",
    ),
    __SyntaxError: errorMessage("OlusitaSintaxe", "Codigo owabela"),
    __RangeError: errorMessage(
      "OlusitaRango",
      "Omuholo ofuila rango ya kuluvula",
    ),
    __URIError: errorMessage("OlusitaUri", "URI owabela to invalid"),
    __EvalError: errorMessage("OlusitaEval", "Olusita lwa eval"),
    __UNKNOWN_ERROR: errorMessage("OlusitaOlusiziwa", "Olusita olo olusiziwa"),
  },

  example: {
    __array: [
      "pizzas",
      "olupale",
      "olista_onombolo",
      "onombolo",
      "ovivala",
      "ovipindi",
      "olista_oluse",
      "ovipulu",
      "pontos",
      "ondimi",
    ],
    __boolean: [
      "ekalo",
      "ci_talavaya",
      "access_yapua",
      "tayari",
      "confirmado",
      "yapandwa",
      "itwalako",
      "yapua",
      "verificado",
      "cancelado",
    ],
    __function: [
      "getEdu",
      "calcularValor",
      "exibirDados",
      "updateProfil",
      "formatarTexto",
      "analisarCodigo",
      "checkDados",
      "salvarDoc",
      "enviarMensagem",
      "addAhlisi",
    ],
    __number: [
      "anyamo",
      "omvula_okuciwa",
      "media",
      "total",
      "omuholo",
      "indice",
      "ntangu",
      "kilikisu",
      "pontos",
      "engonga",
    ],
    __object: [
      "omunu",
      "cliente",
      "configuracao",
      "okutambulula",
      "pagamento",
      "perfil",
      "endereco",
      "metadados",
      "sessao",
      "ombuto",
    ],
    __string: [
      "edu",
      "endereco",
      "deskrisun",
      "email",
      "senha",
      "esapulo",
      "numbelo",
      "chave",
      "url",
      "link",
    ],
    __void: [
      "enda",
      "delete",
      "talama",
      "limpar",
      "yoka",
      "tunda",
      "vutula",
      "saveAhlisi",
      "tuma",
      "ingila",
    ],
  },
}).grammar();
