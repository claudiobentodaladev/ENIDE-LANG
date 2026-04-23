import { Language } from "../grammar.class.js";

export const lingala = new Language({
  language: "lingala",
  about:
    "ENIDE ezali transpiler oyo ekoki kobongola mpe kopesa nzela ya kokoma na ndimi nyonso",
  include: {
    main: "Kotia",
    __description: "Esalelami mpo na kokotisa monoko to biblioteka",
  },
  commands: {
    all: {
      __about: {
        main: "MpoNa",
        __description: "kozwa makambo mpo na ENIDE",
      },
      __help: {
        main: "Lisalisi",
        __description: "kozwa liste ya mitindo nyonso oyo ezali",
      },
      __version: {
        main: "Versio",
        __description: "kozwa versio ya lelo ya ENIDE",
      },
      __languages: {
        main: "Ndimi",
        __description: "kozwa liste ya ndimi nyonso oyo ezali",
      },
      __documentation: {
        main: "Buku",
        __description: "kozwa buku ya ndimi",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "Matematike",
        __description: "kokota na misala ya matematike",
      },
      __pi: {
        main: "Pi",
        __description: "kozwa motango ya pi",
      },
      __sqrt: {
        main: "Misisa",
        __description: "kozwa misisa ya motango",
      },
      __pow: {
        main: "Nguya",
        __description: "kotombola motango na nguya",
      },
      __round: {
        main: "Zungisa",
        __description: "kozungisa motango",
      },
      __random: {
        main: "Random",
        __description: "kozwa motango ya kozanga molongo",
      },
      __max: {
        main: "Monene",
        __description: "kozwa motango monene koleka",
      },
      __min: {
        main: "Moke",
        __description: "kozwa motango moke koleka",
      },
      __isNumber: {
        main: "EzaliNomero",
        __description: "kotala soki motango ezali nomero",
      },
      __isInteger: {
        main: "EzaliMobimba",
        __description: "kotala soki motango ezali entier",
      },
      __isFloat: {
        main: "EzaliDesimale",
        __description: "kotala soki motango ezali desimale",
      },
    },
    __string: {
      main: {
        main: "Molongo",
        __description: "kokota na misala ya maloba",
      },
      __length: {
        main: "Bolayi",
        __description: "kozwa bolayi ya molongo",
      },
      __toUpperCase: {
        main: "NaMinene",
        __description: "kobongola molongo na makomi minene",
      },
      __toLowerCase: {
        main: "NaMike",
        __description: "kobongola molongo na makomi mike",
      },
    },
    __date: {
      main: {
        main: "Mokolo",
        __description: "kokota na misala ya mokolo na ntango",
      },
      __year: {
        main: "Mobu",
        __description: "kozwa mobu",
      },
      __month: {
        main: "Sanza",
        __description: "kozwa sanza",
      },
      __dayMonth: {
        main: "MokoloYaSanza",
        __description: "kozwa mokolo ya sanza",
      },
      __dayWeek: {
        main: "MokoloYaPoso",
        __description: "kozwa mokolo ya poso",
      },
      __hour: {
        main: "Ngonga",
        __description: "kozwa ngonga",
      },
      __minute: {
        main: "Miniti",
        __description: "kozwa miniti",
      },
      __second: {
        main: "Sekonde",
        __description: "kozwa sekonde",
      },
    },
  },
  types: {
    __object: {
      main: "Eloko",
      __description: "koloba eloko ya kozanga kobongwana",
    },
    __number: {
      main: "Nomero",
      __description: "koloba variable ya motango",
    },
    __string: {
      main: "Molongo",
      __description: "koloba variable ya molongo",
    },
    __boolean: {
      main: "Boleano",
      values: { __true: "Solo", __false: "Lokuta" },
      __description: "koloba variable ya solo to lokuta",
    },
  },
  methods: {
    method: {
      __print: {
        main: "Bimisa",
        __description: "kobimisa motango na ecran",
      },
      __scan: {
        main: "Tanga",
        __description: "kotanga motango epai ya mosaleli",
      },
      __return: {
        main: "Zonga",
        __description: "kozonga na motango",
      },
    },
    sentences: {
      __function: {
        main: "Mosala",
        __description: "koloba mosala",
      },
      __if: {
        main: "Soki",
        __description: "koloba kondisyo",
      },
      __else: {
        main: "SokiTe",
        __description: "koloba kondisyo mosusu",
      },
      __while: {
        main: "Tango",
        __description: "koloba boucle ya tango",
      },
      __for: {
        main: "Mpona",
        __description: "koloba boucle",
      },
      __switch: {
        main: "Pona",
        __description: "koloba structure ya kopona",
      },
      __case: {
        main: "Likambo",
        __description: "koloba likambo",
      },
      __default: {
        main: "YaSuka",
        __description: "likambo ya suka",
      },
      __try: {
        main: "Meka",
        __description: "koloba meka",
      },
      __catch: {
        main: "Kamata",
        __description: "kozwa mabunga",
      },
      __finally: {
        main: "Nsuka",
        __description: "esalema ntango nyonso",
      },
    },
  },
  errors: {
    main: {
      tag: "LIBANGELA",
      message: "Libangela ya systeme",
    },
    __UNKNOWN_ERROR: {
      tag: "LIBANGELA_EYEBANI_TE",
      message: "Libangela oyo eyebani te",
    },
    __TypeError: {
      tag: "LIBANGELA_LOBOKO",
      message: "Lolenge ya motango ezali malamu te",
    },
    __ReferenceError: {
      tag: "LIBANGELA_EZANGI",
      message: "Variable ezali te",
    },
    __SyntaxError: {
      tag: "LIBANGELA_KOMBO",
      message: "Code ezali malamu te",
    },
    __RangeError: {
      tag: "LIBANGELA_NTAKA",
      message: "Motango eleki ndelo",
    },
    __URIError: {
      tag: "LIBANGELA_URI",
      message: "URI ezali malamu te",
    },
    __EvalError: {
      tag: "LIBANGELA_EVAL",
      message: "Libangela na eval",
    },
  },
}).grammar();
