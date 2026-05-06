import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const foyroyskt = new Language({
  language: "foyroyskt",
  about:
    "ENIDE er ein umsettanligur transpiler sum loyvir forritning á hvat mál sum er",

  include: DocStr("Feila", "Verður nýtt til at feila mál ella bókasøvn"),

  commands: {
    __about: DocStr("um", "fyri at fáa upplýsingar um ENIDE"),
    __help: DocStr("hjalp", "fyri at fáa lista yvir allar tøkkar kommandur"),
    __version: DocStr("útgáva", "fyri at fáa aktualu útgávu av ENIDE"),
    __languages: DocStr("mál", "fyri at fáa lista yvir øll tøk mál"),
    __documentation: DocStr("dok", "fyri at fáa skjálsetingina fyri eitt mál"),
    __grammar: DocStr("málfræði", "fyri at fáa málfræðina fyri eitt mál"),
  },

  library: {
    __standard: {
      main: DocStr(
        "støðlugt",
        "fyri at fáa atgongd til gagnlegar støðlugur føll",
      ),
      __isarray: DocStr(
        "ErListi",
        "fyri at eftirkanna um ein verdi er ein listi",
      ),
      __isobject: DocStr(
        "ErHlutur",
        "fyri at eftirkanna um ein verdi er ein hlutur",
      ),
      __typeof: DocStr("Slag", "fyri at fáa slag av einum verdi"),
      __parse: DocStr("Parse", "fyri at umbreyta tekst til rættan parse-verdi"),
    },

    __math: {
      main: DocStr("stærðfræði", "fyri at fáa atgongd til stærðfræðilig føll"),
      __pi: DocStr("PI", "fyri at fáa verdina av pi"),
      __sqrt: DocStr("FirkantaRót", "fyri at fáa firkantarót"),
      __pow: DocStr("Potensur", "fyri at fáa potens av tali"),
      __round: DocStr("Rundna", "fyri at rundna eitt tal"),
      __random: DocStr("Slembi", "fyri at fáa eitt slembið tal"),
      __max: DocStr("Hæsta", "fyri at fáa hæstu verdina"),
      __min: DocStr("Lægsta", "fyri at fáa lægstu verdina"),
      __isNumber: DocStr(
        "ErTal",
        "fyri at eftirkanna um ein verdi er eitt tal",
      ),
      __isInteger: DocStr(
        "ErHeilttal",
        "fyri at eftirkanna um ein verdi er eitt heilttal",
      ),
      __isFloat: DocStr(
        "ErDesimaltal",
        "fyri at eftirkanna um ein verdi er eitt desimaltal",
      ),
      __cos: DocStr("Cos", "fyri at fáa kósínus av horni í radíanum"),
      __sin: DocStr("Sin", "fyri at fáa sínus av horni í radíanum"),
      __tan: DocStr("Tan", "fyri at fáa tangens av horni í radíanum"),
    },

    __string: {
      main: DocStr("tekstur", "fyri at fáa atgongd til tekstmeðferðarføll"),
      __length: DocStr("Longd", "fyri at fáa longdina av einum teksti"),
      __toUpperCase: DocStr(
        "TilStóran",
        "fyri at umbreyta tekst til stóran stav",
      ),
      __toLowerCase: DocStr(
        "TilLítlan",
        "fyri at umbreyta tekst til lítlan stav",
      ),
      __include: DocStr(
        "Inniheldur",
        "fyri at eftirkanna um tekstur inniheldur annan tekst",
      ),
      __repeat: DocStr(
        "Endurtaka",
        "fyri at endurtaka tekst eitt ávíst tal av ferðum",
      ),
    },

    __date: {
      main: DocStr("dato", "fyri at fáa atgongd til dato og tíðarføll"),
      __now: DocStr("Nú", "fyri at fáa núverandi dato og tíð"),
      __year: DocStr("Ár", "fyri at fáa árið"),
      __month: DocStr("Mánaður", "fyri at fáa mánaðin"),
      __dayMonth: DocStr("DagurMánaður", "fyri at fáa dagin í mánaðinum"),
      __dayWeek: DocStr("DagurVika", "fyri at fáa dagin í vikuni"),
      __hour: DocStr("Tími", "fyri at fáa tíman"),
      __minute: DocStr("Minutt", "fyri at fáa minuttin"),
      __second: DocStr("Sekund", "fyri at fáa sekundið"),
    },
  },

  types: {
    __number: DocStr("tal", "fyri at forkynna ein broytiliga av slag tal"),
    __string: DocStr(
      "tekstur",
      "fyri at forkynna ein broytiliga av slag tekstur",
    ),
    __boolean: DocStr("bool", "fyri at forkynna ein broytiliga av slag bool"),
    __object: DocStr("hlutur", "at lýsa eitt kyrrstøðugt hlutur"),
    __void: DocStr(
      "tómur",
      "fyri at forkynna eitt fall sum ikki returnar verdi",
    ),
    __array: DocStr("listi", "fyri at forkynna eina listustruktur"),
  },

  specialValues: {
    __true: DocStr("Satt", "búleskur verdi satt"),
    __false: DocStr("Ósatt", "búleskur verdi ósatt"),
    __null: DocStr("null", "fráverið av verdi"),
  },

  words: {
    __new: DocStr("nýtt", "fyri at stovna eitt nýtt tilvik av einum klassa"),
    __this: DocStr(
      "hetta",
      "fyri at fáa atgongd til egnar atributtar í klassa",
    ),
    __extends: DocStr(
      "víðkar",
      "fyri at forkynna at ein klassur ervar frá øðrum",
    ),
  },

  accessModifiers: {
    __private: DocStr("privatur", "bert tilgongdur innan klassan"),
    __public: DocStr("alisligur", "tilgongdur omanfyri hvørja staðin"),
    __protected: DocStr(
      "verndaður",
      "tilgongdur innan klassa og undirsklassum",
    ),
    __readonly: DocStr("bert_lesa", "verdið kann bert verða sett eina ferð"),
    __static: DocStr("kyrrstøðugt", "tilhøyrir klassanum, ikki tilvikinum"),
  },

  methods: {
    method: {
      __print: DocStr("prenta", "fyri at prenta ein verdi á skerminum"),
      __scan: DocStr("lesa", "fyri at lesa ein verdi frá innlegg"),
      __return: DocStr("returna", "fyri at returna ein verdi frá falli"),
      __break: DocStr("bróta", "fyri at fara út or lykkju"),
      __continue: DocStr("halda_fram", "fyri at hoppa til næstu ítran"),
    },

    sentences: {
      __function: DocStr("fall", "fyri at forkynna eitt fall"),
      __if: DocStr("um", "fyri at forkynna eitt skilyrði"),
      __else: DocStr("annars", "fyri at forkynna eitt alternativt skilyrði"),
      __while: DocStr("meðan", "fyri at forkynna eina meðan-lykkju"),
      __for: DocStr("fyri", "fyri at forkynna eina fyri-lykkju"),
      __switch: DocStr("val", "fyri at forkynna eina valstruktur"),
      __case: DocStr(
        "tilfelli",
        "fyri at forkynna eitt tilfelli í valstrukturini",
      ),
      __default: DocStr(
        "standard",
        "fyri at forkynna standardtilfellið í valstrukturini",
      ),
      __try: DocStr("royna", "fyri at forkynna eitt royna-blokk"),
      __catch: DocStr("gripa", "fyri at forkynna eitt villumeðferðarblokk"),
      __finally: DocStr(
        "tilSíðst",
        "fyri at forkynna eitt blokk sum altíð keyrir",
      ),
      __class: DocStr("klassur", "fyri at forkynna ein klassur"),
      __constructor: DocStr(
        "smiður",
        "støða fyri at forkynna atributtar í klassa",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Boðskapur",
      "Verdi",
      "Broytiligur",
      "Atributt",
      "Hlutur",
      "Vantað",
      "Móttikið",
      "Fastur_Útnevning",
      "Tvífoldig_Parametri",
      "Ráðlegging",
      "Ógildur_Token",
      "Stakkur_Yverfyltur",
      "Token",
      "Óvantað_Endir",
    ),
    main: errorMessage("VILLA", "almenn kerfis villa"),
    __TypeError: errorMessage("SLAG_VILLA", "ógildur slag í operatióninni"),
    __InitError: errorMessage(
      "UPPHAV_VILLA",
      "broytiligur er ikki upphavsstilltur",
    ),
    __ReferenceError: errorMessage(
      "TILVISING_VILLA",
      "broytiligur, fall ella bókasavn er ikki til í umfanginum",
    ),
    __SyntaxError: errorMessage("MÁLFRÆÐI_VILLA", "ógildur kóði"),
    __RangeError: errorMessage(
      "INTERVAL_VILLA",
      "verdi uttanfyri loyft interval",
    ),
    __URIError: errorMessage("URI_VILLA", "misskapat ella ógildur URI"),
    __EvalError: errorMessage("EVAL_VILLA", "villa tengt við eval"),
    __UNKNOWN_ERROR: errorMessage("ÓKEND_VILLA", "allaheilt ókend villa"),
  },

  example: {
    __array: [
      "matur",
      "lond",
      "lutir",
      "tags",
      "litir",
      "vørur",
      "brúkarar",
      "flokkar",
      "stig",
      "mál",
    ],
    __boolean: [
      "støða",
      "erVaksin",
      "erVirkur",
      "erSýniligur",
      "harLoyvi",
      "erInnskráður",
      "ervirkjað",
      "erFullgert",
      "erstaðfest",
      "erSlettað",
    ],
    __function: [
      "fáaNavn",
      "fáaVerdi",
      "meðtakaKlikk",
      "fáaGøgn",
      "formateraDato",
      "parsaInnlegg",
      "váttaForm",
      "vísaLiður",
      "dagføraStøðu",
      "roknaHeildar",
    ],
    __number: [
      "aldur",
      "ár",
      "teljarar",
      "heild",
      "prísur",
      "vísir",
      "tíðarskeid",
      "mengd",
      "stig",
      "timeout",
    ],
    __object: [
      "persónur",
      "brúkari",
      "config",
      "svar",
      "gjald",
      "stillingar",
      "profil",
      "adressa",
      "metadata",
      "løta",
    ],
    __string: [
      "navn",
      "heiti",
      "lýsing",
      "email",
      "loyniorð",
      "boðskapur",
      "merki",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "innskráning",
      "upphavsstilla",
      "reinsa",
      "endursetja",
      "eyðileggja",
      "útskráning",
      "tømaCashe",
      "goymaNíDB",
      "sendaEmail",
      "skrásetjaHending",
    ],
  },
}).grammar();
