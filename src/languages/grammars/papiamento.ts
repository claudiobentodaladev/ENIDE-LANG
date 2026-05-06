import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const papiamento = new Language({
  language: "papiamento",
  about:
    "ENIDE ta un transpiler tradusibel ku ta permiti programacion den tur idioma",

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
      __isarray: DocStr("ta_lista", "verifiká si e valor ta un lista (array)"),
      __isobject: DocStr("ta_obhetu", "verifiká si e valor ta un obhetu"),
      __typeof: DocStr("tipo_di", "debolbé e tipo di dato di e variabel"),
      __parse: DocStr(
        "analisá",
        "konvertí un teksto pa e tipo di dato korekto",
      ),
    },
    __math: {
      main: DocStr("matematika", "akseso na funshonnan matemátiko"),
      __pi: DocStr("PI", "e valor di e konstante Pi"),
      __sqrt: DocStr("raiz_kuadrado", "kalkulá e raiz kuadrado di un nuúmero"),
      __pow: DocStr("potensia", "kalkulá e potensia di un nuúmero"),
      __round: DocStr("redondeá", "redondeá un nuúmero na e integer mas serka"),
      __random: DocStr("aleatorio", "generá un nuúmero aleatorio"),
      __max: DocStr("mas_grandi", "buska e valor mas haltu den un lista"),
      __min: DocStr("mas_chiki", "buska e valor mas abou den un lista"),
      __isNumber: DocStr("ta_numero", "verifiká si e valor ta un nuúmero"),
      __isInteger: DocStr(
        "ta_entero",
        "verifiká si e valor ta un nuúmero entero",
      ),
      __isFloat: DocStr("ta_desimal", "verifiká si e valor tin desimal"),
      __cos: DocStr("cos", "kalkulá e cosine"),
      __sin: DocStr("sin", "kalkulá e sine"),
      __tan: DocStr("tan", "kalkulá e tangent"),
    },

    __string: {
      main: DocStr("kadena", "funshonnan pa manipulashon di teksto"),
      __length: DocStr("largura", "haya e largura di e teksto"),
      __toUpperCase: DocStr(
        "pa_mayuskula",
        "konvertí teksto pa lèternan grandi",
      ),
      __toLowerCase: DocStr(
        "pa_minuskula",
        "konvertí teksto pa lèternan chikitu",
      ),
      __include: DocStr(
        "ta_kontené",
        "verifiká si e teksto tin un porshon spesífiko",
      ),
      __repeat: DocStr("ripití", "ripití e teksto un kantidat di biaha"),
    },

    __date: {
      main: DocStr("fecha", "funshonnan di fecha i ora"),
      __now: DocStr("awor", "haya e fecha i ora aktual"),
      __year: DocStr("anja", "haya e anja"),
      __month: DocStr("luna", "haya e luna"),
      __dayMonth: DocStr("dia_di_luna", "haya e dia di luna"),
      __dayWeek: DocStr("dia_di_siman", "haya e dia di siman"),
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
      "ta_ekstendé",
      "indiká ku un klase ta heredá for di un otro",
    ),
  },

  accessModifiers: {
    __private: DocStr("privá", "solamente disponibel den e klase mes"),
    __public: DocStr("públiko", "disponibel for di tur parti"),
    __protected: DocStr("protehá", "disponibel den e klase i su suberidernan"),
    __readonly: DocStr(
      "solamente_lesa",
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
      "Asignashon_na_konstante",
      "Parametro_dupliká",
      "Tip",
      "Token_invalido",
      "Stack_overflow",
      "Token",
      "Fin_inesperá_di_input",
    ),
    main: errorMessage("ERROR", "error generiko di sistema"),
    __TypeError: errorMessage(
      "ERROR_TIPO",
      "tipo di dato invalido pa e operashon aki",
    ),
    __InitError: errorMessage(
      "ERROR_INISIO",
      "e variabel no a ser inisiá korektamente",
    ),
    __ReferenceError: errorMessage(
      "ERROR_REFERENSIA",
      "e variabel of funshon no ta eksistí",
    ),
    __SyntaxError: errorMessage(
      "ERROR_SINTAKSIS",
      "error den e forma di skibi kódigo",
    ),
    __RangeError: errorMessage(
      "ERROR_RANGO",
      "valor ta afo di e límite permití",
    ),
    __URIError: errorMessage("ERROR_URI", "formato di URI invalido"),
    __EvalError: errorMessage(
      "ERROR_EVAL",
      "error relashoná ku e funshon eval",
    ),
    __UNKNOWN_ERROR: errorMessage(
      "ERROR_DESKONOSI",
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
