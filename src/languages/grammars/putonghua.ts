import { Language } from "../grammar.class.js";

export const putonghua = new Language({
  language: "putonghua",
  about: "ENIDE 是一个可翻译的转译器，允许使用任何语言进行编程",
  include: {
    main: "包含",
    __description: "用于包含语言或库",
  },
  commands: {
    all: {
      __about: {
        main: "关于",
        __description: "获取有关 ENIDE 的信息",
      },
      __help: {
        main: "帮助",
        __description: "获取所有可用命令的列表",
      },
      __version: {
        main: "版本",
        __description: "获取 ENIDE 的当前版本",
      },
      __languages: {
        main: "语言",
        __description: "获取所有可用语言的列表",
      },
      __documentation: {
        main: "文档",
        __description: "获取语言的文档",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "数学",
        __description: "访问数学函数",
      },
      __pi: {
        main: "圆周率",
        __description: "获取圆周率的值",
      },
      __sqrt: {
        main: "平方根",
        __description: "获取平方根",
      },
      __pow: {
        main: "幂",
        __description: "获取数字的幂",
      },
      __round: {
        main: "四舍五入",
        __description: "对数字进行四舍五入",
      },
      __random: {
        main: "随机数",
        __description: "获取一个随机数",
      },
      __max: {
        main: "最大值",
        __description: "获取最大值",
      },
      __min: {
        main: "最小值",
        __description: "获取最小值",
      },
      __isNumber: {
        main: "是数字吗",
        __description: "检查值是否为数字",
      },
      __isInteger: {
        main: "是整数吗",
        __description: "检查值是否为整数",
      },
      __isFloat: {
        main: "是浮点数吗",
        __description: "检查值是否为小数",
      },
    },
    __string: {
      main: {
        main: "字符串",
        __description: "访问字符串操作函数",
      },
      __length: {
        main: "长度",
        __description: "获取字符串长度",
      },
      __toUpperCase: {
        main: "转大写",
        __description: "将字符串转换为大写",
      },
      __toLowerCase: {
        main: "转小写",
        __description: "将字符串转换为小写",
      },
    },
    __date: {
      main: {
        main: "日期",
        __description: "访问日期和时间操作函数",
      },
      __year: {
        main: "年",
        __description: "获取年份",
      },
      __month: {
        main: "月",
        __description: "获取月份",
      },
      __dayMonth: {
        main: "日",
        __description: "获取月份中的第几天",
      },
      __dayWeek: {
        main: "星期",
        __description: "获取星期几",
      },
      __hour: {
        main: "小时",
        __description: "获取小时",
      },
      __minute: {
        main: "分钟",
        __description: "获取分钟",
      },
      __second: {
        main: "秒",
        __description: "获取秒",
      },
    },
  },
  types: {
    __object: {
      main: "对象",
      __description: "用于声明一个静态对象",
    },
    __number: {
      main: "数字",
      __description: "声明数字类型的变量",
    },
    __string: {
      main: "字符串",
      __description: "声明字符串类型的变量",
    },
    __boolean: {
      main: "布尔值",
      values: { __true: "真", __false: "假" },
      __description: "声明布尔类型的变量",
    },
  },
  methods: {
    method: {
      __print: {
        main: "打印",
        __description: "将值输出到屏幕",
      },
      __scan: {
        main: "输入",
        __description: "从输入中读取值",
      },
      __return: {
        main: "返回",
        __description: "从函数返回一个值",
      },
    },
    sentences: {
      __function: {
        main: "函数",
        __description: "声明一个函数",
      },
      __if: {
        main: "如果",
        __description: "声明一个条件",
      },
      __else: {
        main: "否则",
        __description: "声明一个备选条件",
      },
      __while: {
        main: "当",
        __description: "声明一个当型循环",
      },
      __for: {
        main: "对于",
        __description: "声明一个循环",
      },
      __switch: {
        main: "选择",
        __description: "声明一个选择结构",
      },
      __case: {
        main: "情况",
        __description: "在选择结构中声明一个分支",
      },
      __default: {
        main: "默认",
        __description: "声明选择结构的默认分支",
      },
      __try: {
        main: "尝试",
        __description: "声明一个尝试块",
      },
      __catch: {
        main: "捕获",
        __description: "声明一个错误处理块",
      },
      __finally: {
        main: "最后",
        __description: "声明一个无论如何都会执行的块",
      },
    },
  },
  errors: {
    main: {
      tag: "错误",
      message: "系统通用错误",
    },
    __UNKNOWN_ERROR: {
      tag: "未知错误",
      message: "完全未知的错误",
    },
    __TypeError: {
      tag: "类型错误",
      message: "操作中的类型无效",
    },
    __ReferenceError: {
      tag: "引用错误",
      message: "变量在作用域中不存在",
    },
    __SyntaxError: {
      tag: "语法错误",
      message: "无效的代码格式",
    },
    __RangeError: {
      tag: "范围错误",
      message: "值超出允许范围",
    },
    __URIError: {
      tag: "URI错误",
      message: "URI 格式错误或无效",
    },
    __EvalError: {
      tag: "EVAL错误",
      message: "与 eval 相关的错误",
    },
  },
}).grammar();
