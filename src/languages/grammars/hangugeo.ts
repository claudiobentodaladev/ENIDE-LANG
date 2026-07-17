import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const hangugeo = new Language({
  language: "hangugeo",
  about:
    "ENIDE-neun eotteon eon-eoro-deun peurogeuraeming-eul hal su itge haejuneun dagugeo peurogeuraeming eon-eo-imnida.",
  include: DocStr(
    "Pohamhada",
    "eon-eo, laibeuleolri kkeuna deiteo gujoreul dareun paireul-eseo pohamhaneun de sayongdoebnida",
  ),

  commands: {
    __about: DocStr("Jeongbo", "ENIDE-e daehan jeongboreul gajyeo-omnida"),
    __help: DocStr(
      "Doummal",
      "sayong ganeunghan modeun myeong-ryeong-eo risteureul gajyeo-omnida",
    ),
    __version: DocStr("Beojeon", "ENIDE-ui hyeonje beojeoneul gajyeo-omnida"),
    __languages: DocStr(
      "EonEo",
      "sayong ganeunghan modeun eon-eo risteureul gajyeo-omnida",
    ),
    __documentation: DocStr("Munsseo", "eon-eo-ui munssereul gajyeo-omnida"),
    __grammar: DocStr("Munbeop", "eon-eo-ui munbeobeul gajyeo-omnida"),
  },

  library: {
    __standard: {
      main: DocStr("Pyojun", "pyojun yutil messeodeue jjeok-geun-hamnida"),
      __isarray: DocStr("BaeyeolInga", "gapsi baeyeol-inji hwakin-hamnida"),
      __isobject: DocStr("GaecheInga", "gapsi gaeche-inji hwakin-hamnida"),
      __typeof: DocStr("TaipHwakin", "gapsi ta-ipeul gajyeo-omnida"),
      __parse: DocStr(
        "Bunseok",
        "munjayeol-eul olbareum ta-ipeuro byeon-hwan-hamnida",
      ),
    },

    __math: {
      main: DocStr("Suhak", "suhak hamsseue jjeok-geun-hamnida"),
      __pi: DocStr("PI", "pi-ui gapseul gajyeo-omnida"),
      __sqrt: DocStr("Gegopgeun", "gegopgeuneul gajyeo-omnida"),
      __pow: DocStr("Gegop", "ssuja-ui gegobeul gajyeo-omnida"),
      __round: DocStr("BanOllim", "ssujareul ban-ollim-hamnida"),
      __random: DocStr("Nansu", "mujagwi ssujareul gajyeo-omnida"),
      __max: DocStr("Choedae", "choedae gapseul gajyeo-omnida"),
      __min: DocStr("Choeso", "choeso gapseul gajyeo-omnida"),
      __isNumber: DocStr("SsujaInga", "gapsi ssuja-inji hwakin-hamnida"),
      __isInteger: DocStr("JeongsuInga", "gapsi jeongsu-inji hwakin-hamnida"),
      __isFloat: DocStr("SosuInga", "gapsi sosu-inji hwakin-hamnida"),
      __cos: DocStr("Cos", "radian-eseo gagdo-ui kosainreul gajyeo-omnida"),
      __sin: DocStr("Sin", "radian-eseo gagdo-ui sain-eul gajyeo-omnida"),
      __tan: DocStr(
        "Tan",
        "radian-eseo gagdo-ui tan-jenteu-reul gajyeo-omnida",
      ),
    },

    __string: {
      main: DocStr("Munjayeol", "munjayeol jojak hamsseue jjeok-geun-hamnida"),
      __length: DocStr("Giri", "munjayeol-ui girireul gajyeo-omnida"),
      __toUpperCase: DocStr(
        "Daemunjahwa",
        "munjayeoreul daemunjaro byeon-hwan-hamnida",
      ),
      __toLowerCase: DocStr(
        "Somunjahwa",
        "munjayeoreul somunjaro byeon-hwan-hamnida",
      ),
      __include: DocStr(
        "PohamYeobue",
        "munjayeol-i bu-munjayeoreul poeham-haneun-ji hwakin-hamnida",
      ),
      __repeat: DocStr("BanbokHada", "munjayeoreul yeoreo beon banbok-hamnida"),
    },

    __date: {
      main: DocStr(
        "Naljja",
        "naljja-wa ssigan jojak hamsseue jjeok-geun-hamnida",
      ),
      __now: DocStr("Jigeum", "hyeonje naljja-wa ssiganeul gajyeo-omnida"),
      __year: DocStr("Nyeon", "nyeoneul gajyeo-omnida"),
      __month: DocStr("Wol", "woreul gajyeo-omnida"),
      __dayMonth: DocStr("Il", "nareul gajyeo-omnida"),
      __dayWeek: DocStr("Yoil", "yo-ireul gajyeo-omnida"),
      __hour: DocStr("Sigan", "ssigan-eul gajyeo-omnida"),
      __minute: DocStr("Bun", "buneul gajyeo-omnida"),
      __second: DocStr("Cho", "choreul gajyeo-omnida"),
    },
  },

  types: {
    __number: DocStr("Ssuja", "ssuja hyeong-ui byeonsseureul seon-eon-hamnida"),
    __string: DocStr(
      "Munjayeol",
      "munjayeol hyeong-ui byeonsseureul seon-eon-hamnida",
    ),
    __boolean: DocStr("Bool", "bool hyeong-ui byeonsseureul seon-eon-hamnida"),
    __object: DocStr("Gaeche", "jeongjeok gaeche reul seoneon hagi wihae"),
    __void: DocStr(
      "Bimeo",
      "gapseul ban-hwan-haji aneun hamsseureul seon-eon-hamnida",
    ),
    __array: DocStr("Baeyeol", "baeyeol deiteo gujoreul seon-eon-hamnida"),
  },

  specialValues: {
    __true: DocStr("Cham", "bool cham gap"),
    __false: DocStr("Geojit", "bool geojit gap"),
    __null: DocStr("Eomneun", "gap-i eomneun sangtae"),
  },

  words: {
    __new: DocStr(
      "Saero",
      "keullasseu-ui sae inseuteon-seu-reul saengseong-hamnida",
    ),
    __this: DocStr(
      "IGaeche",
      "jasin-ui keullasseu sog sokseong-e jjeok-geun-hamnida",
    ),
    __extends: DocStr(
      "Sangsokhada",
      "keullasseu-ga dareun keullasseu-eseo sangsokhaneun-geol seon-eon-hamnida",
    ),
  },

  accessModifiers: {
    __private: DocStr(
      "BijeongHyeong",
      "keullasseu nae-eseo-man jjeok-geun ganeung-hamnida",
    ),
    __public: DocStr("GongGae", "eo-di-seo-deun jjeok-geun ganeung-hamnida"),
    __protected: DocStr(
      "Bohohada",
      "keullasseu-wa ha-wi keullasseu-eseo jjeok-geun ganeung-hamnida",
    ),
    __readonly: DocStr(
      "IlgiJeonyong",
      "gap-eun han beon-man hal-dang-hal su isseumnida",
    ),
    __static: DocStr(
      "JeongJeok",
      "inseuteon-seu-ga anira keullasseu jasine sog-hamnida",
    ),
  },

  methods: {
    method: {
      __print: DocStr("Churyeok", "gapseul hwamyeone churyeok-hamnida"),
      __scan: DocStr("Ipryeok", "ipryeok-eurobuteo gapseul ik-sseumnida"),
      __return: DocStr("BanHwan", "hamsseue-seo gapseul ban-hwan-hamnida"),
      __break: DocStr("JungDan", "banbokmuneul jong-ryo-hamnida"),
      __continue: DocStr(
        "GyeSok",
        "banbokmuneui da-eum ban-bok-euro neoomeumnida",
      ),
    },

    sentences: {
      __function: DocStr("Hamsseu", "hamsseureul seon-eon-hamnida"),
      __if: DocStr("ManYak", "jogeonmuneul seon-eon-hamnida"),
      __else: DocStr("Animyeon", "daean jogeoneul seon-eon-hamnida"),
      __while: DocStr("Donan", "while banbokmuneul seon-eon-hamnida"),
      __for: DocStr("Banbok", "for banbokmuneul seon-eon-hamnida"),
      __switch: DocStr("Seontaek", "seontaek gujoreul seon-eon-hamnida"),
      __case: DocStr(
        "GyeongU",
        "seontaek gujo-ui gyeong-ureul seon-eon-hamnida",
      ),
      __default: DocStr(
        "Gibon",
        "seontaek gujo-ui gibon gyeong-ureul seon-eon-hamnida",
      ),
      __try: DocStr("Ssido", "try beollokeul seon-eon-hamnida"),
      __catch: DocStr("Yeoe", "ye-oe cheori beollokeul seon-eon-hamnida"),
      __finally: DocStr(
        "Majimak",
        "hangsang ssilhaengdoeneun beollokeul seon-eon-hamnida",
      ),
      __class: DocStr("Keullasseu", "keullasseureul seon-eon-hamnida"),
      __constructor: DocStr(
        "SaengseongJa",
        "keullasseu sokseong seon-eon-eul ganeunghage haneun gujoe",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Messiji",
      "Gap",
      "Byeonsseu",
      "Sokseong",
      "Gaeche",
      "YesangDoeun",
      "Badeun",
      "SangsuHalDang",
      "JungbokMaegebyeonsu",
      "Himteu",
      "YuhyoHajiAneunToken",
      "SeutaekNeomChim",
      "Token",
      "YesangChineunIbeollyeoJongRyo",
    ),
    main: errorMessage("ORYU", "ippan siseutem oryu"),
    __TypeError: errorMessage(
      "TAIPORYU",
      "yeonssan-eseo yuhyo-haji aneun ta-ip",
    ),
    __InitError: errorMessage(
      "CHOGIHWAORYU",
      "byeonsseu-ga chogi-hwadoeji aneosseobnida",
    ),
    __ReferenceError: errorMessage(
      "CHAMJOORYU",
      "byeonsseu, hamsseu kkeuna laibeuleolri-ga seukopeu-e jonje-haji anseumnida",
    ),
    __SyntaxError: errorMessage("GUMUNORYU", "yuhyo-haji aneun kodeu"),
    __RangeError: errorMessage(
      "BEOMWIORYU",
      "heoyong beom-wireul beosseonan gap",
    ),
    __URIError: errorMessage("URIORYU", "yuhyo-haji aneun URI"),
    __EvalError: errorMessage("EVALORYU", "eval hamsseu gwanryeon oryu"),
    __UNKNOWN_ERROR: errorMessage(
      "ALSUOMNEUNORYU",
      "wanjeon-hi al-su-omneun oryu",
    ),
  },

  example: {
    __array: [
      "eumsik",
      "nara",
      "hangmok",
      "taegeu",
      "saek",
      "jessum",
      "sayongja",
      "beomju",
      "jeomsu",
      "eoneo",
    ],
    __boolean: [
      "sangtae",
      "seongininga",
      "hwalsseonginga",
      "bolsuisseo",
      "gwonhanisseo",
      "loggeuinhaesseo",
      "sayongganeung",
      "wanlyohaesseo",
      "hwakinhaesseo",
      "samjehaesseo",
    ],
    __function: [
      "ireumGajyeo",
      "gapGajyeo",
      "keulrikCheori",
      "deiteoGajyeo",
      "naljjaHyeongsik",
      "ibryeokBunseok",
      "formGeomjeung",
      "hwamyeonPyosi",
      "sangtaeGabsin",
      "hapgyeGyesan",
    ],
    __number: [
      "nai",
      "nyeondo",
      "gaessu",
      "hapgye",
      "gagyeok",
      "saekin",
      "gigan",
      "suryang",
      "jeomsu",
      "daegisigan",
    ],
    __object: [
      "saram",
      "sayongja",
      "seoljeong",
      "eungdap",
      "gyeolje",
      "hwangyeongseoljeong",
      "peulosil",
      "juso",
      "metadeiteo",
      "sessyeon",
    ],
    __string: [
      "ireum",
      "jemok",
      "seolmyeong",
      "imeil",
      "bimilbeonho",
      "messiji",
      "leibeol",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "rogeuin",
      "chogihwa",
      "jeongri",
      "chogihwadasi",
      "pagoe",
      "rogeuaut",
      "kesijiuogi",
      "dbJeojang",
      "imeilJeonsong",
      "ibenteugirok",
    ],
  },
}).grammar();
