import { Language } from "../grammar.class.js";

export const ellinika = new Language({
  language: "ellinika",
  about:
    "To ENIDE einai enas metafrastikos metaplittis pou epitrepei ton programmatismo se opoiadipote glossa",
  include: {
    main: "Symperilipsi",
    __description:
      "Chrisimopoieitai gia ti symperilipsi glossas i vivliothikon",
  },
  commands: {
    all: {
      __about: {
        main: "schetika",
        __description: "gia plirofories schetika me to ENIDE",
      },
      __help: {
        main: "voithia",
        __description: "gia ti lista me oles tis diathesimes entoles",
      },
      __version: {
        main: "ekdosi",
        __description: "gia tin trechousa ekdosi tou ENIDE",
      },
      __languages: {
        main: "glosses",
        __description: "gia ti lista me oles tis diathesimes glosses",
      },
      __documentation: {
        main: "tekmiriosi",
        __description: "gia tin tekmiriosi mias glossas",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "mathimatika",
        __description: "gia prosvasi se mathimatikes sinartiseis",
      },
      __pi: {
        main: "PI",
        __description: "gia tin timi tou pi",
      },
      __sqrt: {
        main: "TetragonikiRiza",
        __description: "gia tin tetradoniki riza",
      },
      __pow: {
        main: "Dinami",
        __description: "gia ti dinami enos arithmou",
      },
      __round: {
        main: "Strogilopoiisi",
        __description: "gia ti strogilopoiisi enos arithmou",
      },
      __random: {
        main: "Tychaios",
        __description: "gia enan tychaio arithmo",
      },
      __max: {
        main: "Megisto",
        __description: "gia ti megisti timi",
      },
      __min: {
        main: "Elachisto",
        __description: "gia tin elachisti timi",
      },
      __isNumber: {
        main: "EinaiArithmos",
        __description: "elenchos an mia timi einai arithmos",
      },
      __isInteger: {
        main: "EinaiAkeraios",
        __description: "elenchos an mia timi einai akiraios",
      },
      __isFloat: {
        main: "EinaiDekadikos",
        __description: "elenchos an mia timi einai dekadikos",
      },
    },
    __string: {
      main: {
        main: "alfarithmitiko",
        __description: "gia sinartiseis epexergasias keimenou",
      },
      __length: {
        main: "Mikos",
        __description: "gia to mikos enos keimenou",
      },
      __toUpperCase: {
        main: "Kefalaia",
        __description: "metatropi keimenou se kefalaia",
      },
      __toLowerCase: {
        main: "Peza",
        __description: "metatropi keimenou se peza",
      },
    },
    __date: {
      main: {
        main: "imerominia",
        __description: "gia sinartiseis imerominias kai oras",
      },
      __year: {
        main: "Etos",
        __description: "gia to etos",
      },
      __month: {
        main: "Minas",
        __description: "gia ton mina",
      },
      __dayMonth: {
        main: "ImeraMinos",
        __description: "gia tin imera tou mina",
      },
      __dayWeek: {
        main: "ImeraEvdomadas",
        __description: "gia tin imera tis evdomadas",
      },
      __hour: {
        main: "Ora",
        __description: "gia tin ora",
      },
      __minute: {
        main: "Lepto",
        __description: "gia to lepto",
      },
      __second: {
        main: "Defterolepto",
        __description: "gia to defterolepto",
      },
    },
  },
  types: {
    __object: {
      main: "antikeimeno",
      __description: "gia na dilothei ena statiko antikeimeno",
    },
    __number: {
      main: "arithmos",
      __description: "dilosi metavlitis typou arithmou",
    },
    __string: {
      main: "keimeno",
      __description: "dilosi metavlitis typou keimenou",
    },
    __boolean: {
      main: "logiki",
      values: {
        __true: "Alithes",
        __false: "Pseudes",
      },
      __description: "dilosi metavlitis typou logikis",
    },
  },
  methods: {
    method: {
      __print: {
        main: "ektypose",
        __description: "emfanisi timis stin othoni",
      },
      __scan: {
        main: "diavasma",
        __description: "anagnosi timis apo tin eisodo",
      },
      __return: {
        main: "epistrofi",
        __description: "epistrofi timis apo sinartisi",
      },
    },
    sentences: {
      __function: {
        main: "sinartisi",
        __description: "dilosi sinartisis",
      },
      __if: {
        main: "an",
        __description: "dilosi sinthikis",
      },
      __else: {
        main: "allios",
        __description: "dilosi enallaktikis sinthikis",
      },
      __while: {
        main: "oso",
        __description: "dilosi vrogchou while",
      },
      __for: {
        main: "gia",
        __description: "dilosi vrogchou for",
      },
      __switch: {
        main: "epilogi",
        __description: "dilosi domis epilogis",
      },
      __case: {
        main: "periptosi",
        __description: "dilosi periptosis stin epilogi",
      },
      __default: {
        main: "proepilogi",
        __description: "dilosi proepilegmenis periptosis",
      },
      __try: {
        main: "dokimi",
        __description: "dilosi blok dokimis",
      },
      __catch: {
        main: "syllipsi",
        __description: "dilosi blok chirismou sfalmatos",
      },
      __finally: {
        main: "telika",
        __description: "dilosi blok pou ekteleitai panta",
      },
    },
  },
  errors: {
    main: {
      tag: "SFALMA",
      message: "Geniko sfalma systimatos",
    },
    __UNKNOWN_ERROR: {
      tag: "AGNOSTO_SFALMA",
      message: "Pliros agnosto sfalma",
    },
    __TypeError: {
      tag: "SFALMA_TYPOU",
      message: "Mi egkiros typos stin praxi",
    },
    __ReferenceError: {
      tag: "SFALMA_ANAFORAS",
      message: "I metavliti den iparchei sto emveleia",
    },
    __SyntaxError: {
      tag: "SFALMA_SYNTAXIS",
      message: "Mi egkiros kodikas",
    },
    __RangeError: {
      tag: "SFALMA_EMVELEIAS",
      message: "I timi einai ekto epitreptou oriou",
    },
    __URIError: {
      tag: "SFALMA_URI",
      message: "Kakochismenos i mi egkiros URI",
    },
    __EvalError: {
      tag: "SFALMA_EVAL",
      message: "Sfalma schetiko me tin eval",
    },
  },
}).grammar();
