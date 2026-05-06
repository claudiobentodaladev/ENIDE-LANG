import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const oshiwambo = new Language({
  language: "oshiwambo",
  about:
    "ENIDE oshi transpiler i na oku lukululwa tai holola okunyola omaprograma moshilongo shike osho",

  include: DocStr(
    "kwatelamo",
    "ohashi longithwa oku kwatela mo elaka, omambo nenge iitopolwa ya za moofaila dhilwe",
  ),

  commands: {
    __about: DocStr("kombinga", "okukola uunongo kombinga ya ENIDE"),
    __help: DocStr(
      "oshimonikilo",
      "okukola olushe lwomayambidido ngoka e li po",
    ),
    __version: DocStr("uukundi", "okukola uukundi wa paife wa ENIDE"),
    __languages: DocStr("omilaka", "okukola olushe lwomilaka ndhoka e li po"),
    __documentation: DocStr(
      "omayenditho",
      "okukola omayenditho gaka-ENIDE moshilongo",
    ),
    __grammar: DocStr("gramatika", "okukola omilandu dhomitjaneno dhelaka"),
  },

  library: {
    __standard: {
      main: DocStr("standard", "okutuatera oilandulilo yoshistandard"),
      __isarray: DocStr("oshilista", "okukamburura ngele oshi li olista"),
      __isobject: DocStr(
        "oshifo",
        "okukamburura ngele oshi li oshifo (object)",
      ),
      __typeof: DocStr("oludi", "okukola oludi lwondata"),
      __parse: DocStr(
        "nyolulula",
        "okulundulula oshitambo ko onhele yandata yooshili",
      ),
    },
    __math: {
      main: DocStr("omatjangwa", "okutuatera oilandulilo yoshomatjangwa"),
      __pi: DocStr("PI", "okukola onhele ya PI"),
      __sqrt: DocStr("etolyakvadrata", "okukola eto lya kvadrata yanomola"),
      __pow: DocStr("ondjabi", "okukola ondjabi yanomola"),
      __round: DocStr("pindula", "okupindula nomola koonomola dhopopepi"),
      __random: DocStr("oshiponga", "okukola nomola yoshiponga"),
      __max: DocStr("okuulu", "okukola onhele yokuulu mulista"),
      __min: DocStr("okudidi", "okukola onhele yokudidi mulista"),
      __isNumber: DocStr("shinomola", "okukamburura ngele oshi li onomola"),
      __isInteger: DocStr(
        "shinomolayopamwe",
        "okukamburura ngele oshi li onomola yopamwe",
      ),
      __isFloat: DocStr(
        "shifloat",
        "okukamburura ngele oshi na oshipambu (decimal)",
      ),
      __cos: DocStr("cos", "okukola cosine"),
      __sin: DocStr("sin", "okukola sine"),
      __tan: DocStr("tan", "okukola tangent"),
    },

    __string: {
      main: DocStr("oshitambo", "oilandulilo yokulonga niitambo"),
      __length: DocStr("omuraro", "okukola omuraro gwoshitambo"),
      __toUpperCase: DocStr(
        "kwaokuulu",
        "okuhulameka oshitambo koomayele okuulu",
      ),
      __toLowerCase: DocStr(
        "kwaokudidi",
        "okuhulameka oshitambo koomayele okudidi",
      ),
      __include: DocStr(
        "kwatelelmo",
        "okukamburura ngele oshitambo oshi na iitambo imwe",
      ),
      __repeat: DocStr("endulula", "okuendulula oshitambo lwiikando yontumba"),
    },

    __date: {
      main: DocStr("efimbo", "oilandulilo yefimbo noshiwike"),
      __now: DocStr("paife", "okukola efimbo noshiwike sha paife"),
      __year: DocStr("omumvo", "okukola omumvo"),
      __month: DocStr("omwedi", "okukola omwedi"),
      __dayMonth: DocStr("oshiwikeshomwedi", "okukola esiku lyomomwedi"),
      __dayWeek: DocStr("oshiwikeshoveke", "okukola esiku lyomoshiwike"),
      __hour: DocStr("ehora", "okukola ehora"),
      __minute: DocStr("ominiti", "okukola ominiti"),
      __second: DocStr("osekonde", "okukola osekonde"),
    },
  },

  types: {
    __number: DocStr("nomola", "okutula po onhele yanomola"),
    __string: DocStr("oshitambo", "okutula po onhele yoshitambo"),
    __boolean: DocStr("bool", "okutula po onhele ya bool (oshili/iifundja)"),
    __object: DocStr("oshifo", "okutula po oshifo (object)"),
    __void: DocStr("thila", "oshilonga itashi kuta onhele yasha"),
    __array: DocStr("olista", "okutula po olista"),
  },

  specialValues: {
    __true: DocStr("oshili", "eyonaholo lyoshili"),
    __false: DocStr("iifundja", "eyonaholo lyiifundja"),
    __null: DocStr("mungongo", "onhele ya thila/ka yi po"),
  },

  words: {
    __new: DocStr("oshipe", "okushitapo oshinima oshipe"),
    __this: DocStr("shika", "okupopya oshinima shoka shi li po paife"),
    __extends: DocStr(
      "thigulula",
      "okulanda po iinima mbyoka ya zi komukuluntu",
    ),
  },

  accessModifiers: {
    __private: DocStr("paumwene", "itashi vulu okumonika kondje yoshifo"),
    __public: DocStr("ayehe", "tashi monika kukehe gumwe"),
    __protected: DocStr(
      "gamwenwa",
      "tashi monika mo nange mwaandhoka dha thigulula",
    ),
    __readonly: DocStr("leshwako", "itashi vulu okulundululwa"),
    __static: DocStr("mwena", "oshanhele yimwe ayeke"),
  },

  methods: {
    method: {
      __print: DocStr("andika", "okuandika onhele peskerin"),
      __scan: DocStr("wana", "okuwana onhele okuza komulongithi"),
      __return: DocStr("kuta", "okukuta onhele koilandulilo"),
      __break: DocStr("teya", "okulonga nokuzapo muluupu"),
      __continue: DocStr("tsikila", "okuhopa koitambulwa tayilandula"),
    },

    sentences: {
      __function: DocStr("oilandulilo", "okutula po oilandulilo"),
      __if: DocStr("ongeno", "okutula po oluumbo"),
      __else: DocStr("ashike", "ngele oluumbo lwotango inalu uka"),
      __while: DocStr("manga", "okwendulula manga ongeno yi li oshiili"),
      __for: DocStr("opo", "okwendulula lwiikando yontumba"),
      __switch: DocStr("holola", "okuhogolola muuyelele owundji"),
      __case: DocStr("oshimhinga", "hogolola oshimhinga shontumba"),
      __default: DocStr("oshiho", "hogolola ngele iimhinga yilwe inayi uka"),
      __try: DocStr("yedza", "okutameka omayedzelo gokoodi"),
      __catch: DocStr("mena", "okukwata omapuko ngoka ga holoka"),
      __finally: DocStr("okupwa", "oshilonga tashi ningwa alushe pehulilo"),
      __class: DocStr("ongundu", "okutula po ongundu (class) oshipe"),
      __constructor: DocStr(
        "omushiti",
        "oilandulilo yokushita oshinima mongundu",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Etumwalaka",
      "Onhele",
      "Onheleyaadata",
      "Iinima",
      "Oshifo",
      "ShaTegelelwa",
      "ShaMonika",
      "EtuloKokonstante",
      "ParametaYaEndululwa",
      "Oshihaladhila",
      "TokenInaiLongwa",
      "PilaYaPiteya",
      "Otoken",
      "EhuliloInaliTegelelwa",
    ),
    main: errorMessage("OSHIWIFA", "oshiwifa shomisepelo yoshilonga"),
    __TypeError: errorMessage("OSHIWIFA_OMILAKA", "oludi lwondata inalu uka"),
    __InitError: errorMessage(
      "OSHIWIFA_INIT",
      "onhele inayi tulwa po nawa pevalo",
    ),
    __ReferenceError: errorMessage(
      "OSHIWIFA_OKUKOLA",
      "onhele ndjoka inayi monika",
    ),
    __SyntaxError: errorMessage(
      "OSHIWIFA_SINTAKISI",
      "okoodi inayi nyolwa nawa",
    ),
    __RangeError: errorMessage(
      "OSHIWIFA_OMURARO",
      "onhele oyi li pondje yomuraro",
    ),
    __URIError: errorMessage("OSHIWIFA_URI", "URI inayi longithwa nawa"),
    __EvalError: errorMessage("OSHIWIFA_EVAL", "oshiwifa sha eval"),
    __UNKNOWN_ERROR: errorMessage(
      "OSHIWIFA_INASHI",
      "oshiwifa inashi shimbangi",
    ),
  },

  example: {
    __array: [
      "iikulya",
      "iilongo",
      "omadhina",
      "onomola",
      "omala",
      "iinima",
      "aalongithi",
      "iitopolwa",
      "iitsa",
      "omilaka",
    ],
    __boolean: [
      "onkalo",
      "oshi_oishili",
      "vulu_okulongwa",
      "oshi_oshiwike",
      "ziminwa",
      "mo_moshisitema",
      "tashi_longwa",
      "sha_pwa",
      "kolekwa",
      "dhimwa",
    ],
    __function: [
      "etaEdhina",
      "yalulaOnhele",
      "ulikaOndata",
      "opalekaOprofila",
      "fataOshitambo",
      "konakonaOkoodi",
      "sjekkaInndata",
      "pundaOfaila",
      "tumaEtumwalaka",
      "yalulaAyishe",
    ],
    __number: [
      "oomvula",
      "omumvugwokuvalwa",
      "pokati",
      "kumwe",
      "ondando",
      "indeksi",
      "efimbo",
      "uundji",
      "iitsa",
      "ehora",
    ],
    __object: [
      "omuntu",
      "omulongithi",
      "omalongekidho",
      "eyamulo",
      "ofuto",
      "okonfiga",
      "oprofila",
      "ondjugo",
      "metadonata",
      "osheshina",
    ],
    __string: [
      "edhina",
      "oshipalanyolo",
      "oluhapu",
      "imeila",
      "oshapi",
      "etumwalaka",
      "okatagi",
      "oshapi_yofaila",
      "url",
      "opanda",
    ],
    __void: [
      "tameka",
      "dhima",
      "mweneka",
      "opaleka",
      "hanauna",
      "za_mo",
      "rydda_buffer",
      "punda_ayishe",
      "tuma",
      "pita_mo",
    ],
  },
}).grammar();
