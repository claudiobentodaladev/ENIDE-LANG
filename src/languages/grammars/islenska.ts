import { Language } from "../grammar.class.js";

export const islenska = new Language({
  language: "islenska",
  about:
    "ENIDE er thythjanlegur uppbyggir sem leyfir forritun a hvaða tungu sem er",
  include: {
    main: "Innifala",
    __description: "Notað til að innifala tungumál eða söfn",
  },
  commands: {
    all: {
      __about: {
        main: "um",
        __description: "til að fá upplýsingar um ENIDE",
      },
      __help: {
        main: "hjalp",
        __description: "til að fá lista yfir allar tiltækar skipanir",
      },
      __version: {
        main: "utgafa",
        __description: "til að fá gildandi útgáfu af ENIDE",
      },
      __languages: {
        main: "tungur",
        __description: "til að fá lista yfir allar tiltækar tungur",
      },
      __documentation: {
        main: "skjal",
        __description: "til að fá skjölun fyrir tungu",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "staerdfraedi",
        __description: "til að nálgast stærðfræðilegar föll",
      },
      __pi: {
        main: "PI",
        __description: "til að fá gildi pi",
      },
      __sqrt: {
        main: "FerningRot",
        __description: "til að fá ferningrót",
      },
      __pow: {
        main: "Veldi",
        __description: "til að fá veldi tölu",
      },
      __round: {
        main: "Sletta",
        __description: "til að slétta tölu",
      },
      __random: {
        main: "Slembi",
        __description: "til að fá slembitölu",
      },
      __max: {
        main: "Hamark",
        __description: "til að fá hámarksgildi",
      },
      __min: {
        main: "Lagmark",
        __description: "til að fá lágmarksgildi",
      },
      __isNumber: {
        main: "ErTala",
        __description: "til að athuga hvort gildi sé tala",
      },
      __isInteger: {
        main: "ErHeiltala",
        __description: "til að athuga hvort gildi sé heiltala",
      },
      __isFloat: {
        main: "ErTugabrot",
        __description: "til að athuga hvort gildi sé tugabrot",
      },
    },
    __string: {
      main: {
        main: "texti",
        __description: "til að nálgast strengjameðferðarföll",
      },
      __length: {
        main: "Lengd",
        __description: "til að fá lengd strengs",
      },
      __toUpperCase: {
        main: "IHastafi",
        __description: "til að breyta streng í hástafi",
      },
      __toLowerCase: {
        main: "ILagstafi",
        __description: "til að breyta streng í lágstafi",
      },
    },
    __date: {
      main: {
        main: "dagsetning",
        __description: "til að nálgast dagsetningar og tímaföll",
      },
      __year: {
        main: "Ar",
        __description: "til að fá árið",
      },
      __month: {
        main: "Manudur",
        __description: "til að fá mánuðinn",
      },
      __dayMonth: {
        main: "DagurManudur",
        __description: "til að fá dag mánaðarins",
      },
      __dayWeek: {
        main: "DagurVika",
        __description: "til að fá dag vikunnar",
      },
      __hour: {
        main: "Klukkustund",
        __description: "til að fá klukkustundina",
      },
      __minute: {
        main: "Minutu",
        __description: "til að fá mínútuna",
      },
      __second: {
        main: "Sekunda",
        __description: "til að fá sekúnduna",
      },
    },
  },
  types: {
    __object: { main: "hlutur", __description: "til að lýsa kyrrstæðum hlut" },
    __number: {
      main: "tala",
      __description: "til að lýsa breytu af gerð tala",
    },
    __string: {
      main: "strengur",
      __description: "til að lýsa breytu af gerð strengur",
    },
    __boolean: {
      main: "bool",
      values: { __true: "Satt", __false: "Osatt" },
      __description: "til að lýsa breytu af gerð bool",
    },
  },
  methods: {
    method: {
      __print: {
        main: "prenta",
        __description: "til að prenta gildi á skjáinn",
      },
      __scan: {
        main: "lesa",
        __description: "til að lesa gildi frá inntaki",
      },
      __return: {
        main: "skila",
        __description: "til að skila gildi frá falli",
      },
    },
    sentences: {
      __function: {
        main: "fall",
        __description: "til að lýsa falli",
      },
      __if: {
        main: "ef",
        __description: "til að lýsa skilyrði",
      },
      __else: {
        main: "annars",
        __description: "til að lýsa öðru skilyrði",
      },
      __while: {
        main: "medan",
        __description: "til að lýsa meðan-lykkju",
      },
      __for: {
        main: "fyrir",
        __description: "til að lýsa fyrir-lykkju",
      },
      __switch: {
        main: "val",
        __description: "til að lýsa valstrúktúr",
      },
      __case: {
        main: "tilfelli",
        __description: "til að lýsa tilfelli í valstrúktúr",
      },
      __default: {
        main: "sjalfgefid",
        __description: "til að lýsa sjálfgefna tilfellinu í valstrúktúr",
      },
      __try: {
        main: "reyna",
        __description: "til að lýsa reyna-blokk",
      },
      __catch: {
        main: "gripa",
        __description: "til að lýsa villumeðferðarblokk",
      },
      __finally: {
        main: "loks",
        __description: "til að lýsa blokk sem keyrir alltaf",
      },
    },
  },
  errors: {
    main: { tag: "VILLA", message: "Almenn kerfis villa" },
    __UNKNOWN_ERROR: {
      tag: "OKUNNUG_VILLA",
      message: "Algjorlega okunnug villa",
    },
    __TypeError: { tag: "GERDA_VILLA", message: "Ogild gerd i adgerd" },
    __ReferenceError: {
      tag: "TILVISUN_VILLA",
      message: "Breyta er ekki til i umfangi",
    },
    __SyntaxError: { tag: "MALFRAEDI_VILLA", message: "Ogildur kodi" },
    __RangeError: { tag: "BIL_VILLA", message: "Gildi utan leyfds bils" },
    __URIError: { tag: "URI_VILLA", message: "Rangt samsett eda ogild URI" },
    __EvalError: { tag: "EVAL_VILLA", message: "Villa tengd eval" },
  },
}).grammar();
