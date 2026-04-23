import { Language } from "../grammar.class.js";

export const ewe = new Language({
  language: "ewe",
  about:
    "ENIDE nye transpiler si woate gake afedeka si na nu woawo nunoglо gbe siwo kata me",
  include: {
    main: "Dekeme",
    __description: "Wozanɛ be woatsɔ gbe alo agbalẽdzraɖoƒewo ade eme",
  },
  commands: {
    all: {
      __about: {
        main: "kple",
        __description: "dze xexlẽme ENIDE ŋu",
      },
      __help: {
        main: "kpekpedenu",
        __description: "dze nyatakaka si wòte le fia ata",
      },
      __version: {
        main: "version",
        __description: "dze ENIDE version si le egbe",
      },
      __languages: {
        main: "gbegbe",
        __description: "dze gbegbe siwo kata wòte fia ata",
      },
      __documentation: {
        main: "nudodo",
        __description: "dze gbe nudodo",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "nonometata",
        __description: "zan nonometata mɔfiala",
      },
      __pi: {
        main: "PI",
        __description: "dze pi nkeke",
      },
      __sqrt: {
        main: "SiSiGa",
        __description: "dze square sisi",
      },
      __pow: {
        main: "Dodo",
        __description: "dze nome dodo",
      },
      __round: {
        main: "Vivi",
        __description: "vivi nome",
      },
      __random: {
        main: "Nuse",
        __description: "dze nuse nome",
      },
      __max: {
        main: "Ga",
        __description: "dze ga nkeke",
      },
      __min: {
        main: "Zizi",
        __description: "dze zizi nkeke",
      },
      __isNumber: {
        main: "LiNome",
        __description: "kpo be nkeke li nome",
      },
      __isInteger: {
        main: "LiNomeKpui",
        __description: "kpo be nkeke li nome kpui",
      },
      __isFloat: {
        main: "LiDesimal",
        __description: "kpo be nkeke li desimal",
      },
    },
    __string: {
      main: {
        main: "gbegble",
        __description: "zan gbegble mɔfiala",
      },
      __length: {
        main: "Didi",
        __description: "dze gbegble didi",
      },
      __toUpperCase: {
        main: "KoTuiGa",
        __description: "gblẽ gbegble yi tui ga me",
      },
      __toLowerCase: {
        main: "KoTuiZizi",
        __description: "gblẽ gbegble yi tui zizi me",
      },
    },
    __date: {
      main: {
        main: "nkeke",
        __description: "zan nkeke kple gafofo mɔfiala",
      },
      __year: {
        main: "Fe",
        __description: "dze fe",
      },
      __month: {
        main: "Gleti",
        __description: "dze gleti",
      },
      __dayMonth: {
        main: "NkekeGleti",
        __description: "dze nkeke le gleti me",
      },
      __dayWeek: {
        main: "NkekeVivo",
        __description: "dze nkeke le vivo me",
      },
      __hour: {
        main: "Gafofo",
        __description: "dze gafofo",
      },
      __minute: {
        main: "Miniti",
        __description: "dze miniti",
      },
      __second: {
        main: "Sekond",
        __description: "dze sekond",
      },
    },
  },
  types: {
    __object: { main: "nu", __description: "be woate nu le nutata me" },
    __number: {
      main: "nome",
      __description: "ɖe ŋku nome ƒe susuwɔwɔ me",
    },
    __string: {
      main: "gbegble",
      __description: "ɖe ŋku gbegble ƒe susuwɔwɔ me",
    },
    __boolean: {
      main: "bool",
      values: {
        __true: "Nyatefe",
        __false: "Alakpa",
      },
      __description: "ɖe ŋku boolean ƒe susuwɔwɔ me",
    },
  },
  methods: {
    method: {
      __print: {
        main: "fia",
        __description: "fia nkeke le ekran dzi",
      },
      __scan: {
        main: "kle",
        __description: "kle nkeke le zala ga",
      },
      __return: {
        main: "do",
        __description: "do nkeke le mɔfiala me",
      },
    },
    sentences: {
      __function: {
        main: "mofiala",
        __description: "de nku mofiala",
      },
      __if: {
        main: "ne",
        __description: "de nku kpo nyata",
      },
      __else: {
        main: "la",
        __description: "de nku kpo nyata wo",
      },
      __while: {
        main: "ge",
        __description: "de nku loop ge",
      },
      __for: {
        main: "na",
        __description: "de nku loop na",
      },
      __switch: {
        main: "tia",
        __description: "de nku tia fe nyata",
      },
      __case: {
        main: "nyata",
        __description: "de nku nyata le tia me",
      },
      __default: {
        main: "makemake",
        __description: "de nku nyata makemake",
      },
      __try: {
        main: "kpo",
        __description: "de nku kpo bloku",
      },
      __catch: {
        main: "tso",
        __description: "de nku tso geleme bloku",
      },
      __finally: {
        main: "gbato",
        __description: "de nku bloku si wo na nudodo",
      },
    },
  },
  errors: {
    main: {
      tag: "GELEME",
      message: "Geleme le sistim me",
    },
    __UNKNOWN_ERROR: {
      tag: "GELEME_VOVOTO",
      message: "Geleme si mo vovoto",
    },
    __TypeError: {
      tag: "GELEME_SUSUWOWO",
      message: "Susuwowo nyui me wowo me",
    },
    __ReferenceError: {
      tag: "GELEME_NKEKE",
      message: "Nkeke meli eme o",
    },
    __SyntaxError: {
      tag: "GELEME_SINTAKS",
      message: "Kode nyui me o",
    },
    __RangeError: {
      tag: "GELEME_DIDI",
      message: "Nkeke le didi si dzenna ata",
    },
    __URIError: {
      tag: "GELEME_URI",
      message: "URI dzra kpee meli nyui o",
    },
    __EvalError: {
      tag: "GELEME_EVAL",
      message: "Geleme si kple eval",
    },
  },
}).grammar();
