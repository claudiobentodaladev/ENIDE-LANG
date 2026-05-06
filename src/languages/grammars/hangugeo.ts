import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const hangugeo = new Language({
  language: "hangugeo",
  about:
    "ENIDE-neun eotteon eon-eoro-deun ppeurogeuraeming-eul hal su itge haejuneun beon-yeok ganeunghan teuraenseupa-illeo-imnida",

  include: DocStr(
    "Pohamhada",
    "eon-eo, laibeuleolri kkeuna deiteo gujoreul dareun paireul-eseo pohamhaneun de sayongdoebnida",
  ),

  commands: {
    __about: DocStr("jeongbo", "ENIDE-e daehan jeongboreul gajyeo-omnida"),
    __help: DocStr(
      "doummal",
      "sayong ganeunghan modeun myeong-ryeong-eo risteureul gajyeo-omnida",
    ),
    __version: DocStr("beojeon", "ENIDE-ui hyeonje beojeoneul gajyeo-omnida"),
    __languages: DocStr(
      "eon_eo",
      "sayong ganeunghan modeun eon-eo risteureul gajyeo-omnida",
    ),
    __documentation: DocStr("munsseo", "eon-eo-ui munssereul gajyeo-omnida"),
    __grammar: DocStr("munbeop", "eon-eo-ui munbeobeul gajyeo-omnida"),
  },

  library: {
    __standard: {
      main: DocStr("pyojun", "pyojun yutil messeodeue jjeok-geun-hamnida"),
      __isarray: DocStr("Baeyeol_inga", "gapsi baeyeol-inji hwakin-hamnida"),
      __isobject: DocStr("Gaeche_inga", "gapsi gaeche-inji hwakin-hamnida"),
      __typeof: DocStr("Ta_ip_hwak_in", "gapsi ta-ipeul gajyeo-omnida"),
      __parse: DocStr(
        "Bunseok",
        "munjayeol-eul olbareum ta-ipeuro byeon-hwan-hamnida",
      ),
    },

    __math: {
      main: DocStr("suhak", "suhak hamsseue jjeok-geun-hamnida"),
      __pi: DocStr("PI", "pi-ui gapseul gajyeo-omnida"),
      __sqrt: DocStr("Gegopgeun", "gegopgeuneul gajyeo-omnida"),
      __pow: DocStr("Gegop", "ssuja-ui gegobeul gajyeo-omnida"),
      __round: DocStr("Ban_ollim", "ssujareul ban-ollim-hamnida"),
      __random: DocStr("Nansu", "mujagwi ssujareul gajyeo-omnida"),
      __max: DocStr("Choedae", "choedae gapseul gajyeo-omnida"),
      __min: DocStr("Choeso", "choeso gapseul gajyeo-omnida"),
      __isNumber: DocStr("Ssuja_inga", "gapsi ssuja-inji hwakin-hamnida"),
      __isInteger: DocStr("Jeongsu_inga", "gapsi jeongsu-inji hwakin-hamnida"),
      __isFloat: DocStr("Sosu_inga", "gapsi sosu-inji hwakin-hamnida"),
      __cos: DocStr("Cos", "radian-eseo gagdo-ui kosainreul gajyeo-omnida"),
      __sin: DocStr("Sin", "radian-eseo gagdo-ui sain-eul gajyeo-omnida"),
      __tan: DocStr(
        "Tan",
        "radian-eseo gagdo-ui tan-jenteu-reul gajyeo-omnida",
      ),
    },

    __string: {
      main: DocStr("munjayeol", "munjayeol jojak hamsseue jjeok-geun-hamnida"),
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
        "Poham_yeobue",
        "munjayeol-i bu-munjayeoreul poeham-haneun-ji hwakin-hamnida",
      ),
      __repeat: DocStr(
        "Banbok_hada",
        "munjayeoreul yeoreo beon banbok-hamnida",
      ),
    },

    __date: {
      main: DocStr(
        "naljja",
        "naljja-wa ssigan jojak hamsseue jjeok-geun-hamnida",
      ),
      __now: DocStr("Jigeum", "hyeonje naljja-wa ssiganeul gajyeo-omnida"),
      __year: DocStr("Nyeon", "nyeoneul gajyeo-omnida"),
      __month: DocStr("Wol", "woreul gajyeo-omnida"),
      __dayMonth: DocStr("Il", "nareul gajyeo-omnida"),
      __dayWeek: DocStr("Yo_il", "yo-ireul gajyeo-omnida"),
      __hour: DocStr("Sigan", "ssigan-eul gajyeo-omnida"),
      __minute: DocStr("Bun", "buneul gajyeo-omnida"),
      __second: DocStr("Cho", "choreul gajyeo-omnida"),
    },
  },

  types: {
    __number: DocStr("ssuja", "ssuja hyeong-ui byeonsseureul seon-eon-hamnida"),
    __string: DocStr(
      "munjayeol",
      "munjayeol hyeong-ui byeonsseureul seon-eon-hamnida",
    ),
    __boolean: DocStr("bool", "bool hyeong-ui byeonsseureul seon-eon-hamnida"),
    __object: DocStr("gaeche", "jeongjeok gaeche reul seoneon hagi wihae"),
    __void: DocStr(
      "bimeo",
      "gapseul ban-hwan-haji aneun hamsseureul seon-eon-hamnida",
    ),
    __array: DocStr("baeyeol", "baeyeol deiteo gujoreul seon-eon-hamnida"),
  },

  specialValues: {
    __true: DocStr("Cham", "bool cham gap"),
    __false: DocStr("Geojit", "bool geojit gap"),
    __null: DocStr("Eomneun", "gap-i eomneun sangtae"),
  },

  words: {
    __new: DocStr(
      "saero",
      "keullasseu-ui sae inseuteon-seu-reul saengseong-hamnida",
    ),
    __this: DocStr(
      "i_gaeche",
      "jasin-ui keullasseu sog sokseong-e jjeok-geun-hamnida",
    ),
    __extends: DocStr(
      "sangsokhada",
      "keullasseu-ga dareun keullasseu-eseo sangsokhaneun-geol seon-eon-hamnida",
    ),
  },

  accessModifiers: {
    __private: DocStr(
      "bijeong_hyeong",
      "keullasseu nae-eseo-man jjeok-geun ganeung-hamnida",
    ),
    __public: DocStr("gong_gae", "eo-di-seo-deun jjeok-geun ganeung-hamnida"),
    __protected: DocStr(
      "bohohada",
      "keullasseu-wa ha-wi keullasseu-eseo jjeok-geun ganeung-hamnida",
    ),
    __readonly: DocStr(
      "ilgi_jeon_yong",
      "gap-eun han beon-man hal-dang-hal su isseumnida",
    ),
    __static: DocStr(
      "jeong_jeok",
      "inseuteon-seu-ga anira keullasseu jasine sog-hamnida",
    ),
  },

  methods: {
    method: {
      __print: DocStr("churyeok", "gapseul hwamyeone churyeok-hamnida"),
      __scan: DocStr("ipryeok", "ipryeok-eurobuteo gapseul ik-sseumnida"),
      __return: DocStr("ban_hwan", "hamsseue-seo gapseul ban-hwan-hamnida"),
      __break: DocStr("jung_dan", "banbokmuneul jong-ryo-hamnida"),
      __continue: DocStr(
        "gye_sok",
        "banbokmuneui da-eum ban-bok-euro neoomeumnida",
      ),
    },

    sentences: {
      __function: DocStr("hamsseu", "hamsseureul seon-eon-hamnida"),
      __if: DocStr("man_yak", "jogeonmuneul seon-eon-hamnida"),
      __else: DocStr("animyeon", "daean jogeoneul seon-eon-hamnida"),
      __while: DocStr("don_an", "while banbokmuneul seon-eon-hamnida"),
      __for: DocStr("banbok", "for banbokmuneul seon-eon-hamnida"),
      __switch: DocStr("seontaek", "seontaek gujoreul seon-eon-hamnida"),
      __case: DocStr(
        "gyeong_u",
        "seontaek gujo-ui gyeong-ureul seon-eon-hamnida",
      ),
      __default: DocStr(
        "gibon",
        "seontaek gujo-ui gibon gyeong-ureul seon-eon-hamnida",
      ),
      __try: DocStr("ssido", "try beollokeul seon-eon-hamnida"),
      __catch: DocStr("ye_oe", "ye-oe cheori beollokeul seon-eon-hamnida"),
      __finally: DocStr(
        "majimak",
        "hangsang ssilhaengdoeneun beollokeul seon-eon-hamnida",
      ),
      __class: DocStr("keullasseu", "keullasseureul seon-eon-hamnida"),
      __constructor: DocStr(
        "saengseong_ja",
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
      "Yesang_Doeun",
      "Badeun",
      "Sang_su_Hal_Dang",
      "Jungbok_Maegebyeon_su",
      "Himteu",
      "Yuhyo_Haji_Aneun_Token",
      "Seutaek_Neom_Chim",
      "Token",
      "Yesang_Chineun_Ibeollyeo_Jong_Ryo",
    ),
    main: errorMessage("ORYU", "ippan siseutem oryu"),
    __TypeError: errorMessage(
      "TA_IP_ORYU",
      "yeonssan-eseo yuhyo-haji aneun ta-ip",
    ),
    __InitError: errorMessage(
      "CHOGI_HWA_ORYU",
      "byeonsseu-ga chogi-hwadoeji aneosseobnida",
    ),
    __ReferenceError: errorMessage(
      "CHAMJO_ORYU",
      "byeonsseu, hamsseu kkeuna laibeuleolri-ga seukopeu-e jonje-haji anseumnida",
    ),
    __SyntaxError: errorMessage("GUMUN_ORYU", "yuhyo-haji aneun kodeu"),
    __RangeError: errorMessage(
      "BEOM_WI_ORYU",
      "heoyong beom-wireul beosseonan gap",
    ),
    __URIError: errorMessage("URI_ORYU", "yuhyo-haji aneun URI"),
    __EvalError: errorMessage("EVAL_ORYU", "eval hamsseu gwanryeon oryu"),
    __UNKNOWN_ERROR: errorMessage(
      "AL_SU_OMNEUN_ORYU",
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
      "eon_eo",
    ],
    __boolean: [
      "sangtae",
      "seongin_inga",
      "hwalsseong_inga",
      "bolsu_isseo",
      "gwon_han_isseo",
      "loggeuin_haesseo",
      "sayong_ganeung",
      "wan_lyo_haesseo",
      "hwak_in_haesseo",
      "sam_je_haesseo",
    ],
    __function: [
      "ireum_gajyeo",
      "gap_gajyeo",
      "keulrik_cheori",
      "deiteo_gajyeo",
      "naljja_hyeong_sik",
      "ibryeok_bunseok",
      "form_geomjeung",
      "hwamyeon_pyo_si",
      "sangtae_gab_sin",
      "hap_gye_gye_san",
    ],
    __number: [
      "na_i",
      "nyeon_do",
      "gaes_su",
      "hap_gye",
      "ga_gyeok",
      "saek_in",
      "gi_gan",
      "su_ryang",
      "jeomsu",
      "dae_gi_sigan",
    ],
    __object: [
      "sa_ram",
      "sayong_ja",
      "seol_jeong",
      "eung_dap",
      "gyeol_je",
      "hwan_gyeong_seol_jeong",
      "peulosil",
      "ju_so",
      "me_ta_deiteo",
      "se_ssyeon",
    ],
    __string: [
      "ireum",
      "je_mok",
      "seol_myeong",
      "i_me_il",
      "bi_mil_beon_ho",
      "mes_si_ji",
      "leibeol",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "ro_geu_in",
      "cho_gi_hwa",
      "jeong_ri",
      "cho_gi_hwa_da_si",
      "pa_goe",
      "ro_geu_a_ut",
      "ke_si_ji_u_gi",
      "DB_jeo_jang",
      "i_me_il_jeon_song",
      "i_ben_teu_gi_rok",
    ],
  },
}).grammar();
