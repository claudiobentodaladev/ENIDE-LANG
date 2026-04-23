import { Language } from "../grammar.class.js";

export const malagasy = new Language({
  language: "malagasy",
  about:
    "ENIDE dia transpiler mamela anao hanao fandaharana amin ny fiteny rehetra",
  include: {
    main: "Ampidirina",
    __description: "Ampiasaina hampidirana fiteny na tahirim-boky",
  },
  commands: {
    all: {
      __about: {
        main: "Momba",
        __description: "hahazoana vaovao momba ny ENIDE",
      },
      __help: {
        main: "Fanampiana",
        __description: "hijerena ny lisitry ny baiko rehetra",
      },
      __version: { main: "Kinova", __description: "hijerena ny kinova ENIDE" },
      __languages: {
        main: "Fiteny",
        __description: "hijerena ny lisitry ny fiteny",
      },
      __documentation: {
        main: "TahirinKevitra",
        __description: "hahazoana ny tahirin kevitra",
      },
    },
  },
  library: {
    __math: {
      main: { main: "Matematika", __description: "asa matematika" },
      __pi: { main: "Pi", __description: "ny sandan ny pi" },
      __sqrt: { main: "Faka", __description: "faka efamira" },
      __pow: { main: "Hery", __description: "hery isa" },
      __round: { main: "Boribory", __description: "manao boribory isa" },
      __random: { main: "Kisendrasendra", __description: "isa kisendrasendra" },
      __max: { main: "Lehibe", __description: "isa lehibe indrindra" },
      __min: { main: "Kely", __description: "isa kely indrindra" },
      __isNumber: { main: "IsaVe", __description: "manamarina raha isa" },
      __isInteger: {
        main: "IsaFeno",
        __description: "manamarina raha isa feno",
      },
      __isFloat: {
        main: "IsaDesimaly",
        __description: "manamarina raha isa desimaly",
      },
    },
    __string: {
      main: { main: "Soratra", __description: "fikirakirana soratra" },
      __length: { main: "Halava", __description: "halavan ny soratra" },
      __toUpperCase: {
        main: "Sorabaventy",
        __description: "ovana ho sorabaventy",
      },
      __toLowerCase: {
        main: "Soramadinika",
        __description: "ovana ho soramadinika",
      },
    },
    __date: {
      main: { main: "Daty", __description: "fotoana sy daty" },
      __year: { main: "Taona", __description: "ny taona" },
      __month: { main: "Volana", __description: "ny volana" },
      __dayMonth: {
        main: "AndronNyVolana",
        __description: "ny andro amin ny volana",
      },
      __dayWeek: {
        main: "AndronNyHerinandro",
        __description: "ny andro amin ny herinandro",
      },
      __hour: { main: "Ora", __description: "ny ora" },
      __minute: { main: "Minitra", __description: "ny minitra" },
      __second: { main: "Segondra", __description: "ny segondra" },
    },
  },
  types: {
    __object: { main: "Zavatra", __description: "hanambara zavatra tsy miova" },
    __number: { main: "Isa", __description: "mamaritra ny karazana isa" },
    __string: {
      main: "Soratra",
      __description: "mamaritra ny karazana soratra",
    },
    __boolean: {
      main: "MarinaDiso",
      values: { __true: "Marina", __false: "Diso" },
      __description: "mamaritra raha marina na diso",
    },
  },
  methods: {
    method: {
      __print: { main: "Pirinty", __description: "mamoaka ny valiny" },
      __scan: { main: "Vakio", __description: "mamaky ny nampidirina" },
      __return: { main: "Avereno", __description: "mamerina ny sandan ny asa" },
    },
    sentences: {
      __function: { main: "Asa", __description: "mamaritra asa" },
      __if: { main: "Raha", __description: "fepetra" },
      __else: { main: "RahaTsyIzany", __description: "fepetra hafa" },
      __while: { main: "Mandritra", __description: "fiverenana mandritra" },
      __for: { main: "HoAnNy", __description: "fiverenana ho an ny" },
      __switch: { main: "Safidy", __description: "safidy maro" },
      __case: { main: "Tranga", __description: "tranga iray" },
      __default: { main: "Mahazatra", __description: "tranga mahazatra" },
      __try: { main: "Andramo", __description: "manandrana koda" },
      __catch: { main: "Sambory", __description: "misambotra fahadisoana" },
      __finally: { main: "Farany", __description: "eo am-pamaritana" },
    },
  },
  errors: {
    main: { tag: "DISO", message: "Fahadisoana rafitra" },
    __UNKNOWN_ERROR: {
      tag: "TSY_FANTATRA",
      message: "Fahadisoana tsy fantatra",
    },
    __TypeError: {
      tag: "DISO_KARAZANA",
      message: "Tsy mifanaraka ny karazany",
    },
    __ReferenceError: {
      tag: "DISO_FANONDROANA",
      message: "Tsy misy ny fanondroana",
    },
    __SyntaxError: { tag: "DISO_SINTAKSA", message: "Diso ny fanoratana" },
    __RangeError: { tag: "DISO_ALAVITRA", message: "Mihoatra ny fetra" },
    __URIError: { tag: "DISO_URI", message: "Diso ny URI" },
    __EvalError: { tag: "DISO_EVAL", message: "Fahadisoana amin ny eval" },
  },
}).grammar();
