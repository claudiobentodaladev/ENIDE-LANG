import { Language } from "../grammar.class.js";

export const zhongwen = new Language({
  language: "zhongwen",
  about:
    "ENIDE shi yige ke fanyi de yuan daima zhuanhuangi, yingxu shiyong rhenhe yuyan biancheng",
  include: {
    main: "BaoHan",
    __description: "Yong yu bao han yu yan huo ku",
  },
  commands: {
    all: {
      __about: {
        main: "GuanYu",
        __description: "huoqu guanyu ENIDE de xinxi",
      },
      __help: {
        main: "BangZhu",
        __description: "huoqu suoyou keyong mingling de liebiao",
      },
      __version: {
        main: "BanBen",
        __description: "huoqu ENIDE de dangqian banben",
      },
      __languages: {
        main: "YuYan",
        __description: "huoqu suoyou keyong yuyan de liebiao",
      },
      __documentation: {
        main: "WenDang",
        __description: "huoqu yuyan de wendang",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "ShuXue",
        __description: "fangwen shuxue hanshu",
      },
      __pi: {
        main: "PI",
        __description: "huoqu pi de zhi",
      },
      __sqrt: {
        main: "PingFangGen",
        __description: "huoqu pingfanggen",
      },
      __pow: {
        main: "Mi",
        __description: "huoqu shuzi de mi",
      },
      __round: {
        main: "SiSheWuRu", // Correção principal
        __description: "dui shuzi jinxing sishiwuru",
      },
      __random: {
        main: "SuiJi",
        __description: "huoqu suijishu",
      },
      __max: {
        main: "ZuiDaZhi",
        __description: "huoqu zuidazhi",
      },
      __min: {
        main: "ZuiXiaoZhi",
        __description: "huoqu zuixiaozhi",
      },
      __isNumber: {
        main: "ShiShuZi",
        __description: "jiancha zhi shifou wei shuzi",
      },
      __isInteger: {
        main: "ShiZhengShu",
        __description: "jiancha zhi shifou wei zhengshu",
      },
      __isFloat: {
        main: "ShiXiaoShu",
        __description: "jiancha zhi shifou wei xiaoshu",
      },
    },
    __string: {
      main: {
        main: "ZiFuChuan",
        __description: "fangwen zifuchuan caozuo hanshu",
      },
      __length: {
        main: "ChangDu",
        __description: "huoqu zifuchuan changdu",
      },
      __toUpperCase: {
        main: "ZhuanDaXie",
        __description: "jiang zifuchuan zhuanhuan wei daxie",
      },
      __toLowerCase: {
        main: "ZhuanXiaoXie",
        __description: "jiang zifuchuan zhuanhuan wei xiaoxie",
      },
    },
    __date: {
      main: {
        main: "RiQi",
        __description: "fangwen riqi he shijian caozuo hanshu",
      },
      __year: {
        main: "Nian",
        __description: "huoqu nianfen",
      },
      __month: {
        main: "Yue",
        __description: "huoqu yuefen",
      },
      __dayMonth: {
        main: "Ri",
        __description: "huoqu yue fen de riqi",
      },
      __dayWeek: {
        main: "XingQi",
        __description: "huoqu xingqi ji",
      },
      __hour: {
        main: "XiaoShi",
        __description: "huoqu xiaoshi",
      },
      __minute: {
        main: "FenZhong",
        __description: "huoqu fenzhong",
      },
      __second: {
        main: "Miao",
        __description: "huoqu miao",
      },
    },
  },
  types: {
    __object: {
      main: "DuiXiang",
      __description: "yongyu shengming yige jingzhi duixiang",
    },
    __number: {
      main: "ShuZi",
      __description: "shengming shuzi leixing de bianliang",
    },
    __string: {
      main: "ZiFuChuan",
      __description: "shengming zifuchuan leixing de bianliang",
    },
    __boolean: {
      main: "BuLin",
      values: { __true: "Zhen", __false: "Jia" },
      __description: "shengming bulin leixing de bianliang",
    },
  },
  methods: {
    method: {
      __print: {
        main: "DaYin",
        __description: "zai pingmu shang dayin zhi",
      },
      __scan: {
        main: "ShuRu",
        __description: "cong shuru zhong dudu zhi",
      },
      __return: {
        main: "FanHui",
        __description: "cong hanshu fanhui zhi",
      },
    },
    sentences: {
      __function: {
        main: "HanShu",
        __description: "shengming hanshu",
      },
      __if: {
        main: "RuGuo",
        __description: "shengming tiaojian",
      },
      __else: {
        main: "FouZe",
        __description: "shengming beixuan tiaojian",
      },
      __while: {
        main: "Dang",
        __description: "shengming while xunhuan",
      },
      __for: {
        main: "XunHuan",
        __description: "shengming for xunhuan",
      },
      __switch: {
        main: "KaiGuan",
        __description: "shengming xuanze jiegou",
      },
      __case: {
        main: "QingKuang",
        __description: "shengming xuanze jiegou zhong de qingkuang",
      },
      __default: {
        main: "MoRen",
        __description: "shengming moren qingkuang",
      },
      __try: {
        main: "ChangShi", // Correção semântica
        __description: "shengming try kuai",
      },
      __catch: {
        main: "BuHuo", // Correção semântica
        __description: "shengming cuowu chuli kuai",
      },
      __finally: {
        main: "ZuiHou",
        __description: "shengming zong shi zhixing de kuai",
      },
    },
  },
  errors: {
    main: {
      tag: "CUOWU",
      message: "XiTong tongyong cuowu",
    },
    __UNKNOWN_ERROR: {
      tag: "WEI_ZHI_CUOWU",
      message: "WanQuan wei zhi de cuowu",
    },
    __TypeError: {
      tag: "LEI_XING_CUOWU",
      message: "CaoZuo zhong de wu xiao lei xing",
    },
    __ReferenceError: {
      tag: "YIN_YONG_CUOWU",
      message: "BianLiang zai zuo yong yu nei bu cun zai",
    },
    __SyntaxError: {
      tag: "YU_FA_CUOWU",
      message: "WuXiao de dai ma",
    },
    __RangeError: {
      tag: "FAN_WEI_CUOWU",
      message: "Zhi chao chu le ying xu fan wei",
    },
    __URIError: {
      tag: "URI_CUOWU",
      message: "GeShi yi chang huo wu xiao de URI",
    },
    __EvalError: {
      tag: "EVAL_CUOWU",
      message: "Yu eval you guan de cuowu",
    },
  },
}).grammar();
