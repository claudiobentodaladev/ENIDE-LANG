import { Language } from "../grammar.class.js";

export const moore = new Language({
  language: "moore",
  about: "ENIDE yaa transpiler sen seglg ta ne tigs boole faa puge",
  include: {
    main: "Paasgo",
    __description: "Tuūmd n paas buud-gomd walla sebr-roogo",
  },
  commands: {
    all: {
      __about: { main: "Kiba", __description: "ti paam bãngre ENIDE yelle" },
      __help: { main: "Songo", __description: "ti paam fãa sen be wã fãa" },
      __version: {
        main: "Versio",
        __description: "ti paam ENIDE sen be masã wã",
      },
      __languages: {
        main: "Buudu",
        __description: "ti paam buudu fãa sen be wã",
      },
      __documentation: { main: "Sebre", __description: "ti paam buudu sebre" },
    },
  },
  library: {
    __math: {
      main: { main: "Matematika", __description: "ti paam matematika tuuma" },
      __pi: { main: "Pi", __description: "ti paam PI ligdi" },
      __sqrt: { main: "Yaagre", __description: "ti paam yaagre" },
      __pow: { main: "Panga", __description: "ti paam panga" },
      __round: { main: "Gure", __description: "ti gure numero" },
      __random: {
        main: "Zaalem",
        __description: "ti paam numero sen ka seglg",
      },
      __max: { main: "Zenga", __description: "ti paam sen yɩɩda" },
      __min: { main: "Bila", __description: "ti paam sen fɩɩda" },
      __isNumber: {
        main: "YaaNumero",
        __description: "ti gese san yaa numero",
      },
      __isInteger: {
        main: "YaaIntegre",
        __description: "ti gese san yaa numero sen zemsa",
      },
      __isFloat: {
        main: "YaaDesimal",
        __description: "ti gese san yaa desimal",
      },
    },
    __string: {
      main: { main: "Gombiiri", __description: "ti paam gombiiri tuuma" },
      __length: { main: "Woglm", __description: "ti paam gombiiri woglm" },
      __toUpperCase: { main: "Kasma", __description: "ti lebg gombiiri kãsma" },
      __toLowerCase: { main: "Bilg", __description: "ti lebg gombiiri bila" },
    },
    __date: {
      main: { main: "Wakato", __description: "ti paam wakato tuuma" },
      __year: { main: "Yuumde", __description: "ti paam yuumde" },
      __month: { main: "Kiuugu", __description: "ti paam kiuugu" },
      __dayMonth: { main: "Raare", __description: "ti paam kiuug raare" },
      __dayWeek: { main: "Semena", __description: "ti paam semena raare" },
      __hour: { main: "Leer", __description: "ti paam leer" },
      __minute: { main: "Miniti", __description: "ti paam miniti" },
      __second: { main: "Segende", __description: "ti paam segende" },
    },
  },
  types: {
    __object: { main: "Tinga", __description: "n taar tinga ya paamde" },
    __number: { main: "Numero", __description: "ti wilg numero" },
    __string: { main: "Gombiiri", __description: "ti wilg gombiiri" },
    __boolean: {
      main: "Logiki",
      values: { __true: "Sida", __false: "Ziri" },
      __description: "ti wilg san yaa sɩda",
    },
  },
  methods: {
    method: {
      __print: { main: "Gulse", __description: "ti wilg yell ekrã wã puge" },
      __scan: { main: "Karem", __description: "ti karem yell" },
      __return: { main: "Lebse", __description: "ti lebse yell" },
    },
    sentences: {
      __function: { main: "Tuumde", __description: "ti seglg tuumde" },
      __if: { main: "SanYaa", __description: "ti wilg conditio" },
      __else: { main: "SanKaYaa", __description: "ti wilg yell a to" },
      __while: { main: "HalTi", __description: "ti seglg laco" },
      __for: { main: "Ti", __description: "ti seglg laco a to" },
      __switch: { main: "Yakre", __description: "ti seglg yãkre" },
      __case: { main: "Yelle", __description: "ti wilg yelle" },
      __default: { main: "NenFaa", __description: "ti wilg yell sen be faa" },
      __try: { main: "Meka", __description: "ti make" },
      __catch: { main: "Gae", __description: "ti gae kongre" },
      __finally: { main: "Baasgo", __description: "ti baas tuumde" },
    },
  },
  errors: {
    main: { tag: "KONGRE", message: "Sistem kongre" },
    __UNKNOWN_ERROR: {
      tag: "KONGRE_SEN_KA_BANG",
      message: "Kongre sen ka bang ye",
    },
    __TypeError: { tag: "KONGRE_TIPO", message: "Tipo sen ka zems ye" },
    __ReferenceError: { tag: "KONGRE_REFERENS", message: "Yell ka be ye" },
    __SyntaxError: { tag: "KONGRE_SINTAKS", message: "Gulsgo ka zems ye" },
    __RangeError: { tag: "KONGRE_LIMITI", message: "Yell yɩɩda limiti" },
    __URIError: { tag: "KONGRE_URI", message: "URI ka zems ye" },
    __EvalError: { tag: "KONGRE_EVAL", message: "Eval kongre" },
  },
}).grammar();
