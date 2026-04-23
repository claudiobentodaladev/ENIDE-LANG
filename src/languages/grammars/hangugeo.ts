import { Language } from "../grammar.class.js";

export const hangugeo = new Language({
  language: "hangugeo",
  about:
    "ENIDE-neun eotteon eon-eoro-deun ppeurogeuraeming-eul hal su itge haejuneun beon-yeok ganeunghan teuraenseupa-illeo-imnida",
  include: {
    main: "Pohamhada",
    __description: "Eoneona laibeuleolileul pohamhaneun de sayongdoebnida",
  },
  commands: {
    all: {
      __about: {
        main: "jeongbo",
        __description: "ENIDE-e daehan jeongboreul gajyeo-omnida",
      },
      __help: {
        main: "doummal",
        __description:
          "sayong ganeunghan modeun myeong-ryeong-eo risteureul gajyeo-omnida",
      },
      __version: {
        main: "beojeon",
        __description: "ENIDE-ui hyeonje beojeoneul gajyeo-omnida",
      },
      __languages: {
        main: "eon_eo",
        __description:
          "sayong ganeunghan modeun eon-eo risteureul gajyeo-omnida",
      },
      __documentation: {
        main: "munsseo",
        __description: "eon-eo-ui munssereul gajyeo-omnida",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "suhak",
        __description: "suhak hamsseue jjeok-geun-hamnida",
      },
      __pi: {
        main: "PI",
        __description: "pi-ui gapseul gajyeo-omnida",
      },
      __sqrt: {
        main: "Gegopgeun",
        __description: "gegopgeuneul gajyeo-omnida",
      },
      __pow: {
        main: "Gegop",
        __description: "ssuja-ui gegobeul gajyeo-omnida",
      },
      __round: {
        main: "Ban_ollim",
        __description: "ssujareul ban-ollim-hamnida",
      },
      __random: {
        main: "Nansu",
        __description: "mujagwi ssujareul gajyeo-omnida",
      },
      __max: {
        main: "Choedae",
        __description: "choedae gapseul gajyeo-omnida",
      },
      __min: {
        main: "Choeso",
        __description: "choeso gapseul gajyeo-omnida",
      },
      __isNumber: {
        main: "Ssuja_inga",
        __description: "gapsi ssuja-inji hwakin-hamnida",
      },
      __isInteger: {
        main: "Jeongsu_inga",
        __description: "gapsi jeongsu-inji hwakin-hamnida",
      },
      __isFloat: {
        main: "Sosu_inga",
        __description: "gapsi sosu-inji hwakin-hamnida",
      },
    },
    __string: {
      main: {
        main: "munjayeol",
        __description: "munjayeol jojak hamsseue jjeok-geun-hamnida",
      },
      __length: {
        main: "Giri",
        __description: "munjayeol-ui girireul gajyeo-omnida",
      },
      __toUpperCase: {
        main: "Daemunjahwa",
        __description: "munjayeoreul daemunjaro byeon-hwan-hamnida",
      },
      __toLowerCase: {
        main: "Somunjahwa",
        __description: "munjayeoreul somunjaro byeon-hwan-hamnida",
      },
    },
    __date: {
      main: {
        main: "naljja",
        __description: "naljja-wa ssigan jojak hamsseue jjeok-geun-hamnida",
      },
      __year: {
        main: "Nyeon",
        __description: "nyeoneul gajyeo-omnida",
      },
      __month: {
        main: "Wol",
        __description: "woreul gajyeo-omnida",
      },
      __dayMonth: {
        main: "Il",
        __description: "nareul gajyeo-omnida",
      },
      __dayWeek: {
        main: "Yo_il",
        __description: "yo-ireul gajyeo-omnida",
      },
      __hour: {
        main: "Sigan",
        __description: "ssigan-eul gajyeo-omnida",
      },
      __minute: {
        main: "Bun",
        __description: "buneul gajyeo-omnida",
      },
      __second: {
        main: "Cho",
        __description: "choreul gajyeo-omnida",
      },
    },
  },
  types: {
    __object: {
      main: "gaeche",
      __description: "jeongjeok gaeche reul seoneon hagi wihae",
    },
    __number: {
      main: "ssuja",
      __description: "ssuja hyeong-ui byeonsseureul seon-eon-hamnida",
    },
    __string: {
      main: "munjayeol",
      __description: "munjayeol hyeong-ui byeonsseureul seon-eon-hamnida",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Cham",
        __false: "Geojit",
      },
      __description: "bool hyeong-ui byeonsseureul seon-eon-hamnida",
    },
  },
  methods: {
    method: {
      __print: {
        main: "churyeok",
        __description: "gapseul hwamyeone churyeok-hamnida",
      },
      __scan: {
        main: "ipryeok",
        __description: "ipryeok-eurobuteo gapseul ik-sseumnida",
      },
      __return: {
        main: "ban_hwan",
        __description: "hamsseue-seo gapseul ban-hwan-hamnida",
      },
    },
    sentences: {
      __function: {
        main: "hamsseu",
        __description: "hamsseureul seon-eon-hamnida",
      },
      __if: {
        main: "man_yak",
        __description: "jogeonmuneul seon-eon-hamnida",
      },
      __else: {
        main: "animyeon",
        __description: "daean jogeoneul seon-eon-hamnida",
      },
      __while: {
        main: "don_an",
        __description: "while banbokmuneul seon-eon-hamnida",
      },
      __for: {
        main: "banbok",
        __description: "for banbokmuneul seon-eon-hamnida",
      },
      __switch: {
        main: "seontaek",
        __description: "seontaek gujoreul seon-eon-hamnida",
      },
      __case: {
        main: "gyeong_u",
        __description: "seontaek gujo-ui gyeong-ureul seon-eon-hamnida",
      },
      __default: {
        main: "gibon",
        __description: "seontaek gujo-ui gibon gyeong-ureul seon-eon-hamnida",
      },
      __try: {
        main: "ssido",
        __description: "try beollokeul seon-eon-hamnida",
      },
      __catch: {
        main: "ye_oe",
        __description: "ye-oe cheori beollokeul seon-eon-hamnida",
      },
      __finally: {
        main: "majimak",
        __description: "hangsang ssilhaengdoeneun beollokeul seon-eon-hamnida",
      },
    },
  },
  errors: {
    main: {
      tag: "ORYU",
      message: "Ippan siseutem oryu",
    },
    __UNKNOWN_ERROR: {
      tag: "AL_SU_OMNEUN_ORYU",
      message: "Wanjeon-hi al-su-omneun oryu",
    },
    __TypeError: {
      tag: "TA_IP_ORYU",
      message: "Yeonssan-eseo yuhyo-haji aneun ta-ip",
    },
    __ReferenceError: {
      tag: "CHAMJO_ORYU",
      message: "Seuko-peu-e byeonsseuga jonje-haji anseumnida",
    },
    __SyntaxError: {
      tag: "GUMUN_ORYU",
      message: "Yuhyo-haji aneun kodeu",
    },
    __RangeError: {
      tag: "BEOM_WI_ORYU",
      message: "Heoyong beom-wireul beosseonan gaps",
    },
    __URIError: {
      tag: "URI_ORYU",
      message: "Yuhyo-haji aneun URI",
    },
    __EvalError: {
      tag: "EVAL_ORYU",
      message: "eval hamsseu gwanryeon oryu",
    },
  },
}).grammar();
