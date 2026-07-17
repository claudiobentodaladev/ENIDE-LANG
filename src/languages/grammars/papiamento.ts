import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const papiamento = new Language({
  language: "papiamento",
  about:
    "ENIDE ta un lengahe di programashon multilingwe ku ta permití bo programá den kualke idioma",
  include: DocStr(
    "inklui",
    "usa pa inklui idioma, biblioteka of modulonan for di otro failnan",
  ),

  commands: {
    __about: DocStr("tokante", "haya informashon tokante e sistema ENIDE"),
    __help: DocStr("ayudo", "haya un lista di tur komando disponibel"),
    __version: DocStr("version", "mira e version aktual di ENIDE"),
    __languages: DocStr("idioma", "mira un lista di tur idioma soportá"),
    __documentation: DocStr(
      "dokumentu",
      "lesa e dokumentashon di e idioma aktual",
    ),
    __grammar: DocStr("gramatika", "mira e reglanan gramatikal di e idioma"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "akseso na métodonan básiko di sistema"),
      __isarray: DocStr("TaLista", "verifiká si e valor ta un lista (array)"),
      __isobject: DocStr("TaObhetu", "verifiká si e valor ta un obhetu"),
      __typeof: DocStr("TipoDi", "debolbé e tipo di dato di e variabel"),
      __parse: DocStr(
        "analisá",
        "konvertí un teksto pa e tipo di dato korekto",
      ),
    },
    __math: {
      main: DocStr("matematika", "akseso na funshonnan matemátiko"),
      __pi: DocStr("PI", "e valor di e konstante Pi"),
      __sqrt: DocStr("RaizKuadrado", "kalkulá e raiz kuadrado di un nuúmero"),
      __pow: DocStr("potensia", "kalkulá e potensia di un nuúmero"),
      __round: DocStr("redondeá", "redondeá un nuúmero na e integer mas serka"),
      __random: DocStr("aleatorio", "generá un nuúmero aleatorio"),
      __max: DocStr("MasGrandi", "buska e valor mas haltu den un lista"),
      __min: DocStr("MasChiki", "buska e valor mas abou den un lista"),
      __isNumber: DocStr("TaNumero", "verifiká si e valor ta un nuúmero"),
      __isInteger: DocStr(
        "TaEntero",
        "verifiká si e valor ta un nuúmero entero",
      ),
      __isFloat: DocStr("TaDesimal", "verifiká si e valor tin desimal"),
      __cos: DocStr("cos", "kalkulá e cosine"),
      __sin: DocStr("sin", "kalkulá e sine"),
      __tan: DocStr("tan", "kalkulá e tangent"),
    },

    __string: {
      main: DocStr("kadena", "funshonnan pa manipulashon di teksto"),
      __length: DocStr("largura", "haya e largura di e teksto"),
      __toUpperCase: DocStr(
        "PaMayuskula",
        "konvertí teksto pa lèternan grandi",
      ),
      __toLowerCase: DocStr(
        "PaMinuskula",
        "konvertí teksto pa lèternan chikitu",
      ),
      __include: DocStr(
        "TaKontené",
        "verifiká si e teksto tin un porshon spesífiko",
      ),
      __repeat: DocStr("ripití", "ripití e teksto un kantidat di biaha"),
    },

    __date: {
      main: DocStr("fecha", "funshonnan di fecha i ora"),
      __now: DocStr("awor", "haya e fecha i ora aktual"),
      __year: DocStr("anja", "haya e anja"),
      __month: DocStr("luna", "haya e luna"),
      __dayMonth: DocStr("DiaDiLuna", "haya e dia di luna"),
      __dayWeek: DocStr("DiaDiSiman", "haya e dia di siman"),
      __hour: DocStr("ora", "haya e ora"),
      __minute: DocStr("minut", "haya e minutnan"),
      __second: DocStr("sigundu", "haya e sigundunan"),
    },
  },

  types: {
    __number: DocStr("numero", "deklarashon di un variabel numériko"),
    __string: DocStr("kadena", "deklarashon di un variabel di teksto"),
    __boolean: DocStr(
      "bool",
      "deklarashon di un variabel lógiko (berdad/falsu)",
    ),
    __object: DocStr("obhetu", "deklarashon di un struktura di obhetu"),
    __void: DocStr("bashí", "ta indiká ku un funshon no ta debolbé nada"),
    __array: DocStr("lista", "deklarashon di un struktura di lista"),
  },

  specialValues: {
    __true: DocStr("berdad", "valor lógiko bèrdadera"),
    __false: DocStr("falsu", "valor lógiko falsu"),
    __null: DocStr("nulo", "ausensia di un valor"),
  },

  words: {
    __new: DocStr("nobo", "krea un instansia nobo di un klase"),
    __this: DocStr("esaki", "referensia na e instansia aktual di e klase"),
    __extends: DocStr(
      "TaEkstendé",
      "indiká ku un klase ta heredá for di un otro",
    ),
  },

  accessModifiers: {
    __private: DocStr("privá", "solamente disponibel den e klase mes"),
    __public: DocStr("públiko", "disponibel for di tur parti"),
    __protected: DocStr("protehá", "disponibel den e klase i su suberidernan"),
    __readonly: DocStr(
      "SolamenteLesa",
      "valor ku no por kambia despues di inisio",
    ),
    __static: DocStr("estatiko", "parti di e klase mes, no di un instansia"),
  },

  methods: {
    method: {
      __print: DocStr("mustra", "print un valor riba pantaya"),
      __scan: DocStr("lei", "lesa un inshon for di e usuario"),
      __return: DocStr("bolbe", "debolbé un valor for di un funshon"),
      __break: DocStr("kòrta", "sali for di e loop of blòki aktual"),
      __continue: DocStr("kontinuá", "salta pa e próksimo iterashon di e loop"),
    },

    sentences: {
      __function: DocStr("funshon", "deklarashon di un funshon"),
      __if: DocStr("si", "deklarashon di un kondishon"),
      __else: DocStr("sino", "blòki pa ora e kondishon no ta bèrdadera"),
      __while: DocStr("mientras", "loop basá riba un kondishon"),
      __for: DocStr("pa", "loop basá riba un kontadó"),
      __switch: DocStr("skoge", "struktura pa skohe entre diferente opshon"),
      __case: DocStr("kaso", "un kaso spesífiko den e struktura di skoge"),
      __default: DocStr("predetermina", "e opshon si nada otro no kuadra"),
      __try: DocStr("proba", "inisio di maneho di error"),
      __catch: DocStr("kaptura", "atendé ku e error ku a surgi"),
      __finally: DocStr("finalmente", "blòki ku semper ta ehekutá na final"),
      __class: DocStr("klase", "deklarashon di un klase nobo"),
      __constructor: DocStr(
        "konstruktor",
        "funshon ku ta inisiá un obhetu di un klase",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mensage",
      "Valor",
      "Variabel",
      "Propiedat",
      "Obhetu",
      "Sperá",
      "Risibí",
      "AsignashonNaKonstante",
      "ParametroDupliká",
      "Tip",
      "TokenInvalido",
      "StackOverflow",
      "Token",
      "FinInesperáDiInput",
    ),
    main: errorMessage("ERROR", "error generiko di sistema"),
    __TypeError: errorMessage(
      "ERRORTIPO",
      "tipo di dato invalido pa e operashon aki",
    ),
    __InitError: errorMessage(
      "ERRORINISIO",
      "e variabel no a ser inisiá korektamente",
    ),
    __ReferenceError: errorMessage(
      "ERRORREFERENSIA",
      "e variabel of funshon no ta eksistí",
    ),
    __SyntaxError: errorMessage(
      "ERRORSINTAKSIS",
      "error den e forma di skibi kódigo",
    ),
    __RangeError: errorMessage(
      "ERRORRANGO",
      "valor ta afo di e límite permití",
    ),
    __URIError: errorMessage("ERRORURI", "formato di URI invalido"),
    __EvalError: errorMessage("ERROREVAL", "error relashoná ku e funshon eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERRORDESKONOSI",
      "un error deskonosí a tuma lugá",
    ),
  },

  example: {
    __array: [
      "kuminda",
      "pais",
      "nòmbernan",
      "lista_di_number",
      "kolónan",
      "produktonan",
      "usuarionan",
      "kategorianan",
      "puntonan",
      "idiomanan",
    ],
    __boolean: [
      "status",
      "ta_aktivo",
      "por_usa",
      "ta_kla",
      "outorisá",
      "log_in",
      "koridó",
      "kompletá",
      "verifiká",
      "borrá",
    ],
    __function: [
      "hayaNomber",
      "kalkulaValor",
      "mustraData",
      "updateProfil",
      "formataTeksto",
      "analisaKodigo",
      "checkInput",
      "wardaFail",
      "mandaMensage",
      "sumaTur",
    ],
    __number: [
      "edat",
      "anja_di_nasementu",
      "promedio",
      "total",
      "preis",
      "indeks",
      "tempu",
      "kantidat",
      "punto",
      "ora",
    ],
    __object: [
      "persona",
      "kliente",
      "axustenan",
      "kontesta",
      "pago",
      "konfigurashon",
      "profil",
      "adres",
      "metadata",
      "seshon",
    ],
    __string: [
      "nomber",
      "titulo",
      "deskripshon",
      "email",
      "password",
      "mensage",
      "tag",
      "yabi",
      "url",
      "link",
    ],
    __void: [
      "kuminsá",
      "borra",
      "stòp",
      "limpia",
      "destruí",
      "sali",
      "bashí_buffer",
      "warda_tur",
      "manda",
      "log_in",
    ],
  },
}).grammar();
