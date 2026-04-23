import { Language } from "../grammar.class.js";

export const dioula = new Language({
  language: "dioula",
  about: "ENIDE ye transpiler ye min be se ka ke kan bee la",
  include: {
    main: "Don",
    __description: "A bɛ baara kɛ ka kanyibolo walima bibliotèki don a kɔnɔ",
  },
  commands: {
    all: {
      __about: { main: "ko_kan", __description: "ka kibaru soro ENIDE ko kan" },
      __help: { main: "deme", __description: "ka yamaruya bee soro" },
      __version: { main: "version", __description: "ka ENIDE version soro" },
      __languages: { main: "kanw", __description: "ka kan bee soro" },
      __documentation: { main: "sebe", __description: "ka kan sebe soro" },
    },
  },
  library: {
    __math: {
      main: { main: "matematik", __description: "ka matematik baaraw ke" },
      __pi: { main: "PI", __description: "ka PI soro" },
      __sqrt: { main: "kene", __description: "ka kene soro" },
      __pow: { main: "fanga", __description: "ka fanga soro" },
      __round: { main: "kuru", __description: "ka jate kuru" },
      __random: { main: "fuyaw", __description: "ka jate fuyaw soro" },
      __max: { main: "belebele", __description: "ka belebele soro" },
      __min: { main: "fitini", __description: "ka fitini soro" },
      __isNumber: { main: "ye_jate_ye", __description: "k'a laje ni jate ye" },
      __isInteger: {
        main: "ye_jate_de_ye",
        __description: "k'a laje ni jate de ye",
      },
      __isFloat: {
        main: "ye_desimal_ye",
        __description: "k'a laje ni desimal ye",
      },
    },
    __string: {
      main: { main: "kumasen", __description: "ka kumasen baaraw ke" },
      __length: { main: "janya", __description: "ka kumasen janya soro" },
      __toUpperCase: {
        main: "KumasenBelebele",
        __description: "ka kumasen ke belebele ye",
      },
      __toLowerCase: {
        main: "KumasenFitini",
        __description: "ka kumasen ke fitini ye",
      },
    },
    __date: {
      main: { main: "tuma", __description: "ka tuma baaraw ke" },
      __year: { main: "san", __description: "ka san soro" },
      __month: { main: "kalo", __description: "ka kalo soro" },
      __dayMonth: { main: "don", __description: "ka kalo don soro" },
      __dayWeek: { main: "dogokun_don", __description: "ka dogokun don soro" },
      __hour: { main: "lere", __description: "ka lere soro" },
      __minute: { main: "miniti", __description: "ka miniti soro" },
      __second: { main: "segonde", __description: "ka segonde soro" },
    },
  },
  types: {
    __object: { main: "bagan", __description: "ka bagan dontolen ke" },
    __number: { main: "jate", __description: "ka jate sifa fola" },
    __string: { main: "kumasen", __description: "ka kumasen sifa fola" },
    __boolean: {
      main: "tiyene",
      values: { __true: "Tigne", __false: "Nkalon" },
      __description: "ka tiyene sifa fola",
    },
  },
  methods: {
    method: {
      __print: { main: "sebe", __description: "ka fεn sebe ecran kan" },
      __scan: { main: "kalan", __description: "ka fεn kalan" },
      __return: { main: "kasegi", __description: "ka fεn kasegi" },
    },
    sentences: {
      __function: { main: "baaraba", __description: "ka baaraba bila sen kan" },
      __if: { main: "ni", __description: "ka sarti fola" },
      __else: { main: "no_te", __description: "ka sarti were fola" },
      __while: { main: "tuma_min", __description: "ka doli bila sen kan" },
      __for: { main: "ka_soro", __description: "ka doli were bila sen kan" },
      __switch: { main: "sugandi", __description: "ka sugandili ke" },
      __case: { main: "ko", __description: "ka ko fola" },
      __default: { main: "fote", __description: "ka ko fote fola" },
      __try: { main: "segesege", __description: "ka segesege ke" },
      __catch: { main: "mine", __description: "ka fili mine" },
      __finally: { main: "laban", __description: "ka fεn bee laban" },
    },
  },
  errors: {
    main: { tag: "FILI", message: "Sistem fili" },
    __UNKNOWN_ERROR: { tag: "FILI_MA_DON", message: "Fili min ma don" },
    __TypeError: { tag: "SIFA_FILI", message: "Sifa ma nεn" },
    __ReferenceError: { tag: "REFERENS_FILI", message: "Fεn te yen" },
    __SyntaxError: { tag: "SINTAKS_FILI", message: "Sebe ma nεn" },
    __RangeError: { tag: "DAN_FILI", message: "A tεmεna dan kan" },
    __URIError: { tag: "URI_FILI", message: "URI ma nεn" },
    __EvalError: { tag: "EVAL_FILI", message: "Eval fili" },
  },
}).grammar();
