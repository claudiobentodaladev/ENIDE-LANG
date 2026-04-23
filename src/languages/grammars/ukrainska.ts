import { Language } from "../grammar.class.js";

export const ukrainska = new Language({
  language: "ukrainska",
  about:
    "ENIDE - tse transpilyator, yakyy mozhna perekladaty, shcho dozvolyaye prohramuvaty bud-yakoyu movoyu",

  include: {
    main: "Vklyuchyty",
    __description: "Vykorystovuyet'sya dlya vklyuchennya movy abo bibliotek",
  },

  commands: {
    all: {
      __about: {
        main: "ProEnide",
        __description: "shchob otrymaty informatsiyu pro ENIDE",
      },
      __help: {
        main: "Dopomoha",
        __description: "shchob otrymaty spisok usikh dostupnykh komand",
      },
      __version: {
        main: "Versiya",
        __description: "shchob otrymaty potochnu versiyu ENIDE",
      },
      __languages: {
        main: "Movy",
        __description: "shchob otrymaty spisok usikh dostupnykh mov",
      },
      __documentation: {
        main: "Dokumentatsiya",
        __description: "shchob otrymaty dokumentatsiyu dlya movy",
      },
    },
  },

  library: {
    __math: {
      main: {
        main: "Matematyka",
        __description: "dlya dostupu do matematychnykh funktsiy",
      },
      __pi: {
        main: "PI",
        __description: "shchob otrymaty znachennya pi",
      },
      __sqrt: {
        main: "Korin",
        __description: "shchob otrymaty kvadratnyy korin",
      },
      __pow: {
        main: "Stepin",
        __description: "shchob pidnesty chyslo do stepenya",
      },
      __round: {
        main: "Okruhlyty",
        __description: "shchob okruhlyty chyslo",
      },
      __random: {
        main: "Vipadkovo",
        __description: "shchob otrymaty vipadkove chyslo",
      },
      __max: {
        main: "Maksymum",
        __description: "shchob otrymaty maksymalne znachennya",
      },
      __min: {
        main: "Minimum",
        __description: "shchob otrymaty minimalne znachennya",
      },
      __isNumber: {
        main: "TseChyslo",
        __description: "shchob pereviryty chy ye znachennya chyslom",
      },
      __isInteger: {
        main: "TseTsile",
        __description: "shchob pereviryty chy ye znachennya tsilym chyslom",
      },
      __isFloat: {
        main: "TseDrobove",
        __description: "shchob pereviryty chy ye znachennya drobovym",
      },
    },

    __string: {
      main: {
        main: "Ryadok",
        __description: "dlya dostupu do funktsiy manipulyatsiyi ryadkamy",
      },
      __length: {
        main: "Dovzhyna",
        __description: "shchob otrymaty dovzhynu ryadka",
      },
      __toUpperCase: {
        main: "VelykiBukvy",
        __description: "shchob peretvoryty ryadok u velyki bukvy",
      },
      __toLowerCase: {
        main: "MaliBukvy",
        __description: "shchob peretvoryty ryadok u mali bukvy",
      },
    },

    __date: {
      main: {
        main: "Data",
        __description:
          "dlya dostupu do funktsiy manipulyatsiyi datoyu ta chasom",
      },
      __year: {
        main: "Rik",
        __description: "shchob otrymaty rik",
      },
      __month: {
        main: "Misyats",
        __description: "shchob otrymaty misyats",
      },
      __dayMonth: {
        main: "DenMisyatsya",
        __description: "shchob otrymaty den misyatsya",
      },
      __dayWeek: {
        main: "DenTyzhnya",
        __description: "shchob otrymaty den tyzhnya",
      },
      __hour: {
        main: "Hodyna",
        __description: "shchob otrymaty hodynu",
      },
      __minute: {
        main: "Khvilyna",
        __description: "shchob otrymaty khvilynu",
      },
      __second: {
        main: "Sekunda",
        __description: "shchob otrymaty sekundu",
      },
    },
  },

  types: {
    __object: {
      main: "Obiekt",
      __description: "dlya oholoshennia statychnoho obiekta",
    },
    __number: {
      main: "Chyslo",
      __description: "shchob oholosyty zminnu typu chyslo",
    },
    __string: {
      main: "Ryadok",
      __description: "shchob oholosyty zminnu typu ryadok",
    },
    __boolean: {
      main: "Lohik",
      values: { __true: "Istyna", __false: "Khyba" },
      __description: "shchob oholosyty zminnu lohichnoho typu",
    },
  },

  methods: {
    method: {
      __print: {
        main: "Druk",
        __description: "shchob vyvesty znachennya na ekran",
      },
      __scan: {
        main: "Skan",
        __description: "shchob prochytaty znachennya z vvodu",
      },
      __return: {
        main: "Povernuty",
        __description: "shchob povernuty znachennya z funktsiyi",
      },
    },

    sentences: {
      __function: {
        main: "Funktsiya",
        __description: "shchob oholosyty funktsiyu",
      },
      __if: {
        main: "Yakshcho",
        __description: "shchob oholosyty umovu",
      },
      __else: {
        main: "Inakshe",
        __description: "shchob oholosyty alternativnu umovu",
      },
      __while: {
        main: "Poky",
        __description: "shchob oholosyty tsykl while",
      },
      __for: {
        main: "Dlya",
        __description: "shchob oholosyty tsykl for",
      },
      __switch: {
        main: "Perekluchaty",
        __description: "shchob oholosyty strukturu vyboru",
      },
      __case: {
        main: "Vypadok",
        __description: "shchob oholosyty vypadok u strukturi vyboru",
      },
      __default: {
        main: "Standart",
        __description: "shchob oholosyty standartnyy vypadok",
      },
      __try: {
        main: "Sprobuvaty",
        __description: "shchob oholosyty blok sproby",
      },
      __catch: {
        main: "Spiymaty",
        __description: "shchob oholosyty blok obrobky pomylok",
      },
      __finally: {
        main: "Vreshti",
        __description: "shchob oholosyty blok yakyy vykonuyetsya zavzhdy",
      },
    },
  },

  errors: {
    main: {
      tag: "POMYLKA",
      message: "Zahalna pomylka systemy",
    },
    __UNKNOWN_ERROR: {
      tag: "NevidomaPomylka",
      message: "Povnistyu nevidoma pomylka",
    },
    __TypeError: {
      tag: "PomylkaTypu",
      message: "Neprypustymyy typ v operatsiyi",
    },
    __ReferenceError: {
      tag: "PomylkaPosylannya",
      message: "Zminna ne isnuye v oblasti vydymosti",
    },
    __SyntaxError: {
      tag: "PomylkaSyntaksysu",
      message: "Neprypustymyy kod",
    },
    __RangeError: {
      tag: "PomylkaDiapazonu",
      message: "Znachennya poza dopustymym diapazonom",
    },
    __URIError: {
      tag: "PomylkaUri",
      message: "Nepravylynyy abo nevalidnyy URI",
    },
    __EvalError: {
      tag: "PomylkaEval",
      message: "Pomylka povyazana z eval",
    },
  },
}).grammar();
