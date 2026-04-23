import { Language } from "../grammar.class.js";

export const bulgarski = new Language({
  language: "bulgarski",
  about:
    "ENIDE e prevodim transpiler, koito pozvoliava programirane na vsiakakuv ezik",
  include: {
    main: "Vklyuchvane",
    __description: "Izpolzva se za vklyuchvane na ezik ili biblioteki",
  },
  commands: {
    all: {
      __about: {
        main: "otnosno",
        __description: "za poluchavane na informatsia za ENIDE",
      },
      __help: {
        main: "pomosht",
        __description: "za spisuk s vsichki dostupni komandi",
      },
      __version: {
        main: "versia",
        __description: "za tekushtata versia na ENIDE",
      },
      __languages: {
        main: "ezici",
        __description: "za spisuk s vsichki dostupni ezici",
      },
      __documentation: {
        main: "dokumentatsia",
        __description: "za dokumentatsiata na daden ezik",
      },
    },
  },
  library: {
    __math: {
      main: {
        main: "matematika",
        __description: "za dostup do matematicheski funktsii",
      },
      __pi: {
        main: "PI",
        __description: "za stoinostta na pi",
      },
      __sqrt: {
        main: "KorenKvadraten",
        __description: "za kvadraten koren",
      },
      __pow: {
        main: "Stepen",
        __description: "za povdiganie na chislo na stepen",
      },
      __round: {
        main: "Zakrugli",
        __description: "za zakruglyane na chislo",
      },
      __random: {
        main: "Sluchaino",
        __description: "za sluchaino chislo",
      },
      __max: {
        main: "Maks",
        __description: "za maksimalna stoinost",
      },
      __min: {
        main: "Min",
        __description: "za minimalna stoinost",
      },
      __isNumber: {
        main: "EChislo",
        __description: "proverka dali stoinostta e chislo",
      },
      __isInteger: {
        main: "ETsyaloChislo",
        __description: "proverka dali stoinostta e tsyalo chislo",
      },
      __isFloat: {
        main: "EDrobnoChislo",
        __description: "proverka dali stoinostta e drobno chislo",
      },
    },
    __string: {
      main: {
        main: "niz",
        __description: "za funktsii za rabota s tekstovi nizove",
      },
      __length: {
        main: "Dulzhina",
        __description: "za dulzhinata na niza",
      },
      __toUpperCase: {
        main: "GolemiBukvi",
        __description: "prevrushtane v golemi bukvi",
      },
      __toLowerCase: {
        main: "MalkiBukvi",
        __description: "prevrushtane v malki bukvi",
      },
    },
    __date: {
      main: {
        main: "data",
        __description: "za funktsii za rabota s data i chas",
      },
      __year: {
        main: "Godina",
        __description: "za godinata",
      },
      __month: {
        main: "Mesets",
        __description: "za mesetsa",
      },
      __dayMonth: {
        main: "DenOtMesetsa",
        __description: "za denya ot mesetsa",
      },
      __dayWeek: {
        main: "DenOtSedmitsata",
        __description: "za denya ot sedmitsata",
      },
      __hour: {
        main: "Chas",
        __description: "za chasa",
      },
      __minute: {
        main: "Minuta",
        __description: "za minutata",
      },
      __second: {
        main: "Sekunda",
        __description: "za sekundata",
      },
    },
  },
  types: {
    __object: {
      main: "obekt",
      __description: "za obyavyavane na statichen obekt",
    },
    __number: {
      main: "chislo",
      __description: "za deklarirane na promenliva ot tip chislo",
    },
    __string: {
      main: "niz",
      __description: "za deklarirane na promenliva ot tip niz",
    },
    __boolean: {
      main: "bulev",
      values: {
        __true: "Vyarno",
        __false: "Nevyarno",
      },
      __description: "za deklarirane na promenliva ot bulev tip",
    },
  },
  methods: {
    method: {
      __print: {
        main: "pechatai",
        __description: "za izvezhdane na stoinost na ekrana",
      },
      __scan: {
        main: "cheti",
        __description: "za chetene na stoinost ot vkhoda",
      },
      __return: {
        main: "vurni",
        __description: "za vrushtane na stoinost ot funktsia",
      },
    },
    sentences: {
      __function: {
        main: "funktsia",
        __description: "za deklarirane na funktsia",
      },
      __if: {
        main: "ako",
        __description: "za deklarirane na uslovie",
      },
      __else: {
        main: "inache",
        __description: "za alternativno uslovie",
      },
      __while: {
        main: "dokato",
        __description: "za while tsikul",
      },
      __for: {
        main: "za",
        __description: "za for tsikul",
      },
      __switch: {
        main: "prevkluchi",
        __description: "za struktura za izbor",
      },
      __case: {
        main: "sluchai",
        __description: "za otdelen sluchai v strukturata",
      },
      __default: {
        main: "poPodrazbirane",
        __description: "za sluchai po podrazbirane",
      },
      __try: {
        main: "opitai",
        __description: "za try blok",
      },
      __catch: {
        main: "uhvani",
        __description: "za blok za obrabotka na greshki",
      },
      __finally: {
        main: "nakraya",
        __description: "za blok koito se izpulniava vinagi",
      },
    },
  },
  errors: {
    main: {
      tag: "GRESHKA",
      message: "Obshta sistemna greshka",
    },
    __UNKNOWN_ERROR: {
      tag: "NEIZVESTNA_GRESHKA",
      message: "Napulno neizvestna greshka",
    },
    __TypeError: {
      tag: "GRESHKA_V_TIPA",
      message: "Nevaliden tip v operatsiyata",
    },
    __ReferenceError: {
      tag: "GRESHKA_V_REFERENTSIYATA",
      message: "Promenlivata ne sushtestvuva v obkhvata",
    },
    __SyntaxError: {
      tag: "SINTAKTICHNA_GRESHKA",
      message: "Nevaliden kod",
    },
    __RangeError: {
      tag: "GRESHKA_V_OBKHVATA",
      message: "Stoinostta e izvun dopustimia diapazon",
    },
    __URIError: {
      tag: "URI_GRESHKA",
      message: "Losh ili nevaliden URI",
    },
    __EvalError: {
      tag: "EVAL_GRESHKA",
      message: "Greshka svurzana s eval",
    },
  },
}).grammar();
