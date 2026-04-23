import { Language } from "../grammar.class.js";

export const sango = new Language({
  language: "sango",

  about: "ENIDE zo transpiler ngu a fa program na yeke zo biani",

  include: {
    main: "Zi",
    __description:
      "A sala na ni ti zi yanga ti kodoro wala abibliotheque, na yeke kanga ti kodoro ti program",
  },

  commands: {
    all: {
      __about: {
        main: "na",
        __description: "na tene na ENIDE, a fa ndenge systeme na sara",
      },

      __help: {
        main: "sara",
        __description: "a kanga liste ti koda nyonso na yeke na ENIDE",
      },

      __version: {
        main: "tenu",
        __description: "a yeke fanga tenu ti ENIDE na systeme",
      },

      __languages: {
        main: "yeke",
        __description: "a kanga liste ti ndia nyonso ti language na ENIDE",
      },

      __documentation: {
        main: "mbeti",
        __description: "mbeti nyonso ti ndenge ENIDE a sara na ndenge a yeke",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "matika",
        __description: "module ti namba na matematika, a sara calcul nyonso",
      },

      __pi: {
        main: "PI",
        __description: "namba PI, a yeke constant na matematika",
      },

      __sqrt: {
        main: "finiSquare",
        __description: "operation ti kufini square ti namba nyonso",
      },

      __pow: {
        main: "force",
        __description: "a yeke pesa force na namba, na sens ti puissance",
      },

      __round: {
        main: "veke",
        __description: "a kanga namba na valeur ya proche",
      },

      __random: {
        main: "londo",
        __description: "a zenga namba na ndenge ya hasard",
      },

      __max: {
        main: "nzoni",
        __description: "a pona namba ya mingi kati na ba valeurs",
      },

      __min: {
        main: "pere",
        __description: "a pona namba ya moke kati na ba valeurs",
      },

      __isNumber: {
        main: "nambaNa",
        __description: "a tala soki valeur a yeke namba",
      },

      __isInteger: {
        main: "nambaToto",
        __description: "a tala soki namba a yeke entier sans decimal",
      },

      __isFloat: {
        main: "desimal",
        __description: "a tala soki namba a yeke na partie decimal",
      },
    },

    __string: {
      main: {
        main: "mbeto",
        __description: "module ti ba texte na manipulation ti ba chaines",
      },

      __length: {
        main: "leke",
        __description: "a pesa longueur ya mbeto",
      },

      __toUpperCase: {
        main: "mbetoNzoni",
        __description: "a change ba lettres nyonso na majuscule",
      },

      __toLowerCase: {
        main: "mbetoPere",
        __description: "a change ba lettres nyonso na minuscule",
      },
    },

    __date: {
      main: {
        main: "lo",
        __description: "module ti temps na ba date nyonso",
      },

      __year: {
        main: "ngbo",
        __description: "a pesa annee ya date",
      },

      __month: {
        main: "nze",
        __description: "a pesa mois ya date",
      },

      __dayMonth: {
        main: "loNze",
        __description: "a pesa jour na kati ya mois",
      },

      __dayWeek: {
        main: "loWeek",
        __description: "a pesa jour ya semaine",
      },

      __hour: {
        main: "ape",
        __description: "a pesa heure ya moment",
      },

      __minute: {
        main: "miniti",
        __description: "a pesa minute ya temps",
      },

      __second: {
        main: "sekonde",
        __description: "a pesa seconde ya temps",
      },
    },
  },

  types: {
    __object: {
      main: "lo",
      __description: "type ya object, structure ya ba donnees",
    },

    __number: {
      main: "namba",
      __description: "type ya valeur numerique",
    },

    __string: {
      main: "mbeto",
      __description: "type ya texte na ba chaines",
    },

    __boolean: {
      main: "bool",
      values: {
        __true: "ta",
        __false: "mvene",
      },
      __description: "type ya vrai ou faux",
    },
  },

  methods: {
    method: {
      __print: {
        main: "vo",
        __description: "a lakisa valeur na ecran",
      },

      __scan: {
        main: "sese",
        __description: "a zua donnee na user",
      },

      __return: {
        main: "eke",
        __description: "a zonga valeur na fonction",
      },
    },

    sentences: {
      __function: {
        main: "sara",
        __description: "a kela fonction ya code",
      },

      __if: {
        main: "na",
        __description: "condition ya verification",
      },

      __else: {
        main: "nga",
        __description: "alternative ya condition",
      },

      __while: {
        main: "tene",
        __description: "loop oyo e zongaka soki condition ezali vrai",
      },

      __for: {
        main: "nge",
        __description: "loop ya repetition na compteur",
      },

      __switch: {
        main: "supu",
        __description: "structure ya choix mingi",
      },

      __case: {
        main: "lo",
        __description: "cas moko na switch",
      },

      __default: {
        main: "ndeke",
        __description: "cas par defaut",
      },

      __try: {
        main: "mbi",
        __description: "bloc ya test ya erreur",
      },

      __catch: {
        main: "ndo",
        __description: "bloc ya capture ya erreur",
      },

      __finally: {
        main: "peko",
        __description: "bloc oyo e sala toujours",
      },
    },
  },

  errors: {
    main: {
      tag: "BALUA",
      message: "balua ti systeem, probleme esalami",
    },

    __UNKNOWN_ERROR: {
      tag: "BALUA_LONDO",
      message: "balua oyo eyebani te",
    },

    __TypeError: {
      tag: "BALUA_YEKE",
      message: "type ya valeur ezali mabe",
    },

    __ReferenceError: {
      tag: "BALUA_TENE",
      message: "reference e zangi to e fandi te",
    },

    __SyntaxError: {
      tag: "BALUA_SINTAKS",
      message: "erreur ya structure ya code",
    },

    __RangeError: {
      tag: "BALUA_LEKE",
      message: "valeur eleki limite",
    },

    __URIError: {
      tag: "BALUA_URI",
      message: "erreur ya URI",
    },

    __EvalError: {
      tag: "BALUA_EVAL",
      message: "erreur ya eval",
    },
  },
}).grammar();
